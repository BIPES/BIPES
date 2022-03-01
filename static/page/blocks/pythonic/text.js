// Convert to Str
Blockly.Python['text_to_str'] = function(block) {
  var variable = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
  var code = 'str(' + variable + ')';

  return [code, Blockly.Python.ORDER_NONE];
};
