// %{COMM} ---------------------------------------------------------------------
// UART ------------------------------------------------------------------------

Blockly.Python['uart_init'] = function(block) {
  //Reference:
  var port = Blockly.Python.valueToCode(block, 'port', Blockly.Python.ORDER_ATOMIC);
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var bits = Blockly.Python.valueToCode(block, 'bits', Blockly.Python.ORDER_ATOMIC);
  var par = Blockly.Python.valueToCode(block, 'par', Blockly.Python.ORDER_ATOMIC);
  var stop = Blockly.Python.valueToCode(block, 'stop', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_machine_uart'] = 'from machine import uart';

  var code = 'uart = UART(1, 9600)\n';
      code += "uart.init(" + speed + ', bits=' + bits + ', parity=' + par + ', stop=' + stop + ')\n';

  return code;
};

Blockly.Python['uart_write'] = function(block) {
  var buf = Blockly.Python.valueToCode(block, 'buf', Blockly.Python.ORDER_ATOMIC);

  var code = 'uart.write(' + buf + ')\n';

  return code;
};

Blockly.Python['uart_read'] = function(block) {
  var s = Blockly.Python.valueToCode(block, 's', Blockly.Python.ORDER_ATOMIC);

  var code = 'uart.read(' + s + ')';

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['uart_read_all'] = function(block) {

  var code = 'uart.read()';

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['uart_readline'] = function(block) {

  var code = 'uart.readline()';

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['uart_read_into'] = function(block) {
  var b = Blockly.Python.valueToCode(block, 'buffer', Blockly.Python.ORDER_ATOMIC);

  var code = 'uart.readinto(' + b + ')';

  return [code, Blockly.Python.ORDER_NONE];
};


// SPI -------------------------------------------------------------------------

Blockly.Python["machine.SPI_SPI.init"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.SPI.SPI.init(" + value_pIn + ")\n";
	return code;
};
Blockly.Python["machine.SPI_SPI.deinit"] = function(block) {
		Blockly.Python.definitions_['import_machine.SPI'] = 'import machine.SPI';
	var code = "machine.SPI.SPI.deinit()\n";
	return code;
};
Blockly.Python["machine.SPI_SPI.read"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.SPI.SPI.read(" + value_pIn + ")\n";
	return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python["machine.SPI_SPI.readinto"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.SPI.SPI.readinto(" + value_pIn + ")\n";
	return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python["machine.SPI_SPI.write"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.SPI.SPI.write(" + value_pIn + ")\n";
	return code;
};
Blockly.Python["machine.SPI_SPI.write_readinto"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.SPI.SPI.write_readinto(" + value_pIn + ")\n";
	return code;
};

// GSM Modem -------------------------------------------------------------------

Blockly.Python['gsm_modem_init'] = function(block) {
  var tx = Blockly.Python.valueToCode(block, 'tx', Blockly.Python.ORDER_ATOMIC);
  var rx = Blockly.Python.valueToCode(block, 'rx', Blockly.Python.ORDER_ATOMIC);
  var bps = Blockly.Python.valueToCode(block, 'bps', Blockly.Python.ORDER_ATOMIC);

  var code = '#init GSM Module \n';

  return code;
};

Blockly.Python['gsm_modem_send_at'] = function(block) {
  var cmd = Blockly.Python.valueToCode(block, 'cmd', Blockly.Python.ORDER_ATOMIC);

  var code = '#init GSM Module AT \n';

  return code;
};

Blockly.Python['gsm_modem_send_sms'] = function(block) {
  var dst = Blockly.Python.valueToCode(block, 'dst', Blockly.Python.ORDER_ATOMIC);
  var msg = Blockly.Python.valueToCode(block, 'msg', Blockly.Python.ORDER_ATOMIC);

  var code = '#Send SMS \n';

  return code;
};

Blockly.Python['gsm_modem_http_get'] = function(block) {
  var cmd = Blockly.Python.valueToCode(block, 'cmd', Blockly.Python.ORDER_ATOMIC);

  var code = '#GSM Module HTTP GET\n';

  return code;
};


Blockly.Python['gsm_modem_response'] = function(block) {
  var timeout = Blockly.Python.valueToCode(block, 'timeout', Blockly.Python.ORDER_ATOMIC);

  var code = '#GSM Module Response \n';

  return [code, Blockly.Python.ORDER_NONE];
};

// I2C -------------------------------------------------------------------------
Blockly.Python["machine.I2C_I2C.init"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.I2C.I2C.init(" + value_pIn + ")\n";
	return code;
};
Blockly.Python["machine.I2C_I2C.deinit"] = function(block) {
		Blockly.Python.definitions_['import_machine.I2C'] = 'import machine.I2C';
	var code = "machine.I2C.I2C.deinit()\n";
	return code;
};
Blockly.Python["machine.I2C_I2C.scan"] = function(block) {
		Blockly.Python.definitions_['import_machine.I2C'] = 'import machine.I2C';
	var code = "machine.I2C.I2C.scan()\n";
	return code;
};
Blockly.Python["machine.I2C_I2C.start"] = function(block) {
		Blockly.Python.definitions_['import_machine.I2C'] = 'import machine.I2C';
	var code = "machine.I2C.I2C.start()\n";
	return code;
};
Blockly.Python["machine.I2C_I2C.stop"] = function(block) {
		Blockly.Python.definitions_['import_machine.I2C'] = 'import machine.I2C';
	var code = "machine.I2C.I2C.stop()\n";
	return code;
};
Blockly.Python["machine.I2C_I2C.readinto"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.I2C.I2C.readinto(" + value_pIn + ")\n";
	return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python["machine.I2C_I2C.write"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.I2C.I2C.write(" + value_pIn + ")\n";
	return code;
};
Blockly.Python["machine.I2C_I2C.readfrom"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.I2C.I2C.readfrom(" + value_pIn + ")\n";
	return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python["machine.I2C_I2C.readfrom_into"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.I2C.I2C.readfrom_into(" + value_pIn + ")\n";
	return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python["machine.I2C_I2C.writeto"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.I2C.I2C.writeto(" + value_pIn + ")\n";
	return code;
};
Blockly.Python["machine.I2C_I2C.writevto"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.I2C.I2C.writevto(" + value_pIn + ")\n";
	return code;
};
Blockly.Python["machine.I2C_I2C.readfrom_mem"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.I2C.I2C.readfrom_mem(" + value_pIn + ")\n";
	return code;
};
Blockly.Python["machine.I2C_I2C.readfrom_mem_into"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.I2C.I2C.readfrom_mem_into(" + value_pIn + ")\n";
	return code;
};
Blockly.Python["machine.I2C_I2C.writeto_mem"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "machine.I2C.I2C.writeto_mem(" + value_pIn + ")\n";
	return code;
};
