Blockly.Blocks['delay'] = {
  init: function() {
    this.appendValueInput("TIME")
        .setCheck(null)
        .appendField(Msg["block_delay"]); //Ready for i18n (see dir Msg/<lang>.js)
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


Blockly.Blocks['utime.vars'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get")
        .appendField(new Blockly.FieldDropdown([["seconds","time"], ["milliseconds","ticks_ms"], ["microseconds","ticks_us"], ["nanoseconds","time_ns"], ["cpu ticks","ticks_cpu"]]), "VARS")
        .appendField("counter");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("Returns a counter in the defined scale, only integer values.");
   this.setHelpUrl("https://docs.micropython.org/en/latest/library/utime.html#utime.ticks_ms");
  }
};

Blockly.Blocks['utime.ticks_add'] = {
  init: function() {
    this.appendValueInput("TIME1")
        .setCheck(null)
        .appendField("sum time");
    this.appendValueInput("TIME2")
        .setCheck(null)
        .appendField("by");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("Offset ticks value by a given number, which can be either positive or negative. Must be same scale in milliseconds, microseconds or cpu ticks.");
    this.setHelpUrl("https://docs.micropython.org/en/latest/library/utime.html#utime.ticks_add");
  }
};
Blockly.Blocks['utime.ticks_diff'] = {
  init: function() {
    this.appendValueInput("TIME1")
        .setCheck(null)
        .appendField("time difference from");
    this.appendValueInput("TIME2")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("by");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("Measure ticks difference between values Must be same scale in milliseconds, microseconds or cpu ticks.");
    this.setHelpUrl("https://docs.micropython.org/en/latest/library/utime.html#utime.ticks_diff");
  }
};
Blockly.Blocks['utime.deadline'] = {
  init: function() {
    this.appendValueInput("TIME")
        .setCheck(null)
        .appendField("until deadline #")
        .appendField(new Blockly.FieldNumber(Math.floor(Math.random() * 10), 0, 9, 1), "ID")
        .appendField("of");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["seconds","time"], ["milliseconds","ticks_ms"], ["microseconds","ticks_us"], ["nanoseconds","time_ns"], ["cpu ticks","ticks_cpu"]]), "SCALE");
    this.appendStatementInput("DO")
        .setCheck(null)
        .appendField("do");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip("Creates a loop with deadline.");
    this.setHelpUrl("https://docs.micropython.org/en/latest/library/utime.html#utime.ticks_add");
  }
};


Blockly.Blocks['set_rtc_esp32'] = {
  init: function() {
   this.appendDummyInput().appendField(new Blockly.FieldLabelSerializable("Set RTC Value (ESP32)"), "SET_RTC");
    this.appendValueInput("year")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("year");

    this.appendValueInput("month")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("month");

    this.appendValueInput("day")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("day");

    this.appendValueInput("hour")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("hour");

    this.appendValueInput("minute")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("minute");

    this.appendValueInput("second")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("second");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
   this.setTooltip("Set RTC value");
   this.setHelpUrl("bipes.net.br");
  }
};


Blockly.Blocks['set_rtc_esp8266'] = {
  init: function() {
   this.appendDummyInput().appendField(new Blockly.FieldLabelSerializable(Msg["set_rtc"]), "SET_RTC");
    this.appendValueInput("year")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Msg["year"]);

    this.appendValueInput("month")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Msg["month"]);

    this.appendValueInput("day")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Msg["day"]);

    this.appendValueInput("hour")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Msg["hour"]);

    this.appendValueInput("minute")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Msg["minute"]);

    this.appendValueInput("second")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Msg["second"]);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
   this.setTooltip("Set RTC value");
   this.setHelpUrl("bipes.net.br");
  }
};

Blockly.Blocks['get_rtc_esp32'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable(Msg["get_rtc"]), "Msg_GET_RTC");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Get RTC value");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};


Blockly.Blocks['get_rtc_esp8266'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable(Msg["get_rtc"]), "Msg_GET_RTC");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Get RTC value");
 this.setHelpUrl("http://www.bipes.net.br");
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

// Snek Related ----------------------------------------------------------------
//Fri Aug  6 23:23:55 -03 2021
//Snek

/*
snek_delay
snek_uptime
snek_gpio_set
snek_gpio_get
*/

Blockly.Blocks['snek_uptime'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Sneck: time counter"), "Msg_GET_MS");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Get monotonic time counter");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};



Blockly.Blocks['snek_delay'] = {
  init: function() {
    this.appendValueInput("time")
        .setCheck("Number")
        .appendField("Snek: delay seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Delay processing in seconds");
 this.setHelpUrl("http://www.bipes.net.br/");
  }
};

