# SQL Macro to create new table
sql_macro_table = """
create table {} (
  uuid uuid default uuid_generate_v4(),
  lastEdited numeric(16,6) not null default(extract(epoch from current_timestamp::timestamp with time zone)::numeric(16,6)),
  topic varchar(18) not null,
  data text not null
);"""

sql_aux = """
create extension if not exists "uuid-ossp"
"""

#------------------------------------------------------------------------
# Generate the database for the first time, only the Makefile should call it
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
