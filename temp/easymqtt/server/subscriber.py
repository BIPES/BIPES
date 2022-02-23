from pymongo import MongoClient
import paho.mqtt.client as mqtt
import time

mongo_client = MongoClient('127.0.0.1', 27017)
mqtt_client = mqtt.Client()

def mqtt_on_connect(client, userdata, flags, rc):
    client.subscribe("#")


def mqtt_on_message(client, userdata, msg):
    full_topic = msg.topic.split("/", 1)

    if len(full_topic) < 2:
        print("Invalid Topic")
        return

    session = full_topic[0]
    topic = full_topic[1]
    data = msg.payload.decode()
    database = mongo_client[session]
    collection = database[topic]
    collection.insert_one({"data": data, "timestamp": int(time.time())})
    print("Session:", session, "Topic:", topic, "Data:", data)


mqtt_client.on_connect = mqtt_on_connect
mqtt_client.on_message = mqtt_on_message
mqtt_client.username_pw_set("bipes", password="m8YLUr5uW3T")
mqtt_client.connect("127.0.0.1", 1883, 60)
mqtt_client.loop_forever()
