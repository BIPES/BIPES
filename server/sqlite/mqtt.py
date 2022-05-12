#------------------------------------------------------------------------
# SQL Macro to create new table
sql_macro_table = """
create table {} (
  uuid blob primary key,
  lastEdited numeric(16,6) not null default(cast((julianday('now') - 2440587.5)*86400000 as numeric(16,6))),
  topic varchar(18) not null,
  data text not null
);
"""

#------------------------------------------------------------------------
# Generate the database for the first time.
# Only the Makefile should call it.
def make():
    import sqlite3
    db = sqlite3.connect('server/mqtt.db')
    db.commit()
    db.close()

