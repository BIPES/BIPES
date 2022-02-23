Blockly.Blocks['delay'] = {
  init: function() {
    this.appendValueInput("TIME")
        .setCheck(null)
        .appendField(Msg["block_delay"]); //Ready for i18n (see dir msg/<lang>.js)
        //.appendField("delay"); //Original, fixed in english
    this.appendDummyInput()
        //.appendField(new Blockly.FieldDropdown([["seconds","sleep"], ["milliseconds","sleep_ms"], ["microseconds","sleep_us"]]), "SCALE"); //original
        .appendField(new Blockly.FieldDropdown([[Msg["seconds"],"sleep"], [Msg["milliseconds"],"sleep_ms"], [Msg["microseconds"],"sleep_us"]]), "SCALE"); //i18n
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Delay for given number, should be positive or 0.");
    this.setHelpUrl("https://docs.micropython.org/en/latest/library/utime.html#utime.sleep");

  }
};

Blockly.Blocks['delay_ms'] = {
  init: function() {
    this.appendValueInput("time")
        .setCheck("Number")
        .appendField("delay milliseconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Delay processing in milliseconds");
 this.setHelpUrl("http://www.bipes.net.br/");
  }
};

Blockly.Blocks['delay_us'] = {
  init: function() {
    this.appendValueInput("time")
        .setCheck("Number")
        .appendField("delay microseconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Delay processing in microseconds");
 this.setHelpUrl("http://www.bipes.net.br/");
  }
};

Blockly.Blocks['ticks_ms'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Get milliseconds counter"), "Msg_GET_MS");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Get millisecond counter");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['ticks_diff'] = {
  init: function() {
   this.appendDummyInput().appendField(new Blockly.FieldLabelSerializable("Compute time difference"), "DIFF_TS");
    this.setOutput(true, null);
    this.appendValueInput("end")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("end");
    this.appendValueInput("start")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("start");
    //this.setPreviousStatement(true, null);
    //this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Compute time difference");
 this.setHelpUrl("bipes.net.br");
  }
};



Blockly.Blocks['timer'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Timer #")
        .appendField(new Blockly.FieldNumber(2, 0, 9, 1), "timerNumber")
        .appendField("do")
        .appendField(new Blockly.FieldDropdown([["every","PERIODIC"], ["once in","ONE_SHOT"]]), "MODE")
        .appendField(new Blockly.FieldNumber(1000, 0, Infinity, 1), "interval")
        .appendField("ms");
    this.appendStatementInput("statements")
        .setCheck("image");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Set a Timer to execute periodically or one after a time given in milliseconds.');
    this.setHelpUrl("https://docs.micropython.org/en/latest/esp32/quickref.html#timers")
  }
};

Blockly.Blocks['stop_timer'] = {
  init: function() {

    this.appendValueInput("timerNumber")
        .setCheck("Number")
        .appendField("Stop Timer");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("Stop Timer");
 this.setHelpUrl("www.bipes.net.br");
  }
};

Blockly.Blocks['deep_sleep8266'] = {
	init: function() {
    this.appendValueInput("interval")
        .setCheck("Number")
	.appendField("deep sleep");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Deep sleep process in milliseconds");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};
