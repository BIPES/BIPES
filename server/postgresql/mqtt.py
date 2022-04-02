# SQL Macro to create new table
sql_macro_table = """
create table {} (
  uuid uuid default uuid_generate_v4(),
  lastEdited integer not null default(extract(epoch from current_timestamp::timestamp with time zone)::integer) not null,
  topic varchar(18) not null,
  data text not null
);"""

sql_aux = """
create extension if not exists "uuid-ossp"
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
                database=conf['postgresql']['database_mqtt'] \
                )) as db:
        db.execute(sql_aux)
