# Serve API and MQTT requests.
# Replaces the app.py from dev mode in the release version.

from flask import Flask, make_response, send_from_directory, redirect
from configparser import ConfigParser
import logging
import os

# Create app for developemnt mode
def create_app(database="sqlite"):
    assert database == "sqlite" or database == "postgresql", \
           'Invalid database engine "' + database + '"'

    app = Flask(__name__)

    # Parse server/conf.ini
    conf = ConfigParser()
    conf.read(os.path.join(app.root_path,'server/conf.ini'))
    assert len(conf) > 0,\
        'Config file server/conf.ini does not exist'
    assert 'flask' in conf and 'password' in conf['flask'], \
        'No flask password provided in server/conf.ini'

    app.config.from_mapping(
      SECRET_KEY = conf['flask']['password']
    )

    if database == "postgresql":
        assert 'postgresql' in conf and \
            set(['host','database_api','database_mqtt','user','password']) \
                .issubset(set(conf['postgresql'])), \
            'No postgresql host, database, user or password provided in server/conf.ini'
        app.config.from_mapping(
          DATABASE = 'postgresql',
          POSTGRESQL_HOST = conf['postgresql']['host'],
          POSTGRESQL_DATABASE_API = conf['postgresql']['database_api'],
          POSTGRESQL_DATABASE_MQTT = conf['postgresql']['database_mqtt'],
          POSTGRESQL_USER = conf['postgresql']['user'],
          POSTGRESQL_PASSWORD = conf['postgresql']['password'],
          API = 'api',
          MQTT = 'mqtt'
        )
    else:
        app.config.from_mapping(
          DATABASE = 'sqlite',
          API = os.path.join(app.root_path, 'server/api.db'),
          MQTT = os.path.join(app.root_path, 'server/mqtt.db')
        )

    if database is not None:
        from server.common import api, mqtt

        app.register_blueprint(api.bp)
        app.register_blueprint(mqtt.bp)

    if database is None:
        return app

    # Init mqtt subscriber
    if 'mosquitto' in conf and 'password' in conf['mosquitto']:
        if os.environ.get("WERKZEUG_RUN_MAIN") != "true":
            try:
                mqtt.listen(app, conf['mosquitto'])
            except ConnectionRefusedError:
                app.logger.warning('Mosquitto refused to connect')
    else:
        app.logger.warning('No mosquitto password in server/conf.ini, skipping')

    return app
