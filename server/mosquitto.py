import sqlite3

import click
from flask import (
      Blueprint, g, request, current_app
  )
from flask.cli import with_appcontext
from flask_mqtt import Mqtt
import functools
import uuid
import re
import json

from server import database as dbase


#------------------------------------------------------------------------
# Generate the database the first time, call only from the Makefile
def make():
    db = sqlite3.connect('server/mosquitto.db')
  
    with open('server/mosquitto.sql') as f:
        db.executescript(f.read())
    db.commit()
    db.close()

#--------------------------------------------------------------------------
# Blueprint
bp = Blueprint('mqtt', __name__, url_prefix='/mqtt')
_db = 'MOSQUITTO'

#---------------------------------------------------------------------------

def listen(app):
    app.config['MQTT_BROKER_URL'] = '127.0.0.1'
    app.config['MQTT_BROKER_PORT'] = 1883
    app.config['MQTT_USERNAME'] = 'bipes'
    app.config['MQTT_PASSWORD'] = '123'
    app.config['MQTT_KEEPALIVE'] = 5
    app.config['MQTT_TLS_ENABLED'] = False
    
    mqtt = Mqtt()
    
    @mqtt.on_message()
    def handle_mqtt_message(client, userdata, msg):
        full_topic = msg.topic.split("/", 1)
    
        if len(full_topic) < 2:
            print("Invalid Topic")
            return
    
        session = full_topic[0]
        topic = full_topic[1]
        data = msg.payload.decode()
    
        with app.app_context():
            dbase.insert(_db, 'mqtt',
                ['session','topic','data'],
                (session, topic, json.dumps(data)))
        
        print("Session:", session, "Topic:", topic, "Data:", data)
        
        return
    
    @mqtt.on_connect()
    def handle_connect(client, userdata, flags, rc):
        mqtt.subscribe('#')
   
    mqtt.init_app(app)
    return

# Get shared projects
@bp.route('/ls', methods=('POST', 'GET'))
def mosquitto_ls():
    obj = request.json
    cols = ['session','topic','data']
    if obj != None and 'from' in obj and 'limit' in obj:
        return dbase.rows_to_json(dbase.select(_db,'mqtt', cols, obj['from'], obj['limit']))
    else:
        return dbase.rows_to_json(dbase.select(_db,'mqtt', cols))
        
    

