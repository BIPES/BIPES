var max30100Blob = new Blob([
'""""\n' +
'  Library for the Maxim MAX30100 pulse oximetry system on Raspberry Pi\n' +
'  Based on original C library for Arduino by Connor Huffine/Kontakt\n' +
'  https: // github.com / kontakt / MAX30100\n' +
'  September 2017\n' +
'  Ported to MicroPython on April 2020 by Rafael Aroca <aroca@ufscar.br>\n' +
'  See test.py for test program\n' +
'"""\n' +
'\n' +
'import machine\n' +
'from machine import Pin\n' +
'from machine import I2C\n' +
'\n' +
'INT_STATUS   = 0x00  # Which interrupts are tripped\n' +
'INT_ENABLE   = 0x01  # Which interrupts are active\n' +
'FIFO_WR_PTR  = 0x02  # Where data is being written\n' +
'OVRFLOW_CTR  = 0x03  # Number of lost samples\n' +
'FIFO_RD_PTR  = 0x04  # Where to read from\n' +
'FIFO_DATA    = 0x05  # Ouput data buffer\n' +
'MODE_CONFIG  = 0x06  # Control register\n' +
'SPO2_CONFIG  = 0x07  # Oximetry settings\n' +
'LED_CONFIG   = 0x09  # Pulse width and power of LEDs\n' +
'TEMP_INTG    = 0x16  # Temperature value, whole number\n' +
'TEMP_FRAC    = 0x17  # Temperature value, fraction\n' +
'REV_ID       = 0xFE  # Part revision\n' +
'PART_ID      = 0xFF  # Part ID, normally 0x11\n' +
'\n' +
'I2C_ADDRESS  = 0x57  # I2C address of the MAX30100 device\n' +
'\n' +
'\n' +
'PULSE_WIDTH = {\n' +
'    200: 0,\n' +
'    400: 1,\n' +
'    800: 2,\n' +
'   1600: 3,\n' +
'}\n' +
'\n' +
'SAMPLE_RATE = {\n' +
'    50: 0,\n' +
'   100: 1,\n' +
'   167: 2,\n' +
'   200: 3,\n' +
'   400: 4,\n' +
'   600: 5,\n' +
'   800: 6,\n' +
'  1000: 7,\n' +
'}\n' +
'\n' +
'LED_CURRENT = {\n' +
'       0: 0,\n' +
'     4.4: 1,\n' +
'     7.6: 2,\n' +
'    11.0: 3,\n' +
'    14.2: 4,\n' +
'    17.4: 5,\n' +
'    20.8: 6,\n' +
'    24.0: 7,\n' +
'    27.1: 8,\n' +
'    30.6: 9,\n' +
'    33.8: 10,\n' +
'    37.0: 11,\n' +
'    40.2: 12,\n' +
'    43.6: 13,\n' +
'    46.8: 14,\n' +
'    50.0: 15\n' +
'}\n' +
'\n' +
'def _get_valid(d, value):\n' +
'    try:\n' +
'        return d[value]\n' +
'    except KeyError:\n' +
'        raise KeyError("Value %s not valid, use one of: %s" % (value, ", ".join([str(s) for s in d.keys()])))\n' +
'\n' +
'def _twos_complement(val, bits):\n' +
'    """compute the 2s complement of int value val"""\n' +
'    if (val & (1 << (bits - 1))) != 0: # if sign bit is set e.g., 8bit: 128-255\n' +
'        val = val - (1 << bits)\n' +
'    return val\n' +
'\n' +
'INTERRUPT_SPO2 = 0\n' +
'INTERRUPT_HR = 1\n' +
'INTERRUPT_TEMP = 2\n' +
'INTERRUPT_FIFO = 3\n' +
'\n' +
'MODE_HR = 0x02\n' +
'MODE_SPO2 = 0x03\n' +
'\n' +
'\n' +
'class MAX30100(object):\n' +
'\n' +
'    def __init__(self,\n' +
'                 i2c=None,\n' +
'                 mode=MODE_HR,\n' +
'                 sample_rate=100,\n' +
'                 led_current_red=11.0,\n' +
'                 led_current_ir=11.0,\n' +
'                 pulse_width=1600,\n' +
'                 max_buffer_len=10000\n' +
'                 ):\n' +
'\n' +
'        self.xmit_data = bytearray(1)\n' +
'\n' +
'\n' +
'        # Default to the standard I2C bus on Pi.\n' +
'        #sda=Pin(4)\n' +
'        #scl=Pin(5)\n' +
'        #i2c = I2C(scl=scl,sda=sda)\n' +
'        #i2c.scan()\n' +
'\n' +
'        self.i2c = i2c \n' +
'\n' +
'        self.set_mode(MODE_HR)  # Trigger an initial temperature read.\n' +
'        self.set_led_current(led_current_red, led_current_ir)\n' +
'        self.set_spo_config(sample_rate, pulse_width)\n' +
'\n' +
'        # Reflectance data (latest update)\n' +
'        self.buffer_red = []\n' +
'        self.buffer_ir = []\n' +
'\n' +
'        self.max_buffer_len = max_buffer_len\n' +
'        self._interrupt = None\n' +
'\n' +
'    def i2c_write(self, addr, reg, value):\n' +
'        self.xmit_data[0] = value\n' +
'        self.i2c.writeto_mem(addr, reg, self.xmit_data)\n' +
'\n' +
'    @property\n' +
'    def red(self):\n' +
'        return self.buffer_red[-1] if self.buffer_red else None\n' +
'\n' +
'    @property\n' +
'    def ir(self):\n' +
'        return self.buffer_ir[-1] if self.buffer_ir else None\n' +
'\n' +
'    def set_led_current(self, led_current_red=11.0, led_current_ir=11.0):\n' +
'        # Validate the settings, convert to bit values.\n' +
'        led_current_red = _get_valid(LED_CURRENT, led_current_red)\n' +
'        led_current_ir = _get_valid(LED_CURRENT, led_current_ir)\n' +
'        self.i2c_write(I2C_ADDRESS, LED_CONFIG, (led_current_red << 4) | led_current_ir)\n' +
'\n' +
'    def set_mode(self, mode):\n' +
'        reg = self.i2c.readfrom_mem(I2C_ADDRESS, MODE_CONFIG,1)[0]\n' +
'        self.i2c_write(I2C_ADDRESS, MODE_CONFIG, reg & 0x74) # mask the SHDN bit\n' +
'        self.i2c_write(I2C_ADDRESS, MODE_CONFIG, reg | mode)\n' +
'\n' +
'    def set_spo_config(self, sample_rate=100, pulse_width=1600):\n' +
'        reg = self.i2c.readfrom_mem(I2C_ADDRESS, SPO2_CONFIG,1)[0]\n' +
'        reg = reg & 0xFC  # Set LED pulsewidth to 00\n' +
'        self.i2c_write(I2C_ADDRESS, SPO2_CONFIG, reg | pulse_width)\n' +
'\n' +
'    def enable_spo2(self):\n' +
'        self.set_mode(MODE_SPO2)\n' +
'\n' +
'    def disable_spo2(self):\n' +
'        self.set_mode(MODE_HR)\n' +
'\n' +
'    def enable_interrupt(self, interrupt_type):\n' +
'        self.i2c_write(I2C_ADDRESS, INT_ENABLE, (interrupt_type + 1)<<4)\n' +
'        self.i2c.readfrom_mem(I2C_ADDRESS, INT_STATUS,1)[0]\n' +
'\n' +
'    def get_number_of_samples(self):\n' +
'        write_ptr = self.i2c.readfrom_mem(I2C_ADDRESS, FIFO_WR_PTR,1)[0]\n' +
'        read_ptr = self.i2c.readfrom_mem(I2C_ADDRESS, FIFO_RD_PTR,1)[0]\n' +
'        return abs(16+write_ptr - read_ptr) % 16\n' +
'\n' +
'    def read_sensor(self):\n' +
'        #bytes = self.i2c.read_i2c_block_data(I2C_ADDRESS, FIFO_DATA, 4)\n' +
'        bytes = self.i2c.readfrom_mem(I2C_ADDRESS, FIFO_DATA, 4)\n' +
'        # Add latest values.\n' +
'        self.buffer_ir.append(bytes[0]<<8 | bytes[1])\n' +
'        self.buffer_red.append(bytes[2]<<8 | bytes[3])\n' +
'        # Crop our local FIFO buffer to length.\n' +
'        self.buffer_red = self.buffer_red[-self.max_buffer_len:]\n' +
'        self.buffer_ir = self.buffer_ir[-self.max_buffer_len:]\n' +
'\n' +
'    def shutdown(self):\n' +
'        reg = self.i2c.readfrom_mem(I2C_ADDRESS, MODE_CONFIG,1)[0]\n' +
'        self.i2c_write(I2C_ADDRESS, MODE_CONFIG, reg | 0x80)\n' +
'\n' +
'    def reset(self):\n' +
'        reg = self.i2c.readfrom_mem(I2C_ADDRESS, MODE_CONFIG,1)[0]\n' +
'        self.i2c_write(I2C_ADDRESS, MODE_CONFIG, reg | 0x40)\n' +
'\n' +
'    def refresh_temperature(self):\n' +
'        reg = self.i2c.readfrom_mem(I2C_ADDRESS, MODE_CONFIG,1)[0]\n' +
'        self.i2c_write(I2C_ADDRESS, MODE_CONFIG, reg | (1 << 3))\n' +
'\n' +
'    def get_temperature(self):\n' +
'        intg = _twos_complement(self.i2c.readfrom_mem(I2C_ADDRESS, TEMP_INTG,1)[0])\n' +
'        frac = self.i2c.readfrom_mem(I2C_ADDRESS, TEMP_FRAC,1)[0]\n' +
'        return intg + (frac * 0.0625)\n' +
'\n' +
'    def get_rev_id(self):\n' +
'        return self.i2c.readfrom_mem(I2C_ADDRESS, REV_ID,1)[0]\n' +
'\n' +
'    def get_part_id(self):\n' +
'        return self.i2c.readfrom_mem(I2C_ADDRESS, PART_ID,1)[0]\n' +
'\n' +
'    def get_registers(self):\n' +
'        return {\n' +
'            "INT_STATUS": self.i2c.readfrom_mem(I2C_ADDRESS, INT_STATUS,1)[0],\n' +
'            "INT_ENABLE": self.i2c.readfrom_mem(I2C_ADDRESS, INT_ENABLE,1)[0],\n' +
'            "FIFO_WR_PTR": self.i2c.readfrom_mem(I2C_ADDRESS, FIFO_WR_PTR,1)[0],\n' +
'            "OVRFLOW_CTR": self.i2c.readfrom_mem(I2C_ADDRESS, OVRFLOW_CTR,1)[0],\n' +
'            "FIFO_RD_PTR": self.i2c.readfrom_mem(I2C_ADDRESS, FIFO_RD_PTR,1)[0],\n' +
'            "FIFO_DATA": self.i2c.readfrom_mem(I2C_ADDRESS, FIFO_DATA,1)[0],\n' +
'            "MODE_CONFIG": self.i2c.readfrom_mem(I2C_ADDRESS, MODE_CONFIG,1)[0],\n' +
'            "SPO2_CONFIG": self.i2c.readfrom_mem(I2C_ADDRESS, SPO2_CONFIG,1)[0],\n' +
'            "LED_CONFIG": self.i2c.readfrom_mem(I2C_ADDRESS, LED_CONFIG,1)[0],\n' +
'            "TEMP_INTG": self.i2c.readfrom_mem(I2C_ADDRESS, TEMP_INTG,1)[0],\n' +
'            "TEMP_FRAC": self.i2c.readfrom_mem(I2C_ADDRESS, TEMP_FRAC,1)[0],\n' +
'            "REV_ID": self.i2c.readfrom_mem(I2C_ADDRESS, REV_ID,1)[0],\n' +
'            "PART_ID": self.i2c.readfrom_mem(I2C_ADDRESS, PART_ID,1)[0],\n' +
'        }\n'
 ], {type: 'text'});