"""

Blockly Demo: Storage

"""

__author__ = "rafaelaroca@gmail.com (Rafael Aroca) based on the code of q.neutron@gmail.com (Quynh Neutron)"

import cgi
import hashlib
from random import randint
from google.cloud import ndb


class Xml(ndb.Model):
  # A row in the database.
  xml_hash = ndb.IntegerProperty()
  xml_content = ndb.TextProperty()
  xml_author = ndb.TextProperty()
  xml_date = ndb.TextProperty()
  xml_desc = ndb.TextProperty()
  


def keyGen():
  # Generate a random string of length KEY_LEN.
  KEY_LEN = 6
  CHARS = "abcdefghijkmnopqrstuvwxyz23456789"  # Exclude l, 0, 1.
  max_index = len(CHARS) - 1
  return "".join([CHARS[randint(0, max_index)] for x in range(KEY_LEN)])


def xmlToKey(xml_content):
  # Store XML and return a generated key.
  xml_hash = int(hashlib.sha1(xml_content.encode("utf-8")).hexdigest(), 16)
  xml_hash = int(xml_hash % (2 ** 64) - (2 ** 63))
  lookup_query = Xml.query(Xml.xml_hash == xml_hash)
  client = ndb.Client()
  with client.context():
    lookup_result = lookup_query.get()
    if lookup_result:
      xml_key = lookup_result.key.string_id()
    else:
      trials = 0
      result = True
      while result:
        trials += 1
        if trials == 100:
          raise Exception("Sorry, the generator failed to get a key for you.")
        xml_key = keyGen()
        result = Xml.get_by_id(xml_key)
      row = Xml(id = xml_key, xml_hash = xml_hash, xml_content = xml_content)
      row.put()
  return xml_key


def keyToXml(key_provided):
  # Retrieve stored XML based on the provided key.
  # Normalize the string.
  key_provided = key_provided.lower().strip()
  # Check datastore for a match.
  client = ndb.Client()
  with client.context():
    result = Xml.get_by_id(key_provided)
  if not result:
    xml = ""
  else:
    xml = result.xml_content
  return xml


def app(environ, start_response):
  forms = cgi.FieldStorage(fp=environ['wsgi.input'], environ=environ)

  out='<html><body><center>BIPES Blocks shared by the Community :-)</center>'
  
  client = ndb.Client()
  with client.context():
      res = Xml.query().fetch()
  if not res:
      out+="<br><center>No shared blocks :-(<br>"
  else:
      out+="<br><br><center>Shared blocks (click to access the program):<br>"
      out+="<table border=1><tr><td>Link to access</td><td><center>Author</center></td><td><center>Date</center></td><td><center>Description</center></td></tr>"
      for k in res:
          linkOld = str(k.xml_hash)
          link = xmlToKey(k.xml_content) # I dont like this, but cant access id() from ndb
          #link = str(k.id())
          try:
              out+="<tr><td><a href=http://bipes.net.br/beta2/ui/#" + link + " target=_blank>" + link + "</a></td><td>" + k.xml_author + "</td><td>" + k.xml_date + "</td><td>" + k.xml_desc + "</td></tr>"
          except:
              out+="<tr><td><a href=http://bipes.net.br/beta2/ui/#" + link + " target=_blank>" + link + "</a></td><td>.</td><td>.</td><td>-</td></tr>"
          
          #out+="Valor: " + str(k.xml_hash) + " "
      out+="</table>"
      out+='<center><A HREF="javascript:history.go(0)">Refresh list</A></center>'
        

  out+="</body></html>"


  headers = [
    ("Content-Type", "text/html")
  ]
  start_response("200 OK", headers)
  return [out.encode("utf-8")]
