// NeoPixel -------------------------------------------------------------------
Blockly.Python['neopixel_init'] = function(block) {
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_neopixel'] = 'import neopixel';

  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_NONE);
  var value_number = Blockly.Python.valueToCode(block, 'number', Blockly.Python.ORDER_NONE);

  var code = `np=neopixel.NeoPixel(Pin(${value_pin}),${value_number})\n`;

  return code;
};

Blockly.Python['neopixel_color_numbers'] = function(block) {
  var value_red = Blockly.Python.valueToCode(block, 'red', Blockly.Python.ORDER_ATOMIC);
  var value_green = Blockly.Python.valueToCode(block, 'green', Blockly.Python.ORDER_ATOMIC);
  var value_blue = Blockly.Python.valueToCode(block, 'blue', Blockly.Python.ORDER_ATOMIC);

  // Style block with compiled values, see block_definitions.js
  this.styleBlock([value_red, value_green, value_blue])

  var code = `(${value_red},${value_green},${value_blue})`;

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['neopixel_color_colors'] = function(block) {
  var color = block.getFieldValue('color');
  var h = bipes.page.blocks.convertColor.HEX2RGB(color);
  var code = `(${h.r},${h.g},${h.b})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['HSL_to_RGB'] = function(block) {
  var value_hue = Blockly.Python.valueToCode(block, 'hue', Blockly.Python.ORDER_ATOMIC);
  var value_saturation = Blockly.Python.valueToCode(block, 'saturation', Blockly.Python.ORDER_ATOMIC);
  var value_brightness = Blockly.Python.valueToCode(block, 'lightness', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['HSL_to_RGB'] = 'def HSL_to_RGB(h, s, l):\n	h, s, l = h/360, s/100, l/100\n	def hue2rgb (p, q, t):\n		if(t < 0.): t += 1\n		if(t > 1.): t -= 1\n		if(t < 1/6): return p + (q - p) * 6 * t\n		if(t < 1/2): return q\n		if(t < 2/3): return p + (q - p) * (2/3 - t) * 6\n		return p\n	q = l * (1 + s) if l < 0.5 else l + s - l * s\n	p = 2 * l - q\n	r, g, b = hue2rgb(p, q, h + 1/3), hue2rgb(p, q, h), hue2rgb(p, q, h - 1/3)\n	return (int(r * 255), int(g * 255), int(b * 255))\n';

  this.styleBlock([value_hue, value_saturation, value_brightness])

  var code = `HSL_to_RGB(${value_hue},${value_saturation},${value_brightness})`;

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['neopixel_control'] = function(block) {
  var value_address = Blockly.Python.valueToCode(block, 'address', Blockly.Python.ORDER_NONE);
  var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_NONE);

  var code = `np[${value_address}]=${value_color}\n`;

  return code;
};

Blockly.Python['neopixel_write'] = function(block) {
  var code = 'np.write()\n';
  return code;
};

// Character display -----------------------------------------------------------
Blockly.Python['char_lcd_init'] = function(block) {
  Blockly.Python.definitions_['import_i2c_lcd'] = 'from esp8266_i2c_lcd import I2cLcd';
  var code = 'lcd = I2cLcd(i2c, DEFAULT_I2C_ADDR, 2, 16)\n';
  return code;
};

Blockly.Python['char_lcd_clear'] = function(block) {
  var code = 'lcd.clear()\n';
  return code;
};

Blockly.Python['char_lcd_putstr'] = function(block) {
  var code = "lcd.putstr('test')\n";
  return code;
};

Blockly.Python['char_lcd_moveto'] = function(block) {
  var code = 'lcd.move_to(0,0)\n';
  return code;
};

Blockly.Python['char_lcd_backlight'] = function(block) {
  var code = 'lcd.backlight_on()\n';
  return code;
};

Blockly.Python['char_lcd_display'] = function(block) {
  var code = 'lcd.display_on()\n';
  return code;
};

// ST7789 Display --------------------------------------------------------------
Blockly.Python['st7789_init'] = function(block) {
  var bl = Blockly.Python.valueToCode(block, 'bl', Blockly.Python.ORDER_ATOMIC);
  var sck = Blockly.Python.valueToCode(block, 'sck', Blockly.Python.ORDER_ATOMIC);
  var mosi = Blockly.Python.valueToCode(block, 'mosi', Blockly.Python.ORDER_ATOMIC);
  var reset = Blockly.Python.valueToCode(block, 'reset', Blockly.Python.ORDER_ATOMIC);
  var cs = Blockly.Python.valueToCode(block, 'cs', Blockly.Python.ORDER_ATOMIC);
  var dc = Blockly.Python.valueToCode(block, 'dc', Blockly.Python.ORDER_ATOMIC);
  var spi = Blockly.Python.valueToCode(block, 'spi', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_st7789py'] = 'import st7789py';

  Blockly.Python.definitions_['import_st7789bl1'] = 'st7789_bl = machine.Pin(' + bl + ', machine.Pin.OUT)';
  Blockly.Python.definitions_['import_st7789bl2'] = 'st7789_blp=machine.PWM(st7789_bl)';

  var code = 'st7789_blp.duty(100)\n';

      code += 'spi = machine.SPI(' + spi + ', baudrate=20000000, polarity=1, phase=1, sck=machine.Pin(' + sck + '), mosi=machine.Pin(' + mosi + '))\n';
      code += 'display7789 = st7789py.ST7789(spi, 135, 240, reset=machine.Pin(' + reset + ', machine.Pin.OUT), cs=machine.Pin(' + cs + ', machine.Pin.OUT), dc=machine.Pin(' + dc + ', machine.Pin.OUT))\n';
      code += 'display7789.init()\n';
  return code;
};

Blockly.Python['st7789_bl_power'] = function(block) {
  var v = Blockly.Python.valueToCode(block, 'val', Blockly.Python.ORDER_ATOMIC);

  var code = 'st7789_blp.duty(' + v + ')\n';
  return code;
};

Blockly.Python['st7789_color_numbers'] = function(block) {
  var value_red = Blockly.Python.valueToCode(block, 'red', Blockly.Python.ORDER_ATOMIC);
  var value_green = Blockly.Python.valueToCode(block, 'green', Blockly.Python.ORDER_ATOMIC);
  var value_blue = Blockly.Python.valueToCode(block, 'blue', Blockly.Python.ORDER_ATOMIC);

  // Style block with compiled values, see block_definitions.js
  this.styleBlock([value_red, value_green, value_blue])

  var code = `(${value_red},${value_green},${value_blue})`;

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['st7789_color_colors'] = function(block) {
  var color = block.getFieldValue('color');
  var h = bipes.page.blocks.convertColor.HEX2RGB(color);
  var code = `(${h.r},${h.g},${h.b})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['st7789_fill'] = function(block) {
  var r = Blockly.Python.valueToCode(block, 'r', Blockly.Python.ORDER_ATOMIC);
  var g = Blockly.Python.valueToCode(block, 'g', Blockly.Python.ORDER_ATOMIC);
  var b = Blockly.Python.valueToCode(block, 'b', Blockly.Python.ORDER_ATOMIC);
  var code = 'display7789.fill(st7789py.color565(' + r + ', ' + g + ', ' + b + '))\n';
  return code;
};

Blockly.Python['st7789_pixel'] = function(block) {
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var c = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  var code = 'display7789.pixel(' + x + ', ' + y + ', st7789py.color565' + c + ')\n';
  return code;
};

Blockly.Python['st7789_line'] = function(block) {
  var x0 = Blockly.Python.valueToCode(block, 'x0', Blockly.Python.ORDER_ATOMIC);
  var x1 = Blockly.Python.valueToCode(block, 'x1', Blockly.Python.ORDER_ATOMIC);
  var y0 = Blockly.Python.valueToCode(block, 'y0', Blockly.Python.ORDER_ATOMIC);
  var y1 = Blockly.Python.valueToCode(block, 'y1', Blockly.Python.ORDER_ATOMIC);
  var c = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  var code = 'display7789.line(' + x0 + ',' + y0 + ',' + x1 + ',' + y1 + ', st7789py.color565' + c + ')\n';
  return code;
};

// OLED Display ----------------------------------------------------------------
Blockly.Python['init_oled'] = function(block) {
  var scl = Blockly.Python.valueToCode(block, 'scl', Blockly.Python.ORDER_ATOMIC);
  var sda = Blockly.Python.valueToCode(block, 'sda', Blockly.Python.ORDER_ATOMIC);
  var i2c = Blockly.Python.valueToCode(block, 'i2c', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_oled_a'] = 'from machine import I2C';
  Blockly.Python.definitions_['import_ssd'] = 'import ssd1306';
  Blockly.Python.definitions_['import_sleep'] = 'from time import sleep';

  var code = 'i2c=I2C(' + i2c + ', scl=Pin(' + scl + '), sda=Pin(' + sda + '))\n';
      code += 'oled_width = 128\n';
      code += 'oled_height = 64\n';
      code += 'oled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)\n';

  return code;
};

Blockly.Python['clear_oled'] = function(block) {
  var code = 'oled.fill(0)\n';
  return code;
};

Blockly.Python['fill_oled'] = function(block) {
  var v = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var code = 'oled.fill(' + v + ')\n';
  return code;
};

Blockly.Python['show_oled'] = function(block) {
  var code = 'oled.show()\n';
  return code;
};

Blockly.Python['write_oled'] = function(block) {
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var t = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);

  var code = 'oled.text(' + t + ', ' + x + ', ' + y + ')\noled.show()\n';
  return code;
};

// LED Matrix ------------------------------------------------------------------
Blockly.Python['tm1640_init'] = function(block) {
  var clk = Blockly.Python.valueToCode(block, 'clk', Blockly.Python.ORDER_ATOMIC);
  var dio = Blockly.Python.valueToCode(block, 'dio', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_tm1640'] = 'import tm1640';
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';

  var code = 'tm = tm1640.TM1640(clk=Pin(14), dio=Pin(13))\n';
  return code;
};
Blockly.Python['tm1640_write'] = function(block) {
  var pIn = Blockly.Python.valueToCode(block, 'vector', Blockly.Python.ORDER_ATOMIC);
  var x = pIn.replace('\'','').replace('\'','');
  var code = 'tm.write([' + x + '])\n';
  return code;
};
Blockly.Python['tm1640_brig'] = function(block) {
  var pIn = Blockly.Python.valueToCode(block, 'brig', Blockly.Python.ORDER_ATOMIC);
  var code = 'tm.brightness(' + pIn + ')\n';
  return code;
};
Blockly.Python['tm1640_num'] = function(block) {
  //Reference: https://github.com/mcauser/micropython-tm1640
	//https://github.com/mcauser/micropython-tm1640/blob/master/tm1640_test.py
  var pIn = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
  var code = 'digits = [0x3c66666e76663c00, 0x7e1818181c181800, 0x7e060c3060663c00, 0x3c66603860663c00, 0x30307e3234383000, 0x3c6660603e067e00, 0x3c66663e06663c00, 0x1818183030667e00, 0x3c66663c66663c00, 0x3c66607c66663c00]\ntm.write_int(digits[' + pIn + '])\n';
  return code;
};
Blockly.Python['tm1640_custom'] = function (block) {
    var checkbox_a0 = block.getFieldValue('A0') == 'TRUE';
    var checkbox_a1 = block.getFieldValue('A1') == 'TRUE';
    var checkbox_a2 = block.getFieldValue('A2') == 'TRUE';
    var checkbox_a3 = block.getFieldValue('A3') == 'TRUE';
    var checkbox_a4 = block.getFieldValue('A4') == 'TRUE';
    var checkbox_a5 = block.getFieldValue('A5') == 'TRUE';
    var checkbox_a6 = block.getFieldValue('A6') == 'TRUE';
    var checkbox_a7 = block.getFieldValue('A7') == 'TRUE';
    var checkbox_b0 = block.getFieldValue('B0') == 'TRUE';
    var checkbox_b1 = block.getFieldValue('B1') == 'TRUE';
    var checkbox_b2 = block.getFieldValue('B2') == 'TRUE';
    var checkbox_b3 = block.getFieldValue('B3') == 'TRUE';
    var checkbox_b4 = block.getFieldValue('B4') == 'TRUE';
    var checkbox_b5 = block.getFieldValue('B5') == 'TRUE';
    var checkbox_b6 = block.getFieldValue('B6') == 'TRUE';
    var checkbox_b7 = block.getFieldValue('B7') == 'TRUE';
    var checkbox_c0 = block.getFieldValue('C0') == 'TRUE';
    var checkbox_c1 = block.getFieldValue('C1') == 'TRUE';
    var checkbox_c2 = block.getFieldValue('C2') == 'TRUE';
    var checkbox_c3 = block.getFieldValue('C3') == 'TRUE';
    var checkbox_c4 = block.getFieldValue('C4') == 'TRUE';
    var checkbox_c5 = block.getFieldValue('C5') == 'TRUE';
    var checkbox_c6 = block.getFieldValue('C6') == 'TRUE';
    var checkbox_c7 = block.getFieldValue('C7') == 'TRUE';
    var checkbox_d0 = block.getFieldValue('D0') == 'TRUE';
    var checkbox_d1 = block.getFieldValue('D1') == 'TRUE';
    var checkbox_d2 = block.getFieldValue('D2') == 'TRUE';
    var checkbox_d3 = block.getFieldValue('D3') == 'TRUE';
    var checkbox_d4 = block.getFieldValue('D4') == 'TRUE';
    var checkbox_d5 = block.getFieldValue('D5') == 'TRUE';
    var checkbox_d6 = block.getFieldValue('D6') == 'TRUE';
    var checkbox_d7 = block.getFieldValue('D7') == 'TRUE';
    var checkbox_e0 = block.getFieldValue('E0') == 'TRUE';
    var checkbox_e1 = block.getFieldValue('E1') == 'TRUE';
    var checkbox_e2 = block.getFieldValue('E2') == 'TRUE';
    var checkbox_e3 = block.getFieldValue('E3') == 'TRUE';
    var checkbox_e4 = block.getFieldValue('E4') == 'TRUE';
    var checkbox_e5 = block.getFieldValue('E5') == 'TRUE';
    var checkbox_e6 = block.getFieldValue('E6') == 'TRUE';
    var checkbox_e7 = block.getFieldValue('E7') == 'TRUE';
    var checkbox_f0 = block.getFieldValue('F0') == 'TRUE';
    var checkbox_f1 = block.getFieldValue('F1') == 'TRUE';
    var checkbox_f2 = block.getFieldValue('F2') == 'TRUE';
    var checkbox_f3 = block.getFieldValue('F3') == 'TRUE';
    var checkbox_f4 = block.getFieldValue('F4') == 'TRUE';
    var checkbox_f5 = block.getFieldValue('F5') == 'TRUE';
    var checkbox_f6 = block.getFieldValue('F6') == 'TRUE';
    var checkbox_f7 = block.getFieldValue('F7') == 'TRUE';
    var checkbox_g0 = block.getFieldValue('G0') == 'TRUE';
    var checkbox_g1 = block.getFieldValue('G1') == 'TRUE';
    var checkbox_g2 = block.getFieldValue('G2') == 'TRUE';
    var checkbox_g3 = block.getFieldValue('G3') == 'TRUE';
    var checkbox_g4 = block.getFieldValue('G4') == 'TRUE';
    var checkbox_g5 = block.getFieldValue('G5') == 'TRUE';
    var checkbox_g6 = block.getFieldValue('G6') == 'TRUE';
    var checkbox_g7 = block.getFieldValue('G7') == 'TRUE';
    var checkbox_h0 = block.getFieldValue('H0') == 'TRUE';
    var checkbox_h1 = block.getFieldValue('H1') == 'TRUE';
    var checkbox_h2 = block.getFieldValue('H2') == 'TRUE';
    var checkbox_h3 = block.getFieldValue('H3') == 'TRUE';
    var checkbox_h4 = block.getFieldValue('H4') == 'TRUE';
    var checkbox_h5 = block.getFieldValue('H5') == 'TRUE';
    var checkbox_h6 = block.getFieldValue('H6') == 'TRUE';
    var checkbox_h7 = block.getFieldValue('H7') == 'TRUE';

    var line1 = Number(checkbox_a0) * 2**0 + Number(checkbox_a1) * 2**1 + Number(checkbox_a2) * 2**2 + Number(checkbox_a3) * 2**3 + Number(checkbox_a4) * 2**4 + Number(checkbox_a5) * 2**5 + Number(checkbox_a6) * 2**6 + Number(checkbox_a7) * 2**7;
    var line2 = Number(checkbox_b0) * 2**0 + Number(checkbox_b1) * 2**1 + Number(checkbox_b2) * 2**2 + Number(checkbox_b3) * 2**3 + Number(checkbox_b4) * 2**4 + Number(checkbox_b5) * 2**5 + Number(checkbox_b6) * 2**6 + Number(checkbox_b7) * 2**7;
    var line3 = Number(checkbox_c0) * 2**0 + Number(checkbox_c1) * 2**1 + Number(checkbox_c2) * 2**2 + Number(checkbox_c3) * 2**3 + Number(checkbox_c4) * 2**4 + Number(checkbox_c5) * 2**5 + Number(checkbox_c6) * 2**6 + Number(checkbox_c7) * 2**7;
    var line4 = Number(checkbox_d0) * 2**0 + Number(checkbox_d1) * 2**1 + Number(checkbox_d2) * 2**2 + Number(checkbox_d3) * 2**3 + Number(checkbox_d4) * 2**4 + Number(checkbox_d5) * 2**5 + Number(checkbox_d6) * 2**6 + Number(checkbox_d7) * 2**7;
    var line5 = Number(checkbox_e0) * 2**0 + Number(checkbox_e1) * 2**1 + Number(checkbox_e2) * 2**2 + Number(checkbox_e3) * 2**3 + Number(checkbox_e4) * 2**4 + Number(checkbox_e5) * 2**5 + Number(checkbox_e6) * 2**6 + Number(checkbox_e7) * 2**7;
    var line6 = Number(checkbox_f0) * 2**0 + Number(checkbox_f1) * 2**1 + Number(checkbox_f2) * 2**2 + Number(checkbox_f3) * 2**3 + Number(checkbox_f4) * 2**4 + Number(checkbox_f5) * 2**5 + Number(checkbox_f6) * 2**6 + Number(checkbox_f7) * 2**7;
    var line7 = Number(checkbox_g0) * 2**0 + Number(checkbox_g1) * 2**1 + Number(checkbox_g2) * 2**2 + Number(checkbox_g3) * 2**3 + Number(checkbox_g4) * 2**4 + Number(checkbox_g5) * 2**5 + Number(checkbox_g6) * 2**6 + Number(checkbox_g7) * 2**7;
    var line8 = Number(checkbox_h0) * 2**0 + Number(checkbox_h1) * 2**1 + Number(checkbox_h2) * 2**2 + Number(checkbox_h3) * 2**3 + Number(checkbox_h4) * 2**4 + Number(checkbox_h5) * 2**5 + Number(checkbox_h6) * 2**6 + Number(checkbox_h7) * 2**7;


    var code = 'tm.write([' + line8 + ',' + line7 + ',' + line6 + ',' + line5 + ',' + line4 + ',' + line3 + ',' + line2 + ',' + line1 + '])\n';
    return code;
};
