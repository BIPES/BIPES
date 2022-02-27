// Control PID -----------------------------------------------------------------
Blockly.Blocks['control_pid.__init__'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Init PID Controller #")
        .appendField(new Blockly.FieldNumber(0, 0, 9, 1), "ID")
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("tunings Kp")
        .appendField(new Blockly.FieldNumber(1), "Kp")
        .appendField("Ki")
        .appendField(new Blockly.FieldNumber(0), "Ki")
        .appendField("Kd")
        .appendField(new Blockly.FieldNumber(0), "Kd");
    this.appendDummyInput()
        .appendField("update every")
        .appendField(new Blockly.FieldNumber(2, 0, Infinity, 1), "SAMPLETIME")
        .appendField(new Blockly.FieldDropdown([["seconds","s"], ["miliseconds","ms"], ["microseconds","us"], ["nanoseconds","ns"], ["cpu ticks","cpu"]]), "SCALE");
    this.appendValueInput("SETPOINT")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("setpoint");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#7b49ad');
    this.setTooltip("Init PID controler, set 'update every' to zero for non realtime simulation or with non fixed intervals");
    this.setHelpUrl("https://micropython-simple-pid.readthedocs.io/");
  },
  check (gains, sampletime) {
    bipes.page.blocks.warningIfTrue (this, [
      [() => !gains.every(e => e * gains[0] >= 0), 'All gains in the PID should have the same sign.'],
      [() => sampletime == 'None', 'Non fixed timestep PID enabled.']
    ]);
  }
};

Blockly.Blocks['control_pid.compute'] = {
  init: function() {
    this.appendValueInput("INPUT")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("compute PID #")
        .appendField(new Blockly.FieldNumber(0, 0, 9, 1), "ID")
        .appendField("with");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour('#7b49ad');
    this.setTooltip("Returns PID control action computed with current system value.");
    this.setHelpUrl("https://micropython-simple-pid.readthedocs.io/en/latest/#the-basics");
  }
};
Blockly.Blocks['control_pid.compute_not_realtime'] = {
  init: function() {
    this.appendValueInput("INPUT")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("compute PID #")
        .appendField(new Blockly.FieldNumber(0, 0, 9, 1), "ID")
        .appendField("with");
    this.appendValueInput("DT")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("timestep (s)");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour('#7b49ad');
    this.setTooltip("Returns PID control action computed with current system value and timestep (not realtime).");
    this.setHelpUrl("https://micropython-simple-pid.readthedocs.io/en/latest/#the-basics");
  }
};
Blockly.Blocks['control_pid.tunings'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("PID #")
        .appendField(new Blockly.FieldNumber(0, 0, 9, 1), "ID")
        .appendField("tunings");
    this.appendValueInput("KP")
        .setCheck(null)
        .appendField("Kp");
    this.appendValueInput("KI")
        .setCheck(null)
        .appendField("Ki");
    this.appendValueInput("KD")
        .setCheck(null)
        .appendField("Kd");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#7b49ad');
    this.setTooltip("Set PID controller tunings");
    this.setHelpUrl("https://micropython-simple-pid.readthedocs.io/en/latest/#the-basics");
  }
};
Blockly.Blocks['control_pid.setpoint'] = {
  init: function() {
    this.appendValueInput("SETPOINT")
        .appendField("PID #")
        .appendField(new Blockly.FieldNumber(0, 0, 9, 1), "ID")
        .appendField("setpoint");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#7b49ad');
    this.setTooltip("Set PID controller setpoint");
    this.setHelpUrl("https://micropython-simple-pid.readthedocs.io/en/latest/#the-basics");
  }
};
Blockly.Blocks['control_pid.auto_mode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PID #")
        .appendField(new Blockly.FieldNumber(0, 0, 9, 1), "ID")
        .appendField("enable")
        .appendField(new Blockly.FieldCheckbox(true), "ENABLE");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#7b49ad');
    this.setTooltip("Enable or disable PID controller");
    this.setHelpUrl("https://micropython-simple-pid.readthedocs.io/en/latest/#the-basics");
  }
};
Blockly.Blocks['control_pid.output_limits'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PID #")
        .appendField(new Blockly.FieldNumber(0, 0, 9, 1), "ID")
        .appendField("output limits");
    this.appendDummyInput()
        .appendField("from")
        .appendField(new Blockly.FieldNumber(0), "LOWER")
        .appendField("to")
        .appendField(new Blockly.FieldNumber(100), "UPPER");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#7b49ad');
    this.setTooltip("Set PID controller lower and upper bonds");
    this.setHelpUrl("https://micropython-simple-pid.readthedocs.io/en/latest/#auto-mode");
  }
};
Blockly.Blocks['control_pid.vars'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get PID #")
        .appendField(new Blockly.FieldNumber(0, 0, 9, 1), "ID")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["Kp gain","Kp"], ["Ki gain","Ki"], ["Kd gain","Kd"], ["tunings (Kp, Ki, Kd)","tunings"], ["last time","_last_time"], ["setpoint","setpoint"], ["output limits (lower, upper)","output_limits"], ["auto mode","auto_mode"], ["power components","components"]]), "VARS");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour('#7b49ad');
    this.setTooltip("Returns PID controller values, \"auto mode\" returns a boolean if the controller is on or off and \"power components\" Kp, Ki and Kd contribution to the output.");
    this.setHelpUrl("https://micropython-simple-pid.readthedocs.io/");
  }
};

Blockly.Blocks['simulate_water_boiler'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Water Boiler #")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "ID");
    this.appendDummyInput()
        .appendField("Dissipation rate (ΔºC/ms)")
        .appendField(new Blockly.FieldNumber(0.02, 0), "DISSIPATION");
    this.appendValueInput("POWER")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("power input");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour('#666666');
    this.setTooltip("Simulate Water Boiler temperature with power input, returns water temperature. Runs at precision of milliseconds. Uses 20ºC as room temperature.");
    this.setHelpUrl("https://github.com/JorgeGMarques/micropython-simple-pid/blob/master/examples/water_boiler/water_boiler_pid.py");
  }
};

// Control Simulate ------------------------------------------------------------
Blockly.Blocks['simulate_water_boiler'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Water Boiler #")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "ID");
    this.appendDummyInput()
        .appendField("Dissipation rate (ΔºC/ms)")
        .appendField(new Blockly.FieldNumber(0.02, 0), "DISSIPATION");
    this.appendValueInput("POWER")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("power input");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour('#666666');
    this.setTooltip("Simulate Water Boiler temperature with power input, returns water temperature. Runs at precision of milliseconds. Uses 20ºC as room temperature.");
    this.setHelpUrl("https://github.com/JorgeGMarques/micropython-simple-pid/blob/master/examples/water_boiler/water_boiler_pid.py");
  }
};

Blockly.Blocks['simulate_dcmotor.sim'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DC Motor#")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "ID");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Ra(Ω)")
        .appendField(new Blockly.FieldNumber(0.52, 0), "RA")
        .appendField("La(H)")
        .appendField(new Blockly.FieldNumber(0.000036, 0), "LA")
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("B(Nm)")
        .appendField(new Blockly.FieldNumber(0.00001, 0), "B")
        .appendField("J(kgm²)")
        .appendField(new Blockly.FieldNumber(0.000012, 0), "J");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Kbemf")
        .appendField(new Blockly.FieldNumber(0.0137, 0), "KBEMF")
        .appendField("Static Friction (Nm)")
        .appendField(new Blockly.FieldNumber(0.01, 0), "STATIC_FRICTION");
    this.appendValueInput("POWER")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("voltage (V)");
    this.appendValueInput("DT")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("timestep (s)");
    this.appendValueInput("LOAD")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("load (Nm)");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour('#666666');
    this.setTooltip("Simulate a DC Motor voltage as input at non realtime, returns speed in RPM.");
    this.setHelpUrl("https://github.com/JorgeGMarques/micropython-simple-pid/blob/master/examples/dc_motor/dc_motor_pid.py");
  }
};

Blockly.Blocks['simulate_dcmotor.vars'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get DC Motor #")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "ID")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["Va(V)","va"], ["Ia(A)","ia"], ["omega(RPM)","omega"], ["theta(kgm²)","theta"], ["static friction (Nm)","STATIC_FRICTION"], ["Bemf(V)","bemf"], ["torque (Nm)","Te"], ["Load torque (Nm)","Tl"], ["last time","_last_time"]]), "VARS");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour('#666666');
    this.setTooltip("Returns a internal variables of the DC Motor simulation.");
    this.setHelpUrl("https://github.com/JorgeGMarques/micropython-simple-pid/blob/master/examples/water_boiler/water_boiler.py");
  }
};
