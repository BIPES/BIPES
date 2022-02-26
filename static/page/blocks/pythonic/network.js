// Network ---------------------------------------------------------------------
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
  var server = `"${location.hostname}"`;
  var port = '1883';
  var user = '"bipes"';
  var pass = '"1234"'; // ::TODO:: Remove (allow anonymus) or template it.
  var session =
  window.easyMQTT_session = bipes.page.dashboard.easyMQTT.session;

  Blockly.Python.definitions_['import_umqtt.robust'] = 'import umqtt.robust';
  var code = 'easymqtt_session = "' + session + '"; \neasymqtt_client = umqtt.robust.MQTTClient("umqtt_client", server = ' + server + ', port = ' + port + ', user = ' + user + ', password = ' + pass + '); \neasymqtt_client.connect()\nprint("EasyMQTT connected")\n'
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

  Blockly.Python.definitions_['easymqtt_callback'] = 'easymqtt_callback_list = {}\ndef easymqtt_callback(topic_,msg_):\n  topic_=topic_.decode();msg_=msg_.decode()\n  if topic_ in easymqtt_callback_list: easymqtt_callback_list[topic_](float(msg_))';

  var code = "easymqtt_client.set_callback(easymqtt_callback)\neasymqtt_callback_list['"+window.easyMQTT_session+"/' + "+topic+"]="+function_name+"\neasymqtt_client.subscribe('"+window.easyMQTT_session+"/' + "+topic+")\n"
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

