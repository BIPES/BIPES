// CPU ------------------------------------------------------------------------

Blockly.Python['set_freq'] = function(block) {
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  var value_command = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_ATOMIC);
  var code = 'machine.freq(' + value_command + ')\n';
  return code;
};

Blockly.Python['get_freq'] = function(block) {
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  var code = 'machine.freq()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["machine_unique_id"] = function(block) {
		Blockly.Python.definitions_['import_machine'] = 'import machine';
	var code = "machine.unique_id()\n";
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["machine_reset_cause"] = function(block) {
	Blockly.Python.definitions_['import_machine'] = 'import machine';
	var code = "machine.reset_cause()";
	return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['reset'] = function(block) {
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  var code = 'machine.reset()\n';
  return code;
};

Blockly.Python["reset_cause_soft"] = function(block) {
	Blockly.Python.definitions_['import_machine'] = 'import machine';
	var code = "machine.SOFT_RESET";
	return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python["reset_cause_hard"] = function(block) {
	Blockly.Python.definitions_['import_machine'] = 'import machine';
	var code = "machine.HARD_RESET";
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["reset_cause_wdt"] = function(block) {
	Blockly.Python.definitions_['import_machine'] = 'import machine';
	var code = "machine.WDT_RESET";
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["reset_cause_deep"] = function(block) {
	Blockly.Python.definitions_['import_machine'] = 'import machine';
	var code = "machine.DEEPSLEEP_RESET";
	return [code, Blockly.Python.ORDER_NONE];
};

// In/Out Pins ----------------------------------------------------------------

Blockly.Python['pinout'] = function(block) {
  var pin = block.getFieldValue('PIN');

  return [pin, Blockly.Python.ORDER_NONE];
};

Blockly.Python['gpio_set'] = function(block) {
	var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
	var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

	 var value_pin2 = value_pin.replace('(','').replace(')','');
	//For Circuit Python
	if (bipes.page.project.current.device.firmware == "CircuitPython"){

		Blockly.Python.definitions_['import_board'] = 'import board';
		Blockly.Python.definitions_['import_digitalio_dir'] = 'from digitalio import DigitalInOut, Direction, Pull';
		Blockly.Python.definitions_['gpio_set' + value_pin] = 'try:\n\tgpio' + value_pin2 + '.deinit()\nexcept:\n\tpass\ngpio' + value_pin2 + '=DigitalInOut(board.IO' + value_pin2 + ')\n' + 'gpio' + value_pin2 + '.direction = Direction.OUTPUT';
		var code = 'gpio' + value_pin2 + '.value=' + value_value + '\n';
        } else {
		Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
		Blockly.Python.definitions_['gpio_set'] = 'def gpio_set(pin,value):\n  if value >= 1:\n    Pin(pin, Pin.OUT).on()\n  else:\n    Pin(pin, Pin.OUT).off()';

		var code = 'gpio_set(' + value_pin + ', ' + value_value + ')\n';
	}
	return code;

}

Blockly.Python['gpio_get'] = function(block) {
	var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
	var value_pullup = Blockly.Python.valueToCode(block, 'pullup', Blockly.Python.ORDER_ATOMIC);
	var x = value_pin.replace('(','').replace(')','');

	if (value_pullup == 'True') {
		pTmp="gpio" + x + ".pull = Pull.UP\n";
		pUpDown = ", Pin.PULL_UP";
	}
	else {
		//value_pullup2="Pull.DOWN";
		pTmp='';
		pUpDown = '';
	}

	//For Circuit Python
	if (bipes.page.project.current.device.firmware == "CircuitPython"){

		Blockly.Python.definitions_['import_board'] = 'import board';
		Blockly.Python.definitions_['import_digitalio_dir'] = 'from digitalio import DigitalInOut, Direction, Pull';
		Blockly.Python.definitions_['gpio_set' + value_pin] = 'try:\n\tgpio' + x + '.deinit()\nexcept:\n\tpass\ngpio' + x + '=DigitalInOut(board.IO' + x + ')\n' + 'gpio' + x + '.direction = Direction.INPUT\n' + pTmp;
		var code = 'gpio' + x + '.value';
        } else {
		//Standard MicroPython pin digital pin reading
		Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
		Blockly.Python.definitions_[`gpio_get_${x}`] = 'pIn' + x + '=Pin(' + x + ', Pin.IN' + pUpDown + ')\n\n';
		var code = 'pIn' + x + '.value()';
	}

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['gpio_interrupt'] = function(block) {
  // Fix for global variables inside callback
  // Piece of code from generators/python/procedures.js
  // Define a procedure with a return value.
  // First, add a 'global' statement for every variable that is not shadowed by
  // a local parameter.
  var globals = [];
  var workspace = block.workspace;
  var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
  for (var i = 0, variable; (variable = variables[i]); i++) {
    var varName = variable.name;
    if (block.getVars().indexOf(varName) == -1) {
      globals.push(Blockly.Python.nameDB_.getName(varName,
          Blockly.VARIABLE_CATEGORY_NAME));
    }
  }
  globals = globals.length ? Blockly.Python.INDENT + 'global ' + globals.join(', ') + '\n' : '';

  var dropdown_trigger = block.getFieldValue('trigger');
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var statements_code = Blockly.Python.statementToCode(block, 'code');
  var value_pin = value_pin.replace('(','').replace(')','');

  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';

  if (dropdown_trigger == 'BOTH')
	dropdown_trigger = 'IRQ_RISING | Pin.IRQ_FALLING';

  var code='';
  if (value_pin) {
    Blockly.Python.definitions_[`gpio_interrupt${value_pin}`] = `\n#Interrupt handler\ndef callback${value_pin}(pPin):\n${globals}${statements_code}\n\n`;

	  code = `p${value_pin} = Pin(${value_pin}, Pin.IN)\n`;
	  code += `p${value_pin}.irq(trigger=Pin.${dropdown_trigger}, handler=callback${value_pin})\n`;
  }

  return code;
};

Blockly.Python['adc'] = function(block) {
  Blockly.Python.definitions_['import_adc'] = 'from machine import ADC';
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_[`init_adc_${value_pin}`] = 'adc' + value_pin + '=ADC(' + value_pin + ')';
  var code = 'adc' + value_pin + '.read()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['adc_esp32'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var x = value_pin.replace('(','').replace(')','');

  var dropdown_attenuation = block.getFieldValue('Attenuation');
  var dropdown_width__ = block.getFieldValue('Width: ');

  var atten = 'ADC.ATTN_0DB';
  if (dropdown_attenuation==0)
                  atten = 'ADC.ATTN_0DB';
  if (dropdown_attenuation==1)
                  atten = 'ADC.ATTN_2_5DB';
  if (dropdown_attenuation==2)
                  atten = 'ADC.ATTN_6DB';
  if (dropdown_attenuation==3)
                  atten = 'ADC.ATTN_11DB';

  var w = 'ADC.WIDTH_10BIT';
  if (dropdown_width__==0)
        w = 'ADC.WIDTH_9BIT';
  if (dropdown_width__==1)
        w = 'ADC.WIDTH_10BIT';
  if (dropdown_width__==2)
        w = 'ADC.WIDTH_11BIT';
  if (dropdown_width__==3)
        w = 'ADC.WIDTH_12BIT';

	var x = value_pin.replace('(','').replace(')','');
	//For Circuit Python
	if (bipes.page.project.current.device.firmware == "CircuitPython"){
		Blockly.Python.definitions_['import_board'] = 'import board';
		Blockly.Python.definitions_['import_analogio'] = 'from analogio import AnalogIn';
		Blockly.Python.definitions_['analogIn' + x] = 'try:\n\tanalogIn' + x + '.deinit()\nexcept:\n\tpass\nanalogIn' + x + '=AnalogIn(board.IO' + x + ')\n';
		var code = 'analogIn' + x + '.value';
	} else {
		Blockly.Python.definitions_['import_adc'] = 'from machine import ADC';
		Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';

		Blockly.Python.definitions_['init_adc' + x] = 'adc' + x + '=ADC(Pin(' + x + '))\nadc' + x + '.atten(' + atten + ')\nadc' + x + '.width(' + w + ')\n';

		var code = 'adc' + x + '.read()';
	}
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['adc_pico'] = function(block) {
  Blockly.Python.definitions_['import_adc'] = 'from machine import ADC';
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var x = value_pin.replace('(','').replace(')','');

  Blockly.Python.definitions_['init_adc' + x] = 'adc' + x + '=ADC(' + x + ')';

  var code = 'adc' + x + '.read_u16()';
  return [code, Blockly.Python.ORDER_NONE];
};



Blockly.Python['pwm'] = function(block) {
	var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_NONE);
	var value_frequency = Blockly.Python.valueToCode(block, 'frequency', Blockly.Python.ORDER_ATOMIC);
	var value_duty = Blockly.Python.valueToCode(block, 'duty', Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
	Blockly.Python.definitions_['import_pwm'] = 'from machine import PWM';

  this.check([value_frequency,value_duty], value_pin);
  this.setID(value_pin)
	var code = `pwm${value_pin} = PWM(Pin(${value_pin}))\npwm${value_pin}.freq(${value_frequency})\npwm${value_pin}.duty(${value_duty})\n`;
	return code;
};



Blockly.Python['pwm'] = function(block) {
	var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_NONE);
	var value_frequency = Blockly.Python.valueToCode(block, 'frequency', Blockly.Python.ORDER_ATOMIC);
	var value_duty = Blockly.Python.valueToCode(block, 'duty', Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
	Blockly.Python.definitions_['import_pwm'] = 'from machine import PWM';

  this.check([value_frequency,value_duty], value_pin);
  this.setID(value_pin)
	var code = `pwm${value_pin} = PWM(Pin(${value_pin}))\npwm${value_pin}.freq(${value_frequency})\npwm${value_pin}.duty(${value_duty})\n`;
	return code;
};

Blockly.Python['pwm.init'] = function(block) {
	var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_NONE);
	Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
	Blockly.Python.definitions_['import_pwm'] = 'from machine import PWM';

  this.setID(value_pin)
	var code = `pwm${value_pin} = PWM(Pin(${value_pin}))\n`;
	return code;
};

Blockly.Python['pwm.freq'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var value_frequency = Blockly.Python.valueToCode(block, 'frequency', Blockly.Python.ORDER_NONE);
  var code = `pwm${number_id}.freq(${value_frequency})\n`;

  this.check(value_frequency, number_id);
  return code;
};

Blockly.Python['pwm.duty'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var value_duty = Blockly.Python.valueToCode(block, 'duty', Blockly.Python.ORDER_NONE);
  var code = `pwm${number_id}.duty(${value_duty})\n`;

  this.check(value_duty, number_id);
  return code;
};

Blockly.Python['pwm.deinit'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var code = `pwm${number_id}.deinit()\n`;
  return code;
};
