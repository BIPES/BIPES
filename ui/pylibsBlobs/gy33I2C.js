var gy33I2CBlob = new Blob([
"import struct\n" +
"\n" +
"class GY33_I2C:\n" +
"    def __init__(self, i2c, addr=90):\n" +
"        self.i2c = i2c\n" +
"        self.addr = addr\n" +
"\n" +
"        # Reasonable defaults with led at max\n" +
"        self.cal = [\n" +
"            [76, 1413],\n" +
"            [183, 2348],\n" +
"            [170, 2162],\n" +
"            [439, 5838]\n" +
"        ]\n" +
"\n" +
"    # From 0 (off) to 10 (max)\n" +
"    def set_led(self, pwr=0):\n" +
"        cfg = 0xA0 - pwr * 16\n" +
"        self.i2c.writeto_mem(self.addr, 0x10, bytes([cfg]))\n" +
"\n" +
"    def calibrate_white_balance(self):\n" +
"        cfg = self.i2c.readfrom_mem(self.addr, 0x10, 1)\n" +
"        cfg = bytes([cfg[0] | 1])\n" +
"        self.i2c.writeto_mem(self.addr, 0x10, cfg)\n" +
"\n" +
"    # Returns [Raw Red, Raw Green, Raw Blue, Clear, Lux, Color Temperature, Red, Green, Blue, Color]\n" +
"    def read_all(self):\n" +
"        data = self.i2c.readfrom_mem(self.addr, 0x00, 16)\n" +
"        return struct.unpack('>HHHHHHBBBB', data)\n" +
"\n" +
"    # Returns [Raw Red, Raw Green, Raw Blue, Clear]\n" +
"    def read_raw(self):\n" +
"        data = self.i2c.readfrom_mem(self.addr, 0x00, 8)\n" +
"        return struct.unpack('>HHHH', data)\n" +
"\n" +
"    # Returns calibrated Red, Green, Blue, Clear\n" +
"    def read_calibrated(self):\n" +
"        data = self.i2c.readfrom_mem(self.addr, 0x00, 8)\n" +
"        color = struct.unpack('>HHHH', data)\n" +
"        result = [0,0,0,0]\n" +
"        for i in range(4):\n" +
"            result[i] = 255 * (color[i] - self.cal[i][0]) // (self.cal[i][1] - self.cal[i][0])\n" +
"        return result\n" +
"\n" +
"    def calibrate_white(self):\n" +
"        data = self.i2c.readfrom_mem(self.addr, 0x00, 8)\n" +
"        color = struct.unpack('>HHHH', data)\n" +
"        for i in range(4):\n" +
"            self.cal[i][1] = color[i]\n" +
"\n" +
"    def calibrate_black(self):\n" +
"        data = self.i2c.readfrom_mem(self.addr, 0x00, 8)\n" +
"        color = struct.unpack('>HHHH', data)\n" +
"        for i in range(4):\n" +
"            self.cal[i][0] = color[i]\n" 
], {type: 'text'});