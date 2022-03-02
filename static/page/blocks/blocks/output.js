// %{OUTPUTS} ------------------------------------------------------------------
// Relay -----------------------------------------------------------------------
// Relay Switch
Blockly.Blocks['relay_switch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(
                     "static/page/blocks/images/relay.png",
                     55,
                     55,
                     "*"))
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Msg["relay"]);
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField('')
        .appendField(new Blockly.FieldDropdown([
                       [Msg['off'], '0'],
                       [Msg['on'], '1']
                     ]), 'RELAY_STATUS')
        .appendField(Msg["relay_on"]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Turn On Relay on GPIO digital pin");
    this.setHelpUrl("bipes.net.br");
  }
};

// I/O Expander ----------------------------------------------------------------
// MCP23017
Blockly.Blocks['mcp23017_init'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Init MCP23017");

    this.appendValueInput("scl")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SCL");

    this.appendValueInput("sda")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SDA");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['mcp23017_setup'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("MCP23017 direction setup (IN/OUT)");
        //.appendField(Msg["setpin"]);//i18n
    this.appendValueInput("value")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        //.appendField("to");
        .appendField(Msg["to"]); //i18n
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("MCP23017 directin setup");
 this.setHelpUrl("bipes.net.br");
  }
};

Blockly.Blocks['mcp23017_output'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("MCP23017 set pin");
        //.appendField(Msg["setpin"]);//i18n
    this.appendValueInput("value")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        //.appendField("to");
        .appendField(Msg["to"]); //i18n
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("MCP23017 Write to GPIO digital pin");
 this.setHelpUrl("bipes.net.br");
  }
};

Blockly.Blocks['mcp23017_input'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("MCP23017 input pin");//original
        //.appendField(Msg["read_digital_pin"]);
    this.appendValueInput("pullup")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pull-up");

    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("MCP23017 Read digital pin");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

// RC Servo Motor --------------------------------------------------------------
Blockly.Blocks['init_servo'] = {
  init: function() {

 this.appendDummyInput()
      .appendField(new Blockly.FieldImage(
        "static/page/blocks/images/servo.png",
        55,
        55,
        "*"))
      .appendField("Init RC Servo Motor");

    this.appendValueInput("pin")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pin");
    this.setColour(230);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);

 this.setTooltip("Init RC servo motor");
 this.setHelpUrl("http://www.bipes.net.ebr");
  }
};


Blockly.Blocks['move_servo'] = {
  init: function() {
  this.appendDummyInput().appendField("Move Servo Motor");

  this.appendValueInput("angle")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Angle");
  this.setColour(230);

  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);

  this.setTooltip("Move RC servo motor to degrees");
  this.setHelpUrl("http://www.bipes.net.ebr");
  }
}

// Stepper Motor ---------------------------------------------------------------
Blockly.Blocks['stepper_init'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Init Stepper Motor");

 this.appendDummyInput()
      .appendField(new Blockly.FieldImage(
        "static/page/blocks/images/stepper.png",
        55,
        55,
        "*"));

    this.appendValueInput("p0")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pin0");

    this.appendValueInput("p1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pin1");

    this.appendValueInput("p2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pin2");

    this.appendValueInput("p3")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pin3");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['stepper_step'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Stepper Step");

    this.appendValueInput("steps")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Steps");

    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  }
};

// DC Motor --------------------------------------------------------------------
//DC Motor with H-Bridge
Blockly.Blocks['dc_motor_init'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Init DC Motor");

    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(
        "static/page/blocks/images/dcmotor.png",
        55,
        55,
        "*"));
        //.setAlign(Blockly.ALIGN_CENTRE);


    this.appendValueInput("pwm")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("PWM");

    this.appendValueInput("dir1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Dir1");

    this.appendValueInput("dir2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Dir2");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['dc_motor_power'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Set DC Motor Power");

    this.appendValueInput("power")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Power");

    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  }
};

Blockly.Blocks['dc_motor_direction'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Set DC Motor Direction");

this.appendValueInput("dir")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Direction");

    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  }
};

Blockly.Blocks['dc_motor_stop'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Stop DC Motor");

    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  }
};

