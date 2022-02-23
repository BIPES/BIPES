// Convert to Str
Blockly.Blocks['text_to_str'] = {
  init: function() {
    this.appendValueInput("var")
        .appendField(new Blockly.FieldLabelSerializable("to str"), "VAR")
    this.setColour(160)
    this.setOutput(true, null)
    this.setTooltip("Convert anything to String.")
    this.setHelpUrl("http://www.bipes.net.br")
  }
}
