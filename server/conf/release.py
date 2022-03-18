# Serve API and MQTT requests.
# Replaces the app.py from dev mode in the release version.

from flask import Flask, make_response, send_from_directory, redirect
import os

# Create app for developemnt mode
def create_app(test_config=None):
    app = Flask(__name__)
    app.config.from_mapping(
      SECRET_KEY = 'dev',
      API = os.path.join(app.root_path, 'server/api.db'),
      MOSQUITTO = os.path.join(app.root_path, 'server/mosquitto.db')
    )
    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)


    from server import api, mosquitto
    app.register_blueprint(api.bp)
    app.register_blueprint(mosquitto.bp)

    try:
        mosquitto.listen(app)
    except ConnectionRefusedError:
        print('Could not connect to the MQTT broker, is mosquitto running?')

    return app
