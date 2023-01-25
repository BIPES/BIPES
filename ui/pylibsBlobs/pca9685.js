var pca9685Blob = new Blob([
"# pca9685.py\n" + 
"# Kevin McAleer\n" + 
"# March 2021\n" + 
"'''\n" + 
"@author Kevin McAleer\n" + 
"'''\n" + 
"\n" + 
"import ustruct\n" + 
"import time\n" + 
"\n" + 
"\n" + 
"class PCA9685:\n" + 
"    '''\n" + 
"    This class models the PCA9685 board, used to control up to 16\n" + 
"    servos, using just 2 wires for control over the I2C interface\n" + 
"    '''\n" + 
"    def __init__(self, i2c, address=0x40):\n" + 
"        '''\n" + 
"        class constructor\n" + 
"\n" + 
"        Args:\n" + 
"            i2c ([I2C Class, from the build in machine library]): This is used to \n" + 
"            bring in the i2c object, which can be created by \n" + 
"            > i2c = I2C(id=0, sda=Pin(0), scl=Pin(1))\n" + 
"            address (hexadecimal, optional): [description]. Defaults to 0x40.\n" + 
"        '''\n" + 
"        self.i2c = i2c\n" + 
"        self.address = address\n" + 
"        self.reset()\n" + 
"\n" + 
"    def _write(self, address, value):\n" + 
"        self.i2c.writeto_mem(self.address, address, bytearray([value]))\n" + 
"\n" + 
"    def _read(self, address):\n" + 
"        return self.i2c.readfrom_mem(self.address, address, 1)[0]\n" + 
"\n" + 
"    def reset(self):\n" + 
"        self._write(0x00, 0x00) # Mode1\n" + 
"\n" + 
"    def freq(self, freq=None):\n" + 
"        if freq is None:\n" + 
"            return int(25000000.0 / 4096 / (self._read(0xfe) - 0.5))\n" + 
"        prescale = int(25000000.0 / 4096.0 / freq + 0.5)\n" + 
"        old_mode = self._read(0x00) # Mode 1\n" + 
"        self._write(0x00, (old_mode & 0x7F) | 0x10) # Mode 1, sleep\n" + 
"        self._write(0xfe, prescale) # Prescale\n" + 
"        self._write(0x00, old_mode) # Mode 1\n" + 
"        time.sleep_us(5)\n" + 
"        self._write(0x00, old_mode | 0xa1) # Mode 1, autoincrement on\n" + 
"\n" + 
"    def pwm(self, index, on=None, off=None):\n" + 
"        if on is None or off is None:\n" + 
"            data = self.i2c.readfrom_mem(self.address, 0x06 + 4 * index, 4)\n" + 
"            return ustruct.unpack('<HH', data)\n" + 
"        data = ustruct.pack('<HH', on, off)\n" + 
"        self.i2c.writeto_mem(self.address, 0x06 + 4 * index,  data)\n" + 
"\n" + 
"    def duty(self, index, value=None, invert=False):\n" + 
"        if value is None:\n" + 
"            pwm = self.pwm(index)\n" + 
"            if pwm == (0, 4096):\n" + 
"                value = 0\n" + 
"            elif pwm == (4096, 0):\n" + 
"                value = 4095\n" + 
"            value = pwm[1]\n" + 
"            if invert:\n" + 
"                value = 4095 - value\n" + 
"            return value\n" + 
"        if not 0 <= value <= 4095:\n" + 
"            raise ValueError('Out of range')\n" + 
"        if invert:\n" + 
"            value = 4095 - value\n" + 
"        if value == 0:\n" + 
"            self.pwm(index, 0, 4096)\n" + 
"        elif value == 4095:\n" + 
"            self.pwm(index, 4096, 0)\n" + 
"        else:\n" + 
"            self.pwm(index, 0, value)\n"
], {type: 'text'});