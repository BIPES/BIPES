// %{OUTPUTS} ------------------------------------------------------------------
// Relay -----------------------------------------------------------------------
// Relay Switch
Blockly.Python['relay_switch'] = function(block) {
  var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var status = block.getFieldValue('RELAY_STATUS');
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  if (status == '1'){
  	var code = 'Pin(' + pin + ', Pin.OUT).off()\n';
  }else{
  	var code = 'Pin(' + pin + ', Pin.OUT).on()\n';
  }
  return code;
};
// I/O Expander ----------------------------------------------------------------
// MCP23017
Blockly.Python['mcp23017_init'] = function(block) {
	var scl = Blockly.Python.valueToCode(block, 'scl', Blockly.Python.ORDER_ATOMIC);
	var sda = Blockly.Python.valueToCode(block, 'sda', Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.definitions_['import_mcp23017'] = 'import mcp23017';
	var code = 'mcpIO = mcp23017.MCP23017()\n';
	return code;
};

Blockly.Python['mcp23017_setup'] = function(block) {
	var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
	var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
	var code = 'mcpIO.setup(' + value_pin + ',' + value_value + ')\n';
	return code;
};

Blockly.Python['mcp23017_output'] = function(block) {
	var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
	var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
	var code = 'mcpIO.output(' + value_pin + ',' + value_value + ')\n';
	return code;

};

Blockly.Python['mcp23017_input'] = function(block) {
	var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
	var code = 'mcpIO.input(' + value_pin + ')';

	return [code, Blockly.Python.ORDER_NONE];
};
// RC Servo Motor --------------------------------------------------------------
Blockly.Python['init_servo'] = function(block) {
  var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_pwm'] = 'from machine import PWM';
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  var code = 'pservo = Pin(' + pin + ')\n';
      code += 'servo = PWM(pservo,freq=50)\n';
  return code;
};

Blockly.Python['move_servo'] = function(block) {
  var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);

  var code = 'servo.duty(' + value_angle + ')\n';
  return code;
};

// Stepper Motor ---------------------------------------------------------------
// Stepper Motor
Blockly.Python['stepper_init'] = function(block) {
  var p0 = Blockly.Python.valueToCode(block, 'p0', Blockly.Python.ORDER_ATOMIC);
  var p1 = Blockly.Python.valueToCode(block, 'p1', Blockly.Python.ORDER_ATOMIC);
  var p2 = Blockly.Python.valueToCode(block, 'p2', Blockly.Python.ORDER_ATOMIC);
  var p3 = Blockly.Python.valueToCode(block, 'p3', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_time'] = 'import time';

  var code = `
pins = [
    Pin(` + p0 + `, Pin.OUT),  # 1
    Pin(` + p1 + `, Pin.OUT),  # 2
    Pin(` + p2 + `, Pin.OUT),  # 4
    Pin(` + p3 + `, Pin.OUT),  # 8
]
phases = [ 1, 5, 4, 6, 2, 10, 8, 9 ]
`;

  return code;
};

Blockly.Python['stepper_step'] = function(block) {
  var step = Blockly.Python.valueToCode(block, 'steps', Blockly.Python.ORDER_ATOMIC);

  //Source example: http://mpy-tut.zoic.org/tut/motors.html
  var code = `
for i in range(1, ` + step + `):
	for phase in phases:
		for n, p in enumerate(pins):
			pins[n](phase & 1 < < n)
		time.sleep(0.001)
`;

  return code;
};

// DC Motor --------------------------------------------------------------------
//DC Motor with H-Bridge
Blockly.Python['dc_motor_init'] = function(block) {
  var pwm = Blockly.Python.valueToCode(block, 'pwm', Blockly.Python.ORDER_ATOMIC);
  var dir1 = Blockly.Python.valueToCode(block, 'dir1', Blockly.Python.ORDER_ATOMIC);
  var dir2 = Blockly.Python.valueToCode(block, 'dir2', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_pwm'] = 'from machine import PWM';

  var code =  "dc_motor_pin_a = Pin(" + dir1 + ", Pin.OUT)\n";
      code +=  "dc_motor_pin_b = Pin(" + dir2 + ", Pin.OUT)\n";
      code +=  "dc_motor_pwm = PWM(" + pwm + ")\n";

  return code;
};

Blockly.Python['dc_motor_power'] = function(block) {
  var pwr = Blockly.Python.valueToCode(block, 'power', Blockly.Python.ORDER_ATOMIC);

  var code = 'dc_motor_pwm.duty(' + pwr + ')\n';

  return code;
};

Blockly.Python['dc_motor_direction'] = function(block) {
  var dir = Blockly.Python.valueToCode(block, 'dir', Blockly.Python.ORDER_ATOMIC);

  var code='\n';

  if (dir == 0)
	code = `
dc_motor_pin_a.value=0
dc_motor_pin_b.value=0
`;

  if (dir == 1)
	code = `
dc_motor_pin_a.value=1
dc_motor_pin_b.value=0
`;

  if (dir == 2)
	code = `
dc_motor_pin_a.value=0
dc_motor_pin_b.value=1
`;

  if (dir == 3)
	code = `
dc_motor_pin_a.value=1
dc_motor_pin_b.value=1
`;

  return code;
};

Blockly.Python['dc_motor_stop'] = function(block) {

  var code = 'dc_motor_pin_a.value=0\n';
      code += 'dc_motor_pin_b.value=0\n';

  return code;
};
