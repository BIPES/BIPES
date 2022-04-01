# Serve API and MQTT requests.
# Replaces the app.py from dev mode in the release version.

from flask import Flask, make_response, send_from_directory, redirect
import logging

# Create app for release mode
def create_app(database="sqlite"):
    app = Flask(__name__)
    app.config.from_mapping(
      SECRET_KEY = ''
    )

    if database == "mongodb":
        from server.mongodb import api, mosquitto
    else:
        from server.sqlite  import api, mosquitto

    app.register_blueprint(api.bp)
    app.register_blueprint(mosquitto.bp)

    try:
        mosquitto.listen(app)
    except ConnectionRefusedError:
        app.logger.warning('Mosquitto refused to connect')

    return app
