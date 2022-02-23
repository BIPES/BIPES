//Automatically generated
Blockly.Blocks['delay'] = {
  init: function() {
    this.appendValueInput("time")
        .setCheck("Number")
        .appendField("delay");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Delay processing in miliseconds");
 this.setHelpUrl("http://www.bipes.net.br/");
  }
};

Blockly.Blocks['reset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("reset");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("Reset Device");
 this.setHelpUrl("www.bipes.net.br");
  }
};

Blockly.Blocks['gpio_set'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("set pin");
    this.appendValueInput("value")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Write to GPIO digital pin");
 this.setHelpUrl("bipes.net.br");
  }
};

Blockly.Blocks['exec_python'] = {
  init: function() {
    this.appendValueInput("command")
        .setCheck("String")
        .appendField("Execute Python Code");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("Execute custom Python Code");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['adc'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("Read ADC Input");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Read ADC input of specified pin");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['gpio_get'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("Read digital pin");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Read digital pin");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['clear_oled'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Clear OLED Disiplay");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Clear OLED Disiplay");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['write_oled'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck(null)
        .appendField("Write text to OLED Display");
    this.setColour(230);
 this.setTooltip("Write text to OLED Display");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['move_servo'] = {
  init: function() {
    this.appendValueInput("angle")
        .setCheck("Number")
        .appendField("Move servo motor to");
    this.setColour(230);
 this.setTooltip("Move servo motor to degrees");
 this.setHelpUrl("http://www.bipes.net.ebr");
  }
};

Blockly.Blocks['net_get_request'] = {
  init: function() {
    this.appendValueInput("URL")
        .setCheck("String")
        .appendField(new Blockly.FieldLabelSerializable("Make HTTP GET Request URL"), "BLOCK_NET_GET");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Make HTTP GET Request");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['net_post_request'] = {
  init: function() {
    this.appendValueInput("URL")
        .setCheck("String")
        .appendField(new Blockly.FieldLabelSerializable("Make HTTP POST Request URL"), "NET_POST_REQUEST_URL");
    this.appendValueInput("URL")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("Data"), "NET_POST_REQUEST_DATA");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Make HTTP POST Request");
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

Blockly.Blocks['exec_python_output'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(new Blockly.FieldLabelSerializable("Execute Python custom with output"), "EXEC_PYTHON_OUTPUT");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Execute custom Python Code");
 this.setHelpUrl("");
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

Blockly.Blocks['wifi_client_connect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Connect to Wifi network"), "NAME");
    this.appendValueInput("wifi_client_essid")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("Network name"), "WIFI_CLIENT_NET_NAME");
    this.appendValueInput("wifi_client_key")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("Network key"), "WIFI_CLIENT_NET_KEY");
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
        .appendField(new Blockly.FieldLabelSerializable("Scan Wifi networks"), "NET_SCAN_WIFI");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Scan wifi networks");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['dht_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Start DHT11/22 sensor"), "BLOCK_DHT_INIT");
    this.appendValueInput("pin")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("pin"), "DHT_PIN_MSG");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Start DHT11 ou DHT22 sensor");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['dht_read_temp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Read DHT11/22 Temperature"), "MSG_READ_DHT_TEMP");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Read DHT11/22 Temperature");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['dht_read_humidity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Read DHT11/22 Humidity"), "MSG_DHT_READ_HUMIDITY");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Read DHT11/22 Humidity");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['project_metadata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Project INFO"), "NAME");
    this.appendValueInput("project_author")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("Author"), "project_author");
    this.appendValueInput("project_iot_id")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("IOT ID"), "project_iot_id");
    this.appendValueInput("project_name")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("Description"), "project_description");
    this.setColour(230);
 this.setTooltip("Information about the project");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};



Blockly.Blocks["btree_open"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" open");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/btree.html");
  }
};



Blockly.Blocks["btree_btree.close"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" btree.close");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: btree.close() Close the database. It's mandatory to close the database at the end of processing, as some unwritten data may be still in the cache. Note that ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/btree.html");
  }
};



Blockly.Blocks["btree_btree.flush"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" btree.flush");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: btree.flush() Flush any data in cache to the underlying stream. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/btree.html");
  }
};



Blockly.Blocks["btree_btree.__getitem__"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" btree.__getitem__");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: btree.__getitem__(key) btree.get(key, default=None, /) btree.__setitem__(key, val) btree.__detitem__(key) ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/btree.html");
  }
};



Blockly.Blocks["btree_btree.__iter__"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" btree.__iter__");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: btree.__iter__() A BTree object can be iterated over directly (similar to a dictionary) to get access to all keys in order. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/btree.html");
  }
};



Blockly.Blocks["btree_btree.keys"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" btree.keys");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/btree.html");
  }
};



Blockly.Blocks["builtins_abs"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" abs");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: abs() .. function:: all() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_all"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" all");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: all() .. function:: any() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_any"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" any");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: any() .. function:: bin() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_bin"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" bin");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: bin() .. class:: bool() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_callable"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" callable");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: callable() .. function:: chr() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_chr"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" chr");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: chr() .. function:: classmethod() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_classmethod"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" classmethod");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: classmethod() .. function:: compile() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_compile"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" compile");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: compile() .. class:: complex() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_delattr"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" delattr");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: delattr(obj, name) The argument *name* should be a string, and this function deletes the named attribute from the object given by *obj*. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_dir"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" dir");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: dir() .. function:: divmod() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_divmod"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" divmod");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: divmod() .. function:: enumerate() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_enumerate"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" enumerate");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: enumerate() .. function:: eval() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_eval"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" eval");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: eval() .. function:: exec() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_exec"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" exec");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: exec() .. function:: filter() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_filter"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" filter");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: filter() .. class:: float() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_getattr"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" getattr");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: getattr() .. function:: globals() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_globals"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" globals");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: globals() .. function:: hasattr() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_hasattr"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" hasattr");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: hasattr() .. function:: hash() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_hash"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" hash");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: hash() .. function:: hex() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_hex"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" hex");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: hex() .. function:: id() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_id"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" id");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: id() .. function:: input() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_input"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" input");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: input() .. class:: int() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_to_bytes"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" to_bytes");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: to_bytes(size, byteorder) In MicroPython, `byteorder` parameter must be positional (this is compatible with CPython). ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_isinstance"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" isinstance");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: isinstance() .. function:: issubclass() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_issubclass"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" issubclass");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: issubclass() .. function:: iter() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_iter"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" iter");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: iter() .. function:: len() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_len"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" len");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: len() .. class:: list() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_locals"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" locals");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: locals() .. function:: map() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_map"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" map");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: map() .. function:: max() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_max"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" max");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: max() .. class:: memoryview() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_min"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" min");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: min() .. function:: next() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_next"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" next");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: next() .. class:: object() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_oct"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" oct");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: oct() .. function:: open() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_open"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" open");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: open() .. function:: ord() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_ord"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" ord");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: ord() .. function:: pow() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_pow"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" pow");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: pow() .. function:: print() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_print"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" print");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: print() .. function:: property() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_property"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" property");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: property() .. function:: range() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_range"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" range");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: range() .. function:: repr() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_repr"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" repr");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: repr() .. function:: reversed() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_reversed"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" reversed");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: reversed() .. function:: round() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_round"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" round");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: round() .. class:: set() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_setattr"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" setattr");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: setattr() .. class:: slice() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_sorted"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" sorted");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: sorted() .. function:: staticmethod() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_staticmethod"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" staticmethod");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: staticmethod() .. class:: str() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_sum"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" sum");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: sum() .. function:: super() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_super"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" super");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: super() .. class:: tuple() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_type"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" type");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: type() .. function:: zip() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["builtins_zip"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" zip");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: zip() Exceptions ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/builtins.html");
  }
};



Blockly.Blocks["cmath_cos"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" cos");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: cos(z) Return the cosine of ``z``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/cmath.html");
  }
};



Blockly.Blocks["cmath_exp"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" exp");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: exp(z) Return the exponential of ``z``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/cmath.html");
  }
};



Blockly.Blocks["cmath_log"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" log");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: log(z) Return the natural logarithm of ``z``. The branch cut is along the negative real axis. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/cmath.html");
  }
};



Blockly.Blocks["cmath_log10"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" log10");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: log10(z) Return the base-10 logarithm of ``z``. The branch cut is along the negative real axis. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/cmath.html");
  }
};



Blockly.Blocks["cmath_phase"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" phase");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: phase(z) Returns the phase of the number ``z``, in the range (-pi, +pi]. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/cmath.html");
  }
};



Blockly.Blocks["cmath_polar"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" polar");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: polar(z) Returns, as a tuple, the polar form of ``z``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/cmath.html");
  }
};



Blockly.Blocks["cmath_rect"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" rect");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: rect(r, phi) Returns the complex number with modulus ``r`` and phase ``phi``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/cmath.html");
  }
};



Blockly.Blocks["cmath_sin"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" sin");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: sin(z) Return the sine of ``z``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/cmath.html");
  }
};



Blockly.Blocks["cmath_sqrt"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" sqrt");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: sqrt(z) Return the square-root of ``z``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/cmath.html");
  }
};



Blockly.Blocks["esp32_wake_on_touch"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" wake_on_touch");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: wake_on_touch(wake) Configure whether or not a touch will wake the device from sleep. *wake* should be a boolean value. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp32.html");
  }
};



Blockly.Blocks["esp32_wake_on_ext0"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" wake_on_ext0");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: wake_on_ext0(pin, level) Configure how EXT0 wakes the device from sleep. *pin* can be ``None`` or a valid Pin object. *level* should be ``esp32.WAKEUP_ALL_LOW`` or ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp32.html");
  }
};



Blockly.Blocks["esp32_wake_on_ext1"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" wake_on_ext1");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: wake_on_ext1(pins, level) Configure how EXT1 wakes the device from sleep. *pins* can be ``None`` or a tuple/list of valid Pin objects. *level* should be ``esp32.WAKEUP_ALL_ ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp32.html");
  }
};



Blockly.Blocks["esp32_raw_temperature"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" raw_temperature");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: raw_temperature() Read the raw value of the internal temperature sensor, returning an integer. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp32.html");
  }
};



Blockly.Blocks["esp32_hall_sensor"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" hall_sensor");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: hall_sensor() Read the raw value of the internal Hall sensor, returning an integer. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp32.html");
  }
};



Blockly.Blocks["esp32_idf_heap_info"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" idf_heap_info");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: idf_heap_info(capabilities) Returns information about the ESP-IDF heap memory regions. One of them conta ins ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp32.html");
  }
};



Blockly.Blocks["esp32_Partition.info"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Partition.info");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Partition.info() Returns a 6-tuple ``(type, subtype, addr, size, label, encrypted)``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp32.html");
  }
};



Blockly.Blocks["esp32_Partition.readblocks"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" Partition.readblocks");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Partition.readblocks(block_num, buf) .. method:: Partition.readblocks(block_num, buf, offset) .. method:: Partition.writeblocks(block_num, buf) .. method:: Partition.writeblocks(block_num, buf, offset) ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp32.html");
  }
};



Blockly.Blocks["esp32_Partition.readblocks"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" Partition.readblocks");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Partition.readblocks(block_num, buf, offset) .. method:: Partition.writeblocks(block_num, buf) .. method:: Partition.writeblocks(block_num, buf, offset) .. method:: Partition.ioctl(cmd, arg) ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp32.html");
  }
};



Blockly.Blocks["esp32_Partition.writeblocks"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" Partition.writeblocks");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Partition.writeblocks(block_num, buf) .. method:: Partition.writeblocks(block_num, buf, offset) .. method:: Partition.ioctl(cmd, arg) ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp32.html");
  }
};



Blockly.Blocks["esp32_Partition.writeblocks"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" Partition.writeblocks");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Partition.writeblocks(block_num, buf, offset) .. method:: Partition.ioctl(cmd, arg) These methods implement the simple and :ref:`extended ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp32.html");
  }
};



Blockly.Blocks["esp32_Partition.ioctl"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" Partition.ioctl");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Partition.ioctl(cmd, arg) These methods implement the simple and :ref:`extended <block-device-interface>` block protocol defined by ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp32.html");
  }
};



Blockly.Blocks["esp32_Partition.set_boot"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Partition.set_boot");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Partition.set_boot() Sets the partition as the boot partition. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp32.html");
  }
};



Blockly.Blocks["esp32_Partition.get_next_update"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Partition.get_next_update");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Partition.get_next_update() Gets the next update partition after this one, and returns a new Partition o bject. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp32.html");
  }
};



Blockly.Blocks["esp32_RMT.source_freq"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" RMT.source_freq");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: RMT.source_freq() Returns the source clock frequency. Currently the source clock is not configurable so this will always return 80MHz. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp32.html");
  }
};



Blockly.Blocks["esp32_RMT.clock_div"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" RMT.clock_div");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: RMT.clock_div() Return the clock divider. Note that the channel resolution is ``1 / (source_freq / clock_div)``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp32.html");
  }
};



Blockly.Blocks["esp32_RMT.wait_done"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" RMT.wait_done");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: RMT.wait_done(timeout=0) Returns True if `RMT.write_pulses` has completed. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp32.html");
  }
};



Blockly.Blocks["esp32_RMT.loop"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" RMT.loop");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: RMT.loop(enable_loop) Configure looping on the channel, allowing a stream of pulses to be indefinitely repeated. *enable_loop* is bool, set to True to enable looping. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp32.html");
  }
};



Blockly.Blocks["esp32_RMT.write_pulses"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" RMT.write_pulses");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: RMT.write_pulses(pulses, start) Begin sending *pulses*, a list or tuple defining the stream of pulses. The length of each pulse is defined by a number to be multiplied by the channel ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp32.html");
  }
};



Blockly.Blocks["esp32_ULP.set_wakeup_period"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" ULP.set_wakeup_period");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: ULP.set_wakeup_period(period_index, period_us) Set the wake-up period. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp32.html");
  }
};



Blockly.Blocks["esp32_ULP.load_binary"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" ULP.load_binary");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: ULP.load_binary(load_addr, program_binary) Load a *program_binary* into the ULP at the given *load_addr*. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp32.html");
  }
};



Blockly.Blocks["esp32_ULP.run"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" ULP.run");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: ULP.run(entry_point) Start the ULP running at the given *entry_point*. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp32.html");
  }
};



Blockly.Blocks["esp_sleep_type"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" sleep_type");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp.html");
  }
};



Blockly.Blocks["esp_deepsleep"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" deepsleep");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: deepsleep(time=0, /) **Note**: ESP8266 only - use `machine.deepsleep()` on ESP32 ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp.html");
  }
};



Blockly.Blocks["esp_flash_id"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" flash_id");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: flash_id() **Note**: ESP8266 only ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp.html");
  }
};



Blockly.Blocks["esp_flash_size"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" flash_size");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: flash_size() Read the total size of the flash memory. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp.html");
  }
};



Blockly.Blocks["esp_flash_user_start"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" flash_user_start");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: flash_user_start() Read the memory offset at which the user flash space begins. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp.html");
  }
};



Blockly.Blocks["esp_flash_read"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" flash_read");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: flash_read(byte_offset, length_or_buffer) .. function:: flash_write(byte_offset, bytes) ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp.html");
  }
};



Blockly.Blocks["esp_flash_write"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" flash_write");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: flash_write(byte_offset, bytes) .. function:: flash_erase(sector_no) ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp.html");
  }
};



Blockly.Blocks["esp_flash_erase"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" flash_erase");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: flash_erase(sector_no) .. function:: set_native_code_location(start, length) ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp.html");
  }
};



Blockly.Blocks["esp_set_native_code_location"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" set_native_code_location");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: set_native_code_location(start, length) **Note**: ESP8266 only ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/esp.html");
  }
};



Blockly.Blocks["framebuf_FrameBuffer.fill"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" FrameBuffer.fill");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: FrameBuffer.fill(c) Fill the entire FrameBuffer with the specified color. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/framebuf.html");
  }
};



Blockly.Blocks["framebuf_FrameBuffer.pixel"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" FrameBuffer.pixel");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/framebuf.html");
  }
};



Blockly.Blocks["framebuf_FrameBuffer.hline"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" FrameBuffer.hline");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: FrameBuffer.hline(x, y, w, c) .. method:: FrameBuffer.vline(x, y, h, c) .. method:: FrameBuffer.line(x1, y1, x2, y2, c) ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/framebuf.html");
  }
};



Blockly.Blocks["framebuf_FrameBuffer.vline"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" FrameBuffer.vline");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: FrameBuffer.vline(x, y, h, c) .. method:: FrameBuffer.line(x1, y1, x2, y2, c) Draw a line from a set of coordinates using the given color and ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/framebuf.html");
  }
};



Blockly.Blocks["framebuf_FrameBuffer.line"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" FrameBuffer.line");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: FrameBuffer.line(x1, y1, x2, y2, c) Draw a line from a set of coordinates using the given color and a thickness of 1 pixel. The `line` method draws the line up to ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/framebuf.html");
  }
};



Blockly.Blocks["framebuf_FrameBuffer.rect"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" FrameBuffer.rect");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: FrameBuffer.rect(x, y, w, h, c) .. method:: FrameBuffer.fill_rect(x, y, w, h, c) Draw a rectangle at the given location, size and color. The `rect` ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/framebuf.html");
  }
};



Blockly.Blocks["framebuf_FrameBuffer.fill_rect"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" FrameBuffer.fill_rect");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: FrameBuffer.fill_rect(x, y, w, h, c) Draw a rectangle at the given location, size and color. The `rect` method draws only a 1 pixel outline whereas the `fill_rect` method ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/framebuf.html");
  }
};



Blockly.Blocks["framebuf_FrameBuffer.text"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" FrameBuffer.text");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/framebuf.html");
  }
};



Blockly.Blocks["framebuf_FrameBuffer.scroll"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" FrameBuffer.scroll");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: FrameBuffer.scroll(xstep, ystep) Shift the contents of the FrameBuffer by the given vector. This may leave a footprint of the previous colors in the FrameBuffer. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/framebuf.html");
  }
};



Blockly.Blocks["framebuf_FrameBuffer.blit"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" FrameBuffer.blit");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/framebuf.html");
  }
};



Blockly.Blocks["gc_enable"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" enable");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: enable() Enable automatic garbage collection. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/gc.html");
  }
};



Blockly.Blocks["gc_disable"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" disable");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: disable() Disable automatic garbage collection. Heap memory can still be allocated, and garbage collection can still be initiated manually using :meth:`gc.collec ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/gc.html");
  }
};



Blockly.Blocks["gc_collect"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" collect");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: collect() Run a garbage collection. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/gc.html");
  }
};



Blockly.Blocks["gc_mem_alloc"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" mem_alloc");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: mem_alloc() Return the number of bytes of heap RAM that are allocated. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/gc.html");
  }
};



Blockly.Blocks["gc_mem_free"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" mem_free");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: mem_free() Return the number of bytes of available heap RAM, or -1 if this amount is not known. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/gc.html");
  }
};



Blockly.Blocks["gc_threshold"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" threshold");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/gc.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.set_power"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.set_power");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.set_power(on) Turn the display on or off, depending on the given value of *on*: 0 or ``Fal se`` ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.set_orient"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.set_orient");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.set_orient(orient) Set the orientation of the display. The *orient* parameter can be one of `PORTRAIT`, `LANDSCAPE`, `PORTRAIT_UPSIDEDOWN`, `LANDSCAPE_UPSIDEDOWN`. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.set_brightness"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.set_brightness");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.set_brightness(value) Set the brightness of the display, between 0 and 31. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.set_i2c_addr"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.set_i2c_addr");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.set_i2c_addr(addr) Set the I2C address of the display. The *addr* value must have the lower 2 bits cleared. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.set_uart_baudrate"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.set_uart_baudrate");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.set_uart_baudrate(baudrate) Set the baudrate of the UART interface. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.set_startup_deco"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.set_startup_deco");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.set_startup_deco(value) Set the start-up decoration of the display. The *value* parameter can be a logical or of `STARTUP_DECO_NONE`, `STARTUP_DECO_MLOGO`, `STARTUP_DECO_INFO` ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.save_to_flash"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" LCD160CR.save_to_flash");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.save_to_flash() Save the following parameters to flash so they persist on restart and power up: ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.set_pixel"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.set_pixel");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.set_pixel(x, y, c) Set the specified pixel to the given color. The color should be a 16-bit integer and can be created by :meth:`LCD160CR.rgb`. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.get_pixel"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.get_pixel");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: LCD160CR.get_pixel(x, y) Get the 16-bit value of the specified pixel. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.get_line"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.get_line");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.get_line(x, y, buf) Low-level method to get a line of pixels into the given buffer. To read block_definitions.js block_definitions_custom.js functions.txt generate-blocks.sh generator_stubs.js generator_stubs_custom.js onlyfunctions.txt pixels *buf* should be *2*n+1* bytes in length. The first byte ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.screen_dump"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.screen_dump");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.screen_dump(buf, x=0, y=0, w=None, h=None) Dump the contents of the screen to the given buffer. The parameters functions.txt list.txt listT.txt onlyfunctions.txt tmp.txt toolbox.js toolbox.xml toolbox.xml.sample toolbox_custom.xml and onlyfunctions.txt ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.screen_load"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.screen_load");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.screen_load(buf) Load the entire screen from the given buffer. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.set_pos"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.set_pos");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.set_pos(x, y) Set the position for text output using :meth:`LCD160CR.write`. The position is the upper-left corner of the text. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.set_text_color"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.set_text_color");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.set_text_color(fg, bg) Set the foreground and background color of the text. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.set_font"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.set_font");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.set_font(font, scale=0, bold=0, trans=0, scroll=0) Set the font for the text. Subsequent calls to `write` will use the newly configured font. The parameters are: ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.write"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.write");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.write(s) Write text to the display, using the current position, color and font. As text is written the position is automatically incremented. The ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.set_pen"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.set_pen");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.set_pen(line, fill) Set the line and fill color for primitive shapes. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.erase"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" LCD160CR.erase");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.erase() Erase the entire display to the pen fill color. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.dot"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.dot");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.dot(x, y) Draw a single pixel at the given location using the pen line color. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.rect"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.rect");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.rect(x, y, w, h) .. method:: LCD160CR.rect_outline(x, y, w, h) .. method:: LCD160CR.rect_interior(x, y, w, h) ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.rect_outline"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.rect_outline");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.rect_outline(x, y, w, h) .. method:: LCD160CR.rect_interior(x, y, w, h) Draw a rectangle at the given location and size using the pen line ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.rect_interior"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.rect_interior");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.rect_interior(x, y, w, h) Draw a rectangle at the given location and size using the pen line color for the outline, and the pen fill color for the interior. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.line"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.line");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.line(x1, y1, x2, y2) Draw a line between the given coordinates using the pen line color. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.dot_no_clip"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.dot_no_clip");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.dot_no_clip(x, y) .. method:: LCD160CR.rect_no_clip(x, y, w, h) .. method:: LCD160CR.rect_outline_no_clip(x, y, w, h) .. method:: LCD160CR.rect_interior_no_clip(x, y, w, h) ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.rect_no_clip"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.rect_no_clip");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.rect_no_clip(x, y, w, h) .. method:: LCD160CR.rect_outline_no_clip(x, y, w, h) .. method:: LCD160CR.rect_interior_no_clip(x, y, w, h) .. method:: LCD160CR.line_no_clip(x1, y1, x2, y2) ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.rect_outline_no_clip"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.rect_outline_no_clip");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.rect_outline_no_clip(x, y, w, h) .. method:: LCD160CR.rect_interior_no_clip(x, y, w, h) .. method:: LCD160CR.line_no_clip(x1, y1, x2, y2) ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.rect_interior_no_clip"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.rect_interior_no_clip");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.rect_interior_no_clip(x, y, w, h) .. method:: LCD160CR.line_no_clip(x1, y1, x2, y2) These methods are as above but don't do any clipping on the input ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.line_no_clip"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.line_no_clip");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.line_no_clip(x1, y1, x2, y2) These methods are as above but don't do any clipping on the input coordinates. They are faster than the clipping versions and can be ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.poly_dot"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.poly_dot");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.poly_dot(data) Draw a sequence of dots using the pen line color. The *data* should be a buffer of bytes, with each successive pair of ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.poly_line"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.poly_line");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.poly_line(data) Similar to :meth:`LCD160CR.poly_dot` but draws lines between the dots. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.touch_config"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.touch_config");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.touch_config(calib=False, save=False, irq=None) Configure the touch panel: ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.is_touched"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" LCD160CR.is_touched");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.is_touched() Returns a boolean: ``True`` if there is currently a touch force on the scree n, ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.get_touch"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" LCD160CR.get_touch");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.get_touch() Returns a 3-tuple of: *(active, x, y)*. If there is currently a touch force on the screen then *active* is 1, otherwise it is 0. The functions.txt list.txt listT.txt onlyfunctions.txt tmp.txt toolbox.js toolbox.xml toolbox.xml.sample toolbox_custom.xml and onlyfunctions.txt values ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.set_spi_win"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.set_spi_win");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.set_spi_win(x, y, w, h) Set the window that SPI data is written to. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.fast_spi"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.fast_spi");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: LCD160CR.fast_spi(flush=True) Ready the display to accept RGB pixel data on the SPI bus, resetting the loc ation ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.show_framebuf"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.show_framebuf");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.show_framebuf(buf) Show the given buffer on the display. *buf* should be an array of bytes con taining ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.set_scroll"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.set_scroll");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.set_scroll(on) Turn scrolling on or off. This controls globally whether any window regions will ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.set_scroll_win"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.set_scroll_win");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.set_scroll_win(win, x=-1, y=0, w=0, h=0, vec=0, pat=0, fill =0x07e0, color=0) Configure a window region for scrolling: ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.set_scroll_win_param"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.set_scroll_win_param");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.set_scroll_win_param(win, param, value) Set a single parameter of a scrolling window region: ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.set_scroll_buf"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.set_scroll_buf");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.set_scroll_buf(s) Set the string for scrolling in window 8. The parameter block_definitions.js block_definitions_custom.js functions.txt generate-blocks.sh generator_stubs.js generator_stubs_custom.js list.txt listT.txt onlyfunctions.txt toolbox.js toolbox.xml.sample toolbox_custom.xml must be a strin g ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.jpeg"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.jpeg");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.jpeg(buf) Display a JPEG. *buf* should contain the entire JPEG data. JPEG data should not include EXIF information. The following encodings are supported: Baselin ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.jpeg_start"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.jpeg_start");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.jpeg_start(total_len) .. method:: LCD160CR.jpeg_data(buf) Display a JPEG with the data split across multiple buffers. There must be ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.jpeg_data"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" LCD160CR.jpeg_data");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.jpeg_data(buf) Display a JPEG with the data split across multiple buffers. There must be a single call to `jpeg_start` to begin with, specifying the total number of ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.feed_wdt"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" LCD160CR.feed_wdt");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.feed_wdt() The first call to this method will start the display's internal watchdog timer. Subsequent calls will feed the watchdog. The timeout is roughly 30 ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["lcd160cr_LCD160CR.reset"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" LCD160CR.reset");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: LCD160CR.reset() Reset the display. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/lcd160cr.html");
  }
};



Blockly.Blocks["machine.ADC_ADC.read_u16"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" ADC.read_u16");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: ADC.read_u16() Take an analog reading and return an integer in the range 0-65535. The return value represents the raw reading taken by the ADC, scaled ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.ADC.html");
  }
};



Blockly.Blocks["machine.ADCWiPy_ADCWiPy.channel"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" ADCWiPy.channel");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.ADCWiPy.html");
  }
};



Blockly.Blocks["machine.ADCWiPy_ADCWiPy.init"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" ADCWiPy.init");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: ADCWiPy.init() Enable the ADC block. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.ADCWiPy.html");
  }
};



Blockly.Blocks["machine.ADCWiPy_ADCWiPy.deinit"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" ADCWiPy.deinit");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: ADCWiPy.deinit() Disable the ADC block. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.ADCWiPy.html");
  }
};



Blockly.Blocks["machine.ADCWiPy_adcchannel"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" adcchannel");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: adcchannel() Fast method to read the channel value. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.ADCWiPy.html");
  }
};



Blockly.Blocks["machine.ADCWiPy_adcchannel.value"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" adcchannel.value");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: adcchannel.value() Read the channel value. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.ADCWiPy.html");
  }
};



Blockly.Blocks["machine.ADCWiPy_adcchannel.init"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" adcchannel.init");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: adcchannel.init() Re-init (and effectively enable) the ADC channel. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.ADCWiPy.html");
  }
};



Blockly.Blocks["machine.ADCWiPy_adcchannel.deinit"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" adcchannel.deinit");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: adcchannel.deinit() Disable the ADC channel. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.ADCWiPy.html");
  }
};



Blockly.Blocks["machine.I2C_I2C.init"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" I2C.init");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};



Blockly.Blocks["machine.I2C_I2C.deinit"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" I2C.deinit");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: I2C.deinit() Turn off the I2C bus. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};



Blockly.Blocks["machine.I2C_I2C.scan"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" I2C.scan");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: I2C.scan() Scan all I2C addresses between 0x08 and 0x77 inclusive and return a list of those that respond. A device responds if it pulls the SDA line low after ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};



Blockly.Blocks["machine.I2C_I2C.start"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" I2C.start");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: I2C.start() Generate a START condition on the bus (SDA transitions to low while SCL is hi gh). ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};



Blockly.Blocks["machine.I2C_I2C.stop"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" I2C.stop");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: I2C.stop() Generate a STOP condition on the bus (SDA transitions to high while SCL is hi gh). ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};



Blockly.Blocks["machine.I2C_I2C.readinto"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" I2C.readinto");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: I2C.readinto(buf, nack=True, /) Reads bytes from the bus and stores them into *buf*. The number of bytes read is the length of *buf*. An ACK will be sent on the bus after ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};



Blockly.Blocks["machine.I2C_I2C.write"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" I2C.write");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: I2C.write(buf) Write the bytes from *buf* to the bus. Checks that an ACK is received after each byte and stops transmitting the remaining bytes if a NACK is ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};



Blockly.Blocks["machine.I2C_I2C.readfrom"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" I2C.readfrom");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: I2C.readfrom(addr, nbytes, stop=True, /) Read *nbytes* from the slave specified by *addr*. If *stop* is true then a STOP condition is generated at the end of the transf ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};



Blockly.Blocks["machine.I2C_I2C.readfrom_into"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" I2C.readfrom_into");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: I2C.readfrom_into(addr, buf, stop=True, /) Read into *buf* from the slave specified by *addr*. The number of bytes read will be the length of *buf*. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};



Blockly.Blocks["machine.I2C_I2C.writeto"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" I2C.writeto");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: I2C.writeto(addr, buf, stop=True, /) Write the bytes from *buf* to the slave specified by *addr*. If a NACK is received following the write of a byte from *buf* then the ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};



Blockly.Blocks["machine.I2C_I2C.writevto"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" I2C.writevto");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: I2C.writevto(addr, vector, stop=True, /) Write the bytes contained in *vector* to the slave specified by *addr*. *vector* should be a tuple or list of objects with the buffer protocol. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};



Blockly.Blocks["machine.I2C_I2C.readfrom_mem"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" I2C.readfrom_mem");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};



Blockly.Blocks["machine.I2C_I2C.readfrom_mem_into"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" I2C.readfrom_mem_into");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};



Blockly.Blocks["machine.I2C_I2C.writeto_mem"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" I2C.writeto_mem");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};



Blockly.Blocks["machine.Pin_Pin.init"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" Pin.init");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.Pin.html");
  }
};



Blockly.Blocks["machine.Pin_Pin.value"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" Pin.value");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.Pin.html");
  }
};



Blockly.Blocks["machine.Pin_Pin.__call__"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" Pin.__call__");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.Pin.html");
  }
};



Blockly.Blocks["machine.Pin_Pin.on"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Pin.on");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Pin.on() Set pin to 1 output level. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.Pin.html");
  }
};



Blockly.Blocks["machine.Pin_Pin.off"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Pin.off");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Pin.off() Set pin to 0 output level. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.Pin.html");
  }
};



Blockly.Blocks["machine.Pin_Pin.mode"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" Pin.mode");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.Pin.html");
  }
};



Blockly.Blocks["machine.Pin_Pin.pull"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" Pin.pull");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.Pin.html");
  }
};



Blockly.Blocks["machine.Pin_Pin.drive"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" Pin.drive");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.Pin.html");
  }
};



Blockly.Blocks["machine.Pin_Pin.irq"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" Pin.irq");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Pin.irq(handler=None, trigger=(Pin.IRQ_FALLING | Pin.IRQ_RISING), \* , priority=1, wake=None, hard=False) Configure an interrupt handler to be called when the trigger source of the ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.Pin.html");
  }
};



Blockly.Blocks["machine_reset"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" reset");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: reset() Resets the device in a manner similar to pushing the external RESET button. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.html");
  }
};



Blockly.Blocks["machine_soft_reset"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" soft_reset");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: soft_reset() Performs a soft reset of the interpreter, deleting all Python objects and resetting the Python heap. It tries to retain the method by which the user ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.html");
  }
};



Blockly.Blocks["machine_reset_cause"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" reset_cause");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: reset_cause() Get the reset cause. See :ref:`constants <machine_constants>` for the possibl e return values. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.html");
  }
};



Blockly.Blocks["machine_disable_irq"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" disable_irq");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: disable_irq() Disable interrupt requests. Returns the previous IRQ state which should be considered an opaque value. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.html");
  }
};



Blockly.Blocks["machine_enable_irq"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" enable_irq");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: enable_irq(state) Re-enable interrupt requests. The *state* parameter should be the value that was returned from the most ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.html");
  }
};



Blockly.Blocks["machine_freq"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" freq");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: freq() Returns CPU frequency in hertz. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.html");
  }
};



Blockly.Blocks["machine_idle"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" idle");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: idle() Gates the clock to the CPU, useful to reduce power consumption at any time du ring ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.html");
  }
};



Blockly.Blocks["machine_sleep"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" sleep");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: sleep() .. note:: This function is deprecated, use `lightsleep()` instead with no arg uments. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.html");
  }
};



Blockly.Blocks["machine_lightsleep"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" lightsleep");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.html");
  }
};



Blockly.Blocks["machine_wake_reason"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" wake_reason");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: wake_reason() Get the wake reason. See :ref:`constants <machine_constants>` for the possibl e return values. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.html");
  }
};



Blockly.Blocks["machine_unique_id"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" unique_id");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: unique_id() Returns a byte string with a unique identifier of a board/SoC. It will vary from a board/SoC instance to another, if underlying hardware allows. Length ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.html");
  }
};



Blockly.Blocks["machine_time_pulse_us"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" time_pulse_us");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: time_pulse_us(pin, pulse_level, timeout_us=1000000, /) Time a pulse on the given *pin*, and return the duration of the pulse in microseconds. The *pulse_level* argument should be 0 to time a low pulse ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.html");
  }
};



Blockly.Blocks["machine_rng"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" rng");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: rng() Return a 24-bit software generated random number. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.html");
  }
};



Blockly.Blocks["machine.RTC_RTC.init"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" RTC.init");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: RTC.init(datetime) Initialise the RTC. Datetime is a tuple of the form: ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.RTC.html");
  }
};



Blockly.Blocks["machine.RTC_RTC.now"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" RTC.now");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: RTC.now() Get get the current datetime tuple. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.RTC.html");
  }
};



Blockly.Blocks["machine.RTC_RTC.deinit"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" RTC.deinit");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: RTC.deinit() Resets the RTC to the time of January 1, 2015 and starts running it again. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.RTC.html");
  }
};



Blockly.Blocks["machine.RTC_RTC.alarm"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" RTC.alarm");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.RTC.html");
  }
};



Blockly.Blocks["machine.RTC_RTC.alarm_left"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" RTC.alarm_left");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: RTC.alarm_left(alarm_id=0) Get the number of milliseconds left before the alarm expires. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.RTC.html");
  }
};



Blockly.Blocks["machine.RTC_RTC.cancel"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" RTC.cancel");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: RTC.cancel(alarm_id=0) Cancel a running alarm. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.RTC.html");
  }
};



Blockly.Blocks["machine.RTC_RTC.irq"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" RTC.irq");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.RTC.html");
  }
};



Blockly.Blocks["machine.SD_SD.init"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" SD.init");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: SD.init(id=0, pins=('GP10', 'GP11', 'GP15')) Enable the SD card. In order to initialize the card, give it a 3-tuple: ``(clk_pin, cmd_pin, dat0_pin)``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.SD.html");
  }
};



Blockly.Blocks["machine.SD_SD.deinit"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" SD.deinit");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: SD.deinit() Disable the SD card. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.SD.html");
  }
};



Blockly.Blocks["machine.Signal_Signal.value"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" Signal.value");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.Signal.html");
  }
};



Blockly.Blocks["machine.Signal_Signal.on"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Signal.on");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Signal.on() Activate signal. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.Signal.html");
  }
};



Blockly.Blocks["machine.Signal_Signal.off"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Signal.off");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Signal.off() Deactivate signal. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.Signal.html");
  }
};



Blockly.Blocks["machine.SPI_SPI.init"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" SPI.init");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.SPI.html");
  }
};



Blockly.Blocks["machine.SPI_SPI.deinit"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" SPI.deinit");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: SPI.deinit() Turn off the SPI bus. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.SPI.html");
  }
};



Blockly.Blocks["machine.SPI_SPI.read"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" SPI.read");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: SPI.read(nbytes, write=0x00) Read a number of bytes specified by ``nbytes`` while continuously writing the single byte given by ``write``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.SPI.html");
  }
};



Blockly.Blocks["machine.SPI_SPI.readinto"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" SPI.readinto");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: SPI.readinto(buf, write=0x00) Read into the buffer specified by ``buf`` while continuously writing the single byte given by ``write``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.SPI.html");
  }
};



Blockly.Blocks["machine.SPI_SPI.write"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" SPI.write");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: SPI.write(buf) Write the bytes contained in ``buf``. Returns ``None``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.SPI.html");
  }
};



Blockly.Blocks["machine.SPI_SPI.write_readinto"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" SPI.write_readinto");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: SPI.write_readinto(write_buf, read_buf) Write the bytes from ``write_buf`` while reading into ``read_buf``. The buffers can be the same or different, but both buffers must have the ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.SPI.html");
  }
};



Blockly.Blocks["machine.Timer_Timer.init"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" Timer.init");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.Timer.html");
  }
};



Blockly.Blocks["machine.Timer_Timer.deinit"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Timer.deinit");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Timer.deinit() Deinitialises the timer. Stops the timer, and disables the timer peripheral. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.Timer.html");
  }
};



Blockly.Blocks["machine.TimerWiPy_TimerWiPy.init"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" TimerWiPy.init");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.TimerWiPy.html");
  }
};



Blockly.Blocks["machine.TimerWiPy_TimerWiPy.deinit"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" TimerWiPy.deinit");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: TimerWiPy.deinit() Deinitialises the timer. Stops the timer, and disables the timer peripheral. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.TimerWiPy.html");
  }
};



Blockly.Blocks["machine.TimerWiPy_TimerWiPy.channel"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" TimerWiPy.channel");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.TimerWiPy.html");
  }
};



Blockly.Blocks["machine.TimerWiPy_timerchannel.irq"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" timerchannel.irq");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.TimerWiPy.html");
  }
};



Blockly.Blocks["machine.TimerWiPy_timerchannel.freq"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" timerchannel.freq");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.TimerWiPy.html");
  }
};



Blockly.Blocks["machine.TimerWiPy_timerchannel.period"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" timerchannel.period");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.TimerWiPy.html");
  }
};



Blockly.Blocks["machine.TimerWiPy_timerchannel.duty_cycle"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" timerchannel.duty_cycle");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.TimerWiPy.html");
  }
};



Blockly.Blocks["machine.UART_UART.init"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" UART.init");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.UART.html");
  }
};



Blockly.Blocks["machine.UART_UART.deinit"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" UART.deinit");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: UART.deinit() Turn off the UART bus. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.UART.html");
  }
};



Blockly.Blocks["machine.UART_UART.any"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" UART.any");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: UART.any() Returns an integer counting the number of characters that can be read without blocking. It will return 0 if there are no characters available and a positi ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.UART.html");
  }
};



Blockly.Blocks["machine.UART_UART.read"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" UART.read");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.UART.html");
  }
};



Blockly.Blocks["machine.UART_UART.readinto"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" UART.readinto");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.UART.html");
  }
};



Blockly.Blocks["machine.UART_UART.readline"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" UART.readline");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: UART.readline() Read a line, ending in a newline character. It may return sooner if a timeout is reached. The timeout is configurable in the constructor. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.UART.html");
  }
};



Blockly.Blocks["machine.UART_UART.write"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" UART.write");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: UART.write(buf) Write the buffer of bytes to the bus. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.UART.html");
  }
};



Blockly.Blocks["machine.UART_UART.sendbreak"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" UART.sendbreak");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: UART.sendbreak() Send a break condition on the bus. This drives the bus low for a duration longer than required for a normal transmission of a character. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.UART.html");
  }
};



Blockly.Blocks["machine.UART_UART.irq"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" UART.irq");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: UART.irq(trigger, priority=1, handler=None, wake=machine.IDLE) Create a callback to be triggered when data is received on the UART. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.UART.html");
  }
};



Blockly.Blocks["machine.WDT_wdt.feed"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" wdt.feed");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: wdt.feed() Feed the WDT to prevent it from resetting the system. The application should place this call in a sensible place ensuring that the WDT is ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.WDT.html");
  }
};



Blockly.Blocks["math_acos"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" acos");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: acos(x) Return the inverse cosine of ``x``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_acosh"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" acosh");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: acosh(x) Return the inverse hyperbolic cosine of ``x``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_asin"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" asin");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: asin(x) Return the inverse sine of ``x``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_asinh"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" asinh");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: asinh(x) Return the inverse hyperbolic sine of ``x``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_atan"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" atan");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: atan(x) Return the inverse tangent of ``x``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_atan2"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" atan2");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: atan2(y, x) Return the principal value of the inverse tangent of ``y/x``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_atanh"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" atanh");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: atanh(x) Return the inverse hyperbolic tangent of ``x``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_ceil"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" ceil");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: ceil(x) Return an integer, being ``x`` rounded towards positive infinity. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_copysign"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" copysign");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: copysign(x, y) Return ``x`` with the sign of ``y``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_cos"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" cos");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: cos(x) Return the cosine of ``x``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_cosh"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" cosh");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: cosh(x) Return the hyperbolic cosine of ``x``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_degrees"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" degrees");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: degrees(x) Return radians ``x`` converted to degrees. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_erf"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" erf");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: erf(x) Return the error function of ``x``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_erfc"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" erfc");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: erfc(x) Return the complementary error function of ``x``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_exp"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" exp");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: exp(x) Return the exponential of ``x``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_expm1"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" expm1");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: expm1(x) Return ``exp(x) - 1``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_fabs"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" fabs");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: fabs(x) Return the absolute value of ``x``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_floor"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" floor");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: floor(x) Return an integer, being ``x`` rounded towards negative infinity. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_fmod"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" fmod");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: fmod(x, y) Return the remainder of ``x/y``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_frexp"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" frexp");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: frexp(x) Decomposes a floating-point number into its mantissa and exponent. The returned value is the tuple ``(m, e)`` such that ``x == m Makefile block_definitions.js block_definitions_custom.js functions.txt generate-blocks.sh generator_stubs.js generator_stubs_custom.js list.txt listT.txt onlyfunctions.txt tmp.txt toolbox.js toolbox.xml toolbox.xml.sample toolbox_custom.xml 2**e`` ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_gamma"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" gamma");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: gamma(x) Return the gamma function of ``x``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_isfinite"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" isfinite");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: isfinite(x) Return ``True`` if ``x`` is finite. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_isinf"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" isinf");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: isinf(x) Return ``True`` if ``x`` is infinite. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_isnan"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" isnan");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: isnan(x) Return ``True`` if ``x`` is not-a-number ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_ldexp"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" ldexp");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: ldexp(x, exp) Return ``x Makefile block_definitions.js block_definitions_custom.js functions.txt generate-blocks.sh generator_stubs.js generator_stubs_custom.js list.txt listT.txt onlyfunctions.txt tmp.txt toolbox.js toolbox.xml toolbox.xml.sample toolbox_custom.xml (2**exp)``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_lgamma"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" lgamma");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: lgamma(x) Return the natural logarithm of the gamma function of ``x``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_log"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" log");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: log(x) Return the natural logarithm of ``x``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_log10"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" log10");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: log10(x) Return the base-10 logarithm of ``x``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_log2"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" log2");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: log2(x) Return the base-2 logarithm of ``x``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_modf"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" modf");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: modf(x) Return a tuple of two floats, being the fractional and integral parts of ``x``. Both return values have the same sign as ``x``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_pow"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" pow");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: pow(x, y) Returns ``x`` to the power of ``y``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_radians"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" radians");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: radians(x) Return degrees ``x`` converted to radians. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_sin"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" sin");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: sin(x) Return the sine of ``x``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_sinh"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" sinh");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: sinh(x) Return the hyperbolic sine of ``x``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_sqrt"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" sqrt");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: sqrt(x) Return the square root of ``x``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_tan"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" tan");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: tan(x) Return the tangent of ``x``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_tanh"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" tanh");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: tanh(x) Return the hyperbolic tangent of ``x``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["math_trunc"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" trunc");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: trunc(x) Return an integer, being ``x`` rounded towards 0. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/math.html");
  }
};



Blockly.Blocks["micropython_const"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" const");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: const(expr) Used to declare that the expression is a constant so that the compile can optimise it. The use of this function should be as follows:: ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/micropython.html");
  }
};



Blockly.Blocks["micropython_opt_level"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" opt_level");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/micropython.html");
  }
};



Blockly.Blocks["micropython_alloc_emergency_exception_buf"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" alloc_emergency_exception_buf");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: alloc_emergency_exception_buf(size) Allocate *size* bytes of RAM for the emergency exception buffer (a good size is around 100 bytes). The buffer is used to create exceptions in cases ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/micropython.html");
  }
};



Blockly.Blocks["micropython_mem_info"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" mem_info");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/micropython.html");
  }
};



Blockly.Blocks["micropython_qstr_info"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" qstr_info");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/micropython.html");
  }
};



Blockly.Blocks["micropython_stack_use"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" stack_use");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: stack_use() Return an integer representing the current amount of stack that is being used. The absolute value of this is not particularly useful, rather it ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/micropython.html");
  }
};



Blockly.Blocks["micropython_heap_lock"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" heap_lock");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: heap_lock() .. function:: heap_unlock() .. function:: heap_locked() ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/micropython.html");
  }
};



Blockly.Blocks["micropython_heap_unlock"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" heap_unlock");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: heap_unlock() .. function:: heap_locked() Lock or unlock the heap. When locked no memory allocation can occur and a ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/micropython.html");
  }
};



Blockly.Blocks["micropython_heap_locked"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" heap_locked");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: heap_locked() Lock or unlock the heap. When locked no memory allocation can occur and a `MemoryError` will be raised if any heap allocation is attempted. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/micropython.html");
  }
};



Blockly.Blocks["micropython_kbd_intr"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" kbd_intr");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: kbd_intr(chr) Set the character that will raise a `KeyboardInterrupt` exception. By default this is set to 3 during script execution, corresponding to Ctrl-C. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/micropython.html");
  }
};



Blockly.Blocks["micropython_schedule"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" schedule");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: schedule(func, arg) Schedule the function functions.txt onlyfunctions.txt to be executed very soon. The function is passed the value *arg* as its single argument. Very soon means that ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/micropython.html");
  }
};



Blockly.Blocks["network_AbstractNIC.active"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" AbstractNIC.active");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/network.html");
  }
};



Blockly.Blocks["network_AbstractNIC.connect"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" AbstractNIC.connect");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/network.html");
  }
};



Blockly.Blocks["network_AbstractNIC.disconnect"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" AbstractNIC.disconnect");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: AbstractNIC.disconnect() Disconnect from network. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/network.html");
  }
};



Blockly.Blocks["network_AbstractNIC.isconnected"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" AbstractNIC.isconnected");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: AbstractNIC.isconnected() Returns ``True`` if connected to network, otherwise returns ``False``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/network.html");
  }
};



Blockly.Blocks["network_AbstractNIC.scan"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" AbstractNIC.scan");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/network.html");
  }
};



Blockly.Blocks["network_AbstractNIC.status"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" AbstractNIC.status");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/network.html");
  }
};



Blockly.Blocks["network_AbstractNIC.ifconfig"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" AbstractNIC.ifconfig");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/network.html");
  }
};



Blockly.Blocks["network_AbstractNIC.config"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" AbstractNIC.config");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: AbstractNIC.config('param') AbstractNIC.config(param=value, ...) Get or set general network interface parameters. These methods allow to w ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/network.html");
  }
};



Blockly.Blocks["network_phy_mode"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" phy_mode");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/network.html");
  }
};



Blockly.Blocks["pyb_delay"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" delay");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: delay(ms) Delay for the given number of milliseconds. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/pyb.html");
  }
};



Blockly.Blocks["pyb_udelay"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" udelay");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: udelay(us) Delay for the given number of microseconds. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/pyb.html");
  }
};



Blockly.Blocks["pyb_millis"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" millis");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: millis() Returns the number of milliseconds since the board was last reset. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/pyb.html");
  }
};



Blockly.Blocks["pyb_micros"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" micros");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: micros() Returns the number of microseconds since the board was last reset. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/pyb.html");
  }
};



Blockly.Blocks["pyb_elapsed_millis"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" elapsed_millis");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: elapsed_millis(start) Returns the number of milliseconds which have elapsed since ``start``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/pyb.html");
  }
};



Blockly.Blocks["pyb_elapsed_micros"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" elapsed_micros");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: elapsed_micros(start) Returns the number of microseconds which have elapsed since ``start``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/pyb.html");
  }
};



Blockly.Blocks["pyb_hard_reset"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" hard_reset");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: hard_reset() Resets the pyboard in a manner similar to pushing the external RESET button. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/pyb.html");
  }
};



Blockly.Blocks["pyb_bootloader"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" bootloader");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: bootloader() Activate the bootloader without BOOT\* pins. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/pyb.html");
  }
};



Blockly.Blocks["pyb_fault_debug"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" fault_debug");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: fault_debug(value) Enable or disable hard-fault debugging. A hard-fault is when there is a fata l ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/pyb.html");
  }
};



Blockly.Blocks["pyb_disable_irq"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" disable_irq");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: disable_irq() Disable interrupt requests. Returns the previous IRQ state: ``False``/``True`` for disabled/enabled IRQs ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/pyb.html");
  }
};



Blockly.Blocks["pyb_enable_irq"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" enable_irq");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: enable_irq(state=True) Enable interrupt requests. If ``state`` is ``True`` (the default value) then IRQs are enabled. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/pyb.html");
  }
};



Blockly.Blocks["pyb_freq"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" freq");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/pyb.html");
  }
};



Blockly.Blocks["pyb_wfi"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" wfi");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: wfi() Wait for an internal or external interrupt. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/pyb.html");
  }
};



Blockly.Blocks["pyb_stop"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" stop");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: stop() Put the pyboard in a sleeping state. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/pyb.html");
  }
};



Blockly.Blocks["pyb_standby"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" standby");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: standby() Put the pyboard into a deep sleep state. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/pyb.html");
  }
};



Blockly.Blocks["pyb_have_cdc"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" have_cdc");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: have_cdc() Return True if USB is connected as a serial device, False otherwise. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/pyb.html");
  }
};



Blockly.Blocks["pyb_hid"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" hid");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: hid((buttons, x, y, z)) Takes a 4-tuple (or list) and sends it to the USB host (the PC) to signal a HID mouse-motion event. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/pyb.html");
  }
};



Blockly.Blocks["pyb_info"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" info");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/pyb.html");
  }
};



Blockly.Blocks["pyb_main"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" main");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: main(filename) Set the filename of the main script to run after boot.py is finished. If this function is not called then the default file main.py will be executed. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/pyb.html");
  }
};



Blockly.Blocks["pyb_mount"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" mount");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/pyb.html");
  }
};



Blockly.Blocks["pyb_repl_uart"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" repl_uart");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: repl_uart(uart) Get or set the UART object where the REPL is repeated on. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/pyb.html");
  }
};



Blockly.Blocks["pyb_rng"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" rng");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: rng() Return a 30-bit hardware generated random number. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/pyb.html");
  }
};



Blockly.Blocks["pyb_sync"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" sync");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: sync() Sync all file systems. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/pyb.html");
  }
};



Blockly.Blocks["pyb_unique_id"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" unique_id");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: unique_id() Returns a string of 12 bytes (96 bits), which is the unique ID of the MCU. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/pyb.html");
  }
};



Blockly.Blocks["pyb_usb_mode"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" usb_mode");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/pyb.html");
  }
};



Blockly.Blocks["sys_exit"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" exit");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: exit(retval=0, /) Terminate current program with a given exit code. Underlyingly, this function raise as `SystemExit` exception. If an argument is given, its ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/sys.html");
  }
};



Blockly.Blocks["sys_atexit"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" atexit");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: atexit(func) Register functions.txt onlyfunctions.txt to be called upon termination. functions.txt onlyfunctions.txt must be a callable that takes no arguments, or ``None`` to disable the call. The ``atexit`` ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/sys.html");
  }
};



Blockly.Blocks["sys_print_exception"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" print_exception");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: print_exception(exc, file=sys.stdout, /) Print exception with a traceback to a file-like object Makefile (or `sys.stdout` by default). ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/sys.html");
  }
};



Blockly.Blocks["uarray_append"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" append");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: append(val) Append new element *val* to the end of array, growing it. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uarray.html");
  }
};



Blockly.Blocks["uarray_extend"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" extend");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: extend(iterable) Append new elements as contained in *iterable* to the end of array, growing it. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uarray.html");
  }
};



Blockly.Blocks["uasyncio_create_task"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" create_task");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: create_task(coro) Create a new task from the given coroutine and schedule it to run. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_run"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" run");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: run(coro) Create a new task from the given coroutine and run it until it completes. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_sleep"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" sleep");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: sleep(t) Sleep for block_definitions.js block_definitions_custom.js functions.txt generate-blocks.sh generator_stubs.js generator_stubs_custom.js list.txt listT.txt onlyfunctions.txt tmp.txt toolbox.js toolbox.xml toolbox.xml.sample toolbox_custom.xml seconds (can be a float). ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_sleep_ms"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" sleep_ms");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: sleep_ms(t) Sleep for block_definitions.js block_definitions_custom.js functions.txt generate-blocks.sh generator_stubs.js generator_stubs_custom.js list.txt listT.txt onlyfunctions.txt tmp.txt toolbox.js toolbox.xml toolbox.xml.sample toolbox_custom.xml milliseconds. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_wait_for"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" wait_for");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: wait_for(awaitable, timeout) Wait for the *awaitable* to complete, but cancel it if it takes longer that *timeout* seconds. If *awaitable* is not a task then a task will be ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_gather"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" gather");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_Task.cancel"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Task.cancel");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Task.cancel() Cancel the task by injecting a ``CancelledError`` into it. The task may or may not ignore this exception. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_Event.is_set"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Event.is_set");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Event.is_set() Returns ``True`` if the event is set, ``False`` otherwise. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_Event.set"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Event.set");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Event.set() Set the event. Any tasks waiting on the event will be scheduled to run. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_Event.clear"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Event.clear");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Event.clear() Clear the event. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_Event.wait"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Event.wait");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Event.wait() Wait for the event to be set. If the event is already set then it returns immediately. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_Lock.locked"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Lock.locked");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Lock.locked() Returns ``True`` if the lock is locked, otherwise ``False``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_Lock.acquire"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Lock.acquire");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Lock.acquire() Wait for the lock to be in the unlocked state and then lock it in an atomic way. Only one task can acquire the lock at any one time. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_Lock.release"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Lock.release");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Lock.release() Release the lock. If any tasks are waiting on the lock then the next one in the ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_open_connection"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" open_connection");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: open_connection(host, port) Open a TCP connection to the given *host* and *port*. The *host* address wi ll be ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_start_server"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" start_server");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: start_server(callback, host, port, backlog=5) Start a TCP server on the given *host* and *port*. The *callback* will be called with incoming, accepted connections, and be passed 2 arguments: reade ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_Stream.get_extra_info"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" Stream.get_extra_info");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: Stream.get_extra_info(v) Get extra information about the stream, given by *v*. The valid values for *v* are: ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_Stream.close"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Stream.close");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Stream.close() Close the stream. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_Stream.wait_closed"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Stream.wait_closed");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Stream.wait_closed() Wait for the stream to close. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_Stream.read"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" Stream.read");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: Stream.read(n) Read up to block_definitions.js block_definitions_custom.js functions.txt generate-blocks.sh generator_stubs.js generator_stubs_custom.js onlyfunctions.txt bytes and return them. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_Stream.readline"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Stream.readline");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: Stream.readline() Read a line and return it. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_Stream.write"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" Stream.write");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Stream.write(buf) Accumulated *buf* to the output buffer. The data is only flushed when `Stream.drain` is called. It is recommended to call `Stream.drain` immediat ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_Stream.drain"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Stream.drain");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Stream.drain() Drain (write) all buffered output data out to the stream. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_Server.close"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Server.close");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Server.close() Close the server. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_Server.wait_closed"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Server.wait_closed");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Server.wait_closed() Wait for the server to close. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_get_event_loop"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" get_event_loop");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: get_event_loop() Return the event loop used to schedule and run tasks. See `Loop`. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_new_event_loop"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" new_event_loop");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: new_event_loop() Reset the event loop and return it. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_Loop.create_task"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" Loop.create_task");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Loop.create_task(coro) Create a task from the given *coro* and return the new `Task` object. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_Loop.run_forever"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Loop.run_forever");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Loop.run_forever() Run the event loop until `stop()` is called. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_Loop.run_until_complete"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" Loop.run_until_complete");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Loop.run_until_complete(awaitable) Run the given *awaitable* until it completes. If *awaitable* is not a task then it will be promoted to one. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_Loop.stop"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Loop.stop");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Loop.stop() Stop the event loop. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_Loop.close"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Loop.close");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Loop.close() Close the event loop. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_Loop.set_exception_handler"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" Loop.set_exception_handler");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Loop.set_exception_handler(handler) Set the exception handler to call when a Task raises an exception that is no t ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_Loop.get_exception_handler"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Loop.get_exception_handler");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: Loop.get_exception_handler() Get the current exception handler. Returns the handler, or ``None`` if no custom handler is set. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_Loop.default_exception_handler"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" Loop.default_exception_handler");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Loop.default_exception_handler(context) The default exception handler that is called. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["uasyncio_Loop.call_exception_handler"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" Loop.call_exception_handler");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: Loop.call_exception_handler(context) Call the current exception handler. The argument *context* is passed throug h and ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uasyncio.html");
  }
};



Blockly.Blocks["ubinascii_hexlify"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" hexlify");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ubinascii.html");
  }
};



Blockly.Blocks["ubinascii_unhexlify"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" unhexlify");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: unhexlify(data) Convert hexadecimal data to binary representation. Returns bytes string. (i.e. inverse of hexlify) ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ubinascii.html");
  }
};



Blockly.Blocks["ubinascii_a2b_base64"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" a2b_base64");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: a2b_base64(data) Decode base64-encoded data, ignoring invalid characters in the input. Conforms to `RFC 2045 s.6.8 <https://tools.ietf.org/html/rfc2045#section-6.8> ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ubinascii.html");
  }
};



Blockly.Blocks["ubinascii_b2a_base64"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" b2a_base64");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: b2a_base64(data) Encode binary data in base64 format, as in `RFC 3548 <https://tools.ietf.org/html/rfc3548.html>`_. Returns the encoded data ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ubinascii.html");
  }
};



Blockly.Blocks["ubluetooth_BLE.active"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" BLE.active");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ubluetooth.html");
  }
};



Blockly.Blocks["ubluetooth_BLE.config"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" BLE.config");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: BLE.config('param') BLE.config(param=value, ...) Get or set configuration values of the BLE interface. To get a value the ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ubluetooth.html");
  }
};



Blockly.Blocks["ubluetooth_BLE.irq"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" BLE.irq");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: BLE.irq(handler, trigger=0xffff) Registers a callback for events from the BLE stack. The *handler* takes two arguments, ``event`` (which will be one of the codes below) and ``data`` ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ubluetooth.html");
  }
};



Blockly.Blocks["ubluetooth_BLE.gap_advertise"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" BLE.gap_advertise");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: BLE.gap_advertise(interval_us, adv_data=None, resp_data=None, connec table=True) Starts advertising at the specified interval (in **micro**\ seconds). This ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ubluetooth.html");
  }
};



Blockly.Blocks["ubluetooth_BLE.gap_scan"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" BLE.gap_scan");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ubluetooth.html");
  }
};



Blockly.Blocks["ubluetooth_BLE.gatts_register_services"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" BLE.gatts_register_services");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: BLE.gatts_register_services(services_definition) Configures the peripheral with the specified services, replacing any existing services. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ubluetooth.html");
  }
};



Blockly.Blocks["ubluetooth_BLE.gatts_read"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" BLE.gatts_read");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: BLE.gatts_read(value_handle) Reads the local value for this handle (which has either been written by :meth:`gatts_write <BLE.gatts_write>` or by a remote central). ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ubluetooth.html");
  }
};



Blockly.Blocks["ubluetooth_BLE.gatts_write"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" BLE.gatts_write");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: BLE.gatts_write(value_handle, data) Writes the local value for this handle, which can be read by a central. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ubluetooth.html");
  }
};



Blockly.Blocks["ubluetooth_BLE.gatts_notify"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" BLE.gatts_notify");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ubluetooth.html");
  }
};



Blockly.Blocks["ubluetooth_BLE.gatts_set_buffer"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" BLE.gatts_set_buffer");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: BLE.gatts_set_buffer(value_handle, len, append=False, /) Sets the internal buffer size for a value in bytes. This will limit the largest possible write that can be received. The default is 20. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ubluetooth.html");
  }
};



Blockly.Blocks["ubluetooth_BLE.gap_connect"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" BLE.gap_connect");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: BLE.gap_connect(addr_type, addr, scan_duration_ms=2000, /) Connect to a peripheral. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ubluetooth.html");
  }
};



Blockly.Blocks["ubluetooth_BLE.gap_disconnect"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" BLE.gap_disconnect");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: BLE.gap_disconnect(conn_handle) Disconnect the specified connection handle. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ubluetooth.html");
  }
};



Blockly.Blocks["ubluetooth_BLE.gattc_discover_services"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" BLE.gattc_discover_services");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: BLE.gattc_discover_services(conn_handle) Query a connected peripheral for its services. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ubluetooth.html");
  }
};



Blockly.Blocks["ubluetooth_BLE.gattc_discover_characteristics"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" BLE.gattc_discover_characteristics");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: BLE.gattc_discover_characteristics(conn_handle, start_handle, end_ha ndle) Query a connected peripheral for characteristics in the specified range. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ubluetooth.html");
  }
};



Blockly.Blocks["ubluetooth_BLE.gattc_discover_descriptors"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" BLE.gattc_discover_descriptors");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: BLE.gattc_discover_descriptors(conn_handle, start_handle, end_handle ) Query a connected peripheral for descriptors in the specified range. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ubluetooth.html");
  }
};



Blockly.Blocks["ubluetooth_BLE.gattc_read"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" BLE.gattc_read");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: BLE.gattc_read(conn_handle, value_handle) Issue a remote read to a connected peripheral for the specified characteristic or descriptor handle. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ubluetooth.html");
  }
};



Blockly.Blocks["ubluetooth_BLE.gattc_write"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" BLE.gattc_write");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: BLE.gattc_write(conn_handle, value_handle, data, mode=0, /) Issue a remote write to a connected peripheral for the specified characteristic or descriptor handle. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ubluetooth.html");
  }
};



Blockly.Blocks["ucollections_deque"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" deque");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ucollections.html");
  }
};



Blockly.Blocks["ucollections_deque.append"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" deque.append");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: deque.append(x) Add functions.txt list.txt listT.txt onlyfunctions.txt tmp.txt toolbox.js toolbox.xml toolbox.xml.sample toolbox_custom.xml to the right side of the deque. Raises IndexError if overflow checking is enabled and there is no more r ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ucollections.html");
  }
};



Blockly.Blocks["ucollections_deque.popleft"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" deque.popleft");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: deque.popleft() Remove and return an item from the left side of the deque. Raises IndexError if no items are present. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ucollections.html");
  }
};



Blockly.Blocks["ucollections_namedtuple"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" namedtuple");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: namedtuple(name, fields) This is factory function to create a new namedtuple type with a specific name and set of fields. A namedtuple is a subclass of tuple which allows ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ucollections.html");
  }
};



Blockly.Blocks["ucollections_OrderedDict"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" OrderedDict");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: OrderedDict(...) ``dict`` type subclass which remembers and preserves the order of keys added. When ordered dict is iterated over, keys/items are returned in ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ucollections.html");
  }
};



Blockly.Blocks["ucryptolib_encrypt"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" encrypt");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ucryptolib.html");
  }
};



Blockly.Blocks["ucryptolib_decrypt"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" decrypt");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ucryptolib.html");
  }
};



Blockly.Blocks["uctypes_sizeof"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" sizeof");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: sizeof(struct, layout_type=NATIVE, /) Return size of data structure in bytes. The *struct* argument can be either a structure class or a specific instantiated structure object ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uctypes.html");
  }
};



Blockly.Blocks["uctypes_addressof"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" addressof");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: addressof(obj) Return address of an object. Argument should be bytes, bytearray or other object supporting buffer protocol (and address of this buffer ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uctypes.html");
  }
};



Blockly.Blocks["uctypes_bytes_at"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" bytes_at");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: bytes_at(addr, size) Capture memory at the given address and size as bytes object. As bytes object is immutable, memory is actually duplicated and copied into ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uctypes.html");
  }
};



Blockly.Blocks["uctypes_bytearray_at"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" bytearray_at");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: bytearray_at(addr, size) Capture memory at the given address and size as bytearray object. Unlike bytes_at() function above, memory is captured by reference, ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uctypes.html");
  }
};



Blockly.Blocks["uhashlib_hash.update"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" hash.update");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: hash.update(data) Feed more binary data into hash. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uhashlib.html");
  }
};



Blockly.Blocks["uhashlib_hash.digest"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" hash.digest");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: hash.digest() Return hash for all data passed through hash, as a bytes object. After this method is called, more data cannot be fed into the hash any longer. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uhashlib.html");
  }
};



Blockly.Blocks["uhashlib_hash.hexdigest"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" hash.hexdigest");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: hash.hexdigest() This method is NOT implemented. Use ``ubinascii.hexlify(hash.digest())`` to achieve a similar effect. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uhashlib.html");
  }
};



Blockly.Blocks["uheapq_heappush"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" heappush");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: heappush(heap, item) Push the ``item`` onto the ``heap``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uheapq.html");
  }
};



Blockly.Blocks["uheapq_heappop"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" heappop");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: heappop(heap) Pop the first item from the ``heap``, and return it. Raises IndexError if heap is empty. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uheapq.html");
  }
};



Blockly.Blocks["uheapq_heapify"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" heapify");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: heapify(x) Convert the list ``x`` into a heap. This is an in-place operation. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uheapq.html");
  }
};



Blockly.Blocks["uio_open"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" open");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uio.html");
  }
};



Blockly.Blocks["uio_getvalue"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" getvalue");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: getvalue() Get the current contents of the underlying buffer which holds data. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uio.html");
  }
};



Blockly.Blocks["ujson_dump"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" dump");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: dump(obj, stream) Serialise *obj* to a JSON string, writing it to the given *stream*. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ujson.html");
  }
};



Blockly.Blocks["ujson_dumps"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" dumps");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: dumps(obj) Return *obj* represented as a JSON string. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ujson.html");
  }
};



Blockly.Blocks["ujson_load"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" load");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: load(stream) Parse the given *stream*, interpreting it as a JSON string and deserialising the data to a Python object. The resulting object is ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ujson.html");
  }
};



Blockly.Blocks["ujson_loads"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" loads");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: loads(str) Parse the JSON *str* and return an object. Raises :exc:`ValueError` if the string is not correctly formed. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ujson.html");
  }
};



Blockly.Blocks["uos_uname"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" uname");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: uname() Return a tuple (possibly a named tuple) containing information about the underlying machine and/or its operating system. The tuple has five fields ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["uos_urandom"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" urandom");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: urandom(n) Return a bytes object with block_definitions.js block_definitions_custom.js functions.txt generate-blocks.sh generator_stubs.js generator_stubs_custom.js onlyfunctions.txt random bytes. Whenever possible, it is generated by the hardware random number generator. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["uos_chdir"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" chdir");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: chdir(path) Change current directory. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["uos_getcwd"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" getcwd");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: getcwd() Get the current directory. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["uos_ilistdir"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" ilistdir");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["uos_listdir"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" listdir");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["uos_mkdir"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" mkdir");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: mkdir(path) Create a new directory. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["uos_remove"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" remove");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: remove(path) Remove a file. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["uos_rmdir"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" rmdir");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: rmdir(path) Remove a directory. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["uos_rename"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" rename");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: rename(old_path, new_path) Rename a file. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["uos_stat"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" stat");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: stat(path) Get the status of a file or directory. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["uos_statvfs"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" statvfs");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: statvfs(path) Get the status of a fileystem. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["uos_sync"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" sync");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: sync() Sync all filesystems. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["uos_dupterm"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" dupterm");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: dupterm(stream_object, index=0, /) Duplicate or switch the MicroPython terminal (the REPL) on the given `stream` -like ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["uos_mount"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" mount");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["uos_umount"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" umount");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: umount(mount_point) Unmount a filesystem. *mount_point* can be a string naming the mount locatio n, ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["uos_readblocks"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" readblocks");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: readblocks(block_num, buf) .. method:: readblocks(block_num, buf, offset) The first form reads aligned, multiples of blocks. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["uos_readblocks"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" readblocks");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: readblocks(block_num, buf, offset) The first form reads aligned, multiples of blocks. Starting at the block given by the index *block_num*, read blocks from ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["uos_writeblocks"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" writeblocks");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: writeblocks(block_num, buf) .. method:: writeblocks(block_num, buf, offset) The first form writes aligned, multiples of blocks, and requires that th ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["uos_writeblocks"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" writeblocks");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: writeblocks(block_num, buf, offset) The first form writes aligned, multiples of blocks, and requires that th e ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["uos_ioctl"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" ioctl");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: ioctl(op, arg) Control the block device and query its parameters. The operation to perform is given by *op* which is one of the following integers: ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["ure_compile"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" compile");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ure.html");
  }
};



Blockly.Blocks["ure_match"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" match");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: match(regex_str, string) Compile *regex_str* and match against *string*. Match always happens from starting position in a string. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ure.html");
  }
};



Blockly.Blocks["ure_search"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" search");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: search(regex_str, string) Compile *regex_str* and search it in a *string*. Unlike `match`, this will se arch ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ure.html");
  }
};



Blockly.Blocks["ure_sub"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" sub");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: sub(regex_str, replace, string, count=0, flags=0, /) Compile *regex_str* and search for it in *string*, replacing all matches with *replace*, and returning the new string. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ure.html");
  }
};



Blockly.Blocks["ure_regex.match"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" regex.match");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: regex.match(string) regex.search(string) regex.sub(replace, string, count=0, flags=0, /) ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ure.html");
  }
};



Blockly.Blocks["ure_regex.split"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" regex.split");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: regex.split(string, max_split=-1, /) Split a *string* using regex. If *max_split* is given, it specifies maximum number of splits to perform. Returns list of strings (there ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ure.html");
  }
};



Blockly.Blocks["ure_match.group"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" match.group");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: match.group(index) Return matching (sub)string. *index* is 0 for entire match, 1 and above for each capturing group. Only numeric groups are supported. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ure.html");
  }
};



Blockly.Blocks["ure_match.groups"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" match.groups");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: match.groups() Return a tuple containing all the substrings of the groups of the match. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ure.html");
  }
};



Blockly.Blocks["ure_match.start"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" match.start");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ure.html");
  }
};



Blockly.Blocks["ure_match.span"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" match.span");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ure.html");
  }
};



Blockly.Blocks["uselect_poll"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" poll");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: poll() Create an instance of the Poll class. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uselect.html");
  }
};



Blockly.Blocks["uselect_select"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" select");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uselect.html");
  }
};



Blockly.Blocks["uselect_poll.register"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" poll.register");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uselect.html");
  }
};



Blockly.Blocks["uselect_poll.unregister"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" poll.unregister");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: poll.unregister(obj) Unregister *obj* from polling. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uselect.html");
  }
};



Blockly.Blocks["uselect_poll.modify"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" poll.modify");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: poll.modify(obj, eventmask) Modify the *eventmask* for *obj*. If *obj* is not registered, `OSError` is raised with error of ENOENT. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uselect.html");
  }
};



Blockly.Blocks["uselect_poll.poll"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" poll.poll");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: poll.poll(timeout=-1, /) Wait for at least one of the registered objects to become ready or have an exceptional condition, with optional timeout in milliseconds (if *timeout* ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uselect.html");
  }
};



Blockly.Blocks["uselect_poll.ipoll"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" poll.ipoll");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: poll.ipoll(timeout=-1, flags=0, /) Like :meth:`poll.poll`, but instead returns an iterator which yields a `callee-owned tuple`. This function provides an efficient, allocation-free ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uselect.html");
  }
};



Blockly.Blocks["usocket_socket"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" socket");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: socket(af=AF_INET, type=SOCK_STREAM, proto=IPPROTO_TCP, /) Create a new socket using the given address family, socket type and protocol number. Note that specifying *proto* in most cases is not ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/usocket.html");
  }
};



Blockly.Blocks["usocket_getaddrinfo"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" getaddrinfo");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: getaddrinfo(host, port, af=0, type=0, proto=0, flags=0, /) Translate the host/port argument into a sequence of 5-tuples that contain all the ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/usocket.html");
  }
};



Blockly.Blocks["usocket_inet_ntop"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" inet_ntop");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: inet_ntop(af, bin_addr) Convert a binary network address *bin_addr* of the given address family *af* to a textual representation:: ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/usocket.html");
  }
};



Blockly.Blocks["usocket_inet_pton"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" inet_pton");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: inet_pton(af, txt_addr) Convert a textual network address *txt_addr* of the given address family *af* to a binary representation:: ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/usocket.html");
  }
};



Blockly.Blocks["usocket_socket.close"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" socket.close");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: socket.close() Mark the socket closed and release all resources. Once that happens, all futu re operations ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/usocket.html");
  }
};



Blockly.Blocks["usocket_socket.bind"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" socket.bind");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: socket.bind(address) Bind the socket to *address*. The socket must not already be bound. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/usocket.html");
  }
};



Blockly.Blocks["usocket_socket.listen"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" socket.listen");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/usocket.html");
  }
};



Blockly.Blocks["usocket_socket.accept"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" socket.accept");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: socket.accept() Accept a connection. The socket must be bound to an address and listening for connections. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/usocket.html");
  }
};



Blockly.Blocks["usocket_socket.connect"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" socket.connect");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: socket.connect(address) Connect to a remote socket at *address*. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/usocket.html");
  }
};



Blockly.Blocks["usocket_socket.send"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" socket.send");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: socket.send(bytes) Send data to the socket. The socket must be connected to a remote socket. Returns number of bytes sent, which may be smaller than the length of data ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/usocket.html");
  }
};



Blockly.Blocks["usocket_socket.sendall"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" socket.sendall");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: socket.sendall(bytes) Send all data to the socket. The socket must be connected to a remote socket. Unlike `send()`, this method will try to send all of data, by sending data ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/usocket.html");
  }
};



Blockly.Blocks["usocket_socket.recv"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" socket.recv");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: socket.recv(bufsize) Receive data from the socket. The return value is a bytes object representing the data ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/usocket.html");
  }
};



Blockly.Blocks["usocket_socket.sendto"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" socket.sendto");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: socket.sendto(bytes, address) Send data to the socket. The socket should not be connected to a remote socke t, since the ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/usocket.html");
  }
};



Blockly.Blocks["usocket_socket.recvfrom"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" socket.recvfrom");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: socket.recvfrom(bufsize) Receive data from the socket. The return value is a pair *(bytes, address)* wh ere *bytes* is a ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/usocket.html");
  }
};



Blockly.Blocks["usocket_socket.setsockopt"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" socket.setsockopt");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: socket.setsockopt(level, optname, value) Set the value of the given socket option. The needed symbolic constants are d efined in the ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/usocket.html");
  }
};



Blockly.Blocks["usocket_socket.settimeout"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" socket.settimeout");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: socket.settimeout(value) **Note**: Not every port supports this method, see below. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/usocket.html");
  }
};



Blockly.Blocks["usocket_socket.setblocking"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" socket.setblocking");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: socket.setblocking(flag) Set blocking or non-blocking mode of the socket: if flag is false, the socket is set to non-blocking, ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/usocket.html");
  }
};



Blockly.Blocks["usocket_socket.makefile"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" socket.makefile");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: socket.makefile(mode='rb', buffering=0, /) Return a file object associated with the socket. The exact returned type depe nds on the arguments ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/usocket.html");
  }
};



Blockly.Blocks["usocket_socket.read"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" socket.read");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/usocket.html");
  }
};



Blockly.Blocks["usocket_socket.readinto"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" socket.readinto");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/usocket.html");
  }
};



Blockly.Blocks["usocket_socket.readline"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" socket.readline");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: socket.readline() Read a line, ending in a newline character. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/usocket.html");
  }
};



Blockly.Blocks["usocket_socket.write"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" socket.write");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: socket.write(buf) Write the buffer of bytes to the socket. This function will try to write all data to a socket (no short writes). This may be not possible ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/usocket.html");
  }
};



Blockly.Blocks["ussl_ussl.wrap_socket"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" ussl.wrap_socket");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: ussl.wrap_socket(sock, server_side=False, keyfile=None, certfile=N one, cert_reqs=CERT_NONE, ca_certs=None) Takes a `stream` *sock* (usually usocket.socket instance of ``SOCK_STREAM`` t ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ussl.html");
  }
};



Blockly.Blocks["ustruct_calcsize"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" calcsize");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: calcsize(fmt) Return the number of bytes needed to store the given *fmt*. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ustruct.html");
  }
};



Blockly.Blocks["ustruct_pack"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" pack");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: pack(fmt, v1, v2, ...) Pack the values *v1*, *v2*, ... according to the format string *fmt*. The return value is a bytes object encoding the values. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ustruct.html");
  }
};



Blockly.Blocks["ustruct_pack_into"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" pack_into");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: pack_into(fmt, buffer, offset, v1, v2, ...) Pack the values *v1*, *v2*, ... according to the format string *fmt* into a *buffer* starting at *offset*. *offset* may be negative to count ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ustruct.html");
  }
};



Blockly.Blocks["ustruct_unpack"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" unpack");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: unpack(fmt, data) Unpack from the *data* according to the format string *fmt*. The return value is a tuple of the unpacked values. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ustruct.html");
  }
};



Blockly.Blocks["ustruct_unpack_from"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" unpack_from");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: unpack_from(fmt, data, offset=0, /) Unpack from the *data* starting at *offset* according to the format string *fmt*. *offset* may be negative to count from the end of *buffer*. The return ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/ustruct.html");
  }
};



Blockly.Blocks["utime_localtime"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" localtime");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/utime.html");
  }
};



Blockly.Blocks["utime_mktime"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" mktime");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: mktime() This is inverse function of localtime. It's argument is a full 8-tuple which expresses a time as per localtime. It returns an integer which is ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/utime.html");
  }
};



Blockly.Blocks["utime_sleep"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" sleep");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: sleep(seconds) Sleep for the given number of seconds. Some boards may accept *seconds* as a floating-point number to sleep for a fractional number of seconds. Note that ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/utime.html");
  }
};



Blockly.Blocks["utime_sleep_ms"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" sleep_ms");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: sleep_ms(ms) Delay for given number of milliseconds, should be positive or 0. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/utime.html");
  }
};



Blockly.Blocks["utime_sleep_us"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" sleep_us");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: sleep_us(us) Delay for given number of microseconds, should be positive or 0. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/utime.html");
  }
};



Blockly.Blocks["utime_ticks_ms"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" ticks_ms");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: ticks_ms() Returns an increasing millisecond counter with an arbitrary reference point, that ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/utime.html");
  }
};



Blockly.Blocks["utime_ticks_us"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" ticks_us");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: ticks_us() Just like `ticks_ms()` above, but in microseconds. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/utime.html");
  }
};



Blockly.Blocks["utime_ticks_cpu"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" ticks_cpu");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: ticks_cpu() Similar to `ticks_ms()` and `ticks_us()`, but with the highest possible resol ution ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/utime.html");
  }
};



Blockly.Blocks["utime_ticks_add"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" ticks_add");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: ticks_add(ticks, delta) Offset ticks value by a given number, which can be either positive or negativ e. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/utime.html");
  }
};



Blockly.Blocks["utime_ticks_diff"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" ticks_diff");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: ticks_diff(ticks1, ticks2) Measure ticks difference between values returned from `ticks_ms()`, `ticks_us ()`, ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/utime.html");
  }
};



Blockly.Blocks["utime_time"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" time");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: time() Returns the number of seconds, as an integer, since the Epoch, assuming that underlying RTC is set and maintained as described above. If an RTC is not set ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/utime.html");
  }
};



Blockly.Blocks["uzlib_decompress"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" decompress");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: decompress(data, wbits=0, bufsize=0, /) Return decompressed *data* as bytes. *wbits* is DEFLATE dictionary window size used during compression (8-15, the dictionary size is power of 2 of ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uzlib.html");
  }
};



Blockly.Blocks["wipy_heartbeat"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" heartbeat");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/wipy.html");
  }
};


