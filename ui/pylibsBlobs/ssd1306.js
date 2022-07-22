var ssd1306Blob = new Blob([
'# MicroPython SSD1306 OLED driver, I2C and SPI interfaces\n' +
'\n' +
'from micropython import const\n' +
'import framebuf\n' +
'\n' +
'\n' +
'# register definitions\n' +
'SET_CONTRAST = const(0x81)\n' +
'SET_ENTIRE_ON = const(0xA4)\n' +
'SET_NORM_INV = const(0xA6)\n' +
'SET_DISP = const(0xAE)\n' +
'SET_MEM_ADDR = const(0x20)\n' +
'SET_COL_ADDR = const(0x21)\n' +
'SET_PAGE_ADDR = const(0x22)\n' +
'SET_DISP_START_LINE = const(0x40)\n' +
'SET_SEG_REMAP = const(0xA0)\n' +
'SET_MUX_RATIO = const(0xA8)\n' +
'SET_COM_OUT_DIR = const(0xC0)\n' +
'SET_DISP_OFFSET = const(0xD3)\n' +
'SET_COM_PIN_CFG = const(0xDA)\n' +
'SET_DISP_CLK_DIV = const(0xD5)\n' +
'SET_PRECHARGE = const(0xD9)\n' +
'SET_VCOM_DESEL = const(0xDB)\n' +
'SET_CHARGE_PUMP = const(0x8D)\n' +
'\n' +
'# Subclassing FrameBuffer provides support for graphics primitives\n' +
'# http://docs.micropython.org/en/latest/pyboard/library/framebuf.html\n' +
'class SSD1306(framebuf.FrameBuffer):\n' +
'    def __init__(self, width, height, external_vcc):\n' +
'        self.width = width\n' +
'        self.height = height\n' +
'        self.external_vcc = external_vcc\n' +
'        self.pages = self.height // 8\n' +
'        self.buffer = bytearray(self.pages * self.width)\n' +
'        super().__init__(self.buffer, self.width, self.height, framebuf.MONO_VLSB)\n' +
'        self.init_display()\n' +
'\n' +
'    def init_display(self):\n' +
'        for cmd in (\n' +
'            SET_DISP | 0x00,  # off\n' +
'            # address setting\n' +
'            SET_MEM_ADDR,\n' +
'            0x00,  # horizontal\n' +
'            # resolution and layout\n' +
'            SET_DISP_START_LINE | 0x00,\n' +
'            SET_SEG_REMAP | 0x01,  # column addr 127 mapped to SEG0\n' +
'            SET_MUX_RATIO,\n' +
'            self.height - 1,\n' +
'            SET_COM_OUT_DIR | 0x08,  # scan from COM[N] to COM0\n' +
'            SET_DISP_OFFSET,\n' +
'            0x00,\n' +
'            SET_COM_PIN_CFG,\n' +
'            0x02 if self.width > 2 * self.height else 0x12,\n' +
'            # timing and driving scheme\n' +
'            SET_DISP_CLK_DIV,\n' +
'            0x80,\n' +
'            SET_PRECHARGE,\n' +
'            0x22 if self.external_vcc else 0xF1,\n' +
'            SET_VCOM_DESEL,\n' +
'            0x30,  # 0.83*Vcc\n' +
'            # display\n' +
'            SET_CONTRAST,\n' +
'            0xFF,  # maximum\n' +
'            SET_ENTIRE_ON,  # output follows RAM contents\n' +
'            SET_NORM_INV,  # not inverted\n' +
'            # charge pump\n' +
'            SET_CHARGE_PUMP,\n' +
'            0x10 if self.external_vcc else 0x14,\n' +
'            SET_DISP | 0x01,\n' +
'        ):  # on\n' +
'            self.write_cmd(cmd)\n' +
'        self.fill(0)\n' +
'        self.show()\n' +
'\n' +
'    def poweroff(self):\n' +
'        self.write_cmd(SET_DISP | 0x00)\n' +
'\n' +
'    def poweron(self):\n' +
'        self.write_cmd(SET_DISP | 0x01)\n' +
'\n' +
'    def contrast(self, contrast):\n' +
'        self.write_cmd(SET_CONTRAST)\n' +
'        self.write_cmd(contrast)\n' +
'\n' +
'    def invert(self, invert):\n' +
'        self.write_cmd(SET_NORM_INV | (invert & 1))\n' +
'\n' +
'    def show(self):\n' +
'        x0 = 0\n' +
'        x1 = self.width - 1\n' +
'        if self.width == 64:\n' +
'            # displays with width of 64 pixels are shifted by 32\n' +
'            x0 += 32\n' +
'            x1 += 32\n' +
'        self.write_cmd(SET_COL_ADDR)\n' +
'        self.write_cmd(x0)\n' +
'        self.write_cmd(x1)\n' +
'        self.write_cmd(SET_PAGE_ADDR)\n' +
'        self.write_cmd(0)\n' +
'        self.write_cmd(self.pages - 1)\n' +
'        self.write_data(self.buffer)\n' +
'\n' +
'\n' +
'class SSD1306_I2C(SSD1306):\n' +
'    def __init__(self, width, height, i2c, addr=0x3C, external_vcc=False):\n' +
'        self.i2c = i2c\n' +
'        self.addr = addr\n' +
'        self.temp = bytearray(2)\n' +
'        self.write_list = [b"\x40", None]  # Co=0, D/C#=1\n' +
'        super().__init__(width, height, external_vcc)\n' +
'\n' +
'    def write_cmd(self, cmd):\n' +
'        self.temp[0] = 0x80  # Co=1, D/C#=0\n' +
'        self.temp[1] = cmd\n' +
'        self.i2c.writeto(self.addr, self.temp)\n' +
'\n' +
'    def write_data(self, buf):\n' +
'        self.write_list[1] = buf\n' +
'        self.i2c.writevto(self.addr, self.write_list)\n' +
'\n' +
'\n' +
'class SSD1306_SPI(SSD1306):\n' +
'    def __init__(self, width, height, spi, dc, res, cs, external_vcc=False):\n' +
'        self.rate = 10 * 1024 * 1024\n' +
'        dc.init(dc.OUT, value=0)\n' +
'        res.init(res.OUT, value=0)\n' +
'        cs.init(cs.OUT, value=1)\n' +
'        self.spi = spi\n' +
'        self.dc = dc\n' +
'        self.res = res\n' +
'        self.cs = cs\n' +
'        import time\n' +
'\n' +
'        self.res(1)\n' +
'        time.sleep_ms(1)\n' +
'        self.res(0)\n' +
'        time.sleep_ms(10)\n' +
'        self.res(1)\n' +
'        super().__init__(width, height, external_vcc)\n' +
'\n' +
'    def write_cmd(self, cmd):\n' +
'        self.spi.init(baudrate=self.rate, polarity=0, phase=0)\n' +
'        self.cs(1)\n' +
'        self.dc(0)\n' +
'        self.cs(0)\n' +
'        self.spi.write(bytearray([cmd]))\n' +
'        self.cs(1)\n' +
'\n' +
'    def write_data(self, buf):\n' +
'        self.spi.init(baudrate=self.rate, polarity=0, phase=0)\n' +
'        self.cs(1)\n' +
'        self.dc(1)\n' +
'        self.cs(0)\n' +
'        self.spi.write(buf)\n' +
'        self.cs(1)\n'
], {type: 'text'});