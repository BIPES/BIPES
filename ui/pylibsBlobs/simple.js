var simpleBlob = new Blob([
'import usocket as socket\n' +
'import ustruct as struct\n' +
'from ubinascii import hexlify\n' +
'\n' +
'class MQTTException(Exception):\n' +
'    pass\n' +
'\n' +
'class MQTTClient:\n' +
'\n' +
'    def __init__(self, client_id, server, port=0, user=None, password=None, keepalive=0,\n' +
'                 ssl=False, ssl_params={}):\n' +
'        if port == 0:\n' +
'            port = 8883 if ssl else 1883\n' +
'        self.client_id = client_id\n' +
'        self.sock = None\n' +
'        self.server = server\n' +
'        self.port = port\n' +
'        self.ssl = ssl\n' +
'        self.ssl_params = ssl_params\n' +
'        self.pid = 0\n' +
'        self.cb = None\n' +
'        self.user = user\n' +
'        self.pswd = password\n' +
'        self.keepalive = keepalive\n' +
'        self.lw_topic = None\n' +
'        self.lw_msg = None\n' +
'        self.lw_qos = 0\n' +
'        self.lw_retain = False\n' +
'\n' +
'    def _send_str(self, s):\n' +
'        self.sock.write(struct.pack("!H", len(s)))\n' +
'        self.sock.write(s)\n' +
'\n' +
'    def _recv_len(self):\n' +
'        n = 0\n' +
'        sh = 0\n' +
'        while 1:\n' +
'            b = self.sock.read(1)[0]\n' +
'            n |= (b & 0x7F) << sh\n' +
'            if not b & 0x80:\n' +
'                return n\n' +
'            sh += 7\n' +
'\n' +
'    def set_callback(self, f):\n' +
'        self.cb = f\n' +
'\n' +
'    def set_last_will(self, topic, msg, retain=False, qos=0):\n' +
'        assert 0 <= qos <= 2\n' +
'        assert topic\n' +
'        self.lw_topic = topic\n' +
'        self.lw_msg = msg\n' +
'        self.lw_qos = qos\n' +
'        self.lw_retain = retain\n' +
'\n' +
'    def connect(self, clean_session=True):\n' +
'        self.sock = socket.socket()\n' +
'        addr = socket.getaddrinfo(self.server, self.port)[0][-1]\n' +
'        self.sock.connect(addr)\n' +
'        if self.ssl:\n' +
'            import ussl\n' +
'            self.sock = ussl.wrap_socket(self.sock, **self.ssl_params)\n' +
'        apremsg = [16, 0, 0, 0, 0, 0]\n' + 
'        premsg = bytearray(apremsg)\n' +
'        amsg = [4]\n' +
'        bmsg = [4, 2, 0, 0]\n' +
'        msg = bytearray(amsg) + bytearray(b"MQTT") + bytearray(bmsg)\n' +
'\n' +
'        sz = 10 + 2 + len(self.client_id)\n' +
'        msg[6] = clean_session << 1\n' +
'        if self.user is not None:\n' +
'            sz += 2 + len(self.user) + 2 + len(self.pswd)\n' +
'            msg[6] |= 0xC0\n' +
'        if self.keepalive:\n' +
'            assert self.keepalive < 65536\n' +
'            msg[7] |= self.keepalive >> 8\n' +
'            msg[8] |= self.keepalive & 0x00FF\n' +
'        if self.lw_topic:\n' +
'            sz += 2 + len(self.lw_topic) + 2 + len(self.lw_msg)\n' +
'            msg[6] |= 0x4 | (self.lw_qos & 0x1) << 3 | (self.lw_qos & 0x2) << 3\n' +
'            msg[6] |= self.lw_retain << 5\n' +
'\n' +
'        i = 1\n' +
'        while sz > 0x7F:\n' +
'            premsg[i] = (sz & 0x7F) | 0x80\n' +
'            sz >>= 7\n' +
'            i += 1\n' +
'        premsg[i] = sz\n' +
'\n' +
'        self.sock.write(premsg, i + 2)\n' +
'        self.sock.write(msg)\n' +
'        # print(hex(len(msg)), hexlify(msg, ":"))\n' +
'        self._send_str(self.client_id)\n' +
'        if self.lw_topic:\n' +
'            self._send_str(self.lw_topic)\n' +
'            self._send_str(self.lw_msg)\n' +
'        if self.user is not None:\n' +
'            self._send_str(self.user)\n' +
'            self._send_str(self.pswd)\n' +
'        resp = self.sock.read(4)\n' +
'        assert resp[0] == 0x20 and resp[1] == 0x02\n' +
'        if resp[3] != 0:\n' +
'            raise MQTTException(resp[3])\n' +
'        return resp[2] & 1\n' +
'\n' +
'    def disconnect(self):\n' +
'        aData = [224, 0]\n' +
'        self.sock.write(bytearray(aData))\n' +
'        self.sock.close()\n' +
'\n' +
'    def ping(self):\n' +
'        aData = [192, 0]\n' +
'        self.sock.write(bytearray(aData))\n' +
'\n' +
'    def publish(self, topic, msg, retain=False, qos=0):\n' +
'        apkt = [48, 0, 0, 0]\n' +
'        pkt = bytearray(apkt)\n' +
'        pkt[0] |= qos << 1 | retain\n' +
'        sz = 2 + len(topic) + len(msg)\n' +
'        if qos > 0:\n' +
'            sz += 2\n' +
'        assert sz < 2097152\n' +
'        i = 1\n' +
'        while sz > 0x7F:\n' +
'            pkt[i] = (sz & 0x7F) | 0x80\n' +
'            sz >>= 7\n' +
'            i += 1\n' +
'        pkt[i] = sz\n' +
'        # print(hex(len(pkt)), hexlify(pkt, ":"))\n' +
'        self.sock.write(pkt, i + 1)\n' +
'        self._send_str(topic)\n' +
'        if qos > 0:\n' +
'            self.pid += 1\n' +
'            pid = self.pid\n' +
'            struct.pack_into("!H", pkt, 0, pid)\n' +
'            self.sock.write(pkt, 2)\n' +
'        self.sock.write(msg)\n' +
'        if qos == 1:\n' +
'            while 1:\n' +
'                op = self.wait_msg()\n' +
'                if op == 0x40:\n' +
'                    sz = self.sock.read(1)\n' +
'                    aData = [2]\n' +
'                    assert sz == bytearray(aData)\n' +
'                    rcv_pid = self.sock.read(2)\n' +
'                    rcv_pid = rcv_pid[0] << 8 | rcv_pid[1]\n' +
'                    if pid == rcv_pid:\n' +
'                        return\n' +
'        elif qos == 2:\n' +
'            assert 0\n' +
'\n' +
'    def subscribe(self, topic, qos=0):\n' +
'        assert self.cb is not None, "Subscribe callback is not set"\n' +
'        apkt = [130, 0, 0, 0]\n' +
'        pkt = bytearray(apkt)\n' +
'        self.pid += 1\n' +
'        struct.pack_into("!BH", pkt, 1, 2 + 2 + len(topic) + 1, self.pid)\n' +
'        # print(hex(len(pkt)), hexlify(pkt, ":"))\n' +
'        self.sock.write(pkt)\n' +
'        self._send_str(topic)\n' +
'        self.sock.write(qos.to_bytes(1, "little"))\n' +
'        while 1:\n' +
'            op = self.wait_msg()\n' +
'            if op == 0x90:\n' +
'                resp = self.sock.read(4)\n' +
'                # print(resp)\n' +
'                assert resp[1] == pkt[2] and resp[2] == pkt[3]\n' +
'                if resp[3] == 0x80:\n' +
'                    raise MQTTException(resp[3])\n' +
'                return\n' +
'\n' +
'    # Wait for a single incoming MQTT message and process it.\n' +
'    # Subscribed messages are delivered to a callback previously\n' +
'    # set by .set_callback() method. Other (internal) MQTT\n' +
'    # messages processed internally.\n' +
'    def wait_msg(self):\n' +
'        res = self.sock.read(1)\n' +
'        self.sock.setblocking(True)\n' +
'        if res is None:\n' +
'            return None\n' +
'        if res == b"":\n' +
'            raise OSError(-1)\n' +
'        ares = [208]\n' +
'        if res == bytearray(ares):  # PINGRESP\n' +
'            sz = self.sock.read(1)[0]\n' +
'            assert sz == 0\n' +
'            return None\n' +
'        op = res[0]\n' +
'        if op & 0xF0 != 0x30:\n' +
'            return op\n' +
'        sz = self._recv_len()\n' +
'        topic_len = self.sock.read(2)\n' +
'        topic_len = (topic_len[0] << 8) | topic_len[1]\n' +
'        topic = self.sock.read(topic_len)\n' +
'        sz -= topic_len + 2\n' +
'        if op & 6:\n' +
'            pid = self.sock.read(2)\n' +
'            pid = pid[0] << 8 | pid[1]\n' +
'            sz -= 2\n' +
'        msg = self.sock.read(sz)\n' +
'        self.cb(topic, msg)\n' +
'        if op & 6 == 2:\n' +
'            apkt = [64, 2, 0, 0]\n' +
'            pkt = bytearray(apkt)\n' +
'            struct.pack_into("!H", pkt, 2, pid)\n' +
'            self.sock.write(pkt)\n' +
'        elif op & 6 == 4:\n' +
'            assert 0\n' +
'        return op\n' +
'\n' +
'    # Checks whether a pending message from server is available.\n' +
'    # If not, returns immediately with None. Otherwise, does\n' +
'    # the same processing as wait_msg.\n' +
'    def check_msg(self):\n' +
'        self.sock.setblocking(False)\n' +
'        return self.wait_msg()\n'
], {type: 'text'});