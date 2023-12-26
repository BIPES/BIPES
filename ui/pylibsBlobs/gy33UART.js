var gy33UARTBlob = new Blob([
"import time\n" +
"\n" +
"TYPE_RAW = 0x15\n" +
"TYPE_LCC = 0x25\n" +
"TYPE_PROCESSED = 0x45\n" +
"TYPE_I2C = 0x55\n" +
"\n" +
"HEADER = 0x5A\n" +
"\n" +
"class GY33_UART:\n" +
"    def __init__(self, uart):\n" +
"        self.uart = uart\n" +
"        self.header = 0\n" +
"        self.frame_type = 0\n" +
"        self.recv_buf = bytearray(8)\n" +
"        self.recv_ptr = 0\n" +
"        self.recv_length = -1\n" +
"\n" +
"        self.raw = [0, 0, 0, 0]\n" +
"        self.lcc = [0, 0, 0]\n" +
"        self.processed = [0, 0, 0]\n" +
"        self.i2c_addr = -1\n" +
"\n" +
"        # Reasonable defaults with led at max\n" +
"        self.cal = [\n" +
"            [76, 1413],\n" +
"            [183, 2348],\n" +
"            [170, 2162],\n" +
"            [439, 5838]\n" +
"        ]\n" +
"\n" +
"    def update(self, wait=False, timeout=1000):\n" +
"        start = time.ticks_ms()\n" +
"        while self.uart.any() or wait:\n" +
"            if wait and time.ticks_diff(time.ticks_ms(), start) > timeout:\n" +
"                return\n" +
"\n" +
"            c = self.uart.read(1)\n" +
"            if c == None:\n" +
"                continue\n" +
"            c = c[0]\n" +
"\n" +
"            if self.header == 2:\n" +
"                if self._read_frame(c):\n" +
"                    return\n" +
"            elif c == HEADER:\n" +
"                self._clear_frame()\n" +
"                self.header += 1\n" +
"            else:\n" +
"                self.header = 0\n" +
"\n" +
"    def _clear_frame(self):\n" +
"        self.frame_type = 0\n" +
"        self.recv_ptr = 0\n" +
"        self.recv_length = -1\n" +
"\n" +
"    def _read_frame(self, c):\n" +
"        if self.frame_type == 0:\n" +
"            if c in [TYPE_RAW, TYPE_LCC, TYPE_PROCESSED, TYPE_I2C]:\n" +
"                self.frame_type = c\n" +
"            else:\n" +
"                self.header = 0\n" +
"        elif self.recv_ptr == self.recv_length:\n" +
"            if self._checksum_pass(c):\n" +
"                self._parse_frame()\n" +
"            self.header = 0\n" +
"            self._clear_frame()\n" +
"            return True\n" +
"        elif self.recv_length == -1:\n" +
"            self.recv_length = c\n" +
"        else:\n" +
"            self.recv_buf[self.recv_ptr] = c\n" +
"            self.recv_ptr += 1\n" +
"\n" +
"        return False\n" +
"\n" +
"    def _parse_frame(self):\n" +
"        if self.frame_type == TYPE_RAW:\n" +
"            self._parse_raw()\n" +
"        elif self.frame_type == TYPE_LCC:\n" +
"            self._parse_lcc()\n" +
"        elif self.frame_type == TYPE_PROCESSED:\n" +
"            self._parse_processed()\n" +
"        elif self.frame_type == TYPE_I2C:\n" +
"            self._parse_i2c()\n" +
"\n" +
"    def _checksum_pass(self, c):\n" +
"        sum = HEADER + HEADER + self.frame_type + self.recv_length\n" +
"        for i in range(self.recv_length):\n" +
"            sum += self.recv_buf[i]\n" +
"        sum %= 256\n" +
"\n" +
"        return sum == c\n" +
"\n" +
"    def _parse_raw(self):\n" +
"        self.raw[0] = (self.recv_buf[0] << 8) + self.recv_buf[1]\n" +
"        self.raw[1] = (self.recv_buf[2] << 8) + self.recv_buf[3]\n" +
"        self.raw[2] = (self.recv_buf[4] << 8) + self.recv_buf[5]\n" +
"        self.raw[3] = (self.recv_buf[6] << 8) + self.recv_buf[6]\n" +
"\n" +
"    def _parse_lcc(self):\n" +
"        self.lcc[0] = (self.recv_buf[0] << 8) + self.recv_buf[1]\n" +
"        self.lcc[1] = (self.recv_buf[2] << 8) + self.recv_buf[3]\n" +
"        self.lcc[2] = (self.recv_buf[4] << 8) + self.recv_buf[5]\n" +
"\n" +
"    def _parse_processed(self):\n" +
"        self.processed[0] = self.recv_buf[0]\n" +
"        self.processed[1] = self.recv_buf[1]\n" +
"        self.processed[2] = self.recv_buf[2]\n" +
"\n" +
"    def _parse_i2c(self):\n" +
"        self.i2c_addr = self.recv_buf[0]\n" +
"\n" +
"    def _write_cmd(self, header, cmd):\n" +
"        sum = (header + cmd) % 256\n" +
"        self.uart.write(bytes([header, cmd, sum]))\n" +
"\n" +
"    def set_output(self, raw, lcc, processed):\n" +
"        cmd = 0x80\n" +
"        if raw:\n" +
"            cmd |= 4\n" +
"        if lcc:\n" +
"            cmd |= 2\n" +
"        if processed:\n" +
"            cmd |= 1\n" +
"\n" +
"        self._write_cmd(0xA5, cmd)\n" +
"        time.sleep_ms(100)\n" +
"\n" +
"    def set_led(self, pwr=0, save=False):\n" +
"        cmd = 0x60 + 0x0A - pwr\n" +
"        self._write_cmd(0xA5, cmd)\n" +
"\n" +
"        if save:\n" +
"            self._write_cmd(0xA5, 0xCC)\n" +
"        time.sleep_ms(100)\n" +
"\n" +
"    def query_raw(self):\n" +
"        self._write_cmd(0xA5, 0x51)\n" +
"\n" +
"    def query_lcc(self):\n" +
"        self._write_cmd(0xA5, 0x52)\n" +
"\n" +
"    def query_processed(self):\n" +
"        self._write_cmd(0xA5, 0x54)\n" +
"\n" +
"    def query_i2c(self):\n" +
"        self._write_cmd(0xAA, 0xF5)\n" +
"\n" +
"    def set_baudrate(self, rate):\n" +
"        if rate == 9600:\n" +
"            self._write_cmd(0xA5, 0xAE)\n" +
"        elif rate == 115200:\n" +
"            self._write_cmd(0xA5, 0xAF)\n" +
"        else:\n" +
"            raise ValueError('baudrate must be 9600 or 115200')\n" +
"\n" +
"    def calibrate_white_balance(self):\n" +
"        self._write_cmd(0xA5, 0xBB)\n" +
"\n" +
"    def set_i2c_addr(self, addr):\n" +
"        if addr >= 0 and addr <= 127:\n" +
"            self._write_cmd(0xAA, addr)\n" +
"        else:\n" +
"            raise ValueError('addr must be between 0 to 127')\n" +
"\n" +
"    def set_integration_time(self, itime):\n" +
"        if itime == 700:\n" +
"            self._write_cmd(0xA5, 0x58)\n" +
"        elif itime == 154:\n" +
"            self._write_cmd(0xA5, 0x59)\n" +
"        elif itime == 100:\n" +
"            self._write_cmd(0xA5, 0x5A)\n" +
"        elif itime == 24:\n" +
"            self._write_cmd(0xA5, 0x5B)\n" +
"        elif itime == 2.4:\n" +
"            self._write_cmd(0xA5, 0x5C)\n" +
"        else:\n" +
"            raise ValueError('time must be 700, 154, 100, 24, or 2.4')\n" +
"        time.sleep_ms(100)\n" +
"\n" +
"    def calibrate_white(self):\n" +
"        for i in range(4):\n" +
"            self.cal[i][1] = self.raw[i]\n" +
"\n" +
"    def calibrate_black(self):\n" +
"        for i in range(4):\n" +
"            self.cal[i][0] = self.raw[i]\n" +
"\n" +
"    def get_raw(self):\n" +
"        self.query_raw()\n" +
"        self.update(True)\n" +
"        return self.raw\n" +
"\n" +
"    def get_lcc(self):\n" +
"        self.query_lcc()\n" +
"        self.update(True)\n" +
"        return self.lcc\n" +
"\n" +
"    def get_processed(self):\n" +
"        self.query_processed()\n" +
"        self.update(True)\n" +
"        return self.processed\n" +
"\n" +
"    def get_calibrated(self):\n" +
"        cal = [0, 0, 0, 0]\n" +
"        for i in range(4):\n" +
"            cal[i] = 255 * (self.raw[i] - self.cal[i][0]) // (self.cal[i][1] - self.cal[i][0])\n" +
"        return cal\n" +
"\n" +
"    def get_i2c_addr(self):\n" +
"        return self.i2c_addr >> 1\n"
], {type: 'text'});
