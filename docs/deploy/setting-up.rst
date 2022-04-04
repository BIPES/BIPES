Server and database
========================================

.. warning::

  These instructions are intended to provide an overview on how to deploy the
  platform and are nor complete or secure.

To properly deploy your own BIPES version, you need to use a WSGI server and
a database engine, improving the performance greatly.

The instructions to achieve this using Apache2 as WSGI server and
PostgreSQL as the data engine are provided below.


Apache2 WSGI server
---------------------

Install Apache2 in your distribution [#f1]_ and check if mod_wsgi is installer,
if not, install the package it [#f2]_.

Then, adapt the default virtual host [#f3]_ [#f4]_ to include the WSGI Daemon:

.. code:: none

  <VirtualHost *:80>
    # ... Others config above...

    # Include WSGI Daemon
    WSGIDaemonProcess bipes3 user=www-data group=www-data
    WSGIScriptAlias /3 /var/www/bipes3/app.wsgi
    WSGIScriptReloading On
    <Directory /var/www/bipes3>
      WSGIProcessGroup bipes3
      WSGIApplicationGroup %{GLOBAL}
      Require all granted
    </Directory>
    # End of WSGI Daemon

    # ...
  </VirtualHost>

Remember to change user and group to match your Apache2's user and group, like
``wwrun:www`` for OpenSUSE.

For SSL, include the same lines, but change the `WSGIDaemonProcess` name to other,
like to ``bipes3_ssl``.

Check if Apache2 is configured to default to UTF-8 with this line in *apache2.conf*
(or *httpd.conf*):

.. code:: none

  AddDefaultCharset utf-8

Deploy the platform to a directory like */var/www/bipes3* with permission that match
Apache2's:

.. code:: bash

  make deploy path=/var/www/bipes3 chown=www-data:www-data

Then, set up some aliases in a new *bipes3.conf* file inside *sites-available* or *vhosts.d*.
If your Apache install uses the *sites-available* directory structure,
use ``a2ensite bipes3.conf`` to enable it (it will create a symbolic link to *sites-enabled*).

.. code:: none


  <IfModule alias_module>
    RedirectMatch "^/3/$" "/3/ide"
    RedirectMatch "^/3$" "/3/ide"
    Alias "/3/static" "/var/www/bipes3/static"
    Alias "/3/ide" "/var/www/bipes3/ide/ide.html"
    AliasMatch "^/3/ide-([a-z-]+)" "/var/www/bipes3/ide/ide-$1.html"
    Alias "/3/serviceworker.js" "/var/www/bipes3/static/libs/serviceworker.js"
    Alias "/3/docs" "/var/www/bipes3/docs/_build/html"
  </IfModule>

.. tip::

  You can use ``sudo apache2ctl -S`` to check if the configuration is valid.

Reload Apache:

.. code:: bash

  sudo systemctl reload apache2


For more information about the Apache2 and mod_wsgi, refer to
`Flask - mod_wsgi (Apache) <https://flask.palletsprojects.com/en/2.1.x/deploying/mod_wsgi/>`_


PostgreSQL Database
--------------------

Install PostgreSQL and change access permissions in the configuration file
*pg_hba.conf* located at *~postgres/data*:

.. code:: none

  local   all             postgres                                scram-sha-256


Change the password encryption method in *~postgres/data/postgresql.conf*:

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

Create *server/conf.ini* in the deployed directory:

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

Replacing the flask password with a random string, mosquitto password with the
Mosquitto server public password and PostgreSQL's password with the hashed
(SHA256) version of its password.

Set up tables and triggers with with:

.. code:: bash

  cd /var/www/bipes3
  python -c "import server.postgresql.api; server.postgresql.api.make()"
  python -c "import server.postgresql.mqtt; server.postgresql.mqtt.make()"

The *bipes_api* database store structured data of features of the platform,
like shared projects, and the *bipes_mqtt* exclusively stores all received MQTT
messages, to be accessed later (each session has its own table).

For more information about the PostgreSQL and how to make it secure, refer to
`PostgreSQL - Server Administration <https://www.postgresql.org/docs/current/admin.html>`_



.. rubric:: Footnotes

.. [#f1] ``apache2`` on Ubuntu/Debian/OpenSUSE and ``httpd`` on Fedora.
.. [#f2] ``libapache2-mod-wsgi-py3`` on Ubuntu/Debian and ``mod_wsgi`` on Fedora/OpenSUSE.
.. [#f3] Configuration files are located in */etc/apache2* on Ubuntu/Debian/OpenSUSE and */etc/httpd* on Fedora.
.. [#f4] Might be *sites-available/000-default.conf* or *default-server.conf*.
