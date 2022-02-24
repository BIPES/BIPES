// Neopixel -------------------------------------------------------------------
Blockly.Blocks['neopixel_init'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Init NeoPixel");

 this.appendDummyInput()
      .appendField(new Blockly.FieldImage(
        "static/page/blocks/images/neopixel.png",
        55,
        55,
        "*"));

    this.appendValueInput("pin")
        .setCheck(null)
	.appendField("Pin");

    this.appendValueInput("number")
        .setCheck("Number")
	  .appendField("Number of LEDs");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("Init NeoPixel on the specified pin");
  }
};


Blockly.Blocks['neopixel_color_numbers'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Red");
    this.appendValueInput("red")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("Green");
    this.appendValueInput("green")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("Blue");
    this.appendValueInput("blue")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("NeoPixel LED RGB URL");
    this.setHelpUrl("https://bipes.net.br/wp/?page_id=177");
  },
  styleBlock: function(colours) {
    colours = colours.map(x => parseInt(x))
    colours = colours.includes(NaN) ? [89,102,166] : colours
    if(colours.every((e) => {return e <= 255}) && colours.every((e) => {return e >= 0})) {
      let hex_ = bipes.page.blocks.convertColor.RGB2HEX (colours [0], colours [1], colours [2]);
      this.setColour(hex_);
    } else
      this.setColour("#FF0000");
  }
};

Blockly.Blocks['neopixel_color_colors'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Color")
        .appendField(new Blockly.FieldColour("#ff0000"), "color");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("NeoPixel LED Color");
 this.setHelpUrl("https://bipes.net.br/wp/?page_id=177");
  }
};

Blockly.Blocks['HSL_to_RGB'] = {
  init: function  () {
    this.appendDummyInput()
        .appendField("Hue");
    this.appendValueInput("hue")
        .setCheck('Number');
    this.appendDummyInput()
        .appendField("Saturation");
    this.appendValueInput("saturation")
        .setCheck('Number');
    this.appendDummyInput()
        .appendField("Lightness");
    this.appendValueInput("lightness")
        .setCheck('Number');

    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("HUE to RGB color, Hue from 0º to 360º, Saturation and Lightness from 0% to 100%.");
    this.setHelpUrl("https://bipes.net.br/wp/?page_id=177");
  },

  styleBlock: function(colours) {
    colours = colours.map(x => parseFloat(x))
    colours = colours.includes(NaN) ? [230,30,50] : colours
    if (colours[0] <= 360 && colours[0] >= 0 && colours[1] >= 0 && colours[1] <= 100 && colours[2] >= 0 && colours[2] <= 100) {
      let hex_ = bipes.page.blocks.convertColor.HUE2HEX (colours [0], colours [1], colours [2]);
      this.setColour(hex_);
    } else
      this.setColour("#FF0000");
  }
};

Blockly.Blocks['neopixel_control'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabel("Control NeoPixel"), "MSG_NEOPIXEL");

    this.appendValueInput("address")
        .setCheck(null)
	.appendField("LED");

    this.appendValueInput("color")
        .setCheck("Number")
	  .appendField("Color");

    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setColour(230);
 this.setTooltip("Set NeoPixel");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};


Blockly.Blocks['neopixel_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabel("Write NeoPixel"), "MSG_NEOPIXEL");

    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setColour(230);
    this.setTooltip("Write NeoPixel");
    this.setHelpUrl("http://www.bipes.net.br");
  }
};

function componentToHex(c) {
  var hex =  parseInt(c).toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

// Character display -----------------------------------------------------------
Blockly.Blocks['char_lcd_init'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Init I2C Character LCD Display");

 this.appendDummyInput()
      .appendField(new Blockly.FieldImage(
        "static/page/blocks/images/lcd20x4.jpg",
        55,
        55,
        "*"));
        //.setAlign(Blockly.ALIGN_CENTRE);
	  //

    this.appendValueInput("sda")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SDA");

    this.appendValueInput("scl")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SCL");

    this.appendValueInput("lines")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Lines");

    this.appendValueInput("columns")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Columns");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['char_lcd_backlight'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("LCD Backlight");

    this.appendValueInput("state")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ON/OFF");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['char_lcd_display'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("LCD Power");

    this.appendValueInput("state")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ON/OFF");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};



Blockly.Blocks['char_lcd_clear'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Clear LCD");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['char_lcd_putstr'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Write text on LCD");

    this.appendValueInput("text")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Text");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['char_lcd_moveto'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Move LCD Cursor to");

    this.appendValueInput("x")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");

    this.appendValueInput("y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['char_lcd_backlight'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("LCD Backlight");

    this.appendValueInput("state")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ON/OFF");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['char_lcd_display'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("LCD Power");

    this.appendValueInput("state")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ON/OFF");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

// ST7789 Display --------------------------------------------------------------
Blockly.Blocks['st7789_init'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Init ST7789 Display");

 this.appendDummyInput()
      .appendField(new Blockly.FieldImage(
        "static/page/blocks/images/st7789.png",
        55,
        55,
        "*"));
        //.setAlign(Blockly.ALIGN_CENTRE);

    this.appendValueInput("spi")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SPI");

    this.appendValueInput("bl")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Backlight");

    this.appendValueInput("sck")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SCK");

    this.appendValueInput("mosi")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("MOSI");

    this.appendValueInput("reset")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Reset");

    this.appendValueInput("dc")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("DC");

    this.appendValueInput("cs")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CS");


    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['st7789_bl_power'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ST7789 backlight intensity");

    this.appendValueInput("val")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Value");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);

 this.setTooltip("Set ST7789 backlight intensity");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['st7789_color_numbers'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ST7789 Color: Red");
    this.appendValueInput("red")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("Green");
    this.appendValueInput("green")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("Blue");
    this.appendValueInput("blue")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("ST7789 Color");
    this.setHelpUrl("https://bipes.net.br/wp/?page_id=177");
  },
  styleBlock: function(colours) {
    colours = colours.map(x => parseInt(x))
    colours = colours.includes(NaN) ? [89,102,166] : colours
    if(colours.every((e) => {return e <= 255}) && colours.every((e) => {return e >= 0})) {
      let hex_ = bipes.page.blocks.convertColor.RGB2HEX (colours [0], colours [1], colours [2]);
      this.setColour(hex_);
    } else
      this.setColour("#FF0000");
  }
};

Blockly.Blocks['st7789_color_colors'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ST7789 Color")
        .appendField(new Blockly.FieldColour("#ff0000"), "color");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("ST7789 Color");
 this.setHelpUrl("https://bipes.net.br/wp/?page_id=177");
  }
};


Blockly.Blocks['st7789_fill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Fill ST7789 display");

    this.appendValueInput("r")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Red");
    this.appendValueInput("g")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Green");
    this.appendValueInput("b")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Blue");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);

 this.setTooltip("Plot pixel to ST7789 display");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};



Blockly.Blocks['st7789_pixel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Draw pixel on ST7789 display");

    this.appendValueInput("x")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X position");
    this.appendValueInput("y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y position");
    this.appendValueInput("color")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Color");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);

 this.setTooltip("Plot pixel to ST7789 display");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['st7789_line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Draw line on ST7789 display");

    this.appendValueInput("x0")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X0 position");
    this.appendValueInput("y0")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y0 position");

    this.appendValueInput("x1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X1 position");
    this.appendValueInput("y1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y1 position");

    this.appendValueInput("color")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Color");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);

 this.setTooltip("Draw line on ST7789 display");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

// OLED Display ----------------------------------------------------------------
Blockly.Blocks['init_oled'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Init I2C SSD1306 OLED Display");

 this.appendDummyInput()
      .appendField(new Blockly.FieldImage(
        "static/page/blocks/images/oled.png",
        55,
        55,
        "*"));
        //.setAlign(Blockly.ALIGN_CENTRE);

    this.appendValueInput("i2c")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("I2C");

    this.appendValueInput("scl")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SCL");

    this.appendValueInput("sda")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SDA");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['fill_oled'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck("Number")
        .appendField("Fill OLED Display with ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Fill OLED Disiplay");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['clear_oled'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Clear OLED Display");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Clear OLED Disiplay");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['show_oled'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Update OLED Display ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Update OLED Disiplay");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['write_oled'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Write text on display");

    this.appendValueInput("x")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X position");
    this.appendValueInput("y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y position");
    this.appendValueInput("text")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Text");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);

 this.setTooltip("Write text to OLED Display");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

// LED Matrix ------------------------------------------------------------------
Blockly.Blocks['tm1640_init'] = {
  init: function() {
 this.appendDummyInput()
      .appendField(new Blockly.FieldImage(
        "static/page/blocks/images/matrix.png",
        55,
        55,
        "*"))
      .appendField("Start TM1640 LED Matrix");
    this.appendValueInput("clk")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CLK");

    this.appendValueInput("dio")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("DIO");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Start TM1640 LED Matrix");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['tm1640_write'] = {
  init: function() {
   this.appendDummyInput()
        .appendField("Write array to Led Matrix");

 this.appendValueInput("vector")
        .setCheck("String")
        .appendField("LED array value");

 this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);

    this.setColour(230);
 this.setTooltip("Write to TM1640 LED Matrix");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['tm1640_num'] = {
  init: function() {
   this.appendDummyInput()
        .appendField("Write Number on Led Matrix");

    this.appendValueInput("num")
        .setCheck("Number")
        .appendField("value (0-9)");


 this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);


    this.setColour(230);
 this.setTooltip("Write number on TM1640 LED Matrix");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['tm1640_brig'] = {
  init: function() {
   this.appendDummyInput()
        .appendField("Set Brightness of Led Matrix");
    this.appendValueInput("brig")
        .setCheck("Number")
        .appendField("value (1-7)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Set brightness of TM1640 LED Matrix");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['tm1640_custom'] = {
    init: function () {
        this.appendDummyInput()
                .appendField("Custom Data Matrix layout");
        this.appendDummyInput()
                .appendField(new Blockly.FieldCheckbox(true, null, {checkCharacter: '\u2713'}), "A0")
	    	        //Heart
                //.appendField(new Blockly.FieldCheckbox(true, null, {checkCharacter: '\u2661'}), "A0")
                .appendField(new Blockly.FieldCheckbox(true, null, {checkCharacter: '\u2713'}), "A1")
                .appendField(new Blockly.FieldCheckbox(true, null, {checkCharacter: '\u2713'}), "A2")
                .appendField(new Blockly.FieldCheckbox(true, null, {checkCharacter: '\u2713'}), "A3")
                .appendField(new Blockly.FieldCheckbox(true, null, {checkCharacter: '\u2713'}), "A4")
                .appendField(new Blockly.FieldCheckbox(true, null, {checkCharacter: '\u2713'}), "A5")
                .appendField(new Blockly.FieldCheckbox(true, null, {checkCharacter: '\u2713'}), "A6")
                .appendField(new Blockly.FieldCheckbox(true, null, {checkCharacter: '\u2713'}), "A7");
        this.appendDummyInput()
                .appendField(new Blockly.FieldCheckbox("TRUE"), "B0")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "B1")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "B2")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "B3")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "B4")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "B5")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "B6")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "B7");
        this.appendDummyInput()
                .appendField(new Blockly.FieldCheckbox("TRUE"), "C0")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "C1")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "C2")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "C3")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "C4")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "C5")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "C6")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "C7");
        this.appendDummyInput()
                .appendField(new Blockly.FieldCheckbox("TRUE"), "D0")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "D1")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "D2")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "D3")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "D4")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "D5")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "D6")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "D7");
        this.appendDummyInput()
                .appendField(new Blockly.FieldCheckbox("TRUE"), "E0")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "E1")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "E2")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "E3")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "E4")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "E5")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "E6")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "E7");
        this.appendDummyInput()
                .appendField(new Blockly.FieldCheckbox("TRUE"), "F0")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "F1")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "F2")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "F3")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "F4")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "F5")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "F6")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "F7");
        this.appendDummyInput()
                .appendField(new Blockly.FieldCheckbox("TRUE"), "G0")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "G1")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "G2")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "G3")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "G4")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "G5")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "G6")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "G7");
        this.appendDummyInput()
                .appendField(new Blockly.FieldCheckbox("TRUE"), "H0")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "H1")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "H2")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "H3")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "H4")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "H5")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "H6")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "H7");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
 this.setTooltip("Write to LED Matrix");
 this.setHelpUrl("http://www.bipes.net.br");
    }
};
