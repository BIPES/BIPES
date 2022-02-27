# %{DISPLAYS}
<category name="%{DISPLAYS}">

# NeoPixel LED Strip
<category name="NeoPixel LED Strip">
<label text="NeoPixel RGB LED Strip"></label>
<button text="%{DOCUMENTATION}: neopixel" callbackKey="loadDoc"></button>

# neopixel_init
<block type="neopixel_init">
  <value name="pin">
    <shadow type="pinout">
      <field name="Pin"></field>
    </shadow>
  </value>
  <value name="number">
    <shadow type="math_number">
      <field name="NUM">8</field>
    </shadow>
  </value>
</block>

# neopixel_color_numbers
<block type="neopixel_color_numbers">
 <value name="red">
  <shadow type="math_number">
    <field name="NUM">50</field>
  </shadow>
 </value>
 <value name="green">
  <shadow type="math_number">
    <field name="NUM">152</field>
  </shadow>
 </value>
 <value name="blue">
  <shadow type="math_number">
    <field name="NUM">220</field>
  </shadow>
 </value>
</block>

# neopixel_color_colors
<block type="neopixel_color_colors"></block>

# HSL_to_RGB
<block type="HSL_to_RGB">
  <value name="hue">
  <shadow type="math_number">
    <field name="NUM">204</field>
  </shadow>
  </value>
  <value name="saturation">
  <shadow type="math_number">
    <field name="NUM">70.8</field>
  </shadow>
  </value>
  <value name="lightness">
  <shadow type="math_number">
    <field name="NUM">52.9</field>
  </shadow>
  </value>
</block>

# neopixel_control
<block type="neopixel_control">
 <value name="address">
  <shadow type="math_number">
    <field name="NUM">0</field>
  </shadow>
 </value>
 <value name="color">
  <shadow type="neopixel_color_colors">
    <field name="PIN"></field>
  </shadow>
 </value>
</block>

# neopixel_write
<block type="neopixel_write"></block>

# Character display
<category name="Character display">
<label text="PCF8574 Display controller"></label>
<label text="Library: https://github.com/dhylands/python_lcd"></label>
<button text="%{INSTALL_LIBRARY}: I2CLCD" callbackKey="installPyLib"></button>

# char_lcd_init
<block type="char_lcd_init">
  <value name="scl">
    <shadow type="pinout">
      <field name="SCL"></field>
    </shadow>
  </value>
  <value name="sda">
    <shadow type="pinout">
     <field name="SDA"></field>
    </shadow>
  </value>
  <value name="lines">
    <shadow type="math_number">
     <field name="NUM">4</field>
    </shadow>
  </value>
  <value name="columns">
    <shadow type="math_number">
      <field name="NUM">20</field>
    </shadow>
  </value>
</block>

# char_lcd_clear
<block type="char_lcd_clear"></block>

# char_lcd_putstr
<block type="char_lcd_putstr"></block>

# char_lcd_moveto
<block type="char_lcd_moveto"></block>

# char_lcd_backlight
<block type="char_lcd_backlight"></block>

# char_lcd_display
<block type="char_lcd_display"></block>

# ST7789 Display
<category name="ST7789 Display">
<label text="ST7789 Display"></label>
<label text="Library: https://github.com/devbis/st7789py_mpy"></label>
<button text="%{INSTALL_LIBRARY}: ST7789" callbackKey="installPyLib"></button>

# st7789_init
<block type="st7789_init">
  <value name="spi">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
  <value name="bl">
    <shadow type="pinout">
      <field name="bl"></field>
    </shadow>
  </value>
  <value name="sck">
    <shadow type="pinout">
      <field name="sck"></field>
    </shadow>
  </value>
  <value name="mosi">
    <shadow type="pinout">
      <field name="mosi"></field>
    </shadow>
  </value>
  <value name="reset">
    <shadow type="pinout">
      <field name="reset"></field>
    </shadow>
  </value>
  <value name="cs">
    <shadow type="pinout">
      <field name="cs"></field>
    </shadow>
  </value>
  <value name="dc">
    <shadow type="pinout">
      <field name="dc"></field>
    </shadow>
  </value>
</block>

# st7789_bl_power
<block type="st7789_bl_power">
  <value name="val">
   <shadow type="math_number">
    <field name="NUM">50</field>
   </shadow>
  </value>
</block>

# st7789_color_numbers
<block type="st7789_color_numbers">
 <value name="red">
  <shadow type="math_number">
    <field name="NUM">50</field>
  </shadow>
 </value>
 <value name="green">
  <shadow type="math_number">
    <field name="NUM">152</field>
  </shadow>
 </value>
 <value name="blue">
  <shadow type="math_number">
    <field name="NUM">220</field>
  </shadow>
 </value>
</block>

# st7789_color_colors
<block type="st7789_color_colors"></block>
 <block type="st7789_fill">
  <value name="r">
   <shadow type="math_number">
    <field name="NUM">40</field>
   </shadow>
  </value>
  <value name="g">
   <shadow type="math_number">
    <field name="NUM">40</field>
   </shadow>
  </value>
  <value name="b">
   <shadow type="math_number">
    <field name="NUM">1</field>
   </shadow>
  </value>
</block>

# st7789_pixel
<block type="st7789_pixel">
  <value name="x">
    <shadow type="math_number">
      <field name="NUM">40</field>
    </shadow>
  </value>
  <value name="y">
    <shadow type="math_number">
      <field name="NUM">40</field>
    </shadow>
  </value>
  <value name="color">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
</block>

# st7789_line
<block type="st7789_line">
  <value name="x0">
    <shadow type="math_number">
      <field name="NUM">40</field>
    </shadow>
  </value>
  <value name="x1">
    <shadow type="math_number">
      <field name="NUM">40</field>
    </shadow>
  </value>
  <value name="y0">
    <shadow type="math_number">
      <field name="NUM">40</field>
    </shadow>
  </value>
  <value name="y1">
    <shadow type="math_number">
      <field name="NUM">40</field>
    </shadow>
  </value>
  <value name="color">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
</block>

# OLED Display
<category name="OLED Display">
<label text="SSD1306 OLED I2C Display"></label>
<button text="%{INSTALL_LIBRARY}: SSD1306" callbackKey="installPyLib"></button>

# init_oled
<block type="init_oled">
  <value name="i2c">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
  <value name="scl">
    <shadow type="math_number">
      <field name="NUM">5</field>
    </shadow>
  </value>
  <value name="sda">
    <shadow type="math_number">
      <field name="NUM">4</field>
    </shadow>
  </value>
</block>

# write_oled
<block type="write_oled">
 <value name="x">
    <shadow type="math_number">
      <field name="NUM">40</field>
    </shadow>
  </value>
  <value name="y">
    <shadow type="math_number">
      <field name="NUM">40</field>
    </shadow>
  </value>
  <value name="text">
    <shadow type="text">
      <field name="TEXT">Hello</field>
    </shadow>
  </value>
</block>

# show_oled
<block type="show_oled"></block>

# clear_oled
<block type="clear_oled"></block>

# fill_oled
<block type="fill_oled"></block>

# LED Matrix
<category name="LED Matrix">
<label text="TM1640 LED Matrix"></label>
<label text="Library: https://github.com/mcauser/micropython-tm1640"></label>
<button text="%{INSTALL_LIBRARY}: TM1640" callbackKey="installPyLib"></button>
<button text="%{LOAD_EXAMPLE}: TM1640" callbackKey="loadExample"></button>
<button text="%{DOCUMENTATION}: TM1640" callbackKey="loadDoc"></button>

# tm1640_init
<block type="tm1640_init">
 <value name="clk">
    <shadow type="math_number">
      <field name="NUM">14</field>
    </shadow>
  </value>
  <value name="dio">
    <shadow type="math_number">
      <field name="NUM">13</field>
    </shadow>
  </value>
</block>

# tm1640_write
<block type="tm1640_write">
  <value name="vector">
    <shadow type="text">
      <field name="TEXT">1, 2, 4, 8, 16, 32, 64, 128</field>
    </shadow>
  </value>
</block>

# tm1640_brig
<block type="tm1640_brig">
  <value name="brig">
    <shadow type="math_number">
      <field name="NUM">7</field>
    </shadow>
  </value>
</block>

# tm1640_num
<block type="tm1640_num">
  <value name="num">
    <shadow type="math_number">
      <field name="NUM">0</field>
    </shadow>
  </value>
</block>

# tm1640_custom
<block type="tm1640_custom">
    <field name="A0">FALSE</field>
    <field name="A1">FALSE</field>
    <field name="A2">FALSE</field>
    <field name="A3">FALSE</field>
    <field name="A4">FALSE</field>
    <field name="A5">FALSE</field>
    <field name="A6">FALSE</field>
    <field name="A7">FALSE</field>
    <field name="B0">FALSE</field>
    <field name="B1">FALSE</field>
    <field name="B2">FALSE</field>
    <field name="B3">FALSE</field>
    <field name="B4">FALSE</field>
    <field name="B5">FALSE</field>
    <field name="B6">FALSE</field>
    <field name="B7">FALSE</field>
    <field name="C0">FALSE</field>
    <field name="C1">FALSE</field>
    <field name="C2">FALSE</field>
    <field name="C3">FALSE</field>
    <field name="C4">FALSE</field>
    <field name="C5">FALSE</field>
    <field name="C6">FALSE</field>
    <field name="C7">FALSE</field>
    <field name="D0">FALSE</field>
    <field name="D1">FALSE</field>
    <field name="D2">FALSE</field>
    <field name="D3">FALSE</field>
    <field name="D4">FALSE</field>
    <field name="D5">FALSE</field>
    <field name="D6">FALSE</field>
    <field name="D7">FALSE</field>
    <field name="E0">FALSE</field>
    <field name="E1">FALSE</field>
    <field name="E2">FALSE</field>
    <field name="E3">FALSE</field>
    <field name="E4">FALSE</field>
    <field name="E5">FALSE</field>
    <field name="E6">FALSE</field>
    <field name="E7">FALSE</field>
    <field name="F0">FALSE</field>
    <field name="F1">FALSE</field>
    <field name="F2">FALSE</field>
    <field name="F3">FALSE</field>
    <field name="F4">FALSE</field>
    <field name="F5">FALSE</field>
    <field name="F6">FALSE</field>
    <field name="F7">FALSE</field>
    <field name="G0">FALSE</field>
    <field name="G1">FALSE</field>
    <field name="G2">FALSE</field>
    <field name="G3">FALSE</field>
    <field name="G4">FALSE</field>
    <field name="G5">FALSE</field>
    <field name="G6">FALSE</field>
    <field name="G7">FALSE</field>
    <field name="H0">FALSE</field>
    <field name="H1">FALSE</field>
    <field name="H2">FALSE</field>
    <field name="H3">FALSE</field>
    <field name="H4">FALSE</field>
    <field name="H5">FALSE</field>
    <field name="H6">FALSE</field>
    <field name="H7">FALSE</field>
</block>

# -
