// ${CONTROL} ------------------------------------------------------------------
// Control PID -----------------------------------------------------------------
Blockly.Python['control_pid.__init__'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var number_kp = block.getFieldValue('Kp');
  var number_ki = block.getFieldValue('Ki');
  var number_kd = block.getFieldValue('Kd');
  var number_sample_time = block.getFieldValue('SAMPLETIME');
  number_sample_time = parseInt(number_sample_time) == 0 ? 'None': number_sample_time;
  var dropdown_scale = block.getFieldValue('SCALE');
  var value_setpoint = Blockly.Python.valueToCode(block, 'SETPOINT', Blockly.Python.ORDER_NONE);

  this.check([number_kp,number_ki,number_kd], number_sample_time);

  Blockly.Python.definitions_['import_pid'] = 'from PID import PID';

  let code = `pid${number_id} = PID(${number_kp}, ${number_ki}, ${number_kd}, setpoint=${value_setpoint}, scale='${dropdown_scale}'`;
  code = number_sample_time != 0 ? `${code}, sample_time=${number_sample_time})\n` : `${code})\n`;
  return code;
};

Blockly.Python['control_pid.compute'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var value_input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_NONE);

  return [`pid${number_id}(${value_input})`, Blockly.Python.ORDER_NONE];
};

Blockly.Python['control_pid.compute_not_realtime'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var value_input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_NONE);
  var value_dt = Blockly.Python.valueToCode(block, 'DT', Blockly.Python.ORDER_NONE);

  return [`pid${number_id}(${value_input},${value_dt})`, Blockly.Python.ORDER_NONE];
};

Blockly.Python['control_pid.tunings'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var value_kp = Blockly.Python.valueToCode(block, 'KP', Blockly.Python.ORDER_NONE);
  var value_ki = Blockly.Python.valueToCode(block, 'KI', Blockly.Python.ORDER_NONE);
  var value_kd = Blockly.Python.valueToCode(block, 'KD', Blockly.Python.ORDER_NONE);
  var code = `pid${number_id}.tunings = (${value_kp}, ${value_ki}, ${value_kd})\n`;
  return code;
};

Blockly.Python['control_pid.setpoint'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var value_setpoint = Blockly.Python.valueToCode(block, 'SETPOINT', Blockly.Python.ORDER_NONE);

  var code = `pid${number_id}.setpoint = ${value_setpoint}\n`;
  return code;
};

Blockly.Python['control_pid.output_limits'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var number_lower = block.getFieldValue('LOWER');
  var number_upper = block.getFieldValue('UPPER');

  var code = `pid${number_id}.output_limits = (${number_lower}, ${number_upper})\n`;
  return code;
};

Blockly.Python['control_pid.auto_mode'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var checkbox_enable = block.getFieldValue('ENABLE') == 'TRUE' ? 'True' : 'False';
  var code =  `pid${number_id}.auto_mode = ${checkbox_enable}\n`;
  return code;
};
Blockly.Python['control_pid.vars'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var dropdown_vars = block.getFieldValue('VARS');
  var code =  `pid${number_id}.${dropdown_vars}`;
  return [code, Blockly.Python.ORDER_NONE];
};

// Control Simulate ------------------------------------------------------------

PythonicTemplates.WaterBoiler = `class WaterBoiler:\n    """\n    Simple simulation of a water boiler which can heat up water\n    and where the heat dissipates slowly over time\n    """\n\n    def __init__(self, dissipation=0.2):\n        self.water_temp = 20\n        self.ambient = 20\n        self.dissipation = dissipation\n        self._last_time = utime.ticks_ms()\n\n    def update(self, boiler_power):\n    	now = utime.ticks_ms()\n    	dt = utime.ticks_diff(now,self._last_time) if (utime.ticks_diff(now,self._last_time)) else 1e-16\n        if boiler_power > 0:\n        	# Boiler can only produce heat, not cold\n        	self.water_temp += 1 * boiler_power * dt / 1000\n\n        # Some heat dissipation\n        self.water_temp -= (self.water_temp - self.ambient) * self.dissipation * dt\n\n        self._last_time = now\n        return self.water_temp`;
Blockly.Python['simulate_water_boiler'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var number_dissipation = block.getFieldValue('DISSIPATION');
  var value_power = Blockly.Python.valueToCode(block, 'POWER', Blockly.Python.ORDER_NONE);

	Blockly.Python.definitions_['import_utime'] = 'import utime';
  Blockly.Python.definitions_['simulate_water_boiler_class'] = PythonicTemplates.WaterBoiler;
  Blockly.Python.definitions_[`simulate_water_boiler_obj${number_id}`] = `water_boiler${number_id} = WaterBoiler(${number_dissipation})`;

  var code = `water_boiler${number_id}.update(${value_power})`;

  return [code, Blockly.Python.ORDER_NONE];
};

PythonicTemplates.DCMotor = `class DCMotor:\n\n    def __init__ (\n    	self,\n    	Ra=0.52,\n    	La=0.000036,\n    	B=0.00001,\n    	J=0.000012,\n    	Kbemf=0.0137,\n    	STATIC_FRICTION=0.01,\n    	FRICTION_S=0.01\n    ):\n        self.bemf = 0.0\n        # omega = rpm ( w )\n        self.omega = 0.0\n\n        # theta = electrical angle normalized to 2*pi\n        self.theta = 0.0\n\n        self.ia, self.va = 0.0, 0.0\n\n        self.Pelec, self.Te, self.Tl = 0.0, 0.0, 0.0\n\n        # La here is La subtracted by mutual inductance M.\n        self.Ra, self.La, self.B, self.J = Ra, La, B, J\n        self.Kbemf = Kbemf\n        self.STATIC_FRICTION, self.FRICTION_S = STATIC_FRICTION, FRICTION_S\n\n        self._last_time = 0.0\n\n\n    # The simulator\n    def sim( self, load, va, dt):\n    	now = utime.ticks_us()\n\n        # Set the load\n        sign = math.copysign( 1, self.omega )\n        self.Tl = sign * load\n        self.va = va\n\n        # Calculate bemf\n        self.bemf = self.Kbemf * self.omega\n\n        # Calculate change in current per di/dt\n        dot_ia = (1.0 / self.La) * ( self.va - (self.Ra * self.ia) - self.bemf )\n\n        # Apply changes to current in phases\n        self.ia += dot_ia * dt\n\n        # Electrical torque. Since omega can be null, cannot derive from P/w\n        self.Te = self.Kbemf * self.ia\n\n        # Electrical power\n        self.Pelec = self.bemf * self.ia\n\n\n        # Mechanical torque.\n        # mtorque = ((etorque * (p->m->NbPoles / 2)) - (p->m->damping * sv->omega) - p->pv->torque);\n        self.Tm = ((self.Te) - (sign * self.B * abs(self.omega)) - self.Tl)\n\n        # Friction calculations\n        if abs(self.omega) < 1.0:\n            if abs(self.Te) < self.STATIC_FRICTION:\n                self.Tm = 0.0\n            else:\n                self.Tm -= self.STATIC_FRICTION\n        else:\n           self.Tm = self.Tm - sign * ( self.STATIC_FRICTION * math.exp( -5 * abs( self.omega )) + self.FRICTION_S )\n\n        # J is the moment of inertia\n        dotOmega = (self.Tm / self.J)\n        self.omega = self.omega + dotOmega * dt\n\n\n        self.theta += self.omega * dt\n        self.theta = self.theta % ( 2.0 * math.pi )\n\n        self._last_time += dt\n        return self.omega`;
Blockly.Python['simulate_dcmotor.sim'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var Ra = block.getFieldValue('RA');
  var La = block.getFieldValue('LA');
  var B = block.getFieldValue('B');
  var J = block.getFieldValue('J');
  var Kbemf = block.getFieldValue('KBEMF');
  var Static_Friction = block.getFieldValue('STATIC_FRICTION');
  var value_load = Blockly.Python.valueToCode(block, 'LOAD', Blockly.Python.ORDER_NONE);
  var value_dt = Blockly.Python.valueToCode(block, 'DT', Blockly.Python.ORDER_NONE);
  var value_power = Blockly.Python.valueToCode(block, 'POWER', Blockly.Python.ORDER_NONE);

	Blockly.Python.definitions_['import_utime'] = 'import utime';
	Blockly.Python.definitions_['import_math'] = 'import math';
  Blockly.Python.definitions_['simulate_dcmotor_class'] = PythonicTemplates.DCMotor;
  Blockly.Python.definitions_[`simulate_dcmotor_obj${number_id}`] = `dcmotor${number_id} = DCMotor(${Ra},${La},${B},${J},${Kbemf},${Static_Friction},0)`;

  var code = `dcmotor${number_id}.sim(${value_load},${value_power},${value_dt})`;

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['simulate_dcmotor.vars'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var dropdown_vars = block.getFieldValue('VARS');
  var code =  `dcmotor${number_id}.${dropdown_vars}`;
  return [code, Blockly.Python.ORDER_NONE];
};
