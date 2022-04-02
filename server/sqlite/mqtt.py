#------------------------------------------------------------------------
# SQL Macro to create new table
sql_macro_table = """
create table {} (
  uuid blob primary key,
  lastEdited datetime not null default(cast((julianday('now') - 2440587.5)*86400000 as integer)),
  topic varchar(18) not null,
  data text not null
);
"""

#------------------------------------------------------------------------
# Generate the database the first time, call only from the Makefile
def make():
    import sqlite3
    db = sqlite3.connect('server/mqtt.db')
    db.commit()
    db.close()

