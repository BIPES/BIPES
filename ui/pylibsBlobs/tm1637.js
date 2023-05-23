var tm1637Blob = new Blob([
    '"""\n' +
    'MicroPython TM1637 quad 7-segment LED display driver\n' +
    'https://github.com/mcauser/micropython-tm1637\n' +
    '\n' +
    'MIT License\n' +
    'Copyright (c) 2016 Mike Causer\n' +
    '\n' +
    'Permission is hereby granted, free of charge, to any person obtaining a copy\n' +
    'of this software and associated documentation files (the "Software"), to deal\n' +
    'in the Software without restriction, including without limitation the rights\n' +
    'to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n' +
    'copies of the Software, and to permit persons to whom the Software is\n' +
    'furnished to do so, subject to the following conditions:\n' +
    '\n' +
    'The above copyright notice and this permission notice shall be included in all\n' +
    'copies or substantial portions of the Software.\n' +
    '\n' +
    'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n' +
    'IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n' +
    'FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n' +
    'AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n' +
    'LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n' +
    'OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n' +
    'SOFTWARE.\n' +
    '"""\n' +
    '\n' +
    'from micropython import const\n' +
    'from machine import Pin\n' +
    'from time import sleep_us, sleep_ms\n' +
    '\n' +
    'TM1637_CMD1 = const(64)  # 0x40 data command\n' +
    'TM1637_CMD2 = const(192) # 0xC0 address command\n' +
    'TM1637_CMD3 = const(128) # 0x80 display control command\n' +
    'TM1637_DSP_ON = const(8) # 0x08 display on\n' +
    'TM1637_DELAY = const(10) # 10us delay between clk/dio pulses\n' +
    'TM1637_MSB = const(128)  # msb is the decimal point or the colon depending on your display\n' +
    '\n' +
    '# 0-9, a-z, blank, dash, star\n' +
    '_SEGS = [63, 6, 91, 79, 102, 109, 125, 7, 127, 111, 119, 124, 57, 94, 121, 113, 61, 118, 6, 30, 118, 56, 85, 84, 63, 115, 103, 80, 109, 102, 62, 28, 42, 118, 110, 91, 0, 64, 99]\n' +
    '_SEGMENTS = bytearray(_SEGS)\n' +
    '\n' +
    'class TM1637(object):\n' +
    '    """Library for quad 7-segment LED modules based on the TM1637 LED driver."""\n' +
    '    def __init__(self, clk, dio, brightness=7):\n' +
    '        self.clk = clk\n' +
    '        self.dio = dio\n' +
    '\n' +
    '        if not 0 <= brightness <= 7:\n' +
    '            raise ValueError("Brightness out of range")\n' +
    '        self._brightness = brightness\n' +
    '\n' +
    '        self.clk.init(Pin.OUT, value=0)\n' +
    '        self.dio.init(Pin.OUT, value=0)\n' +
    '        sleep_us(TM1637_DELAY)\n' +
    '\n' +
    '        self._write_data_cmd()\n' +
    '        self._write_dsp_ctrl()\n' +
    '\n' +
    '    def _start(self):\n' +
    '        self.dio(0)\n' +
    '        sleep_us(TM1637_DELAY)\n' +
    '        self.clk(0)\n' +
    '        sleep_us(TM1637_DELAY)\n' +
    '\n' +
    '    def _stop(self):\n' +
    '        self.dio(0)\n' +
    '        sleep_us(TM1637_DELAY)\n' +
    '        self.clk(1)\n' +
    '        sleep_us(TM1637_DELAY)\n' +
    '        self.dio(1)\n' +
    '\n' +
    '    def _write_data_cmd(self):\n' +
    '        # automatic address increment, normal mode\n' +
    '        self._start()\n' +
    '        self._write_byte(TM1637_CMD1)\n' +
    '        self._stop()\n' +
    '\n' +
    '    def _write_dsp_ctrl(self):\n' +
    '        # display on, set brightness\n' +
    '        self._start()\n' +
    '        self._write_byte(TM1637_CMD3 | TM1637_DSP_ON | self._brightness)\n' +
    '        self._stop()\n' +
    '\n' +
    '    def _write_byte(self, b):\n' +
    '        for i in range(8):\n' +
    '            self.dio((b >> i) & 1)\n' +
    '            sleep_us(TM1637_DELAY)\n' +
    '            self.clk(1)\n' +
    '            sleep_us(TM1637_DELAY)\n' +
    '            self.clk(0)\n' +
    '            sleep_us(TM1637_DELAY)\n' +
    '        self.clk(0)\n' +
    '        sleep_us(TM1637_DELAY)\n' +
    '        self.clk(1)\n' +
    '        sleep_us(TM1637_DELAY)\n' +
    '        self.clk(0)\n' +
    '        sleep_us(TM1637_DELAY)\n' +
    '\n' +
    '    def brightness(self, val=None):\n' +
    '        """Set the display brightness 0-7."""\n' +
    '        # brightness 0 = 1/16th pulse width\n' +
    '        # brightness 7 = 14/16th pulse width\n' +
    '        if val is None:\n' +
    '            return self._brightness\n' +
    '        if not 0 <= val <= 7:\n' +
    '            raise ValueError("Brightness out of range")\n' +
    '\n' +
    '        self._brightness = val\n' +
    '        self._write_data_cmd()\n' +
    '        self._write_dsp_ctrl()\n' +
    '\n' +
    '    def write(self, segments, pos=0):\n' +
    '        """Display up to 6 segments moving right from a given position.\n' +
    '        The MSB in the 2nd segment controls the colon between the 2nd\n' +
    '        and 3rd segments."""\n' +
    '        if not 0 <= pos <= 5:\n' +
    '            raise ValueError("Position out of range")\n' +
    '        self._write_data_cmd()\n' +
    '        self._start()\n' +
    '\n' +
    '        self._write_byte(TM1637_CMD2 | pos)\n' +
    '        for seg in segments:\n' +
    '            self._write_byte(seg)\n' +
    '        self._stop()\n' +
    '        self._write_dsp_ctrl()\n' +
    '\n' +
    '    def encode_digit(self, digit):\n' +
    '        """Convert a character 0-9, a-f to a segment."""\n' +
    '        return _SEGMENTS[digit & 0x0f]\n' +
    '\n' +
    '    def encode_string(self, string):\n' +
    '        """Convert an up to 4 character length string containing 0-9, a-z,\n' +
    '        space, dash, star to an array of segments, matching the length of the\n' +
    '        source string."""\n' +
    '        segments = bytearray(len(string))\n' +
    '        for i in range(len(string)):\n' +
    '            segments[i] = self.encode_char(string[i])\n' +
    '        return segments\n' +
    '\n' +
    '    def encode_char(self, char):\n' +
    '        """Convert a character 0-9, a-z, space, dash or star to a segment."""\n' +
    '        o = ord(char)\n' +
    '        if o == 32:\n' +
    '            return _SEGMENTS[36] # space\n' +
    '        if o == 42:\n' +
    '            return _SEGMENTS[38] # star/degrees\n' +
    '        if o == 45:\n' +
    '            return _SEGMENTS[37] # dash\n' +
    '        if o >= 65 and o <= 90:\n' +
    '            return _SEGMENTS[o-55] # uppercase A-Z\n' +
    '        if o >= 97 and o <= 122:\n' +
    '            return _SEGMENTS[o-87] # lowercase a-z\n' +
    '        if o >= 48 and o <= 57:\n' +
    '            return _SEGMENTS[o-48] # 0-9\n' +
    '        raise ValueError("Character out of range: {:d} {:s}".format(o, chr(o)))\n' +
    '\n' +
    '    def hex(self, val):\n' +
    '        """Display a hex value 0x0000 through 0xffff, right aligned."""\n' +
    '        string = "{:04x}".format(val & 0xffff)\n' +
    '        self.write(self.encode_string(string))\n' +
    '\n' +
    '    def number(self, num):\n' +
    '        """Display a numeric value -999 through 9999, right aligned."""\n' +
    '        # limit to range -999 to 9999\n' +
    '        num = max(-999, min(num, 9999))\n' +
    '        string = "{0: >4d}".format(num)\n' +
    '        self.write(self.encode_string(string))\n' +
    '\n' +
    '    def numbers(self, num1, num2, colon=True):\n' +
    '        """Display two numeric values -9 through 99, with leading zeros\n' +
    '        and separated by a colon."""\n' +
    '        num1 = max(-9, min(num1, 99))\n' +
    '        num2 = max(-9, min(num2, 99))\n' +
    '        segments = self.encode_string("{0:0>2d}{1:0>2d}".format(num1, num2))\n' +
    '        if colon:\n' +
    '            segments[1] |= 0x80 # colon on\n' +
    '        self.write(segments)\n' +
    '\n' +
    '    def temperature(self, num, degree_type):\n' +
    '        if num < -9:\n' +
    '            self.show("lo") # low\n' +
    '        elif num > 99:\n' +
    '            self.show("hi") # high\n' +
    '        else:\n' +
    '            string = "{0: >2d}".format(num)\n' +
    '            self.write(self.encode_string(string))\n' +
    '        if degree_type:\n'+
    '            self.write([_SEGMENTS[38], _SEGMENTS[12]], 2) # degrees C\n' +
    '        else:\n' +
    '            self.write([_SEGMENTS[38], _SEGMENTS[15]], 2) # degrees F\n' +
    '\n' +
    '    def show(self, string, colon=False):\n' +
    '        segments = self.encode_string(string)\n' +
    '        if len(segments) > 1 and colon:\n' +
    '            segments[1] |= 128\n' +
    '        self.write(segments[:4])\n' +
    '\n' +
    '    def scroll(self, string, delay=250):\n' +
    '        segments = string if isinstance(string, list) else self.encode_string(string)\n' +
    '        data = [0] * 8\n' +
    '        data[4:0] = list(segments)\n' +
    '        for i in range(len(segments) + 5):\n' +
    '            self.write(data[0+i:4+i])\n' +
    '            sleep_ms(delay)\n' +
    '\n' +
    '\n' +
    'class TM1637Decimal(TM1637):\n' +
    '    """Library for quad 7-segment LED modules based on the TM1637 LED driver.\n' +
    '\n' +
    '    This class is meant to be used with decimal display modules (modules\n' +
    '    that have a decimal point after each 7-segment LED).\n' +
    '    """\n' +
    '\n' +
    '    def encode_string(self, string):\n' +
    '        """Convert a string to LED segments.\n' +
    '\n' +
    '        Convert an up to 4 character length string containing 0-9, a-z,\n' +
    '        space, dash, star and "." to an array of segments, matching the length of\n' +
    '        the source string."""\n' +
    '        segments = bytearray(len(string.replace(".","")))\n' +
    '        j = 0\n' +
    '        for i in range(len(string)):\n' +
    '            if string[i] == "." and j > 0:\n' +
    '                segments[j-1] |= TM1637_MSB\n' +
    '                continue\n' +
    '            segments[j] = self.encode_char(string[i])\n' +
    '            j += 1\n' +
    '        return segments\n'
    ], {type: 'text'});