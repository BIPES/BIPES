    #  Tank Drawing (Driving practice)
    #  by Philip Tallents

from machine import Pin
from machine import I2C
import ssd1306
import gfx
import math

class Tank:
    def __init__(self, xpos, ypos, direction, oled, width, height, i2c):
        self.xpos = xpos
        self.ypos = ypos
        self.direction = direction
        self.oled = oled
        self.width = width
        self.height = height
        self.i2c = i2c
        self.graphics = gfx.GFX(self.width, self.height, oled.pixel)
        self.state = 1

    def getpos(self):
        return self.xpos, self.ypos, self.direction

    def setpos(self, xpos, ypos, direction):
        self.xpos = xpos
        self.ypos = ypos
        self.direction = direction

    def home(self):
        self.xpos = 0
        self.ypos = 0
        self.direction = 0

    def centre(self):
        self.xpos = self.width/2
        self.ypos = self.height/2

    def move(self, move, state):
        self.xpos = self.xpos % self.width
        self.ypos = self.ypos % self.height
        self.state = state
        oldxpos = self.xpos
        oldypos = self.ypos
        self.xpos = self.xpos + move*math.cos(math.radians(self.direction))
        self.ypos = self.ypos + move*math.sin(math.radians(self.direction))

        if self.state == 1:
            self.graphics.line(int(oldxpos), int(oldypos), int(self.xpos), int(self.ypos), 1)
            self.oled.show()
        elif self.state == 2:
            self.graphics.line(int(oldxpos), int(oldypos), int(self.xpos), int(self.ypos), 1)
        elif self.state == 3:
            self.state = 1

    def turn(self, turn):
        self.direction = (self.direction + turn) % 360

    def orient(self, orient):
         self.direction = orient
