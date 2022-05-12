#------------------------------------------------------------------------
# SQL Macro to create new table and trigger
sql_macro_table = """
drop table if exists projects;

create table projects (
  uid varchar(6) primary key,
  auth varchar(18) not null,
  author varchar(25) not null,
  name varchar(100) not null,
  createdAt  numeric(16,6) not null default(cast((julianday('now') - 2440587.5)*86400 as numeric(16,6))),
  lastEdited numeric(16,6) not null default(cast((julianday('now') - 2440587.5)*86400 as numeric(16,6))),
  data text not null
);

create trigger update_projects update of author, name, data on projects
begin
  update projects set lastEdited = cast((julianday('now') - 2440587.5)*86400 as numeric(16,6)) where auth = old.auth;
end;
"""

#------------------------------------------------------------------------
# Generate the database the first time, call only from the Makefile
def make():
    import sqlite3
    db = sqlite3.connect('server/api.db')

    db.executescript(sql_macro_table)

    db.commit()
    db.close()
