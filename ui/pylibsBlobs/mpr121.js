var mpr121 = new Blob([
"'''\n" +
"MicroPython MPR121 capacitive touch keypad and breakout board driver\n" +
"https://github.com/mcauser/micropython-mpr121\n" +
"\n" +
"MIT License\n" +
"Copyright (c) 2018 Mike Causer\n" +
"\n" +
"Permission is hereby granted, free of charge, to any person obtaining a copy\n" +
"of this software and associated documentation files (the 'Software'), to deal\n" +
"in the Software without restriction, including without limitation the rights\n" +
"to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n" +
"copies of the Software, and to permit persons to whom the Software is\n" +
"furnished to do so, subject to the following conditions:\n" +
"\n" +
"The above copyright notice and this permission notice shall be included in all\n" +
"copies or substantial portions of the Software.\n" +
"\n" +
"THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n" +
"IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n" +
"FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n" +
"AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n" +
"LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n" +
"OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n" +
"SOFTWARE.\n" +
"'''\n" +
"\n" +
"from micropython import const\n" +
"import ustruct\n" +
"\n" +
"MPR121_TOUCH_STATUS = const(0) # (0x00~0x01) Touch status\n" +
"# (0x02~0x03) Out-of-range status\n" +
"MPR121_ELECTRODE_FILTERED_DATA = const(4) # (0x04~0x1D) Electrode filtered data\n" +
"MPR121_BASELINE_VALUE = const(30) # (0x1E~0x2A) Baseline value\n" +
"# (0x2B~0x40) Baseline Filtering Control\n" +
"MPR121_MAX_HALF_DELTA_RISING = const(43) # Max half delta (rising)\n" +
"MPR121_NOISE_HALF_DELTA_RISING = const(44) # Noise half delta (rising)\n" +
"MPR121_NOISE_COUNT_LIMIT_RISING = const(45) # Noise count limit (rising)\n" +
"MPR121_FILTER_DELAY_COUNT_RISING = const(46) # Filter delay count (rising)\n" +
"MPR121_MAX_HALF_DELTA_FALLING = const(47) # Max half delta (falling)\n" +
"MPR121_NOISE_HALF_DELTA_FALLING = const(48) # Noise half delta (falling)\n" +
"MPR121_NOISE_COUNT_LIMIT_FALLING = const(49) # Noise count limit (falling)\n" +
"MPR121_FILTER_DELAY_COUNT_FALLING = const(50) # Filter delay count (falling)\n" +
"# There is no max half delta for touched\n" +
"MPR121_NOISE_HALF_DELTA_TOUCHED = const(51) # Noise half delta (touched)\n" +
"MPR121_NOISE_COUNT_LIMIT_TOUCHED = const(52) # Noise count limit (touched)\n" +
"MPR121_FILTER_DELAY_COUNT_TOUCHED = const(53) # Filter delay count (touched)\n" +
"# (0x41~0x5A) Touch / release threshold\n" +
"MPR121_TOUCH_THRESHOLD = const(65) # Touch threshold (0th, += 2 for each electrode up to 11th)\n" +
"MPR121_RELEASE_THRESHOLD = const(66) # Release threshold (0th, += 2 for each electrode up to 11th)\n" +
"MPR121_DEBOUNCE = const(91) # Debounce\n" +
"# (0x5C~0x5D) Filter and global CDC CDT configuration\n" +
"MPR121_CONFIG1 = const(92) # FFI (first filter iterations), CDC (charge/discharge current)\n" +
"MPR121_CONFIG2 = const(93) # CDT (charge/discharge time), SFI (second filter iterations), ESI (electrode sample interval)\n" +
"# (0x5F~0x6B) Electrode charge current\n" +
"# (0x6C~0x72) Electrode charge time\n" +
"MPR121_ELECTRODE_CONFIG = const(94) # Electrode configuration register\n" +
"# (0x73~0x7A) GPIO\n" +
"# (0x73) GPIO control 0\n" +
"# (0x74) GPIO control 1\n" +
"# (0x75) GPIO data\n" +
"# (0x76) GPIO direction\n" +
"# (0x77) GPIO enable\n" +
"# (0x78) GPIO data set\n" +
"# (0x79) GPIO data clear\n" +
"# (0x7A) GPIO data toggle\n" +
"# (0x7B) Auto-config control 0\n" +
"# (0x7C) Auto-config control 1\n" +
"# (0x7D) Auto-config upper-side limit\n" +
"# (0x7E) Auto-config lower-side limit\n" +
"# (0x7F) Auto-config target level\n" +
"MPR121_SOFT_RESET = const(128) # Soft reset\n" +
"\n" +
"class MPR121:\n" +
"    '''Driver for the MPR121 capacitive touch keypad and breakout board.'''\n" +
"\n" +
"    def __init__(self, i2c, address=90):\n" +
"        self.i2c = i2c\n" +
"        self.address = address\n" +
"        self.reset()\n" +
"\n" +
"    def _register8(self, register, value=None):\n" +
"        if value is None:\n" +
"            return self.i2c.readfrom_mem(self.address, register, 1)[0]\n" +
"        self.i2c.writeto_mem(self.address, register, bytearray([value]))\n" +
"\n" +
"    def _register16(self, register, value=None):\n" +
"        if value is None:\n" +
"            data = self.i2c.readfrom_mem(self.address, register, 2)\n" +
"            return ustruct.unpack('<H', data)[0]\n" +
"        self.i2c.writeto_mem(self.address, register, ustruct.pack('<H', value))\n" +
"\n" +
"    def reset(self):\n" +
"        '''Resets the MPR121 to a default state'''\n" +
"\n" +
"        # Soft reset\n" +
"        self._register8(MPR121_SOFT_RESET, 99)\n" +
"\n" +
"        # Reset electrode configuration to defaults - enter stop mode\n" +
"        # Config registers are read-only unless in stop mode\n" +
"        self._register8(MPR121_ELECTRODE_CONFIG, 0)\n" +
"\n" +
"        # Check CDT, SFI, ESI configuration is at defaults\n" +
"        # A soft reset puts CONFIG2 (0x5D) at 0x24\n" +
"        # Charge Discharge Time, CDT=1 (0.5us charge time)\n" +
"        # Second Filter Iterations, SFI=0 (4x samples taken)\n" +
"        # Electrode Sample Interval, ESI=4 (16ms period)\n" +
"        if self._register8(MPR121_CONFIG2) != 36:\n" +
"            raise RuntimeError('Failed to reset MPR121 to default state')\n" +
"\n" +
"        # Set touch and release trip thresholds\n" +
"        self.set_thresholds(15, 7)\n" +
"\n" +
"        # Configure electrode filtered data and baseline registers\n" +
"        self._register8(MPR121_MAX_HALF_DELTA_RISING, 1)\n" +
"        self._register8(MPR121_MAX_HALF_DELTA_FALLING, 1)\n" +
"        self._register8(MPR121_NOISE_HALF_DELTA_RISING, 1)\n" +
"        self._register8(MPR121_NOISE_HALF_DELTA_FALLING, 5)\n" +
"        self._register8(MPR121_NOISE_HALF_DELTA_TOUCHED, 0)\n" +
"        self._register8(MPR121_NOISE_COUNT_LIMIT_RISING, 14)\n" +
"        self._register8(MPR121_NOISE_COUNT_LIMIT_FALLING, 1)\n" +
"        self._register8(MPR121_NOISE_COUNT_LIMIT_TOUCHED, 0)\n" +
"        self._register8(MPR121_FILTER_DELAY_COUNT_RISING, 0)\n" +
"        self._register8(MPR121_FILTER_DELAY_COUNT_FALLING, 0)\n" +
"        self._register8(MPR121_FILTER_DELAY_COUNT_TOUCHED, 0)\n" +
"\n" +
"        # Set config registers\n" +
"        # Debounce Touch, DT=0 (increase up to 7 to reduce noise)\n" +
"        # Debounce Release, DR=0 (increase up to 7 to reduce noise)\n" +
"        self._register8(MPR121_DEBOUNCE, 0)\n" +
"        # First Filter Iterations, FFI=0 (6x samples taken)\n" +
"        # Charge Discharge Current, CDC=16 (16uA)\n" +
"        self._register8(MPR121_CONFIG1, 16)\n" +
"        # Charge Discharge Time, CDT=1 (0.5us charge time)\n" +
"        # Second Filter Iterations, SFI=0 (4x samples taken)\n" +
"        # Electrode Sample Interval, ESI=0 (1ms period)\n" +
"        self._register8(MPR121_CONFIG2, 32)\n" +
"\n" +
"        # Enable all electrodes - enter run mode\n" +
"        # Calibration Lock, CL=10 (baseline tracking enabled, initial value 5 high bits)\n" +
"        # Proximity Enable, ELEPROX_EN=0 (proximity detection disabled)\n" +
"        # Electrode Enable, ELE_EN=15 (enter run mode for 12 electrodes)\n" +
"        self._register8(MPR121_ELECTRODE_CONFIG, 132)\n" +
"\n" +
"    def set_thresholds(self, touch, release, electrode=None):\n" +
"        '''Sets the touch and release thresholds (0-255) for a single electrode (0-11) or all electrodes'''\n" +
"        if not 0 <= touch <= 255:\n" +
"            raise ValueError('Touch must be in range 0-255.')\n" +
"        if not 0 <= release <= 255:\n" +
"            raise ValueError('Release must be in range 0-255.')\n" +
"        f = 0 if electrode is None else electrode\n" +
"        t = 12 if electrode is None else electrode + 1\n" +
"\n" +
"        # you can only modify the thresholds when in stop mode\n" +
"        config = self._register8(MPR121_ELECTRODE_CONFIG)\n" +
"        if config != 0:\n" +
"            self._register8(MPR121_ELECTRODE_CONFIG, 0)\n" +
"\n" +
"        for i in range(f, t):\n" +
"            self._register8(MPR121_TOUCH_THRESHOLD + i * 2, touch)\n" +
"            self._register8(MPR121_RELEASE_THRESHOLD + i * 2, release)\n" +
"\n" +
"        # return to previous mode if temporarily entered stop mode\n" +
"        if config != 0:\n" +
"            self._register8(MPR121_ELECTRODE_CONFIG, config)\n" +
"\n" +
"    def filtered_data(self, electrode):\n" +
"        '''Returns filtered data value for the specified electrode (0-11)'''\n" +
"        if not 0 <= electrode <= 11:\n" +
"            raise ValueError('Electrode must be in range 0-11.')\n" +
"        return self._register16(MPR121_ELECTRODE_FILTERED_DATA + electrode * 2)\n" +
"\n" +
"    def baseline_data(self, electrode):\n" +
"        '''Returns baseline data value for the specified electrode (0-11)'''\n" +
"        if not 0 <= electrode <= 11:\n" +
"            raise ValueError('Electrode must be in range 0-11.')\n" +
"        return self._register8(MPR121_BASELINE_VALUE + electrode) << 2\n" +
"\n" +
"    def touched(self):\n" +
"        '''Returns a 12-bit value representing which electrodes are touched. LSB = electrode 0'''\n" +
"        return self._register16(MPR121_TOUCH_STATUS)\n" +
"\n" +
"    def is_touched(self, electrode):\n" +
"        '''Returns True when the specified electrode is being touched'''\n" +
"        if not 0 <= electrode <= 11:\n" +
"            raise ValueError('Electrode must be in range 0-11.')\n" +
"        t = self.touched()\n" +
"        return (t & (1 << electrode)) != 0\n"
], {type: 'text'});