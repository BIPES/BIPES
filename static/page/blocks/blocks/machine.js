// CPU ------------------------------------------------------------------------

Blockly.Blocks['set_freq'] = {
  init: function() {
   this.appendDummyInput()
        .appendField("Set CPU Clock Frequency");

    this.appendValueInput("freq")
        .setCheck("Number")
        .appendField("Frequency (Hz)");
    //this.setOutput(true, null);


    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setColour(230);
 this.setTooltip("Set ESP8266 CPU Clock Frequency");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['get_freq'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get CPU Clock Frequency");

    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Get current CPU Clock Frequency");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks["machine_unique_id"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" unique_id");
    this.setColour(0);

    this.setOutput(true, null);

 this.setTooltip(".. function:: unique_id() Returns a byte string with a unique identifier of a board/SoC. It will vary from a board/SoC instance to another, if underlying hardware allows. Length ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.html");
  }
};


Blockly.Blocks["machine_reset_cause"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" reset_cause");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: reset_cause() Get the reset cause. See :ref:`constants <machine_constants>` for the possibl e return values. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.html");
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

Blockly.Blocks['reset_cause_soft'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Cause: soft reset");
    this.setOutput(true, null);
    this.setColour(230);
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['reset_cause_hard'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Cause: hard reset");
    this.setOutput(true, null);
    this.setColour(230);
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['reset_cause_wdt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Cause: reset by watchdog timer");
    this.setOutput(true, null);
    this.setColour(230);
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['reset_cause_deep'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Cause: woke up from deepsleep");
    this.setOutput(true, null);
    this.setColour(230);
 this.setHelpUrl("http://www.bipes.net.br");
  }
};



// In/Out Pins ----------------------------------------------------------------
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
      this.setColour(230);
    if (this.first_load < 1 && load_) {
      device_ = device_init_;
      this.setColour(230);
      this.getField('DEVICE').doValueUpdate_(device_);
    } else {
      this.first_load = this.first_load - 1; // function is triggered twice on load due to setting values
    }
    this.setTooltip(device_ + " Pins");
    let devices = bipes.page.device.deviceInfo

    if (device_  in  devices && 'pinout' in devices [device_]){
      return devices [device_].pinout;
    } else {
      return [[Msg["notDefined"],"None"]];
    }
  },
  refresh: function(target) {
    this.device_init = target
    this.update_list(false)
  },
  device_init: '',
  options: [],
  first_load: 2,
  init: function() {

    /*
    "this.getField('DEVICE').SERIALIZABLE = true;" could be used instead of FieldLabelSerializable
    */
    this.device_init = bipes.page.project.current.device.target
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable(this.device_init), 'DEVICE') // will use device_init if new block or no device specification on XML.
        .appendField(Msg["pin"])
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
        .appendField(Msg["setpin"]);//i18n
    this.appendValueInput("value")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        //.appendField("to");
        .appendField(Msg["to"]); //i18n
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
        .appendField(Msg["read_digital_pin"]);
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
        .appendField(Msg["read_analog_pin"]);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Read ADC input of specified pin");
 this.setHelpUrl("http://www.bipes.net.br");
  }
}


Blockly.Blocks['adc_esp32'] = {
  init: function() {
	if (bipes.page.project.current.device.target == "ESP32S2") {
		this.appendDummyInput()
		.appendField("ESP32S2 Analog Input (ADC)");
		this.appendValueInput("pin")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField("pin");
		this.setOutput(true, null);
		this.setTooltip("Read ESP32S2 Analog Input");
	}
	else {
		this.appendDummyInput()
		.appendField("ESP32 Analog Input (ADC)");
		this.appendDummyInput()
		.appendField("Attenuation: ")
		.appendField(new Blockly.FieldDropdown([["ATTN_0DB","0"], ["ATTN_2_5DB","1"], ["ATTN_6DB","2"], ["ATTN_11DB","3"]]), "Attenuation");
		this.appendDummyInput()
		.appendField("Width: ")
		.appendField(new Blockly.FieldDropdown([["WIDTH_9BIT","0"], ["WIDTH_10BIT","1"], ["WIDTH_11BIT","2"], ["WIDTH_12BIT","3"]]), "Width: ");
		this.appendValueInput("pin")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField("pin");
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip("Read ESP32 Analog Input");
	}

	this.setColour(230);
  }
};




Blockly.Blocks['adc_pico'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("Read RPI Pico ADC Input");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Read ADC input of specified pin from Raspberry Pi Pico");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

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
    bipes.page.blocks.warningIfTrue (this, [
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
    bipes.page.blocks.warningIfTrue (this, [
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
    bipes.page.blocks.warningIfTrue (this, [
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


// Snek Related ----------------------------------------------------------------
//Fri Aug  6 23:23:55 -03 2021
//Snek

/*
snek_delay
snek_uptime
snek_gpio_set
snek_gpio_get
*/

Blockly.Blocks['snek_gpio_set'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        //.appendField("set pin"); //original
        .appendField(MSG["setpin"]);//i18n
    this.appendValueInput("value")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        //.appendField("to"); original
        .appendField(MSG["to"]); //i18n
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Write to GPIO digital pin");
 this.setHelpUrl("bipes.net.br");
  }
};

Blockly.Blocks['snek_gpio_get'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("Snek: Read digital pin");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Read digital pin");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};



Blockly.Blocks['snek_adc'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("Snek: Read analog Input");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Read ADC input of specified pin");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['snek_setpower'] = {
  init: function(){
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Snek: Set power"), "MSG_GET_MS");
    this.appendValueInput("pin")
        .setCheck(null)
	.appendField("Pin");
    this.appendValueInput("duty")
        .setCheck(null)
	  .appendField("Power (0-1)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Snek Set Power");
 this.setHelpUrl("http://www.bipes.net.br");
 }
};
