var lcd_apiBlob = new Blob([
"\n" +
"import time\n" +
"\n" +
"class LcdApi:\n" +
"    \n" +
"    # Implements the API for talking with HD44780 compatible character LCDs.\n" +
"    # This class only knows what commands to send to the LCD, and not how to get\n" +
"    # them to the LCD.\n" +
"    #\n" +
"    # It is expected that a derived class will implement the hal_xxx functions.\n" +
"    #\n" +
"    # The following constant names were lifted from the avrlib lcd.h header file,\n" +
"    # with bit numbers changed to bit masks.\n" +
"    \n" +
"    # HD44780 LCD controller command set\n" +
"    LCD_CLR             = 0x01  # DB0: clear display\n" +
"    LCD_HOME            = 0x02  # DB1: return to home position\n" +
"\n" +
"    LCD_ENTRY_MODE      = 0x04  # DB2: set entry mode\n" +
"    LCD_ENTRY_INC       = 0x02  # DB1: increment\n" +
"    LCD_ENTRY_SHIFT     = 0x01  # DB0: shift\n" +
"\n" +
"    LCD_ON_CTRL         = 0x08  # DB3: turn lcd/cursor on\n" +
"    LCD_ON_DISPLAY      = 0x04  # DB2: turn display on\n" +
"    LCD_ON_CURSOR       = 0x02  # DB1: turn cursor on\n" +
"    LCD_ON_BLINK        = 0x01  # DB0: blinking cursor\n" +
"\n" +
"    LCD_MOVE            = 0x10  # DB4: move cursor/display\n" +
"    LCD_MOVE_DISP       = 0x08  # DB3: move display (0-> move cursor)\n" +
"    LCD_MOVE_RIGHT      = 0x04  # DB2: move right (0-> left)\n" +
"\n" +
"    LCD_FUNCTION        = 0x20  # DB5: function set\n" +
"    LCD_FUNCTION_8BIT   = 0x10  # DB4: set 8BIT mode (0->4BIT mode)\n" +
"    LCD_FUNCTION_2LINES = 0x08  # DB3: two lines (0->one line)\n" +
"    LCD_FUNCTION_10DOTS = 0x04  # DB2: 5x10 font (0->5x7 font)\n" +
"    LCD_FUNCTION_RESET  = 0x30  # See 'Initializing by Instruction' section\n" +
"\n" +
"    LCD_CGRAM           = 0x40  # DB6: set CG RAM address\n" +
"    LCD_DDRAM           = 0x80  # DB7: set DD RAM address\n" +
"\n" +
"    LCD_RS_CMD          = 0\n" +
"    LCD_RS_DATA         = 1\n" +
"\n" +
"    LCD_RW_WRITE        = 0\n" +
"    LCD_RW_READ         = 1\n" +
"\n" +
"    def __init__(self, num_lines, num_columns):\n" +
"        self.num_lines = num_lines\n" +
"        if self.num_lines > 4:\n" +
"            self.num_lines = 4\n" +
"        self.num_columns = num_columns\n" +
"        if self.num_columns > 40:\n" +
"            self.num_columns = 40\n" +
"        self.cursor_x = 0\n" +
"        self.cursor_y = 0\n" +
"        self.implied_newline = False\n" +
"        self.backlight = True\n" +
"        self.display_off()\n" +
"        self.backlight_on()\n" +
"        self.clear()\n" +
"        self.hal_write_command(self.LCD_ENTRY_MODE | self.LCD_ENTRY_INC)\n" +
"        self.hide_cursor()\n" +
"        self.display_on()\n" +
"\n" +
"    def clear(self):\n" +
"        # Clears the LCD display and moves the cursor to the top left corner\n" +
"        self.hal_write_command(self.LCD_CLR)\n" +
"        self.hal_write_command(self.LCD_HOME)\n" +
"        self.cursor_x = 0\n" +
"        self.cursor_y = 0\n" +
"\n" +
"    def show_cursor(self):\n" +
"        # Causes the cursor to be made visible\n" +
"        self.hal_write_command(self.LCD_ON_CTRL | self.LCD_ON_DISPLAY |\n" +
"                               self.LCD_ON_CURSOR)\n" +
"\n" +
"    def hide_cursor(self):\n" +
"        # Causes the cursor to be hidden\n" +
"        self.hal_write_command(self.LCD_ON_CTRL | self.LCD_ON_DISPLAY)\n" +
"\n" +
"    def blink_cursor_on(self):\n" +
"        # Turns on the cursor, and makes it blink\n" +
"        self.hal_write_command(self.LCD_ON_CTRL | self.LCD_ON_DISPLAY |\n" +
"                               self.LCD_ON_CURSOR | self.LCD_ON_BLINK)\n" +
"\n" +
"    def blink_cursor_off(self):\n" +
"        # Turns on the cursor, and makes it no blink (i.e. be solid)\n" +
"        self.hal_write_command(self.LCD_ON_CTRL | self.LCD_ON_DISPLAY |\n" +
"                               self.LCD_ON_CURSOR)\n" +
"\n" +
"    def display_on(self):\n" +
"        # Turns on (i.e. unblanks) the LCD\n" +
"        self.hal_write_command(self.LCD_ON_CTRL | self.LCD_ON_DISPLAY)\n" +
"\n" +
"    def display_off(self):\n" +
"        # Turns off (i.e. blanks) the LCD\n" +
"        self.hal_write_command(self.LCD_ON_CTRL)\n" +
"\n" +
"    def backlight_on(self):\n" +
"        # Turns the backlight on.\n" +
"        \n" +
"        # This isn't really an LCD command, but some modules have backlight\n" +
"        # controls, so this allows the hal to pass through the command.\n" +
"        self.backlight = True\n" +
"        self.hal_backlight_on()\n" +
"\n" +
"    def backlight_off(self):\n" +
"        # Turns the backlight off.\n" +
"\n" +
"        # This isn't really an LCD command, but some modules have backlight\n" +
"        # controls, so this allows the hal to pass through the command.\n" +
"        self.backlight = False\n" +
"        self.hal_backlight_off()\n" +
"\n" +
"    def move_to(self, cursor_x, cursor_y):\n" +
"        # Moves the cursor position to the indicated position. The cursor\n" +
"        # position is zero based (i.e. cursor_x == 0 indicates first column).\n" +
"        self.cursor_x = cursor_x\n" +
"        self.cursor_y = cursor_y\n" +
"        addr = cursor_x & 0x3f\n" +
"        if cursor_y & 1:\n" +
"            addr += 0x40    # Lines 1 & 3 add 0x40\n" +
"        if cursor_y & 2:    # Lines 2 & 3 add number of columns\n" +
"            addr += self.num_columns\n" +
"        self.hal_write_command(self.LCD_DDRAM | addr)\n" +
"\n" +
"    def putchar(self, char):\n" +
"        # Writes the indicated character to the LCD at the current cursor\n" +
"        # position, and advances the cursor by one position.\n" +
"        if char == chr(13):\n" +
"            if self.implied_newline:\n" +
"                # self.implied_newline means we advanced due to a wraparound,\n" +
"                # so if we get a newline right after that we ignore it.\n" +
"                pass\n" +
"            else:\n" +
"                self.cursor_x = self.num_columns\n" +
"        else:\n" +
"            self.hal_write_data(ord(char))\n" +
"            self.cursor_x += 1\n" +
"        if self.cursor_x >= self.num_columns:\n" +
"            self.cursor_x = 0\n" +
"            self.cursor_y += 1\n" +
"            self.implied_newline = (char != chr(13))\n" +
"        if self.cursor_y >= self.num_lines:\n" +
"            self.cursor_y = 0\n" +
"        self.move_to(self.cursor_x, self.cursor_y)\n" +
"\n" +
"    def putstr(self, string):\n" +
"        # Write the indicated string to the LCD at the current cursor\n" +
"        # position and advances the cursor position appropriately.\n" +
"        for char in string:\n" +
"            self.putchar(char)\n" +
"\n" +
"    def custom_char(self, location, charmap):\n" +
"        # Write a character to one of the 8 CGRAM locations, available\n" +
"        # as chr(0) through chr(7).\n" +
"        location &= 0x7\n" +
"        self.hal_write_command(self.LCD_CGRAM | (location << 3))\n" +
"        self.hal_sleep_us(40)\n" +
"        for i in range(8):\n" +
"            self.hal_write_data(charmap[i])\n" +
"            self.hal_sleep_us(40)\n" +
"        self.move_to(self.cursor_x, self.cursor_y)\n" +
"\n" +
"    def hal_backlight_on(self):\n" +
"        # Allows the hal layer to turn the backlight on.\n" +
"        # If desired, a derived HAL class will implement this function.\n" +
"        pass\n" +
"\n" +
"    def hal_backlight_off(self):\n" +
"        # Allows the hal layer to turn the backlight off.\n" +
"        # If desired, a derived HAL class will implement this function.\n" +
"        pass\n" +
"\n" +
"    def hal_write_command(self, cmd):\n" +
"        # Write a command to the LCD.\n" +
"        # It is expected that a derived HAL class will implement this function.\n" +
"        raise NotImplementedError\n" +
"\n" +
"    def hal_write_data(self, data):\n" +
"        # Write data to the LCD.\n" +
"        # It is expected that a derived HAL class will implement this function.\n" +
"        raise NotImplementedError\n" +
"\n" +
"    def hal_sleep_us(self, usecs):\n" +
"        # Sleep for some time (given in microseconds)\n" +
"        time.sleep_us(usecs)\n"
], {type: 'text'});