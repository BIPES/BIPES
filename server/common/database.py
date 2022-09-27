import uuid
import re
from flask import g, current_app

# Dummy uid generator
def uid(len):
    return str(uuid.uuid4()).replace('-','')[:len]

# Get db instance
def get_db(__db):
    if current_app.config['DATABASE'] == 'sqlite':
        import sqlite3
        return __db if isinstance(__db, sqlite3.Connection) else connect(__db)
    elif current_app.config['DATABASE'] == 'postgresql':
        import psycopg
        return __db if isinstance(__db, psycopg.Connection) else connect(__db)

# Replace %s with ? if sqlite
def _s(sql):
    if current_app.config['DATABASE'] == 'sqlite':
        return sql.replace('%s', '?')
    else:
        return sql

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
        if current_app.config['DATABASE'] == 'sqlite':
            import sqlite3
            g.db =  sqlite3.connect(
                current_app.config[database],
                detect_types = sqlite3.PARSE_DECLTYPES
            )
            g.db.row_factory = sqlite3.Row
        elif current_app.config['DATABASE'] == 'postgresql':
            import psycopg
            _url = "postgres://{user}:{password}@{host}:{port}"\
                        .format(user=current_app.config['POSTGRESQL_USER'], \
                                password=current_app.config['POSTGRESQL_PASSWORD'], \
                                host=current_app.config['POSTGRESQL_HOST'], \
                                port=5432,\
                                database=current_app.config['POSTGRESQL_DATABASE_' + database] \
                                )
            g.db =  psycopg.connect(_url)
    return g.db

# Close db
def close(e=None):
    if g.db is not None:
        g.db.close()

    g.pop('db', None)

# Exec sql
def exec(__db, _sql, identifier = None):
    db = get_db(__db)
    if identifier is None:
        data = db.execute(_sql)
    else:
        if current_app.config['DATABASE'] == 'postgresql':
            from psycopg import sql
            data = db.execute(sql.SQL(_sql).format(sql.Identifier(identifier)))
        elif current_app.config['DATABASE'] == 'sqlite':
            data = db.execute(_sql.format(identifier))
    db.commit()
    # Notice that exec does NOT close the database
    return

# Check if has table
def has_table(__db, table_name):
    db = get_db(__db)
    if current_app.config['DATABASE'] == 'sqlite':
        _sql = "select count(name) from sqlite_master where type='table' and name = %s"
    elif current_app.config['DATABASE'] == 'postgresql':
        _sql = "select count(table_name) from information_schema.tables where table_schema like 'public' and table_type like 'BASE TABLE' and table_name = %s"

    data = db.execute(_s(_sql), table_name).fetchone()

    exist = False
    if data[0] == 1:
      exist = True
    return exist

# Get data from database
def select(__db, table_name, columns, *args):
    db = get_db(__db)
    str_c = ', '.join(columns)

    _sql = ' order by lastEdited desc'
    if len(args) == 2:
        _sql = ' where lastEdited < %s' + _sql + ' limit %s'

    if current_app.config['DATABASE'] == 'postgresql':
        from psycopg import sql
        _sql = f'select {str_c} from ' + '{} ' + _sql
        _sql = sql.SQL(_sql).format(sql.Identifier(table_name))
    elif current_app.config['DATABASE'] == 'sqlite':
        _sql = f'select {str_c} from {table_name}' + _sql

    if len(args) == 2:
        data = db.execute(_s(_sql), (args[0], args[1])).fetchall()
    else:
        data = db.execute(_s(_sql)).fetchall()

    db.close()
    return (table_name, columns, data)


# Get data from database
def select_where(__db, table_name, where, columns, *args):
    db = get_db(__db)

    str_c = ', '.join(columns)

    __sql = ' order by lastEdited desc'
    if len(args) == 2:
        __sql = ' where lastEdited < %s' + __sql + ' limit %s'

    if current_app.config['DATABASE'] == 'postgresql':
        from psycopg import sql
        __sql = f'select {str_c} from ' + '{}' + f' where {where[0]} = %s' + __sql
        _sql = sql.SQL(__sql).format(sql.Identifier(table_name))
    elif current_app.config['DATABASE'] == 'sqlite':
        _sql = f'select {str_c} from {table_name} where {where[0]} = %s' + __sql

    if len(args) == 2:
        data = db.execute(_s(_sql), (where[1], args[0], args[1])).fetchall()
    else:
        data = db.execute(_s(_sql), (where[1],)).fetchall()

    db.close()

    return (table_name, columns, data)


# Get data from database
def select_distinct(__db, table_name, columns, *args):
    db = get_db(__db)

    str_c = ', '.join(columns)

    if current_app.config['DATABASE'] == 'postgresql':
        from psycopg import sql
        __sql = f'select distinct {str_c}' + ' from {}'
        _sql = sql.SQL(__sql).format(sql.Identifier(table_name))
    elif current_app.config['DATABASE'] == 'sqlite':
        _sql = f'select distinct {str_c} from {table_name}'
    if len(args) == 2:
        _sql += f' where lastEdited < %s'
    if len(args) == 2:
        _sql += f' limit %s'
        data = db.execute(_s(_sql), (args[0], args[1])).fetchall()
    else:
        data = db.execute(_s(_sql)).fetchall()

    db.close()

    return (table_name, columns, data)

# Fetch data from database
def fetch(__db, table_name, columns, where):
    db = get_db(__db)

    str_c = ', '.join(columns)

    if current_app.config['DATABASE'] == 'postgresql':
        from psycopg import sql
        __sql = f'select {str_c} from ' + '{}' + f' where {where[0]} = %s'
        _sql = sql.SQL(__sql).format(sql.Identifier(table_name))
    elif current_app.config['DATABASE'] == 'sqlite':
        _sql = f'select {str_c} from {table_name} where {where[0]} = %s'

    data = db.execute(_s(_sql), (where[1],)).fetchone()
    db.close()

    return (table_name, columns, data)

# Insert new data to database
def insert(__db, table_name, columns, values):
    db = get_db(__db)

    str_c = ', '.join(columns)
    q_mark = ', '.join('%s' for c in columns)

    if current_app.config['DATABASE'] == 'postgresql':
        from psycopg import sql
        __sql = 'insert into {}' + f' ({str_c}) values ({q_mark})'
        _sql = sql.SQL(__sql).format(sql.Identifier(table_name))
    elif current_app.config['DATABASE'] == 'sqlite':
        _sql = f'insert into {table_name} ({str_c}) values ({q_mark})'

    db.execute(_s(_sql), values)
    db.commit()
    db.close()

    return (table_name, columns)

# Remove data if values match
def delete(__db, table_name, columns, values):
    db = get_db(__db)

    str_c = ', '.join(columns)
    q_mark = ', '.join('%s' for c in columns)

    if current_app.config['DATABASE'] == 'postgresql':
        from psycopg import sql
        __sql = 'delete from {}' + f' where ({str_c}) = ({q_mark})'
        _sql = sql.SQL(__sql).format(sql.Identifier(table_name))
    elif current_app.config['DATABASE'] == 'sqlite':
        _sql = f'delete from {table_name} where ({str_c}) = ({q_mark})'

    db.execute(_s(_sql), values)

    db.commit()
    db.close()

    return (table_name, columns)

# Update data to database
def update(__db, table_name, columns, values):
    db = get_db(__db)

    str_c1 = ', '.join(columns[-2:])
    q_mark1 = ', '.join('%s' for c in columns[-2:])
    str_c2 = ', '.join(columns[:-2])
    q_mark2 = ', '.join('%s' for c in columns[:-2])
    sql = f'update {table_name} set ({str_c2}) = ({q_mark2}) where ({str_c1}) = ({q_mark1})'
    db.execute(_s(sql), values)
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
