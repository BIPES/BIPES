// Pinout
Blockly.Blocks['pinout'] = {
  update_list: function(load_) {
    let device_init_ = this.device_init;
    let device_ = this.getFieldValue('DEVICE');
    if (!device_) device_ = device_init_;
    /* make device name if it do not match with workspace */
    if (device_ !== device_init_)
      this.setColour(1);
    else if (device_ === device_init_)
      this.setColour(230);  // this.setDisabled causes all modifiers to stop working at the workspace, using visual colour feedback instead.
    if (this.first_load < 1 && load_) {
      device_ = device_init_;
      this.setColour(230);
      this.getField('DEVICE').doValueUpdate_(device_);
    } else {
      this.first_load = this.first_load - 1; // function is triggered twice on load due to setting values
    }
    this.setTooltip(device_ + " Pins");
    let devices = UI ['workspace'].devices

    if (device_  in  devices && 'pinout' in devices [device_]){
      return devices [device_].pinout;
    } else {
      return [[MSG["notDefined"],"None"]];
    }
  },
  refresh: function() {
    this.device_init = document.querySelector ('#device_selector').value
    this.update_list(false);
  },
  device_init: '',
  options: [],
  first_load: 2,
  init: function() {

    /*
    "this.getField('DEVICE').SERIALIZABLE = true;" could be used instead of FieldLabelSerializable
    */
    this.device_init = document.querySelector ('#device_selector').value;
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable(this.device_init), 'DEVICE') // will use device_init if new block or no device specification on XML.
        .appendField(MSG["pin"])
        //.appendField('pin')
        .appendField(new Blockly.FieldDropdown(() => { return this.update_list(true);}), 'PIN');
    this.getField('DEVICE').setVisible(false);
    this.setOutput(true, null);
    this.setColour(230);
    this.setHelpUrl("http://www.bipes.net.br");
  },
}

// GPIO Set
Blockly.Blocks['gpio_set'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        //.appendField("set pin");
        .appendField(MSG["setpin"]);//i18n
    this.appendValueInput("value")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        //.appendField("to");
        .appendField(MSG["to"]); //i18n
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Write to GPIO digital pin");
 this.setHelpUrl("bipes.net.br");
  }
}

// GPIO get
Blockly.Blocks['gpio_get'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck("Number")
        //.appendField("Read digital pin");//original
        .appendField(MSG["read_digital_pin"]);
    this.appendValueInput("pullup")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pull-up");

    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Read digital pin");
 this.setHelpUrl("http://www.bipes.net.br");
  }
}

// ADC
Blockly.Blocks['adc'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck("Number")
        //.appendField("Read ADC Input");
        .appendField(MSG["read_analog_pin"]);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Read ADC input of specified pin");
 this.setHelpUrl("http://www.bipes.net.br");
  }
}

// PWM
Blockly.Blocks['pwm'] = {
  init: function(){
    this.appendDummyInput()
        .appendField("PWM #")
        .appendField(new Blockly.FieldNumber(0, 0, 50, 1), "ID");
    this.appendValueInput("pin")
        .setCheck(null)
	      .appendField("Pin");
    this.appendValueInput("frequency")
        .setCheck("Number")
	      .appendField("Frequency");
    this.appendValueInput("duty")
        .setCheck("Number")
	      .appendField("Duty");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Init and set PWM with frequency (1Hz to 40MHz) and duty (0-1023)");
    this.setHelpUrl("https://docs.micropython.org/en/latest/esp32/quickref.html#pwm-pulse-width-modulation");
 },
  setID: function(id_) {
    this.setFieldValue(id_, "ID")
  },
  check (values, id) {
    Tool.warningIfTrue (this, [
      [() => (!isNaN(parseFloat(values [0])) && parseFloat(values [0]) % 1 != 0), `Cannot convert float to int directly.`],
      [() => (!isNaN(parseFloat(values [1])) && parseFloat(values [1]) % 1 != 0), `Cannot convert float to int directly.`]
    ]);
  }
}

// PWM Freq
Blockly.Blocks['pwm.freq'] = {
  init: function() {
    this.appendValueInput('frequency')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("PWM #")
        .appendField(new Blockly.FieldNumber(0, 0, 50, 1), "ID")
        .appendField("frequency");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Set PWM frequency from 1Hz to 40MHz");
    this.setHelpUrl("https://docs.micropython.org/en/latest/esp32/quickref.html#pwm-pulse-width-modulation");
  },
  check (value, id) {
    Tool.warningIfTrue (this, [
      [() => (!isNaN(parseFloat(value)) && parseFloat(value) % 1 != 0), `Cannot convert float to int directly.`]
    ]);
  }
}

// PWM duty
Blockly.Blocks['pwm.duty'] = {
  init: function() {
    this.appendValueInput('duty')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("PWM #")
        .appendField(new Blockly.FieldNumber(0, 0, 50, 1), "ID")
        .appendField("duty");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Set PWM duty range of 0-1023");
    this.setHelpUrl("https://docs.micropython.org/en/latest/esp32/quickref.html#pwm-pulse-width-modulation");
  },
  check (value, id) {
    Tool.warningIfTrue (this, [
      [() => (!isNaN(parseFloat(value)) && parseFloat(value) % 1 != 0), `Cannot convert float to int directly.`]
    ]);
  }
}

// PWM init
Blockly.Blocks['pwm.init'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck(null)
        .appendField("PWM #")
        .appendField(new Blockly.FieldNumber(0, 0, 50, 1), "ID")
        .appendField("init");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Init PWM");
    this.setHelpUrl("https://docs.micropython.org/en/latest/esp32/quickref.html#pwm-pulse-width-modulation");
  },
   setID: function(id_) {
    this.setFieldValue(id_, "ID")
  }
};

// PWM deinit
Blockly.Blocks['pwm.deinit'] = {
  init: function() {
    this.appendDummyInput('')
        .appendField("deinit PWM #")
        .appendField(new Blockly.FieldNumber(0, 0, 50, 1), "ID");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Deinit PWM");
    this.setHelpUrl("https://docs.micropython.org/en/latest/esp32/quickref.html#pwm-pulse-width-modulation");
  }
}

// GPIO interrupt
Blockly.Blocks['gpio_interrupt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("External event (Interrupt on Input Pin)");
    this.appendDummyInput()
        .appendField("Trigger:")
        .appendField(new Blockly.FieldDropdown([["IRQ_FALLING","IRQ_FALLING"], ["IRQ_RISING","IRQ_RISING"], ["IRQ_FALLING and IRQ_RISING","BOTH"]]), "trigger");
    this.appendValueInput("pin")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pin");
    this.appendStatementInput("code")
        .setCheck(null)
        .appendField("do");
    this.setColour(230);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("Trigger interrupt when pin state changes");
 this.setHelpUrl("bipes.net.br");
  }
}

// GPIO interrupt off
Blockly.Blocks['gpio_interrupt_off'] = {
  init: function() {

    this.appendValueInput("pin")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Disable interrupt on pin");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Disable interrupt on a given pin");
 this.setHelpUrl("bipes.net.br");
  }
}
