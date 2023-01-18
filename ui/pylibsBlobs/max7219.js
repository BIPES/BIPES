var max7219Blob = new Blob([
'"""\n' +
'\n' +
'MicroPython max7219 cascadable 8x8 LED matrix driver\n' +
'https://github.com/mcauser/micropython-max7219\n' +
'\n' +
'MIT License\n' +
'Copyright (c) 2017 Mike Causer\n' +
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

'\n' +
'from micropython import const\n' +
'import framebuf\n' +
'\n' +
'_NOOP = const(0)\n' +
'_DIGIT0 = const(1)\n' +
'_DECODEMODE = const(9)\n' +
'_INTENSITY = const(10)\n' +
'_SCANLIMIT = const(11)\n' +
'_SHUTDOWN = const(12)\n' +
'_DISPLAYTEST = const(15)\n' +
'\n' +
'class Matrix8x8:\n' +
'    def __init__(self, spi, cs, num):\n' +
'        """\n' +
'        Driver for cascading MAX7219 8x8 LED matrices.\n' +
'\n' +
'        >>> import max7219\n' +
'        >>> from machine import Pin, SPI\n' +
'        >>> spi = SPI(1)\n' +
'        >>> display = max7219.Matrix8x8(spi, Pin("X5"), 4)\n' +
'        >>> display.text("1234",0,0,1)\n' +
'        >>> display.show()\n' +
'\n' +
'        """\n' +
'        self.spi = spi\n' +
'        self.cs = cs\n' +
'        self.cs.init(cs.OUT, True)\n' +
'        self.buffer = bytearray(8 * num)\n' +
'        self.num = num\n' +
'        fb = framebuf.FrameBuffer(self.buffer, 8 * num, 8, framebuf.MONO_HLSB)\n' +
'        self.framebuf = fb\n' +
'        # Provide methods for accessing FrameBuffer graphics primitives. This is a workround\n' +
'        # because inheritance from a native class is currently unsupported.\n' +
'        # http://docs.micropython.org/en/latest/pyboard/library/framebuf.html\n' +
'        self.fill = fb.fill  # (col)\n' +
'        self.pixel = fb.pixel # (x, y[, c])\n' +
'        self.hline = fb.hline  # (x, y, w, col)\n' +
'        self.vline = fb.vline  # (x, y, h, col)\n' +
'        self.line = fb.line  # (x1, y1, x2, y2, col)\n' +
'        self.rect = fb.rect  # (x, y, w, h, col)\n' +
'        self.fill_rect = fb.fill_rect  # (x, y, w, h, col)\n' +
'        self.text = fb.text  # (string, x, y, col=1)\n' +
'        self.scroll = fb.scroll  # (dx, dy)\n' +
'        self.blit = fb.blit  # (fbuf, x, y[, key])\n' +
'        self.init()\n' +
'\n' +
'\n' +
'    def _write(self, command, data):\n' +
'        self.cs(0)\n' +
'        for m in range(self.num):\n' +
'            self.spi.write(bytearray([command, data]))\n' +
'        self.cs(1)\n' +
'\n' +
'    def init(self):\n' +
'        for command, data in (\n' +
'            (_SHUTDOWN, 0),\n' +
'            (_DISPLAYTEST, 0),\n' +
'            (_SCANLIMIT, 7),\n' +
'            (_DECODEMODE, 0),\n' +
'            (_SHUTDOWN, 1),\n' +
'        ):\n' +
'            self._write(command, data)\n' +
'\n' +
'    def brightness(self, value):\n' +
'        if not 0 <= value <= 15:\n' +
'            raise ValueError("Brightness out of range")\n' +
'        self._write(_INTENSITY, value)\n' +
'\n' +
'    def show(self):\n' +
'        for y in range(8):\n' +
'            self.cs(0)\n' +
'            for m in range(self.num):\n' +
'                self.spi.write(bytearray([_DIGIT0 + y, self.buffer[(y * self.num) + m]]))\n' +
'            self.cs(1)\n'
], {type: 'text'});