Server and database
========================================

To properly deploy your own BIPES version, you need to use a WSGI server and
a database engine.

The inscructions to do that using Apache2 as WSGI server and postgreSQL as
the data engine are provided below.

.. warning::

  These instructions are intended to provide an overview on how to deploy the
  platform, but are nor complete or fully secure by any means.

WSGI server
---------------------

For more information about the Apache2 and mod_wsgi, refer to
`Flask - mod_wsgi (Apache) <https://flask.palletsprojects.com/en/2.0.x/deploying/mod_wsgi/>`_

Database
--------------------

Create two databases in PostgreSQL, *bipes_api* and *bipes_mqtt*.
The *bipes_api* database store structed data of features of the platform,
like shared projects, and the *bipes_mqtt* exclusively stores all received MQTT
messages, to be accessed later (each session has its own table).



Install the package

.. code:: bash

  sudo apt install postgresql

To improve safety, change PostgreSQL's access permissions in the configuration file
*pg_hba.conf* located at *~postgres/data*:

.. code:: none

  local   all             postgres                                scram-sha-256

And change the password encryption method in *~postgres/data/postgresql.conf*:

.. code:: none

  password_encryption = scram-sha-256     # scram-sha-256 or md5

Get a hashed (SHA256) password (copy the output content of ``sha256sum``):

.. code:: bash

  echo 'STRONG_PASSWORD' > temp.txt
  sha256sum temp.txt
  rm -f temp.txt

Then setup a password to *postgres* user and the databases:

.. code:: bash

  sudo su postgres
  psql
  alter user postgres with encrypted password 'SHA256SUM_OUTPUT';
  create database bipes_api;
  create database bipes_mqtt;
  exit

Restart the PostgreSQL service:

.. code:: bash

  sudo systemctl restart postgresql

After deploying BIPES for the first time, create *server/conf.ini* in the deployed
directory:

.. code:: ini

  [flask]
  password = SUPER_STRONG_PASSWORD

  [postgresql]
  host = localhost
  database_api = bipes_api
  database_mqtt = bipes_mqtt
  user = postgres
  password = SHA256SUM_OUTPUT

  [mosquitto]
  password = PUBLIC_PASSWORD

Replacing flask password with a random string, mosquitto password with the
Mosquitto server public password and PostgreSQL's password with the hashed
(SHA256) version of its password.

For more information about the PostgreSQL and how to make it secure, refer to
`PostgreSQL - Server Administration <https://www.postgresql.org/docs/current/admin.html>`_

.. warning::

  The platform's front-end does not recognizes databases changes (SQLite to Postgree,
  databases names, etc.) so the local copy might show outdated data until
  new fetches are done.
