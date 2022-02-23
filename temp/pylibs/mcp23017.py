# Copyright (c) 2014 Adafruit Industries
# Author: Tony DiCola, ported for Micropython ESP8266 by Cefn Hoile
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.
from machine import Pin, I2C

OUT     = 0
IN      = 1
HIGH    = True
LOW     = False

RISING  = 1
FALLING = 2
BOTH    = 3

PUD_OFF = 0
PUD_DOWN= 1
PUD_UP  = 2

class MCP():
    """Base class to represent an MCP230xx series GPIO extender.  Is compatible
    with the Adafruit_GPIO BaseGPIO class so it can be used as a custom GPIO
    class for interacting with device.
    """

    def __init__(self, address=0x20, gpioScl=22, gpioSda=21):
        """Initialize MCP230xx at specified I2C address and bus number.  If bus
        is not specified it will default to the appropriate platform detected bus.
        """
        self.address = address
        self.i2c = I2C(scl=Pin(gpioScl),sda=Pin(gpioSda))
        # Assume starting in ICON.BANK = 0 mode (sequential access).
        # Compute how many bytes are needed to store count of GPIO.
        self.gpio_bytes = self.NUM_GPIO//8
        # Buffer register values so they can be changed without reading.
        self.iodir = bytearray(self.gpio_bytes)  # Default direction to all inputs.
        self.gppu = bytearray(self.gpio_bytes)  # Default to pullups disabled.
        self.gpio = bytearray(self.gpio_bytes)
        # Write current direction and pullup buffer state.
        self.write_iodir()
        self.write_gppu()

    def _validate_pin(self, pin):
        """Promoted to mcp implementation from prior Adafruit GPIO superclass"""
        # Raise an exception if pin is outside the range of allowed values.
        if pin < 0 or pin >= self.NUM_GPIO:
            raise ValueError('Invalid GPIO value, must be between 0 and {0}.'.format(self.NUM_GPIO))

    def writeList(self, register, data):
        """Introduced to match the writeList implementation of the Adafruit I2C _device member"""
        return self.i2c.writeto_mem(self.address, register, data)

    def readList(self, register, length):
        """Introduced to match the readList implementation of the Adafruit I2C _device member"""
        return self.i2c.readfrom_mem(self.address, register, length)

    def setup(self, pin, value):
        """Set the input or output mode for a specified pin.  Mode should be
        either OUT or IN.
        """
        self._validate_pin(pin)
        # Set bit to 1 for input or 0 for output.
        if value == IN:
            self.iodir[int(pin/8)] |= 1 << (int(pin%8))
        elif value == OUT:
            self.iodir[int(pin/8)] &= ~(1 << (int(pin%8)))
        else:
            raise ValueError('Unexpected value.  Must be IN or OUT.')
        self.write_iodir()


    def output(self, pin, value):
        """Set the specified pin the provided high/low value.  Value should be
        either HIGH/LOW or a boolean (True = HIGH).
        """
        self.output_pins({pin: value})

    def output_pins(self, pins):
        """Set multiple pins high or low at once.  Pins should be a dict of pin
        name to pin value (HIGH/True for 1, LOW/False for 0).  All provided pins
        will be set to the given values.
        """
        [self._validate_pin(pin) for pin in pins.keys()]
        # Set each changed pin's bit.
        for pin, value in iter(pins.items()):
            if value:
                self.gpio[int(pin/8)] |= 1 << (int(pin%8))
            else:
                self.gpio[int(pin/8)] &= ~(1 << (int(pin%8)))
        # Write GPIO state.
        self.write_gpio()


    def input(self, pin, read=True):
        """Read the specified pin and return HIGH/True if the pin is pulled
        high, or LOW/False if pulled low.
        """
        return self.input_pins([pin], read)[0]

    def input_pins(self, pins, read=True):
        """Read multiple pins specified in the given list and return list of pin values
        HIGH/True if the pin is pulled high, or LOW/False if pulled low.
        """
        [self._validate_pin(pin) for pin in pins]
        if read:
            # Get GPIO state.
            self.read_gpio()
        # Return True if pin's bit is set.
        return [(self.gpio[int(pin/8)] & 1 << (int(pin%8))) > 0 for pin in pins]


    def pullup(self, pin, enabled):
        """Turn on the pull-up resistor for the specified pin if enabled is True,
        otherwise turn off the pull-up resistor.
        """
        self._validate_pin(pin)
        if enabled:
            self.gppu[int(pin/8)] |= 1 << (int(pin%8))
        else:
            self.gppu[int(pin/8)] &= ~(1 << (int(pin%8)))
        self.write_gppu()

    def read_gpio(self):
        self.gpio = self.readList(self.GPIO, self.gpio_bytes)

    def write_gpio(self, gpio=None):
        """Write the specified byte value to the GPIO registor.  If no value
        specified the current buffered value will be written.
        """
        if gpio is not None:
            self.gpio = gpio
        self.writeList(self.GPIO, self.gpio)

    def write_iodir(self, iodir=None):
        """Write the specified byte value to the IODIR registor.  If no value
        specified the current buffered value will be written.
        """
        if iodir is not None:
            self.iodir = iodir
        self.writeList(self.IODIR, self.iodir)

    def write_gppu(self, gppu=None):
        """Write the specified byte value to the GPPU registor.  If no value
        specified the current buffered value will be written.
        """
        if gppu is not None:
            self.gppu = gppu
        self.writeList(self.GPPU, self.gppu)


class MCP23017(MCP):
    """MCP23017-based GPIO class with 16 GPIO pins."""
    # Define number of pins and registor addresses.
    NUM_GPIO = 16
    IODIR    = 0x00
    GPIO     = 0x12
    GPPU     = 0x0C


class MCP23008(MCP):
    """MCP23008-based GPIO class with 8 GPIO pins."""
    # Define number of pins and registor addresses.
    NUM_GPIO = 8
    IODIR    = 0x00
    GPIO     = 0x09
    GPPU     = 0x06

if __name__=="__main__":
    io = MCP23017()
    io.setup(3,IN)
    io.setup(0,OUT)
    io.output(0,HIGH)
    print(io.input(3))
