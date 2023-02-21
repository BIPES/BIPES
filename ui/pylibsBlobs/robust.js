var robustBlob = new Blob([
'import utime\n' +
'import simple\n' +
'\n' +
'\n' +
'class MQTTClient(simple.MQTTClient):\n' +
'\n' +
'    DELAY = 2\n' +
'    DEBUG = False\n' +
'\n' +
'    def delay(self, i):\n' +
'        utime.sleep(self.DELAY)\n' +
'\n' +
'    def log(self, in_reconnect, e):\n' +
'        if self.DEBUG:\n' +
'            if in_reconnect:\n' +
'                print("mqtt reconnect: %r" % e)\n' +
'            else:\n' +
'                print("mqtt: %r" % e)\n' +
'\n' +
'    def reconnect(self):\n' +
'        i = 0\n' +
'        while 1:\n' +
'            try:\n' +
'                return super().connect(False)\n' +
'            except OSError as e:\n' +
'                self.log(True, e)\n' +
'                i += 1\n' +
'                self.delay(i)\n' +
'\n' +
'    def publish(self, topic, msg, retain=False, qos=0):\n' +
'        while 1:\n' +
'            try:\n' +
'                return super().publish(topic, msg, retain, qos)\n' +
'            except OSError as e:\n' +
'                self.log(False, e)\n' +
'            self.reconnect()\n' +
'\n' +
'    def wait_msg(self):\n' +
'        while 1:\n' +
'            try:\n' +
'                return super().wait_msg()\n' +
'            except OSError as e:\n' +
'                self.log(False, e)\n' +
'            self.reconnect()\n' +
'\n' +
'    def check_msg(self, attempts=2):\n' +
'        while attempts:\n' +
'            self.sock.setblocking(False)\n' +
'            try:\n' +
'                return super().wait_msg()\n' +
'            except OSError as e:\n' +
'                self.log(False, e)\n' +
'            self.reconnect()\n' +
'            attempts -= 1\n'
], {type: 'text'});