// Network ---------------------------------------------------------------------
// Status&Configure ------------------------------------------------------------
Blockly.Blocks['wifi_client_connect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable(Msg["wifi_connect"]), "NAME");
    this.appendValueInput("wifi_client_essid")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable(Msg["wifi_name"]), "WIFI_CLIENT_NET_NAME");
    this.appendValueInput("wifi_client_key")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable(Msg["wifi_key"]), "WIFI_CLIENT_NET_KEY");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Connect to a Wifi network");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['wifi_client_scan_networks'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable(Msg["wifi_scan"]), "NET_SCAN_WIFI");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Scan wifi networks");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['net_ap_mode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Configure Access Point Mode"), "NAME");
    this.appendValueInput("wifi_essid")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("Network name"), "NET_NETWORK_NAME");
    this.appendValueInput("wifi_key")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("Network password"), "NET_NETWORK_KEY");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Configure Access Point Mode");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};


Blockly.Blocks['net_ifconfig'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Wifi current IP"), "NET_IFCONFIG");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Wifi current IP");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['net_wiznet5k_init'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Init WizNet5000");

    this.appendDummyInput()
        .appendField("Ethernet Controller");

    this.appendValueInput("spi")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SPI Bus:");

    this.appendValueInput("cs")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CS:");

    this.appendValueInput("rst")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("RST:");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['net_wiznet5k_isconnected'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Check if Ethernet is Connected");

    this.setOutput(true);
    this.setTooltip('');
  }
};



Blockly.Blocks['net_wiznet5k_regs'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Dump Ethernet Registers");

    this.setOutput(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['net_wiznet5k_ifconfig'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Configure WizNet5000");

    this.appendDummyInput()
        .appendField("Ethernet Controller");

    this.appendValueInput("ip")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("IP:");

    this.appendValueInput("subnet")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Subnet:");

    this.appendValueInput("gw")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Gateway:");

    this.appendValueInput("dns")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("DNS:");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

// HTTP Client -----------------------------------------------------------------

Blockly.Blocks['net_get_request'] = {
  init: function() {

    this.appendDummyInput()
        .appendField(Msg["net_http_get"]);
    this.appendValueInput("URL")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("String")
        .appendField(new Blockly.FieldLabelSerializable("URL"), "BLOCK_NET_GET");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Make HTTP GET Request");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};


Blockly.Blocks['http_get_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Msg["net_http_get_status"])
        .appendField(new Blockly.FieldVariable("request"), "request");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Status code of the HTTP GET request");
 this.setHelpUrl("bipes.net.br");
  }
};

Blockly.Blocks['http_get_content'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Msg["net_http_get_content"])
        .appendField(new Blockly.FieldVariable("request"), "request");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Content of HTTP GET request");
 this.setHelpUrl("bipes.net.br");
  }
};
// POST Method -----------------------------------------------------------------
Blockly.Blocks['net_post_request'] = {
  init: function() {
    this.appendValueInput("URL")
        .setCheck("String")
        .appendField(new Blockly.FieldLabelSerializable("Make HTTP POST Request URL"), "NET_POST_REQUEST_URL");
    this.appendValueInput("data")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("Data"), "NET_POST_REQUEST_DATA");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Make HTTP POST Request");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['net_post_request_json'] = {
  init: function() {
    this.appendValueInput("URL")
        .setCheck("String")
        .appendField(new Blockly.FieldLabelSerializable("Make HTTP POST Request URL"), "NET_POST_REQUEST_URL");
    this.appendValueInput("data")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("JSON Data"), "NET_POST_REQUEST_DATA");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Make HTTP POST Request with JSON data");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

// HTTP Server -----------------------------------------------------------------

Blockly.Blocks['net_http_server_start'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField(Msg["net_http_server_start"]);

    this.appendValueInput("port")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Msg["net_http_server_start_port"]);

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['net_http_server_accept'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField(Msg["net_http_server_wait"]);

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['net_http_server_requested_page'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField(Msg["net_http_server_requested_page"]);

    this.setOutput(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['net_http_server_send_response'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField(Msg["net_http_server_send_response"]);

    this.appendValueInput("html")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Msg["net_http_server_send_html"]);

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['net_http_server_send_response_jpg'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField(Msg["net_http_server_send_response"]);

    this.appendValueInput("html")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("JPG Image");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};



Blockly.Blocks['net_http_server_close'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Close HTTP Web Server");

    this.setOutput(true);
    this.setTooltip('');
  }
};

// EMAIL -----------------------------------------------------------------------
Blockly.Blocks['umail_init'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Init uMail Email Sender");

    this.appendValueInput("host")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Host:");

    this.appendValueInput("port")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Port:");

    this.appendValueInput("username")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Username:");

    this.appendValueInput("password")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Password:");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['umail_send'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Send email");

    this.appendValueInput("to")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("To email:");

    this.appendValueInput("subject")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Subject:");

    this.appendValueInput("contents")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Email message:");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

// NTP Time --------------------------------------------------------------------
Blockly.Blocks['net_ntp_sync'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField(Msg["ntp_sync"]);

    this.appendDummyInput()
        .appendField("NTP: Network Time Protocol");

    this.appendValueInput("tz")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Msg["timezone"]);

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

// TCP/IP Socket ---------------------------------------------------------------
Blockly.Blocks['net_socket_connect'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("TCP/IP Socket Connect");

    this.appendValueInput("host")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Host:");

    this.appendValueInput("port")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Port:");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['net_socket_receive'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Socket Receive");

    this.appendValueInput("bytes")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Bytes to receive:");

    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['net_socket_send'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Socket Send");

    this.appendValueInput("bytes")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Data:");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['net_socket_close'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Socket Close");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


// MQTT ------------------------------------------------------------------------
/// Start MQTT Client
Blockly.Blocks['mqtt_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Start MQTT Client"), "BLOCK_MQTT_INIT");
    this.appendValueInput("server")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("Server Address"), "MQTT_SERVER");
    this.appendValueInput("port")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("Server Port"), "MQTT_PORT");
    this.appendValueInput("user")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("Username"), "MQTT_USER");
    this.appendValueInput("password")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("Password"), "MQTT_PASSWORD");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Start MQTT Client");
    this.setHelpUrl("http://www.bipes.net.br");
  }
};

/// Add Data to MQTT Buffer
Blockly.Blocks['mqtt_add_to_buffer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Add Data to MQTT Buffer"), "BLOCK_MQTT_ADD_TO_BUFFER");
    this.appendValueInput("fieldname")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("Field Name"), "MQTT_FIELDNAME");
    this.appendValueInput("value")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("Value"), "MQTT_VALUE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Add Data to MQTT Buffer");
    this.setHelpUrl("http://www.bipes.net.br");
  }
};

/// Publish Buffer to MQTT Topic
Blockly.Blocks['mqtt_publish_buffer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Publish Buffer to MQTT Topic"), "BLOCK_MQTT_PUBLISH");
    this.appendValueInput("topic")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("Topic"), "MQTT_TOPIC");
    this.appendDummyInput()
        .appendField('QOS:')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([
            ['0 - at most\u00A0once', '0'],
            ['1 - at least\u00A0once', '1']
        ]), 'MQTT_QOS');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setInputsInline(false);
    this.setTooltip("Publish Buffer to MQTT Server");
    this.setHelpUrl("http://www.bipes.net.br");
  }
};

/// Publish Payload to MQTT Topic
Blockly.Blocks['mqtt_publish_payload'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Publish Payload to MQTT Topic"), "BLOCK_MQTT_PUBLISH");
    this.appendValueInput("topic")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("Topic"), "MQTT_TOPIC");
    this.appendValueInput("payload")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("Payload"), "MQTT_PAYLOAD");
    this.appendDummyInput()
        .appendField('QOS:')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([
            ['0 - at most\u00A0once', '0'],
            ['1 - at least\u00A0once', '1']
        ]), 'MQTT_QOS');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setInputsInline(false);
    this.setTooltip("Publish Payload to MQTT Server");
    this.setHelpUrl("http://www.bipes.net.br");
  }
};

/// Subscribe to MQTT Topic
Blockly.Blocks['mqtt_subscribe'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Subscribe to MQTT Topic"), "BLOCK_MQTT_SUBSCRIBE");
    this.appendValueInput("topic")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("Topic"), "MQTT_TOPIC");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Subscribe to MQTT Topic");
    this.setHelpUrl("http://www.bipes.net.br");
  }
};

/// Set Callback to MQTT Messages
Blockly.Blocks['mqtt_set_callback'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Set Callback to MQTT Messages"), "BLOCK_MQTT_SET_CALLBACK");
    this.appendDummyInput()
        .appendField('with')
        .appendField(new Blockly.FieldVariable('data_bytes'), 'MQTT_DATA_VAR')
        .appendField('received from')
        .appendField(new Blockly.FieldVariable(
          'topic',
          null,
          ['String'],
          'String'
        ), 'MQTT_TOPIC_VAR');
    this.appendStatementInput('do')
        .appendField('do');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setInputsInline(false);
    this.setTooltip("Callback function must have topic and msg parameters");
    this.setHelpUrl("http://www.bipes.net.br");
  }
};

/// Check MQTT Server for pending messages
Blockly.Blocks['mqtt_check_msg'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Check MQTT Server for pending messages"), "BLOCK_MQTT_CHECK_Msg");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Check if the server has any pending messages. Non-blocking method. Subscription messages will be passed to the callback.");
     this.setHelpUrl("http://www.bipes.net.br");
  }
};

/// Wait for MQTT Server messages
Blockly.Blocks['mqtt_wait_msg'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Wait for MQTT Server messages"), "BLOCK_MQTT_WAIT_Msg");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Wait for server sending any message. Blocking method. Subscription messages will be passed to the callback.");
    this.setHelpUrl("http://www.bipes.net.br");
  }
};

/// Disconnect MQTT Client
Blockly.Blocks['mqtt_disconnect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Disconnect MQTT Client"), "BLOCK_MQTT_DISCONNECT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Disconnect the MQTT Client from Server.");
    this.setHelpUrl("http://www.bipes.net.br");
  }
};

// EasyMQTT --------------------------------------------------------------------
/// EasyMQTT Init
Blockly.Blocks['easymqtt_init'] = {
  generate_id: function(){
    return Math.random().toString(36).substring(7);
  },
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable(Msg["easymqtt_start"]), "BLOCK_EASYMQTT_INIT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Start EasyMQTT Client");
    this.setHelpUrl("http://www.bipes.net.br");
  }
};

/// EasyMQTT Publish Data
Blockly.Blocks['easymqtt_publish_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable(Msg["easymqtt_publish"]), "BLOCK_EASYMQTT_PUBLISH");
    this.appendValueInput("topic")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable(Msg["topic"]), "EASYMQTT_TOPIC");
    this.appendValueInput("data")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(new Blockly.FieldLabelSerializable(Msg["data"]), "EASYMQTT_PAYLOAD");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Publish Data to EasyMQTT Server");
    this.setHelpUrl("http://www.bipes.net.br");
  }
};

/// EasyMQTT Axis Data
Blockly.Blocks['easymqtt_publish_axis'] = {
    init: function () {
        this.appendDummyInput()
          .appendField("easyMQTT topic")
          .appendField(new Blockly.FieldTextInput("data"), "topic");
        this.itemCount_ = 3;
        this.updateShape_();
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setMutator(new Blockly.Mutator(["easymqtt_publish_axis_item"]));
        this.setTooltip("The data will be stored in the browser, organized by topic, see the 'Databoard' tab.");
    },
    mutationToDom: function () {
        var a = Blockly.utils.xml.createElement("mutation");
        a.setAttribute("items", this.itemCount_);
        return a;
    },
    domToMutation: function (a) {
        this.itemCount_ = parseInt(a.getAttribute("items"), 10);
        this.updateShape_();
    },
    decompose: function (a) {
        var b = a.newBlock("easymqtt_publish_axis_container");
        b.initSvg();
        for (var c = b.getInput("STACK").connection, d = 0; d < this.itemCount_; d++) {
            var e = a.newBlock("easymqtt_publish_axis_item");
            e.initSvg();
            c.connect(e.previousConnection);
            c = e.nextConnection;
        }
        return b;
    },
    compose: function (a) {
        var b = a.getInputTargetBlock("STACK");
        for (a = []; b && !b.isInsertionMarker(); ) a.push(b.valueConnection_), (b = b.nextConnection && b.nextConnection.targetBlock());
        for (b = 0; b < this.itemCount_; b++) {
            var c = this.getInput("ADD" + b).connection.targetConnection;
            c && -1 == a.indexOf(c) && c.disconnect();
        }
        this.itemCount_ = a.length;
        this.updateShape_();
        for (b = 0; b < this.itemCount_; b++) Blockly.Mutator.reconnect(a[b], this, "ADD" + b);
    },
    saveConnections: function (a) {
        a = a.getInputTargetBlock("STACK");
        for (var b = 0; a; ) {
            var c = this.getInput("ADD" + b);
            a.valueConnection_ = c && c.connection.targetConnection;
            b++;
            a = a.nextConnection && a.nextConnection.targetBlock();
        }
    },
    updateShape_: function () {
        this.itemCount_ && this.getInput("EMPTY") ? this.removeInput("EMPTY") : this.itemCount_ || this.getInput("EMPTY") || this.appendDummyInput("EMPTY").appendField("no axis set").setAlign(Blockly.ALIGN_RIGHT);
        for (var a = 0; a < this.itemCount_; a++)
            if (!this.getInput("ADD" + a)) {
                var b = this.appendValueInput("ADD" + a).setAlign(Blockly.ALIGN_RIGHT);
                0 == a && b.appendField("axis data (x, y, ...)");
            }
        for (; this.getInput("ADD" + a); ) this.removeInput("ADD" + a), a++;
    },
};
Blockly.Blocks['easymqtt_publish_axis_container'] = {
    init: function () {
        this.setColour(230);
        this.appendDummyInput().appendField("dataset");
        this.appendStatementInput("STACK");
        this.setTooltip("Dataset composed by multiple axis, the first axis is 'x'.");
        this.contextMenu = !1;
    },
};
Blockly.Blocks['easymqtt_publish_axis_item'] = {
    init: function () {
        this.setColour(230);
        this.appendDummyInput().appendField("axis");
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setTooltip("Add axis to the dataset (x, y1, y2, ...).");
        this.contextMenu = !1;
    },
};

///EasyMQTT Subscribe
Blockly.Blocks['easymqtt_subscribe'] = {
  init: function() {
    this.appendValueInput("topic")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable(Msg["easymqtt_subscribe"]), "EASYMQTT_TOPIC");
    this.appendDummyInput()
        .appendField(Msg['when'])
        .appendField(new Blockly.FieldVariable(
          'data',
          null,
          ['Number'],
          'Number'
        ), 'EASYMQTT_VAR')
        .appendField(Msg["data_received"]);
    this.appendStatementInput('do')
        .appendField('do');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setInputsInline(false);
    this.setTooltip("Subscribe to a topic and define what to do when data is received from EasyMQTT Server");
    this.setHelpUrl("http://www.bipes.net.br");
  }
};

/// EasyMQTT Receive Data
Blockly.Blocks['easymqtt_receive_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable(Msg["easymqtt_receive"]), "BLOCK_EASYMQTT_RECEIVE");
    this.appendDummyInput()
        .appendField(Msg['wait_for_data'])
        .appendField(new Blockly.FieldDropdown([
            [Msg['no'], '0'],
            [Msg['yes'], '1']
        ]), 'EASYMQTT_WAIT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Receive Data from EasyMQTT Server");
    this.setHelpUrl("http://www.bipes.net.br");
  }
};

/// EasyMQTT Disconnect
Blockly.Blocks['easymqtt_disconnect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("EasyMQTT Stop"), "BLOCK_EASYMQTT_DISCONNECT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Disconnect the EasyMQTT Client from Server.");
    this.setHelpUrl("http://www.bipes.net.br");
  }
};

// Bluetooth REPL --------------------------------------------------------------
Blockly.Blocks['bluetooth_repl_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Setup Web Bluetooth REPL");

    this.appendValueInput("name")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Bluetooth name:");


    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("Setup Web Bluetooth REPL");
 this.setHelpUrl("www.bipes.net.br");
  }
};


Blockly.Blocks['bluetooth_repl_start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Start Web Bluetooth REPL");

    this.appendValueInput("name")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Bluetooth name:");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("Start REPL over Web Bluetooth");
 this.setHelpUrl("www.bipes.net.br");
  }
};

// WebREPL ---------------------------------------------------------------------

Blockly.Blocks['webrepl_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("WebREPL Setup");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("Configure WebREPL");
 this.setHelpUrl("www.bipes.net.br");
  }
};


Blockly.Blocks['webrepl_start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Start WebREPL");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("Start WebREPL Server");
 this.setHelpUrl("www.bipes.net.br");
  }
};
// CAN Bus ---------------------------------------------------------------------
//https://github.com/nos86/micropython/blob/esp32-can-driver-v3/docs/library/machine.CAN.rst
Blockly.Blocks['esp32_can_init'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Init ESP32 CAN Bus Controller");

    this.appendValueInput("mode")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Mode");

    this.appendValueInput("baudrate")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Baud Rate");

    this.appendValueInput("extframe")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Extended CAN Frame");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};



Blockly.Blocks['esp32_can_filter'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Set CAN Filter");

    this.appendValueInput("filter")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Frame Filter");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['esp32_can_send'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Send CAN Frame");

    this.appendValueInput("id")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ID");

    this.appendValueInput("data")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Frame Data");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['esp32_can_recv'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Receive CAN Frame");

    this.setOutput(true);

    this.setTooltip('');
  }
};

// Google Sheets ---------------------------------------------------------------
Blockly.Blocks['google_spreadsheet'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Send data to a Google spreadsheet")
        .appendField("#")
        .appendField(new Blockly.FieldNumber(1, 1, 9, 1), "sheet_num");
    this.appendValueInput("deploy_code")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Deployment Code");
    this.appendStatementInput("cells_values")
        .setCheck(null)
        .appendField("Cells");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['cell_value'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck(null)
        .appendField("Cell");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
