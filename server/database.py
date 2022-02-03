import sqlite3
import uuid
import re
from flask import g, current_app

# Dummy uid generator
def uid(len):
    return str(uuid.uuid4()).replace('-','')[:len]

# Replace in time columns to return unix time
def unixtime(cols):
  _cols = []
  reg = re.compile(r'(lastEdited|createdAt)')
  for col in cols:
    _cols.append(reg.sub(r"strftime('%s', \1)", col))
  return _cols

# Connect to db
def connect(database):
    if 'db' not in g:
        g.db =  sqlite3.connect(
            current_app.config[database],
            detect_types = sqlite3.PARSE_DECLTYPES
        )  
        g.db.row_factory = sqlite3.Row
    return g.db

# Close db
def close(e=None):
    db = g.pop('db', None)

    if db is not None:
        db.close()


# Get data from database
def select(database, table_name, columns, *args):
    db = connect(database)

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
def fetch(database, table_name, columns, where):
    db = connect(database)

    str_c = ', '.join(columns)
    exec = f'select {str_c} from {table_name} where {where[0]} = ?'
    data = db.execute(exec, (where[1],)).fetchone() 
    db.close()

    return (table_name, columns, data)

# Insert new data to database
def insert(database, table_name, columns, values):
    db = connect(database)

    str_c = ', '.join(columns) 
    q_mark = ', '.join('?' for c in columns)

    exec = f'insert into {table_name} ({str_c}) values ({q_mark})' 
    db.execute(exec, values)
    db.commit()
    db.close()
    
    return (table_name, columns)

# Remove data if values match
def delete(database, table_name, columns, values):
    db = connect(database)
    
    str_c = ', '.join(columns)
    q_mark = ', '.join('?' for c in columns)
    
    exec = f'delete from {table_name} where ({str_c}) = ({q_mark})'
    db.execute(exec, values)
    
    db.commit()
    db.close()
    
    return (table_name, columns)

# Update data to database
def update(database, table_name, columns, values):
    db = connect(database)
    
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


