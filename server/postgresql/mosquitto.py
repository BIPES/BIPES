from flask import (
      Blueprint, g, request, current_app
  )
from flask.cli import with_appcontext
from flask_mqtt import Mqtt
import re
import json

from server.postgresql import database as dbase
#------------------------------------------------------------------------
# SQL Macro to create new table
sql_macro_table = "create table {} (lastEdited datetime not null default(extract(epoch from current_timestamp::timestamp with time zone)::integer) primary key, topic varchar(18) not null, data text not null)"

#------------------------------------------------------------------------
# Generate the database the first time, call only from the Makefile
#def make():
    #db = sqlite3.connect('server/mosquitto.db')
    #db.commit()
    #db.close()

#--------------------------------------------------------------------------
# Blueprint
bp = Blueprint('mqtt', __name__, url_prefix='/mqtt')
_db = 'MOSQUITTO'

#---------------------------------------------------------------------------

def listen(app, password):
    if password is None:
        print("No password provided, skipping mqtt.")
        return

    app.config['MQTT_BROKER_URL'] = '127.0.0.1'
    app.config['MQTT_BROKER_PORT'] = 1883
    app.config['MQTT_USERNAME'] = 'bipes'
    app.config['MQTT_PASSWORD'] = password.strip()
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
            db = dbase.connect(_db)
            if not dbase.has_table(db, (session,)):
              dbase.exec(db, sql_macro_table.format(session))
            dbase.insert(db, session,
                ['topic','data'],
                (topic, data))

        return

    @mqtt.on_connect()
    def handle_connect(client, userdata, flags, rc):
        mqtt.subscribe('#')

    mqtt.init_app(app)
    return

# Get current password
@bp.route('/passwd', methods=('POST', 'GET'))
def mosquitto_password():
    passwd = ''
    try:
        with open('server/mosquitto.txt') as f:
            return {'easyMQTT':{'passwd':f.read().strip()}}
    except:
        return {'easyMQTT':{'passwd':False}}

# Get all data
@bp.route('/<session>/grep', methods=('POST', 'GET'))
def mosquitto_select(session):
    obj = request.json
    cols = ['topic','data']

    db = dbase.connect(_db)
    if not dbase.has_table(db, (session,)):
        return {session:[]}

    if obj != None and 'from' in obj and 'limit' in obj:
        return dbase.rows_to_json(dbase.select(db, session, cols, obj['from'], obj['limit']))
    else:
        return dbase.rows_to_json(dbase.select(db, session, cols))


# List topics
@bp.route('/<session>/ls', methods=('POST', 'GET'))
def mosquitto_select_distinct(session):
    obj = request.json
    cols = ['topic']

    db = dbase.connect(_db)
    if not dbase.has_table(db, (session,)):
        return {session:[]}

    if obj != None and 'from' in obj and 'limit' in obj:
        return dbase.rows_to_json(dbase.select_distinct(db, session, cols, obj['from'], obj['limit']))
    else:
        return dbase.rows_to_json(dbase.select_distinct(db, session, cols))


# Get data from topic
@bp.route('/<session>/<topic>/grep', methods=('POST', 'GET'))
def mosquitto_select_topic(session, topic):
    obj = request.json
    cols = ['data']
    db = dbase.connect(_db)
    topic = topic.replace('$','/')

    if not dbase.has_table(db, (session,)):
        return {session:[]}

    if obj != None and 'from' in obj and 'limit' in obj:
        return dbase.rows_to_json(dbase.select_where(db, session, ['topic', topic], cols, obj['from'], obj['limit']))
    else:
        return dbase.rows_to_json(dbase.select_where(db, session, ['topic', topic],  cols))


# Remove  topic
@bp.route('/<session>/<topic>/rm', methods=('POST', 'GET'))
def mosquitto_delete(session, topic):
    obj = request.json
    db = dbase.connect(_db)
    topic = topic.replace('$','/')

    if not dbase.has_table(db, (session,)):
        return {session:[]}

    dbase.delete(db, session, ['topic'], [topic])

    return {session:[]}

