#testing how to get project metadata from Blockly XML

import xml.dom.minidom

doc = xml.dom.minidom.parse("example.xml");

vals = doc.getElementsByTagName("value")
author = "-"
desc = "-"
for e in vals:
    #print e.getAttribute("name")
    if e.getAttribute("name") == "project_author":
        vals2 = e.getElementsByTagName("field")
        
        for e2 in vals2:
            if e2.getAttribute("name") == "TEXT" and e2.nodeName == "field":
                author=e2.firstChild.nodeValue

    if e.getAttribute("name") == "project_name":
        vals2 = e.getElementsByTagName("field")
        
        for e2 in vals2:
            if e2.getAttribute("name") == "TEXT" and e2.nodeName == "field":
                desc= e2.firstChild.nodeValue

print "Author = " + author
print "Desc = " + desc





#<block type="project_metadata" x="362" y="88">
    #<field name="NAME">Project INFO</field>
    #<field name="project_author">Author</field>
    #<field name="project_iot_id">IOT ID</field>
    #<field name="project_description">Description</field>
    #<value name="project_author">
        #<block type="text">
            #<field name="TEXT">Rafael</field>
        #</block>
    #</value>
    #<value name="project_iot_id">
        #<block type="math_number">
            #<field name="NUM">123</field>
        #</block>
    #</value>
    #<value name="project_name">
        #<block type="text">
            #<field name="TEXT">My project</field>
        #</block>
    #</value>
#</block>

