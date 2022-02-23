import paho.mqtt.client as mqtt
import sys

if len(sys.argv) != 3:
    print("Usage: publish.py topic value")
    exit(1)


mqtt_client = mqtt.Client()
mqtt_client.username_pw_set("bipes", password="m8YLUr5uW3T")
mqtt_client.connect("127.0.0.1", 1883, 60)
mqtt_client.publish(sys.argv[1], sys.argv[2]);
mqtt_client.disconnect();
exit(0)
