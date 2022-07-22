var mainBlob = new Blob([
"from machine import Pin, I2C\n" +
"import network\n" +
"import ssd1306\n" +
"import time\n" +
"from time import sleep\n" +
"\n" +
"sta_if = network.WLAN(network.STA_IF); sta_if.active(True)\n" +
"\n" +
"i2c = I2C(-1, scl=Pin(4), sda=Pin(5))\n" +
"\n" +
"oled_width = 128\n" +
"oled_height = 64\n" +
"oled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)\n" +
"\n" +
"\n" +
"oled.text('3', 10, 10)\n" +
"oled.show()\n" +
"time.sleep(1)\n" +
"oled.fill(0)\n" +
"\n" +
"sta_if.scan()\n" +
"\n" +
"oled.text('2', 10, 10)\n" +
"oled.show()\n" +
"time.sleep(1)\n" +
"oled.fill(0)\n" +
"\n" +
"sta_if.connect('NetVirtua1087','password')\n" +
"\n" +
"oled.text('1', 10, 10)\n" +
"oled.show()\n" +
"time.sleep(1)\n" +
"oled.fill(0)\n" +
"\n" +
"import webrepl\n" +
"\n" +
"oled.text('Hello, World 1!', 0, 0)\n" +
"oled.text('Hello, World 2!', 0, 10)\n" +
"oled.text('Hello, World 3!', 0, 20)\n" +
"oled.text('BIPES', 0, 30)\n" +
"\n" +
"oled.show()\n" +
"time.sleep(1)\n" +
"oled.fill(0)\n" +
"\n" +
"oled.text('MicroPython', 0, 0)\n" +
"oled.text('Password: bipes', 0, 10)\n" +
"\n" +
"x=sta_if.config('essid')\n" +
"oled.text(str(x), 0, 40)\n" +
"\n" +
"oled.text('Go BIPES', 0, 20)\n" +
"\n" +
"x=sta_if.ifconfig()\n" +
"oled.text(str(x), 0, 50)\n" +
"\n" +
"oled.show()\n" +
"\n" +
"\n" +
"\n" +
"#sta_if.isconnected()\n" +
"\n" +
"\n"
], {type: 'text'});