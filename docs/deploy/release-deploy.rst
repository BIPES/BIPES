Release and deploy
========================================

This section explains how to create a static and minified version of the source code
and how to deploy to a server with a properly set database.

But  first, it is important to understand that the released and deployed source code
are **exactly the same**, the only difference is how they are being served **in the browser**.

This differences occurs due to `Cross-Origin Resource Sharing (CORS) <https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS>`_
policies in modern browser and it deeply limits BIPES features based on the context
of the main page.

The following table better illustrates *what you get* at each CORS context, being "Locahost"
when you access in the same host (like *http://127.0.0.1:5001/*) and "File" by
opening the *ide.html* file directly from the file explorer (like *file://path/to/ide.html*):

+------------------+---------------------------------------+
|                  | Protocol                              |
+------------------+----------+---------+-----------+------+
| Techology        | HTTPS    | HTTP    | Localhost | File |
+==================+==========+=========+===========+======+
| WebSocket API    | Only WSS | Only WS | Yes       | Yes  |
+------------------+----------+---------+-----------+------+
| WebBluetooth API | Yes      | No      | Yes       | Yes  |
+------------------+----------+---------+-----------+------+
| WebSerial API    | Yes      | No      | Yes       | Yes  |
+------------------+----------+---------+-----------+------+
| iFrame           | Yes      | Yes     | Yes       | No   |
+------------------+----------+---------+-----------+------+
| Clipboard API    | Yes      | No      | Yes       | Yes  |
+------------------+----------+---------+-----------+------+
| Dynamic URL      | Yes      | Yes     | Yes       | No   |
+------------------+----------+---------+-----------+------+
| Stylesheet       | Yes      | Yes     | Yes       | No   |
+------------------+----------+---------+-----------+------+

BIPES tries to mitigate friction due to these restrictions by oculting features
or by showing warnings if a feature won't work in the CORS context used.

By far, the most annoying is WS being blocked over HTTPS, requiring the user
to switch to an insecure connection even though the device he is targetting might
be on its own network.
However, we do believe firmware/device will push for secure connections (eg. WSS)
by default in the future and this issue will be less prominent.

Having this in mind, let's get started!

Release
---------------------

To generate the static/minified code inside a compressed ZIP file, do:

.. code:: bash

  make relase lang=en


The **lang**-uage parameter is optional and receives one of the
:ref:`supported languages iso code<language-availability>`
to alias *ide.html* to the preferred language (others languages are
can be selected in the user interface).
By default, **lang** equals "en".

After the command completes, just take the *BIPES.zip* file and extract it somewhere,
to open BIPES without a server, just open the *ide.html* file inside the extracted
directory.

Setup and deploy
----------------------

.. warning::

  These instructions are intended to provide an overview on how to deploy the
  platform and are nor complete or secure.

To properly deploy your own BIPES version, you need to use a WSGI server,
a database engine and a MQTT broker, which will improve the performance greatly
and enable all features.

The instructions to achieve this using Apache2 as WSGI server,
PostgreSQL as the data engine and Mosquitto as the MQTT broker are provided below.

.. _apache2_wsgi:

Server (Apache2 WSGI)
^^^^^^^^^^^^^^^^^^^^^^^

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

For SSL, include the same lines, but change the `WSGIDaemonProcess` name to another,
like to ``bipes3_ssl``.

Check if Apache2 is configured to default to UTF-8 with this line in *apache2.conf*
(or *httpd.conf*):

.. code:: none

  AddDefaultCharset utf-8

Set up some aliases in a new *bipes3.conf* file inside *sites-available* or *vhosts.d*.
If your Apache install uses the *sites-available* directory structure,
use ``a2ensite bipes3.conf`` to enable it (it will create a symbolic link to *sites-enabled*).
Note that the directory */var/www/bipes3* is used; this is the expected directory
to deploy BIPES in this example and **you can** change it to other.

.. code:: none

  <IfModule alias_module>
    RedirectMatch "^/3/$" "/3/ide"
    RedirectMatch "^/3$" "/3/ide"
    Alias "/3/static" "/var/www/bipes3/static"
    Alias "/3/ide" "/var/www/bipes3/ide/ide.html"
    AliasMatch "^/3/ide-([a-z-]+)" "/var/www/bipes3/ide/ide-$1.html"
    Alias "/3/serviceworker.js" "/var/www/bipes3/static/libs/serviceworker.js"
    Header set Service-Worker-Allowed "/" "expr=%{REQUEST_URI} =~ m#^/3/serviceworker.js$#"
    Alias "/3/docs" "/var/www/bipes3/docs/_build/html"
  </IfModule>

.. note::

  You can use ``sudo apache2ctl -S`` to check if the configuration is valid.

Reload Apache:

.. code:: bash

  sudo systemctl reload apache2


For more information about the Apache2 and mod_wsgi, refer to
`Flask - mod_wsgi (Apache) <https://flask.palletsprojects.com/en/2.1.x/deploying/mod_wsgi/>`_


Database (PostgreSQL)
^^^^^^^^^^^^^^^^^^^^^^^

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

For more information about the PostgreSQL and how to make it secure, refer to
`PostgreSQL - Server Administration <https://www.postgresql.org/docs/current/admin.html>`_


.. _mosquitto_mqtt:

MQTT Broker (Mosquitto)
^^^^^^^^^^^^^^^^^^^^^^^

Install Mosquitto and create (or modify [#f5]_) */etc/mosquitto/conf.d/bipes.conf* to use
WebSocket over SSL at port 9001:

.. code:: none

  allow_anonymous false
  listener 1883

  listener 9001
  protocol websockets
  cafile /etc/mosquitto/certs/ca.crt
  certfile /etc/mosquitto/certs/server.crt
  keyfile /etc/mosquitto/certs/server.key
  password_file /etc/mosquitto/conf.d/passwd
  persistence true
  persistence_location /var/lib/mosquitto/

  log_dest file /var/log/mosquitto/mosquitto.log

Notice the ``cafile``, ``keyfile``, and ``certfile``, these are the lines that
enables SSL.

.. warning::

  Mosquitto never update listener settings when running, if the certificates
  renews, you need to restart the broker.

If you are using `Let's Encrypt <https://letsencrypt.org/>`_, change to these three
lines to:

.. code:: none

  cafile /etc/ssl/certs/DST_Root_CA_X3.pem
  certfile /etc/letsencrypt/live/example.com/fullchain.pem
  keyfile /etc/letsencrypt/live/example.com/privkey.pem

Replacing ``example.com`` with your domain.

Deploy
^^^^^^^^^^^^^^^^^^

Deploy the platform to a directory like */var/www/bipes3*, that matches the one
configured in the :ref:`bipes.conf file <apache2_wsgi>` and with permission
that matches Apache2's:

.. code:: bash

  make deploy path=/var/www/bipes3 chown=www-data:www-data lang=en database=postgresql

Where **path** defauts to */var/www/bipes3/*, **chown** to *www-data:www-data*,
**lang**-uage to *en*, and **database** to *sqlite*;
all of them are optional. For new releases, this
is the only command you need to do after a ``git pull`` (the configuration file
is preserved).

.. tip::

  You can automate this with an one liner like ``git pull && make doc && make deploy database=postgresql``
  with an automation interface like Ansible or GitHub Actions.


Create a configuration file *server/conf.ini* in the deployed directory:

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
  # Use SSL/TLS for WS
  ssl = true

Replacing the flask password with a random string, PostgreSQL's password with the hashed
(SHA256) version of its password, and  mosquitto password with the Mosquitto server public password.
Also, notice that :ref:`Mosquitto is over SSL <mosquitto_mqtt>`.

Then, set up tables and triggers in the database with with:

.. code:: bash

  cd /var/www/bipes3
  python -c "import server.postgresql.api; server.postgresql.api.make()"
  python -c "import server.postgresql.mqtt; server.postgresql.mqtt.make()"

The *bipes_api* database store structured data of features of the platform,
like shared projects, and the *bipes_mqtt* exclusively stores all received MQTT
messages, to be accessed later (each session has its own table).

That's it, at this stage, BIPES should be fully functional.

Optional configuration parameters
++++++++++++++++++++++++++++++++++++++++

There is a few optional parameters that can be included to the *server/conf.ini*.
Below, they are shown followed by its default parameters (value that they take
when unset).

.. code:: ini

  [mosquitto]
  # MQTT broker hostname
  host = 127.0.0.1
  # MQTT broker port for WS(S) connections
  ws_port = 9001

.. rubric:: Footnotes

.. [#f1] ``apache2`` on Ubuntu/Debian/OpenSUSE and ``httpd`` on Fedora.
.. [#f2] ``libapache2-mod-wsgi-py3`` on Ubuntu/Debian and ``mod_wsgi`` on Fedora/OpenSUSE.
.. [#f3] Configuration files are located in */etc/apache2* on Ubuntu/Debian/OpenSUSE and */etc/httpd* on Fedora.
.. [#f4] Might be *sites-available/000-default.conf* or *default-server.conf*.
.. [#f5] The Makefile' commands ``make`` and ``make mosquitto`` set up Mosquitto. 
