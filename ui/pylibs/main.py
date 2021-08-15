from machine import Pin, I2C
import network
import ssd1306
import time
from time import sleep

sta_if = network.WLAN(network.STA_IF); sta_if.active(True)

i2c = I2C(-1, scl=Pin(4), sda=Pin(5))

oled_width = 128
oled_height = 64
oled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)


oled.text('3', 10, 10)
oled.show()
time.sleep(1)
oled.fill(0)

sta_if.scan()

oled.text('2', 10, 10)
oled.show()
time.sleep(1)
oled.fill(0)

sta_if.connect('NetVirtua1087','password')

oled.text('1', 10, 10)
oled.show()
time.sleep(1)
oled.fill(0)

import webrepl

oled.text('Hello, World 1!', 0, 0)
oled.text('Hello, World 2!', 0, 10)
oled.text('Hello, World 3!', 0, 20)
oled.text('BIPES', 0, 30)

oled.show()
time.sleep(1)
oled.fill(0)

oled.text('MicroPython', 0, 0)
oled.text('Password: bipes', 0, 10)

x=sta_if.config('essid')
oled.text(str(x), 0, 40)

oled.text('Go BIPES', 0, 20)

x=sta_if.ifconfig()
oled.text(str(x), 0, 50)

oled.show()



#sta_if.isconnected()


