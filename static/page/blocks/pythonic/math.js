// Convert to Int --------------------------------------------------------------
Blockly.Python['var_to_int'] = function(block) {
  var variable = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
  var code = 'int(' + variable + ')';

  return [code, Blockly.Python.ORDER_NONE];
};
