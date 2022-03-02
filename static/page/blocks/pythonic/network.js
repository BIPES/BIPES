// Network ---------------------------------------------------------------------
// Status&Configure ------------------------------------------------------------

Blockly.Python['wifi_client_connect'] = function(block) {
	var value_wifi_client_essid = Blockly.Python.valueToCode(block, 'wifi_client_essid', Blockly.Python.ORDER_ATOMIC);
	var value_wifi_client_key = Blockly.Python.valueToCode(block, 'wifi_client_key', Blockly.Python.ORDER_ATOMIC);

	if (bipes.page.project.current.device.firmware == "CircuitPython") {
		Blockly.Python.definitions_['import_ipaddress'] = 'import ipaddress';
		Blockly.Python.definitions_['import_ssl'] = 'import ssl';
		Blockly.Python.definitions_['import_wifi'] = 'import wifi';
		Blockly.Python.definitions_['import_socketpool'] = 'import socketpool';
		var code = 'print("Connecting to ' + value_wifi_client_essid + '")\n';
		code+=     'wifi.radio.connect(' + value_wifi_client_essid + ',' + value_wifi_client_key + ')\n';
		code+=	   'print("Connected")\n';
		code+=	   'print("My IP address is", wifi.radio.ipv4_address)\n\n';
	} else {
		Blockly.Python.definitions_['import_network'] = 'import network';
		Blockly.Python.definitions_['import_time'] = 'import time';
		var code = 'sta_if = network.WLAN(network.STA_IF); sta_if.active(True) \nsta_if.scan() \nsta_if.connect(' + value_wifi_client_essid + ',' + value_wifi_client_key + ') \nprint("Waiting for Wifi connection")\nwhile not sta_if.isconnected(): time.sleep(1)\nprint("Connected")\n';
	}
	return code;
};

Blockly.Python['wifi_client_scan_networks'] = function(block) {

	if (bipes.page.project.current.device.firmware == "CircuitPython") {
		Blockly.Python.definitions_['import_ipaddress'] = 'import ipaddress';
		Blockly.Python.definitions_['import_ssl'] = 'import ssl';
		Blockly.Python.definitions_['import_wifi'] = 'import wifi';
		Blockly.Python.definitions_['import_socketpool'] = 'import socketpool';
		Blockly.Python.definitions_['import_scan_wifi'] = 'def scan_wifi():\n\tfor network in wifi.radio.start_scanning_networks():\n\t\tprint("\t%s\t\tRSSI: %d\tChannel: %d" % (str(network.ssid, "utf-8"), network.rssi, network.channel))\n\twifi.radio.stop_scanning_networks()\n';
		var code = 'scan_wifi()';
	} else {
		Blockly.Python.definitions_['import_network'] = 'import network';
		Blockly.Python.definitions_['import_network_sta_init'] = 'sta_if = network.WLAN(network.STA_IF); sta_if.active(True) \n';
		var code = 'sta_if.scan()';
	}
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['net_ap_mode'] = function(block) {
  var value_wifi_essid = Blockly.Python.valueToCode(block, 'wifi_essid', Blockly.Python.ORDER_ATOMIC);
  var value_wifi_key = Blockly.Python.valueToCode(block, 'wifi_key', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_network'] = 'import network';
  var code = 'ap = network.WLAN(network.AP_IF) \nap.active(True) \nap.config(essid=' + value_wifi_essid + ', password=' + value_wifi_key + ') \n';

  return code;
};


Blockly.Python['net_ifconfig'] = function(block) {

	if (bipes.page.project.current.device.firmware == "CircuitPython") {
		Blockly.Python.definitions_['import_ipaddress'] = 'import ipaddress';
		Blockly.Python.definitions_['import_ssl'] = 'import ssl';
		Blockly.Python.definitions_['import_wifi'] = 'import wifi';
		Blockly.Python.definitions_['import_socketpool'] = 'import socketpool';
		var code = 'wifi.radio.ipv4_address';
	} else {
		Blockly.Python.definitions_['import_network'] = 'import network';
		Blockly.Python.definitions_['import_network_a'] = 'sta_if = network.WLAN(network.STA_IF)';
		Blockly.Python.definitions_['import_network_b'] = 'sta_if.active(True)';
		var code = 'sta_if.ifconfig()';
	}
	return [code, Blockly.Python.ORDER_NONE];
};



Blockly.Python['net_wiznet5k_init'] = function(block) {

  //Reference: https://docs.micropython.org/en/latest/library/network.WIZNET5K.html

  var spi = Blockly.Python.valueToCode(block, 'spi', Blockly.Python.ORDER_ATOMIC);
  var cs = Blockly.Python.valueToCode(block, 'cs', Blockly.Python.ORDER_ATOMIC);
  var rst = Blockly.Python.valueToCode(block, 'rst', Blockly.Python.ORDER_ATOMIC);

  //Working nicely with RPI Pico. Before modifying, remmeber that this is workign with RIP Pico
  Blockly.Python.definitions_['import_Pin_SPI'] = 'from machine import Pin,SPI';
  Blockly.Python.definitions_['import_network'] = 'import network';

  var code = 'spi' + spi + '=SPI(' + spi + ',2_000_000, mosi=Pin(19),miso=Pin(16),sck=Pin(18))\n';
  code += 'nic = network.WIZNET5K(spi' + spi + ',Pin(' + cs + '),Pin(' + rst + '))\n';

  return code;

};


Blockly.Python['net_wiznet5k_isconnected'] = function(block) {

  var code = 'nic.isconnected()';

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['net_wiznet5k_regs'] = function(block) {

  var code = 'nic.regs()';

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['net_wiznet5k_ifconfig'] = function(block) {
  var ip = Blockly.Python.valueToCode(block, 'ip', Blockly.Python.ORDER_ATOMIC);
  var subnet = Blockly.Python.valueToCode(block, 'subnet', Blockly.Python.ORDER_ATOMIC);
  var gw = Blockly.Python.valueToCode(block, 'gw', Blockly.Python.ORDER_ATOMIC);
  var dns = Blockly.Python.valueToCode(block, 'dns', Blockly.Python.ORDER_ATOMIC);

  var code = 'nic.ifconfig((' + ip + ',' + subnet + ',' + gw + ',' + dns + '))\n';

  return code;
};


// HTTP Client -----------------------------------------------------------------

Blockly.Python['net_get_request'] = function(block) {
	var value_url = Blockly.Python.valueToCode(block, 'URL', Blockly.Python.ORDER_ATOMIC);

	if (bipes.page.project.current.device.firmware == "CircuitPython") {
		Blockly.Python.definitions_['import_ipaddress'] = 'import ipaddress';
		Blockly.Python.definitions_['import_ssl'] = 'import ssl';
		Blockly.Python.definitions_['import_wifi'] = 'import wifi';
		Blockly.Python.definitions_['import_socketpool'] = 'import socketpool';
		Blockly.Python.definitions_['import_http_get'] = 'def http_get(pHOST):\n\ttmp=pHOST.replace("http://", "")\n\tHOST=tmp.split("/", 1)[0]\n\tparams=tmp.split("/",1)[1]\n\tprint("Host: " + HOST)\n\tprint("Params = " + params)\n\tpool = socketpool.SocketPool(wifi.radio)\n\tserver_ipv4 = ipaddress.ip_address(pool.getaddrinfo(HOST, 80)[0][4][0])\n\tprint("Server ping", server_ipv4, wifi.radio.ping(server_ipv4), "ms")\n\tbuf = bytearray(500)\n\ts = pool.socket(pool.AF_INET, pool.SOCK_STREAM)\n\ts.settimeout(50)\n\tprint("Connecting")\n\ts.connect((HOST, 80))\n\tsize = s.send(bytes(\'GET /%s HTTP/1.0\\r\\nHost: %s\\r\\n\\r\\n\' % (params, HOST), \'utf8\'))\n\tprint("Sent", size, "bytes")\n\tsize = s.recv_into(buf)\n\tprint(\'Received\', size, "bytes", buf[:size])\n\ts.close()\n\treturn buf[:size]\n';

		var code = 'http_get(' + value_url + ')\n';
	} else {
		Blockly.Python.definitions_['import_urequests'] = 'import urequests';
		var code = 'urequests.get(' + value_url + ')\n';
	}
	return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['http_get_status'] = function(block) {
  var variable_request = Blockly.Python.nameDB_.getName(block.getFieldValue('request'), Blockly.VARIABLE_CATEGORY_NAME);

  var code = variable_request + '.status_code';

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['http_get_content'] = function(block) {
  var variable_request = Blockly.Python.nameDB_.getName(block.getFieldValue('request'), Blockly.VARIABLE_CATEGORY_NAME);

  var code = 'str(' + variable_request + '.content)';

  return [code, Blockly.Python.ORDER_NONE];
};


// POST Method -----------------------------------------------------------------


Blockly.Python['net_post_request'] = function(block) {
  var value_url = Blockly.Python.valueToCode(block, 'URL', Blockly.Python.ORDER_ATOMIC);
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_urequests'] = 'import urequests';
  var code = 'urequests.post(' + value_url + ', data = ' + value_data + ')\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['net_post_request_json'] = function(block) {
  var value_url = Blockly.Python.valueToCode(block, 'URL', Blockly.Python.ORDER_ATOMIC);
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_urequests'] = 'import urequests';

  var value_data2 = value_data.replace('\'','').replace('\'','');
  var code = 'urequests.post(' + value_url + ', json={' + value_data2 + '})\n';
  return [code, Blockly.Python.ORDER_NONE];
};

// HTTP Server -----------------------------------------------------------------

Blockly.Python['net_http_server_start'] = function(block) {
	var port = Blockly.Python.valueToCode(block, 'port', Blockly.Python.ORDER_ATOMIC);

	if (bipes.page.project.current.device.firmware == "CircuitPython") {
		Blockly.Python.definitions_['import_ipaddress'] = 'import ipaddress';
		Blockly.Python.definitions_['import_ssl'] = 'import ssl';
		Blockly.Python.definitions_['import_wifi'] = 'import wifi';
		Blockly.Python.definitions_['import_socketpool'] = 'import socketpool';

		var code = "pool = socketpool.SocketPool(wifi.radio)\n";
		code += "HOST = str(wifi.radio.ipv4_address)\n";
		code += "s = pool.socket(pool.AF_INET, pool.SOCK_STREAM)\n";
		//code += "s.settimeout(10)\n";
		code += "s.settimeout(None)\n";
		code += "s.bind((HOST, 80))\n";
		code += "s.listen(5)\n";
		code += "print('BIPES HTTP Server Listening on', HOST)\n";
	} else {
		Blockly.Python.definitions_['import_socket'] = 'import socket';

		var code = "http_addr = socket.getaddrinfo('0.0.0.0'," + port + ")[0][-1]\n";
		code += 's = socket.socket()\n';
		code += 's.bind(http_addr)\n';
		code += 's.listen(1)\n';
		code += "print('BIPES HTTP Server Listening on', http_addr)\n";
	}

  return code;
};


Blockly.Python['net_http_server_accept'] = function(block) {

	if (bipes.page.project.current.device.firmware == "CircuitPython") {
		var code = "buf = bytearray(500)\n";
		code += "while True:\n";
		code += "\tconn, addr = s.accept()\n";
		//code += "\tconn.settimeout(50)\n";
		code += "\tprint(\"Accepted from\", addr)\n";
		code += "\tsize = conn.recv_into(buf, 500)\n";
		code += "\tprint(\"Received\", buf[:size], size, \"bytes\")\n";
		code += "\tlineS = str(buf[:size], 'utf8')\n";
		code += "\tprint(lineS)\n";
		code += "\tif lineS.startswith('GET /'):\n";
		code += "\t\thttp_request_page = (lineS.split('/')[1]).split(' ')[0]\n";
		code += "\t\tprint('Request page = ' + http_request_page)\n";

		code += "\tif size >= 20:\n";
		code += "\t\tbreak\n";

		//code += "\tconn.send(buf[:size])\n";
		//code += "\tprint("Sent", buf[:size], size, "bytes")\n";
	} else {
	  var code = "cl, http_addr = s.accept()\n";
	      code += "print('client connected from', http_addr)\n";
	      code += "cl_file = cl.makefile('rwb', 0)\n";
	      code += "while True:\n";
	      code += "    line = cl_file.readline()\n";
	      code += "    lineS = str(line, 'utf8')\n";
	      code += "    print(line)\n";
	      code += "    if lineS.startswith('GET /'):\n";
	      code += "        http_request_page = (lineS.split('/')[1]).split(' ')[0]\n";
	      code += "        print('Request page = ' + http_request_page)\n";
	      code += "    if not line or line == b'\\r\\n':\n";
	      code += "        break\n";
	}

  return code;
};

Blockly.Python['net_http_server_requested_page'] = function(block) {

  var code = 'http_request_page';

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['net_http_server_send_response'] = function(block) {
  var html = Blockly.Python.valueToCode(block, 'html', Blockly.Python.ORDER_ATOMIC);

	if (bipes.page.project.current.device.firmware == "CircuitPython") {
		var code = 'response = ' + html + '\n';
		code += "conn.send('HTTP/1.0 200 OK\\r\\nContent-type: text/html\\r\\n\\r\\n')\n";
		code += 'conn.send(response)\n';
		code += 'conn.close()\n';
	} else {
		var code = 'response = ' + html + '\n';
		code += "cl.send('HTTP/1.0 200 OK\\r\\nContent-type: text/html\\r\\n\\r\\n')\n";
		code += 'cl.send(response)\n';
		code += 'cl.close()\n';
	}

  return code;
};

Blockly.Python['net_http_server_send_response_jpg'] = function(block) {
  var html = Blockly.Python.valueToCode(block, 'html', Blockly.Python.ORDER_ATOMIC);

	if (bipes.page.project.current.device.firmware == "CircuitPython") {
		var code = 'response = ' + html + '\n';
		code += "conn.send('HTTP/1.0 200 OK\\r\\nContent-type: image/jpg\\r\\n\\r\\n')\n";
		code += 'conn.send(response)\n';
		code += 'conn.close()\n';
	} else {
		var code = 'response = ' + html + '\n';
		code += "cl.send('HTTP/1.0 200 OK\\r\\nContent-type: image/jpg\\r\\n\\r\\n')\n";
		code += 'cl.send(response)\n';
		code += 'cl.close()\n';
	}

  return code;
};


Blockly.Python['net_http_server_close'] = function(block) {

  var code = 'cl.close()\n';

  return code;
};
// EMAIL -----------------------------------------------------------------------
Blockly.Python['umail_init'] = function(block) {
  var host = Blockly.Python.valueToCode(block, 'host', Blockly.Python.ORDER_ATOMIC);
  var port = Blockly.Python.valueToCode(block, 'port', Blockly.Python.ORDER_ATOMIC);
  var username = Blockly.Python.valueToCode(block, 'username', Blockly.Python.ORDER_ATOMIC);
  var password = Blockly.Python.valueToCode(block, 'password', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_umail'] = 'import umail';

  var code = 'smtp = umail.SMTP(' + host + ',' + port + ',' + 'username=' + username + ',' + 'password=' + password + ')\n';
  return code;

};

Blockly.Python['umail_send'] = function(block) {
  var to = Blockly.Python.valueToCode(block, 'to', Blockly.Python.ORDER_ATOMIC);
  var subject = Blockly.Python.valueToCode(block, 'subject', Blockly.Python.ORDER_ATOMIC);
  var contents = Blockly.Python.valueToCode(block, 'contents', Blockly.Python.ORDER_ATOMIC);

  var s = subject.replace('\'','').replace('\'','');
  var c = contents.replace('\'','').replace('\'','');
  var msg = 'Subject: ' + s + '\\n\\n' + c;


  var code = 'smtp.to(' + to + ')\n';
	code += 'smtp.send(\'' + msg + '\')\n';
	code += 'smtp.quit()\n';
  return code;
};

// NTP Time --------------------------------------------------------------------

Blockly.Python['net_ntp_sync'] = function(block) {
//  var server = Blockly.Python.valueToCode(block, 'server', Blockly.Python.ORDER_ATOMIC);
  var tz = Blockly.Python.valueToCode(block, 'tz', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_ntptime'] = 'import ntptime';
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_utime'] = 'import utime';

  var code = 'ntptime.settime()\n';
	code += 'rtc = machine.RTC()\n';
	code += 'utc_shift=' + tz + '\n';
	code += 'tm = utime.localtime(utime.mktime(utime.localtime()) + utc_shift*3600)\n';
	code += 'tm = tm[0:3] + (0,) + tm[3:6] + (0,)\n';
	code += 'rtc.datetime(tm)\n';
	code += "rtc.datetime()\n";

	/*Useful:
	 * >>>from machine import RTC
>>>(year, month, mday, week_of_year, hour, minute, second, milisecond)=RTC().datetime()
>>>RTC().init((year, month, mday, week_of_year, hour+2, minute, second, milisecond)) # GMT correction. GMT+2
>>>print ("Fecha/Hora (year, month, mday, week of year, hour, minute, second, milisecond):", RTC().datetime())
>>>print ("{:02d}/{:02d}/{} {:02d}:{:02d}:{:02d}".format(RTC().datetime()[2],RTC().datetime()[1],RTC().datetime()[0],RTC().datetime()[4],RTC().datetime()[5],RTC
*/
  return code;

};

// TCP/IP Socket ---------------------------------------------------------------


Blockly.Python['net_socket_connect'] = function(block) {
  var host = Blockly.Python.valueToCode(block, 'host', Blockly.Python.ORDER_ATOMIC);
  var port = Blockly.Python.valueToCode(block, 'port', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_socket'] = 'import socket';

  //var code = 'addr_info = socket.getaddrinfo("towel.blinkenlights.nl", 23)';
  var code = 'addr_info = socket.getaddrinfo(' + host + ',' + port + ')\n';
      code += 'addr = addr_info[0][-1]\n';
      code += 's = socket.socket()\n';
      code += 's.connect(addr)\n';

  return code;
};

Blockly.Python['net_socket_receive'] = function(block) {
  var bytes = Blockly.Python.valueToCode(block, 'bytes', Blockly.Python.ORDER_ATOMIC);

  var code = "str(s.recv(" + bytes + "), 'utf8')";

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['net_socket_send'] = function(block) {
  var bytes = Blockly.Python.valueToCode(block, 'bytes', Blockly.Python.ORDER_ATOMIC);

  var code = "s.send(bytes(" + bytes + ", 'utf8'))\n";

  return code;
};


Blockly.Python['net_socket_close'] = function(block) {

  var code = 's.close()\n';

  return code;
};


// MQTT ------------------------------------------------------------------------

/// Start MQTT Client
Blockly.Python['mqtt_init'] = function(block) {
  var server = Blockly.Python.valueToCode(block, 'server', Blockly.Python.ORDER_ATOMIC);
  var port = Blockly.Python.valueToCode(block, 'port', Blockly.Python.ORDER_ATOMIC);
  var user = Blockly.Python.valueToCode(block, 'user', Blockly.Python.ORDER_ATOMIC);
  var pass = Blockly.Python.valueToCode(block, 'password', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_umqtt.robust'] = 'import umqtt.robust';
  var code = 'mqtt_buffer = ""; mqtt_client = umqtt.robust.MQTTClient("umqtt_client", server = ' + server + ', port = ' + port + ', user = ' + user + ', password = ' + pass + '); mqtt_client.connect()\n'
  return code;
};

/// Add Data to MQTT Buffer
Blockly.Python['mqtt_add_to_buffer'] = function(block) {
  var name = Blockly.Python.valueToCode(block, 'fieldname', Blockly.Python.ORDER_ATOMIC);
  var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

  var code = 'mqtt_buffer += (' + name + ' + "=" + str(' + value + ')) if not len(mqtt_buffer) else ("&" + ' + name + ' + "=" + str(' + value + '))\n'
  return code;
};

/// Publish Buffer to MQTT Topic
Blockly.Python['mqtt_publish_buffer'] = function(block) {
  var topic = Blockly.Python.valueToCode(block, 'topic', Blockly.Python.ORDER_ATOMIC);
  var qos = block.getFieldValue('MQTT_QOS');

  Blockly.Python.definitions_['import_umqtt.robust'] = 'import umqtt.robust';

  var code = 'mqtt_client.publish(' + topic + ', mqtt_buffer,qos=' + qos + '); mqtt_buffer = ""\n';
  return code;
};

/// Publish Payload to MQTT Topic
Blockly.Python['mqtt_publish_payload'] = function(block) {
  var topic = Blockly.Python.valueToCode(block, 'topic', Blockly.Python.ORDER_ATOMIC);
  var payload = Blockly.Python.valueToCode(block, 'payload', Blockly.Python.ORDER_ATOMIC);
  var qos = block.getFieldValue('MQTT_QOS');

  Blockly.Python.definitions_['import_umqtt.robust'] = 'import umqtt.robust';

  var code = 'mqtt_client.publish(' + topic + ', ' + payload + ',qos=' + qos + ')\n';
  return code;
};

/// Set Callback to MQTT Messages
Blockly.Python['mqtt_set_callback'] = function(block) {
	var data_var_name = Blockly.Python.nameDB_.getName(block.getFieldValue('MQTT_DATA_VAR'), Blockly.VARIABLE_CATEGORY_NAME);
	var topic_var_name = Blockly.Python.nameDB_.getName(block.getFieldValue('MQTT_TOPIC_VAR'), Blockly.VARIABLE_CATEGORY_NAME);
	// Fix for global variables inside callback
	// Piece of code from generators/python/procedures.js
	// Add a 'global' statement for every variable that is not shadowed by a local parameter.
	var globals = [];
	var varName;
	var workspace = block.workspace;
	var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
	for (var i = 0, variable; variable = variables[i]; i++) {
		varName = variable.name;
		if (block.getVars().indexOf(varName) == -1 && varName != data_var_name && varName != topic_var_name) {
		globals.push(Blockly.Python.nameDB_.getName(varName,
			Blockly.VARIABLE_CATEGORY_NAME));
		}
	}
	// Add developer variables.
	var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
	for (var i = 0; i < devVarList.length; i++) {
		globals.push(Blockly.Python.nameDB_.getName(devVarList[i],
			Blockly.Names.DEVELOPER_VARIABLE_TYPE));
	}
	globals = globals.length ? Blockly.Python.INDENT + 'global ' + globals.join(', ') : '';
	// End of code from generators/python/procedures.js

	Blockly.Python.definitions_['import_umqtt.robust'] = 'import umqtt.robust';

	var funct_code = Blockly.Python.statementToCode(block, 'do');


	var function_name = Blockly.Python.provideFunction_(
		'mqtt_callback',
		['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '('+topic_var_name+','+data_var_name+'):',
		globals,
		Blockly.Python.INDENT + topic_var_name + " = " + topic_var_name + ".decode()",
		funct_code]);

	var code = 'mqtt_client.set_callback(' + function_name + ')\n';
	return code;
};

/// Subscribe to MQTT Topic
Blockly.Python['mqtt_subscribe'] = function(block) {
  var topic = Blockly.Python.valueToCode(block, 'topic', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_umqtt.robust'] = 'import umqtt.robust';

  var code = 'mqtt_client.subscribe(' + topic + ')\n';
  return code;
};

/// Check for MQTT Server messages
Blockly.Python['mqtt_check_msg'] = function(block) {
  Blockly.Python.definitions_['import_umqtt.robust'] = 'import umqtt.robust';

  var code = 'mqtt_client.check_msg()\n';
  return code;
};

/// Wait for MQTT Server messages
Blockly.Python['mqtt_wait_msg'] = function(block) {
  Blockly.Python.definitions_['import_umqtt.robust'] = 'import umqtt.robust';

  var code = 'mqtt_client.wait_msg()\n';
  return code;
};

/// Disconnect MQTT Client
Blockly.Python['mqtt_disconnect'] = function(block) {
  Blockly.Python.definitions_['import_umqtt.robust'] = 'import umqtt.robust';

  var code = 'mqtt_client.disconnect()\n';
  return code;
};


// EasyMQTT --------------------------------------------------------------------
/// EasyMQTT Init
Blockly.Python['easymqtt_init'] = function(block) {
  var server = location.hostname;
  var port = '1883';
  var user = 'bipes';
  var pass = bipes.page.dashboard.easyMQTT.passwd; // ::TODO:: Remove (allow anonymus) or template it.
  var session = bipes.page.dashboard.easyMQTT.session;

  Blockly.Python.definitions_['import_umqtt.robust'] = 'import umqtt.robust';
  var code = `easymqtt_session = "${session}"; \neasymqtt_client = umqtt.robust.MQTTClient("umqtt_client", server = "${server}", port = "${port}", user = "${user}", password = "${pass}"); \neasymqtt_client.connect()\nprint("EasyMQTT connected")\n`
  return code;
};

/// EasyMQTT Publish Data
Blockly.Python['easymqtt_publish_data'] = function(block) {
  var topic = Blockly.Python.valueToCode(block, 'topic', Blockly.Python.ORDER_ATOMIC);
  var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_umqtt.robust'] = 'import umqtt.robust';

  var code = 'easymqtt_client.publish(easymqtt_session + "/" + ' + topic + ', str(' + data + '))\nprint("EasyMQTT Publish - Session:",easymqtt_session,"Topic:",' + topic + ',"Value:",str(' + data + '))\n'
  return code;
};

/// EasyMQTT Disconnect
Blockly.Python['easymqtt_disconnect'] = function(block) {
  Blockly.Python.definitions_['import_umqtt.robust'] = 'import umqtt.robust';

  var code = 'easymqtt_client.disconnect()\nprint("EasyMQTT disconnected")\n';
  return code;
};

///EasyMQTT Subscribe
Blockly.Python['easymqtt_subscribe'] = function(block) {
  var var_name = Blockly.Python.nameDB_.getName(
      block.getFieldValue('EASYMQTT_VAR'), Blockly.VARIABLE_CATEGORY_NAME);
  // Fix for global variables inside callback
  // Piece of code from generators/python/procedures.js
  // Define a procedure with a return value.
  // First, add a 'global' statement for every variable that is not shadowed by
  // a local parameter.
  var globals = [];
  var varName;
  var workspace = block.workspace;
  var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
  for (var i = 0, variable; variable = variables[i]; i++) {
    varName = variable.name;
    if (block.getVars().indexOf(varName) == -1 && varName != var_name) {
      globals.push(Blockly.Python.nameDB_.getName(varName,
          Blockly.VARIABLE_CATEGORY_NAME));
    }
  }
  // Add developer variables.
  var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
  for (var i = 0; i < devVarList.length; i++) {
    globals.push(Blockly.Python.nameDB_.getName(devVarList[i],
        Blockly.Names.DEVELOPER_VARIABLE_TYPE));
  }
  globals = globals.length ? Blockly.Python.INDENT + 'global ' + globals.join(', ') + '\n' : '';

  Blockly.Python.definitions_['import_umqtt.robust'] = 'import umqtt.robust';
  var topic = Blockly.Python.valueToCode(block, 'topic', Blockly.Python.ORDER_ATOMIC);
  var funct_code = Blockly.Python.statementToCode(block, 'do');
  var name = topic.replace(/\W/g, '_');

  var function_name = Blockly.Python.provideFunction_(
    'easymqtt'+name,
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '('+var_name+'):',globals,funct_code]);
  var session = bipes.page.dashboard.easyMQTT.session;

  Blockly.Python.definitions_['easymqtt_callback'] = 'easymqtt_callback_list = {}\ndef easymqtt_callback(topic_,msg_):\n  topic_=topic_.decode();msg_=msg_.decode()\n  if topic_ in easymqtt_callback_list: easymqtt_callback_list[topic_](float(msg_))';

  var code = "easymqtt_client.set_callback(easymqtt_callback)\neasymqtt_callback_list['"+session+"/' + "+topic+"]="+function_name+"\neasymqtt_client.subscribe('"+session+"/' + "+topic+")\n"
  return code;
};

/// EasyMQTT Receive Data
Blockly.Python['easymqtt_receive_data'] = function(block) {
  Blockly.Python.definitions_['import_umqtt.robust'] = 'import umqtt.robust';
  var wait = block.getFieldValue('EASYMQTT_WAIT');
  if (wait == '1'){
    var code = 'easymqtt_client.wait_msg()\n';
  }else{
    var code = 'easymqtt_client.check_msg()\n';
  }

  return code;
};



Blockly.Python['mqtt_add_to_buffer'] = function(block) {
  var name = Blockly.Python.valueToCode(block, 'fieldname', Blockly.Python.ORDER_ATOMIC);
  var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

  var code = 'mqtt_buffer += (' + name + ' + "=" + str(' + value + ')) if not len(mqtt_buffer) else ("&" + ' + name + ' + "=" + str(' + value + '))\n'
  return code;
};

// Bluetooth REPL --------------------------------------------------------------
Blockly.Python['bluetooth_repl_setup'] = function(block) {
  Blockly.Python.definitions_['import_bluetoot_repl'] = 'import ble_uart_repl';
  var code = '\n';
  return code;
};

Blockly.Python['bluetooth_repl_start'] = function(block) {
  Blockly.Python.definitions_['import_bluetoot_repl'] = 'import ble_uart_repl';
  var t = Blockly.Python.valueToCode(block, 'name', Blockly.Python.ORDER_ATOMIC);
  var code = 'ble_uart_repl.start(' + t + ')\n';
  return code;
};


// WebREPL ---------------------------------------------------------------------
Blockly.Python['webrepl_start'] = function(block) {
  Blockly.Python.definitions_['import_webrepl'] = 'import webrepl';
  var code = 'webrepl.start()\n';
  return code;
};

Blockly.Python['webrepl_setup'] = function(block) {
  var code = 'import webrepl_setup\n';
  return code;
};

// CAN Bus ---------------------------------------------------------------------
//https://github.com/nos86/micropython/blob/esp32-can-driver-v3/docs/library/machine.CAN.rst
Blockly.Python['esp32_can_init'] = function(block) {
  var mode = Blockly.Python.valueToCode(block, 'mode', Blockly.Python.ORDER_ATOMIC);
  var baudrate = Blockly.Python.valueToCode(block, 'baudrate', Blockly.Python.ORDER_ATOMIC);
  var extframe = Blockly.Python.valueToCode(block, 'extframe', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_can'] = 'from machine import CAN';

  //BAUDRATE_500k = 500
  var code = 'can = CAN(0, extframe=True, mode=CAN.LOOPBACK, baudrate=500)\n';

  return code;
};

Blockly.Python['esp32_can_filter'] = function(block) {
  var filter = Blockly.Python.valueToCode(block, 'filter', Blockly.Python.ORDER_ATOMIC);

  //dev.setfilter(0, CAN.FILTER_ADDRESS, [0x102, 0])  # set a filter to receive messages with id = 0x102
  var code = 'can.setfilter(0, CAN.FILTER_ADDRESS, [0x102, 0]) \n';

  return code;
};

Blockly.Python['esp32_can_send'] = function(block) {
  var id = Blockly.Python.valueToCode(block, 'id', Blockly.Python.ORDER_ATOMIC);
  var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);

  var code = 'can.send([1,2,3], 0x102) \n';

  return code;
};

Blockly.Python['esp32_can_recv'] = function(block) {

  var code = 'can.recv()';

  return [code, Blockly.Python.ORDER_NONE];
};

// Google Sheets ---------------------------------------------------------------

Blockly.Python['google_spreadsheet'] = function(block) {
  Blockly.Python.definitions_['import_prequests'] = 'import prequests';
  Blockly.Python.definitions_['import_ujson'] = 'import ujson';

  var number_sheet_num = block.getFieldValue('sheet_num');
  var value_deploy_code = Blockly.Python.valueToCode(block, 'deploy_code', Blockly.Python.ORDER_ATOMIC);
  var cells_blocks = block.getInputTargetBlock('cells_values');

  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['post_data'] = 'def post_data(row_data, deployment_code):\n  request_data = ujson.dumps({"parameters": row_data})\n  r = prequests.post("https://script.google.com/macros/s/" + deployment_code + "/exec", headers = {"content-type": "application/json"}, data = request_data)\n  r.close()';
  Blockly.Python.definitions_['deployment_code' + number_sheet_num] = 'deployment_code' + number_sheet_num + '= ' + value_deploy_code;
  Blockly.Python.definitions_['row_data_' + number_sheet_num] = 'row_data' + number_sheet_num +' = {}';

  if(cells_blocks)
  var num_cell = 0;
  var row_data_def = '';
    do{
      var cell_value = Blockly.Python.blockToCode(cells_blocks, 'Cell');
      row_data_def += ' row_data' + number_sheet_num +'["var' + num_cell+ '"] = ' + cell_value+'\n';
      num_cell ++;
    }while (cells_blocks = cells_blocks.getNextBlock());

    Blockly.Python.definitions_['row_data_cell'+ number_sheet_num] = 'def update_row_data'+ number_sheet_num+'():\n' + row_data_def;

  var code = 'update_row_data'+ number_sheet_num+'()\npost_data(row_data' + number_sheet_num+',deployment_code' + number_sheet_num+')\n';
  return code;
};

Blockly.Python['cell_value'] = function(block) {
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_value;
  return code;
};
