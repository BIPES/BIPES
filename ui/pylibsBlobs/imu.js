var imuBlob = new Blob([
"# imu.py MicroPython driver for the InvenSense inertial measurement units\n" +
"# This is the base class\n" +
"# Adapted from Sebastian Plamauer's MPU9150 driver:\n" +
"# https://github.com/micropython-IMU/micropython-mpu9150.git\n" +
"# Authors Peter Hinch, Sebastian Plamauer\n" +
"# V0.2 17th May 2017 Platform independent: utime and machine replace pyb\n" +
"\n" +
"'''\n" +
"mpu9250 is a micropython module for the InvenSense MPU9250 sensor.\n" +
"It measures acceleration, turn rate and the magnetic field in three axis.\n" +
"mpu9150 driver modified for the MPU9250 by Peter Hinch\n" +
"\n" +
"The MIT License (MIT)\n" +
"Copyright (c) 2014 Sebastian Plamauer, oeplse@gmail.com, Peter Hinch\n" +
"Permission is hereby granted, free of charge, to any person obtaining a copy\n" +
"of this software and associated documentation files (the Software), to deal\n" +
"in the Software without restriction, including without limitation the rights\n" +
"to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n" +
"copies of the Software, and to permit persons to whom the Software is\n" +
"furnished to do so, subject to the following conditions:\n" +
"The above copyright notice and this permission notice shall be included in\n" +
"all copies or substantial portions of the Software.\n" +
"THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n" +
"IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n" +
"FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n" +
"AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n" +
"LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n" +
"OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n" +
"THE SOFTWARE.\n" +
"'''\n" +
"\n" +
"# User access is now by properties e.g.\n" +
"# myimu = MPU9250('X')\n" +
"# magx = myimu.mag.x\n" +
"# accelxyz = myimu.accel.xyz\n" +
"# Error handling: on code used for initialisation, abort with message\n" +
"# At runtime try to continue returning last good data value. We don't want aircraft\n" +
"# crashing. However if the I2C has crashed we're probably stuffed.\n" +
"\n" +
"from utime import sleep_ms\n" +
"from machine import I2C\n" +
"from vector3d import Vector3d\n" +
"\n" +
"\n" +
"class MPUException(OSError):\n" +
"    '''\n" +
"    Exception for MPU devices\n" +
"    '''\n" +
"    pass\n" +
"\n" +
"\n" +
"def bytes_toint(msb, lsb):\n" +
"    '''\n" +
"    Convert two bytes to signed integer (big endian)\n" +
"    for little endian reverse msb, lsb arguments\n" +
"    Can be used in an interrupt handler\n" +
"    '''\n" +
"    if not msb & 0x80:\n" +
"        return msb << 8 | lsb  # +ve\n" +
"    return - (((msb ^ 255) << 8) | (lsb ^ 255) + 1)\n" +
"\n" +
"\n" +
"class MPU6050(object):\n" +
"    '''\n" +
"    Module for InvenSense IMUs. Base class implements MPU6050 6DOF sensor, with\n" +
"    features common to MPU9150 and MPU9250 9DOF sensors.\n" +
"    '''\n" +
"\n" +
"    _I2Cerror = 'I2C failure when communicating with IMU'\n" +
"    _mpu_addr = (104, 105)  # addresses of MPU9150/MPU6050. There can be two devices\n" +
"    _chip_id = 104\n" +
"\n" +
"    def __init__(self, side_str, device_addr=None, transposition=(0, 1, 2), scaling=(1, 1, 1)):\n" +
"\n" +
"        self._accel = Vector3d(transposition, scaling, self._accel_callback)\n" +
"        self._gyro = Vector3d(transposition, scaling, self._gyro_callback)\n" +
"        self.buf1 = bytearray(1)                # Pre-allocated buffers for reads: allows reads to\n" +
"        self.buf2 = bytearray(2)                # be done in interrupt handlers\n" +
"        self.buf3 = bytearray(3)\n" +
"        self.buf6 = bytearray(6)\n" +
"\n" +
"        sleep_ms(200)                           # Ensure PSU and device have settled\n" +
"        if isinstance(side_str, str):           # Non-pyb targets may use other than X or Y\n" +
"            self._mpu_i2c = I2C(side_str)\n" +
"        elif hasattr(side_str, 'readfrom'):     # Soft or hard I2C instance. See issue #3097\n" +
"            self._mpu_i2c = side_str\n" +
"        else:\n" +
"            raise ValueError('Invalid I2C instance')\n" +
"\n" +
"        if device_addr is None:\n" +
"            devices = set(self._mpu_i2c.scan())\n" +
"            mpus = devices.intersection(set(self._mpu_addr))\n" +
"            number_of_mpus = len(mpus)\n" +
"            if number_of_mpus == 0:\n" +
"                raise MPUException('No MPUs detected')\n" +
"            elif number_of_mpus == 1:\n" +
"                self.mpu_addr = mpus.pop()\n" +
"            else:\n" +
"                raise ValueError('Two MPUs detected: must specify a device address')\n" +
"        else:\n" +
"            if device_addr not in (0, 1):\n" +
"                raise ValueError('Device address must be 0 or 1')\n" +
"            self.mpu_addr = self._mpu_addr[device_addr]\n" +
"\n" +
"        self.chip_id                     # Test communication by reading chip_id: throws exception on error\n" +
"        # Can communicate with chip. Set it up.\n" +
"        self.wake()                             # wake it up\n" +
"        self.passthrough = True                 # Enable mag access from main I2C bus\n" +
"        self.accel_range = 0                    # default to highest sensitivity\n" +
"        self.gyro_range = 0                     # Likewise for gyro\n" +
"\n" +
"    # read from device\n" +
"    def _read(self, buf, memaddr, addr):        # addr = I2C device address, memaddr = memory location within the I2C device\n" +
"        '''\n" +
"        Read bytes to pre-allocated buffer Caller traps OSError.\n" +
"        '''\n" +
"        self._mpu_i2c.readfrom_mem_into(addr, memaddr, buf)\n" +
"\n" +
"    # write to device\n" +
"    def _write(self, data, memaddr, addr):\n" +
"        '''\n" +
"        Perform a memory write. Caller should trap OSError.\n" +
"        '''\n" +
"        self.buf1[0] = data\n" +
"        self._mpu_i2c.writeto_mem(addr, memaddr, self.buf1)\n" +
"\n" +
"    # wake\n" +
"    def wake(self):\n" +
"        '''\n" +
"        Wakes the device.\n" +
"        '''\n" +
"        try:\n" +
"            self._write(0x01, 0x6B, self.mpu_addr)  # Use best clock source\n" +
"        except OSError:\n" +
"            raise MPUException(self._I2Cerror)\n" +
"        return 'awake'\n" +
"\n" +
"    # mode\n" +
"    def sleep(self):\n" +
"        '''\n" +
"        Sets the device to sleep mode.\n" +
"        '''\n" +
"        try:\n" +
"            self._write(0x40, 0x6B, self.mpu_addr)\n" +
"        except OSError:\n" +
"            raise MPUException(self._I2Cerror)\n" +
"        return 'asleep'\n" +
"\n" +
"    # chip_id\n" +
"    @property\n" +
"    def chip_id(self):\n" +
"        '''\n" +
"        Returns Chip ID\n" +
"        '''\n" +
"        try:\n" +
"            self._read(self.buf1, 0x75, self.mpu_addr)\n" +
"        except OSError:\n" +
"            raise MPUException(self._I2Cerror)\n" +
"        chip_id = int(self.buf1[0])\n" +
"        if chip_id != self._chip_id:\n" +
"            raise ValueError('Bad chip ID retrieved: MPU communication failure')\n" +
"        return chip_id\n" +
"\n" +
"    @property\n" +
"    def sensors(self):\n" +
"        '''\n" +
"        returns sensor objects accel, gyro\n" +
"        '''\n" +
"        return self._accel, self._gyro\n" +
"\n" +
"    # get temperature\n" +
"    @property\n" +
"    def temperature(self):\n" +
"        '''\n" +
"        Returns the temperature in degree C.\n" +
"        '''\n" +
"        try:\n" +
"            self._read(self.buf2, 0x41, self.mpu_addr)\n" +
"        except OSError:\n" +
"            raise MPUException(self._I2Cerror)\n" +
"        return bytes_toint(self.buf2[0], self.buf2[1])/340 + 35  # I think\n" +
"\n" +
"    # passthrough\n" +
"    @property\n" +
"    def passthrough(self):\n" +
"        '''\n" +
"        Returns passthrough mode True or False\n" +
"        '''\n" +
"        try:\n" +
"            self._read(self.buf1, 0x37, self.mpu_addr)\n" +
"            return self.buf1[0] & 0x02 > 0\n" +
"        except OSError:\n" +
"            raise MPUException(self._I2Cerror)\n" +
"\n" +
"    @passthrough.setter\n" +
"    def passthrough(self, mode):\n" +
"        '''\n" +
"        Sets passthrough mode True or False\n" +
"        '''\n" +
"        if type(mode) is bool:\n" +
"            val = 2 if mode else 0\n" +
"            try:\n" +
"                self._write(val, 0x37, self.mpu_addr)  # I think this is right.\n" +
"                self._write(0x00, 0x6A, self.mpu_addr)\n" +
"            except OSError:\n" +
"                raise MPUException(self._I2Cerror)\n" +
"        else:\n" +
"            raise ValueError('pass either True or False')\n" +
"\n" +
"    # sample rate. Not sure why you'd ever want to reduce this from the default.\n" +
"    @property\n" +
"    def sample_rate(self):\n" +
"        '''\n" +
"        Get sample rate as per Register Map document section 4.4\n" +
"        SAMPLE_RATE= Internal_Sample_Rate / (1 + rate)\n" +
"        default rate is zero i.e. sample at internal rate.\n" +
"        '''\n" +
"        try:\n" +
"            self._read(self.buf1, 0x19, self.mpu_addr)\n" +
"            return self.buf1[0]\n" +
"        except OSError:\n" +
"            raise MPUException(self._I2Cerror)\n" +
"\n" +
"    @sample_rate.setter\n" +
"    def sample_rate(self, rate):\n" +
"        '''\n" +
"        Set sample rate as per Register Map document section 4.4\n" +
"        '''\n" +
"        if rate < 0 or rate > 255:\n" +
"            raise ValueError('Rate must be in range 0-255')\n" +
"        try:\n" +
"            self._write(rate, 0x19, self.mpu_addr)\n" +
"        except OSError:\n" +
"            raise MPUException(self._I2Cerror)\n" +
"\n" +
"    # Low pass filters. Using the filter_range property of the MPU9250 is\n" +
"    # harmless but gyro_filter_range is preferred and offers an extra setting.\n" +
"    @property\n" +
"    def filter_range(self):\n" +
"        '''\n" +
"        Returns the gyro and temperature sensor low pass filter cutoff frequency\n" +
"        Pass:               0   1   2   3   4   5   6\n" +
"        Cutoff (Hz):        250 184 92  41  20  10  5\n" +
"        Sample rate (KHz):  8   1   1   1   1   1   1\n" +
"        '''\n" +
"        try:\n" +
"            self._read(self.buf1, 0x1A, self.mpu_addr)\n" +
"            res = self.buf1[0] & 7\n" +
"        except OSError:\n" +
"            raise MPUException(self._I2Cerror)\n" +
"        return res\n" +
"\n" +
"    @filter_range.setter\n" +
"    def filter_range(self, filt):\n" +
"        '''\n" +
"        Sets the gyro and temperature sensor low pass filter cutoff frequency\n" +
"        Pass:               0   1   2   3   4   5   6\n" +
"        Cutoff (Hz):        250 184 92  41  20  10  5\n" +
"        Sample rate (KHz):  8   1   1   1   1   1   1\n" +
"        '''\n" +
"        # set range\n" +
"        if filt in range(7):\n" +
"            try:\n" +
"                self._write(filt, 0x1A, self.mpu_addr)\n" +
"            except OSError:\n" +
"                raise MPUException(self._I2Cerror)\n" +
"        else:\n" +
"            raise ValueError('Filter coefficient must be between 0 and 6')\n" +
"\n" +
"    # accelerometer range\n" +
"    @property\n" +
"    def accel_range(self):\n" +
"        '''\n" +
"        Accelerometer range\n" +
"        Value:              0   1   2   3\n" +
"        for range +/-:      2   4   8   16  g\n" +
"        '''\n" +
"        try:\n" +
"            self._read(self.buf1, 0x1C, self.mpu_addr)\n" +
"            ari = self.buf1[0]//8\n" +
"        except OSError:\n" +
"            raise MPUException(self._I2Cerror)\n" +
"        return ari\n" +
"\n" +
"    @accel_range.setter\n" +
"    def accel_range(self, accel_range):\n" +
"        '''\n" +
"        Set accelerometer range\n" +
"        Pass:               0   1   2   3\n" +
"        for range +/-:      2   4   8   16  g\n" +
"        '''\n" +
"        ar_bytes = (0x00, 0x08, 0x10, 0x18)\n" +
"        if accel_range in range(len(ar_bytes)):\n" +
"            try:\n" +
"                self._write(ar_bytes[accel_range], 0x1C, self.mpu_addr)\n" +
"            except OSError:\n" +
"                raise MPUException(self._I2Cerror)\n" +
"        else:\n" +
"            raise ValueError('accel_range can only be 0, 1, 2 or 3')\n" +
"\n" +
"    # gyroscope range\n" +
"    @property\n" +
"    def gyro_range(self):\n" +
"        '''\n" +
"        Gyroscope range\n" +
"        Value:              0   1   2    3\n" +
"        for range +/-:      250 500 1000 2000  degrees/second\n" +
"        '''\n" +
"        # set range\n" +
"        try:\n" +
"            self._read(self.buf1, 0x1B, self.mpu_addr)\n" +
"            gri = self.buf1[0]//8\n" +
"        except OSError:\n" +
"            raise MPUException(self._I2Cerror)\n" +
"        return gri\n" +
"\n" +
"    @gyro_range.setter\n" +
"    def gyro_range(self, gyro_range):\n" +
"        '''\n" +
"        Set gyroscope range\n" +
"        Pass:               0   1   2    3\n" +
"        for range +/-:      250 500 1000 2000  degrees/second\n" +
"        '''\n" +
"        gr_bytes = (0x00, 0x08, 0x10, 0x18)\n" +
"        if gyro_range in range(len(gr_bytes)):\n" +
"            try:\n" +
"                self._write(gr_bytes[gyro_range], 0x1B, self.mpu_addr)  # Sets fchoice = b11 which enables filter\n" +
"            except OSError:\n" +
"                raise MPUException(self._I2Cerror)\n" +
"        else:\n" +
"            raise ValueError('gyro_range can only be 0, 1, 2 or 3')\n" +
"\n" +
"    # Accelerometer\n" +
"    @property\n" +
"    def accel(self):\n" +
"        '''\n" +
"        Acceleremoter object\n" +
"        '''\n" +
"        return self._accel\n" +
"\n" +
"    def _accel_callback(self):\n" +
"        '''\n" +
"        Update accelerometer Vector3d object\n" +
"        '''\n" +
"        try:\n" +
"            self._read(self.buf6, 0x3B, self.mpu_addr)\n" +
"        except OSError:\n" +
"            raise MPUException(self._I2Cerror)\n" +
"        self._accel._ivector[0] = bytes_toint(self.buf6[0], self.buf6[1])\n" +
"        self._accel._ivector[1] = bytes_toint(self.buf6[2], self.buf6[3])\n" +
"        self._accel._ivector[2] = bytes_toint(self.buf6[4], self.buf6[5])\n" +
"        scale = (16384, 8192, 4096, 2048)\n" +
"        self._accel._vector[0] = self._accel._ivector[0]/scale[self.accel_range]\n" +
"        self._accel._vector[1] = self._accel._ivector[1]/scale[self.accel_range]\n" +
"        self._accel._vector[2] = self._accel._ivector[2]/scale[self.accel_range]\n" +
"\n" +
"    def get_accel_irq(self):\n" +
"        '''\n" +
"        For use in interrupt handlers. Sets self._accel._ivector[] to signed\n" +
"        unscaled integer accelerometer values\n" +
"        '''\n" +
"        self._read(self.buf6, 0x3B, self.mpu_addr)\n" +
"        self._accel._ivector[0] = bytes_toint(self.buf6[0], self.buf6[1])\n" +
"        self._accel._ivector[1] = bytes_toint(self.buf6[2], self.buf6[3])\n" +
"        self._accel._ivector[2] = bytes_toint(self.buf6[4], self.buf6[5])\n" +
"\n" +
"    # Gyro\n" +
"    @property\n" +
"    def gyro(self):\n" +
"        '''\n" +
"        Gyroscope object\n" +
"        '''\n" +
"        return self._gyro\n" +
"\n" +
"    def _gyro_callback(self):\n" +
"        '''\n" +
"        Update gyroscope Vector3d object\n" +
"        '''\n" +
"        try:\n" +
"            self._read(self.buf6, 0x43, self.mpu_addr)\n" +
"        except OSError:\n" +
"            raise MPUException(self._I2Cerror)\n" +
"        self._gyro._ivector[0] = bytes_toint(self.buf6[0], self.buf6[1])\n" +
"        self._gyro._ivector[1] = bytes_toint(self.buf6[2], self.buf6[3])\n" +
"        self._gyro._ivector[2] = bytes_toint(self.buf6[4], self.buf6[5])\n" +
"        scale = (131, 65.5, 32.8, 16.4)\n" +
"        self._gyro._vector[0] = self._gyro._ivector[0]/scale[self.gyro_range]\n" +
"        self._gyro._vector[1] = self._gyro._ivector[1]/scale[self.gyro_range]\n" +
"        self._gyro._vector[2] = self._gyro._ivector[2]/scale[self.gyro_range]\n" +
"\n" +
"    def get_gyro_irq(self):\n" +
"        '''\n" +
"        For use in interrupt handlers. Sets self._gyro._ivector[] to signed\n" +
"        unscaled integer gyro values. Error trapping disallowed.\n" +
"        '''\n" +
"        self._read(self.buf6, 0x43, self.mpu_addr)\n" +
"        self._gyro._ivector[0] = bytes_toint(self.buf6[0], self.buf6[1])\n" +
"        self._gyro._ivector[1] = bytes_toint(self.buf6[2], self.buf6[3])\n" +
"        self._gyro._ivector[2] = bytes_toint(self.buf6[4], self.buf6[5])\n"
], {type: 'text'});