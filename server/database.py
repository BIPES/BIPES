import sqlite3

import click
from flask import (
      Blueprint, flash, g, redirect, render_template, request, session,
      current_app
  )
from flask.cli import with_appcontext
import functools
import uuid
import json
import re


#------------------------------------------------------------------------
# Generate the database the first time, call only from the Makefile
def make():
    db = sqlite3.connect('database.db')
  
    with open('database.sql') as f:
        db.executescript(f.read())

    db.commit()
    db.close()

#--------------------------------------------------------------------------
# Blueprint
bp = Blueprint('api', __name__, url_prefix='/api')

#---------------------------------------------------------------------------
# Generic handlers

# Dummy uid generator
def db_uid(len):
    return str(uuid.uuid4()).replace('-','')[:len]

# Replace in time columns to return unix time
def db_in_unixtime(cols):
  _cols = []
  reg = re.compile(r'(lastEdited|createdAt)')
  for col in cols:
    _cols.append(reg.sub(r"strftime('%s', \1)", col))
  return _cols

# Connect to db
def db_connect():
    if 'db' not in g:
        print(current_app.config['DATABASE'])
        g.db =  sqlite3.connect(
            current_app.config['DATABASE'],
            detect_types = sqlite3.PARSE_DECLTYPES
        )  
        g.db.row_factory = sqlite3.Row
    
    return g.db

# Close db
def db_close(e=None):
    db = g.pop('db', None)

    if db is not None:
        db.close()


# Get data from database
def db_select(table_name, columns, *args):
    db = db_connect()

    str_c = ', '.join(columns)

    exec = f'select {str_c} from {table_name}'
    if len(args) == 2:
        exec += f' where lastEdited < ?'
    exec += ' order by lastEdited desc'
    if len(args) == 2:
        exec += f' limit ?'
        data = db.execute(exec, (args[0], args[1])).fetchall() 
    else:
        data = db.execute(exec).fetchall()
 
    db.close()

    return (table_name, columns, data)

# Fetch data from database
def db_fetch(table_name, columns, where):
    db = db_connect()

    str_c = ', '.join(columns)
    
    exec = f'select {str_c} from {table_name} where {where[0]} = ?'
    data = db.execute(exec, (where[1],)).fetchone() 
    db.close()

    return (table_name, columns, data)

# Insert new data to database
def db_insert(table_name, columns, values):
    db = db_connect()

    str_c = ', '.join(columns) 
    q_mark = ', '.join('?' for c in columns)

    exec = f'insert into {table_name} ({str_c}) values ({q_mark})' 
    db.execute(exec, values)
    db.commit()
    db.close()
    
    return (table_name, columns)

# Remove data if values match
def db_delete(table_name, columns, values):
    db = db_connect()
    
    str_c = ', '.join(columns)
    q_mark = ', '.join('?' for c in columns)
    
    exec = f'delete from {table_name} where ({str_c}) = ({q_mark})'
    db.execute(exec, values)
    
    db.commit()
    db.close()
    
    return (table_name, columns)

# Update data to database
def db_update(table_name, columns, values):
    db = db_connect()
    
    str_c1 = ', '.join(columns[-2:])
    q_mark1 = ', '.join('?' for c in columns[-2:])
    str_c2 = ', '.join(columns[:-2])
    q_mark2 = ', '.join('?' for c in columns[:-2])
    exec = f'update {table_name} set ({str_c2}) = ({q_mark2}) where ({str_c1}) = ({q_mark1})'
    print (exec)
    db.execute(exec, values)
    db.commit()
    db.close()
    
    return (table_name, columns)

# Convert db rows to json
# The tuple data is table name, columns name and data rows.
def rows_to_json(data, single=False):
    table_name = data[0]
    columns = data[1]
    json_list = []
    json_output = {table_name: json_list}
    if single is False:
        rows = data[2]
        for row in rows:
            json_dict = dict(zip(columns, row))
            json_list.append(json_dict)
    else:
        row = data[2]
        json_dict = dict(zip(columns, row))
        json_list.append(json_dict) 
        
    return json_output 

#---------------------------------------------------------------------------
# API routes, JSON requests

# Get shared projects
@bp.route('/project/ls', methods=('POST', 'GET'))
def project_ls():
    obj = request.json
    cols = ['uid','author','name','lastEdited']

    if obj != None and 'from' in obj and 'limit' in obj:
        return rows_to_json(db_select('projects', cols, obj['from'], obj['limit']))
    else:
        return rows_to_json(db_select('projects', cols))



# Get a shared project
@bp.route('/project/o', methods=('GET', 'POST'))
def project_o():
    obj = request.json
    cols = ['uid','auth','author','name','lastEdited', 'data']
      
    if 'uid' in obj:
      _fetch = db_fetch('projects', cols, ['uid', obj['uid']])
      return {} if _fetch[2] is None else rows_to_json(_fetch, single=True)


# Share a project
@bp.route('/project/cp', methods=('GET', 'POST'))
def project_cp():
    obj = request.json
    name = obj['data']['project']['name']
    author = obj['data']['project']['author']
    
    uid = db_uid(6)
    token = db_uid(6)
    auth = token + obj['cors_token']
    
    db_insert('projects',
        ['uid','auth','author','name','data'],
        (uid, auth, author, name, json.dumps(obj['data'])))
   
    return {'uid':uid, 'token':token}

# Unshare a project
@bp.route('/project/rm', methods=('GET', 'POST'))
def project_rm():
    obj = request.json
    uid = obj['uid']
    auth = obj['token'] + obj['cors_token']
  
    db_delete('projects', ['uid', 'auth'], [uid, auth])
  
    return {'uid':uid}

# Update a project
@bp.route('/project/w', methods=('GET', 'POST'))
def project_w():
    obj = request.json
    name = obj['data']['project']['name']
    author = obj['data']['project']['author']
    
    uid = obj['data']['project']['shared']['uid']
    auth = obj['data']['project']['shared']['token'] + obj['cors_token']
    # Remove token
    obj['data']['project']['shared']['uid'] = ''
    obj['data']['project']['shared']['token'] = ''
    
    db_update('projects',
        ['author','name','data','uid','auth'],
        (author, name, json.dumps(obj['data']), uid, auth)) 
  
    return {'uid':uid}
 

# Check is a object has a attribute, can also return another attribute if true
def has_in (name, array, attr, return_attr=None):
    for item in array:
        if getattr(item, attr) == name:
            if (return_attr==None):
                return True
            else:
                return getattr(item, return_attr)
    return False


