var pico_i2c_lcdBlob = new Blob([
"\n" +
"import utime\n" +
"import gc\n" +
"\n" +
"from lcd_api import LcdApi\n" +
"from machine import I2C\n" +
"\n" +
"# PCF8574 pin definitions\n" +
"MASK_RS = 0x01       # P0\n" +
"MASK_RW = 0x02       # P1\n" +
"MASK_E  = 0x04       # P2\n" +
"\n" +
"SHIFT_BACKLIGHT = 3  # P3\n" +
"SHIFT_DATA      = 4  # P4-P7\n" +
"\n" +
"class I2cLcd(LcdApi):\n" +
"    \n" +
"    #Implements a HD44780 character LCD connected via PCF8574 on I2C\n" +
"\n" +
"    def __init__(self, i2c, i2c_addr, num_lines, num_columns):\n" +
"        self.i2c = i2c\n" +
"        self.i2c_addr = i2c_addr\n" +
"        self.i2c.writeto(self.i2c_addr, bytes([0]))\n" +
"        utime.sleep_ms(20)   # Allow LCD time to powerup\n" +
"        # Send reset 3 times\n" +
"        self.hal_write_init_nibble(self.LCD_FUNCTION_RESET)\n" +
"        utime.sleep_ms(5)    # Need to delay at least 4.1 msec\n" +
"        self.hal_write_init_nibble(self.LCD_FUNCTION_RESET)\n" +
"        utime.sleep_ms(1)\n" +
"        self.hal_write_init_nibble(self.LCD_FUNCTION_RESET)\n" +
"        utime.sleep_ms(1)\n" +
"        # Put LCD into 4-bit mode\n" +
"        self.hal_write_init_nibble(self.LCD_FUNCTION)\n" +
"        utime.sleep_ms(1)\n" +
"        LcdApi.__init__(self, num_lines, num_columns)\n" +
"        cmd = self.LCD_FUNCTION\n" +
"        if num_lines > 1:\n" +
"            cmd |= self.LCD_FUNCTION_2LINES\n" +
"        self.hal_write_command(cmd)\n" +
"        gc.collect()\n" +
"\n" +
"    def hal_write_init_nibble(self, nibble):\n" +
"        # Writes an initialization nibble to the LCD.\n" +
"        # This particular function is only used during initialization.\n" +
"        byte = ((nibble >> 4) & 0x0f) << SHIFT_DATA\n" +
"        self.i2c.writeto(self.i2c_addr, bytes([byte | MASK_E]))\n" +
"        self.i2c.writeto(self.i2c_addr, bytes([byte]))\n" +
"        gc.collect()\n" +
"        \n" +
"    def hal_backlight_on(self):\n" +
"        # Allows the hal layer to turn the backlight on\n" +
"        self.i2c.writeto(self.i2c_addr, bytes([1 << SHIFT_BACKLIGHT]))\n" +
"        gc.collect()\n" +
"        \n" +
"    def hal_backlight_off(self):\n" +
"        #Allows the hal layer to turn the backlight off\n" +
"        self.i2c.writeto(self.i2c_addr, bytes([0]))\n" +
"        gc.collect()\n" +
"        \n" +
"    def hal_write_command(self, cmd):\n" +
"        # Write a command to the LCD. Data is latched on the falling edge of E.\n" +
"        byte = ((self.backlight << SHIFT_BACKLIGHT) |\n" +
"                (((cmd >> 4) & 0x0f) << SHIFT_DATA))\n" +
"        self.i2c.writeto(self.i2c_addr, bytes([byte | MASK_E]))\n" +
"        self.i2c.writeto(self.i2c_addr, bytes([byte]))\n" +
"        byte = ((self.backlight << SHIFT_BACKLIGHT) |\n" +
"                ((cmd & 0x0f) << SHIFT_DATA))\n" +
"        self.i2c.writeto(self.i2c_addr, bytes([byte | MASK_E]))\n" +
"        self.i2c.writeto(self.i2c_addr, bytes([byte]))\n" +
"        if cmd <= 3:\n" +
"            # The home and clear commands require a worst case delay of 4.1 msec\n" +
"            utime.sleep_ms(5)\n" +
"        gc.collect()\n" +
"\n" +
"    def hal_write_data(self, data):\n" +
"        # Write data to the LCD. Data is latched on the falling edge of E.\n" +
"        byte = (MASK_RS |\n" +
"                (self.backlight << SHIFT_BACKLIGHT) |\n" +
"                (((data >> 4) & 0x0f) << SHIFT_DATA))\n" +
"        self.i2c.writeto(self.i2c_addr, bytes([byte | MASK_E]))\n" +
"        self.i2c.writeto(self.i2c_addr, bytes([byte]))\n" +
"        byte = (MASK_RS |\n" +
"                (self.backlight << SHIFT_BACKLIGHT) |\n" +
"                ((data & 0x0f) << SHIFT_DATA))      \n" +
"        self.i2c.writeto(self.i2c_addr, bytes([byte | MASK_E]))\n" +
"        self.i2c.writeto(self.i2c_addr, bytes([byte]))\n" +
"        gc.collect()\n"
], {type: 'text'});