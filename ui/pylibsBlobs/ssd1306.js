var ssd1306Blob = new Blob([
"#MicroPython SSD1306 OLED driver, I2C and SPI interfaces created by Adafruit\n" +
"\n" +
"import time\n" +
"import framebuf\n" +
"\n" +
"# register definitions\n" +
"SET_CONTRAST        = const(0x81)\n" +
"SET_ENTIRE_ON       = const(0xa4)\n" +
"SET_NORM_INV        = const(0xa6)\n" +
"SET_DISP            = const(0xae)\n" +
"SET_MEM_ADDR        = const(0x20)\n" +
"SET_COL_ADDR        = const(0x21)\n" +
"SET_PAGE_ADDR       = const(0x22)\n" +
"SET_DISP_START_LINE = const(0x40)\n" +
"SET_SEG_REMAP       = const(0xa0)\n" +
"SET_MUX_RATIO       = const(0xa8)\n" +
"SET_COM_OUT_DIR     = const(0xc0)\n" +
"SET_DISP_OFFSET     = const(0xd3)\n" +
"SET_COM_PIN_CFG     = const(0xda)\n" +
"SET_DISP_CLK_DIV    = const(0xd5)\n" +
"SET_PRECHARGE       = const(0xd9)\n" +
"SET_VCOM_DESEL      = const(0xdb)\n" +
"SET_CHARGE_PUMP     = const(0x8d)\n" +
"\n" +
"\n" +
"class SSD1306:\n" +
"    def __init__(self, width, height, external_vcc):\n" +
"        self.width = width\n" +
"        self.height = height\n" +
"        self.external_vcc = external_vcc\n" +
"        self.pages = self.height // 8\n" +
"        # Note the subclass must initialize self.framebuf to a framebuffer.\n" +
"        # This is necessary because the underlying data buffer is different\n" +
"        # between I2C and SPI implementations (I2C needs an extra byte).\n" +
"        self.poweron()\n" +
"        self.init_display()\n" +
"\n" +
"    def init_display(self):\n" +
"        for cmd in (\n" +
"            SET_DISP | 0x00, # off\n" +
"            # address setting\n" +
"            SET_MEM_ADDR, 0x00, # horizontal\n" +
"            # resolution and layout\n" +
"            SET_DISP_START_LINE | 0x00,\n" +
"            SET_SEG_REMAP | 0x01, # column addr 127 mapped to SEG0\n" +
"            SET_MUX_RATIO, self.height - 1,\n" +
"            SET_COM_OUT_DIR | 0x08, # scan from COM[N] to COM0\n" +
"            SET_DISP_OFFSET, 0x00,\n" +
"            SET_COM_PIN_CFG, 0x02 if self.height == 32 else 0x12,\n" +
"            # timing and driving scheme\n" +
"            SET_DISP_CLK_DIV, 0x80,\n" +
"            SET_PRECHARGE, 0x22 if self.external_vcc else 0xf1,\n" +
"            SET_VCOM_DESEL, 0x30, # 0.83*Vcc\n" +
"            # display\n" +
"            SET_CONTRAST, 0xff, # maximum\n" +
"            SET_ENTIRE_ON, # output follows RAM contents\n" +
"            SET_NORM_INV, # not inverted\n" +
"            # charge pump\n" +
"            SET_CHARGE_PUMP, 0x10 if self.external_vcc else 0x14,\n" +
"            SET_DISP | 0x01): # on\n" +
"            self.write_cmd(cmd)\n" +
"        self.fill(0)\n" +
"        self.show()\n" +
"\n" +
"    def poweroff(self):\n" +
"        self.write_cmd(SET_DISP | 0x00)\n" +
"\n" +
"    def contrast(self, contrast):\n" +
"        self.write_cmd(SET_CONTRAST)\n" +
"        self.write_cmd(contrast)\n" +
"\n" +
"    def invert(self, invert):\n" +
"        self.write_cmd(SET_NORM_INV | (invert & 1))\n" +
"\n" +
"    def show(self):\n" +
"        x0 = 0\n" +
"        x1 = self.width - 1\n" +
"        if self.width == 64:\n" +
"            # displays with width of 64 pixels are shifted by 32\n" +
"            x0 += 32\n" +
"            x1 += 32\n" +
"        self.write_cmd(SET_COL_ADDR)\n" +
"        self.write_cmd(x0)\n" +
"        self.write_cmd(x1)\n" +
"        self.write_cmd(SET_PAGE_ADDR)\n" +
"        self.write_cmd(0)\n" +
"        self.write_cmd(self.pages - 1)\n" +
"        self.write_framebuf()\n" +
"\n" +
"    def fill(self, col):\n" +
"        self.framebuf.fill(col)\n" +
"\n" +
"    def pixel(self, x, y, col):\n" +
"        self.framebuf.pixel(x, y, col)\n" +
"\n" +
"    def scroll(self, dx, dy):\n" +
"        self.framebuf.scroll(dx, dy)\n" +
"\n" +
"    def text(self, string, x, y, col=1):\n" +
"        self.framebuf.text(string, x, y, col)\n" +
"\n" +
"\n" +
"class SSD1306_I2C(SSD1306):\n" +
"    def __init__(self, width, height, i2c, addr=0x3c, external_vcc=False):\n" +
"        self.i2c = i2c\n" +
"        self.addr = addr\n" +
"        self.temp = bytearray(2)\n" +
"        # Add an extra byte to the data buffer to hold an I2C data/command byte\n" +
"        # to use hardware-compatible I2C transactions.  A memoryview of the\n" +
"        # buffer is used to mask this byte from the framebuffer operations\n" +
"        # (without a major memory hit as memoryview doesn't copy to a separate\n" +
"        # buffer).\n" +
"        self.buffer = bytearray(((height // 8) * width) + 1)\n" +
"        self.buffer[0] = 0x40  # Set first byte of data buffer to Co=0, D/C=1\n" +
"        self.framebuf = framebuf.FrameBuffer1(memoryview(self.buffer)[1:], width, height)\n" +
"        super().__init__(width, height, external_vcc)\n" +
"\n" +
"    def write_cmd(self, cmd):\n" +
"        self.temp[0] = 0x80 # Co=1, D/C#=0\n" +
"        self.temp[1] = cmd\n" +
"        self.i2c.writeto(self.addr, self.temp)\n" +
"\n" +
"    def write_framebuf(self):\n" +
"        # Blast out the frame buffer using a single I2C transaction to support\n" +
"        # hardware I2C interfaces.\n" +
"        self.i2c.writeto(self.addr, self.buffer)\n" +
"\n" +
"    def poweron(self):\n" +
"        pass\n" +
"\n" +
"\n" +
"class SSD1306_SPI(SSD1306):\n" +
"    def __init__(self, width, height, spi, dc, res, cs, external_vcc=False):\n" +
"        self.rate = 10 * 1024 * 1024\n" +
"        dc.init(dc.OUT, value=0)\n" +
"        res.init(res.OUT, value=0)\n" +
"        cs.init(cs.OUT, value=1)\n" +
"        self.spi = spi\n" +
"        self.dc = dc\n" +
"        self.res = res\n" +
"        self.cs = cs\n" +
"        self.buffer = bytearray((height // 8) * width)\n" +
"        self.framebuf = framebuf.FrameBuffer1(self.buffer, width, height)\n" +
"        super().__init__(width, height, external_vcc)\n" +
"\n" +
"    def write_cmd(self, cmd):\n" +
"        self.spi.init(baudrate=self.rate, polarity=0, phase=0)\n" +
"        self.cs.high()\n" +
"        self.dc.low()\n" +
"        self.cs.low()\n" +
"        self.spi.write(bytearray([cmd]))\n" +
"        self.cs.high()\n" +
"\n" +
"    def write_framebuf(self):\n" +
"        self.spi.init(baudrate=self.rate, polarity=0, phase=0)\n" +
"        self.cs.high()\n" +
"        self.dc.high()\n" +
"        self.cs.low()\n" +
"        self.spi.write(self.buffer)\n" +
"        self.cs.high()\n" +
"\n" +
"    def poweron(self):\n" +
"        self.res.high()\n" +
"        time.sleep_ms(1)\n" +
"        self.res.low()\n" +
"        time.sleep_ms(10)\n" +
"        self.res.high()\n"
], {type: 'text'});