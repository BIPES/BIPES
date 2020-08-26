Blockly.Blocks['core_borderInterpolate'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('borderInterpolate');
    this.appendDummyInput()
        .appendField('p')
        .appendField(new Blockly.FieldTextInput('0'), 'p');
    this.appendDummyInput()
        .appendField('len')
        .appendField(new Blockly.FieldTextInput('0'), 'len');
    this.appendDummyInput()
        .appendField('borderType')
        .appendField(new Blockly.FieldTextInput('0'), 'borderType');
    this.setOutput(true,'Number');
    this.setTooltip('core_borderInterpolate');
  },
};
Blockly.Blocks['core_copyMakeBorder'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('copyMakeBorder');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('top')
        .appendField(new Blockly.FieldTextInput('0'), 'top');
    this.appendDummyInput()
        .appendField('bottom')
        .appendField(new Blockly.FieldTextInput('0'), 'bottom');
    this.appendDummyInput()
        .appendField('left')
        .appendField(new Blockly.FieldTextInput('0'), 'left');
    this.appendDummyInput()
        .appendField('right')
        .appendField(new Blockly.FieldTextInput('0'), 'right');
    this.appendDummyInput()
        .appendField('borderType')
        .appendField(new Blockly.FieldTextInput('0'), 'borderType');
    this.setOutput(true,'image');
    this.setTooltip('core_copyMakeBorder');
  },
};
Blockly.Blocks['core_add'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('add');
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_add');
  },
};
Blockly.Blocks['core_subtract'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('subtract');
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_subtract');
  },
};
Blockly.Blocks['core_multiply'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('multiply');
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_multiply');
  },
};
Blockly.Blocks['core_divide'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('divide');
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_divide');
  },
};
Blockly.Blocks['core_scaleAdd'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('scaleAdd');
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('alpha')
        .appendField(new Blockly.FieldTextInput('0'), 'alpha');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_scaleAdd');
  },
};
Blockly.Blocks['core_addWeighted'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('addWeighted');
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('alpha')
        .appendField(new Blockly.FieldTextInput('0'), 'alpha');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('beta')
        .appendField(new Blockly.FieldTextInput('0'), 'beta');
    this.appendDummyInput()
        .appendField('gamma')
        .appendField(new Blockly.FieldTextInput('0'), 'gamma');
    this.setOutput(true,'image');
    this.setTooltip('core_addWeighted');
  },
};
Blockly.Blocks['core_convertScaleAbs'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('convertScaleAbs');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_convertScaleAbs');
  },
};
Blockly.Blocks['core_convertFp16'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('convertFp16');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_convertFp16');
  },
};
Blockly.Blocks['core_LUT'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('LUT');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('lut')
        .appendField('lut')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_LUT');
  },
};
Blockly.Blocks['core_sum'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('sum');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'Colour');
    this.setTooltip('core_sum');
  },
};
Blockly.Blocks['core_countNonZero'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('countNonZero');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'Number');
    this.setTooltip('core_countNonZero');
  },
};
Blockly.Blocks['core_findNonZero'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('findNonZero');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_findNonZero');
  },
};
Blockly.Blocks['core_mean'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('mean');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'Colour');
    this.setTooltip('core_mean');
  },
};
Blockly.Blocks['core_meanStdDev'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('meanStdDev');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_meanStdDev');
  },
};
Blockly.Blocks['core_norm'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('norm');
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.setOutput(true,'Number');
    this.setTooltip('core_norm');
  },
};
Blockly.Blocks['core_PSNR'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('PSNR');
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.setOutput(true,'Number');
    this.setTooltip('core_PSNR');
  },
};
Blockly.Blocks['core_batchDistance'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('batchDistance');
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('dtype')
        .appendField(new Blockly.FieldTextInput('0'), 'dtype');
    this.setOutput(true,'image');
    this.setTooltip('core_batchDistance');
  },
};
Blockly.Blocks['core_normalize'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('normalize');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('dst')
        .appendField('dst')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_normalize');
  },
};
Blockly.Blocks['core_reduce'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('reduce');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('dim')
        .appendField(new Blockly.FieldTextInput('0'), 'dim');
    this.appendDummyInput()
        .appendField('rtype')
        .appendField(new Blockly.FieldTextInput('0'), 'rtype');
    this.setOutput(true,'image');
    this.setTooltip('core_reduce');
  },
};
Blockly.Blocks['core_merge'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('merge');
    this.appendValueInput('mv')
        .appendField('mv');
    this.setOutput(true,'image');
    this.setTooltip('core_merge');
  },
};
Blockly.Blocks['core_split'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('split');
    this.appendValueInput('m')
        .appendField('m')
        .setCheck('image');
    this.setOutput(true);
    this.setTooltip('core_split');
  },
};
Blockly.Blocks['core_mixChannels'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('mixChannels');
    this.appendValueInput('src')
        .appendField('src');
    this.appendValueInput('dst')
        .appendField('dst');
    this.appendValueInput('fromTo')
        .appendField('fromTo');
    this.setOutput(true);
    this.setTooltip('core_mixChannels');
  },
};
Blockly.Blocks['core_extractChannel'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('extractChannel');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('coi')
        .appendField(new Blockly.FieldTextInput('0'), 'coi');
    this.setOutput(true,'image');
    this.setTooltip('core_extractChannel');
  },
};
Blockly.Blocks['core_insertChannel'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('insertChannel');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('dst')
        .appendField('dst')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('coi')
        .appendField(new Blockly.FieldTextInput('0'), 'coi');
    this.setOutput(true,'image');
    this.setTooltip('core_insertChannel');
  },
};
Blockly.Blocks['core_flip'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('flip');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('flipCode')
        .appendField(new Blockly.FieldTextInput('0'), 'flipCode');
    this.setOutput(true,'image');
    this.setTooltip('core_flip');
  },
};
Blockly.Blocks['core_rotate'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('rotate');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('rotateCode')
        .appendField(new Blockly.FieldTextInput('0'), 'rotateCode');
    this.setOutput(true,'image');
    this.setTooltip('core_rotate');
  },
};
Blockly.Blocks['core_repeat'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('repeat');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('ny')
        .appendField(new Blockly.FieldTextInput('0'), 'ny');
    this.appendDummyInput()
        .appendField('nx')
        .appendField(new Blockly.FieldTextInput('0'), 'nx');
    this.setOutput(true,'image');
    this.setTooltip('core_repeat');
  },
};
Blockly.Blocks['core_hconcat'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('hconcat');
    this.appendValueInput('src')
        .appendField('src');
    this.setOutput(true,'image');
    this.setTooltip('core_hconcat');
  },
};
Blockly.Blocks['core_vconcat'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('vconcat');
    this.appendValueInput('src')
        .appendField('src');
    this.setOutput(true,'image');
    this.setTooltip('core_vconcat');
  },
};
Blockly.Blocks['core_bitwise_and'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('bitwise_and');
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_bitwise_and');
  },
};
Blockly.Blocks['core_bitwise_or'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('bitwise_or');
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_bitwise_or');
  },
};
Blockly.Blocks['core_bitwise_xor'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('bitwise_xor');
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_bitwise_xor');
  },
};
Blockly.Blocks['core_bitwise_not'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('bitwise_not');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_bitwise_not');
  },
};
Blockly.Blocks['core_absdiff'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('absdiff');
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_absdiff');
  },
};
Blockly.Blocks['core_copyTo'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('copyTo');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('mask')
        .appendField('mask')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_copyTo');
  },
};
Blockly.Blocks['core_inRange'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('inRange');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('lowerb')
        .appendField('lowerb')
        .setCheck('image');
    this.appendValueInput('upperb')
        .appendField('upperb')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_inRange');
  },
};
Blockly.Blocks['core_compare'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('compare');
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('cmpop')
        .appendField(new Blockly.FieldTextInput('0'), 'cmpop');
    this.setOutput(true,'image');
    this.setTooltip('core_compare');
  },
};
Blockly.Blocks['core_min'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('min');
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_min');
  },
};
Blockly.Blocks['core_max'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('max');
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_max');
  },
};
Blockly.Blocks['core_sqrt'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('sqrt');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_sqrt');
  },
};
Blockly.Blocks['core_pow'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('pow');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('power')
        .appendField(new Blockly.FieldTextInput('0'), 'power');
    this.setOutput(true,'image');
    this.setTooltip('core_pow');
  },
};
Blockly.Blocks['core_exp'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('exp');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_exp');
  },
};
Blockly.Blocks['core_log'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('log');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_log');
  },
};
Blockly.Blocks['core_polarToCart'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('polarToCart');
    this.appendValueInput('magnitude')
        .appendField('magnitude')
        .setCheck('image');
    this.appendValueInput('angle')
        .appendField('angle')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_polarToCart');
  },
};
Blockly.Blocks['core_cartToPolar'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('cartToPolar');
    this.appendValueInput('x')
        .appendField('x')
        .setCheck('image');
    this.appendValueInput('y')
        .appendField('y')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_cartToPolar');
  },
};
Blockly.Blocks['core_phase'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('phase');
    this.appendValueInput('x')
        .appendField('x')
        .setCheck('image');
    this.appendValueInput('y')
        .appendField('y')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_phase');
  },
};
Blockly.Blocks['core_magnitude'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('magnitude');
    this.appendValueInput('x')
        .appendField('x')
        .setCheck('image');
    this.appendValueInput('y')
        .appendField('y')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_magnitude');
  },
};
Blockly.Blocks['core_patchNaNs'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('patchNaNs');
    this.appendValueInput('a')
        .appendField('a')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_patchNaNs');
  },
};
Blockly.Blocks['core_gemm'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('gemm');
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('alpha')
        .appendField(new Blockly.FieldTextInput('0'), 'alpha');
    this.appendValueInput('src3')
        .appendField('src3')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('beta')
        .appendField(new Blockly.FieldTextInput('0'), 'beta');
    this.setOutput(true,'image');
    this.setTooltip('core_gemm');
  },
};
Blockly.Blocks['core_mulTransposed'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('mulTransposed');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('aTa')
        .appendField('aTa');
    this.setOutput(true,'image');
    this.setTooltip('core_mulTransposed');
  },
};
Blockly.Blocks['core_transpose'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('transpose');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_transpose');
  },
};
Blockly.Blocks['core_transform'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('transform');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('m')
        .appendField('m')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_transform');
  },
};
Blockly.Blocks['core_perspectiveTransform'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('perspectiveTransform');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('m')
        .appendField('m')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_perspectiveTransform');
  },
};
Blockly.Blocks['core_completeSymm'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('completeSymm');
    this.appendValueInput('m')
        .appendField('m')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_completeSymm');
  },
};
Blockly.Blocks['core_setIdentity'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('setIdentity');
    this.appendValueInput('mtx')
        .appendField('mtx')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_setIdentity');
  },
};
Blockly.Blocks['core_determinant'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('determinant');
    this.appendValueInput('mtx')
        .appendField('mtx')
        .setCheck('image');
    this.setOutput(true,'Number');
    this.setTooltip('core_determinant');
  },
};
Blockly.Blocks['core_trace'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('trace');
    this.appendValueInput('mtx')
        .appendField('mtx')
        .setCheck('image');
    this.setOutput(true,'Colour');
    this.setTooltip('core_trace');
  },
};
Blockly.Blocks['core_invert'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('invert');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_invert');
  },
};
Blockly.Blocks['core_solve'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('solve');
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_solve');
  },
};
Blockly.Blocks['core_sort'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('sort');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('flags')
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true,'image');
    this.setTooltip('core_sort');
  },
};
Blockly.Blocks['core_sortIdx'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('sortIdx');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('flags')
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true,'image');
    this.setTooltip('core_sortIdx');
  },
};
Blockly.Blocks['core_solveCubic'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('solveCubic');
    this.appendValueInput('coeffs')
        .appendField('coeffs')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_solveCubic');
  },
};
Blockly.Blocks['core_solvePoly'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('solvePoly');
    this.appendValueInput('coeffs')
        .appendField('coeffs')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_solvePoly');
  },
};
Blockly.Blocks['core_eigen'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('eigen');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_eigen');
  },
};
Blockly.Blocks['core_eigenNonSymmetric'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('eigenNonSymmetric');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_eigenNonSymmetric');
  },
};
Blockly.Blocks['core_calcCovarMatrix'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('calcCovarMatrix');
    this.appendValueInput('samples')
        .appendField('samples')
        .setCheck('image');
    this.appendValueInput('mean')
        .appendField('mean')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('flags')
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true,'image');
    this.setTooltip('core_calcCovarMatrix');
  },
};
Blockly.Blocks['core_PCACompute'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('PCACompute');
    this.appendValueInput('data')
        .appendField('data')
        .setCheck('image');
    this.appendValueInput('mean')
        .appendField('mean')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_PCACompute');
  },
};
Blockly.Blocks['core_PCAProject'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('PCAProject');
    this.appendValueInput('data')
        .appendField('data')
        .setCheck('image');
    this.appendValueInput('mean')
        .appendField('mean')
        .setCheck('image');
    this.appendValueInput('eigenvectors')
        .appendField('eigenvectors')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_PCAProject');
  },
};
Blockly.Blocks['core_PCABackProject'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('PCABackProject');
    this.appendValueInput('data')
        .appendField('data')
        .setCheck('image');
    this.appendValueInput('mean')
        .appendField('mean')
        .setCheck('image');
    this.appendValueInput('eigenvectors')
        .appendField('eigenvectors')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_PCABackProject');
  },
};
Blockly.Blocks['core_SVDecomp'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('SVDecomp');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_SVDecomp');
  },
};
Blockly.Blocks['core_SVBackSubst'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('SVBackSubst');
    this.appendValueInput('w')
        .appendField('w')
        .setCheck('image');
    this.appendValueInput('u')
        .appendField('u')
        .setCheck('image');
    this.appendValueInput('vt')
        .appendField('vt')
        .setCheck('image');
    this.appendValueInput('rhs')
        .appendField('rhs')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_SVBackSubst');
  },
};
Blockly.Blocks['core_Mahalanobis'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('Mahalanobis');
    this.appendValueInput('v1')
        .appendField('v1')
        .setCheck('image');
    this.appendValueInput('v2')
        .appendField('v2')
        .setCheck('image');
    this.appendValueInput('icovar')
        .appendField('icovar')
        .setCheck('image');
    this.setOutput(true,'Number');
    this.setTooltip('core_Mahalanobis');
  },
};
Blockly.Blocks['core_dft'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('dft');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_dft');
  },
};
Blockly.Blocks['core_idft'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('idft');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_idft');
  },
};
Blockly.Blocks['core_dct'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('dct');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_dct');
  },
};
Blockly.Blocks['core_idct'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('idct');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_idct');
  },
};
Blockly.Blocks['core_mulSpectrums'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('mulSpectrums');
    this.appendValueInput('a')
        .appendField('a')
        .setCheck('image');
    this.appendValueInput('b')
        .appendField('b')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('flags')
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true,'image');
    this.setTooltip('core_mulSpectrums');
  },
};
Blockly.Blocks['core_getOptimalDFTSize'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getOptimalDFTSize');
    this.appendDummyInput()
        .appendField('vecsize')
        .appendField(new Blockly.FieldTextInput('0'), 'vecsize');
    this.setOutput(true,'Number');
    this.setTooltip('core_getOptimalDFTSize');
  },
};
Blockly.Blocks['core_setRNGSeed'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('setRNGSeed');
    this.appendDummyInput()
        .appendField('seed')
        .appendField(new Blockly.FieldTextInput('0'), 'seed');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('core_setRNGSeed');
  },
};
Blockly.Blocks['core_randu'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('randu');
    this.appendValueInput('dst')
        .appendField('dst')
        .setCheck('image');
    this.appendValueInput('low')
        .appendField('low')
        .setCheck('image');
    this.appendValueInput('high')
        .appendField('high')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_randu');
  },
};
Blockly.Blocks['core_randn'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('randn');
    this.appendValueInput('dst')
        .appendField('dst')
        .setCheck('image');
    this.appendValueInput('mean')
        .appendField('mean')
        .setCheck('image');
    this.appendValueInput('stddev')
        .appendField('stddev')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_randn');
  },
};
Blockly.Blocks['core_kmeans'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('kmeans');
    this.appendValueInput('data')
        .appendField('data')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('K')
        .appendField(new Blockly.FieldTextInput('0'), 'K');
    this.appendValueInput('bestLabels')
        .appendField('bestLabels')
        .setCheck('image');
    this.appendValueInput('criteria')
        .appendField('criteria');
    this.appendDummyInput()
        .appendField('attempts')
        .appendField(new Blockly.FieldTextInput('0'), 'attempts');
    this.appendDummyInput()
        .appendField('flags')
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true,'image');
    this.setTooltip('core_kmeans');
  },
};
Blockly.Blocks['core_cubeRoot'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('cubeRoot');
    this.appendDummyInput()
        .appendField('val')
        .appendField(new Blockly.FieldTextInput('0'), 'val');
    this.setOutput(true,'Number');
    this.setTooltip('core_cubeRoot');
  },
};
Blockly.Blocks['core_fastAtan2'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('fastAtan2');
    this.appendDummyInput()
        .appendField('y')
        .appendField(new Blockly.FieldTextInput('0'), 'y');
    this.appendDummyInput()
        .appendField('x')
        .appendField(new Blockly.FieldTextInput('0'), 'x');
    this.setOutput(true,'Number');
    this.setTooltip('core_fastAtan2');
  },
};
Blockly.Blocks['core_setNumThreads'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('setNumThreads');
    this.appendDummyInput()
        .appendField('nthreads')
        .appendField(new Blockly.FieldTextInput('0'), 'nthreads');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('core_setNumThreads');
  },
};
Blockly.Blocks['core_getNumThreads'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getNumThreads');
    this.setOutput(true,'Number');
    this.setTooltip('core_getNumThreads');
  },
};
Blockly.Blocks['core_getThreadNum'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getThreadNum');
    this.setOutput(true,'Number');
    this.setTooltip('core_getThreadNum');
  },
};
Blockly.Blocks['core_getBuildInformation'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getBuildInformation');
    this.setOutput(true,'String');
    this.setTooltip('core_getBuildInformation');
  },
};
Blockly.Blocks['core_getVersionString'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getVersionString');
    this.setOutput(true,'String');
    this.setTooltip('core_getVersionString');
  },
};
Blockly.Blocks['core_getVersionMajor'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getVersionMajor');
    this.setOutput(true,'Number');
    this.setTooltip('core_getVersionMajor');
  },
};
Blockly.Blocks['core_getVersionMinor'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getVersionMinor');
    this.setOutput(true,'Number');
    this.setTooltip('core_getVersionMinor');
  },
};
Blockly.Blocks['core_getVersionRevision'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getVersionRevision');
    this.setOutput(true,'Number');
    this.setTooltip('core_getVersionRevision');
  },
};
Blockly.Blocks['core_getTickCount'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getTickCount');
    this.setOutput(true);
    this.setTooltip('core_getTickCount');
  },
};
Blockly.Blocks['core_getTickFrequency'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getTickFrequency');
    this.setOutput(true,'Number');
    this.setTooltip('core_getTickFrequency');
  },
};
Blockly.Blocks['core_getCPUTickCount'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getCPUTickCount');
    this.setOutput(true);
    this.setTooltip('core_getCPUTickCount');
  },
};
Blockly.Blocks['core_checkHardwareSupport'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('checkHardwareSupport');
    this.appendDummyInput()
        .appendField('feature')
        .appendField(new Blockly.FieldTextInput('0'), 'feature');
    this.setOutput(true);
    this.setTooltip('core_checkHardwareSupport');
  },
};
Blockly.Blocks['core_getHardwareFeatureName'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getHardwareFeatureName');
    this.appendDummyInput()
        .appendField('feature')
        .appendField(new Blockly.FieldTextInput('0'), 'feature');
    this.setOutput(true,'String');
    this.setTooltip('core_getHardwareFeatureName');
  },
};
Blockly.Blocks['core_getCPUFeaturesLine'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getCPUFeaturesLine');
    this.setOutput(true,'String');
    this.setTooltip('core_getCPUFeaturesLine');
  },
};
Blockly.Blocks['core_getNumberOfCPUs'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getNumberOfCPUs');
    this.setOutput(true,'Number');
    this.setTooltip('core_getNumberOfCPUs');
  },
};
Blockly.Blocks['core_setUseOptimized'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('setUseOptimized');
    this.appendValueInput('onoff')
        .appendField('onoff');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('core_setUseOptimized');
  },
};
Blockly.Blocks['core_useOptimized'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('useOptimized');
    this.setOutput(true);
    this.setTooltip('core_useOptimized');
  },
};
Blockly.Blocks['core_TickMeter_TickMeter'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('TickMeter');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TickMeter'), 'TickMeter');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('core_TickMeter_TickMeter');
  },
  getVars: function(){return [this.getFieldValue('TickMeter')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TickMeter'))){this.setFieldValue(newName,'TickMeter');}},
};
Blockly.Blocks['core_TickMeter_start'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('start');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TickMeter'), 'TickMeter');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('core_TickMeter_start');
  },
  getVars: function(){return [this.getFieldValue('TickMeter')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TickMeter'))){this.setFieldValue(newName,'TickMeter');}},
};
Blockly.Blocks['core_TickMeter_stop'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('stop');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TickMeter'), 'TickMeter');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('core_TickMeter_stop');
  },
  getVars: function(){return [this.getFieldValue('TickMeter')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TickMeter'))){this.setFieldValue(newName,'TickMeter');}},
};
Blockly.Blocks['core_TickMeter_getTimeTicks'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getTimeTicks');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TickMeter'), 'TickMeter');
    this.setOutput(true);
    this.setTooltip('core_TickMeter_getTimeTicks');
  },
  getVars: function(){return [this.getFieldValue('TickMeter')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TickMeter'))){this.setFieldValue(newName,'TickMeter');}},
};
Blockly.Blocks['core_TickMeter_getTimeMicro'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getTimeMicro');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TickMeter'), 'TickMeter');
    this.setOutput(true,'Number');
    this.setTooltip('core_TickMeter_getTimeMicro');
  },
  getVars: function(){return [this.getFieldValue('TickMeter')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TickMeter'))){this.setFieldValue(newName,'TickMeter');}},
};
Blockly.Blocks['core_TickMeter_getTimeMilli'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getTimeMilli');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TickMeter'), 'TickMeter');
    this.setOutput(true,'Number');
    this.setTooltip('core_TickMeter_getTimeMilli');
  },
  getVars: function(){return [this.getFieldValue('TickMeter')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TickMeter'))){this.setFieldValue(newName,'TickMeter');}},
};
Blockly.Blocks['core_TickMeter_getTimeSec'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getTimeSec');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TickMeter'), 'TickMeter');
    this.setOutput(true,'Number');
    this.setTooltip('core_TickMeter_getTimeSec');
  },
  getVars: function(){return [this.getFieldValue('TickMeter')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TickMeter'))){this.setFieldValue(newName,'TickMeter');}},
};
Blockly.Blocks['core_TickMeter_getCounter'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getCounter');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TickMeter'), 'TickMeter');
    this.setOutput(true);
    this.setTooltip('core_TickMeter_getCounter');
  },
  getVars: function(){return [this.getFieldValue('TickMeter')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TickMeter'))){this.setFieldValue(newName,'TickMeter');}},
};
Blockly.Blocks['core_TickMeter_getFPS'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getFPS');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TickMeter'), 'TickMeter');
    this.setOutput(true,'Number');
    this.setTooltip('core_TickMeter_getFPS');
  },
  getVars: function(){return [this.getFieldValue('TickMeter')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TickMeter'))){this.setFieldValue(newName,'TickMeter');}},
};
Blockly.Blocks['core_TickMeter_getAvgTimeSec'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getAvgTimeSec');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TickMeter'), 'TickMeter');
    this.setOutput(true,'Number');
    this.setTooltip('core_TickMeter_getAvgTimeSec');
  },
  getVars: function(){return [this.getFieldValue('TickMeter')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TickMeter'))){this.setFieldValue(newName,'TickMeter');}},
};
Blockly.Blocks['core_TickMeter_getAvgTimeMilli'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getAvgTimeMilli');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TickMeter'), 'TickMeter');
    this.setOutput(true,'Number');
    this.setTooltip('core_TickMeter_getAvgTimeMilli');
  },
  getVars: function(){return [this.getFieldValue('TickMeter')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TickMeter'))){this.setFieldValue(newName,'TickMeter');}},
};
Blockly.Blocks['core_TickMeter_reset'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('reset');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TickMeter'), 'TickMeter');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('core_TickMeter_reset');
  },
  getVars: function(){return [this.getFieldValue('TickMeter')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TickMeter'))){this.setFieldValue(newName,'TickMeter');}},
};
Blockly.Blocks['core_DMatch_DMatch'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('DMatch');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DMatch'), 'DMatch');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('core_DMatch_DMatch');
  },
  getVars: function(){return [this.getFieldValue('DMatch')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DMatch'))){this.setFieldValue(newName,'DMatch');}},
};
Blockly.Blocks['core_useIPP_useIPP'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('useIPP');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('useIPP'), 'useIPP');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('core_useIPP_useIPP');
  },
  getVars: function(){return [this.getFieldValue('useIPP')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('useIPP'))){this.setFieldValue(newName,'useIPP');}},
};
Blockly.Blocks['core_useIPP_setUseIPP'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('setUseIPP');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('useIPP'), 'useIPP');
    this.appendValueInput('flag')
        .appendField('flag');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('core_useIPP_setUseIPP');
  },
  getVars: function(){return [this.getFieldValue('useIPP')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('useIPP'))){this.setFieldValue(newName,'useIPP');}},
};
Blockly.Blocks['core_useIPP_getIppVersion'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getIppVersion');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('useIPP'), 'useIPP');
    this.setOutput(true,'String');
    this.setTooltip('core_useIPP_getIppVersion');
  },
  getVars: function(){return [this.getFieldValue('useIPP')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('useIPP'))){this.setFieldValue(newName,'useIPP');}},
};
Blockly.Blocks['core_useIPP_useIPP_NotExact'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('useIPP_NotExact');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('useIPP'), 'useIPP');
    this.setOutput(true);
    this.setTooltip('core_useIPP_useIPP_NotExact');
  },
  getVars: function(){return [this.getFieldValue('useIPP')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('useIPP'))){this.setFieldValue(newName,'useIPP');}},
};
Blockly.Blocks['core_useIPP_setUseIPP_NotExact'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('setUseIPP_NotExact');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('useIPP'), 'useIPP');
    this.appendValueInput('flag')
        .appendField('flag');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('core_useIPP_setUseIPP_NotExact');
  },
  getVars: function(){return [this.getFieldValue('useIPP')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('useIPP'))){this.setFieldValue(newName,'useIPP');}},
};
Blockly.Blocks['core_KeyPoint_KeyPoint'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('KeyPoint');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('KeyPoint'), 'KeyPoint');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('core_KeyPoint_KeyPoint');
  },
  getVars: function(){return [this.getFieldValue('KeyPoint')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('KeyPoint'))){this.setFieldValue(newName,'KeyPoint');}},
};
Blockly.Blocks['core_KeyPoint_convert'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('convert');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('KeyPoint'), 'KeyPoint');
    this.appendValueInput('keypoints')
        .appendField('keypoints');
    this.setOutput(true);
    this.setTooltip('core_KeyPoint_convert');
  },
  getVars: function(){return [this.getFieldValue('KeyPoint')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('KeyPoint'))){this.setFieldValue(newName,'KeyPoint');}},
};
Blockly.Blocks['core_KeyPoint_overlap'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('overlap');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('KeyPoint'), 'KeyPoint');
    this.appendValueInput('kp1')
        .appendField('kp1');
    this.appendValueInput('kp2')
        .appendField('kp2');
    this.setOutput(true,'Number');
    this.setTooltip('core_KeyPoint_overlap');
  },
  getVars: function(){return [this.getFieldValue('KeyPoint')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('KeyPoint'))){this.setFieldValue(newName,'KeyPoint');}},
};
Blockly.Blocks['core_findFile_findFile'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('findFile');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('findFile'), 'findFile');
    this.appendValueInput('relative_path')
        .appendField('relative_path')
        .setCheck('String');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('core_findFile_findFile');
  },
  getVars: function(){return [this.getFieldValue('findFile')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('findFile'))){this.setFieldValue(newName,'findFile');}},
};
Blockly.Blocks['core_findFile_findFileOrKeep'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('findFileOrKeep');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('findFile'), 'findFile');
    this.appendValueInput('relative_path')
        .appendField('relative_path')
        .setCheck('String');
    this.setOutput(true,'String');
    this.setTooltip('core_findFile_findFileOrKeep');
  },
  getVars: function(){return [this.getFieldValue('findFile')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('findFile'))){this.setFieldValue(newName,'findFile');}},
};
Blockly.Blocks['core_findFile_addSamplesDataSearchPath'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('addSamplesDataSearchPath');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('findFile'), 'findFile');
    this.appendValueInput('path')
        .appendField('path')
        .setCheck('String');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('core_findFile_addSamplesDataSearchPath');
  },
  getVars: function(){return [this.getFieldValue('findFile')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('findFile'))){this.setFieldValue(newName,'findFile');}},
};
Blockly.Blocks['core_findFile_addSamplesDataSearchSubDirectory'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('addSamplesDataSearchSubDirectory');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('findFile'), 'findFile');
    this.appendValueInput('subdir')
        .appendField('subdir')
        .setCheck('String');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('core_findFile_addSamplesDataSearchSubDirectory');
  },
  getVars: function(){return [this.getFieldValue('findFile')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('findFile'))){this.setFieldValue(newName,'findFile');}},
};
Blockly.Blocks['imgproc_createLineSegmentDetector'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('createLineSegmentDetector');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('LineSegmentDetector'), 'LineSegmentDetector');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_createLineSegmentDetector');
  },
  getVars: function(){return [this.getFieldValue('LineSegmentDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('LineSegmentDetector'))){this.setFieldValue(newName,'LineSegmentDetector');}},
};
Blockly.Blocks['imgproc_getGaussianKernel'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getGaussianKernel');
    this.appendDummyInput()
        .appendField('ksize')
        .appendField(new Blockly.FieldTextInput('0'), 'ksize');
    this.appendDummyInput()
        .appendField('sigma')
        .appendField(new Blockly.FieldTextInput('0'), 'sigma');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_getGaussianKernel');
  },
};
Blockly.Blocks['imgproc_getDerivKernels'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getDerivKernels');
    this.appendDummyInput()
        .appendField('dx')
        .appendField(new Blockly.FieldTextInput('0'), 'dx');
    this.appendDummyInput()
        .appendField('dy')
        .appendField(new Blockly.FieldTextInput('0'), 'dy');
    this.appendDummyInput()
        .appendField('ksize')
        .appendField(new Blockly.FieldTextInput('0'), 'ksize');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_getDerivKernels');
  },
};
Blockly.Blocks['imgproc_getGaborKernel'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getGaborKernel');
    this.appendValueInput('ksize')
        .appendField('ksize')
        .setCheck('size');
    this.appendDummyInput()
        .appendField('sigma')
        .appendField(new Blockly.FieldTextInput('0'), 'sigma');
    this.appendDummyInput()
        .appendField('theta')
        .appendField(new Blockly.FieldTextInput('0'), 'theta');
    this.appendDummyInput()
        .appendField('lambd')
        .appendField(new Blockly.FieldTextInput('0'), 'lambd');
    this.appendDummyInput()
        .appendField('gamma')
        .appendField(new Blockly.FieldTextInput('0'), 'gamma');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_getGaborKernel');
  },
};
Blockly.Blocks['imgproc_getStructuringElement'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getStructuringElement');
    this.appendDummyInput()
        .appendField('shape')
        .appendField(new Blockly.FieldTextInput('0'), 'shape');
    this.appendValueInput('ksize')
        .appendField('ksize')
        .setCheck('size');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_getStructuringElement');
  },
};
Blockly.Blocks['imgproc_medianBlur'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('medianBlur');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('ksize')
        .appendField(new Blockly.FieldTextInput('0'), 'ksize');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_medianBlur');
  },
};
Blockly.Blocks['imgproc_GaussianBlur'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('GaussianBlur');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('ksize')
        .appendField('ksize')
        .setCheck('size');
    this.appendDummyInput()
        .appendField('sigmaX')
        .appendField(new Blockly.FieldTextInput('0'), 'sigmaX');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_GaussianBlur');
  },
};
Blockly.Blocks['imgproc_bilateralFilter'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('bilateralFilter');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('d')
        .appendField(new Blockly.FieldTextInput('0'), 'd');
    this.appendDummyInput()
        .appendField('sigmaColor')
        .appendField(new Blockly.FieldTextInput('0'), 'sigmaColor');
    this.appendDummyInput()
        .appendField('sigmaSpace')
        .appendField(new Blockly.FieldTextInput('0'), 'sigmaSpace');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_bilateralFilter');
  },
};
Blockly.Blocks['imgproc_boxFilter'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('boxFilter');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('ddepth')
        .appendField(new Blockly.FieldTextInput('0'), 'ddepth');
    this.appendValueInput('ksize')
        .appendField('ksize')
        .setCheck('size');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_boxFilter');
  },
};
Blockly.Blocks['imgproc_sqrBoxFilter'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('sqrBoxFilter');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('ddepth')
        .appendField(new Blockly.FieldTextInput('0'), 'ddepth');
    this.appendValueInput('ksize')
        .appendField('ksize')
        .setCheck('size');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_sqrBoxFilter');
  },
};
Blockly.Blocks['imgproc_blur'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('blur');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('ksize')
        .appendField('ksize')
        .setCheck('size');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_blur');
  },
};
Blockly.Blocks['imgproc_filter2D'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('filter2D');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('ddepth')
        .appendField(new Blockly.FieldTextInput('0'), 'ddepth');
    this.appendValueInput('kernel')
        .appendField('kernel')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_filter2D');
  },
};
Blockly.Blocks['imgproc_sepFilter2D'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('sepFilter2D');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('ddepth')
        .appendField(new Blockly.FieldTextInput('0'), 'ddepth');
    this.appendValueInput('kernelX')
        .appendField('kernelX')
        .setCheck('image');
    this.appendValueInput('kernelY')
        .appendField('kernelY')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_sepFilter2D');
  },
};
Blockly.Blocks['imgproc_Sobel'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('Sobel');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('ddepth')
        .appendField(new Blockly.FieldTextInput('0'), 'ddepth');
    this.appendDummyInput()
        .appendField('dx')
        .appendField(new Blockly.FieldTextInput('0'), 'dx');
    this.appendDummyInput()
        .appendField('dy')
        .appendField(new Blockly.FieldTextInput('0'), 'dy');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_Sobel');
  },
};
Blockly.Blocks['imgproc_spatialGradient'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('spatialGradient');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_spatialGradient');
  },
};
Blockly.Blocks['imgproc_Scharr'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('Scharr');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('ddepth')
        .appendField(new Blockly.FieldTextInput('0'), 'ddepth');
    this.appendDummyInput()
        .appendField('dx')
        .appendField(new Blockly.FieldTextInput('0'), 'dx');
    this.appendDummyInput()
        .appendField('dy')
        .appendField(new Blockly.FieldTextInput('0'), 'dy');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_Scharr');
  },
};
Blockly.Blocks['imgproc_Laplacian'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('Laplacian');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('ddepth')
        .appendField(new Blockly.FieldTextInput('0'), 'ddepth');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_Laplacian');
  },
};
Blockly.Blocks['imgproc_Canny'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('Canny');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('threshold1')
        .appendField(new Blockly.FieldTextInput('0'), 'threshold1');
    this.appendDummyInput()
        .appendField('threshold2')
        .appendField(new Blockly.FieldTextInput('0'), 'threshold2');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_Canny');
  },
};
Blockly.Blocks['imgproc_cornerMinEigenVal'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('cornerMinEigenVal');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('blockSize')
        .appendField(new Blockly.FieldTextInput('0'), 'blockSize');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_cornerMinEigenVal');
  },
};
Blockly.Blocks['imgproc_cornerHarris'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('cornerHarris');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('blockSize')
        .appendField(new Blockly.FieldTextInput('0'), 'blockSize');
    this.appendDummyInput()
        .appendField('ksize')
        .appendField(new Blockly.FieldTextInput('0'), 'ksize');
    this.appendDummyInput()
        .appendField('k')
        .appendField(new Blockly.FieldTextInput('0'), 'k');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_cornerHarris');
  },
};
Blockly.Blocks['imgproc_cornerEigenValsAndVecs'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('cornerEigenValsAndVecs');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('blockSize')
        .appendField(new Blockly.FieldTextInput('0'), 'blockSize');
    this.appendDummyInput()
        .appendField('ksize')
        .appendField(new Blockly.FieldTextInput('0'), 'ksize');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_cornerEigenValsAndVecs');
  },
};
Blockly.Blocks['imgproc_preCornerDetect'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('preCornerDetect');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('ksize')
        .appendField(new Blockly.FieldTextInput('0'), 'ksize');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_preCornerDetect');
  },
};
Blockly.Blocks['imgproc_cornerSubPix'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('cornerSubPix');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendValueInput('corners')
        .appendField('corners')
        .setCheck('image');
    this.appendValueInput('winSize')
        .appendField('winSize')
        .setCheck('size');
    this.appendValueInput('zeroZone')
        .appendField('zeroZone')
        .setCheck('size');
    this.appendValueInput('criteria')
        .appendField('criteria');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_cornerSubPix');
  },
};
Blockly.Blocks['imgproc_goodFeaturesToTrack'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('goodFeaturesToTrack');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('maxCorners')
        .appendField(new Blockly.FieldTextInput('0'), 'maxCorners');
    this.appendDummyInput()
        .appendField('qualityLevel')
        .appendField(new Blockly.FieldTextInput('0'), 'qualityLevel');
    this.appendDummyInput()
        .appendField('minDistance')
        .appendField(new Blockly.FieldTextInput('0'), 'minDistance');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_goodFeaturesToTrack');
  },
};
Blockly.Blocks['imgproc_HoughLines'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('HoughLines');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('rho')
        .appendField(new Blockly.FieldTextInput('0'), 'rho');
    this.appendDummyInput()
        .appendField('theta')
        .appendField(new Blockly.FieldTextInput('0'), 'theta');
    this.appendDummyInput()
        .appendField('threshold')
        .appendField(new Blockly.FieldTextInput('0'), 'threshold');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_HoughLines');
  },
};
Blockly.Blocks['imgproc_HoughLinesP'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('HoughLinesP');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('rho')
        .appendField(new Blockly.FieldTextInput('0'), 'rho');
    this.appendDummyInput()
        .appendField('theta')
        .appendField(new Blockly.FieldTextInput('0'), 'theta');
    this.appendDummyInput()
        .appendField('threshold')
        .appendField(new Blockly.FieldTextInput('0'), 'threshold');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_HoughLinesP');
  },
};
Blockly.Blocks['imgproc_HoughLinesPointSet'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('HoughLinesPointSet');
    this.appendValueInput('_point')
        .appendField('_point')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('lines_max')
        .appendField(new Blockly.FieldTextInput('0'), 'lines_max');
    this.appendDummyInput()
        .appendField('threshold')
        .appendField(new Blockly.FieldTextInput('0'), 'threshold');
    this.appendDummyInput()
        .appendField('min_rho')
        .appendField(new Blockly.FieldTextInput('0'), 'min_rho');
    this.appendDummyInput()
        .appendField('max_rho')
        .appendField(new Blockly.FieldTextInput('0'), 'max_rho');
    this.appendDummyInput()
        .appendField('rho_step')
        .appendField(new Blockly.FieldTextInput('0'), 'rho_step');
    this.appendDummyInput()
        .appendField('min_theta')
        .appendField(new Blockly.FieldTextInput('0'), 'min_theta');
    this.appendDummyInput()
        .appendField('max_theta')
        .appendField(new Blockly.FieldTextInput('0'), 'max_theta');
    this.appendDummyInput()
        .appendField('theta_step')
        .appendField(new Blockly.FieldTextInput('0'), 'theta_step');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_HoughLinesPointSet');
  },
};
Blockly.Blocks['imgproc_HoughCircles'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('HoughCircles');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('method')
        .appendField(new Blockly.FieldTextInput('0'), 'method');
    this.appendDummyInput()
        .appendField('dp')
        .appendField(new Blockly.FieldTextInput('0'), 'dp');
    this.appendDummyInput()
        .appendField('minDist')
        .appendField(new Blockly.FieldTextInput('0'), 'minDist');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_HoughCircles');
  },
};
Blockly.Blocks['imgproc_erode'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('erode');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('kernel')
        .appendField('kernel')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_erode');
  },
};
Blockly.Blocks['imgproc_dilate'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('dilate');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('kernel')
        .appendField('kernel')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_dilate');
  },
};
Blockly.Blocks['imgproc_morphologyEx'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('morphologyEx');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('op')
        .appendField(new Blockly.FieldTextInput('0'), 'op');
    this.appendValueInput('kernel')
        .appendField('kernel')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_morphologyEx');
  },
};
Blockly.Blocks['imgproc_resize'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('resize');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('dsize')
        .appendField('dsize')
        .setCheck('size');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_resize');
  },
};
Blockly.Blocks['imgproc_warpAffine'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('warpAffine');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('M')
        .appendField('M')
        .setCheck('image');
    this.appendValueInput('dsize')
        .appendField('dsize')
        .setCheck('size');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_warpAffine');
  },
};
Blockly.Blocks['imgproc_warpPerspective'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('warpPerspective');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('M')
        .appendField('M')
        .setCheck('image');
    this.appendValueInput('dsize')
        .appendField('dsize')
        .setCheck('size');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_warpPerspective');
  },
};
Blockly.Blocks['imgproc_remap'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('remap');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('map1')
        .appendField('map1')
        .setCheck('image');
    this.appendValueInput('map2')
        .appendField('map2')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('interpolation')
        .appendField(new Blockly.FieldTextInput('0'), 'interpolation');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_remap');
  },
};
Blockly.Blocks['imgproc_convertMaps'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('convertMaps');
    this.appendValueInput('map1')
        .appendField('map1')
        .setCheck('image');
    this.appendValueInput('map2')
        .appendField('map2')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('dstmap1type')
        .appendField(new Blockly.FieldTextInput('0'), 'dstmap1type');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_convertMaps');
  },
};
Blockly.Blocks['imgproc_getRotationMatrix2D'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getRotationMatrix2D');
    this.appendValueInput('center')
        .appendField('center');
    this.appendDummyInput()
        .appendField('angle')
        .appendField(new Blockly.FieldTextInput('0'), 'angle');
    this.appendDummyInput()
        .appendField('scale')
        .appendField(new Blockly.FieldTextInput('0'), 'scale');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_getRotationMatrix2D');
  },
};
Blockly.Blocks['imgproc_invertAffineTransform'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('invertAffineTransform');
    this.appendValueInput('M')
        .appendField('M')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_invertAffineTransform');
  },
};
Blockly.Blocks['imgproc_getPerspectiveTransform'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getPerspectiveTransform');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('dst')
        .appendField('dst')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_getPerspectiveTransform');
  },
};
Blockly.Blocks['imgproc_getAffineTransform'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getAffineTransform');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('dst')
        .appendField('dst')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_getAffineTransform');
  },
};
Blockly.Blocks['imgproc_getRectSubPix'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getRectSubPix');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendValueInput('patchSize')
        .appendField('patchSize')
        .setCheck('size');
    this.appendValueInput('center')
        .appendField('center');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_getRectSubPix');
  },
};
Blockly.Blocks['imgproc_logPolar'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('logPolar');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('center')
        .appendField('center');
    this.appendDummyInput()
        .appendField('M')
        .appendField(new Blockly.FieldTextInput('0'), 'M');
    this.appendDummyInput()
        .appendField('flags')
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_logPolar');
  },
};
Blockly.Blocks['imgproc_linearPolar'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('linearPolar');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('center')
        .appendField('center');
    this.appendDummyInput()
        .appendField('maxRadius')
        .appendField(new Blockly.FieldTextInput('0'), 'maxRadius');
    this.appendDummyInput()
        .appendField('flags')
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_linearPolar');
  },
};
Blockly.Blocks['imgproc_warpPolar'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('warpPolar');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('dsize')
        .appendField('dsize')
        .setCheck('size');
    this.appendValueInput('center')
        .appendField('center');
    this.appendDummyInput()
        .appendField('maxRadius')
        .appendField(new Blockly.FieldTextInput('0'), 'maxRadius');
    this.appendDummyInput()
        .appendField('flags')
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_warpPolar');
  },
};
Blockly.Blocks['imgproc_integral'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('integral');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_integral');
  },
};
Blockly.Blocks['imgproc_accumulate'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('accumulate');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('dst')
        .appendField('dst')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_accumulate');
  },
};
Blockly.Blocks['imgproc_accumulateSquare'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('accumulateSquare');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('dst')
        .appendField('dst')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_accumulateSquare');
  },
};
Blockly.Blocks['imgproc_accumulateProduct'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('accumulateProduct');
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.appendValueInput('dst')
        .appendField('dst')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_accumulateProduct');
  },
};
Blockly.Blocks['imgproc_accumulateWeighted'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('accumulateWeighted');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('dst')
        .appendField('dst')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('alpha')
        .appendField(new Blockly.FieldTextInput('0'), 'alpha');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_accumulateWeighted');
  },
};
Blockly.Blocks['imgproc_createHanningWindow'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('createHanningWindow');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('HanningWindow'), 'HanningWindow');
    this.appendValueInput('winSize')
        .appendField('winSize')
        .setCheck('size');
    this.appendDummyInput()
        .appendField('type')
        .appendField(new Blockly.FieldTextInput('0'), 'type');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_createHanningWindow');
  },
  getVars: function(){return [this.getFieldValue('HanningWindow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('HanningWindow'))){this.setFieldValue(newName,'HanningWindow');}},
};
Blockly.Blocks['imgproc_threshold'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('threshold');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('thresh')
        .appendField(new Blockly.FieldTextInput('0'), 'thresh');
    this.appendDummyInput()
        .appendField('maxval')
        .appendField(new Blockly.FieldTextInput('0'), 'maxval');
    this.appendDummyInput()
        .appendField('type')
        .appendField(new Blockly.FieldTextInput('0'), 'type');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_threshold');
  },
};
Blockly.Blocks['imgproc_adaptiveThreshold'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('adaptiveThreshold');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('maxValue')
        .appendField(new Blockly.FieldTextInput('0'), 'maxValue');
    this.appendDummyInput()
        .appendField('adaptiveMethod')
        .appendField(new Blockly.FieldTextInput('0'), 'adaptiveMethod');
    this.appendDummyInput()
        .appendField('thresholdType')
        .appendField(new Blockly.FieldTextInput('0'), 'thresholdType');
    this.appendDummyInput()
        .appendField('blockSize')
        .appendField(new Blockly.FieldTextInput('0'), 'blockSize');
    this.appendDummyInput()
        .appendField('C')
        .appendField(new Blockly.FieldTextInput('0'), 'C');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_adaptiveThreshold');
  },
};
Blockly.Blocks['imgproc_pyrDown'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('pyrDown');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_pyrDown');
  },
};
Blockly.Blocks['imgproc_pyrUp'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('pyrUp');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_pyrUp');
  },
};
Blockly.Blocks['imgproc_calcHist'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('calcHist');
    this.appendValueInput('images')
        .appendField('images');
    this.appendValueInput('channels')
        .appendField('channels');
    this.appendValueInput('mask')
        .appendField('mask')
        .setCheck('image');
    this.appendValueInput('histSize')
        .appendField('histSize');
    this.appendValueInput('ranges')
        .appendField('ranges');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_calcHist');
  },
};
Blockly.Blocks['imgproc_calcBackProject'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('calcBackProject');
    this.appendValueInput('images')
        .appendField('images');
    this.appendValueInput('channels')
        .appendField('channels');
    this.appendValueInput('hist')
        .appendField('hist')
        .setCheck('image');
    this.appendValueInput('ranges')
        .appendField('ranges');
    this.appendDummyInput()
        .appendField('scale')
        .appendField(new Blockly.FieldTextInput('0'), 'scale');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_calcBackProject');
  },
};
Blockly.Blocks['imgproc_compareHist'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('compareHist');
    this.appendValueInput('H1')
        .appendField('H1')
        .setCheck('image');
    this.appendValueInput('H2')
        .appendField('H2')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('method')
        .appendField(new Blockly.FieldTextInput('0'), 'method');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_compareHist');
  },
};
Blockly.Blocks['imgproc_equalizeHist'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('equalizeHist');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_equalizeHist');
  },
};
Blockly.Blocks['imgproc_createCLAHE'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('createCLAHE');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CLAHE'), 'CLAHE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_createCLAHE');
  },
  getVars: function(){return [this.getFieldValue('CLAHE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CLAHE'))){this.setFieldValue(newName,'CLAHE');}},
};
Blockly.Blocks['imgproc_wrapperEMD'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('wrapperEMD');
    this.appendValueInput('signature1')
        .appendField('signature1')
        .setCheck('image');
    this.appendValueInput('signature2')
        .appendField('signature2')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('distType')
        .appendField(new Blockly.FieldTextInput('0'), 'distType');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_wrapperEMD');
  },
};
Blockly.Blocks['imgproc_watershed'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('watershed');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendValueInput('markers')
        .appendField('markers')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_watershed');
  },
};
Blockly.Blocks['imgproc_pyrMeanShiftFiltering'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('pyrMeanShiftFiltering');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('sp')
        .appendField(new Blockly.FieldTextInput('0'), 'sp');
    this.appendDummyInput()
        .appendField('sr')
        .appendField(new Blockly.FieldTextInput('0'), 'sr');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_pyrMeanShiftFiltering');
  },
};
Blockly.Blocks['imgproc_grabCut'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('grabCut');
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.appendValueInput('mask')
        .appendField('mask')
        .setCheck('image');
    this.appendValueInput('rect')
        .appendField('rect');
    this.appendValueInput('bgdModel')
        .appendField('bgdModel')
        .setCheck('image');
    this.appendValueInput('fgdModel')
        .appendField('fgdModel')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('iterCount')
        .appendField(new Blockly.FieldTextInput('0'), 'iterCount');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_grabCut');
  },
};
Blockly.Blocks['imgproc_distanceTransform'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('distanceTransform');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('distanceType')
        .appendField(new Blockly.FieldTextInput('0'), 'distanceType');
    this.appendDummyInput()
        .appendField('maskSize')
        .appendField(new Blockly.FieldTextInput('0'), 'maskSize');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_distanceTransform');
  },
};
Blockly.Blocks['imgproc_cvtColor'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('cvtColor');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('code')
        .appendField(new Blockly.FieldTextInput('0'), 'code');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_cvtColor');
  },
};
Blockly.Blocks['imgproc_cvtColorTwoPlane'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('cvtColorTwoPlane');
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('code')
        .appendField(new Blockly.FieldTextInput('0'), 'code');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_cvtColorTwoPlane');
  },
};
Blockly.Blocks['imgproc_demosaicing'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('demosaicing');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('code')
        .appendField(new Blockly.FieldTextInput('0'), 'code');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_demosaicing');
  },
};
Blockly.Blocks['imgproc_matchTemplate'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('matchTemplate');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendValueInput('templ')
        .appendField('templ')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('method')
        .appendField(new Blockly.FieldTextInput('0'), 'method');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_matchTemplate');
  },
};
Blockly.Blocks['imgproc_connectedComponents'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('connectedComponents');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('connectivity')
        .appendField(new Blockly.FieldTextInput('0'), 'connectivity');
    this.appendDummyInput()
        .appendField('ltype')
        .appendField(new Blockly.FieldTextInput('0'), 'ltype');
    this.appendDummyInput()
        .appendField('ccltype')
        .appendField(new Blockly.FieldTextInput('0'), 'ccltype');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_connectedComponents');
  },
};
Blockly.Blocks['imgproc_connectedComponentsWithStats'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('connectedComponentsWithStats');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('connectivity')
        .appendField(new Blockly.FieldTextInput('0'), 'connectivity');
    this.appendDummyInput()
        .appendField('ltype')
        .appendField(new Blockly.FieldTextInput('0'), 'ltype');
    this.appendDummyInput()
        .appendField('ccltype')
        .appendField(new Blockly.FieldTextInput('0'), 'ccltype');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_connectedComponentsWithStats');
  },
};
Blockly.Blocks['imgproc_findContours'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('findContours');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('mode')
        .appendField(new Blockly.FieldTextInput('0'), 'mode');
    this.appendDummyInput()
        .appendField('method')
        .appendField(new Blockly.FieldTextInput('0'), 'method');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_findContours');
  },
};
Blockly.Blocks['imgproc_approxPolyDP'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('approxPolyDP');
    this.appendValueInput('curve')
        .appendField('curve')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('epsilon')
        .appendField(new Blockly.FieldTextInput('0'), 'epsilon');
    this.appendValueInput('closed')
        .appendField('closed');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_approxPolyDP');
  },
};
Blockly.Blocks['imgproc_arcLength'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('arcLength');
    this.appendValueInput('curve')
        .appendField('curve')
        .setCheck('image');
    this.appendValueInput('closed')
        .appendField('closed');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_arcLength');
  },
};
Blockly.Blocks['imgproc_boundingRect'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('boundingRect');
    this.appendValueInput('array')
        .appendField('array')
        .setCheck('image');
    this.setOutput(true);
    this.setTooltip('imgproc_boundingRect');
  },
};
Blockly.Blocks['imgproc_contourArea'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('contourArea');
    this.appendValueInput('contour')
        .appendField('contour')
        .setCheck('image');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_contourArea');
  },
};
Blockly.Blocks['imgproc_boxPoints'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('boxPoints');
    this.appendValueInput('box')
        .appendField('box');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_boxPoints');
  },
};
Blockly.Blocks['imgproc_minEnclosingTriangle'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('minEnclosingTriangle');
    this.appendValueInput('points')
        .appendField('points')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_minEnclosingTriangle');
  },
};
Blockly.Blocks['imgproc_matchShapes'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('matchShapes');
    this.appendValueInput('contour1')
        .appendField('contour1')
        .setCheck('image');
    this.appendValueInput('contour2')
        .appendField('contour2')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('method')
        .appendField(new Blockly.FieldTextInput('0'), 'method');
    this.appendDummyInput()
        .appendField('parameter')
        .appendField(new Blockly.FieldTextInput('0'), 'parameter');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_matchShapes');
  },
};
Blockly.Blocks['imgproc_convexHull'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('convexHull');
    this.appendValueInput('points')
        .appendField('points')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_convexHull');
  },
};
Blockly.Blocks['imgproc_convexityDefects'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('convexityDefects');
    this.appendValueInput('contour')
        .appendField('contour')
        .setCheck('image');
    this.appendValueInput('convexhull')
        .appendField('convexhull')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_convexityDefects');
  },
};
Blockly.Blocks['imgproc_isContourConvex'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('isContourConvex');
    this.appendValueInput('contour')
        .appendField('contour')
        .setCheck('image');
    this.setOutput(true);
    this.setTooltip('imgproc_isContourConvex');
  },
};
Blockly.Blocks['imgproc_intersectConvexConvex'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('intersectConvexConvex');
    this.appendValueInput('_p1')
        .appendField('_p1')
        .setCheck('image');
    this.appendValueInput('_p2')
        .appendField('_p2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_intersectConvexConvex');
  },
};
Blockly.Blocks['imgproc_fitEllipseAMS'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('fitEllipseAMS');
    this.appendValueInput('points')
        .appendField('points')
        .setCheck('image');
    this.setOutput(true);
    this.setTooltip('imgproc_fitEllipseAMS');
  },
};
Blockly.Blocks['imgproc_fitEllipseDirect'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('fitEllipseDirect');
    this.appendValueInput('points')
        .appendField('points')
        .setCheck('image');
    this.setOutput(true);
    this.setTooltip('imgproc_fitEllipseDirect');
  },
};
Blockly.Blocks['imgproc_fitLine'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('fitLine');
    this.appendValueInput('points')
        .appendField('points')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('distType')
        .appendField(new Blockly.FieldTextInput('0'), 'distType');
    this.appendDummyInput()
        .appendField('param')
        .appendField(new Blockly.FieldTextInput('0'), 'param');
    this.appendDummyInput()
        .appendField('reps')
        .appendField(new Blockly.FieldTextInput('0'), 'reps');
    this.appendDummyInput()
        .appendField('aeps')
        .appendField(new Blockly.FieldTextInput('0'), 'aeps');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_fitLine');
  },
};
Blockly.Blocks['imgproc_pointPolygonTest'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('pointPolygonTest');
    this.appendValueInput('contour')
        .appendField('contour')
        .setCheck('image');
    this.appendValueInput('pt')
        .appendField('pt');
    this.appendValueInput('measureDist')
        .appendField('measureDist');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_pointPolygonTest');
  },
};
Blockly.Blocks['imgproc_rotatedRectangleIntersection'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('rotatedRectangleIntersection');
    this.appendValueInput('rect1')
        .appendField('rect1');
    this.appendValueInput('rect2')
        .appendField('rect2');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_rotatedRectangleIntersection');
  },
};
Blockly.Blocks['imgproc_createGeneralizedHoughBallard'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('createGeneralizedHoughBallard');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughBallard'), 'GeneralizedHoughBallard');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_createGeneralizedHoughBallard');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughBallard')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughBallard'))){this.setFieldValue(newName,'GeneralizedHoughBallard');}},
};
Blockly.Blocks['imgproc_createGeneralizedHoughGuil'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('createGeneralizedHoughGuil');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughGuil'), 'GeneralizedHoughGuil');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_createGeneralizedHoughGuil');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughGuil')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughGuil'))){this.setFieldValue(newName,'GeneralizedHoughGuil');}},
};
Blockly.Blocks['imgproc_applyColorMap'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('applyColorMap');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('colormap')
        .appendField(new Blockly.FieldTextInput('0'), 'colormap');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_applyColorMap');
  },
};
Blockly.Blocks['imgproc_line'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('line');
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.appendValueInput('pt1')
        .appendField('pt1')
        .setCheck('point');
    this.appendValueInput('pt2')
        .appendField('pt2')
        .setCheck('point');
    this.appendValueInput('color')
        .appendField('color')
        .setCheck('Colour');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_line');
  },
};
Blockly.Blocks['imgproc_arrowedLine'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('arrowedLine');
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.appendValueInput('pt1')
        .appendField('pt1')
        .setCheck('point');
    this.appendValueInput('pt2')
        .appendField('pt2')
        .setCheck('point');
    this.appendValueInput('color')
        .appendField('color')
        .setCheck('Colour');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_arrowedLine');
  },
};
Blockly.Blocks['imgproc_rectangle'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('rectangle');
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.appendValueInput('pt1')
        .appendField('pt1')
        .setCheck('point');
    this.appendValueInput('pt2')
        .appendField('pt2')
        .setCheck('point');
    this.appendValueInput('color')
        .appendField('color')
        .setCheck('Colour');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_rectangle');
  },
};
Blockly.Blocks['imgproc_circle'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('circle');
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.appendValueInput('center')
        .appendField('center')
        .setCheck('point');
    this.appendDummyInput()
        .appendField('radius')
        .appendField(new Blockly.FieldTextInput('0'), 'radius');
    this.appendValueInput('color')
        .appendField('color');
        //.setCheck('Colour');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_circle');
  },
};
Blockly.Blocks['imgproc_ellipse'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('ellipse');
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.appendValueInput('center')
        .appendField('center')
        .setCheck('point');
    this.appendValueInput('axes')
        .appendField('axes')
        .setCheck('size');
    this.appendDummyInput()
        .appendField('angle')
        .appendField(new Blockly.FieldTextInput('0'), 'angle');
    this.appendDummyInput()
        .appendField('startAngle')
        .appendField(new Blockly.FieldTextInput('0'), 'startAngle');
    this.appendDummyInput()
        .appendField('endAngle')
        .appendField(new Blockly.FieldTextInput('0'), 'endAngle');
    this.appendValueInput('color')
        .appendField('color')
        .setCheck('Colour');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_ellipse');
  },
};
Blockly.Blocks['imgproc_drawMarker'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('drawMarker');
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.appendValueInput('position')
        .appendField('position')
        .setCheck('point');
    this.appendValueInput('color')
        .appendField('color')
        .setCheck('Colour');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_drawMarker');
  },
};
Blockly.Blocks['imgproc_fillConvexPoly'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('fillConvexPoly');
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.appendValueInput('points')
        .appendField('points')
        .setCheck('image');
    this.appendValueInput('color')
        .appendField('color')
        .setCheck('Colour');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_fillConvexPoly');
  },
};
Blockly.Blocks['imgproc_fillPoly'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('fillPoly');
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.appendValueInput('pts')
        .appendField('pts');
    this.appendValueInput('color')
        .appendField('color')
        .setCheck('Colour');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_fillPoly');
  },
};
Blockly.Blocks['imgproc_polylines'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('polylines');
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.appendValueInput('pts')
        .appendField('pts');
    this.appendValueInput('isClosed')
        .appendField('isClosed');
    this.appendValueInput('color')
        .appendField('color')
        .setCheck('Colour');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_polylines');
  },
};
Blockly.Blocks['imgproc_drawContours'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('drawContours');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendValueInput('contours')
        .appendField('contours');
    this.appendDummyInput()
        .appendField('contourIdx')
        .appendField(new Blockly.FieldTextInput('0'), 'contourIdx');
    this.appendValueInput('color')
        .appendField('color')
        .setCheck('Colour');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_drawContours');
  },
};
Blockly.Blocks['imgproc_clipLine'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('clipLine');
    this.appendValueInput('imgRect')
        .appendField('imgRect');
    this.appendValueInput('pt1')
        .appendField('pt1')
        .setCheck('point');
    this.appendValueInput('pt2')
        .appendField('pt2')
        .setCheck('point');
    this.setOutput(true,'point');
    this.setTooltip('imgproc_clipLine');
  },
};
Blockly.Blocks['imgproc_ellipse2Poly'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('ellipse2Poly');
    this.appendValueInput('center')
        .appendField('center')
        .setCheck('point');
    this.appendValueInput('axes')
        .appendField('axes')
        .setCheck('size');
    this.appendDummyInput()
        .appendField('angle')
        .appendField(new Blockly.FieldTextInput('0'), 'angle');
    this.appendDummyInput()
        .appendField('arcStart')
        .appendField(new Blockly.FieldTextInput('0'), 'arcStart');
    this.appendDummyInput()
        .appendField('arcEnd')
        .appendField(new Blockly.FieldTextInput('0'), 'arcEnd');
    this.appendDummyInput()
        .appendField('delta')
        .appendField(new Blockly.FieldTextInput('0'), 'delta');
    this.setOutput(true);
    this.setTooltip('imgproc_ellipse2Poly');
  },
};
Blockly.Blocks['imgproc_putText'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('putText');
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.appendValueInput('text')
        .appendField('text')
        .setCheck('String');
    this.appendValueInput('org')
        .appendField('org')
        .setCheck('point');
    this.appendDummyInput()
        .appendField('fontFace')
        .appendField(new Blockly.FieldTextInput('0'), 'fontFace');
    this.appendDummyInput()
        .appendField('fontScale')
        .appendField(new Blockly.FieldTextInput('0'), 'fontScale');
    this.appendValueInput('color')
        .appendField('color')
        .setCheck('Colour');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_putText');
  },
};
Blockly.Blocks['imgproc_getFontScaleFromHeight'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getFontScaleFromHeight');
    this.appendDummyInput()
        .appendField('fontFace')
        .appendField(new Blockly.FieldTextInput('0'), 'fontFace');
    this.appendDummyInput()
        .appendField('pixelHeight')
        .appendField(new Blockly.FieldTextInput('0'), 'pixelHeight');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_getFontScaleFromHeight');
  },
};
Blockly.Blocks['imgproc_CLAHE_apply'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('apply');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CLAHE'), 'CLAHE');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_CLAHE_apply');
  },
  getVars: function(){return [this.getFieldValue('CLAHE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CLAHE'))){this.setFieldValue(newName,'CLAHE');}},
};
Blockly.Blocks['imgproc_CLAHE_setClipLimit'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('setClipLimit');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CLAHE'), 'CLAHE');
    this.appendDummyInput()
        .appendField('clipLimit')
        .appendField(new Blockly.FieldTextInput('0'), 'clipLimit');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_CLAHE_setClipLimit');
  },
  getVars: function(){return [this.getFieldValue('CLAHE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CLAHE'))){this.setFieldValue(newName,'CLAHE');}},
};
Blockly.Blocks['imgproc_CLAHE_getClipLimit'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getClipLimit');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CLAHE'), 'CLAHE');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_CLAHE_getClipLimit');
  },
  getVars: function(){return [this.getFieldValue('CLAHE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CLAHE'))){this.setFieldValue(newName,'CLAHE');}},
};
Blockly.Blocks['imgproc_CLAHE_setTilesGridSize'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('setTilesGridSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CLAHE'), 'CLAHE');
    this.appendValueInput('tileGridSize')
        .appendField('tileGridSize')
        .setCheck('size');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_CLAHE_setTilesGridSize');
  },
  getVars: function(){return [this.getFieldValue('CLAHE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CLAHE'))){this.setFieldValue(newName,'CLAHE');}},
};
Blockly.Blocks['imgproc_CLAHE_getTilesGridSize'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getTilesGridSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CLAHE'), 'CLAHE');
    this.setOutput(true,'size');
    this.setTooltip('imgproc_CLAHE_getTilesGridSize');
  },
  getVars: function(){return [this.getFieldValue('CLAHE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CLAHE'))){this.setFieldValue(newName,'CLAHE');}},
};
Blockly.Blocks['imgproc_CLAHE_collectGarbage'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('collectGarbage');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CLAHE'), 'CLAHE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_CLAHE_collectGarbage');
  },
  getVars: function(){return [this.getFieldValue('CLAHE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CLAHE'))){this.setFieldValue(newName,'CLAHE');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughBallard_setLevels'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('setLevels');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughBallard'), 'GeneralizedHoughBallard');
    this.appendDummyInput()
        .appendField('levels')
        .appendField(new Blockly.FieldTextInput('0'), 'levels');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_GeneralizedHoughBallard_setLevels');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughBallard')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughBallard'))){this.setFieldValue(newName,'GeneralizedHoughBallard');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughBallard_getLevels'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getLevels');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughBallard'), 'GeneralizedHoughBallard');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_GeneralizedHoughBallard_getLevels');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughBallard')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughBallard'))){this.setFieldValue(newName,'GeneralizedHoughBallard');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughBallard_setVotesThreshold'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('setVotesThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughBallard'), 'GeneralizedHoughBallard');
    this.appendDummyInput()
        .appendField('votesThreshold')
        .appendField(new Blockly.FieldTextInput('0'), 'votesThreshold');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_GeneralizedHoughBallard_setVotesThreshold');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughBallard')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughBallard'))){this.setFieldValue(newName,'GeneralizedHoughBallard');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughBallard_getVotesThreshold'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getVotesThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughBallard'), 'GeneralizedHoughBallard');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_GeneralizedHoughBallard_getVotesThreshold');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughBallard')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughBallard'))){this.setFieldValue(newName,'GeneralizedHoughBallard');}},
};
Blockly.Blocks['imgproc_GeneralizedHough_setTemplate'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('setTemplate');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHough'), 'GeneralizedHough');
    this.appendValueInput('templ')
        .appendField('templ')
        .setCheck('image');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_GeneralizedHough_setTemplate');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHough')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHough'))){this.setFieldValue(newName,'GeneralizedHough');}},
};
Blockly.Blocks['imgproc_GeneralizedHough_detect'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('detect');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHough'), 'GeneralizedHough');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_GeneralizedHough_detect');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHough')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHough'))){this.setFieldValue(newName,'GeneralizedHough');}},
};
Blockly.Blocks['imgproc_GeneralizedHough_setCannyLowThresh'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('setCannyLowThresh');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHough'), 'GeneralizedHough');
    this.appendDummyInput()
        .appendField('cannyLowThresh')
        .appendField(new Blockly.FieldTextInput('0'), 'cannyLowThresh');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_GeneralizedHough_setCannyLowThresh');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHough')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHough'))){this.setFieldValue(newName,'GeneralizedHough');}},
};
Blockly.Blocks['imgproc_GeneralizedHough_getCannyLowThresh'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getCannyLowThresh');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHough'), 'GeneralizedHough');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_GeneralizedHough_getCannyLowThresh');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHough')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHough'))){this.setFieldValue(newName,'GeneralizedHough');}},
};
Blockly.Blocks['imgproc_GeneralizedHough_setCannyHighThresh'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('setCannyHighThresh');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHough'), 'GeneralizedHough');
    this.appendDummyInput()
        .appendField('cannyHighThresh')
        .appendField(new Blockly.FieldTextInput('0'), 'cannyHighThresh');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_GeneralizedHough_setCannyHighThresh');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHough')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHough'))){this.setFieldValue(newName,'GeneralizedHough');}},
};
Blockly.Blocks['imgproc_GeneralizedHough_getCannyHighThresh'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getCannyHighThresh');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHough'), 'GeneralizedHough');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_GeneralizedHough_getCannyHighThresh');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHough')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHough'))){this.setFieldValue(newName,'GeneralizedHough');}},
};
Blockly.Blocks['imgproc_GeneralizedHough_setMinDist'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('setMinDist');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHough'), 'GeneralizedHough');
    this.appendDummyInput()
        .appendField('minDist')
        .appendField(new Blockly.FieldTextInput('0'), 'minDist');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_GeneralizedHough_setMinDist');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHough')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHough'))){this.setFieldValue(newName,'GeneralizedHough');}},
};
Blockly.Blocks['imgproc_GeneralizedHough_getMinDist'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getMinDist');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHough'), 'GeneralizedHough');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_GeneralizedHough_getMinDist');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHough')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHough'))){this.setFieldValue(newName,'GeneralizedHough');}},
};
Blockly.Blocks['imgproc_GeneralizedHough_setDp'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('setDp');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHough'), 'GeneralizedHough');
    this.appendDummyInput()
        .appendField('dp')
        .appendField(new Blockly.FieldTextInput('0'), 'dp');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_GeneralizedHough_setDp');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHough')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHough'))){this.setFieldValue(newName,'GeneralizedHough');}},
};
Blockly.Blocks['imgproc_GeneralizedHough_getDp'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getDp');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHough'), 'GeneralizedHough');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_GeneralizedHough_getDp');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHough')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHough'))){this.setFieldValue(newName,'GeneralizedHough');}},
};
Blockly.Blocks['imgproc_GeneralizedHough_setMaxBufferSize'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('setMaxBufferSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHough'), 'GeneralizedHough');
    this.appendDummyInput()
        .appendField('maxBufferSize')
        .appendField(new Blockly.FieldTextInput('0'), 'maxBufferSize');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_GeneralizedHough_setMaxBufferSize');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHough')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHough'))){this.setFieldValue(newName,'GeneralizedHough');}},
};
Blockly.Blocks['imgproc_GeneralizedHough_getMaxBufferSize'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getMaxBufferSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHough'), 'GeneralizedHough');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_GeneralizedHough_getMaxBufferSize');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHough')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHough'))){this.setFieldValue(newName,'GeneralizedHough');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughGuil_setXi'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('setXi');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughGuil'), 'GeneralizedHoughGuil');
    this.appendDummyInput()
        .appendField('xi')
        .appendField(new Blockly.FieldTextInput('0'), 'xi');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_GeneralizedHoughGuil_setXi');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughGuil')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughGuil'))){this.setFieldValue(newName,'GeneralizedHoughGuil');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughGuil_getXi'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getXi');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughGuil'), 'GeneralizedHoughGuil');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_GeneralizedHoughGuil_getXi');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughGuil')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughGuil'))){this.setFieldValue(newName,'GeneralizedHoughGuil');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughGuil_setLevels'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('setLevels');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughGuil'), 'GeneralizedHoughGuil');
    this.appendDummyInput()
        .appendField('levels')
        .appendField(new Blockly.FieldTextInput('0'), 'levels');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_GeneralizedHoughGuil_setLevels');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughGuil')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughGuil'))){this.setFieldValue(newName,'GeneralizedHoughGuil');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughGuil_getLevels'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getLevels');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughGuil'), 'GeneralizedHoughGuil');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_GeneralizedHoughGuil_getLevels');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughGuil')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughGuil'))){this.setFieldValue(newName,'GeneralizedHoughGuil');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughGuil_setAngleEpsilon'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('setAngleEpsilon');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughGuil'), 'GeneralizedHoughGuil');
    this.appendDummyInput()
        .appendField('angleEpsilon')
        .appendField(new Blockly.FieldTextInput('0'), 'angleEpsilon');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_GeneralizedHoughGuil_setAngleEpsilon');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughGuil')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughGuil'))){this.setFieldValue(newName,'GeneralizedHoughGuil');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughGuil_getAngleEpsilon'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getAngleEpsilon');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughGuil'), 'GeneralizedHoughGuil');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_GeneralizedHoughGuil_getAngleEpsilon');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughGuil')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughGuil'))){this.setFieldValue(newName,'GeneralizedHoughGuil');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughGuil_setMinAngle'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('setMinAngle');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughGuil'), 'GeneralizedHoughGuil');
    this.appendDummyInput()
        .appendField('minAngle')
        .appendField(new Blockly.FieldTextInput('0'), 'minAngle');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_GeneralizedHoughGuil_setMinAngle');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughGuil')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughGuil'))){this.setFieldValue(newName,'GeneralizedHoughGuil');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughGuil_getMinAngle'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getMinAngle');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughGuil'), 'GeneralizedHoughGuil');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_GeneralizedHoughGuil_getMinAngle');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughGuil')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughGuil'))){this.setFieldValue(newName,'GeneralizedHoughGuil');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughGuil_setMaxAngle'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('setMaxAngle');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughGuil'), 'GeneralizedHoughGuil');
    this.appendDummyInput()
        .appendField('maxAngle')
        .appendField(new Blockly.FieldTextInput('0'), 'maxAngle');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_GeneralizedHoughGuil_setMaxAngle');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughGuil')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughGuil'))){this.setFieldValue(newName,'GeneralizedHoughGuil');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughGuil_getMaxAngle'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getMaxAngle');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughGuil'), 'GeneralizedHoughGuil');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_GeneralizedHoughGuil_getMaxAngle');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughGuil')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughGuil'))){this.setFieldValue(newName,'GeneralizedHoughGuil');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughGuil_setAngleStep'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('setAngleStep');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughGuil'), 'GeneralizedHoughGuil');
    this.appendDummyInput()
        .appendField('angleStep')
        .appendField(new Blockly.FieldTextInput('0'), 'angleStep');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_GeneralizedHoughGuil_setAngleStep');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughGuil')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughGuil'))){this.setFieldValue(newName,'GeneralizedHoughGuil');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughGuil_getAngleStep'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getAngleStep');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughGuil'), 'GeneralizedHoughGuil');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_GeneralizedHoughGuil_getAngleStep');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughGuil')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughGuil'))){this.setFieldValue(newName,'GeneralizedHoughGuil');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughGuil_setAngleThresh'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('setAngleThresh');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughGuil'), 'GeneralizedHoughGuil');
    this.appendDummyInput()
        .appendField('angleThresh')
        .appendField(new Blockly.FieldTextInput('0'), 'angleThresh');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_GeneralizedHoughGuil_setAngleThresh');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughGuil')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughGuil'))){this.setFieldValue(newName,'GeneralizedHoughGuil');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughGuil_getAngleThresh'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getAngleThresh');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughGuil'), 'GeneralizedHoughGuil');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_GeneralizedHoughGuil_getAngleThresh');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughGuil')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughGuil'))){this.setFieldValue(newName,'GeneralizedHoughGuil');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughGuil_setMinScale'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('setMinScale');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughGuil'), 'GeneralizedHoughGuil');
    this.appendDummyInput()
        .appendField('minScale')
        .appendField(new Blockly.FieldTextInput('0'), 'minScale');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_GeneralizedHoughGuil_setMinScale');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughGuil')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughGuil'))){this.setFieldValue(newName,'GeneralizedHoughGuil');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughGuil_getMinScale'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getMinScale');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughGuil'), 'GeneralizedHoughGuil');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_GeneralizedHoughGuil_getMinScale');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughGuil')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughGuil'))){this.setFieldValue(newName,'GeneralizedHoughGuil');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughGuil_setMaxScale'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('setMaxScale');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughGuil'), 'GeneralizedHoughGuil');
    this.appendDummyInput()
        .appendField('maxScale')
        .appendField(new Blockly.FieldTextInput('0'), 'maxScale');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_GeneralizedHoughGuil_setMaxScale');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughGuil')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughGuil'))){this.setFieldValue(newName,'GeneralizedHoughGuil');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughGuil_getMaxScale'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getMaxScale');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughGuil'), 'GeneralizedHoughGuil');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_GeneralizedHoughGuil_getMaxScale');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughGuil')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughGuil'))){this.setFieldValue(newName,'GeneralizedHoughGuil');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughGuil_setScaleStep'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('setScaleStep');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughGuil'), 'GeneralizedHoughGuil');
    this.appendDummyInput()
        .appendField('scaleStep')
        .appendField(new Blockly.FieldTextInput('0'), 'scaleStep');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_GeneralizedHoughGuil_setScaleStep');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughGuil')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughGuil'))){this.setFieldValue(newName,'GeneralizedHoughGuil');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughGuil_getScaleStep'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getScaleStep');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughGuil'), 'GeneralizedHoughGuil');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_GeneralizedHoughGuil_getScaleStep');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughGuil')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughGuil'))){this.setFieldValue(newName,'GeneralizedHoughGuil');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughGuil_setScaleThresh'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('setScaleThresh');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughGuil'), 'GeneralizedHoughGuil');
    this.appendDummyInput()
        .appendField('scaleThresh')
        .appendField(new Blockly.FieldTextInput('0'), 'scaleThresh');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_GeneralizedHoughGuil_setScaleThresh');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughGuil')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughGuil'))){this.setFieldValue(newName,'GeneralizedHoughGuil');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughGuil_getScaleThresh'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getScaleThresh');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughGuil'), 'GeneralizedHoughGuil');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_GeneralizedHoughGuil_getScaleThresh');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughGuil')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughGuil'))){this.setFieldValue(newName,'GeneralizedHoughGuil');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughGuil_setPosThresh'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('setPosThresh');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughGuil'), 'GeneralizedHoughGuil');
    this.appendDummyInput()
        .appendField('posThresh')
        .appendField(new Blockly.FieldTextInput('0'), 'posThresh');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_GeneralizedHoughGuil_setPosThresh');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughGuil')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughGuil'))){this.setFieldValue(newName,'GeneralizedHoughGuil');}},
};
Blockly.Blocks['imgproc_GeneralizedHoughGuil_getPosThresh'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getPosThresh');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GeneralizedHoughGuil'), 'GeneralizedHoughGuil');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_GeneralizedHoughGuil_getPosThresh');
  },
  getVars: function(){return [this.getFieldValue('GeneralizedHoughGuil')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GeneralizedHoughGuil'))){this.setFieldValue(newName,'GeneralizedHoughGuil');}},
};
Blockly.Blocks['imgproc_LineSegmentDetector_detect'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('detect');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('LineSegmentDetector'), 'LineSegmentDetector');
    this.appendValueInput('_image')
        .appendField('_image')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_LineSegmentDetector_detect');
  },
  getVars: function(){return [this.getFieldValue('LineSegmentDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('LineSegmentDetector'))){this.setFieldValue(newName,'LineSegmentDetector');}},
};
Blockly.Blocks['imgproc_LineSegmentDetector_drawSegments'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('drawSegments');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('LineSegmentDetector'), 'LineSegmentDetector');
    this.appendValueInput('_image')
        .appendField('_image')
        .setCheck('image');
    this.appendValueInput('lines')
        .appendField('lines')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_LineSegmentDetector_drawSegments');
  },
  getVars: function(){return [this.getFieldValue('LineSegmentDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('LineSegmentDetector'))){this.setFieldValue(newName,'LineSegmentDetector');}},
};
Blockly.Blocks['imgproc_LineSegmentDetector_compareSegments'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('compareSegments');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('LineSegmentDetector'), 'LineSegmentDetector');
    this.appendValueInput('size')
        .appendField('size')
        .setCheck('size');
    this.appendValueInput('lines1')
        .appendField('lines1')
        .setCheck('image');
    this.appendValueInput('lines2')
        .appendField('lines2')
        .setCheck('image');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_LineSegmentDetector_compareSegments');
  },
  getVars: function(){return [this.getFieldValue('LineSegmentDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('LineSegmentDetector'))){this.setFieldValue(newName,'LineSegmentDetector');}},
};
Blockly.Blocks['stitching_Stitcher_create'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField('Stitcher_create');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Stitcher'), 'Stitcher');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('stitching_Stitcher_create');
  },
  getVars: function(){return [this.getFieldValue('Stitcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Stitcher'))){this.setFieldValue(newName,'Stitcher');}},
};
Blockly.Blocks['stitching_Stitcher_registrationResol'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField('registrationResol');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Stitcher'), 'Stitcher');
    this.setOutput(true,'Number');
    this.setTooltip('stitching_Stitcher_registrationResol');
  },
  getVars: function(){return [this.getFieldValue('Stitcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Stitcher'))){this.setFieldValue(newName,'Stitcher');}},
};
Blockly.Blocks['stitching_Stitcher_setRegistrationResol'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField('setRegistrationResol');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Stitcher'), 'Stitcher');
    this.appendDummyInput()
        .appendField('resol_mpx')
        .appendField(new Blockly.FieldTextInput('0'), 'resol_mpx');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('stitching_Stitcher_setRegistrationResol');
  },
  getVars: function(){return [this.getFieldValue('Stitcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Stitcher'))){this.setFieldValue(newName,'Stitcher');}},
};
Blockly.Blocks['stitching_Stitcher_seamEstimationResol'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField('seamEstimationResol');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Stitcher'), 'Stitcher');
    this.setOutput(true,'Number');
    this.setTooltip('stitching_Stitcher_seamEstimationResol');
  },
  getVars: function(){return [this.getFieldValue('Stitcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Stitcher'))){this.setFieldValue(newName,'Stitcher');}},
};
Blockly.Blocks['stitching_Stitcher_setSeamEstimationResol'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField('setSeamEstimationResol');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Stitcher'), 'Stitcher');
    this.appendDummyInput()
        .appendField('resol_mpx')
        .appendField(new Blockly.FieldTextInput('0'), 'resol_mpx');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('stitching_Stitcher_setSeamEstimationResol');
  },
  getVars: function(){return [this.getFieldValue('Stitcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Stitcher'))){this.setFieldValue(newName,'Stitcher');}},
};
Blockly.Blocks['stitching_Stitcher_compositingResol'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField('compositingResol');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Stitcher'), 'Stitcher');
    this.setOutput(true,'Number');
    this.setTooltip('stitching_Stitcher_compositingResol');
  },
  getVars: function(){return [this.getFieldValue('Stitcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Stitcher'))){this.setFieldValue(newName,'Stitcher');}},
};
Blockly.Blocks['stitching_Stitcher_setCompositingResol'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField('setCompositingResol');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Stitcher'), 'Stitcher');
    this.appendDummyInput()
        .appendField('resol_mpx')
        .appendField(new Blockly.FieldTextInput('0'), 'resol_mpx');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('stitching_Stitcher_setCompositingResol');
  },
  getVars: function(){return [this.getFieldValue('Stitcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Stitcher'))){this.setFieldValue(newName,'Stitcher');}},
};
Blockly.Blocks['stitching_Stitcher_panoConfidenceThresh'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField('panoConfidenceThresh');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Stitcher'), 'Stitcher');
    this.setOutput(true,'Number');
    this.setTooltip('stitching_Stitcher_panoConfidenceThresh');
  },
  getVars: function(){return [this.getFieldValue('Stitcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Stitcher'))){this.setFieldValue(newName,'Stitcher');}},
};
Blockly.Blocks['stitching_Stitcher_setPanoConfidenceThresh'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField('setPanoConfidenceThresh');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Stitcher'), 'Stitcher');
    this.appendDummyInput()
        .appendField('conf_thresh')
        .appendField(new Blockly.FieldTextInput('0'), 'conf_thresh');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('stitching_Stitcher_setPanoConfidenceThresh');
  },
  getVars: function(){return [this.getFieldValue('Stitcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Stitcher'))){this.setFieldValue(newName,'Stitcher');}},
};
Blockly.Blocks['stitching_Stitcher_waveCorrection'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField('waveCorrection');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Stitcher'), 'Stitcher');
    this.setOutput(true);
    this.setTooltip('stitching_Stitcher_waveCorrection');
  },
  getVars: function(){return [this.getFieldValue('Stitcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Stitcher'))){this.setFieldValue(newName,'Stitcher');}},
};
Blockly.Blocks['stitching_Stitcher_setWaveCorrection'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField('setWaveCorrection');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Stitcher'), 'Stitcher');
    this.appendValueInput('flag')
        .appendField('flag');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('stitching_Stitcher_setWaveCorrection');
  },
  getVars: function(){return [this.getFieldValue('Stitcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Stitcher'))){this.setFieldValue(newName,'Stitcher');}},
};
Blockly.Blocks['stitching_Stitcher_interpolationFlags'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField('interpolationFlags');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Stitcher'), 'Stitcher');
    this.setOutput(true);
    this.setTooltip('stitching_Stitcher_interpolationFlags');
  },
  getVars: function(){return [this.getFieldValue('Stitcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Stitcher'))){this.setFieldValue(newName,'Stitcher');}},
};
Blockly.Blocks['stitching_Stitcher_setInterpolationFlags'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField('setInterpolationFlags');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Stitcher'), 'Stitcher');
    this.appendValueInput('interp_flags')
        .appendField('interp_flags');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('stitching_Stitcher_setInterpolationFlags');
  },
  getVars: function(){return [this.getFieldValue('Stitcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Stitcher'))){this.setFieldValue(newName,'Stitcher');}},
};
Blockly.Blocks['stitching_Stitcher_estimateTransform'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField('estimateTransform');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Stitcher'), 'Stitcher');
    this.appendValueInput('images')
        .appendField('images');
    this.setOutput(true);
    this.setTooltip('stitching_Stitcher_estimateTransform');
  },
  getVars: function(){return [this.getFieldValue('Stitcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Stitcher'))){this.setFieldValue(newName,'Stitcher');}},
};
Blockly.Blocks['stitching_Stitcher_composePanorama'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField('composePanorama');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Stitcher'), 'Stitcher');
    this.setOutput(true,'image');
    this.setTooltip('stitching_Stitcher_composePanorama');
  },
  getVars: function(){return [this.getFieldValue('Stitcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Stitcher'))){this.setFieldValue(newName,'Stitcher');}},
};
Blockly.Blocks['stitching_Stitcher_stitch'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField('stitch');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Stitcher'), 'Stitcher');
    this.appendValueInput('images')
        .appendField('images');
    this.setOutput(true,'image');
    this.setTooltip('stitching_Stitcher_stitch');
  },
  getVars: function(){return [this.getFieldValue('Stitcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Stitcher'))){this.setFieldValue(newName,'Stitcher');}},
};
Blockly.Blocks['stitching_Stitcher_workScale'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField('workScale');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Stitcher'), 'Stitcher');
    this.setOutput(true,'Number');
    this.setTooltip('stitching_Stitcher_workScale');
  },
  getVars: function(){return [this.getFieldValue('Stitcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Stitcher'))){this.setFieldValue(newName,'Stitcher');}},
};
Blockly.Blocks['photo_inpaint'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('inpaint');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('inpaintMask')
        .appendField('inpaintMask')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('inpaintRadius')
        .appendField(new Blockly.FieldTextInput('0'), 'inpaintRadius');
    this.appendDummyInput()
        .appendField('flags')
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true,'image');
    this.setTooltip('photo_inpaint');
  },
};
Blockly.Blocks['photo_fastNlMeansDenoising'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('fastNlMeansDenoising');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_fastNlMeansDenoising');
  },
};
Blockly.Blocks['photo_fastNlMeansDenoisingColored'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('fastNlMeansDenoisingColored');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_fastNlMeansDenoisingColored');
  },
};
Blockly.Blocks['photo_fastNlMeansDenoisingMulti'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('fastNlMeansDenoisingMulti');
    this.appendValueInput('srcImgs')
        .appendField('srcImgs');
    this.appendDummyInput()
        .appendField('imgToDenoiseIndex')
        .appendField(new Blockly.FieldTextInput('0'), 'imgToDenoiseIndex');
    this.appendDummyInput()
        .appendField('temporalWindowSize')
        .appendField(new Blockly.FieldTextInput('0'), 'temporalWindowSize');
    this.setOutput(true,'image');
    this.setTooltip('photo_fastNlMeansDenoisingMulti');
  },
};
Blockly.Blocks['photo_fastNlMeansDenoisingColoredMulti'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('fastNlMeansDenoisingColoredMulti');
    this.appendValueInput('srcImgs')
        .appendField('srcImgs');
    this.appendDummyInput()
        .appendField('imgToDenoiseIndex')
        .appendField(new Blockly.FieldTextInput('0'), 'imgToDenoiseIndex');
    this.appendDummyInput()
        .appendField('temporalWindowSize')
        .appendField(new Blockly.FieldTextInput('0'), 'temporalWindowSize');
    this.setOutput(true,'image');
    this.setTooltip('photo_fastNlMeansDenoisingColoredMulti');
  },
};
Blockly.Blocks['photo_denoise_TVL1'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('denoise_TVL1');
    this.appendValueInput('observations')
        .appendField('observations');
    this.appendValueInput('result')
        .appendField('result')
        .setCheck('image');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_denoise_TVL1');
  },
};
Blockly.Blocks['photo_createTonemap'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('createTonemap');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Tonemap'), 'Tonemap');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_createTonemap');
  },
  getVars: function(){return [this.getFieldValue('Tonemap')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Tonemap'))){this.setFieldValue(newName,'Tonemap');}},
};
Blockly.Blocks['photo_createTonemapDrago'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('createTonemapDrago');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TonemapDrago'), 'TonemapDrago');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_createTonemapDrago');
  },
  getVars: function(){return [this.getFieldValue('TonemapDrago')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TonemapDrago'))){this.setFieldValue(newName,'TonemapDrago');}},
};
Blockly.Blocks['photo_createTonemapReinhard'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('createTonemapReinhard');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TonemapReinhard'), 'TonemapReinhard');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_createTonemapReinhard');
  },
  getVars: function(){return [this.getFieldValue('TonemapReinhard')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TonemapReinhard'))){this.setFieldValue(newName,'TonemapReinhard');}},
};
Blockly.Blocks['photo_createTonemapMantiuk'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('createTonemapMantiuk');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TonemapMantiuk'), 'TonemapMantiuk');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_createTonemapMantiuk');
  },
  getVars: function(){return [this.getFieldValue('TonemapMantiuk')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TonemapMantiuk'))){this.setFieldValue(newName,'TonemapMantiuk');}},
};
Blockly.Blocks['photo_createAlignMTB'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('createAlignMTB');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AlignMTB'), 'AlignMTB');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_createAlignMTB');
  },
  getVars: function(){return [this.getFieldValue('AlignMTB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AlignMTB'))){this.setFieldValue(newName,'AlignMTB');}},
};
Blockly.Blocks['photo_createCalibrateDebevec'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('createCalibrateDebevec');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CalibrateDebevec'), 'CalibrateDebevec');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_createCalibrateDebevec');
  },
  getVars: function(){return [this.getFieldValue('CalibrateDebevec')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CalibrateDebevec'))){this.setFieldValue(newName,'CalibrateDebevec');}},
};
Blockly.Blocks['photo_createCalibrateRobertson'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('createCalibrateRobertson');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CalibrateRobertson'), 'CalibrateRobertson');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_createCalibrateRobertson');
  },
  getVars: function(){return [this.getFieldValue('CalibrateRobertson')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CalibrateRobertson'))){this.setFieldValue(newName,'CalibrateRobertson');}},
};
Blockly.Blocks['photo_createMergeDebevec'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('createMergeDebevec');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('MergeDebevec'), 'MergeDebevec');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_createMergeDebevec');
  },
  getVars: function(){return [this.getFieldValue('MergeDebevec')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('MergeDebevec'))){this.setFieldValue(newName,'MergeDebevec');}},
};
Blockly.Blocks['photo_createMergeMertens'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('createMergeMertens');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('MergeMertens'), 'MergeMertens');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_createMergeMertens');
  },
  getVars: function(){return [this.getFieldValue('MergeMertens')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('MergeMertens'))){this.setFieldValue(newName,'MergeMertens');}},
};
Blockly.Blocks['photo_createMergeRobertson'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('createMergeRobertson');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('MergeRobertson'), 'MergeRobertson');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_createMergeRobertson');
  },
  getVars: function(){return [this.getFieldValue('MergeRobertson')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('MergeRobertson'))){this.setFieldValue(newName,'MergeRobertson');}},
};
Blockly.Blocks['photo_decolor'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('decolor');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_decolor');
  },
};
Blockly.Blocks['photo_seamlessClone'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('seamlessClone');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('dst')
        .appendField('dst')
        .setCheck('image');
    this.appendValueInput('mask')
        .appendField('mask')
        .setCheck('image');
    this.appendValueInput('p')
        .appendField('p')
        .setCheck('point');
    this.appendDummyInput()
        .appendField('flags')
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true,'image');
    this.setTooltip('photo_seamlessClone');
  },
};
Blockly.Blocks['photo_colorChange'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('colorChange');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('mask')
        .appendField('mask')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_colorChange');
  },
};
Blockly.Blocks['photo_illuminationChange'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('illuminationChange');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('mask')
        .appendField('mask')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_illuminationChange');
  },
};
Blockly.Blocks['photo_textureFlattening'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('textureFlattening');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('mask')
        .appendField('mask')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_textureFlattening');
  },
};
Blockly.Blocks['photo_edgePreservingFilter'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('edgePreservingFilter');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_edgePreservingFilter');
  },
};
Blockly.Blocks['photo_detailEnhance'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('detailEnhance');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_detailEnhance');
  },
};
Blockly.Blocks['photo_pencilSketch'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('pencilSketch');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_pencilSketch');
  },
};
Blockly.Blocks['photo_stylization'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('stylization');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_stylization');
  },
};
Blockly.Blocks['photo_MergeMertens_process'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('process');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('MergeMertens'), 'MergeMertens');
    this.appendValueInput('src')
        .appendField('src');
    this.appendValueInput('times')
        .appendField('times')
        .setCheck('image');
    this.appendValueInput('response')
        .appendField('response')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_MergeMertens_process');
  },
  getVars: function(){return [this.getFieldValue('MergeMertens')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('MergeMertens'))){this.setFieldValue(newName,'MergeMertens');}},
};
Blockly.Blocks['photo_MergeMertens_getContrastWeight'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('getContrastWeight');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('MergeMertens'), 'MergeMertens');
    this.setOutput(true,'Number');
    this.setTooltip('photo_MergeMertens_getContrastWeight');
  },
  getVars: function(){return [this.getFieldValue('MergeMertens')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('MergeMertens'))){this.setFieldValue(newName,'MergeMertens');}},
};
Blockly.Blocks['photo_MergeMertens_setContrastWeight'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('setContrastWeight');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('MergeMertens'), 'MergeMertens');
    this.appendDummyInput()
        .appendField('contrast_weiht')
        .appendField(new Blockly.FieldTextInput('0'), 'contrast_weiht');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_MergeMertens_setContrastWeight');
  },
  getVars: function(){return [this.getFieldValue('MergeMertens')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('MergeMertens'))){this.setFieldValue(newName,'MergeMertens');}},
};
Blockly.Blocks['photo_MergeMertens_getSaturationWeight'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('getSaturationWeight');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('MergeMertens'), 'MergeMertens');
    this.setOutput(true,'Number');
    this.setTooltip('photo_MergeMertens_getSaturationWeight');
  },
  getVars: function(){return [this.getFieldValue('MergeMertens')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('MergeMertens'))){this.setFieldValue(newName,'MergeMertens');}},
};
Blockly.Blocks['photo_MergeMertens_setSaturationWeight'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('setSaturationWeight');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('MergeMertens'), 'MergeMertens');
    this.appendDummyInput()
        .appendField('saturation_weight')
        .appendField(new Blockly.FieldTextInput('0'), 'saturation_weight');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_MergeMertens_setSaturationWeight');
  },
  getVars: function(){return [this.getFieldValue('MergeMertens')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('MergeMertens'))){this.setFieldValue(newName,'MergeMertens');}},
};
Blockly.Blocks['photo_MergeMertens_getExposureWeight'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('getExposureWeight');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('MergeMertens'), 'MergeMertens');
    this.setOutput(true,'Number');
    this.setTooltip('photo_MergeMertens_getExposureWeight');
  },
  getVars: function(){return [this.getFieldValue('MergeMertens')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('MergeMertens'))){this.setFieldValue(newName,'MergeMertens');}},
};
Blockly.Blocks['photo_MergeMertens_setExposureWeight'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('setExposureWeight');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('MergeMertens'), 'MergeMertens');
    this.appendDummyInput()
        .appendField('exposure_weight')
        .appendField(new Blockly.FieldTextInput('0'), 'exposure_weight');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_MergeMertens_setExposureWeight');
  },
  getVars: function(){return [this.getFieldValue('MergeMertens')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('MergeMertens'))){this.setFieldValue(newName,'MergeMertens');}},
};
Blockly.Blocks['photo_TonemapMantiuk_getScale'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('getScale');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TonemapMantiuk'), 'TonemapMantiuk');
    this.setOutput(true,'Number');
    this.setTooltip('photo_TonemapMantiuk_getScale');
  },
  getVars: function(){return [this.getFieldValue('TonemapMantiuk')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TonemapMantiuk'))){this.setFieldValue(newName,'TonemapMantiuk');}},
};
Blockly.Blocks['photo_TonemapMantiuk_setScale'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('setScale');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TonemapMantiuk'), 'TonemapMantiuk');
    this.appendDummyInput()
        .appendField('scale')
        .appendField(new Blockly.FieldTextInput('0'), 'scale');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_TonemapMantiuk_setScale');
  },
  getVars: function(){return [this.getFieldValue('TonemapMantiuk')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TonemapMantiuk'))){this.setFieldValue(newName,'TonemapMantiuk');}},
};
Blockly.Blocks['photo_TonemapMantiuk_getSaturation'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('getSaturation');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TonemapMantiuk'), 'TonemapMantiuk');
    this.setOutput(true,'Number');
    this.setTooltip('photo_TonemapMantiuk_getSaturation');
  },
  getVars: function(){return [this.getFieldValue('TonemapMantiuk')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TonemapMantiuk'))){this.setFieldValue(newName,'TonemapMantiuk');}},
};
Blockly.Blocks['photo_TonemapMantiuk_setSaturation'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('setSaturation');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TonemapMantiuk'), 'TonemapMantiuk');
    this.appendDummyInput()
        .appendField('saturation')
        .appendField(new Blockly.FieldTextInput('0'), 'saturation');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_TonemapMantiuk_setSaturation');
  },
  getVars: function(){return [this.getFieldValue('TonemapMantiuk')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TonemapMantiuk'))){this.setFieldValue(newName,'TonemapMantiuk');}},
};
Blockly.Blocks['photo_CalibrateRobertson_getMaxIter'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('getMaxIter');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CalibrateRobertson'), 'CalibrateRobertson');
    this.setOutput(true,'Number');
    this.setTooltip('photo_CalibrateRobertson_getMaxIter');
  },
  getVars: function(){return [this.getFieldValue('CalibrateRobertson')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CalibrateRobertson'))){this.setFieldValue(newName,'CalibrateRobertson');}},
};
Blockly.Blocks['photo_CalibrateRobertson_setMaxIter'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('setMaxIter');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CalibrateRobertson'), 'CalibrateRobertson');
    this.appendDummyInput()
        .appendField('max_iter')
        .appendField(new Blockly.FieldTextInput('0'), 'max_iter');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_CalibrateRobertson_setMaxIter');
  },
  getVars: function(){return [this.getFieldValue('CalibrateRobertson')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CalibrateRobertson'))){this.setFieldValue(newName,'CalibrateRobertson');}},
};
Blockly.Blocks['photo_CalibrateRobertson_getThreshold'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('getThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CalibrateRobertson'), 'CalibrateRobertson');
    this.setOutput(true,'Number');
    this.setTooltip('photo_CalibrateRobertson_getThreshold');
  },
  getVars: function(){return [this.getFieldValue('CalibrateRobertson')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CalibrateRobertson'))){this.setFieldValue(newName,'CalibrateRobertson');}},
};
Blockly.Blocks['photo_CalibrateRobertson_setThreshold'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('setThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CalibrateRobertson'), 'CalibrateRobertson');
    this.appendDummyInput()
        .appendField('threshold')
        .appendField(new Blockly.FieldTextInput('0'), 'threshold');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_CalibrateRobertson_setThreshold');
  },
  getVars: function(){return [this.getFieldValue('CalibrateRobertson')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CalibrateRobertson'))){this.setFieldValue(newName,'CalibrateRobertson');}},
};
Blockly.Blocks['photo_CalibrateRobertson_getRadiance'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('getRadiance');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CalibrateRobertson'), 'CalibrateRobertson');
    this.setOutput(true,'image');
    this.setTooltip('photo_CalibrateRobertson_getRadiance');
  },
  getVars: function(){return [this.getFieldValue('CalibrateRobertson')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CalibrateRobertson'))){this.setFieldValue(newName,'CalibrateRobertson');}},
};
Blockly.Blocks['photo_Tonemap_process'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('process');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Tonemap'), 'Tonemap');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_Tonemap_process');
  },
  getVars: function(){return [this.getFieldValue('Tonemap')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Tonemap'))){this.setFieldValue(newName,'Tonemap');}},
};
Blockly.Blocks['photo_Tonemap_getGamma'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('getGamma');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Tonemap'), 'Tonemap');
    this.setOutput(true,'Number');
    this.setTooltip('photo_Tonemap_getGamma');
  },
  getVars: function(){return [this.getFieldValue('Tonemap')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Tonemap'))){this.setFieldValue(newName,'Tonemap');}},
};
Blockly.Blocks['photo_Tonemap_setGamma'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('setGamma');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Tonemap'), 'Tonemap');
    this.appendDummyInput()
        .appendField('gamma')
        .appendField(new Blockly.FieldTextInput('0'), 'gamma');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_Tonemap_setGamma');
  },
  getVars: function(){return [this.getFieldValue('Tonemap')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Tonemap'))){this.setFieldValue(newName,'Tonemap');}},
};
Blockly.Blocks['photo_CalibrateDebevec_getLambda'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('getLambda');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CalibrateDebevec'), 'CalibrateDebevec');
    this.setOutput(true,'Number');
    this.setTooltip('photo_CalibrateDebevec_getLambda');
  },
  getVars: function(){return [this.getFieldValue('CalibrateDebevec')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CalibrateDebevec'))){this.setFieldValue(newName,'CalibrateDebevec');}},
};
Blockly.Blocks['photo_CalibrateDebevec_setLambda'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('setLambda');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CalibrateDebevec'), 'CalibrateDebevec');
    this.appendDummyInput()
        .appendField('lambda')
        .appendField(new Blockly.FieldTextInput('0'), 'lambda');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_CalibrateDebevec_setLambda');
  },
  getVars: function(){return [this.getFieldValue('CalibrateDebevec')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CalibrateDebevec'))){this.setFieldValue(newName,'CalibrateDebevec');}},
};
Blockly.Blocks['photo_CalibrateDebevec_getSamples'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('getSamples');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CalibrateDebevec'), 'CalibrateDebevec');
    this.setOutput(true,'Number');
    this.setTooltip('photo_CalibrateDebevec_getSamples');
  },
  getVars: function(){return [this.getFieldValue('CalibrateDebevec')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CalibrateDebevec'))){this.setFieldValue(newName,'CalibrateDebevec');}},
};
Blockly.Blocks['photo_CalibrateDebevec_setSamples'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('setSamples');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CalibrateDebevec'), 'CalibrateDebevec');
    this.appendDummyInput()
        .appendField('samples')
        .appendField(new Blockly.FieldTextInput('0'), 'samples');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_CalibrateDebevec_setSamples');
  },
  getVars: function(){return [this.getFieldValue('CalibrateDebevec')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CalibrateDebevec'))){this.setFieldValue(newName,'CalibrateDebevec');}},
};
Blockly.Blocks['photo_CalibrateDebevec_getRandom'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('getRandom');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CalibrateDebevec'), 'CalibrateDebevec');
    this.setOutput(true);
    this.setTooltip('photo_CalibrateDebevec_getRandom');
  },
  getVars: function(){return [this.getFieldValue('CalibrateDebevec')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CalibrateDebevec'))){this.setFieldValue(newName,'CalibrateDebevec');}},
};
Blockly.Blocks['photo_CalibrateDebevec_setRandom'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('setRandom');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CalibrateDebevec'), 'CalibrateDebevec');
    this.appendValueInput('random')
        .appendField('random');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_CalibrateDebevec_setRandom');
  },
  getVars: function(){return [this.getFieldValue('CalibrateDebevec')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CalibrateDebevec'))){this.setFieldValue(newName,'CalibrateDebevec');}},
};
Blockly.Blocks['photo_TonemapReinhard_getIntensity'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('getIntensity');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TonemapReinhard'), 'TonemapReinhard');
    this.setOutput(true,'Number');
    this.setTooltip('photo_TonemapReinhard_getIntensity');
  },
  getVars: function(){return [this.getFieldValue('TonemapReinhard')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TonemapReinhard'))){this.setFieldValue(newName,'TonemapReinhard');}},
};
Blockly.Blocks['photo_TonemapReinhard_setIntensity'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('setIntensity');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TonemapReinhard'), 'TonemapReinhard');
    this.appendDummyInput()
        .appendField('intensity')
        .appendField(new Blockly.FieldTextInput('0'), 'intensity');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_TonemapReinhard_setIntensity');
  },
  getVars: function(){return [this.getFieldValue('TonemapReinhard')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TonemapReinhard'))){this.setFieldValue(newName,'TonemapReinhard');}},
};
Blockly.Blocks['photo_TonemapReinhard_getLightAdaptation'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('getLightAdaptation');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TonemapReinhard'), 'TonemapReinhard');
    this.setOutput(true,'Number');
    this.setTooltip('photo_TonemapReinhard_getLightAdaptation');
  },
  getVars: function(){return [this.getFieldValue('TonemapReinhard')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TonemapReinhard'))){this.setFieldValue(newName,'TonemapReinhard');}},
};
Blockly.Blocks['photo_TonemapReinhard_setLightAdaptation'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('setLightAdaptation');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TonemapReinhard'), 'TonemapReinhard');
    this.appendDummyInput()
        .appendField('light_adapt')
        .appendField(new Blockly.FieldTextInput('0'), 'light_adapt');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_TonemapReinhard_setLightAdaptation');
  },
  getVars: function(){return [this.getFieldValue('TonemapReinhard')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TonemapReinhard'))){this.setFieldValue(newName,'TonemapReinhard');}},
};
Blockly.Blocks['photo_TonemapReinhard_getColorAdaptation'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('getColorAdaptation');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TonemapReinhard'), 'TonemapReinhard');
    this.setOutput(true,'Number');
    this.setTooltip('photo_TonemapReinhard_getColorAdaptation');
  },
  getVars: function(){return [this.getFieldValue('TonemapReinhard')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TonemapReinhard'))){this.setFieldValue(newName,'TonemapReinhard');}},
};
Blockly.Blocks['photo_TonemapReinhard_setColorAdaptation'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('setColorAdaptation');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TonemapReinhard'), 'TonemapReinhard');
    this.appendDummyInput()
        .appendField('color_adapt')
        .appendField(new Blockly.FieldTextInput('0'), 'color_adapt');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_TonemapReinhard_setColorAdaptation');
  },
  getVars: function(){return [this.getFieldValue('TonemapReinhard')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TonemapReinhard'))){this.setFieldValue(newName,'TonemapReinhard');}},
};
Blockly.Blocks['photo_MergeRobertson_process'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('process');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('MergeRobertson'), 'MergeRobertson');
    this.appendValueInput('src')
        .appendField('src');
    this.appendValueInput('times')
        .appendField('times')
        .setCheck('image');
    this.appendValueInput('response')
        .appendField('response')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_MergeRobertson_process');
  },
  getVars: function(){return [this.getFieldValue('MergeRobertson')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('MergeRobertson'))){this.setFieldValue(newName,'MergeRobertson');}},
};
Blockly.Blocks['photo_CalibrateCRF_process'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('process');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CalibrateCRF'), 'CalibrateCRF');
    this.appendValueInput('src')
        .appendField('src');
    this.appendValueInput('times')
        .appendField('times')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_CalibrateCRF_process');
  },
  getVars: function(){return [this.getFieldValue('CalibrateCRF')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CalibrateCRF'))){this.setFieldValue(newName,'CalibrateCRF');}},
};
Blockly.Blocks['photo_TonemapDrago_getSaturation'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('getSaturation');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TonemapDrago'), 'TonemapDrago');
    this.setOutput(true,'Number');
    this.setTooltip('photo_TonemapDrago_getSaturation');
  },
  getVars: function(){return [this.getFieldValue('TonemapDrago')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TonemapDrago'))){this.setFieldValue(newName,'TonemapDrago');}},
};
Blockly.Blocks['photo_TonemapDrago_setSaturation'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('setSaturation');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TonemapDrago'), 'TonemapDrago');
    this.appendDummyInput()
        .appendField('saturation')
        .appendField(new Blockly.FieldTextInput('0'), 'saturation');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_TonemapDrago_setSaturation');
  },
  getVars: function(){return [this.getFieldValue('TonemapDrago')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TonemapDrago'))){this.setFieldValue(newName,'TonemapDrago');}},
};
Blockly.Blocks['photo_TonemapDrago_getBias'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('getBias');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TonemapDrago'), 'TonemapDrago');
    this.setOutput(true,'Number');
    this.setTooltip('photo_TonemapDrago_getBias');
  },
  getVars: function(){return [this.getFieldValue('TonemapDrago')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TonemapDrago'))){this.setFieldValue(newName,'TonemapDrago');}},
};
Blockly.Blocks['photo_TonemapDrago_setBias'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('setBias');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('TonemapDrago'), 'TonemapDrago');
    this.appendDummyInput()
        .appendField('bias')
        .appendField(new Blockly.FieldTextInput('0'), 'bias');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_TonemapDrago_setBias');
  },
  getVars: function(){return [this.getFieldValue('TonemapDrago')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('TonemapDrago'))){this.setFieldValue(newName,'TonemapDrago');}},
};
Blockly.Blocks['photo_AlignMTB_process'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('process');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AlignMTB'), 'AlignMTB');
    this.appendValueInput('src')
        .appendField('src');
    this.appendValueInput('dst')
        .appendField('dst');
    this.appendValueInput('times')
        .appendField('times')
        .setCheck('image');
    this.appendValueInput('response')
        .appendField('response')
        .setCheck('image');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_AlignMTB_process');
  },
  getVars: function(){return [this.getFieldValue('AlignMTB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AlignMTB'))){this.setFieldValue(newName,'AlignMTB');}},
};
Blockly.Blocks['photo_AlignMTB_calculateShift'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('calculateShift');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AlignMTB'), 'AlignMTB');
    this.appendValueInput('img0')
        .appendField('img0')
        .setCheck('image');
    this.appendValueInput('img1')
        .appendField('img1')
        .setCheck('image');
    this.setOutput(true,'point');
    this.setTooltip('photo_AlignMTB_calculateShift');
  },
  getVars: function(){return [this.getFieldValue('AlignMTB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AlignMTB'))){this.setFieldValue(newName,'AlignMTB');}},
};
Blockly.Blocks['photo_AlignMTB_shiftMat'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('shiftMat');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AlignMTB'), 'AlignMTB');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('shift')
        .appendField('shift')
        .setCheck('point');
    this.setOutput(true,'image');
    this.setTooltip('photo_AlignMTB_shiftMat');
  },
  getVars: function(){return [this.getFieldValue('AlignMTB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AlignMTB'))){this.setFieldValue(newName,'AlignMTB');}},
};
Blockly.Blocks['photo_AlignMTB_computeBitmaps'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('computeBitmaps');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AlignMTB'), 'AlignMTB');
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_AlignMTB_computeBitmaps');
  },
  getVars: function(){return [this.getFieldValue('AlignMTB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AlignMTB'))){this.setFieldValue(newName,'AlignMTB');}},
};
Blockly.Blocks['photo_AlignMTB_getMaxBits'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('getMaxBits');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AlignMTB'), 'AlignMTB');
    this.setOutput(true,'Number');
    this.setTooltip('photo_AlignMTB_getMaxBits');
  },
  getVars: function(){return [this.getFieldValue('AlignMTB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AlignMTB'))){this.setFieldValue(newName,'AlignMTB');}},
};
Blockly.Blocks['photo_AlignMTB_setMaxBits'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('setMaxBits');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AlignMTB'), 'AlignMTB');
    this.appendDummyInput()
        .appendField('max_bits')
        .appendField(new Blockly.FieldTextInput('0'), 'max_bits');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_AlignMTB_setMaxBits');
  },
  getVars: function(){return [this.getFieldValue('AlignMTB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AlignMTB'))){this.setFieldValue(newName,'AlignMTB');}},
};
Blockly.Blocks['photo_AlignMTB_getExcludeRange'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('getExcludeRange');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AlignMTB'), 'AlignMTB');
    this.setOutput(true,'Number');
    this.setTooltip('photo_AlignMTB_getExcludeRange');
  },
  getVars: function(){return [this.getFieldValue('AlignMTB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AlignMTB'))){this.setFieldValue(newName,'AlignMTB');}},
};
Blockly.Blocks['photo_AlignMTB_setExcludeRange'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('setExcludeRange');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AlignMTB'), 'AlignMTB');
    this.appendDummyInput()
        .appendField('exclude_range')
        .appendField(new Blockly.FieldTextInput('0'), 'exclude_range');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_AlignMTB_setExcludeRange');
  },
  getVars: function(){return [this.getFieldValue('AlignMTB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AlignMTB'))){this.setFieldValue(newName,'AlignMTB');}},
};
Blockly.Blocks['photo_AlignMTB_getCut'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('getCut');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AlignMTB'), 'AlignMTB');
    this.setOutput(true);
    this.setTooltip('photo_AlignMTB_getCut');
  },
  getVars: function(){return [this.getFieldValue('AlignMTB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AlignMTB'))){this.setFieldValue(newName,'AlignMTB');}},
};
Blockly.Blocks['photo_AlignMTB_setCut'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('setCut');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AlignMTB'), 'AlignMTB');
    this.appendValueInput('value')
        .appendField('value');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_AlignMTB_setCut');
  },
  getVars: function(){return [this.getFieldValue('AlignMTB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AlignMTB'))){this.setFieldValue(newName,'AlignMTB');}},
};
Blockly.Blocks['photo_MergeDebevec_process'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('process');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('MergeDebevec'), 'MergeDebevec');
    this.appendValueInput('src')
        .appendField('src');
    this.appendValueInput('times')
        .appendField('times')
        .setCheck('image');
    this.appendValueInput('response')
        .appendField('response')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_MergeDebevec_process');
  },
  getVars: function(){return [this.getFieldValue('MergeDebevec')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('MergeDebevec'))){this.setFieldValue(newName,'MergeDebevec');}},
};
Blockly.Blocks['photo_MergeExposures_process'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('process');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('MergeExposures'), 'MergeExposures');
    this.appendValueInput('src')
        .appendField('src');
    this.appendValueInput('times')
        .appendField('times')
        .setCheck('image');
    this.appendValueInput('response')
        .appendField('response')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_MergeExposures_process');
  },
  getVars: function(){return [this.getFieldValue('MergeExposures')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('MergeExposures'))){this.setFieldValue(newName,'MergeExposures');}},
};
Blockly.Blocks['photo_AlignExposures_process'] = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput()
        .appendField('process');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AlignExposures'), 'AlignExposures');
    this.appendValueInput('src')
        .appendField('src');
    this.appendValueInput('dst')
        .appendField('dst');
    this.appendValueInput('times')
        .appendField('times')
        .setCheck('image');
    this.appendValueInput('response')
        .appendField('response')
        .setCheck('image');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_AlignExposures_process');
  },
  getVars: function(){return [this.getFieldValue('AlignExposures')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AlignExposures'))){this.setFieldValue(newName,'AlignExposures');}},
};
Blockly.Blocks['imgcodecs_imread'] = {
  init: function() {
    this.setColour(55);
    this.appendDummyInput()
        .appendField('imread');
    this.appendValueInput('filename')
        .appendField('filename')
        .setCheck('String');
    this.setOutput(true,'image');
    this.setTooltip('imgcodecs_imread');
  },
};
Blockly.Blocks['imgcodecs_imreadmulti'] = {
  init: function() {
    this.setColour(55);
    this.appendDummyInput()
        .appendField('imreadmulti');
    this.appendValueInput('filename')
        .appendField('filename')
        .setCheck('String');
    this.setOutput(true);
    this.setTooltip('imgcodecs_imreadmulti');
  },
};
Blockly.Blocks['imgcodecs_imwrite'] = {
  init: function() {
    this.setColour(55);
    this.appendDummyInput()
        .appendField('imwrite');
    this.appendValueInput('filename')
        .appendField('filename')
        .setCheck('String');
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.setOutput(true);
    this.setTooltip('imgcodecs_imwrite');
  },
};
Blockly.Blocks['imgcodecs_imdecode'] = {
  init: function() {
    this.setColour(55);
    this.appendDummyInput()
        .appendField('imdecode');
    this.appendValueInput('buf')
        .appendField('buf')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('flags')
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true,'image');
    this.setTooltip('imgcodecs_imdecode');
  },
};
Blockly.Blocks['imgcodecs_imencode'] = {
  init: function() {
    this.setColour(55);
    this.appendDummyInput()
        .appendField('imencode');
    this.appendValueInput('ext')
        .appendField('ext')
        .setCheck('String');
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.setOutput(true);
    this.setTooltip('imgcodecs_imencode');
  },
};
Blockly.Blocks['imgcodecs_haveImageReader'] = {
  init: function() {
    this.setColour(55);
    this.appendDummyInput()
        .appendField('haveImageReader');
    this.appendValueInput('filename')
        .appendField('filename')
        .setCheck('String');
    this.setOutput(true);
    this.setTooltip('imgcodecs_haveImageReader');
  },
};
Blockly.Blocks['imgcodecs_haveImageWriter'] = {
  init: function() {
    this.setColour(55);
    this.appendDummyInput()
        .appendField('haveImageWriter');
    this.appendValueInput('filename')
        .appendField('filename')
        .setCheck('String');
    this.setOutput(true);
    this.setTooltip('imgcodecs_haveImageWriter');
  },
};
Blockly.Blocks['calib3d_Rodrigues'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('Rodrigues');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_Rodrigues');
  },
};
Blockly.Blocks['calib3d_findHomography'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('findHomography');
    this.appendValueInput('srcPoints')
        .appendField('srcPoints')
        .setCheck('image');
    this.appendValueInput('dstPoints')
        .appendField('dstPoints')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_findHomography');
  },
};
Blockly.Blocks['calib3d_RQDecomp3x3'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('RQDecomp3x3');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_RQDecomp3x3');
  },
};
Blockly.Blocks['calib3d_decomposeProjectionMatrix'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('decomposeProjectionMatrix');
    this.appendValueInput('projMatrix')
        .appendField('projMatrix')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_decomposeProjectionMatrix');
  },
};
Blockly.Blocks['calib3d_matMulDeriv'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('matMulDeriv');
    this.appendValueInput('A')
        .appendField('A')
        .setCheck('image');
    this.appendValueInput('B')
        .appendField('B')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_matMulDeriv');
  },
};
Blockly.Blocks['calib3d_composeRT'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('composeRT');
    this.appendValueInput('rvec1')
        .appendField('rvec1')
        .setCheck('image');
    this.appendValueInput('tvec1')
        .appendField('tvec1')
        .setCheck('image');
    this.appendValueInput('rvec2')
        .appendField('rvec2')
        .setCheck('image');
    this.appendValueInput('tvec2')
        .appendField('tvec2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_composeRT');
  },
};
Blockly.Blocks['calib3d_projectPoints'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('projectPoints');
    this.appendValueInput('objectPoints')
        .appendField('objectPoints')
        .setCheck('image');
    this.appendValueInput('rvec')
        .appendField('rvec')
        .setCheck('image');
    this.appendValueInput('tvec')
        .appendField('tvec')
        .setCheck('image');
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.appendValueInput('distCoeffs')
        .appendField('distCoeffs')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_projectPoints');
  },
};
Blockly.Blocks['calib3d_solvePnP'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('solvePnP');
    this.appendValueInput('objectPoints')
        .appendField('objectPoints')
        .setCheck('image');
    this.appendValueInput('imagePoints')
        .appendField('imagePoints')
        .setCheck('image');
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.appendValueInput('distCoeffs')
        .appendField('distCoeffs')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_solvePnP');
  },
};
Blockly.Blocks['calib3d_solvePnPRansac'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('solvePnPRansac');
    this.appendValueInput('objectPoints')
        .appendField('objectPoints')
        .setCheck('image');
    this.appendValueInput('imagePoints')
        .appendField('imagePoints')
        .setCheck('image');
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.appendValueInput('distCoeffs')
        .appendField('distCoeffs')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_solvePnPRansac');
  },
};
Blockly.Blocks['calib3d_solveP3P'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('solveP3P');
    this.appendValueInput('objectPoints')
        .appendField('objectPoints')
        .setCheck('image');
    this.appendValueInput('imagePoints')
        .appendField('imagePoints')
        .setCheck('image');
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.appendValueInput('distCoeffs')
        .appendField('distCoeffs')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('flags')
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true);
    this.setTooltip('calib3d_solveP3P');
  },
};
Blockly.Blocks['calib3d_solvePnPRefineLM'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('solvePnPRefineLM');
    this.appendValueInput('objectPoints')
        .appendField('objectPoints')
        .setCheck('image');
    this.appendValueInput('imagePoints')
        .appendField('imagePoints')
        .setCheck('image');
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.appendValueInput('distCoeffs')
        .appendField('distCoeffs')
        .setCheck('image');
    this.appendValueInput('rvec')
        .appendField('rvec')
        .setCheck('image');
    this.appendValueInput('tvec')
        .appendField('tvec')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_solvePnPRefineLM');
  },
};
Blockly.Blocks['calib3d_solvePnPRefineVVS'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('solvePnPRefineVVS');
    this.appendValueInput('objectPoints')
        .appendField('objectPoints')
        .setCheck('image');
    this.appendValueInput('imagePoints')
        .appendField('imagePoints')
        .setCheck('image');
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.appendValueInput('distCoeffs')
        .appendField('distCoeffs')
        .setCheck('image');
    this.appendValueInput('rvec')
        .appendField('rvec')
        .setCheck('image');
    this.appendValueInput('tvec')
        .appendField('tvec')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_solvePnPRefineVVS');
  },
};
Blockly.Blocks['calib3d_solvePnPGeneric'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('solvePnPGeneric');
    this.appendValueInput('objectPoints')
        .appendField('objectPoints')
        .setCheck('image');
    this.appendValueInput('imagePoints')
        .appendField('imagePoints')
        .setCheck('image');
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.appendValueInput('distCoeffs')
        .appendField('distCoeffs')
        .setCheck('image');
    this.setOutput(true);
    this.setTooltip('calib3d_solvePnPGeneric');
  },
};
Blockly.Blocks['calib3d_initCameraMatrix2D'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('initCameraMatrix2D');
    this.appendValueInput('objectPoints')
        .appendField('objectPoints');
    this.appendValueInput('imagePoints')
        .appendField('imagePoints');
    this.appendValueInput('imageSize')
        .appendField('imageSize')
        .setCheck('size');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_initCameraMatrix2D');
  },
};
Blockly.Blocks['calib3d_findChessboardCorners'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('findChessboardCorners');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendValueInput('patternSize')
        .appendField('patternSize')
        .setCheck('size');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_findChessboardCorners');
  },
};
Blockly.Blocks['calib3d_checkChessboard'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('checkChessboard');
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.appendValueInput('size')
        .appendField('size')
        .setCheck('size');
    this.setOutput(true);
    this.setTooltip('calib3d_checkChessboard');
  },
};
Blockly.Blocks['calib3d_findChessboardCornersSB'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('findChessboardCornersSB');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendValueInput('patternSize')
        .appendField('patternSize')
        .setCheck('size');
    this.appendDummyInput()
        .appendField('flags')
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_findChessboardCornersSB');
  },
};
Blockly.Blocks['calib3d_estimateChessboardSharpness'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('estimateChessboardSharpness');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendValueInput('patternSize')
        .appendField('patternSize')
        .setCheck('size');
    this.appendValueInput('corners')
        .appendField('corners')
        .setCheck('image');
    this.setOutput(true,'Colour');
    this.setTooltip('calib3d_estimateChessboardSharpness');
  },
};
Blockly.Blocks['calib3d_find4QuadCornerSubpix'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('find4QuadCornerSubpix');
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.appendValueInput('corners')
        .appendField('corners')
        .setCheck('image');
    this.appendValueInput('region_size')
        .appendField('region_size')
        .setCheck('size');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_find4QuadCornerSubpix');
  },
};
Blockly.Blocks['calib3d_drawChessboardCorners'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('drawChessboardCorners');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendValueInput('patternSize')
        .appendField('patternSize')
        .setCheck('size');
    this.appendValueInput('corners')
        .appendField('corners')
        .setCheck('image');
    this.appendValueInput('patternWasFound')
        .appendField('patternWasFound');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_drawChessboardCorners');
  },
};
Blockly.Blocks['calib3d_drawFrameAxes'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('drawFrameAxes');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.appendValueInput('distCoeffs')
        .appendField('distCoeffs')
        .setCheck('image');
    this.appendValueInput('rvec')
        .appendField('rvec')
        .setCheck('image');
    this.appendValueInput('tvec')
        .appendField('tvec')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('length')
        .appendField(new Blockly.FieldTextInput('0'), 'length');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_drawFrameAxes');
  },
};
Blockly.Blocks['calib3d_findCirclesGrid'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('findCirclesGrid');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendValueInput('patternSize')
        .appendField('patternSize')
        .setCheck('size');
    this.appendDummyInput()
        .appendField('flags')
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.appendValueInput('blobDetector')
        .appendField('blobDetector');
    this.appendValueInput('parameters')
        .appendField('parameters');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_findCirclesGrid');
  },
};
Blockly.Blocks['calib3d_calibrateCamera'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('calibrateCamera');
    this.appendValueInput('objectPoints')
        .appendField('objectPoints');
    this.appendValueInput('imagePoints')
        .appendField('imagePoints');
    this.appendValueInput('imageSize')
        .appendField('imageSize')
        .setCheck('size');
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.appendValueInput('distCoeffs')
        .appendField('distCoeffs')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_calibrateCamera');
  },
};
Blockly.Blocks['calib3d_calibrateCameraRO'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('calibrateCameraRO');
    this.appendValueInput('objectPoints')
        .appendField('objectPoints');
    this.appendValueInput('imagePoints')
        .appendField('imagePoints');
    this.appendValueInput('imageSize')
        .appendField('imageSize')
        .setCheck('size');
    this.appendDummyInput()
        .appendField('iFixedPoint')
        .appendField(new Blockly.FieldTextInput('0'), 'iFixedPoint');
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.appendValueInput('distCoeffs')
        .appendField('distCoeffs')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_calibrateCameraRO');
  },
};
Blockly.Blocks['calib3d_calibrationMatrixValues'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('calibrationMatrixValues');
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.appendValueInput('imageSize')
        .appendField('imageSize')
        .setCheck('size');
    this.appendDummyInput()
        .appendField('apertureWidth')
        .appendField(new Blockly.FieldTextInput('0'), 'apertureWidth');
    this.appendDummyInput()
        .appendField('apertureHeight')
        .appendField(new Blockly.FieldTextInput('0'), 'apertureHeight');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_calibrationMatrixValues');
  },
};
Blockly.Blocks['calib3d_stereoCalibrate'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('stereoCalibrate');
    this.appendValueInput('objectPoints')
        .appendField('objectPoints');
    this.appendValueInput('imagePoints1')
        .appendField('imagePoints1');
    this.appendValueInput('imagePoints2')
        .appendField('imagePoints2');
    this.appendValueInput('cameraMatrix1')
        .appendField('cameraMatrix1')
        .setCheck('image');
    this.appendValueInput('distCoeffs1')
        .appendField('distCoeffs1')
        .setCheck('image');
    this.appendValueInput('cameraMatrix2')
        .appendField('cameraMatrix2')
        .setCheck('image');
    this.appendValueInput('distCoeffs2')
        .appendField('distCoeffs2')
        .setCheck('image');
    this.appendValueInput('imageSize')
        .appendField('imageSize')
        .setCheck('size');
    this.appendValueInput('R')
        .appendField('R')
        .setCheck('image');
    this.appendValueInput('T')
        .appendField('T')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_stereoCalibrate');
  },
};
Blockly.Blocks['calib3d_stereoRectify'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('stereoRectify');
    this.appendValueInput('cameraMatrix1')
        .appendField('cameraMatrix1')
        .setCheck('image');
    this.appendValueInput('distCoeffs1')
        .appendField('distCoeffs1')
        .setCheck('image');
    this.appendValueInput('cameraMatrix2')
        .appendField('cameraMatrix2')
        .setCheck('image');
    this.appendValueInput('distCoeffs2')
        .appendField('distCoeffs2')
        .setCheck('image');
    this.appendValueInput('imageSize')
        .appendField('imageSize')
        .setCheck('size');
    this.appendValueInput('R')
        .appendField('R')
        .setCheck('image');
    this.appendValueInput('T')
        .appendField('T')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_stereoRectify');
  },
};
Blockly.Blocks['calib3d_stereoRectifyUncalibrated'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('stereoRectifyUncalibrated');
    this.appendValueInput('points1')
        .appendField('points1')
        .setCheck('image');
    this.appendValueInput('points2')
        .appendField('points2')
        .setCheck('image');
    this.appendValueInput('F')
        .appendField('F')
        .setCheck('image');
    this.appendValueInput('imgSize')
        .appendField('imgSize')
        .setCheck('size');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_stereoRectifyUncalibrated');
  },
};
Blockly.Blocks['calib3d_rectify3Collinear'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('rectify3Collinear');
    this.appendValueInput('cameraMatrix1')
        .appendField('cameraMatrix1')
        .setCheck('image');
    this.appendValueInput('distCoeffs1')
        .appendField('distCoeffs1')
        .setCheck('image');
    this.appendValueInput('cameraMatrix2')
        .appendField('cameraMatrix2')
        .setCheck('image');
    this.appendValueInput('distCoeffs2')
        .appendField('distCoeffs2')
        .setCheck('image');
    this.appendValueInput('cameraMatrix3')
        .appendField('cameraMatrix3')
        .setCheck('image');
    this.appendValueInput('distCoeffs3')
        .appendField('distCoeffs3')
        .setCheck('image');
    this.appendValueInput('imgpt1')
        .appendField('imgpt1');
    this.appendValueInput('imgpt3')
        .appendField('imgpt3');
    this.appendValueInput('imageSize')
        .appendField('imageSize')
        .setCheck('size');
    this.appendValueInput('R12')
        .appendField('R12')
        .setCheck('image');
    this.appendValueInput('T12')
        .appendField('T12')
        .setCheck('image');
    this.appendValueInput('R13')
        .appendField('R13')
        .setCheck('image');
    this.appendValueInput('T13')
        .appendField('T13')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('alpha')
        .appendField(new Blockly.FieldTextInput('0'), 'alpha');
    this.appendValueInput('newImgSize')
        .appendField('newImgSize')
        .setCheck('size');
    this.appendDummyInput()
        .appendField('flags')
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true);
    this.setTooltip('calib3d_rectify3Collinear');
  },
};
Blockly.Blocks['calib3d_getOptimalNewCameraMatrix'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('getOptimalNewCameraMatrix');
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.appendValueInput('distCoeffs')
        .appendField('distCoeffs')
        .setCheck('image');
    this.appendValueInput('imageSize')
        .appendField('imageSize')
        .setCheck('size');
    this.appendDummyInput()
        .appendField('alpha')
        .appendField(new Blockly.FieldTextInput('0'), 'alpha');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_getOptimalNewCameraMatrix');
  },
};
Blockly.Blocks['calib3d_calibrateHandEye'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('calibrateHandEye');
    this.appendValueInput('R_gripper2base')
        .appendField('R_gripper2base');
    this.appendValueInput('t_gripper2base')
        .appendField('t_gripper2base');
    this.appendValueInput('R_target2cam')
        .appendField('R_target2cam');
    this.appendValueInput('t_target2cam')
        .appendField('t_target2cam');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_calibrateHandEye');
  },
};
Blockly.Blocks['calib3d_convertPointsToHomogeneous'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('convertPointsToHomogeneous');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_convertPointsToHomogeneous');
  },
};
Blockly.Blocks['calib3d_convertPointsFromHomogeneous'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('convertPointsFromHomogeneous');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_convertPointsFromHomogeneous');
  },
};
Blockly.Blocks['calib3d_findFundamentalMat'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('findFundamentalMat');
    this.appendValueInput('points1')
        .appendField('points1')
        .setCheck('image');
    this.appendValueInput('points2')
        .appendField('points2')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('method')
        .appendField(new Blockly.FieldTextInput('0'), 'method');
    this.appendDummyInput()
        .appendField('ransacReprojThreshold')
        .appendField(new Blockly.FieldTextInput('0'), 'ransacReprojThreshold');
    this.appendDummyInput()
        .appendField('confidence')
        .appendField(new Blockly.FieldTextInput('0'), 'confidence');
    this.appendDummyInput()
        .appendField('maxIters')
        .appendField(new Blockly.FieldTextInput('0'), 'maxIters');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_findFundamentalMat');
  },
};
Blockly.Blocks['calib3d_findEssentialMat'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('findEssentialMat');
    this.appendValueInput('points1')
        .appendField('points1')
        .setCheck('image');
    this.appendValueInput('points2')
        .appendField('points2')
        .setCheck('image');
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_findEssentialMat');
  },
};
Blockly.Blocks['calib3d_decomposeEssentialMat'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('decomposeEssentialMat');
    this.appendValueInput('E')
        .appendField('E')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_decomposeEssentialMat');
  },
};
Blockly.Blocks['calib3d_recoverPose'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('recoverPose');
    this.appendValueInput('E')
        .appendField('E')
        .setCheck('image');
    this.appendValueInput('points1')
        .appendField('points1')
        .setCheck('image');
    this.appendValueInput('points2')
        .appendField('points2')
        .setCheck('image');
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_recoverPose');
  },
};
Blockly.Blocks['calib3d_computeCorrespondEpilines'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('computeCorrespondEpilines');
    this.appendValueInput('points')
        .appendField('points')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('whichImage')
        .appendField(new Blockly.FieldTextInput('0'), 'whichImage');
    this.appendValueInput('F')
        .appendField('F')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_computeCorrespondEpilines');
  },
};
Blockly.Blocks['calib3d_triangulatePoints'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('triangulatePoints');
    this.appendValueInput('projMatr1')
        .appendField('projMatr1')
        .setCheck('image');
    this.appendValueInput('projMatr2')
        .appendField('projMatr2')
        .setCheck('image');
    this.appendValueInput('projPoints1')
        .appendField('projPoints1')
        .setCheck('image');
    this.appendValueInput('projPoints2')
        .appendField('projPoints2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_triangulatePoints');
  },
};
Blockly.Blocks['calib3d_correctMatches'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('correctMatches');
    this.appendValueInput('F')
        .appendField('F')
        .setCheck('image');
    this.appendValueInput('points1')
        .appendField('points1')
        .setCheck('image');
    this.appendValueInput('points2')
        .appendField('points2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_correctMatches');
  },
};
Blockly.Blocks['calib3d_filterSpeckles'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('filterSpeckles');
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('newVal')
        .appendField(new Blockly.FieldTextInput('0'), 'newVal');
    this.appendDummyInput()
        .appendField('maxSpeckleSize')
        .appendField(new Blockly.FieldTextInput('0'), 'maxSpeckleSize');
    this.appendDummyInput()
        .appendField('maxDiff')
        .appendField(new Blockly.FieldTextInput('0'), 'maxDiff');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_filterSpeckles');
  },
};
Blockly.Blocks['calib3d_getValidDisparityROI'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('getValidDisparityROI');
    this.appendValueInput('roi1')
        .appendField('roi1');
    this.appendValueInput('roi2')
        .appendField('roi2');
    this.appendDummyInput()
        .appendField('minDisparity')
        .appendField(new Blockly.FieldTextInput('0'), 'minDisparity');
    this.appendDummyInput()
        .appendField('numberOfDisparities')
        .appendField(new Blockly.FieldTextInput('0'), 'numberOfDisparities');
    this.appendDummyInput()
        .appendField('blockSize')
        .appendField(new Blockly.FieldTextInput('0'), 'blockSize');
    this.setOutput(true);
    this.setTooltip('calib3d_getValidDisparityROI');
  },
};
Blockly.Blocks['calib3d_validateDisparity'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('validateDisparity');
    this.appendValueInput('disparity')
        .appendField('disparity')
        .setCheck('image');
    this.appendValueInput('cost')
        .appendField('cost')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('minDisparity')
        .appendField(new Blockly.FieldTextInput('0'), 'minDisparity');
    this.appendDummyInput()
        .appendField('numberOfDisparities')
        .appendField(new Blockly.FieldTextInput('0'), 'numberOfDisparities');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_validateDisparity');
  },
};
Blockly.Blocks['calib3d_reprojectImageTo3D'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('reprojectImageTo3D');
    this.appendValueInput('disparity')
        .appendField('disparity')
        .setCheck('image');
    this.appendValueInput('Q')
        .appendField('Q')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_reprojectImageTo3D');
  },
};
Blockly.Blocks['calib3d_sampsonDistance'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('sampsonDistance');
    this.appendValueInput('pt1')
        .appendField('pt1')
        .setCheck('image');
    this.appendValueInput('pt2')
        .appendField('pt2')
        .setCheck('image');
    this.appendValueInput('F')
        .appendField('F')
        .setCheck('image');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_sampsonDistance');
  },
};
Blockly.Blocks['calib3d_estimateAffine3D'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('estimateAffine3D');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('dst')
        .appendField('dst')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_estimateAffine3D');
  },
};
Blockly.Blocks['calib3d_estimateTranslation3D'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('estimateTranslation3D');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('dst')
        .appendField('dst')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_estimateTranslation3D');
  },
};
Blockly.Blocks['calib3d_estimateAffine2D'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('estimateAffine2D');
    this.appendValueInput('from')
        .appendField('from')
        .setCheck('image');
    this.appendValueInput('to')
        .appendField('to')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_estimateAffine2D');
  },
};
Blockly.Blocks['calib3d_estimateAffinePartial2D'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('estimateAffinePartial2D');
    this.appendValueInput('from')
        .appendField('from')
        .setCheck('image');
    this.appendValueInput('to')
        .appendField('to')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_estimateAffinePartial2D');
  },
};
Blockly.Blocks['calib3d_decomposeHomographyMat'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('decomposeHomographyMat');
    this.appendValueInput('H')
        .appendField('H')
        .setCheck('image');
    this.appendValueInput('K')
        .appendField('K')
        .setCheck('image');
    this.setOutput(true);
    this.setTooltip('calib3d_decomposeHomographyMat');
  },
};
Blockly.Blocks['calib3d_filterHomographyDecompByVisibleRefpoints'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('filterHomographyDecompByVisibleRefpoints');
    this.appendValueInput('rotations')
        .appendField('rotations');
    this.appendValueInput('normals')
        .appendField('normals');
    this.appendValueInput('beforePoints')
        .appendField('beforePoints')
        .setCheck('image');
    this.appendValueInput('afterPoints')
        .appendField('afterPoints')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_filterHomographyDecompByVisibleRefpoints');
  },
};
Blockly.Blocks['calib3d_undistort'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('undistort');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.appendValueInput('distCoeffs')
        .appendField('distCoeffs')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_undistort');
  },
};
Blockly.Blocks['calib3d_initUndistortRectifyMap'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('initUndistortRectifyMap');
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.appendValueInput('distCoeffs')
        .appendField('distCoeffs')
        .setCheck('image');
    this.appendValueInput('R')
        .appendField('R')
        .setCheck('image');
    this.appendValueInput('newCameraMatrix')
        .appendField('newCameraMatrix')
        .setCheck('image');
    this.appendValueInput('size')
        .appendField('size')
        .setCheck('size');
    this.appendDummyInput()
        .appendField('m1type')
        .appendField(new Blockly.FieldTextInput('0'), 'm1type');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_initUndistortRectifyMap');
  },
};
Blockly.Blocks['calib3d_getDefaultNewCameraMatrix'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('getDefaultNewCameraMatrix');
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_getDefaultNewCameraMatrix');
  },
};
Blockly.Blocks['calib3d_undistortPoints'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('undistortPoints');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.appendValueInput('distCoeffs')
        .appendField('distCoeffs')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_undistortPoints');
  },
};
Blockly.Blocks['calib3d_StereoSGBM_getPreFilterCap'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('getPreFilterCap');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoSGBM'), 'StereoSGBM');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoSGBM_getPreFilterCap');
  },
  getVars: function(){return [this.getFieldValue('StereoSGBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoSGBM'))){this.setFieldValue(newName,'StereoSGBM');}},
};
Blockly.Blocks['calib3d_StereoSGBM_setPreFilterCap'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('setPreFilterCap');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoSGBM'), 'StereoSGBM');
    this.appendDummyInput()
        .appendField('preFilterCap')
        .appendField(new Blockly.FieldTextInput('0'), 'preFilterCap');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('calib3d_StereoSGBM_setPreFilterCap');
  },
  getVars: function(){return [this.getFieldValue('StereoSGBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoSGBM'))){this.setFieldValue(newName,'StereoSGBM');}},
};
Blockly.Blocks['calib3d_StereoSGBM_getUniquenessRatio'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('getUniquenessRatio');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoSGBM'), 'StereoSGBM');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoSGBM_getUniquenessRatio');
  },
  getVars: function(){return [this.getFieldValue('StereoSGBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoSGBM'))){this.setFieldValue(newName,'StereoSGBM');}},
};
Blockly.Blocks['calib3d_StereoSGBM_setUniquenessRatio'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('setUniquenessRatio');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoSGBM'), 'StereoSGBM');
    this.appendDummyInput()
        .appendField('uniquenessRatio')
        .appendField(new Blockly.FieldTextInput('0'), 'uniquenessRatio');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('calib3d_StereoSGBM_setUniquenessRatio');
  },
  getVars: function(){return [this.getFieldValue('StereoSGBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoSGBM'))){this.setFieldValue(newName,'StereoSGBM');}},
};
Blockly.Blocks['calib3d_StereoSGBM_getP1'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('getP1');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoSGBM'), 'StereoSGBM');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoSGBM_getP1');
  },
  getVars: function(){return [this.getFieldValue('StereoSGBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoSGBM'))){this.setFieldValue(newName,'StereoSGBM');}},
};
Blockly.Blocks['calib3d_StereoSGBM_setP1'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('setP1');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoSGBM'), 'StereoSGBM');
    this.appendDummyInput()
        .appendField('P1')
        .appendField(new Blockly.FieldTextInput('0'), 'P1');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('calib3d_StereoSGBM_setP1');
  },
  getVars: function(){return [this.getFieldValue('StereoSGBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoSGBM'))){this.setFieldValue(newName,'StereoSGBM');}},
};
Blockly.Blocks['calib3d_StereoSGBM_getP2'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('getP2');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoSGBM'), 'StereoSGBM');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoSGBM_getP2');
  },
  getVars: function(){return [this.getFieldValue('StereoSGBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoSGBM'))){this.setFieldValue(newName,'StereoSGBM');}},
};
Blockly.Blocks['calib3d_StereoSGBM_setP2'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('setP2');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoSGBM'), 'StereoSGBM');
    this.appendDummyInput()
        .appendField('P2')
        .appendField(new Blockly.FieldTextInput('0'), 'P2');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('calib3d_StereoSGBM_setP2');
  },
  getVars: function(){return [this.getFieldValue('StereoSGBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoSGBM'))){this.setFieldValue(newName,'StereoSGBM');}},
};
Blockly.Blocks['calib3d_StereoSGBM_getMode'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('getMode');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoSGBM'), 'StereoSGBM');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoSGBM_getMode');
  },
  getVars: function(){return [this.getFieldValue('StereoSGBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoSGBM'))){this.setFieldValue(newName,'StereoSGBM');}},
};
Blockly.Blocks['calib3d_StereoSGBM_setMode'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('setMode');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoSGBM'), 'StereoSGBM');
    this.appendDummyInput()
        .appendField('mode')
        .appendField(new Blockly.FieldTextInput('0'), 'mode');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('calib3d_StereoSGBM_setMode');
  },
  getVars: function(){return [this.getFieldValue('StereoSGBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoSGBM'))){this.setFieldValue(newName,'StereoSGBM');}},
};
Blockly.Blocks['calib3d_StereoSGBM_create'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoSGBM_create');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoSGBM'), 'StereoSGBM');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('calib3d_StereoSGBM_create');
  },
  getVars: function(){return [this.getFieldValue('StereoSGBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoSGBM'))){this.setFieldValue(newName,'StereoSGBM');}},
};
Blockly.Blocks['calib3d_CirclesGridFinderParameters_CirclesGridFinderParameters'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('CirclesGridFinderParameters');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CirclesGridFinderParameters'), 'CirclesGridFinderParameters');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('calib3d_CirclesGridFinderParameters_CirclesGridFinderParameters');
  },
  getVars: function(){return [this.getFieldValue('CirclesGridFinderParameters')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CirclesGridFinderParameters'))){this.setFieldValue(newName,'CirclesGridFinderParameters');}},
};
Blockly.Blocks['calib3d_StereoBM_getPreFilterType'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('getPreFilterType');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoBM'), 'StereoBM');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoBM_getPreFilterType');
  },
  getVars: function(){return [this.getFieldValue('StereoBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoBM'))){this.setFieldValue(newName,'StereoBM');}},
};
Blockly.Blocks['calib3d_StereoBM_setPreFilterType'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('setPreFilterType');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoBM'), 'StereoBM');
    this.appendDummyInput()
        .appendField('preFilterType')
        .appendField(new Blockly.FieldTextInput('0'), 'preFilterType');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('calib3d_StereoBM_setPreFilterType');
  },
  getVars: function(){return [this.getFieldValue('StereoBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoBM'))){this.setFieldValue(newName,'StereoBM');}},
};
Blockly.Blocks['calib3d_StereoBM_getPreFilterSize'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('getPreFilterSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoBM'), 'StereoBM');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoBM_getPreFilterSize');
  },
  getVars: function(){return [this.getFieldValue('StereoBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoBM'))){this.setFieldValue(newName,'StereoBM');}},
};
Blockly.Blocks['calib3d_StereoBM_setPreFilterSize'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('setPreFilterSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoBM'), 'StereoBM');
    this.appendDummyInput()
        .appendField('preFilterSize')
        .appendField(new Blockly.FieldTextInput('0'), 'preFilterSize');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('calib3d_StereoBM_setPreFilterSize');
  },
  getVars: function(){return [this.getFieldValue('StereoBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoBM'))){this.setFieldValue(newName,'StereoBM');}},
};
Blockly.Blocks['calib3d_StereoBM_getPreFilterCap'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('getPreFilterCap');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoBM'), 'StereoBM');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoBM_getPreFilterCap');
  },
  getVars: function(){return [this.getFieldValue('StereoBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoBM'))){this.setFieldValue(newName,'StereoBM');}},
};
Blockly.Blocks['calib3d_StereoBM_setPreFilterCap'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('setPreFilterCap');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoBM'), 'StereoBM');
    this.appendDummyInput()
        .appendField('preFilterCap')
        .appendField(new Blockly.FieldTextInput('0'), 'preFilterCap');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('calib3d_StereoBM_setPreFilterCap');
  },
  getVars: function(){return [this.getFieldValue('StereoBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoBM'))){this.setFieldValue(newName,'StereoBM');}},
};
Blockly.Blocks['calib3d_StereoBM_getTextureThreshold'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('getTextureThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoBM'), 'StereoBM');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoBM_getTextureThreshold');
  },
  getVars: function(){return [this.getFieldValue('StereoBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoBM'))){this.setFieldValue(newName,'StereoBM');}},
};
Blockly.Blocks['calib3d_StereoBM_setTextureThreshold'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('setTextureThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoBM'), 'StereoBM');
    this.appendDummyInput()
        .appendField('textureThreshold')
        .appendField(new Blockly.FieldTextInput('0'), 'textureThreshold');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('calib3d_StereoBM_setTextureThreshold');
  },
  getVars: function(){return [this.getFieldValue('StereoBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoBM'))){this.setFieldValue(newName,'StereoBM');}},
};
Blockly.Blocks['calib3d_StereoBM_getUniquenessRatio'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('getUniquenessRatio');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoBM'), 'StereoBM');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoBM_getUniquenessRatio');
  },
  getVars: function(){return [this.getFieldValue('StereoBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoBM'))){this.setFieldValue(newName,'StereoBM');}},
};
Blockly.Blocks['calib3d_StereoBM_setUniquenessRatio'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('setUniquenessRatio');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoBM'), 'StereoBM');
    this.appendDummyInput()
        .appendField('uniquenessRatio')
        .appendField(new Blockly.FieldTextInput('0'), 'uniquenessRatio');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('calib3d_StereoBM_setUniquenessRatio');
  },
  getVars: function(){return [this.getFieldValue('StereoBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoBM'))){this.setFieldValue(newName,'StereoBM');}},
};
Blockly.Blocks['calib3d_StereoBM_getSmallerBlockSize'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('getSmallerBlockSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoBM'), 'StereoBM');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoBM_getSmallerBlockSize');
  },
  getVars: function(){return [this.getFieldValue('StereoBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoBM'))){this.setFieldValue(newName,'StereoBM');}},
};
Blockly.Blocks['calib3d_StereoBM_setSmallerBlockSize'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('setSmallerBlockSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoBM'), 'StereoBM');
    this.appendDummyInput()
        .appendField('blockSize')
        .appendField(new Blockly.FieldTextInput('0'), 'blockSize');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('calib3d_StereoBM_setSmallerBlockSize');
  },
  getVars: function(){return [this.getFieldValue('StereoBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoBM'))){this.setFieldValue(newName,'StereoBM');}},
};
Blockly.Blocks['calib3d_StereoBM_getROI1'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('getROI1');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoBM'), 'StereoBM');
    this.setOutput(true);
    this.setTooltip('calib3d_StereoBM_getROI1');
  },
  getVars: function(){return [this.getFieldValue('StereoBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoBM'))){this.setFieldValue(newName,'StereoBM');}},
};
Blockly.Blocks['calib3d_StereoBM_setROI1'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('setROI1');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoBM'), 'StereoBM');
    this.appendValueInput('roi1')
        .appendField('roi1');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('calib3d_StereoBM_setROI1');
  },
  getVars: function(){return [this.getFieldValue('StereoBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoBM'))){this.setFieldValue(newName,'StereoBM');}},
};
Blockly.Blocks['calib3d_StereoBM_getROI2'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('getROI2');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoBM'), 'StereoBM');
    this.setOutput(true);
    this.setTooltip('calib3d_StereoBM_getROI2');
  },
  getVars: function(){return [this.getFieldValue('StereoBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoBM'))){this.setFieldValue(newName,'StereoBM');}},
};
Blockly.Blocks['calib3d_StereoBM_setROI2'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('setROI2');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoBM'), 'StereoBM');
    this.appendValueInput('roi2')
        .appendField('roi2');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('calib3d_StereoBM_setROI2');
  },
  getVars: function(){return [this.getFieldValue('StereoBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoBM'))){this.setFieldValue(newName,'StereoBM');}},
};
Blockly.Blocks['calib3d_StereoBM_create'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoBM_create');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoBM'), 'StereoBM');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('calib3d_StereoBM_create');
  },
  getVars: function(){return [this.getFieldValue('StereoBM')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoBM'))){this.setFieldValue(newName,'StereoBM');}},
};
Blockly.Blocks['calib3d_CALIB_USE_INTRINSIC_GUESS_projectPoints'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('projectPoints');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CALIB_USE_INTRINSIC_GUESS'), 'CALIB_USE_INTRINSIC_GUESS');
    this.appendValueInput('objectPoints')
        .appendField('objectPoints')
        .setCheck('image');
    this.appendValueInput('rvec')
        .appendField('rvec')
        .setCheck('image');
    this.appendValueInput('tvec')
        .appendField('tvec')
        .setCheck('image');
    this.appendValueInput('K')
        .appendField('K')
        .setCheck('image');
    this.appendValueInput('D')
        .appendField('D')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_CALIB_USE_INTRINSIC_GUESS_projectPoints');
  },
  getVars: function(){return [this.getFieldValue('CALIB_USE_INTRINSIC_GUESS')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CALIB_USE_INTRINSIC_GUESS'))){this.setFieldValue(newName,'CALIB_USE_INTRINSIC_GUESS');}},
};
Blockly.Blocks['calib3d_CALIB_USE_INTRINSIC_GUESS_distortPoints'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('distortPoints');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CALIB_USE_INTRINSIC_GUESS'), 'CALIB_USE_INTRINSIC_GUESS');
    this.appendValueInput('undistorted')
        .appendField('undistorted')
        .setCheck('image');
    this.appendValueInput('K')
        .appendField('K')
        .setCheck('image');
    this.appendValueInput('D')
        .appendField('D')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_CALIB_USE_INTRINSIC_GUESS_distortPoints');
  },
  getVars: function(){return [this.getFieldValue('CALIB_USE_INTRINSIC_GUESS')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CALIB_USE_INTRINSIC_GUESS'))){this.setFieldValue(newName,'CALIB_USE_INTRINSIC_GUESS');}},
};
Blockly.Blocks['calib3d_CALIB_USE_INTRINSIC_GUESS_undistortPoints'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('undistortPoints');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CALIB_USE_INTRINSIC_GUESS'), 'CALIB_USE_INTRINSIC_GUESS');
    this.appendValueInput('distorted')
        .appendField('distorted')
        .setCheck('image');
    this.appendValueInput('K')
        .appendField('K')
        .setCheck('image');
    this.appendValueInput('D')
        .appendField('D')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_CALIB_USE_INTRINSIC_GUESS_undistortPoints');
  },
  getVars: function(){return [this.getFieldValue('CALIB_USE_INTRINSIC_GUESS')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CALIB_USE_INTRINSIC_GUESS'))){this.setFieldValue(newName,'CALIB_USE_INTRINSIC_GUESS');}},
};
Blockly.Blocks['calib3d_CALIB_USE_INTRINSIC_GUESS_initUndistortRectifyMap'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('initUndistortRectifyMap');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CALIB_USE_INTRINSIC_GUESS'), 'CALIB_USE_INTRINSIC_GUESS');
    this.appendValueInput('K')
        .appendField('K')
        .setCheck('image');
    this.appendValueInput('D')
        .appendField('D')
        .setCheck('image');
    this.appendValueInput('R')
        .appendField('R')
        .setCheck('image');
    this.appendValueInput('P')
        .appendField('P')
        .setCheck('image');
    this.appendValueInput('size')
        .appendField('size')
        .setCheck('size');
    this.appendDummyInput()
        .appendField('m1type')
        .appendField(new Blockly.FieldTextInput('0'), 'm1type');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_CALIB_USE_INTRINSIC_GUESS_initUndistortRectifyMap');
  },
  getVars: function(){return [this.getFieldValue('CALIB_USE_INTRINSIC_GUESS')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CALIB_USE_INTRINSIC_GUESS'))){this.setFieldValue(newName,'CALIB_USE_INTRINSIC_GUESS');}},
};
Blockly.Blocks['calib3d_CALIB_USE_INTRINSIC_GUESS_undistortImage'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('undistortImage');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CALIB_USE_INTRINSIC_GUESS'), 'CALIB_USE_INTRINSIC_GUESS');
    this.appendValueInput('distorted')
        .appendField('distorted')
        .setCheck('image');
    this.appendValueInput('K')
        .appendField('K')
        .setCheck('image');
    this.appendValueInput('D')
        .appendField('D')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_CALIB_USE_INTRINSIC_GUESS_undistortImage');
  },
  getVars: function(){return [this.getFieldValue('CALIB_USE_INTRINSIC_GUESS')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CALIB_USE_INTRINSIC_GUESS'))){this.setFieldValue(newName,'CALIB_USE_INTRINSIC_GUESS');}},
};
Blockly.Blocks['calib3d_CALIB_USE_INTRINSIC_GUESS_estimateNewCameraMatrixForUndistortRectify'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('estimateNewCameraMatrixForUndistortRectify');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CALIB_USE_INTRINSIC_GUESS'), 'CALIB_USE_INTRINSIC_GUESS');
    this.appendValueInput('K')
        .appendField('K')
        .setCheck('image');
    this.appendValueInput('D')
        .appendField('D')
        .setCheck('image');
    this.appendValueInput('image_size')
        .appendField('image_size')
        .setCheck('size');
    this.appendValueInput('R')
        .appendField('R')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_CALIB_USE_INTRINSIC_GUESS_estimateNewCameraMatrixForUndistortRectify');
  },
  getVars: function(){return [this.getFieldValue('CALIB_USE_INTRINSIC_GUESS')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CALIB_USE_INTRINSIC_GUESS'))){this.setFieldValue(newName,'CALIB_USE_INTRINSIC_GUESS');}},
};
Blockly.Blocks['calib3d_CALIB_USE_INTRINSIC_GUESS_calibrate'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('calibrate');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CALIB_USE_INTRINSIC_GUESS'), 'CALIB_USE_INTRINSIC_GUESS');
    this.appendValueInput('objectPoints')
        .appendField('objectPoints');
    this.appendValueInput('imagePoints')
        .appendField('imagePoints');
    this.appendValueInput('image_size')
        .appendField('image_size')
        .setCheck('size');
    this.appendValueInput('K')
        .appendField('K')
        .setCheck('image');
    this.appendValueInput('D')
        .appendField('D')
        .setCheck('image');
    this.setOutput(true);
    this.setTooltip('calib3d_CALIB_USE_INTRINSIC_GUESS_calibrate');
  },
  getVars: function(){return [this.getFieldValue('CALIB_USE_INTRINSIC_GUESS')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CALIB_USE_INTRINSIC_GUESS'))){this.setFieldValue(newName,'CALIB_USE_INTRINSIC_GUESS');}},
};
Blockly.Blocks['calib3d_CALIB_USE_INTRINSIC_GUESS_stereoRectify'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('stereoRectify');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CALIB_USE_INTRINSIC_GUESS'), 'CALIB_USE_INTRINSIC_GUESS');
    this.appendValueInput('K1')
        .appendField('K1')
        .setCheck('image');
    this.appendValueInput('D1')
        .appendField('D1')
        .setCheck('image');
    this.appendValueInput('K2')
        .appendField('K2')
        .setCheck('image');
    this.appendValueInput('D2')
        .appendField('D2')
        .setCheck('image');
    this.appendValueInput('imageSize')
        .appendField('imageSize')
        .setCheck('size');
    this.appendValueInput('R')
        .appendField('R')
        .setCheck('image');
    this.appendValueInput('tvec')
        .appendField('tvec')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('flags')
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_CALIB_USE_INTRINSIC_GUESS_stereoRectify');
  },
  getVars: function(){return [this.getFieldValue('CALIB_USE_INTRINSIC_GUESS')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CALIB_USE_INTRINSIC_GUESS'))){this.setFieldValue(newName,'CALIB_USE_INTRINSIC_GUESS');}},
};
Blockly.Blocks['calib3d_CALIB_USE_INTRINSIC_GUESS_stereoCalibrate'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('stereoCalibrate');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('CALIB_USE_INTRINSIC_GUESS'), 'CALIB_USE_INTRINSIC_GUESS');
    this.appendValueInput('objectPoints')
        .appendField('objectPoints');
    this.appendValueInput('imagePoints1')
        .appendField('imagePoints1');
    this.appendValueInput('imagePoints2')
        .appendField('imagePoints2');
    this.appendValueInput('K1')
        .appendField('K1')
        .setCheck('image');
    this.appendValueInput('D1')
        .appendField('D1')
        .setCheck('image');
    this.appendValueInput('K2')
        .appendField('K2')
        .setCheck('image');
    this.appendValueInput('D2')
        .appendField('D2')
        .setCheck('image');
    this.appendValueInput('imageSize')
        .appendField('imageSize')
        .setCheck('size');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_CALIB_USE_INTRINSIC_GUESS_stereoCalibrate');
  },
  getVars: function(){return [this.getFieldValue('CALIB_USE_INTRINSIC_GUESS')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('CALIB_USE_INTRINSIC_GUESS'))){this.setFieldValue(newName,'CALIB_USE_INTRINSIC_GUESS');}},
};
Blockly.Blocks['calib3d_StereoMatcher_compute'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('compute');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoMatcher'), 'StereoMatcher');
    this.appendValueInput('left')
        .appendField('left')
        .setCheck('image');
    this.appendValueInput('right')
        .appendField('right')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_StereoMatcher_compute');
  },
  getVars: function(){return [this.getFieldValue('StereoMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoMatcher'))){this.setFieldValue(newName,'StereoMatcher');}},
};
Blockly.Blocks['calib3d_StereoMatcher_getMinDisparity'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('getMinDisparity');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoMatcher'), 'StereoMatcher');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoMatcher_getMinDisparity');
  },
  getVars: function(){return [this.getFieldValue('StereoMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoMatcher'))){this.setFieldValue(newName,'StereoMatcher');}},
};
Blockly.Blocks['calib3d_StereoMatcher_setMinDisparity'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('setMinDisparity');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoMatcher'), 'StereoMatcher');
    this.appendDummyInput()
        .appendField('minDisparity')
        .appendField(new Blockly.FieldTextInput('0'), 'minDisparity');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('calib3d_StereoMatcher_setMinDisparity');
  },
  getVars: function(){return [this.getFieldValue('StereoMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoMatcher'))){this.setFieldValue(newName,'StereoMatcher');}},
};
Blockly.Blocks['calib3d_StereoMatcher_getNumDisparities'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('getNumDisparities');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoMatcher'), 'StereoMatcher');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoMatcher_getNumDisparities');
  },
  getVars: function(){return [this.getFieldValue('StereoMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoMatcher'))){this.setFieldValue(newName,'StereoMatcher');}},
};
Blockly.Blocks['calib3d_StereoMatcher_setNumDisparities'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('setNumDisparities');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoMatcher'), 'StereoMatcher');
    this.appendDummyInput()
        .appendField('numDisparities')
        .appendField(new Blockly.FieldTextInput('0'), 'numDisparities');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('calib3d_StereoMatcher_setNumDisparities');
  },
  getVars: function(){return [this.getFieldValue('StereoMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoMatcher'))){this.setFieldValue(newName,'StereoMatcher');}},
};
Blockly.Blocks['calib3d_StereoMatcher_getBlockSize'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('getBlockSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoMatcher'), 'StereoMatcher');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoMatcher_getBlockSize');
  },
  getVars: function(){return [this.getFieldValue('StereoMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoMatcher'))){this.setFieldValue(newName,'StereoMatcher');}},
};
Blockly.Blocks['calib3d_StereoMatcher_setBlockSize'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('setBlockSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoMatcher'), 'StereoMatcher');
    this.appendDummyInput()
        .appendField('blockSize')
        .appendField(new Blockly.FieldTextInput('0'), 'blockSize');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('calib3d_StereoMatcher_setBlockSize');
  },
  getVars: function(){return [this.getFieldValue('StereoMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoMatcher'))){this.setFieldValue(newName,'StereoMatcher');}},
};
Blockly.Blocks['calib3d_StereoMatcher_getSpeckleWindowSize'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('getSpeckleWindowSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoMatcher'), 'StereoMatcher');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoMatcher_getSpeckleWindowSize');
  },
  getVars: function(){return [this.getFieldValue('StereoMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoMatcher'))){this.setFieldValue(newName,'StereoMatcher');}},
};
Blockly.Blocks['calib3d_StereoMatcher_setSpeckleWindowSize'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('setSpeckleWindowSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoMatcher'), 'StereoMatcher');
    this.appendDummyInput()
        .appendField('speckleWindowSize')
        .appendField(new Blockly.FieldTextInput('0'), 'speckleWindowSize');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('calib3d_StereoMatcher_setSpeckleWindowSize');
  },
  getVars: function(){return [this.getFieldValue('StereoMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoMatcher'))){this.setFieldValue(newName,'StereoMatcher');}},
};
Blockly.Blocks['calib3d_StereoMatcher_getSpeckleRange'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('getSpeckleRange');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoMatcher'), 'StereoMatcher');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoMatcher_getSpeckleRange');
  },
  getVars: function(){return [this.getFieldValue('StereoMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoMatcher'))){this.setFieldValue(newName,'StereoMatcher');}},
};
Blockly.Blocks['calib3d_StereoMatcher_setSpeckleRange'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('setSpeckleRange');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoMatcher'), 'StereoMatcher');
    this.appendDummyInput()
        .appendField('speckleRange')
        .appendField(new Blockly.FieldTextInput('0'), 'speckleRange');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('calib3d_StereoMatcher_setSpeckleRange');
  },
  getVars: function(){return [this.getFieldValue('StereoMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoMatcher'))){this.setFieldValue(newName,'StereoMatcher');}},
};
Blockly.Blocks['calib3d_StereoMatcher_getDisp12MaxDiff'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('getDisp12MaxDiff');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoMatcher'), 'StereoMatcher');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoMatcher_getDisp12MaxDiff');
  },
  getVars: function(){return [this.getFieldValue('StereoMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoMatcher'))){this.setFieldValue(newName,'StereoMatcher');}},
};
Blockly.Blocks['calib3d_StereoMatcher_setDisp12MaxDiff'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('setDisp12MaxDiff');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('StereoMatcher'), 'StereoMatcher');
    this.appendDummyInput()
        .appendField('disp12MaxDiff')
        .appendField(new Blockly.FieldTextInput('0'), 'disp12MaxDiff');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('calib3d_StereoMatcher_setDisp12MaxDiff');
  },
  getVars: function(){return [this.getFieldValue('StereoMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('StereoMatcher'))){this.setFieldValue(newName,'StereoMatcher');}},
};
Blockly.Blocks['features2d_drawMatches'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('drawMatches');
    this.appendValueInput('img1')
        .appendField('img1')
        .setCheck('image');
    this.appendValueInput('keypoints1')
        .appendField('keypoints1');
    this.appendValueInput('img2')
        .appendField('img2')
        .setCheck('image');
    this.appendValueInput('keypoints2')
        .appendField('keypoints2');
    this.appendValueInput('matches1to2')
        .appendField('matches1to2');
    this.appendValueInput('outImg')
        .appendField('outImg')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('features2d_drawMatches');
  },
};
Blockly.Blocks['features2d_AffineFeature_create'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('AffineFeature_create');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AffineFeature'), 'AffineFeature');
    this.appendValueInput('backend')
        .appendField('backend');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_AffineFeature_create');
  },
  getVars: function(){return [this.getFieldValue('AffineFeature')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AffineFeature'))){this.setFieldValue(newName,'AffineFeature');}},
};
Blockly.Blocks['features2d_AffineFeature_setViewParams'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setViewParams');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AffineFeature'), 'AffineFeature');
    this.appendValueInput('tilts')
        .appendField('tilts');
    this.appendValueInput('rolls')
        .appendField('rolls');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_AffineFeature_setViewParams');
  },
  getVars: function(){return [this.getFieldValue('AffineFeature')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AffineFeature'))){this.setFieldValue(newName,'AffineFeature');}},
};
Blockly.Blocks['features2d_AffineFeature_getViewParams'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getViewParams');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AffineFeature'), 'AffineFeature');
    this.appendValueInput('tilts')
        .appendField('tilts');
    this.appendValueInput('rolls')
        .appendField('rolls');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_AffineFeature_getViewParams');
  },
  getVars: function(){return [this.getFieldValue('AffineFeature')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AffineFeature'))){this.setFieldValue(newName,'AffineFeature');}},
};
Blockly.Blocks['features2d_AffineFeature_getDefaultName'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getDefaultName');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AffineFeature'), 'AffineFeature');
    this.setOutput(true,'String');
    this.setTooltip('features2d_AffineFeature_getDefaultName');
  },
  getVars: function(){return [this.getFieldValue('AffineFeature')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AffineFeature'))){this.setFieldValue(newName,'AffineFeature');}},
};
Blockly.Blocks['features2d_BFMatcher_BFMatcher'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('BFMatcher');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BFMatcher'), 'BFMatcher');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_BFMatcher_BFMatcher');
  },
  getVars: function(){return [this.getFieldValue('BFMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BFMatcher'))){this.setFieldValue(newName,'BFMatcher');}},
};
Blockly.Blocks['features2d_BFMatcher_create'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('BFMatcher_create');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BFMatcher'), 'BFMatcher');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_BFMatcher_create');
  },
  getVars: function(){return [this.getFieldValue('BFMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BFMatcher'))){this.setFieldValue(newName,'BFMatcher');}},
};
Blockly.Blocks['features2d_Feature2D_detect'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('detect');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Feature2D'), 'Feature2D');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.setOutput(true);
    this.setTooltip('features2d_Feature2D_detect');
  },
  getVars: function(){return [this.getFieldValue('Feature2D')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Feature2D'))){this.setFieldValue(newName,'Feature2D');}},
};
Blockly.Blocks['features2d_Feature2D_compute'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('compute');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Feature2D'), 'Feature2D');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendValueInput('keypoints')
        .appendField('keypoints');
    this.setOutput(true,'image');
    this.setTooltip('features2d_Feature2D_compute');
  },
  getVars: function(){return [this.getFieldValue('Feature2D')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Feature2D'))){this.setFieldValue(newName,'Feature2D');}},
};
Blockly.Blocks['features2d_Feature2D_detectAndCompute'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('detectAndCompute');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Feature2D'), 'Feature2D');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendValueInput('mask')
        .appendField('mask')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('features2d_Feature2D_detectAndCompute');
  },
  getVars: function(){return [this.getFieldValue('Feature2D')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Feature2D'))){this.setFieldValue(newName,'Feature2D');}},
};
Blockly.Blocks['features2d_Feature2D_descriptorSize'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('descriptorSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Feature2D'), 'Feature2D');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_Feature2D_descriptorSize');
  },
  getVars: function(){return [this.getFieldValue('Feature2D')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Feature2D'))){this.setFieldValue(newName,'Feature2D');}},
};
Blockly.Blocks['features2d_Feature2D_descriptorType'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('descriptorType');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Feature2D'), 'Feature2D');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_Feature2D_descriptorType');
  },
  getVars: function(){return [this.getFieldValue('Feature2D')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Feature2D'))){this.setFieldValue(newName,'Feature2D');}},
};
Blockly.Blocks['features2d_Feature2D_defaultNorm'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('defaultNorm');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Feature2D'), 'Feature2D');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_Feature2D_defaultNorm');
  },
  getVars: function(){return [this.getFieldValue('Feature2D')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Feature2D'))){this.setFieldValue(newName,'Feature2D');}},
};
Blockly.Blocks['features2d_Feature2D_write'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('write');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Feature2D'), 'Feature2D');
    this.appendValueInput('fileName')
        .appendField('fileName')
        .setCheck('String');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_Feature2D_write');
  },
  getVars: function(){return [this.getFieldValue('Feature2D')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Feature2D'))){this.setFieldValue(newName,'Feature2D');}},
};
Blockly.Blocks['features2d_Feature2D_read'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('read');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Feature2D'), 'Feature2D');
    this.appendValueInput('fileName')
        .appendField('fileName')
        .setCheck('String');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_Feature2D_read');
  },
  getVars: function(){return [this.getFieldValue('Feature2D')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Feature2D'))){this.setFieldValue(newName,'Feature2D');}},
};
Blockly.Blocks['features2d_Feature2D_empty'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('empty');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Feature2D'), 'Feature2D');
    this.setOutput(true);
    this.setTooltip('features2d_Feature2D_empty');
  },
  getVars: function(){return [this.getFieldValue('Feature2D')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Feature2D'))){this.setFieldValue(newName,'Feature2D');}},
};
Blockly.Blocks['features2d_Feature2D_getDefaultName'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getDefaultName');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('Feature2D'), 'Feature2D');
    this.setOutput(true,'String');
    this.setTooltip('features2d_Feature2D_getDefaultName');
  },
  getVars: function(){return [this.getFieldValue('Feature2D')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('Feature2D'))){this.setFieldValue(newName,'Feature2D');}},
};
Blockly.Blocks['features2d_BRISK_create'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('BRISK_create');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BRISK'), 'BRISK');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_BRISK_create');
  },
  getVars: function(){return [this.getFieldValue('BRISK')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BRISK'))){this.setFieldValue(newName,'BRISK');}},
};
Blockly.Blocks['features2d_BRISK_getDefaultName'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getDefaultName');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BRISK'), 'BRISK');
    this.setOutput(true,'String');
    this.setTooltip('features2d_BRISK_getDefaultName');
  },
  getVars: function(){return [this.getFieldValue('BRISK')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BRISK'))){this.setFieldValue(newName,'BRISK');}},
};
Blockly.Blocks['features2d_BRISK_setThreshold'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BRISK'), 'BRISK');
    this.appendDummyInput()
        .appendField('threshold')
        .appendField(new Blockly.FieldTextInput('0'), 'threshold');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_BRISK_setThreshold');
  },
  getVars: function(){return [this.getFieldValue('BRISK')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BRISK'))){this.setFieldValue(newName,'BRISK');}},
};
Blockly.Blocks['features2d_BRISK_getThreshold'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BRISK'), 'BRISK');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_BRISK_getThreshold');
  },
  getVars: function(){return [this.getFieldValue('BRISK')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BRISK'))){this.setFieldValue(newName,'BRISK');}},
};
Blockly.Blocks['features2d_BRISK_setOctaves'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setOctaves');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BRISK'), 'BRISK');
    this.appendDummyInput()
        .appendField('octaves')
        .appendField(new Blockly.FieldTextInput('0'), 'octaves');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_BRISK_setOctaves');
  },
  getVars: function(){return [this.getFieldValue('BRISK')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BRISK'))){this.setFieldValue(newName,'BRISK');}},
};
Blockly.Blocks['features2d_BRISK_getOctaves'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getOctaves');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BRISK'), 'BRISK');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_BRISK_getOctaves');
  },
  getVars: function(){return [this.getFieldValue('BRISK')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BRISK'))){this.setFieldValue(newName,'BRISK');}},
};
Blockly.Blocks['features2d_AgastFeatureDetector_create'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('AgastFeatureDetector_create');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AgastFeatureDetector'), 'AgastFeatureDetector');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_AgastFeatureDetector_create');
  },
  getVars: function(){return [this.getFieldValue('AgastFeatureDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AgastFeatureDetector'))){this.setFieldValue(newName,'AgastFeatureDetector');}},
};
Blockly.Blocks['features2d_AgastFeatureDetector_setThreshold'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AgastFeatureDetector'), 'AgastFeatureDetector');
    this.appendDummyInput()
        .appendField('threshold')
        .appendField(new Blockly.FieldTextInput('0'), 'threshold');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_AgastFeatureDetector_setThreshold');
  },
  getVars: function(){return [this.getFieldValue('AgastFeatureDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AgastFeatureDetector'))){this.setFieldValue(newName,'AgastFeatureDetector');}},
};
Blockly.Blocks['features2d_AgastFeatureDetector_getThreshold'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AgastFeatureDetector'), 'AgastFeatureDetector');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_AgastFeatureDetector_getThreshold');
  },
  getVars: function(){return [this.getFieldValue('AgastFeatureDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AgastFeatureDetector'))){this.setFieldValue(newName,'AgastFeatureDetector');}},
};
Blockly.Blocks['features2d_AgastFeatureDetector_setNonmaxSuppression'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setNonmaxSuppression');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AgastFeatureDetector'), 'AgastFeatureDetector');
    this.appendValueInput('f')
        .appendField('f');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_AgastFeatureDetector_setNonmaxSuppression');
  },
  getVars: function(){return [this.getFieldValue('AgastFeatureDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AgastFeatureDetector'))){this.setFieldValue(newName,'AgastFeatureDetector');}},
};
Blockly.Blocks['features2d_AgastFeatureDetector_getNonmaxSuppression'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getNonmaxSuppression');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AgastFeatureDetector'), 'AgastFeatureDetector');
    this.setOutput(true);
    this.setTooltip('features2d_AgastFeatureDetector_getNonmaxSuppression');
  },
  getVars: function(){return [this.getFieldValue('AgastFeatureDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AgastFeatureDetector'))){this.setFieldValue(newName,'AgastFeatureDetector');}},
};
Blockly.Blocks['features2d_AgastFeatureDetector_setType'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setType');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AgastFeatureDetector'), 'AgastFeatureDetector');
    this.appendValueInput('type')
        .appendField('type');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_AgastFeatureDetector_setType');
  },
  getVars: function(){return [this.getFieldValue('AgastFeatureDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AgastFeatureDetector'))){this.setFieldValue(newName,'AgastFeatureDetector');}},
};
Blockly.Blocks['features2d_AgastFeatureDetector_getType'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getType');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AgastFeatureDetector'), 'AgastFeatureDetector');
    this.setOutput(true);
    this.setTooltip('features2d_AgastFeatureDetector_getType');
  },
  getVars: function(){return [this.getFieldValue('AgastFeatureDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AgastFeatureDetector'))){this.setFieldValue(newName,'AgastFeatureDetector');}},
};
Blockly.Blocks['features2d_AgastFeatureDetector_getDefaultName'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getDefaultName');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AgastFeatureDetector'), 'AgastFeatureDetector');
    this.setOutput(true,'String');
    this.setTooltip('features2d_AgastFeatureDetector_getDefaultName');
  },
  getVars: function(){return [this.getFieldValue('AgastFeatureDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AgastFeatureDetector'))){this.setFieldValue(newName,'AgastFeatureDetector');}},
};
Blockly.Blocks['features2d_GFTTDetector_create'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('GFTTDetector_create');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GFTTDetector'), 'GFTTDetector');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_GFTTDetector_create');
  },
  getVars: function(){return [this.getFieldValue('GFTTDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GFTTDetector'))){this.setFieldValue(newName,'GFTTDetector');}},
};
Blockly.Blocks['features2d_GFTTDetector_setMaxFeatures'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setMaxFeatures');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GFTTDetector'), 'GFTTDetector');
    this.appendDummyInput()
        .appendField('maxFeatures')
        .appendField(new Blockly.FieldTextInput('0'), 'maxFeatures');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_GFTTDetector_setMaxFeatures');
  },
  getVars: function(){return [this.getFieldValue('GFTTDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GFTTDetector'))){this.setFieldValue(newName,'GFTTDetector');}},
};
Blockly.Blocks['features2d_GFTTDetector_getMaxFeatures'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getMaxFeatures');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GFTTDetector'), 'GFTTDetector');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_GFTTDetector_getMaxFeatures');
  },
  getVars: function(){return [this.getFieldValue('GFTTDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GFTTDetector'))){this.setFieldValue(newName,'GFTTDetector');}},
};
Blockly.Blocks['features2d_GFTTDetector_setQualityLevel'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setQualityLevel');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GFTTDetector'), 'GFTTDetector');
    this.appendDummyInput()
        .appendField('qlevel')
        .appendField(new Blockly.FieldTextInput('0'), 'qlevel');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_GFTTDetector_setQualityLevel');
  },
  getVars: function(){return [this.getFieldValue('GFTTDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GFTTDetector'))){this.setFieldValue(newName,'GFTTDetector');}},
};
Blockly.Blocks['features2d_GFTTDetector_getQualityLevel'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getQualityLevel');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GFTTDetector'), 'GFTTDetector');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_GFTTDetector_getQualityLevel');
  },
  getVars: function(){return [this.getFieldValue('GFTTDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GFTTDetector'))){this.setFieldValue(newName,'GFTTDetector');}},
};
Blockly.Blocks['features2d_GFTTDetector_setMinDistance'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setMinDistance');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GFTTDetector'), 'GFTTDetector');
    this.appendDummyInput()
        .appendField('minDistance')
        .appendField(new Blockly.FieldTextInput('0'), 'minDistance');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_GFTTDetector_setMinDistance');
  },
  getVars: function(){return [this.getFieldValue('GFTTDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GFTTDetector'))){this.setFieldValue(newName,'GFTTDetector');}},
};
Blockly.Blocks['features2d_GFTTDetector_getMinDistance'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getMinDistance');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GFTTDetector'), 'GFTTDetector');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_GFTTDetector_getMinDistance');
  },
  getVars: function(){return [this.getFieldValue('GFTTDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GFTTDetector'))){this.setFieldValue(newName,'GFTTDetector');}},
};
Blockly.Blocks['features2d_GFTTDetector_setBlockSize'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setBlockSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GFTTDetector'), 'GFTTDetector');
    this.appendDummyInput()
        .appendField('blockSize')
        .appendField(new Blockly.FieldTextInput('0'), 'blockSize');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_GFTTDetector_setBlockSize');
  },
  getVars: function(){return [this.getFieldValue('GFTTDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GFTTDetector'))){this.setFieldValue(newName,'GFTTDetector');}},
};
Blockly.Blocks['features2d_GFTTDetector_getBlockSize'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getBlockSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GFTTDetector'), 'GFTTDetector');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_GFTTDetector_getBlockSize');
  },
  getVars: function(){return [this.getFieldValue('GFTTDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GFTTDetector'))){this.setFieldValue(newName,'GFTTDetector');}},
};
Blockly.Blocks['features2d_GFTTDetector_setHarrisDetector'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setHarrisDetector');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GFTTDetector'), 'GFTTDetector');
    this.appendValueInput('val')
        .appendField('val');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_GFTTDetector_setHarrisDetector');
  },
  getVars: function(){return [this.getFieldValue('GFTTDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GFTTDetector'))){this.setFieldValue(newName,'GFTTDetector');}},
};
Blockly.Blocks['features2d_GFTTDetector_getHarrisDetector'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getHarrisDetector');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GFTTDetector'), 'GFTTDetector');
    this.setOutput(true);
    this.setTooltip('features2d_GFTTDetector_getHarrisDetector');
  },
  getVars: function(){return [this.getFieldValue('GFTTDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GFTTDetector'))){this.setFieldValue(newName,'GFTTDetector');}},
};
Blockly.Blocks['features2d_GFTTDetector_setK'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setK');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GFTTDetector'), 'GFTTDetector');
    this.appendDummyInput()
        .appendField('k')
        .appendField(new Blockly.FieldTextInput('0'), 'k');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_GFTTDetector_setK');
  },
  getVars: function(){return [this.getFieldValue('GFTTDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GFTTDetector'))){this.setFieldValue(newName,'GFTTDetector');}},
};
Blockly.Blocks['features2d_GFTTDetector_getK'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getK');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GFTTDetector'), 'GFTTDetector');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_GFTTDetector_getK');
  },
  getVars: function(){return [this.getFieldValue('GFTTDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GFTTDetector'))){this.setFieldValue(newName,'GFTTDetector');}},
};
Blockly.Blocks['features2d_GFTTDetector_getDefaultName'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getDefaultName');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('GFTTDetector'), 'GFTTDetector');
    this.setOutput(true,'String');
    this.setTooltip('features2d_GFTTDetector_getDefaultName');
  },
  getVars: function(){return [this.getFieldValue('GFTTDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('GFTTDetector'))){this.setFieldValue(newName,'GFTTDetector');}},
};
Blockly.Blocks['features2d_DescriptorMatcher_add'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('add');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DescriptorMatcher'), 'DescriptorMatcher');
    this.appendValueInput('descriptors')
        .appendField('descriptors');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_DescriptorMatcher_add');
  },
  getVars: function(){return [this.getFieldValue('DescriptorMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DescriptorMatcher'))){this.setFieldValue(newName,'DescriptorMatcher');}},
};
Blockly.Blocks['features2d_DescriptorMatcher_getTrainDescriptors'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getTrainDescriptors');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DescriptorMatcher'), 'DescriptorMatcher');
    this.setOutput(true);
    this.setTooltip('features2d_DescriptorMatcher_getTrainDescriptors');
  },
  getVars: function(){return [this.getFieldValue('DescriptorMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DescriptorMatcher'))){this.setFieldValue(newName,'DescriptorMatcher');}},
};
Blockly.Blocks['features2d_DescriptorMatcher_clear'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('clear');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DescriptorMatcher'), 'DescriptorMatcher');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_DescriptorMatcher_clear');
  },
  getVars: function(){return [this.getFieldValue('DescriptorMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DescriptorMatcher'))){this.setFieldValue(newName,'DescriptorMatcher');}},
};
Blockly.Blocks['features2d_DescriptorMatcher_empty'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('empty');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DescriptorMatcher'), 'DescriptorMatcher');
    this.setOutput(true);
    this.setTooltip('features2d_DescriptorMatcher_empty');
  },
  getVars: function(){return [this.getFieldValue('DescriptorMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DescriptorMatcher'))){this.setFieldValue(newName,'DescriptorMatcher');}},
};
Blockly.Blocks['features2d_DescriptorMatcher_isMaskSupported'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('isMaskSupported');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DescriptorMatcher'), 'DescriptorMatcher');
    this.setOutput(true);
    this.setTooltip('features2d_DescriptorMatcher_isMaskSupported');
  },
  getVars: function(){return [this.getFieldValue('DescriptorMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DescriptorMatcher'))){this.setFieldValue(newName,'DescriptorMatcher');}},
};
Blockly.Blocks['features2d_DescriptorMatcher_train'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('train');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DescriptorMatcher'), 'DescriptorMatcher');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_DescriptorMatcher_train');
  },
  getVars: function(){return [this.getFieldValue('DescriptorMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DescriptorMatcher'))){this.setFieldValue(newName,'DescriptorMatcher');}},
};
Blockly.Blocks['features2d_DescriptorMatcher_match'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('match');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DescriptorMatcher'), 'DescriptorMatcher');
    this.appendValueInput('queryDescriptors')
        .appendField('queryDescriptors')
        .setCheck('image');
    this.appendValueInput('trainDescriptors')
        .appendField('trainDescriptors')
        .setCheck('image');
    this.setOutput(true);
    this.setTooltip('features2d_DescriptorMatcher_match');
  },
  getVars: function(){return [this.getFieldValue('DescriptorMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DescriptorMatcher'))){this.setFieldValue(newName,'DescriptorMatcher');}},
};
Blockly.Blocks['features2d_DescriptorMatcher_knnMatch'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('knnMatch');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DescriptorMatcher'), 'DescriptorMatcher');
    this.appendValueInput('queryDescriptors')
        .appendField('queryDescriptors')
        .setCheck('image');
    this.appendValueInput('trainDescriptors')
        .appendField('trainDescriptors')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('k')
        .appendField(new Blockly.FieldTextInput('0'), 'k');
    this.setOutput(true);
    this.setTooltip('features2d_DescriptorMatcher_knnMatch');
  },
  getVars: function(){return [this.getFieldValue('DescriptorMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DescriptorMatcher'))){this.setFieldValue(newName,'DescriptorMatcher');}},
};
Blockly.Blocks['features2d_DescriptorMatcher_radiusMatch'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('radiusMatch');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DescriptorMatcher'), 'DescriptorMatcher');
    this.appendValueInput('queryDescriptors')
        .appendField('queryDescriptors')
        .setCheck('image');
    this.appendValueInput('trainDescriptors')
        .appendField('trainDescriptors')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('maxDistance')
        .appendField(new Blockly.FieldTextInput('0'), 'maxDistance');
    this.setOutput(true);
    this.setTooltip('features2d_DescriptorMatcher_radiusMatch');
  },
  getVars: function(){return [this.getFieldValue('DescriptorMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DescriptorMatcher'))){this.setFieldValue(newName,'DescriptorMatcher');}},
};
Blockly.Blocks['features2d_DescriptorMatcher_write'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('write');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DescriptorMatcher'), 'DescriptorMatcher');
    this.appendValueInput('fileName')
        .appendField('fileName')
        .setCheck('String');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_DescriptorMatcher_write');
  },
  getVars: function(){return [this.getFieldValue('DescriptorMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DescriptorMatcher'))){this.setFieldValue(newName,'DescriptorMatcher');}},
};
Blockly.Blocks['features2d_DescriptorMatcher_read'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('read');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DescriptorMatcher'), 'DescriptorMatcher');
    this.appendValueInput('fileName')
        .appendField('fileName')
        .setCheck('String');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_DescriptorMatcher_read');
  },
  getVars: function(){return [this.getFieldValue('DescriptorMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DescriptorMatcher'))){this.setFieldValue(newName,'DescriptorMatcher');}},
};
Blockly.Blocks['features2d_DescriptorMatcher_clone'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('clone');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DescriptorMatcher'), 'DescriptorMatcher');
    this.setOutput(true);
    this.setTooltip('features2d_DescriptorMatcher_clone');
  },
  getVars: function(){return [this.getFieldValue('DescriptorMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DescriptorMatcher'))){this.setFieldValue(newName,'DescriptorMatcher');}},
};
Blockly.Blocks['features2d_DescriptorMatcher_create'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('DescriptorMatcher_create');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DescriptorMatcher'), 'DescriptorMatcher');
    this.appendValueInput('descriptorMatcherType')
        .appendField('descriptorMatcherType')
        .setCheck('String');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_DescriptorMatcher_create');
  },
  getVars: function(){return [this.getFieldValue('DescriptorMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DescriptorMatcher'))){this.setFieldValue(newName,'DescriptorMatcher');}},
};
Blockly.Blocks['features2d_KAZE_create'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('KAZE_create');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('KAZE'), 'KAZE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_KAZE_create');
  },
  getVars: function(){return [this.getFieldValue('KAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('KAZE'))){this.setFieldValue(newName,'KAZE');}},
};
Blockly.Blocks['features2d_KAZE_setExtended'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setExtended');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('KAZE'), 'KAZE');
    this.appendValueInput('extended')
        .appendField('extended');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_KAZE_setExtended');
  },
  getVars: function(){return [this.getFieldValue('KAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('KAZE'))){this.setFieldValue(newName,'KAZE');}},
};
Blockly.Blocks['features2d_KAZE_getExtended'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getExtended');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('KAZE'), 'KAZE');
    this.setOutput(true);
    this.setTooltip('features2d_KAZE_getExtended');
  },
  getVars: function(){return [this.getFieldValue('KAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('KAZE'))){this.setFieldValue(newName,'KAZE');}},
};
Blockly.Blocks['features2d_KAZE_setUpright'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setUpright');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('KAZE'), 'KAZE');
    this.appendValueInput('upright')
        .appendField('upright');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_KAZE_setUpright');
  },
  getVars: function(){return [this.getFieldValue('KAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('KAZE'))){this.setFieldValue(newName,'KAZE');}},
};
Blockly.Blocks['features2d_KAZE_getUpright'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getUpright');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('KAZE'), 'KAZE');
    this.setOutput(true);
    this.setTooltip('features2d_KAZE_getUpright');
  },
  getVars: function(){return [this.getFieldValue('KAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('KAZE'))){this.setFieldValue(newName,'KAZE');}},
};
Blockly.Blocks['features2d_KAZE_setThreshold'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('KAZE'), 'KAZE');
    this.appendDummyInput()
        .appendField('threshold')
        .appendField(new Blockly.FieldTextInput('0'), 'threshold');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_KAZE_setThreshold');
  },
  getVars: function(){return [this.getFieldValue('KAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('KAZE'))){this.setFieldValue(newName,'KAZE');}},
};
Blockly.Blocks['features2d_KAZE_getThreshold'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('KAZE'), 'KAZE');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_KAZE_getThreshold');
  },
  getVars: function(){return [this.getFieldValue('KAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('KAZE'))){this.setFieldValue(newName,'KAZE');}},
};
Blockly.Blocks['features2d_KAZE_setNOctaves'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setNOctaves');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('KAZE'), 'KAZE');
    this.appendDummyInput()
        .appendField('octaves')
        .appendField(new Blockly.FieldTextInput('0'), 'octaves');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_KAZE_setNOctaves');
  },
  getVars: function(){return [this.getFieldValue('KAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('KAZE'))){this.setFieldValue(newName,'KAZE');}},
};
Blockly.Blocks['features2d_KAZE_getNOctaves'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getNOctaves');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('KAZE'), 'KAZE');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_KAZE_getNOctaves');
  },
  getVars: function(){return [this.getFieldValue('KAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('KAZE'))){this.setFieldValue(newName,'KAZE');}},
};
Blockly.Blocks['features2d_KAZE_setNOctaveLayers'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setNOctaveLayers');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('KAZE'), 'KAZE');
    this.appendDummyInput()
        .appendField('octaveLayers')
        .appendField(new Blockly.FieldTextInput('0'), 'octaveLayers');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_KAZE_setNOctaveLayers');
  },
  getVars: function(){return [this.getFieldValue('KAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('KAZE'))){this.setFieldValue(newName,'KAZE');}},
};
Blockly.Blocks['features2d_KAZE_getNOctaveLayers'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getNOctaveLayers');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('KAZE'), 'KAZE');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_KAZE_getNOctaveLayers');
  },
  getVars: function(){return [this.getFieldValue('KAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('KAZE'))){this.setFieldValue(newName,'KAZE');}},
};
Blockly.Blocks['features2d_KAZE_setDiffusivity'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setDiffusivity');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('KAZE'), 'KAZE');
    this.appendValueInput('diff')
        .appendField('diff');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_KAZE_setDiffusivity');
  },
  getVars: function(){return [this.getFieldValue('KAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('KAZE'))){this.setFieldValue(newName,'KAZE');}},
};
Blockly.Blocks['features2d_KAZE_getDiffusivity'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getDiffusivity');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('KAZE'), 'KAZE');
    this.setOutput(true);
    this.setTooltip('features2d_KAZE_getDiffusivity');
  },
  getVars: function(){return [this.getFieldValue('KAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('KAZE'))){this.setFieldValue(newName,'KAZE');}},
};
Blockly.Blocks['features2d_KAZE_getDefaultName'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getDefaultName');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('KAZE'), 'KAZE');
    this.setOutput(true,'String');
    this.setTooltip('features2d_KAZE_getDefaultName');
  },
  getVars: function(){return [this.getFieldValue('KAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('KAZE'))){this.setFieldValue(newName,'KAZE');}},
};
Blockly.Blocks['features2d_FastFeatureDetector_create'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('FastFeatureDetector_create');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('FastFeatureDetector'), 'FastFeatureDetector');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_FastFeatureDetector_create');
  },
  getVars: function(){return [this.getFieldValue('FastFeatureDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('FastFeatureDetector'))){this.setFieldValue(newName,'FastFeatureDetector');}},
};
Blockly.Blocks['features2d_FastFeatureDetector_setThreshold'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('FastFeatureDetector'), 'FastFeatureDetector');
    this.appendDummyInput()
        .appendField('threshold')
        .appendField(new Blockly.FieldTextInput('0'), 'threshold');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_FastFeatureDetector_setThreshold');
  },
  getVars: function(){return [this.getFieldValue('FastFeatureDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('FastFeatureDetector'))){this.setFieldValue(newName,'FastFeatureDetector');}},
};
Blockly.Blocks['features2d_FastFeatureDetector_getThreshold'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('FastFeatureDetector'), 'FastFeatureDetector');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_FastFeatureDetector_getThreshold');
  },
  getVars: function(){return [this.getFieldValue('FastFeatureDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('FastFeatureDetector'))){this.setFieldValue(newName,'FastFeatureDetector');}},
};
Blockly.Blocks['features2d_FastFeatureDetector_setNonmaxSuppression'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setNonmaxSuppression');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('FastFeatureDetector'), 'FastFeatureDetector');
    this.appendValueInput('f')
        .appendField('f');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_FastFeatureDetector_setNonmaxSuppression');
  },
  getVars: function(){return [this.getFieldValue('FastFeatureDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('FastFeatureDetector'))){this.setFieldValue(newName,'FastFeatureDetector');}},
};
Blockly.Blocks['features2d_FastFeatureDetector_getNonmaxSuppression'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getNonmaxSuppression');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('FastFeatureDetector'), 'FastFeatureDetector');
    this.setOutput(true);
    this.setTooltip('features2d_FastFeatureDetector_getNonmaxSuppression');
  },
  getVars: function(){return [this.getFieldValue('FastFeatureDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('FastFeatureDetector'))){this.setFieldValue(newName,'FastFeatureDetector');}},
};
Blockly.Blocks['features2d_FastFeatureDetector_setType'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setType');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('FastFeatureDetector'), 'FastFeatureDetector');
    this.appendValueInput('type')
        .appendField('type');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_FastFeatureDetector_setType');
  },
  getVars: function(){return [this.getFieldValue('FastFeatureDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('FastFeatureDetector'))){this.setFieldValue(newName,'FastFeatureDetector');}},
};
Blockly.Blocks['features2d_FastFeatureDetector_getType'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getType');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('FastFeatureDetector'), 'FastFeatureDetector');
    this.setOutput(true);
    this.setTooltip('features2d_FastFeatureDetector_getType');
  },
  getVars: function(){return [this.getFieldValue('FastFeatureDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('FastFeatureDetector'))){this.setFieldValue(newName,'FastFeatureDetector');}},
};
Blockly.Blocks['features2d_FastFeatureDetector_getDefaultName'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getDefaultName');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('FastFeatureDetector'), 'FastFeatureDetector');
    this.setOutput(true,'String');
    this.setTooltip('features2d_FastFeatureDetector_getDefaultName');
  },
  getVars: function(){return [this.getFieldValue('FastFeatureDetector')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('FastFeatureDetector'))){this.setFieldValue(newName,'FastFeatureDetector');}},
};
Blockly.Blocks['features2d_SIFT_create'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('SIFT_create');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('SIFT'), 'SIFT');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_SIFT_create');
  },
  getVars: function(){return [this.getFieldValue('SIFT')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('SIFT'))){this.setFieldValue(newName,'SIFT');}},
};
Blockly.Blocks['features2d_SIFT_getDefaultName'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getDefaultName');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('SIFT'), 'SIFT');
    this.setOutput(true,'String');
    this.setTooltip('features2d_SIFT_getDefaultName');
  },
  getVars: function(){return [this.getFieldValue('SIFT')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('SIFT'))){this.setFieldValue(newName,'SIFT');}},
};
Blockly.Blocks['features2d_AKAZE_create'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('AKAZE_create');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AKAZE'), 'AKAZE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_AKAZE_create');
  },
  getVars: function(){return [this.getFieldValue('AKAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AKAZE'))){this.setFieldValue(newName,'AKAZE');}},
};
Blockly.Blocks['features2d_AKAZE_setDescriptorType'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setDescriptorType');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AKAZE'), 'AKAZE');
    this.appendValueInput('dtype')
        .appendField('dtype');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_AKAZE_setDescriptorType');
  },
  getVars: function(){return [this.getFieldValue('AKAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AKAZE'))){this.setFieldValue(newName,'AKAZE');}},
};
Blockly.Blocks['features2d_AKAZE_getDescriptorType'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getDescriptorType');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AKAZE'), 'AKAZE');
    this.setOutput(true);
    this.setTooltip('features2d_AKAZE_getDescriptorType');
  },
  getVars: function(){return [this.getFieldValue('AKAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AKAZE'))){this.setFieldValue(newName,'AKAZE');}},
};
Blockly.Blocks['features2d_AKAZE_setDescriptorSize'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setDescriptorSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AKAZE'), 'AKAZE');
    this.appendDummyInput()
        .appendField('dsize')
        .appendField(new Blockly.FieldTextInput('0'), 'dsize');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_AKAZE_setDescriptorSize');
  },
  getVars: function(){return [this.getFieldValue('AKAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AKAZE'))){this.setFieldValue(newName,'AKAZE');}},
};
Blockly.Blocks['features2d_AKAZE_getDescriptorSize'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getDescriptorSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AKAZE'), 'AKAZE');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_AKAZE_getDescriptorSize');
  },
  getVars: function(){return [this.getFieldValue('AKAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AKAZE'))){this.setFieldValue(newName,'AKAZE');}},
};
Blockly.Blocks['features2d_AKAZE_setDescriptorChannels'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setDescriptorChannels');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AKAZE'), 'AKAZE');
    this.appendDummyInput()
        .appendField('dch')
        .appendField(new Blockly.FieldTextInput('0'), 'dch');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_AKAZE_setDescriptorChannels');
  },
  getVars: function(){return [this.getFieldValue('AKAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AKAZE'))){this.setFieldValue(newName,'AKAZE');}},
};
Blockly.Blocks['features2d_AKAZE_getDescriptorChannels'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getDescriptorChannels');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AKAZE'), 'AKAZE');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_AKAZE_getDescriptorChannels');
  },
  getVars: function(){return [this.getFieldValue('AKAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AKAZE'))){this.setFieldValue(newName,'AKAZE');}},
};
Blockly.Blocks['features2d_AKAZE_setThreshold'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AKAZE'), 'AKAZE');
    this.appendDummyInput()
        .appendField('threshold')
        .appendField(new Blockly.FieldTextInput('0'), 'threshold');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_AKAZE_setThreshold');
  },
  getVars: function(){return [this.getFieldValue('AKAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AKAZE'))){this.setFieldValue(newName,'AKAZE');}},
};
Blockly.Blocks['features2d_AKAZE_getThreshold'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AKAZE'), 'AKAZE');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_AKAZE_getThreshold');
  },
  getVars: function(){return [this.getFieldValue('AKAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AKAZE'))){this.setFieldValue(newName,'AKAZE');}},
};
Blockly.Blocks['features2d_AKAZE_setNOctaves'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setNOctaves');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AKAZE'), 'AKAZE');
    this.appendDummyInput()
        .appendField('octaves')
        .appendField(new Blockly.FieldTextInput('0'), 'octaves');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_AKAZE_setNOctaves');
  },
  getVars: function(){return [this.getFieldValue('AKAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AKAZE'))){this.setFieldValue(newName,'AKAZE');}},
};
Blockly.Blocks['features2d_AKAZE_getNOctaves'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getNOctaves');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AKAZE'), 'AKAZE');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_AKAZE_getNOctaves');
  },
  getVars: function(){return [this.getFieldValue('AKAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AKAZE'))){this.setFieldValue(newName,'AKAZE');}},
};
Blockly.Blocks['features2d_AKAZE_setNOctaveLayers'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setNOctaveLayers');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AKAZE'), 'AKAZE');
    this.appendDummyInput()
        .appendField('octaveLayers')
        .appendField(new Blockly.FieldTextInput('0'), 'octaveLayers');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_AKAZE_setNOctaveLayers');
  },
  getVars: function(){return [this.getFieldValue('AKAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AKAZE'))){this.setFieldValue(newName,'AKAZE');}},
};
Blockly.Blocks['features2d_AKAZE_getNOctaveLayers'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getNOctaveLayers');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AKAZE'), 'AKAZE');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_AKAZE_getNOctaveLayers');
  },
  getVars: function(){return [this.getFieldValue('AKAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AKAZE'))){this.setFieldValue(newName,'AKAZE');}},
};
Blockly.Blocks['features2d_AKAZE_setDiffusivity'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setDiffusivity');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AKAZE'), 'AKAZE');
    this.appendValueInput('diff')
        .appendField('diff');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_AKAZE_setDiffusivity');
  },
  getVars: function(){return [this.getFieldValue('AKAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AKAZE'))){this.setFieldValue(newName,'AKAZE');}},
};
Blockly.Blocks['features2d_AKAZE_getDiffusivity'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getDiffusivity');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AKAZE'), 'AKAZE');
    this.setOutput(true);
    this.setTooltip('features2d_AKAZE_getDiffusivity');
  },
  getVars: function(){return [this.getFieldValue('AKAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AKAZE'))){this.setFieldValue(newName,'AKAZE');}},
};
Blockly.Blocks['features2d_AKAZE_getDefaultName'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getDefaultName');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('AKAZE'), 'AKAZE');
    this.setOutput(true,'String');
    this.setTooltip('features2d_AKAZE_getDefaultName');
  },
  getVars: function(){return [this.getFieldValue('AKAZE')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('AKAZE'))){this.setFieldValue(newName,'AKAZE');}},
};
Blockly.Blocks['features2d_ORB_create'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('ORB_create');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ORB'), 'ORB');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_ORB_create');
  },
  getVars: function(){return [this.getFieldValue('ORB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('ORB'))){this.setFieldValue(newName,'ORB');}},
};
Blockly.Blocks['features2d_ORB_setMaxFeatures'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setMaxFeatures');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ORB'), 'ORB');
    this.appendDummyInput()
        .appendField('maxFeatures')
        .appendField(new Blockly.FieldTextInput('0'), 'maxFeatures');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_ORB_setMaxFeatures');
  },
  getVars: function(){return [this.getFieldValue('ORB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('ORB'))){this.setFieldValue(newName,'ORB');}},
};
Blockly.Blocks['features2d_ORB_getMaxFeatures'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getMaxFeatures');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ORB'), 'ORB');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_ORB_getMaxFeatures');
  },
  getVars: function(){return [this.getFieldValue('ORB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('ORB'))){this.setFieldValue(newName,'ORB');}},
};
Blockly.Blocks['features2d_ORB_setScaleFactor'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setScaleFactor');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ORB'), 'ORB');
    this.appendDummyInput()
        .appendField('scaleFactor')
        .appendField(new Blockly.FieldTextInput('0'), 'scaleFactor');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_ORB_setScaleFactor');
  },
  getVars: function(){return [this.getFieldValue('ORB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('ORB'))){this.setFieldValue(newName,'ORB');}},
};
Blockly.Blocks['features2d_ORB_getScaleFactor'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getScaleFactor');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ORB'), 'ORB');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_ORB_getScaleFactor');
  },
  getVars: function(){return [this.getFieldValue('ORB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('ORB'))){this.setFieldValue(newName,'ORB');}},
};
Blockly.Blocks['features2d_ORB_setNLevels'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setNLevels');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ORB'), 'ORB');
    this.appendDummyInput()
        .appendField('nlevels')
        .appendField(new Blockly.FieldTextInput('0'), 'nlevels');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_ORB_setNLevels');
  },
  getVars: function(){return [this.getFieldValue('ORB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('ORB'))){this.setFieldValue(newName,'ORB');}},
};
Blockly.Blocks['features2d_ORB_getNLevels'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getNLevels');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ORB'), 'ORB');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_ORB_getNLevels');
  },
  getVars: function(){return [this.getFieldValue('ORB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('ORB'))){this.setFieldValue(newName,'ORB');}},
};
Blockly.Blocks['features2d_ORB_setEdgeThreshold'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setEdgeThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ORB'), 'ORB');
    this.appendDummyInput()
        .appendField('edgeThreshold')
        .appendField(new Blockly.FieldTextInput('0'), 'edgeThreshold');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_ORB_setEdgeThreshold');
  },
  getVars: function(){return [this.getFieldValue('ORB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('ORB'))){this.setFieldValue(newName,'ORB');}},
};
Blockly.Blocks['features2d_ORB_getEdgeThreshold'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getEdgeThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ORB'), 'ORB');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_ORB_getEdgeThreshold');
  },
  getVars: function(){return [this.getFieldValue('ORB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('ORB'))){this.setFieldValue(newName,'ORB');}},
};
Blockly.Blocks['features2d_ORB_setFirstLevel'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setFirstLevel');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ORB'), 'ORB');
    this.appendDummyInput()
        .appendField('firstLevel')
        .appendField(new Blockly.FieldTextInput('0'), 'firstLevel');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_ORB_setFirstLevel');
  },
  getVars: function(){return [this.getFieldValue('ORB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('ORB'))){this.setFieldValue(newName,'ORB');}},
};
Blockly.Blocks['features2d_ORB_getFirstLevel'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getFirstLevel');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ORB'), 'ORB');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_ORB_getFirstLevel');
  },
  getVars: function(){return [this.getFieldValue('ORB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('ORB'))){this.setFieldValue(newName,'ORB');}},
};
Blockly.Blocks['features2d_ORB_setWTA_K'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setWTA_K');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ORB'), 'ORB');
    this.appendDummyInput()
        .appendField('wta_k')
        .appendField(new Blockly.FieldTextInput('0'), 'wta_k');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_ORB_setWTA_K');
  },
  getVars: function(){return [this.getFieldValue('ORB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('ORB'))){this.setFieldValue(newName,'ORB');}},
};
Blockly.Blocks['features2d_ORB_getWTA_K'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getWTA_K');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ORB'), 'ORB');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_ORB_getWTA_K');
  },
  getVars: function(){return [this.getFieldValue('ORB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('ORB'))){this.setFieldValue(newName,'ORB');}},
};
Blockly.Blocks['features2d_ORB_setScoreType'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setScoreType');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ORB'), 'ORB');
    this.appendValueInput('scoreType')
        .appendField('scoreType');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_ORB_setScoreType');
  },
  getVars: function(){return [this.getFieldValue('ORB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('ORB'))){this.setFieldValue(newName,'ORB');}},
};
Blockly.Blocks['features2d_ORB_getScoreType'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getScoreType');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ORB'), 'ORB');
    this.setOutput(true);
    this.setTooltip('features2d_ORB_getScoreType');
  },
  getVars: function(){return [this.getFieldValue('ORB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('ORB'))){this.setFieldValue(newName,'ORB');}},
};
Blockly.Blocks['features2d_ORB_setPatchSize'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setPatchSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ORB'), 'ORB');
    this.appendDummyInput()
        .appendField('patchSize')
        .appendField(new Blockly.FieldTextInput('0'), 'patchSize');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_ORB_setPatchSize');
  },
  getVars: function(){return [this.getFieldValue('ORB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('ORB'))){this.setFieldValue(newName,'ORB');}},
};
Blockly.Blocks['features2d_ORB_getPatchSize'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getPatchSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ORB'), 'ORB');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_ORB_getPatchSize');
  },
  getVars: function(){return [this.getFieldValue('ORB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('ORB'))){this.setFieldValue(newName,'ORB');}},
};
Blockly.Blocks['features2d_ORB_setFastThreshold'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setFastThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ORB'), 'ORB');
    this.appendDummyInput()
        .appendField('fastThreshold')
        .appendField(new Blockly.FieldTextInput('0'), 'fastThreshold');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_ORB_setFastThreshold');
  },
  getVars: function(){return [this.getFieldValue('ORB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('ORB'))){this.setFieldValue(newName,'ORB');}},
};
Blockly.Blocks['features2d_ORB_getFastThreshold'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getFastThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ORB'), 'ORB');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_ORB_getFastThreshold');
  },
  getVars: function(){return [this.getFieldValue('ORB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('ORB'))){this.setFieldValue(newName,'ORB');}},
};
Blockly.Blocks['features2d_ORB_getDefaultName'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getDefaultName');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ORB'), 'ORB');
    this.setOutput(true,'String');
    this.setTooltip('features2d_ORB_getDefaultName');
  },
  getVars: function(){return [this.getFieldValue('ORB')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('ORB'))){this.setFieldValue(newName,'ORB');}},
};
Blockly.Blocks['features2d_MSER_create'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('MSER_create');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('MSER'), 'MSER');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_MSER_create');
  },
  getVars: function(){return [this.getFieldValue('MSER')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('MSER'))){this.setFieldValue(newName,'MSER');}},
};
Blockly.Blocks['features2d_MSER_detectRegions'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('detectRegions');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('MSER'), 'MSER');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.setOutput(true);
    this.setTooltip('features2d_MSER_detectRegions');
  },
  getVars: function(){return [this.getFieldValue('MSER')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('MSER'))){this.setFieldValue(newName,'MSER');}},
};
Blockly.Blocks['features2d_MSER_setDelta'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setDelta');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('MSER'), 'MSER');
    this.appendDummyInput()
        .appendField('delta')
        .appendField(new Blockly.FieldTextInput('0'), 'delta');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_MSER_setDelta');
  },
  getVars: function(){return [this.getFieldValue('MSER')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('MSER'))){this.setFieldValue(newName,'MSER');}},
};
Blockly.Blocks['features2d_MSER_getDelta'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getDelta');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('MSER'), 'MSER');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_MSER_getDelta');
  },
  getVars: function(){return [this.getFieldValue('MSER')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('MSER'))){this.setFieldValue(newName,'MSER');}},
};
Blockly.Blocks['features2d_MSER_setMinArea'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setMinArea');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('MSER'), 'MSER');
    this.appendDummyInput()
        .appendField('minArea')
        .appendField(new Blockly.FieldTextInput('0'), 'minArea');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_MSER_setMinArea');
  },
  getVars: function(){return [this.getFieldValue('MSER')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('MSER'))){this.setFieldValue(newName,'MSER');}},
};
Blockly.Blocks['features2d_MSER_getMinArea'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getMinArea');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('MSER'), 'MSER');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_MSER_getMinArea');
  },
  getVars: function(){return [this.getFieldValue('MSER')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('MSER'))){this.setFieldValue(newName,'MSER');}},
};
Blockly.Blocks['features2d_MSER_setMaxArea'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setMaxArea');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('MSER'), 'MSER');
    this.appendDummyInput()
        .appendField('maxArea')
        .appendField(new Blockly.FieldTextInput('0'), 'maxArea');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_MSER_setMaxArea');
  },
  getVars: function(){return [this.getFieldValue('MSER')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('MSER'))){this.setFieldValue(newName,'MSER');}},
};
Blockly.Blocks['features2d_MSER_getMaxArea'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getMaxArea');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('MSER'), 'MSER');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_MSER_getMaxArea');
  },
  getVars: function(){return [this.getFieldValue('MSER')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('MSER'))){this.setFieldValue(newName,'MSER');}},
};
Blockly.Blocks['features2d_MSER_setPass2Only'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('setPass2Only');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('MSER'), 'MSER');
    this.appendValueInput('f')
        .appendField('f');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_MSER_setPass2Only');
  },
  getVars: function(){return [this.getFieldValue('MSER')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('MSER'))){this.setFieldValue(newName,'MSER');}},
};
Blockly.Blocks['features2d_MSER_getPass2Only'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getPass2Only');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('MSER'), 'MSER');
    this.setOutput(true);
    this.setTooltip('features2d_MSER_getPass2Only');
  },
  getVars: function(){return [this.getFieldValue('MSER')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('MSER'))){this.setFieldValue(newName,'MSER');}},
};
Blockly.Blocks['features2d_MSER_getDefaultName'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('getDefaultName');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('MSER'), 'MSER');
    this.setOutput(true,'String');
    this.setTooltip('features2d_MSER_getDefaultName');
  },
  getVars: function(){return [this.getFieldValue('MSER')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('MSER'))){this.setFieldValue(newName,'MSER');}},
};
Blockly.Blocks['features2d_FlannBasedMatcher_FlannBasedMatcher'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('FlannBasedMatcher');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('FlannBasedMatcher'), 'FlannBasedMatcher');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_FlannBasedMatcher_FlannBasedMatcher');
  },
  getVars: function(){return [this.getFieldValue('FlannBasedMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('FlannBasedMatcher'))){this.setFieldValue(newName,'FlannBasedMatcher');}},
};
Blockly.Blocks['features2d_FlannBasedMatcher_create'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('FlannBasedMatcher_create');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('FlannBasedMatcher'), 'FlannBasedMatcher');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_FlannBasedMatcher_create');
  },
  getVars: function(){return [this.getFieldValue('FlannBasedMatcher')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('FlannBasedMatcher'))){this.setFieldValue(newName,'FlannBasedMatcher');}},
};
Blockly.Blocks['video_meanShift'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('meanShift');
    this.appendValueInput('probImage')
        .appendField('probImage')
        .setCheck('image');
    this.appendValueInput('window')
        .appendField('window');
    this.appendValueInput('criteria')
        .appendField('criteria');
    this.setOutput(true);
    this.setTooltip('video_meanShift');
  },
};
Blockly.Blocks['video_buildOpticalFlowPyramid'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('buildOpticalFlowPyramid');
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.appendValueInput('winSize')
        .appendField('winSize')
        .setCheck('size');
    this.appendDummyInput()
        .appendField('maxLevel')
        .appendField(new Blockly.FieldTextInput('0'), 'maxLevel');
    this.setOutput(true);
    this.setTooltip('video_buildOpticalFlowPyramid');
  },
};
Blockly.Blocks['video_calcOpticalFlowPyrLK'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('calcOpticalFlowPyrLK');
    this.appendValueInput('prevImg')
        .appendField('prevImg')
        .setCheck('image');
    this.appendValueInput('nextImg')
        .appendField('nextImg')
        .setCheck('image');
    this.appendValueInput('prevPts')
        .appendField('prevPts')
        .setCheck('image');
    this.appendValueInput('nextPts')
        .appendField('nextPts')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('video_calcOpticalFlowPyrLK');
  },
};
Blockly.Blocks['video_calcOpticalFlowFarneback'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('calcOpticalFlowFarneback');
    this.appendValueInput('prev')
        .appendField('prev')
        .setCheck('image');
    this.appendValueInput('next')
        .appendField('next')
        .setCheck('image');
    this.appendValueInput('flow')
        .appendField('flow')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('pyr_scale')
        .appendField(new Blockly.FieldTextInput('0'), 'pyr_scale');
    this.appendDummyInput()
        .appendField('levels')
        .appendField(new Blockly.FieldTextInput('0'), 'levels');
    this.appendDummyInput()
        .appendField('winsize')
        .appendField(new Blockly.FieldTextInput('0'), 'winsize');
    this.appendDummyInput()
        .appendField('iterations')
        .appendField(new Blockly.FieldTextInput('0'), 'iterations');
    this.appendDummyInput()
        .appendField('poly_n')
        .appendField(new Blockly.FieldTextInput('0'), 'poly_n');
    this.appendDummyInput()
        .appendField('poly_sigma')
        .appendField(new Blockly.FieldTextInput('0'), 'poly_sigma');
    this.appendDummyInput()
        .appendField('flags')
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true,'image');
    this.setTooltip('video_calcOpticalFlowFarneback');
  },
};
Blockly.Blocks['video_computeECC'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('computeECC');
    this.appendValueInput('templateImage')
        .appendField('templateImage')
        .setCheck('image');
    this.appendValueInput('inputImage')
        .appendField('inputImage')
        .setCheck('image');
    this.setOutput(true,'Number');
    this.setTooltip('video_computeECC');
  },
};
Blockly.Blocks['video_findTransformECC'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('findTransformECC');
    this.appendValueInput('templateImage')
        .appendField('templateImage')
        .setCheck('image');
    this.appendValueInput('inputImage')
        .appendField('inputImage')
        .setCheck('image');
    this.appendValueInput('warpMatrix')
        .appendField('warpMatrix')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('motionType')
        .appendField(new Blockly.FieldTextInput('0'), 'motionType');
    this.appendValueInput('criteria')
        .appendField('criteria');
    this.appendValueInput('inputMask')
        .appendField('inputMask')
        .setCheck('image');
    this.appendDummyInput()
        .appendField('gaussFiltSize')
        .appendField(new Blockly.FieldTextInput('0'), 'gaussFiltSize');
    this.setOutput(true,'image');
    this.setTooltip('video_findTransformECC');
  },
};
Blockly.Blocks['video_readOpticalFlow'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('readOpticalFlow');
    this.appendValueInput('path')
        .appendField('path')
        .setCheck('String');
    this.setOutput(true,'image');
    this.setTooltip('video_readOpticalFlow');
  },
};
Blockly.Blocks['video_writeOpticalFlow'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('writeOpticalFlow');
    this.appendValueInput('path')
        .appendField('path')
        .setCheck('String');
    this.appendValueInput('flow')
        .appendField('flow')
        .setCheck('image');
    this.setOutput(true);
    this.setTooltip('video_writeOpticalFlow');
  },
};
Blockly.Blocks['video_createBackgroundSubtractorMOG2'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('createBackgroundSubtractorMOG2');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorMOG2'), 'BackgroundSubtractorMOG2');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_createBackgroundSubtractorMOG2');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorMOG2')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorMOG2'))){this.setFieldValue(newName,'BackgroundSubtractorMOG2');}},
};
Blockly.Blocks['video_createBackgroundSubtractorKNN'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('createBackgroundSubtractorKNN');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorKNN'), 'BackgroundSubtractorKNN');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_createBackgroundSubtractorKNN');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorKNN')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorKNN'))){this.setFieldValue(newName,'BackgroundSubtractorKNN');}},
};
Blockly.Blocks['video_BackgroundSubtractorKNN_getHistory'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getHistory');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorKNN'), 'BackgroundSubtractorKNN');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorKNN_getHistory');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorKNN')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorKNN'))){this.setFieldValue(newName,'BackgroundSubtractorKNN');}},
};
Blockly.Blocks['video_BackgroundSubtractorKNN_setHistory'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setHistory');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorKNN'), 'BackgroundSubtractorKNN');
    this.appendDummyInput()
        .appendField('history')
        .appendField(new Blockly.FieldTextInput('0'), 'history');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_BackgroundSubtractorKNN_setHistory');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorKNN')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorKNN'))){this.setFieldValue(newName,'BackgroundSubtractorKNN');}},
};
Blockly.Blocks['video_BackgroundSubtractorKNN_getNSamples'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getNSamples');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorKNN'), 'BackgroundSubtractorKNN');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorKNN_getNSamples');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorKNN')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorKNN'))){this.setFieldValue(newName,'BackgroundSubtractorKNN');}},
};
Blockly.Blocks['video_BackgroundSubtractorKNN_setNSamples'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setNSamples');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorKNN'), 'BackgroundSubtractorKNN');
    this.appendDummyInput()
        .appendField('_nN')
        .appendField(new Blockly.FieldTextInput('0'), '_nN');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_BackgroundSubtractorKNN_setNSamples');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorKNN')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorKNN'))){this.setFieldValue(newName,'BackgroundSubtractorKNN');}},
};
Blockly.Blocks['video_BackgroundSubtractorKNN_getDist2Threshold'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getDist2Threshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorKNN'), 'BackgroundSubtractorKNN');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorKNN_getDist2Threshold');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorKNN')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorKNN'))){this.setFieldValue(newName,'BackgroundSubtractorKNN');}},
};
Blockly.Blocks['video_BackgroundSubtractorKNN_setDist2Threshold'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setDist2Threshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorKNN'), 'BackgroundSubtractorKNN');
    this.appendDummyInput()
        .appendField('_dist2Threshold')
        .appendField(new Blockly.FieldTextInput('0'), '_dist2Threshold');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_BackgroundSubtractorKNN_setDist2Threshold');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorKNN')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorKNN'))){this.setFieldValue(newName,'BackgroundSubtractorKNN');}},
};
Blockly.Blocks['video_BackgroundSubtractorKNN_getkNNSamples'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getkNNSamples');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorKNN'), 'BackgroundSubtractorKNN');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorKNN_getkNNSamples');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorKNN')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorKNN'))){this.setFieldValue(newName,'BackgroundSubtractorKNN');}},
};
Blockly.Blocks['video_BackgroundSubtractorKNN_setkNNSamples'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setkNNSamples');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorKNN'), 'BackgroundSubtractorKNN');
    this.appendDummyInput()
        .appendField('_nkNN')
        .appendField(new Blockly.FieldTextInput('0'), '_nkNN');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_BackgroundSubtractorKNN_setkNNSamples');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorKNN')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorKNN'))){this.setFieldValue(newName,'BackgroundSubtractorKNN');}},
};
Blockly.Blocks['video_BackgroundSubtractorKNN_getDetectShadows'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getDetectShadows');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorKNN'), 'BackgroundSubtractorKNN');
    this.setOutput(true);
    this.setTooltip('video_BackgroundSubtractorKNN_getDetectShadows');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorKNN')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorKNN'))){this.setFieldValue(newName,'BackgroundSubtractorKNN');}},
};
Blockly.Blocks['video_BackgroundSubtractorKNN_setDetectShadows'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setDetectShadows');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorKNN'), 'BackgroundSubtractorKNN');
    this.appendValueInput('detectShadows')
        .appendField('detectShadows');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_BackgroundSubtractorKNN_setDetectShadows');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorKNN')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorKNN'))){this.setFieldValue(newName,'BackgroundSubtractorKNN');}},
};
Blockly.Blocks['video_BackgroundSubtractorKNN_getShadowValue'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getShadowValue');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorKNN'), 'BackgroundSubtractorKNN');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorKNN_getShadowValue');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorKNN')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorKNN'))){this.setFieldValue(newName,'BackgroundSubtractorKNN');}},
};
Blockly.Blocks['video_BackgroundSubtractorKNN_setShadowValue'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setShadowValue');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorKNN'), 'BackgroundSubtractorKNN');
    this.appendDummyInput()
        .appendField('value')
        .appendField(new Blockly.FieldTextInput('0'), 'value');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_BackgroundSubtractorKNN_setShadowValue');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorKNN')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorKNN'))){this.setFieldValue(newName,'BackgroundSubtractorKNN');}},
};
Blockly.Blocks['video_BackgroundSubtractorKNN_getShadowThreshold'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getShadowThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorKNN'), 'BackgroundSubtractorKNN');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorKNN_getShadowThreshold');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorKNN')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorKNN'))){this.setFieldValue(newName,'BackgroundSubtractorKNN');}},
};
Blockly.Blocks['video_BackgroundSubtractorKNN_setShadowThreshold'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setShadowThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorKNN'), 'BackgroundSubtractorKNN');
    this.appendDummyInput()
        .appendField('threshold')
        .appendField(new Blockly.FieldTextInput('0'), 'threshold');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_BackgroundSubtractorKNN_setShadowThreshold');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorKNN')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorKNN'))){this.setFieldValue(newName,'BackgroundSubtractorKNN');}},
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_getHistory'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getHistory');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorMOG2'), 'BackgroundSubtractorMOG2');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorMOG2_getHistory');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorMOG2')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorMOG2'))){this.setFieldValue(newName,'BackgroundSubtractorMOG2');}},
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_setHistory'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setHistory');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorMOG2'), 'BackgroundSubtractorMOG2');
    this.appendDummyInput()
        .appendField('history')
        .appendField(new Blockly.FieldTextInput('0'), 'history');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_BackgroundSubtractorMOG2_setHistory');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorMOG2')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorMOG2'))){this.setFieldValue(newName,'BackgroundSubtractorMOG2');}},
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_getNMixtures'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getNMixtures');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorMOG2'), 'BackgroundSubtractorMOG2');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorMOG2_getNMixtures');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorMOG2')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorMOG2'))){this.setFieldValue(newName,'BackgroundSubtractorMOG2');}},
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_setNMixtures'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setNMixtures');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorMOG2'), 'BackgroundSubtractorMOG2');
    this.appendDummyInput()
        .appendField('nmixtures')
        .appendField(new Blockly.FieldTextInput('0'), 'nmixtures');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_BackgroundSubtractorMOG2_setNMixtures');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorMOG2')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorMOG2'))){this.setFieldValue(newName,'BackgroundSubtractorMOG2');}},
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_getBackgroundRatio'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getBackgroundRatio');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorMOG2'), 'BackgroundSubtractorMOG2');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorMOG2_getBackgroundRatio');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorMOG2')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorMOG2'))){this.setFieldValue(newName,'BackgroundSubtractorMOG2');}},
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_setBackgroundRatio'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setBackgroundRatio');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorMOG2'), 'BackgroundSubtractorMOG2');
    this.appendDummyInput()
        .appendField('ratio')
        .appendField(new Blockly.FieldTextInput('0'), 'ratio');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_BackgroundSubtractorMOG2_setBackgroundRatio');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorMOG2')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorMOG2'))){this.setFieldValue(newName,'BackgroundSubtractorMOG2');}},
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_getVarThreshold'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getVarThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorMOG2'), 'BackgroundSubtractorMOG2');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorMOG2_getVarThreshold');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorMOG2')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorMOG2'))){this.setFieldValue(newName,'BackgroundSubtractorMOG2');}},
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_setVarThreshold'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setVarThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorMOG2'), 'BackgroundSubtractorMOG2');
    this.appendDummyInput()
        .appendField('varThreshold')
        .appendField(new Blockly.FieldTextInput('0'), 'varThreshold');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_BackgroundSubtractorMOG2_setVarThreshold');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorMOG2')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorMOG2'))){this.setFieldValue(newName,'BackgroundSubtractorMOG2');}},
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_getVarThresholdGen'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getVarThresholdGen');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorMOG2'), 'BackgroundSubtractorMOG2');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorMOG2_getVarThresholdGen');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorMOG2')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorMOG2'))){this.setFieldValue(newName,'BackgroundSubtractorMOG2');}},
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_setVarThresholdGen'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setVarThresholdGen');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorMOG2'), 'BackgroundSubtractorMOG2');
    this.appendDummyInput()
        .appendField('varThresholdGen')
        .appendField(new Blockly.FieldTextInput('0'), 'varThresholdGen');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_BackgroundSubtractorMOG2_setVarThresholdGen');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorMOG2')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorMOG2'))){this.setFieldValue(newName,'BackgroundSubtractorMOG2');}},
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_getVarInit'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getVarInit');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorMOG2'), 'BackgroundSubtractorMOG2');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorMOG2_getVarInit');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorMOG2')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorMOG2'))){this.setFieldValue(newName,'BackgroundSubtractorMOG2');}},
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_setVarInit'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setVarInit');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorMOG2'), 'BackgroundSubtractorMOG2');
    this.appendDummyInput()
        .appendField('varInit')
        .appendField(new Blockly.FieldTextInput('0'), 'varInit');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_BackgroundSubtractorMOG2_setVarInit');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorMOG2')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorMOG2'))){this.setFieldValue(newName,'BackgroundSubtractorMOG2');}},
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_getVarMin'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getVarMin');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorMOG2'), 'BackgroundSubtractorMOG2');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorMOG2_getVarMin');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorMOG2')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorMOG2'))){this.setFieldValue(newName,'BackgroundSubtractorMOG2');}},
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_setVarMin'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setVarMin');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorMOG2'), 'BackgroundSubtractorMOG2');
    this.appendDummyInput()
        .appendField('varMin')
        .appendField(new Blockly.FieldTextInput('0'), 'varMin');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_BackgroundSubtractorMOG2_setVarMin');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorMOG2')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorMOG2'))){this.setFieldValue(newName,'BackgroundSubtractorMOG2');}},
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_getVarMax'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getVarMax');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorMOG2'), 'BackgroundSubtractorMOG2');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorMOG2_getVarMax');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorMOG2')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorMOG2'))){this.setFieldValue(newName,'BackgroundSubtractorMOG2');}},
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_setVarMax'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setVarMax');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorMOG2'), 'BackgroundSubtractorMOG2');
    this.appendDummyInput()
        .appendField('varMax')
        .appendField(new Blockly.FieldTextInput('0'), 'varMax');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_BackgroundSubtractorMOG2_setVarMax');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorMOG2')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorMOG2'))){this.setFieldValue(newName,'BackgroundSubtractorMOG2');}},
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_getComplexityReductionThreshold'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getComplexityReductionThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorMOG2'), 'BackgroundSubtractorMOG2');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorMOG2_getComplexityReductionThreshold');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorMOG2')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorMOG2'))){this.setFieldValue(newName,'BackgroundSubtractorMOG2');}},
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_setComplexityReductionThreshold'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setComplexityReductionThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorMOG2'), 'BackgroundSubtractorMOG2');
    this.appendDummyInput()
        .appendField('ct')
        .appendField(new Blockly.FieldTextInput('0'), 'ct');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_BackgroundSubtractorMOG2_setComplexityReductionThreshold');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorMOG2')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorMOG2'))){this.setFieldValue(newName,'BackgroundSubtractorMOG2');}},
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_getDetectShadows'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getDetectShadows');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorMOG2'), 'BackgroundSubtractorMOG2');
    this.setOutput(true);
    this.setTooltip('video_BackgroundSubtractorMOG2_getDetectShadows');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorMOG2')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorMOG2'))){this.setFieldValue(newName,'BackgroundSubtractorMOG2');}},
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_setDetectShadows'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setDetectShadows');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorMOG2'), 'BackgroundSubtractorMOG2');
    this.appendValueInput('detectShadows')
        .appendField('detectShadows');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_BackgroundSubtractorMOG2_setDetectShadows');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorMOG2')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorMOG2'))){this.setFieldValue(newName,'BackgroundSubtractorMOG2');}},
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_getShadowValue'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getShadowValue');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorMOG2'), 'BackgroundSubtractorMOG2');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorMOG2_getShadowValue');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorMOG2')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorMOG2'))){this.setFieldValue(newName,'BackgroundSubtractorMOG2');}},
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_setShadowValue'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setShadowValue');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorMOG2'), 'BackgroundSubtractorMOG2');
    this.appendDummyInput()
        .appendField('value')
        .appendField(new Blockly.FieldTextInput('0'), 'value');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_BackgroundSubtractorMOG2_setShadowValue');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorMOG2')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorMOG2'))){this.setFieldValue(newName,'BackgroundSubtractorMOG2');}},
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_getShadowThreshold'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getShadowThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorMOG2'), 'BackgroundSubtractorMOG2');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorMOG2_getShadowThreshold');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorMOG2')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorMOG2'))){this.setFieldValue(newName,'BackgroundSubtractorMOG2');}},
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_setShadowThreshold'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setShadowThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorMOG2'), 'BackgroundSubtractorMOG2');
    this.appendDummyInput()
        .appendField('threshold')
        .appendField(new Blockly.FieldTextInput('0'), 'threshold');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_BackgroundSubtractorMOG2_setShadowThreshold');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorMOG2')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorMOG2'))){this.setFieldValue(newName,'BackgroundSubtractorMOG2');}},
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_apply'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('apply');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractorMOG2'), 'BackgroundSubtractorMOG2');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('video_BackgroundSubtractorMOG2_apply');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractorMOG2')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractorMOG2'))){this.setFieldValue(newName,'BackgroundSubtractorMOG2');}},
};
Blockly.Blocks['video_FarnebackOpticalFlow_getNumLevels'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getNumLevels');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('FarnebackOpticalFlow'), 'FarnebackOpticalFlow');
    this.setOutput(true,'Number');
    this.setTooltip('video_FarnebackOpticalFlow_getNumLevels');
  },
  getVars: function(){return [this.getFieldValue('FarnebackOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('FarnebackOpticalFlow'))){this.setFieldValue(newName,'FarnebackOpticalFlow');}},
};
Blockly.Blocks['video_FarnebackOpticalFlow_setNumLevels'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setNumLevels');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('FarnebackOpticalFlow'), 'FarnebackOpticalFlow');
    this.appendDummyInput()
        .appendField('numLevels')
        .appendField(new Blockly.FieldTextInput('0'), 'numLevels');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_FarnebackOpticalFlow_setNumLevels');
  },
  getVars: function(){return [this.getFieldValue('FarnebackOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('FarnebackOpticalFlow'))){this.setFieldValue(newName,'FarnebackOpticalFlow');}},
};
Blockly.Blocks['video_FarnebackOpticalFlow_getPyrScale'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getPyrScale');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('FarnebackOpticalFlow'), 'FarnebackOpticalFlow');
    this.setOutput(true,'Number');
    this.setTooltip('video_FarnebackOpticalFlow_getPyrScale');
  },
  getVars: function(){return [this.getFieldValue('FarnebackOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('FarnebackOpticalFlow'))){this.setFieldValue(newName,'FarnebackOpticalFlow');}},
};
Blockly.Blocks['video_FarnebackOpticalFlow_setPyrScale'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setPyrScale');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('FarnebackOpticalFlow'), 'FarnebackOpticalFlow');
    this.appendDummyInput()
        .appendField('pyrScale')
        .appendField(new Blockly.FieldTextInput('0'), 'pyrScale');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_FarnebackOpticalFlow_setPyrScale');
  },
  getVars: function(){return [this.getFieldValue('FarnebackOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('FarnebackOpticalFlow'))){this.setFieldValue(newName,'FarnebackOpticalFlow');}},
};
Blockly.Blocks['video_FarnebackOpticalFlow_getFastPyramids'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getFastPyramids');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('FarnebackOpticalFlow'), 'FarnebackOpticalFlow');
    this.setOutput(true);
    this.setTooltip('video_FarnebackOpticalFlow_getFastPyramids');
  },
  getVars: function(){return [this.getFieldValue('FarnebackOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('FarnebackOpticalFlow'))){this.setFieldValue(newName,'FarnebackOpticalFlow');}},
};
Blockly.Blocks['video_FarnebackOpticalFlow_setFastPyramids'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setFastPyramids');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('FarnebackOpticalFlow'), 'FarnebackOpticalFlow');
    this.appendValueInput('fastPyramids')
        .appendField('fastPyramids');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_FarnebackOpticalFlow_setFastPyramids');
  },
  getVars: function(){return [this.getFieldValue('FarnebackOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('FarnebackOpticalFlow'))){this.setFieldValue(newName,'FarnebackOpticalFlow');}},
};
Blockly.Blocks['video_FarnebackOpticalFlow_getWinSize'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getWinSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('FarnebackOpticalFlow'), 'FarnebackOpticalFlow');
    this.setOutput(true,'Number');
    this.setTooltip('video_FarnebackOpticalFlow_getWinSize');
  },
  getVars: function(){return [this.getFieldValue('FarnebackOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('FarnebackOpticalFlow'))){this.setFieldValue(newName,'FarnebackOpticalFlow');}},
};
Blockly.Blocks['video_FarnebackOpticalFlow_setWinSize'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setWinSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('FarnebackOpticalFlow'), 'FarnebackOpticalFlow');
    this.appendDummyInput()
        .appendField('winSize')
        .appendField(new Blockly.FieldTextInput('0'), 'winSize');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_FarnebackOpticalFlow_setWinSize');
  },
  getVars: function(){return [this.getFieldValue('FarnebackOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('FarnebackOpticalFlow'))){this.setFieldValue(newName,'FarnebackOpticalFlow');}},
};
Blockly.Blocks['video_FarnebackOpticalFlow_getNumIters'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getNumIters');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('FarnebackOpticalFlow'), 'FarnebackOpticalFlow');
    this.setOutput(true,'Number');
    this.setTooltip('video_FarnebackOpticalFlow_getNumIters');
  },
  getVars: function(){return [this.getFieldValue('FarnebackOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('FarnebackOpticalFlow'))){this.setFieldValue(newName,'FarnebackOpticalFlow');}},
};
Blockly.Blocks['video_FarnebackOpticalFlow_setNumIters'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setNumIters');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('FarnebackOpticalFlow'), 'FarnebackOpticalFlow');
    this.appendDummyInput()
        .appendField('numIters')
        .appendField(new Blockly.FieldTextInput('0'), 'numIters');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_FarnebackOpticalFlow_setNumIters');
  },
  getVars: function(){return [this.getFieldValue('FarnebackOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('FarnebackOpticalFlow'))){this.setFieldValue(newName,'FarnebackOpticalFlow');}},
};
Blockly.Blocks['video_FarnebackOpticalFlow_getPolyN'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getPolyN');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('FarnebackOpticalFlow'), 'FarnebackOpticalFlow');
    this.setOutput(true,'Number');
    this.setTooltip('video_FarnebackOpticalFlow_getPolyN');
  },
  getVars: function(){return [this.getFieldValue('FarnebackOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('FarnebackOpticalFlow'))){this.setFieldValue(newName,'FarnebackOpticalFlow');}},
};
Blockly.Blocks['video_FarnebackOpticalFlow_setPolyN'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setPolyN');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('FarnebackOpticalFlow'), 'FarnebackOpticalFlow');
    this.appendDummyInput()
        .appendField('polyN')
        .appendField(new Blockly.FieldTextInput('0'), 'polyN');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_FarnebackOpticalFlow_setPolyN');
  },
  getVars: function(){return [this.getFieldValue('FarnebackOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('FarnebackOpticalFlow'))){this.setFieldValue(newName,'FarnebackOpticalFlow');}},
};
Blockly.Blocks['video_FarnebackOpticalFlow_getPolySigma'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getPolySigma');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('FarnebackOpticalFlow'), 'FarnebackOpticalFlow');
    this.setOutput(true,'Number');
    this.setTooltip('video_FarnebackOpticalFlow_getPolySigma');
  },
  getVars: function(){return [this.getFieldValue('FarnebackOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('FarnebackOpticalFlow'))){this.setFieldValue(newName,'FarnebackOpticalFlow');}},
};
Blockly.Blocks['video_FarnebackOpticalFlow_setPolySigma'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setPolySigma');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('FarnebackOpticalFlow'), 'FarnebackOpticalFlow');
    this.appendDummyInput()
        .appendField('polySigma')
        .appendField(new Blockly.FieldTextInput('0'), 'polySigma');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_FarnebackOpticalFlow_setPolySigma');
  },
  getVars: function(){return [this.getFieldValue('FarnebackOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('FarnebackOpticalFlow'))){this.setFieldValue(newName,'FarnebackOpticalFlow');}},
};
Blockly.Blocks['video_FarnebackOpticalFlow_getFlags'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getFlags');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('FarnebackOpticalFlow'), 'FarnebackOpticalFlow');
    this.setOutput(true,'Number');
    this.setTooltip('video_FarnebackOpticalFlow_getFlags');
  },
  getVars: function(){return [this.getFieldValue('FarnebackOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('FarnebackOpticalFlow'))){this.setFieldValue(newName,'FarnebackOpticalFlow');}},
};
Blockly.Blocks['video_FarnebackOpticalFlow_setFlags'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setFlags');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('FarnebackOpticalFlow'), 'FarnebackOpticalFlow');
    this.appendDummyInput()
        .appendField('flags')
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_FarnebackOpticalFlow_setFlags');
  },
  getVars: function(){return [this.getFieldValue('FarnebackOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('FarnebackOpticalFlow'))){this.setFieldValue(newName,'FarnebackOpticalFlow');}},
};
Blockly.Blocks['video_FarnebackOpticalFlow_create'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('FarnebackOpticalFlow_create');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('FarnebackOpticalFlow'), 'FarnebackOpticalFlow');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_FarnebackOpticalFlow_create');
  },
  getVars: function(){return [this.getFieldValue('FarnebackOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('FarnebackOpticalFlow'))){this.setFieldValue(newName,'FarnebackOpticalFlow');}},
};
Blockly.Blocks['video_SparseOpticalFlow_calc'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('calc');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('SparseOpticalFlow'), 'SparseOpticalFlow');
    this.appendValueInput('prevImg')
        .appendField('prevImg')
        .setCheck('image');
    this.appendValueInput('nextImg')
        .appendField('nextImg')
        .setCheck('image');
    this.appendValueInput('prevPts')
        .appendField('prevPts')
        .setCheck('image');
    this.appendValueInput('nextPts')
        .appendField('nextPts')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('video_SparseOpticalFlow_calc');
  },
  getVars: function(){return [this.getFieldValue('SparseOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('SparseOpticalFlow'))){this.setFieldValue(newName,'SparseOpticalFlow');}},
};
Blockly.Blocks['video_DenseOpticalFlow_calc'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('calc');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DenseOpticalFlow'), 'DenseOpticalFlow');
    this.appendValueInput('I0')
        .appendField('I0')
        .setCheck('image');
    this.appendValueInput('I1')
        .appendField('I1')
        .setCheck('image');
    this.appendValueInput('flow')
        .appendField('flow')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('video_DenseOpticalFlow_calc');
  },
  getVars: function(){return [this.getFieldValue('DenseOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DenseOpticalFlow'))){this.setFieldValue(newName,'DenseOpticalFlow');}},
};
Blockly.Blocks['video_DenseOpticalFlow_collectGarbage'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('collectGarbage');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DenseOpticalFlow'), 'DenseOpticalFlow');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_DenseOpticalFlow_collectGarbage');
  },
  getVars: function(){return [this.getFieldValue('DenseOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DenseOpticalFlow'))){this.setFieldValue(newName,'DenseOpticalFlow');}},
};
Blockly.Blocks['video_BackgroundSubtractor_apply'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('apply');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractor'), 'BackgroundSubtractor');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('video_BackgroundSubtractor_apply');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractor')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractor'))){this.setFieldValue(newName,'BackgroundSubtractor');}},
};
Blockly.Blocks['video_BackgroundSubtractor_getBackgroundImage'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getBackgroundImage');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('BackgroundSubtractor'), 'BackgroundSubtractor');
    this.setOutput(true,'image');
    this.setTooltip('video_BackgroundSubtractor_getBackgroundImage');
  },
  getVars: function(){return [this.getFieldValue('BackgroundSubtractor')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('BackgroundSubtractor'))){this.setFieldValue(newName,'BackgroundSubtractor');}},
};
Blockly.Blocks['video_DISOpticalFlow_getFinestScale'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getFinestScale');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DISOpticalFlow'), 'DISOpticalFlow');
    this.setOutput(true,'Number');
    this.setTooltip('video_DISOpticalFlow_getFinestScale');
  },
  getVars: function(){return [this.getFieldValue('DISOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DISOpticalFlow'))){this.setFieldValue(newName,'DISOpticalFlow');}},
};
Blockly.Blocks['video_DISOpticalFlow_setFinestScale'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setFinestScale');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DISOpticalFlow'), 'DISOpticalFlow');
    this.appendDummyInput()
        .appendField('val')
        .appendField(new Blockly.FieldTextInput('0'), 'val');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_DISOpticalFlow_setFinestScale');
  },
  getVars: function(){return [this.getFieldValue('DISOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DISOpticalFlow'))){this.setFieldValue(newName,'DISOpticalFlow');}},
};
Blockly.Blocks['video_DISOpticalFlow_getPatchSize'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getPatchSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DISOpticalFlow'), 'DISOpticalFlow');
    this.setOutput(true,'Number');
    this.setTooltip('video_DISOpticalFlow_getPatchSize');
  },
  getVars: function(){return [this.getFieldValue('DISOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DISOpticalFlow'))){this.setFieldValue(newName,'DISOpticalFlow');}},
};
Blockly.Blocks['video_DISOpticalFlow_setPatchSize'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setPatchSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DISOpticalFlow'), 'DISOpticalFlow');
    this.appendDummyInput()
        .appendField('val')
        .appendField(new Blockly.FieldTextInput('0'), 'val');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_DISOpticalFlow_setPatchSize');
  },
  getVars: function(){return [this.getFieldValue('DISOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DISOpticalFlow'))){this.setFieldValue(newName,'DISOpticalFlow');}},
};
Blockly.Blocks['video_DISOpticalFlow_getPatchStride'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getPatchStride');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DISOpticalFlow'), 'DISOpticalFlow');
    this.setOutput(true,'Number');
    this.setTooltip('video_DISOpticalFlow_getPatchStride');
  },
  getVars: function(){return [this.getFieldValue('DISOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DISOpticalFlow'))){this.setFieldValue(newName,'DISOpticalFlow');}},
};
Blockly.Blocks['video_DISOpticalFlow_setPatchStride'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setPatchStride');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DISOpticalFlow'), 'DISOpticalFlow');
    this.appendDummyInput()
        .appendField('val')
        .appendField(new Blockly.FieldTextInput('0'), 'val');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_DISOpticalFlow_setPatchStride');
  },
  getVars: function(){return [this.getFieldValue('DISOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DISOpticalFlow'))){this.setFieldValue(newName,'DISOpticalFlow');}},
};
Blockly.Blocks['video_DISOpticalFlow_getGradientDescentIterations'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getGradientDescentIterations');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DISOpticalFlow'), 'DISOpticalFlow');
    this.setOutput(true,'Number');
    this.setTooltip('video_DISOpticalFlow_getGradientDescentIterations');
  },
  getVars: function(){return [this.getFieldValue('DISOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DISOpticalFlow'))){this.setFieldValue(newName,'DISOpticalFlow');}},
};
Blockly.Blocks['video_DISOpticalFlow_setGradientDescentIterations'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setGradientDescentIterations');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DISOpticalFlow'), 'DISOpticalFlow');
    this.appendDummyInput()
        .appendField('val')
        .appendField(new Blockly.FieldTextInput('0'), 'val');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_DISOpticalFlow_setGradientDescentIterations');
  },
  getVars: function(){return [this.getFieldValue('DISOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DISOpticalFlow'))){this.setFieldValue(newName,'DISOpticalFlow');}},
};
Blockly.Blocks['video_DISOpticalFlow_getVariationalRefinementIterations'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getVariationalRefinementIterations');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DISOpticalFlow'), 'DISOpticalFlow');
    this.setOutput(true,'Number');
    this.setTooltip('video_DISOpticalFlow_getVariationalRefinementIterations');
  },
  getVars: function(){return [this.getFieldValue('DISOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DISOpticalFlow'))){this.setFieldValue(newName,'DISOpticalFlow');}},
};
Blockly.Blocks['video_DISOpticalFlow_setVariationalRefinementIterations'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setVariationalRefinementIterations');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DISOpticalFlow'), 'DISOpticalFlow');
    this.appendDummyInput()
        .appendField('val')
        .appendField(new Blockly.FieldTextInput('0'), 'val');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_DISOpticalFlow_setVariationalRefinementIterations');
  },
  getVars: function(){return [this.getFieldValue('DISOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DISOpticalFlow'))){this.setFieldValue(newName,'DISOpticalFlow');}},
};
Blockly.Blocks['video_DISOpticalFlow_getVariationalRefinementAlpha'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getVariationalRefinementAlpha');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DISOpticalFlow'), 'DISOpticalFlow');
    this.setOutput(true,'Number');
    this.setTooltip('video_DISOpticalFlow_getVariationalRefinementAlpha');
  },
  getVars: function(){return [this.getFieldValue('DISOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DISOpticalFlow'))){this.setFieldValue(newName,'DISOpticalFlow');}},
};
Blockly.Blocks['video_DISOpticalFlow_setVariationalRefinementAlpha'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setVariationalRefinementAlpha');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DISOpticalFlow'), 'DISOpticalFlow');
    this.appendDummyInput()
        .appendField('val')
        .appendField(new Blockly.FieldTextInput('0'), 'val');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_DISOpticalFlow_setVariationalRefinementAlpha');
  },
  getVars: function(){return [this.getFieldValue('DISOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DISOpticalFlow'))){this.setFieldValue(newName,'DISOpticalFlow');}},
};
Blockly.Blocks['video_DISOpticalFlow_getVariationalRefinementDelta'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getVariationalRefinementDelta');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DISOpticalFlow'), 'DISOpticalFlow');
    this.setOutput(true,'Number');
    this.setTooltip('video_DISOpticalFlow_getVariationalRefinementDelta');
  },
  getVars: function(){return [this.getFieldValue('DISOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DISOpticalFlow'))){this.setFieldValue(newName,'DISOpticalFlow');}},
};
Blockly.Blocks['video_DISOpticalFlow_setVariationalRefinementDelta'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setVariationalRefinementDelta');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DISOpticalFlow'), 'DISOpticalFlow');
    this.appendDummyInput()
        .appendField('val')
        .appendField(new Blockly.FieldTextInput('0'), 'val');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_DISOpticalFlow_setVariationalRefinementDelta');
  },
  getVars: function(){return [this.getFieldValue('DISOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DISOpticalFlow'))){this.setFieldValue(newName,'DISOpticalFlow');}},
};
Blockly.Blocks['video_DISOpticalFlow_getVariationalRefinementGamma'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getVariationalRefinementGamma');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DISOpticalFlow'), 'DISOpticalFlow');
    this.setOutput(true,'Number');
    this.setTooltip('video_DISOpticalFlow_getVariationalRefinementGamma');
  },
  getVars: function(){return [this.getFieldValue('DISOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DISOpticalFlow'))){this.setFieldValue(newName,'DISOpticalFlow');}},
};
Blockly.Blocks['video_DISOpticalFlow_setVariationalRefinementGamma'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setVariationalRefinementGamma');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DISOpticalFlow'), 'DISOpticalFlow');
    this.appendDummyInput()
        .appendField('val')
        .appendField(new Blockly.FieldTextInput('0'), 'val');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_DISOpticalFlow_setVariationalRefinementGamma');
  },
  getVars: function(){return [this.getFieldValue('DISOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DISOpticalFlow'))){this.setFieldValue(newName,'DISOpticalFlow');}},
};
Blockly.Blocks['video_DISOpticalFlow_getUseMeanNormalization'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getUseMeanNormalization');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DISOpticalFlow'), 'DISOpticalFlow');
    this.setOutput(true);
    this.setTooltip('video_DISOpticalFlow_getUseMeanNormalization');
  },
  getVars: function(){return [this.getFieldValue('DISOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DISOpticalFlow'))){this.setFieldValue(newName,'DISOpticalFlow');}},
};
Blockly.Blocks['video_DISOpticalFlow_setUseMeanNormalization'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setUseMeanNormalization');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DISOpticalFlow'), 'DISOpticalFlow');
    this.appendValueInput('val')
        .appendField('val');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_DISOpticalFlow_setUseMeanNormalization');
  },
  getVars: function(){return [this.getFieldValue('DISOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DISOpticalFlow'))){this.setFieldValue(newName,'DISOpticalFlow');}},
};
Blockly.Blocks['video_DISOpticalFlow_getUseSpatialPropagation'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getUseSpatialPropagation');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DISOpticalFlow'), 'DISOpticalFlow');
    this.setOutput(true);
    this.setTooltip('video_DISOpticalFlow_getUseSpatialPropagation');
  },
  getVars: function(){return [this.getFieldValue('DISOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DISOpticalFlow'))){this.setFieldValue(newName,'DISOpticalFlow');}},
};
Blockly.Blocks['video_DISOpticalFlow_setUseSpatialPropagation'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setUseSpatialPropagation');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DISOpticalFlow'), 'DISOpticalFlow');
    this.appendValueInput('val')
        .appendField('val');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_DISOpticalFlow_setUseSpatialPropagation');
  },
  getVars: function(){return [this.getFieldValue('DISOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DISOpticalFlow'))){this.setFieldValue(newName,'DISOpticalFlow');}},
};
Blockly.Blocks['video_DISOpticalFlow_create'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('DISOpticalFlow_create');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('DISOpticalFlow'), 'DISOpticalFlow');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_DISOpticalFlow_create');
  },
  getVars: function(){return [this.getFieldValue('DISOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('DISOpticalFlow'))){this.setFieldValue(newName,'DISOpticalFlow');}},
};
Blockly.Blocks['video_KalmanFilter_KalmanFilter'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('KalmanFilter');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('KalmanFilter'), 'KalmanFilter');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_KalmanFilter_KalmanFilter');
  },
  getVars: function(){return [this.getFieldValue('KalmanFilter')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('KalmanFilter'))){this.setFieldValue(newName,'KalmanFilter');}},
};
Blockly.Blocks['video_KalmanFilter_predict'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('predict');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('KalmanFilter'), 'KalmanFilter');
    this.setOutput(true,'image');
    this.setTooltip('video_KalmanFilter_predict');
  },
  getVars: function(){return [this.getFieldValue('KalmanFilter')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('KalmanFilter'))){this.setFieldValue(newName,'KalmanFilter');}},
};
Blockly.Blocks['video_KalmanFilter_correct'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('correct');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('KalmanFilter'), 'KalmanFilter');
    this.appendValueInput('measurement')
        .appendField('measurement')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('video_KalmanFilter_correct');
  },
  getVars: function(){return [this.getFieldValue('KalmanFilter')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('KalmanFilter'))){this.setFieldValue(newName,'KalmanFilter');}},
};
Blockly.Blocks['video_SparsePyrLKOpticalFlow_getWinSize'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getWinSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('SparsePyrLKOpticalFlow'), 'SparsePyrLKOpticalFlow');
    this.setOutput(true,'size');
    this.setTooltip('video_SparsePyrLKOpticalFlow_getWinSize');
  },
  getVars: function(){return [this.getFieldValue('SparsePyrLKOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('SparsePyrLKOpticalFlow'))){this.setFieldValue(newName,'SparsePyrLKOpticalFlow');}},
};
Blockly.Blocks['video_SparsePyrLKOpticalFlow_setWinSize'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setWinSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('SparsePyrLKOpticalFlow'), 'SparsePyrLKOpticalFlow');
    this.appendValueInput('winSize')
        .appendField('winSize')
        .setCheck('size');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_SparsePyrLKOpticalFlow_setWinSize');
  },
  getVars: function(){return [this.getFieldValue('SparsePyrLKOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('SparsePyrLKOpticalFlow'))){this.setFieldValue(newName,'SparsePyrLKOpticalFlow');}},
};
Blockly.Blocks['video_SparsePyrLKOpticalFlow_getMaxLevel'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getMaxLevel');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('SparsePyrLKOpticalFlow'), 'SparsePyrLKOpticalFlow');
    this.setOutput(true,'Number');
    this.setTooltip('video_SparsePyrLKOpticalFlow_getMaxLevel');
  },
  getVars: function(){return [this.getFieldValue('SparsePyrLKOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('SparsePyrLKOpticalFlow'))){this.setFieldValue(newName,'SparsePyrLKOpticalFlow');}},
};
Blockly.Blocks['video_SparsePyrLKOpticalFlow_setMaxLevel'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setMaxLevel');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('SparsePyrLKOpticalFlow'), 'SparsePyrLKOpticalFlow');
    this.appendDummyInput()
        .appendField('maxLevel')
        .appendField(new Blockly.FieldTextInput('0'), 'maxLevel');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_SparsePyrLKOpticalFlow_setMaxLevel');
  },
  getVars: function(){return [this.getFieldValue('SparsePyrLKOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('SparsePyrLKOpticalFlow'))){this.setFieldValue(newName,'SparsePyrLKOpticalFlow');}},
};
Blockly.Blocks['video_SparsePyrLKOpticalFlow_getTermCriteria'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getTermCriteria');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('SparsePyrLKOpticalFlow'), 'SparsePyrLKOpticalFlow');
    this.setOutput(true);
    this.setTooltip('video_SparsePyrLKOpticalFlow_getTermCriteria');
  },
  getVars: function(){return [this.getFieldValue('SparsePyrLKOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('SparsePyrLKOpticalFlow'))){this.setFieldValue(newName,'SparsePyrLKOpticalFlow');}},
};
Blockly.Blocks['video_SparsePyrLKOpticalFlow_setTermCriteria'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setTermCriteria');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('SparsePyrLKOpticalFlow'), 'SparsePyrLKOpticalFlow');
    this.appendValueInput('crit')
        .appendField('crit');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_SparsePyrLKOpticalFlow_setTermCriteria');
  },
  getVars: function(){return [this.getFieldValue('SparsePyrLKOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('SparsePyrLKOpticalFlow'))){this.setFieldValue(newName,'SparsePyrLKOpticalFlow');}},
};
Blockly.Blocks['video_SparsePyrLKOpticalFlow_getFlags'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getFlags');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('SparsePyrLKOpticalFlow'), 'SparsePyrLKOpticalFlow');
    this.setOutput(true,'Number');
    this.setTooltip('video_SparsePyrLKOpticalFlow_getFlags');
  },
  getVars: function(){return [this.getFieldValue('SparsePyrLKOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('SparsePyrLKOpticalFlow'))){this.setFieldValue(newName,'SparsePyrLKOpticalFlow');}},
};
Blockly.Blocks['video_SparsePyrLKOpticalFlow_setFlags'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setFlags');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('SparsePyrLKOpticalFlow'), 'SparsePyrLKOpticalFlow');
    this.appendDummyInput()
        .appendField('flags')
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_SparsePyrLKOpticalFlow_setFlags');
  },
  getVars: function(){return [this.getFieldValue('SparsePyrLKOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('SparsePyrLKOpticalFlow'))){this.setFieldValue(newName,'SparsePyrLKOpticalFlow');}},
};
Blockly.Blocks['video_SparsePyrLKOpticalFlow_getMinEigThreshold'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getMinEigThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('SparsePyrLKOpticalFlow'), 'SparsePyrLKOpticalFlow');
    this.setOutput(true,'Number');
    this.setTooltip('video_SparsePyrLKOpticalFlow_getMinEigThreshold');
  },
  getVars: function(){return [this.getFieldValue('SparsePyrLKOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('SparsePyrLKOpticalFlow'))){this.setFieldValue(newName,'SparsePyrLKOpticalFlow');}},
};
Blockly.Blocks['video_SparsePyrLKOpticalFlow_setMinEigThreshold'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setMinEigThreshold');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('SparsePyrLKOpticalFlow'), 'SparsePyrLKOpticalFlow');
    this.appendDummyInput()
        .appendField('minEigThreshold')
        .appendField(new Blockly.FieldTextInput('0'), 'minEigThreshold');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_SparsePyrLKOpticalFlow_setMinEigThreshold');
  },
  getVars: function(){return [this.getFieldValue('SparsePyrLKOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('SparsePyrLKOpticalFlow'))){this.setFieldValue(newName,'SparsePyrLKOpticalFlow');}},
};
Blockly.Blocks['video_SparsePyrLKOpticalFlow_create'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('SparsePyrLKOpticalFlow_create');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('SparsePyrLKOpticalFlow'), 'SparsePyrLKOpticalFlow');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_SparsePyrLKOpticalFlow_create');
  },
  getVars: function(){return [this.getFieldValue('SparsePyrLKOpticalFlow')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('SparsePyrLKOpticalFlow'))){this.setFieldValue(newName,'SparsePyrLKOpticalFlow');}},
};
Blockly.Blocks['video_VariationalRefinement_calcUV'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('calcUV');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('VariationalRefinement'), 'VariationalRefinement');
    this.appendValueInput('I0')
        .appendField('I0')
        .setCheck('image');
    this.appendValueInput('I1')
        .appendField('I1')
        .setCheck('image');
    this.appendValueInput('flow_u')
        .appendField('flow_u')
        .setCheck('image');
    this.appendValueInput('flow_v')
        .appendField('flow_v')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('video_VariationalRefinement_calcUV');
  },
  getVars: function(){return [this.getFieldValue('VariationalRefinement')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('VariationalRefinement'))){this.setFieldValue(newName,'VariationalRefinement');}},
};
Blockly.Blocks['video_VariationalRefinement_getFixedPointIterations'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getFixedPointIterations');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('VariationalRefinement'), 'VariationalRefinement');
    this.setOutput(true,'Number');
    this.setTooltip('video_VariationalRefinement_getFixedPointIterations');
  },
  getVars: function(){return [this.getFieldValue('VariationalRefinement')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('VariationalRefinement'))){this.setFieldValue(newName,'VariationalRefinement');}},
};
Blockly.Blocks['video_VariationalRefinement_setFixedPointIterations'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setFixedPointIterations');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('VariationalRefinement'), 'VariationalRefinement');
    this.appendDummyInput()
        .appendField('val')
        .appendField(new Blockly.FieldTextInput('0'), 'val');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_VariationalRefinement_setFixedPointIterations');
  },
  getVars: function(){return [this.getFieldValue('VariationalRefinement')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('VariationalRefinement'))){this.setFieldValue(newName,'VariationalRefinement');}},
};
Blockly.Blocks['video_VariationalRefinement_getSorIterations'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getSorIterations');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('VariationalRefinement'), 'VariationalRefinement');
    this.setOutput(true,'Number');
    this.setTooltip('video_VariationalRefinement_getSorIterations');
  },
  getVars: function(){return [this.getFieldValue('VariationalRefinement')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('VariationalRefinement'))){this.setFieldValue(newName,'VariationalRefinement');}},
};
Blockly.Blocks['video_VariationalRefinement_setSorIterations'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setSorIterations');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('VariationalRefinement'), 'VariationalRefinement');
    this.appendDummyInput()
        .appendField('val')
        .appendField(new Blockly.FieldTextInput('0'), 'val');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_VariationalRefinement_setSorIterations');
  },
  getVars: function(){return [this.getFieldValue('VariationalRefinement')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('VariationalRefinement'))){this.setFieldValue(newName,'VariationalRefinement');}},
};
Blockly.Blocks['video_VariationalRefinement_getOmega'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getOmega');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('VariationalRefinement'), 'VariationalRefinement');
    this.setOutput(true,'Number');
    this.setTooltip('video_VariationalRefinement_getOmega');
  },
  getVars: function(){return [this.getFieldValue('VariationalRefinement')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('VariationalRefinement'))){this.setFieldValue(newName,'VariationalRefinement');}},
};
Blockly.Blocks['video_VariationalRefinement_setOmega'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setOmega');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('VariationalRefinement'), 'VariationalRefinement');
    this.appendDummyInput()
        .appendField('val')
        .appendField(new Blockly.FieldTextInput('0'), 'val');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_VariationalRefinement_setOmega');
  },
  getVars: function(){return [this.getFieldValue('VariationalRefinement')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('VariationalRefinement'))){this.setFieldValue(newName,'VariationalRefinement');}},
};
Blockly.Blocks['video_VariationalRefinement_getAlpha'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getAlpha');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('VariationalRefinement'), 'VariationalRefinement');
    this.setOutput(true,'Number');
    this.setTooltip('video_VariationalRefinement_getAlpha');
  },
  getVars: function(){return [this.getFieldValue('VariationalRefinement')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('VariationalRefinement'))){this.setFieldValue(newName,'VariationalRefinement');}},
};
Blockly.Blocks['video_VariationalRefinement_setAlpha'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setAlpha');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('VariationalRefinement'), 'VariationalRefinement');
    this.appendDummyInput()
        .appendField('val')
        .appendField(new Blockly.FieldTextInput('0'), 'val');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_VariationalRefinement_setAlpha');
  },
  getVars: function(){return [this.getFieldValue('VariationalRefinement')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('VariationalRefinement'))){this.setFieldValue(newName,'VariationalRefinement');}},
};
Blockly.Blocks['video_VariationalRefinement_getDelta'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getDelta');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('VariationalRefinement'), 'VariationalRefinement');
    this.setOutput(true,'Number');
    this.setTooltip('video_VariationalRefinement_getDelta');
  },
  getVars: function(){return [this.getFieldValue('VariationalRefinement')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('VariationalRefinement'))){this.setFieldValue(newName,'VariationalRefinement');}},
};
Blockly.Blocks['video_VariationalRefinement_setDelta'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setDelta');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('VariationalRefinement'), 'VariationalRefinement');
    this.appendDummyInput()
        .appendField('val')
        .appendField(new Blockly.FieldTextInput('0'), 'val');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_VariationalRefinement_setDelta');
  },
  getVars: function(){return [this.getFieldValue('VariationalRefinement')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('VariationalRefinement'))){this.setFieldValue(newName,'VariationalRefinement');}},
};
Blockly.Blocks['video_VariationalRefinement_getGamma'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('getGamma');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('VariationalRefinement'), 'VariationalRefinement');
    this.setOutput(true,'Number');
    this.setTooltip('video_VariationalRefinement_getGamma');
  },
  getVars: function(){return [this.getFieldValue('VariationalRefinement')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('VariationalRefinement'))){this.setFieldValue(newName,'VariationalRefinement');}},
};
Blockly.Blocks['video_VariationalRefinement_setGamma'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('setGamma');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('VariationalRefinement'), 'VariationalRefinement');
    this.appendDummyInput()
        .appendField('val')
        .appendField(new Blockly.FieldTextInput('0'), 'val');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_VariationalRefinement_setGamma');
  },
  getVars: function(){return [this.getFieldValue('VariationalRefinement')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('VariationalRefinement'))){this.setFieldValue(newName,'VariationalRefinement');}},
};
Blockly.Blocks['video_VariationalRefinement_create'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('VariationalRefinement_create');
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('VariationalRefinement'), 'VariationalRefinement');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_VariationalRefinement_create');
  },
  getVars: function(){return [this.getFieldValue('VariationalRefinement')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('VariationalRefinement'))){this.setFieldValue(newName,'VariationalRefinement');}},
};
