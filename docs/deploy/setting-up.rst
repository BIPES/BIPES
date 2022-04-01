Setting up a self hosted version
========================================

To properly deploy your own BIPES version, you need to use a WSGI server and
a database engine.

The inscructions to do that using Apache2 as WSGI server and postgreSQL as
the data engine are provided below.

WSGI server
---------------------


Database
--------------------


Make sure to provide appropriate permissions to access the database at
PostgreSQL *pg_hba.conf* configuration file, that can be found at *~postgres/data/*.

.. tip::

  If you are having issues connecting, try temporally setting local coonections
  (Unix domain socket, IPv4 and IPv6) from **peer** or **ident** to **trust** in
  the *pg_hba.conf* file.
