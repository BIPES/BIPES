#------------------------------------------------------------------------
# SQL Macro to create new table with trigger
sql_macro_table = """
drop table if exists projects;

create table projects (
  uid varchar(6) primary key,
  auth varchar(18) not null,
  author varchar(25) not null,
  name varchar(100) not null,
  createdAt numeric(16,6) not null default(extract(epoch from current_timestamp::timestamp with time zone)::numeric(16,6)),
  lastEdited numeric(16,6) not null default(extract(epoch from current_timestamp::timestamp with time zone)::numeric(16,6)),
  data text not null
);

create or replace function update_epoch()
returns trigger as $$
begin
  new.lastEdited = extract(epoch from current_timestamp::timestamp with time zone)::numeric(16,6);
  return new;
end;
$$ language plpgsql;

create trigger update_projects
before update of author, name, data on projects
for each row
when (old.* is distinct from new.*)
execute procedure update_epoch();
"""

#------------------------------------------------------------------------
# Generate the database the first time, call only from the Makefile
def make():
    from configparser import ConfigParser
    import psycopg

    conf = ConfigParser()
    conf.read('server/conf.ini')

    with psycopg.connect("postgres://{user}:{password}@{host}:{port}"\
        .format(user=conf['postgresql']['user'], \
                password=conf['postgresql']['password'], \
                host=conf['postgresql']['host'], \
                port=5432,\
                database=conf['postgresql']['database_api'] \
                )) as db:
        db.execute(sql_macro_table)
