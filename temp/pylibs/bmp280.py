from micropython import const
from ustruct import unpack as unp

# Author David Stenwall Wahlund (david at dafnet.se)

# Power Modes
BMP280_POWER_SLEEP = const(0)
BMP280_POWER_FORCED = const(1)
BMP280_POWER_NORMAL = const(3)

BMP280_SPI3W_ON = const(1)
BMP280_SPI3W_OFF = const(0)

BMP280_TEMP_OS_SKIP = const(0)
BMP280_TEMP_OS_1 = const(1)
BMP280_TEMP_OS_2 = const(2)
BMP280_TEMP_OS_4 = const(3)
BMP280_TEMP_OS_8 = const(4)
BMP280_TEMP_OS_16 = const(5)

BMP280_PRES_OS_SKIP = const(0)
BMP280_PRES_OS_1 = const(1)
BMP280_PRES_OS_2 = const(2)
BMP280_PRES_OS_4 = const(3)
BMP280_PRES_OS_8 = const(4)
BMP280_PRES_OS_16 = const(5)

# Standby settings in ms
BMP280_STANDBY_0_5 = const(0)
BMP280_STANDBY_62_5 = const(1)
BMP280_STANDBY_125 = const(2)
BMP280_STANDBY_250 = const(3)
BMP280_STANDBY_500 = const(4)
BMP280_STANDBY_1000 = const(5)
BMP280_STANDBY_2000 = const(6)
BMP280_STANDBY_4000 = const(7)

# IIR Filter setting
BMP280_IIR_FILTER_OFF = const(0)
BMP280_IIR_FILTER_2 = const(1)
BMP280_IIR_FILTER_4 = const(2)
BMP280_IIR_FILTER_8 = const(3)
BMP280_IIR_FILTER_16 = const(4)

# Oversampling setting
BMP280_OS_ULTRALOW = const(0)
BMP280_OS_LOW = const(1)
BMP280_OS_STANDARD = const(2)
BMP280_OS_HIGH = const(3)
BMP280_OS_ULTRAHIGH = const(4)

# Oversampling matrix
# (PRESS_OS, TEMP_OS, sample time in ms)
_BMP280_OS_MATRIX = [
    [BMP280_PRES_OS_1, BMP280_TEMP_OS_1, 7],
    [BMP280_PRES_OS_2, BMP280_TEMP_OS_1, 9],
    [BMP280_PRES_OS_4, BMP280_TEMP_OS_1, 14],
    [BMP280_PRES_OS_8, BMP280_TEMP_OS_1, 23],
    [BMP280_PRES_OS_16, BMP280_TEMP_OS_2, 44]
]

# Use cases
BMP280_CASE_HANDHELD_LOW = const(0)
BMP280_CASE_HANDHELD_DYN = const(1)
BMP280_CASE_WEATHER = const(2)
BMP280_CASE_FLOOR = const(3)
BMP280_CASE_DROP = const(4)
BMP280_CASE_INDOOR = const(5)

_BMP280_CASE_MATRIX = [
    [BMP280_POWER_NORMAL, BMP280_OS_ULTRAHIGH, BMP280_IIR_FILTER_4, BMP280_STANDBY_62_5],
    [BMP280_POWER_NORMAL, BMP280_OS_STANDARD, BMP280_IIR_FILTER_16, BMP280_STANDBY_0_5],
    [BMP280_POWER_FORCED, BMP280_OS_ULTRALOW, BMP280_IIR_FILTER_OFF, BMP280_STANDBY_0_5],
    [BMP280_POWER_NORMAL, BMP280_OS_STANDARD, BMP280_IIR_FILTER_4, BMP280_STANDBY_125],
    [BMP280_POWER_NORMAL, BMP280_OS_LOW, BMP280_IIR_FILTER_OFF, BMP280_STANDBY_0_5],
    [BMP280_POWER_NORMAL, BMP280_OS_ULTRAHIGH, BMP280_IIR_FILTER_16, BMP280_STANDBY_0_5]
]

_BMP280_REGISTER_ID = const(0xD0)
_BMP280_REGISTER_RESET = const(0xE0)
_BMP280_REGISTER_STATUS = const(0xF3)
_BMP280_REGISTER_CONTROL = const(0xF4)
_BMP280_REGISTER_CONFIG = const(0xF5)  # IIR filter config

_BMP280_REGISTER_DATA = const(0xF7)


class BMP280:
    def __init__(self, i2c_bus, addr=0x76, use_case=BMP280_CASE_HANDHELD_DYN):
        self._bmp_i2c = i2c_bus
        self._i2c_addr = addr

        # read calibration data
        # < little-endian
        # H unsigned short
        # h signed short
        self._T1 = unp('<H', self._read(0x88, 2))[0]
        self._T2 = unp('<h', self._read(0x8A, 2))[0]
        self._T3 = unp('<h', self._read(0x8C, 2))[0]
        self._P1 = unp('<H', self._read(0x8E, 2))[0]
        self._P2 = unp('<h', self._read(0x90, 2))[0]
        self._P3 = unp('<h', self._read(0x92, 2))[0]
        self._P4 = unp('<h', self._read(0x94, 2))[0]
        self._P5 = unp('<h', self._read(0x96, 2))[0]
        self._P6 = unp('<h', self._read(0x98, 2))[0]
        self._P7 = unp('<h', self._read(0x9A, 2))[0]
        self._P8 = unp('<h', self._read(0x9C, 2))[0]
        self._P9 = unp('<h', self._read(0x9E, 2))[0]

        # output raw
        self._t_raw = 0
        self._t_fine = 0
        self._t = 0

        self._p_raw = 0
        self._p = 0

        self.read_wait_ms = 0  # interval between forced measure and readout
        self._new_read_ms = 200  # interval between
        self._last_read_ts = 0

        if use_case is None:
            self.use_case(use_case)

    def _read(self, addr, size=1):
        return self._bmp_i2c.readfrom_mem(self._i2c_addr, addr, size)

    def _write(self, addr, b_arr):
        if not type(b_arr) is bytearray:
            b_arr = bytearray([b_arr])
        return self._bmp_i2c.writeto_mem(self._i2c_addr, addr, b_arr)

    def _gauge(self):
        # TODO limit new reads
        # read all data at once (as by spec)
        d = self._read(_BMP280_REGISTER_DATA, 6)

        self._p_raw = (d[0] << 12) + (d[1] << 4) + (d[2] >> 4)
        self._t_raw = (d[3] << 12) + (d[4] << 4) + (d[5] >> 4)

        self._t_fine = 0
        self._t = 0
        self._p = 0

    def reset(self):
        self._write(_BMP280_REGISTER_RESET, 0xB6)

    def load_test_calibration(self):
        self._T1 = 27504
        self._T2 = 26435
        self._T3 = -1000
        self._P1 = 36477
        self._P2 = -10685
        self._P3 = 3024
        self._P4 = 2855
        self._P5 = 140
        self._P6 = -7
        self._P7 = 15500
        self._P8 = -14600
        self._P9 = 6000

    def load_test_data(self):
        self._t_raw = 519888
        self._p_raw = 415148

    def print_calibration(self):
        print("T1: {} {}".format(self._T1, type(self._T1)))
        print("T2: {} {}".format(self._T2, type(self._T2)))
        print("T3: {} {}".format(self._T3, type(self._T3)))
        print("P1: {} {}".format(self._P1, type(self._P1)))
        print("P2: {} {}".format(self._P2, type(self._P2)))
        print("P3: {} {}".format(self._P3, type(self._P3)))
        print("P4: {} {}".format(self._P4, type(self._P4)))
        print("P5: {} {}".format(self._P5, type(self._P5)))
        print("P6: {} {}".format(self._P6, type(self._P6)))
        print("P7: {} {}".format(self._P7, type(self._P7)))
        print("P8: {} {}".format(self._P8, type(self._P8)))
        print("P9: {} {}".format(self._P9, type(self._P9)))

    def _calc_t_fine(self):
        # From datasheet page 22
        self._gauge()
        if self._t_fine == 0:
            var1 = (((self._t_raw >> 3) - (self._T1 << 1)) * self._T2) >> 11
            var2 = (((((self._t_raw >> 4) - self._T1)
                      * ((self._t_raw >> 4)
                         - self._T1)) >> 12)
                    * self._T3) >> 14
            self._t_fine = var1 + var2

    @property
    def temperature(self):
        self._calc_t_fine()
        if self._t == 0:
            self._t = ((self._t_fine * 5 + 128) >> 8) / 100.
        return self._t

    @property
    def pressure(self):
        # From datasheet page 22
        self._calc_t_fine()
        if self._p == 0:
            var1 = self._t_fine - 128000
            var2 = var1 * var1 * self._P6
            var2 = var2 + ((var1 * self._P5) << 17)
            var2 = var2 + (self._P4 << 35)
            var1 = ((var1 * var1 * self._P3) >> 8) + ((var1 * self._P2) << 12)
            var1 = (((1 << 47) + var1) * self._P1) >> 33

            if var1 == 0:
                return 0

            p = 1048576 - self._p_raw
            p = int((((p << 31) - var2) * 3125) / var1)
            var1 = (self._P9 * (p >> 13) * (p >> 13)) >> 25
            var2 = (self._P8 * p) >> 19

            p = ((p + var1 + var2) >> 8) + (self._P7 << 4)
            self._p = p / 256.0
        return self._p

    def _write_bits(self, address, value, length, shift=0):
        d = self._read(address)[0]
        m = int('1' * length, 2) << shift
        d &= ~m
        d |= m & value << shift
        self._write(address, d)

    def _read_bits(self, address, length, shift=0):
        d = self._read(address)[0]
        return d >> shift & int('1' * length, 2)

    @property
    def standby(self):
        return self._read_bits(_BMP280_REGISTER_CONFIG, 3, 5)

    @standby.setter
    def standby(self, v):
        assert 0 <= v <= 7
        self._write_bits(_BMP280_REGISTER_CONFIG, v, 3, 5)

    @property
    def iir(self):
        return self._read_bits(_BMP280_REGISTER_CONFIG, 3, 2)

    @iir.setter
    def iir(self, v):
        assert 0 <= v <= 4
        self._write_bits(_BMP280_REGISTER_CONFIG, v, 3, 2)

    @property
    def spi3w(self):
        return self._read_bits(_BMP280_REGISTER_CONFIG, 1)

    @spi3w.setter
    def spi3w(self, v):
        assert v in (0, 1)
        self._write_bits(_BMP280_REGISTER_CONFIG, v, 1)

    @property
    def temp_os(self):
        return self._read_bits(_BMP280_REGISTER_CONTROL, 3, 5)

    @temp_os.setter
    def temp_os(self, v):
        assert 0 <= v <= 5
        self._write_bits(_BMP280_REGISTER_CONTROL, v, 3, 5)

    @property
    def press_os(self):
        return self._read_bits(_BMP280_REGISTER_CONTROL, 3, 2)

    @press_os.setter
    def press_os(self, v):
        assert 0 <= v <= 5
        self._write_bits(_BMP280_REGISTER_CONTROL, v, 3, 2)

    @property
    def power_mode(self):
        return self._read_bits(_BMP280_REGISTER_CONTROL, 2)

    @power_mode.setter
    def power_mode(self, v):
        assert 0 <= v <= 3
        self._write_bits(_BMP280_REGISTER_CONTROL, v, 2)

    @property
    def is_measuring(self):
        return bool(self._read_bits(_BMP280_REGISTER_STATUS, 1, 3))

    @property
    def is_updating(self):
        return bool(self._read_bits(_BMP280_REGISTER_STATUS, 1))

    @property
    def chip_id(self):
        return self._read(_BMP280_REGISTER_ID, 2)

    @property
    def in_normal_mode(self):
        return self.power_mode == BMP280_POWER_NORMAL

    def force_measure(self):
        self.power_mode = BMP280_POWER_FORCED

    def normal_measure(self):
        self.power_mode = BMP280_POWER_NORMAL

    def sleep(self):
        self.power_mode = BMP280_POWER_SLEEP

    def use_case(self, uc):
        assert 0 <= uc <= 5
        pm, oss, iir, sb = _BMP280_CASE_MATRIX[uc]
        t_os, p_os, self.read_wait_ms = _BMP280_OS_MATRIX[oss]
        self._write(_BMP280_REGISTER_CONFIG, (iir << 2) + (sb << 5))
        self._write(_BMP280_REGISTER_CONTROL, pm + (p_os << 2) + (t_os << 5))

    def oversample(self, oss):
        assert 0 <= oss <= 4
        t_os, p_os, self.read_wait_ms = _BMP280_OS_MATRIX[oss]
        self._write_bits(_BMP280_REGISTER_CONTROL, p_os + (t_os << 3), 2)

