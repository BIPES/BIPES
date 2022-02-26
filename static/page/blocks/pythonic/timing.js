Blockly.Python['delay'] = function(block) {
//Blockly.Python['utime.delay'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';
  var value_time = Blockly.Python.valueToCode(block, 'TIME', Blockly.Python.ORDER_NONE);
  var dropdown_scale = block.getFieldValue('SCALE');
  var code =  `time.${dropdown_scale}(${value_time})\n`;
  return code;
};

Blockly.Python['utime.vars'] = function(block) {

	// For CircuitPython
	if (bipes.page.project.current.device.firmware == "CircuitPython"){
		Blockly.Python.definitions_['import_time'] = 'import time';
		var code = "time.monotonic()";
	} else {
		Blockly.Python.definitions_['import_utime'] = 'import utime';
		var dropdown_vars = block.getFieldValue('VARS');
		var code =  `utime.${dropdown_vars}()`;
	}
	return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['utime.ticks_add'] = function(block) {
  Blockly.Python.definitions_['import_utime'] = 'import utime';
  var value_time1 = Blockly.Python.valueToCode(block, 'TIME1', Blockly.Python.ORDER_NONE);
  var value_time2 = Blockly.Python.valueToCode(block, 'TIME2', Blockly.Python.ORDER_NONE);

  var code =  `utime.ticks_add(${value_time1},${value_time2})`;
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
Blockly.Python['utime.ticks_diff'] = function(block) {
  Blockly.Python.definitions_['import_utime'] = 'import utime';
  var value_time1 = Blockly.Python.valueToCode(block, 'TIME1', Blockly.Python.ORDER_NONE);
  var value_time2 = Blockly.Python.valueToCode(block, 'TIME2', Blockly.Python.ORDER_NONE);

  var code =  `utime.ticks_diff(${value_time1},${value_time2})`;
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
Blockly.Python['utime.deadline'] = function(block) {
  Blockly.Python.definitions_['import_utime'] = 'import utime';

  var value_id = block.getFieldValue('ID');
  var value_time = Blockly.Python.valueToCode(block, 'TIME', Blockly.Python.ORDER_NONE);
  var dropdown_scale = block.getFieldValue('SCALE');
  var statements_do = Blockly.Python.statementToCode(block, 'DO');

  var code = `deadline${value_id} = utime.ticks_add(utime.${dropdown_scale}(), ${value_time})\nwhile utime.ticks_diff(deadline${value_id}, utime.${dropdown_scale}()) > 0:\n${statements_do}\n`;
  return code;
};

Blockly.Python['get_rtc_esp32'] = function(block) {
  Blockly.Python.definitions_['import_rtc'] = 'from machine import RTC';
  Blockly.Python.definitions_['import_rtc_def'] = 'rtc = RTC()';

  var code = 'rtc.datetime()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_rtc_esp8266'] = function(block) {
  Blockly.Python.definitions_['import_rtc'] = 'from machine import RTC';
  Blockly.Python.definitions_['import_rtc_def'] = 'rtc = RTC()';

  var code = 'rtc.datetime()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['set_rtc_esp32'] = function(block) {
  //var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_rtc'] = 'from machine import RTC';
  Blockly.Python.definitions_['import_rtc_def'] = 'rtc = RTC()';

  var y = Blockly.Python.valueToCode(block, 'year', Blockly.Python.ORDER_ATOMIC);
  var m = Blockly.Python.valueToCode(block, 'month', Blockly.Python.ORDER_ATOMIC);
  var d = Blockly.Python.valueToCode(block, 'day', Blockly.Python.ORDER_ATOMIC);
  var h = Blockly.Python.valueToCode(block, 'hour', Blockly.Python.ORDER_ATOMIC);
  var min = Blockly.Python.valueToCode(block, 'minute', Blockly.Python.ORDER_ATOMIC);
  var s = Blockly.Python.valueToCode(block, 'second', Blockly.Python.ORDER_ATOMIC);

  var code = 'rtc.datetime((' + y + ',' + m + ',' + d + ',0,' + h + ',' + min + ',' + s + ',0))\n';
  return code;
};


Blockly.Python['set_rtc_esp8266'] = function(block) {
  //var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_rtc'] = 'from machine import RTC';
  Blockly.Python.definitions_['import_rtc_def'] = 'rtc = RTC()';

  var y = Blockly.Python.valueToCode(block, 'year', Blockly.Python.ORDER_ATOMIC);
  var m = Blockly.Python.valueToCode(block, 'month', Blockly.Python.ORDER_ATOMIC);
  var d = Blockly.Python.valueToCode(block, 'day', Blockly.Python.ORDER_ATOMIC);
  var h = Blockly.Python.valueToCode(block, 'hour', Blockly.Python.ORDER_ATOMIC);
  var min = Blockly.Python.valueToCode(block, 'minute', Blockly.Python.ORDER_ATOMIC);
  var s = Blockly.Python.valueToCode(block, 'second', Blockly.Python.ORDER_ATOMIC);

  var code = 'rtc.datetime((' + y + ',' + m + ',' + d + ',0,' + h + ',' + min + ',' + s + ',0))\n';
  return code;
};

Blockly.Python['delay_ms'] = function(block) {
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_time'] = 'import time';
  var code = 'time.sleep_ms(' + value_time + ')\n';
  return code;
};

Blockly.Python['delay_us'] = function(block) {
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_time'] = 'import time';
  var code = 'time.sleep_us(' + value_time + ')\n';
  return code;
};


Blockly.Python['ticks_ms'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';

  var code = 'time.ticks_ms()\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ticks_diff'] = function(block) {
  var value_start = Blockly.Python.valueToCode(block, 'start', Blockly.Python.ORDER_ATOMIC);
  var value_end = Blockly.Python.valueToCode(block, 'end', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_time'] = 'import time';

  value_start=value_start.split('\n').join('');
  value_end=value_end.split('\n').join('');

  var code = 'time.ticks_diff(' + value_end + ',' + value_start + ')\n';
  return [code, Blockly.Python.ORDER_NONE];

};

Blockly.Python['timer'] = function(block) {

  var interval = block.getFieldValue('interval');
  var timerNumber = block.getFieldValue('timerNumber');
  var statements_name = Blockly.Python.statementToCode(block, 'statements');
  var dropdown_mode = block.getFieldValue('MODE');

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

  Blockly.Python.definitions_['import_timer'] = 'from machine import Timer';
  Blockly.Python.definitions_[`import_timer_start${timerNumber}`] = `tim${timerNumber} = Timer(${timerNumber})`;

  Blockly.Python.definitions_[`import_timer_callback${timerNumber}`] = `\n#Timer Function Callback\ndef timerFunc${timerNumber}(t):\n${globals}${statements_name}\n\n`;

  var code = `tim${timerNumber}.init(period=${interval}, mode=Timer.${dropdown_mode}, callback=timerFunc${timerNumber})\n`;

  return code
};


Blockly.Python['stop_timer'] = function(block) {
  Blockly.Python.definitions_['import_timer'] = 'from machine import Timer';

  var tn = Blockly.Python.valueToCode(block, 'timerNumber', Blockly.Python.ORDER_ATOMIC);
  var code = 'tim' + tn + '.deinit()\n';

  return code;
};

Blockly.Python['deep_sleep8266'] = function(block) {
	var value_interval = Blockly.Python.valueToCode(block, 'interval', Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.definitions_['import_machine'] = 'import machine';
	var code = 'rtc = machine.RTC()\n';
	code += 'rtc.irq(trigger=rtc.ALARM0, wake=machine.DEEPSLEEP)\n';
	code += 'rtc.alarm(rtc.ALARM0, ' + value_interval + ')\n';
	code += 'machine.deepsleep()\n';
	return code;
};
