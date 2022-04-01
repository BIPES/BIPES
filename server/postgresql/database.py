import psycopg

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
        _url = "postgres://{user}:{password}@{host}:{port}"\
                    .format(user=current_app.config['POSTGRESQL_USER'], \
                            password=current_app.config['POSTGRESQL_PASSWORD'], \
                            host=current_app.config['POSTGRESQL_HOST'], \
                            port=5432,\
                            database=current_app.config['POSTGRESQL_DATABASE'] \
                            )
        g.db =  psycopg.connect(_url)
        # g.db.row_factory = sqlite3.Row
    return g.db

# Close db
def close(e=None):
    db = g.pop('db', None)

    if db is not None:
        db.close()

# Exec sql
def exec(__db, sql):
    db = __db if isinstance(__db, psycopg.Connection) else connect(__db)
    data = db.execute(sql)
    db.commit()
    return

# Check if has table
def has_table(__db, table_name):
    db = __db if isinstance(__db, psycopg.Connection) else connect(__db)
    sql = 'select count(name) from sqlite_master where type="table" and name = %s'
    data = db.execute(sql, table_name).fetchone()

    exist = False
    if data[0] == 1:
      exist = True
    return exist

# Get data from database
def select(__db, table_name, columns, *args):
    db = __db if isinstance(__db, psycopg.Connection) else connect(__db)

    str_c = ', '.join(columns)

    sql = f'select {str_c} from {table_name}'
    if len(args) == 2:
        sql += f' where lastEdited < %s'
    sql += ' order by lastEdited desc'
    if len(args) == 2:
        sql += f' limit %s'
        data = db.execute(sql, (args[0], args[1])).fetchall()
    else:
        data = db.execute(sql).fetchall()

    db.close()

    return (table_name, columns, data)


# Get data from database
def select_where(__db, table_name, where, columns, *args):
    db = __db if isinstance(__db, psycopg.Connection) else connect(__db)

    str_c = ', '.join(columns)

    sql = f'select {str_c} from {table_name} where {where[0]} = %s'
    if len(args) == 2:
        sql += f' where lastEdited < %s'
    sql += ' order by lastEdited desc'
    if len(args) == 2:
        sql += f' limit %s'
        data = db.execute(sql, (where[1], args[0], args[1])).fetchall()
    else:
        data = db.execute(sql, (where[1],)).fetchall()

    db.close()

    return (table_name, columns, data)


# Get data from database
def select_distinct(__db, table_name, columns, *args):
    db = __db if isinstance(__db, psycopg.Connection) else connect(__db)

    str_c = ', '.join(columns)

    sql = f'select distinct {str_c} from {table_name}'
    if len(args) == 2:
        sql += f' where lastEdited < %s'
    sql += ' order by lastEdited desc'
    if len(args) == 2:
        sql += f' limit %s'
        data = db.execute(sql, (args[0], args[1])).fetchall()
    else:
        data = db.execute(sql).fetchall()

    db.close()

    return (table_name, columns, data)

# Fetch data from database
def fetch(__db, table_name, columns, where):
    db = __db if isinstance(__db, psycopg.Connection) else connect(__db)

    str_c = ', '.join(columns)
    sql = f'select {str_c} from {table_name} where {where[0]} = %s'
    data = db.execute(sql, (where[1],)).fetchone()
    db.close()

    return (table_name, columns, data)

# Insert new data to database
def insert(__db, table_name, columns, values):
    db = __db if isinstance(__db, psycopg.Connection) else connect(__db)

    str_c = ', '.join(columns)
    q_mark = ', '.join('%s' for c in columns)

    sql = f'insert into {table_name} ({str_c}) values ({q_mark})'
    db.execute(sql, values)
    db.commit()
    db.close()

    return (table_name, columns)

# Remove data if values match
def delete(__db, table_name, columns, values):
    db = __db if isinstance(__db, psycopg.Connection) else connect(__db)

    str_c = ', '.join(columns)
    q_mark = ', '.join('%s' for c in columns)

    sql = f'delete from {table_name} where ({str_c}) = ({q_mark})'
    db.execute(sql, values)

    db.commit()
    db.close()

    return (table_name, columns)

# Update data to database
def update(__db, table_name, columns, values):
    db = __db if isinstance(__db, psycopg.Connection) else connect(__db)

    str_c1 = ', '.join(columns[-2:])
    q_mark1 = ', '.join('%s' for c in columns[-2:])
    str_c2 = ', '.join(columns[:-2])
    q_mark2 = ', '.join('%s' for c in columns[:-2])
    sql = f'update {table_name} set ({str_c2}) = ({q_mark2}) where ({str_c1}) = ({q_mark1})'
    db.execute(sql, values)
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
