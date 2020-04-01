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
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Execute Python Code");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("Execute custom Python Code");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};