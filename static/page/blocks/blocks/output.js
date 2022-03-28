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

// Sounds ----------------------------------------------------------------------
Blockly.Blocks['rtttl_play'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Play song (RTTTL)");

    this.appendValueInput("pin")
        .setCheck(null)
	.appendField("Pin");

    this.appendValueInput("song")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Song");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Control ESP32-CAM White LED (flashlight)");
 this.setHelpUrl("bipes.net.br");
  }
};

Blockly.Blocks['tone'] = {
  init: function(){
    this.appendDummyInput()
        .appendField("Tone (Hz)");

    this.appendValueInput("pin")
        .setCheck(null)
	.appendField("Pin");
    this.appendValueInput("frequency")
        .setCheck("Number")
	  .appendField("Frequency");

    this.appendValueInput("duration")
        .setCheck("Number")
	.appendField("Duration (s):");

    this.appendDummyInput()
        .appendField("(0 for infinite duration)");


    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Sound - tone generator");
 this.setHelpUrl("http://www.bipes.net.br");
 }
};

Blockly.Blocks['note'] = {
  init: function(){
    this.appendDummyInput()
        .appendField("Play music note");
    this.appendValueInput("pin")
        .setCheck(null)
	.appendField("Pin");

    this.appendValueInput("note")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Note");

    this.appendValueInput("duration")
        .setCheck("Number")
	.appendField("Duration (s):");

    this.appendDummyInput()
        .appendField("(0 for infinite duration)");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Sound - tone generator (music note)");
 this.setHelpUrl("http://www.bipes.net.br");
 }
};

Blockly.Blocks['tone_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Note:")
//        .appendField(new Blockly.FieldDropdown([["B1","31"], ["C2","33"], ["CS2","35"], ["D2","37"], ["DS2","39"], ["E2","41"], ["F2","44"], ["FS2","46"], ["G2","49"], ["GS2","52"], ["A2","55"], ["AS2","58"]]), "tone");
        .appendField(new Blockly.FieldDropdown([["B1","31"],["C2","33"],["CS2","35"],["D2","37"],["DS2","39"],["E2","41"],["F2","44"],["FS2","46"],["G2","49"],["GS2","52"],["A2","55"],["AS2","58"],["B2","62"],["C3","65"],["CS3","69"],["D3","73"],["DS3","78"],["E3","82"],["F3","87"],["FS3","93"],["G3","98"],["GS3","104"],["A3","110"],["AS3","117"],["B3","123"],["C4","131"],["CS4","139"],["D4","147"],["DS4","156"],["E4","165"],["F4","175"],["FS4","185"],["G4","196"],["GS4","208"],["A4","220"],["AS4","233"],["B4","247"],["C5","262"],["CS5","277"],["D5","294"],["DS5","311"],["E5","330"],["F5","349"],["FS5","370"],["G5","392"],["GS5","415"],["A5","440"],["AS5","466"],["B5","494"],["C6","523"],["CS6","554"],["D6","587"],["DS6","622"],["E6","659"],["F6","698"],["FS6","740"],["G6","784"],["GS6","831"],["A6","880"],["AS6","932"],["B6","988"],["C7","1047"],["CS7","1109"],["D7","1175"],["DS7","1245"],["E7","1319"],["F7","1397"],["FS7","1480"],["G7","1568"],["GS7","1661"],["A7","1760"],["AS7","1865"],["B7","1976"],["C8","2093"],["CS8","2217"],["D8","2349"],["DS8","2489"],["E8","2637"],["F8","2794"],["FS8","2960"],["G8","3136"],["GS8","3322"],["A8","3520"],["AS8","3729"],["B8","3951"],["C9","4186"],["CS9","4435"],["D9","4699"],["DS9","4978"],["P","0"]]), "tone");

    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
