
from flask import (
      Blueprint, request, current_app
)
from flask_mqtt import Mqtt
import json

from server.common import database as dbase
#--------------------------------------------------------------------------
# Blueprint
bp = Blueprint('mqtt', __name__, url_prefix='/mqtt')
_db = 'MQTT'

#---------------------------------------------------------------------------

def listen(app, conf):
    if conf['password'] is None:
        print("No password provided, skipping mqtt.")
        return

    if 'host' in conf:
        app.config['MQTT_BROKER_URL'] = conf['host']
    else:
        app.config['MQTT_BROKER_URL'] = '127.0.0.1'
    if 'ws_port' in conf:
        app.config['MQTT_BROKER_WS_PORT'] = int(conf['ws_port'])
    else:
        app.config['MQTT_BROKER_WS_PORT'] = 9001
    if 'broker_port' in conf:
        app.config['MQTT_BROKER_PORT'] = int(conf['broker_port'])
    else:
        app.config['MQTT_BROKER_PORT'] = 1883
    if 'username' in conf:
        app.config['MQTT_USERNAME'] = conf['username']
    else:
        app.config['MQTT_USERNAME'] = 'bipes'
        
    app.config['MQTT_PASSWORD'] = conf['password'].strip()
    if 'ssl' in conf:
        app.config['MQTT_SSL'] = True if conf['ssl'] == 'true' or conf['ssl'] == '1' else False
    else:
        app.config['MQTT_SSL'] = False
    app.config['MQTT_KEEPALIVE'] = 5
    if 'tls_enabled' in conf:
        app.config['MQTT_TLS_ENABLED'] = True if conf['tls_enabled'] == 'true' or conf['tls_enabled'] == '1' else False
    else:
        app.config['MQTT_TLS_ENABLED'] = False

    mqtt = Mqtt()

    @mqtt.on_message()
    def handle_mqtt_message(client, userdata, msg):
        full_topic = msg.topic.split("/", 1)

        if len(full_topic) < 2:
            return

        session = full_topic[0]
        topic = full_topic[1]
        data = msg.payload.decode()

        if app.config['DATABASE'] == 'sqlite':
            from server.sqlite.mqtt import sql_macro_table
        elif app.config['DATABASE'] == 'postgresql':
            from server.postgresql.mqtt import sql_macro_table

        with app.app_context():
            db = dbase.connect(_db)
            if not dbase.has_table(db, (session,)):
                dbase.exec(db, sql_macro_table, session)

            if app.config['DATABASE'] == 'sqlite':
                import uuid
                dbase.insert(db, session,
                    ['uuid','topic','data'],
                    (uuid.uuid1().bytes, topic, data))
            elif app.config['DATABASE'] == 'postgresql':
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
@bp.route('/public_conf', methods=('POST', 'GET'))
def mqtt_public_conf():
    if 'MQTT_PASSWORD' in current_app.config:
        return {
            'easyMQTT':{
                'password':current_app.config['MQTT_PASSWORD'],
                'ssl':current_app.config['MQTT_SSL'],
                'host':current_app.config['MQTT_BROKER_URL'],
                'ws_port':current_app.config['MQTT_BROKER_WS_PORT']
            }
        }
    else:
        return {'easyMQTT':{'password':False}}

# Get all data
@bp.route('/<session>/grep', methods=('POST', 'GET'))
def mqtt_select(session):
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
def mqtt_select_distinct(session):
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
def mqtt_select_topic(session, topic):
    obj = request.json
    cols = ['lastEdited','data']
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
def mqtt_delete(session, topic):
    obj = request.json
    db = dbase.connect(_db)
    topic = topic.replace('$','/')

    if not dbase.has_table(db, (session,)):
        return {session:[]}

    dbase.delete(db, session, ['topic'], [topic])

    return {session:[]}
