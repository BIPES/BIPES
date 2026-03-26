"""
MicroPython MPR121 capacitive touch keypad and breakout board driver
https://github.com/mcauser/micropython-mpr121

MIT License
Copyright (c) 2018 Mike Causer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
"""

from micropython import const
import ustruct

MPR121_TOUCH_STATUS = const(0x00) # (0x00~0x01) Touch status
# (0x02~0x03) Out-of-range status
MPR121_ELECTRODE_FILTERED_DATA = const(0x04) # (0x04~0x1D) Electrode filtered data
MPR121_BASELINE_VALUE = const(0x1E) # (0x1E~0x2A) Baseline value
# (0x2B~0x40) Baseline Filtering Control
MPR121_MAX_HALF_DELTA_RISING = const(0x2B) # Max half delta (rising)
MPR121_NOISE_HALF_DELTA_RISING = const(0x2C) # Noise half delta (rising)
MPR121_NOISE_COUNT_LIMIT_RISING = const(0x2D) # Noise count limit (rising)
MPR121_FILTER_DELAY_COUNT_RISING = const(0x2E) # Filter delay count (rising)
MPR121_MAX_HALF_DELTA_FALLING = const(0x2F) # Max half delta (falling)
MPR121_NOISE_HALF_DELTA_FALLING = const(0x30) # Noise half delta (falling)
MPR121_NOISE_COUNT_LIMIT_FALLING = const(0x31) # Noise count limit (falling)
MPR121_FILTER_DELAY_COUNT_FALLING = const(0x32) # Filter delay count (falling)
# There is no max half delta for touched
MPR121_NOISE_HALF_DELTA_TOUCHED = const(0x33) # Noise half delta (touched)
MPR121_NOISE_COUNT_LIMIT_TOUCHED = const(0x34) # Noise count limit (touched)
MPR121_FILTER_DELAY_COUNT_TOUCHED = const(0x35) # Filter delay count (touched)
# (0x41~0x5A) Touch / release threshold
MPR121_TOUCH_THRESHOLD = const(0x41) # Touch threshold (0th, += 2 for each electrode up to 11th)
MPR121_RELEASE_THRESHOLD = const(0x42) # Release threshold (0th, += 2 for each electrode up to 11th)
MPR121_DEBOUNCE = const(0x5B) # Debounce
# (0x5C~0x5D) Filter and global CDC CDT configuration
MPR121_CONFIG1 = const(0x5C) # FFI (first filter iterations), CDC (charge/discharge current)
MPR121_CONFIG2 = const(0x5D) # CDT (charge/discharge time), SFI (second filter iterations), ESI (electrode sample interval)
# (0x5F~0x6B) Electrode charge current
# (0x6C~0x72) Electrode charge time
MPR121_ELECTRODE_CONFIG = const(0x5E) # Electrode configuration register
# (0x73~0x7A) GPIO
# (0x73) GPIO control 0
# (0x74) GPIO control 1
# (0x75) GPIO data
# (0x76) GPIO direction
# (0x77) GPIO enable
# (0x78) GPIO data set
# (0x79) GPIO data clear
# (0x7A) GPIO data toggle
# (0x7B) Auto-config control 0
# (0x7C) Auto-config control 1
# (0x7D) Auto-config upper-side limit
# (0x7E) Auto-config lower-side limit
# (0x7F) Auto-config target level
MPR121_SOFT_RESET = const(0x80) # Soft reset

class MPR121:
    """Driver for the MPR121 capacitive touch keypad and breakout board."""

    def __init__(self, i2c, address=0x5A):
        self.i2c = i2c
        self.address = address
        self.reset()

    def _register8(self, register, value=None):
        if value is None:
            return self.i2c.readfrom_mem(self.address, register, 1)[0]
        self.i2c.writeto_mem(self.address, register, bytearray([value]))

    def _register16(self, register, value=None):
        if value is None:
            data = self.i2c.readfrom_mem(self.address, register, 2)
            return ustruct.unpack("<H", data)[0]
        self.i2c.writeto_mem(self.address, register, ustruct.pack("<H", value))

    def reset(self):
        """Resets the MPR121 to a default state"""

        # Soft reset
        self._register8(MPR121_SOFT_RESET, 0x63)

        # Reset electrode configuration to defaults - enter stop mode
        # Config registers are read-only unless in stop mode
        self._register8(MPR121_ELECTRODE_CONFIG, 0x00)

        # Check CDT, SFI, ESI configuration is at defaults
        # A soft reset puts CONFIG2 (0x5D) at 0x24
        # Charge Discharge Time, CDT=1 (0.5us charge time)
        # Second Filter Iterations, SFI=0 (4x samples taken)
        # Electrode Sample Interval, ESI=4 (16ms period)
        if self._register8(MPR121_CONFIG2) != 0x24:
            raise RuntimeError('Failed to reset MPR121 to default state')

        # Set touch and release trip thresholds
        self.set_thresholds(15, 7)

        # Configure electrode filtered data and baseline registers
        self._register8(MPR121_MAX_HALF_DELTA_RISING, 0x01)
        self._register8(MPR121_MAX_HALF_DELTA_FALLING, 0x01)
        self._register8(MPR121_NOISE_HALF_DELTA_RISING, 0x01)
        self._register8(MPR121_NOISE_HALF_DELTA_FALLING, 0x05)
        self._register8(MPR121_NOISE_HALF_DELTA_TOUCHED, 0x00)
        self._register8(MPR121_NOISE_COUNT_LIMIT_RISING, 0x0E)
        self._register8(MPR121_NOISE_COUNT_LIMIT_FALLING, 0x01)
        self._register8(MPR121_NOISE_COUNT_LIMIT_TOUCHED, 0x00)
        self._register8(MPR121_FILTER_DELAY_COUNT_RISING, 0x00)
        self._register8(MPR121_FILTER_DELAY_COUNT_FALLING, 0x00)
        self._register8(MPR121_FILTER_DELAY_COUNT_TOUCHED, 0x00)

        # Set config registers
        # Debounce Touch, DT=0 (increase up to 7 to reduce noise)
        # Debounce Release, DR=0 (increase up to 7 to reduce noise)
        self._register8(MPR121_DEBOUNCE, 0x00)
        # First Filter Iterations, FFI=0 (6x samples taken)
        # Charge Discharge Current, CDC=16 (16uA)
        self._register8(MPR121_CONFIG1, 0x10)
        # Charge Discharge Time, CDT=1 (0.5us charge time)
        # Second Filter Iterations, SFI=0 (4x samples taken)
        # Electrode Sample Interval, ESI=0 (1ms period)
        self._register8(MPR121_CONFIG2, 0x20)

        # Enable all electrodes - enter run mode
        # Calibration Lock, CL=10 (baseline tracking enabled, initial value 5 high bits)
        # Proximity Enable, ELEPROX_EN=0 (proximity detection disabled)
        # Electrode Enable, ELE_EN=15 (enter run mode for 12 electrodes)
        self._register8(MPR121_ELECTRODE_CONFIG, 0x8F)

    def set_thresholds(self, touch, release, electrode=None):
        """Sets the touch and release thresholds (0-255) for a single electrode (0-11) or all electrodes"""
        if not 0 <= touch <= 255:
            raise ValueError('Touch must be in range 0-255.')
        if not 0 <= release <= 255:
            raise ValueError('Release must be in range 0-255.')
        f = 0 if electrode is None else electrode
        t = 12 if electrode is None else electrode + 1

        # you can only modify the thresholds when in stop mode
        config = self._register8(MPR121_ELECTRODE_CONFIG)
        if config != 0:
            self._register8(MPR121_ELECTRODE_CONFIG, 0)

        for i in range(f, t):
            self._register8(MPR121_TOUCH_THRESHOLD + i * 2, touch)
            self._register8(MPR121_RELEASE_THRESHOLD + i * 2, release)

        # return to previous mode if temporarily entered stop mode
        if config != 0:
            self._register8(MPR121_ELECTRODE_CONFIG, config)

    def filtered_data(self, electrode):
        """Returns filtered data value for the specified electrode (0-11)"""
        if not 0 <= electrode <= 11:
            raise ValueError('Electrode must be in range 0-11.')
        return self._register16(MPR121_ELECTRODE_FILTERED_DATA + electrode * 2)

    def baseline_data(self, electrode):
        """Returns baseline data value for the specified electrode (0-11)"""
        if not 0 <= electrode <= 11:
            raise ValueError('Electrode must be in range 0-11.')
        return self._register8(MPR121_BASELINE_VALUE + electrode) << 2

    def touched(self):
        """Returns a 12-bit value representing which electrodes are touched. LSB = electrode 0"""
        return self._register16(MPR121_TOUCH_STATUS)

    def is_touched(self, electrode):
        """Returns True when the specified electrode is being touched"""
        if not 0 <= electrode <= 11:
            raise ValueError('Electrode must be in range 0-11.')
        t = self.touched()
        return (t & (1 << electrode)) != 0
