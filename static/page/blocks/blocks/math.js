// Convert to Int
Blockly.Blocks['var_to_int'] = {
  init: function() {
    this.appendValueInput("var")
        .appendField(new Blockly.FieldLabelSerializable("to int"), "VAR")
    this.setColour(230)
    this.setOutput(true, null)
    this.setTooltip("Convert anything to Int.")
    this.setHelpUrl("http://www.bipes.net.br")
  }
}
