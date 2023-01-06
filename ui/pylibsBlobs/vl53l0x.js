var vl53l0xBlob = new Blob([
"from micropython import const\n" + 
"import ustruct\n" + 
"import utime\n" + 
"from machine import Timer\n" + 
"# import time\n" + 
"\n" + 
"_IO_TIMEOUT = 1000\n" + 
"_SYSRANGE_START = const(0x00)\n" + 
"_EXTSUP_HV = const(0x89)\n" + 
"_MSRC_CONFIG = const(0x60)\n" + 
"_FINAL_RATE_RTN_LIMIT = const(0x44)\n" + 
"_SYSTEM_SEQUENCE = const(0x01)\n" + 
"_SPAD_REF_START = const(0x4f)\n" + 
"_SPAD_ENABLES = const(0xb0)\n" + 
"_REF_EN_START_SELECT = const(0xb6)\n" + 
"_SPAD_NUM_REQUESTED = const(0x4e)\n" + 
"_INTERRUPT_GPIO = const(0x0a)\n" + 
"_INTERRUPT_CLEAR = const(0x0b)\n" + 
"_GPIO_MUX_ACTIVE_HIGH = const(0x84)\n" + 
"_RESULT_INTERRUPT_STATUS = const(0x13)\n" + 
"_RESULT_RANGE_STATUS = const(0x14)\n" + 
"_OSC_CALIBRATE = const(0xf8)\n" + 
"_MEASURE_PERIOD = const(0x04)\n" + 
"\n" + 
"SYSRANGE_START = 0x00\n" + 
"\n" + 
"SYSTEM_THRESH_HIGH = 0x0C\n" + 
"SYSTEM_THRESH_LOW = 0x0E\n" + 
"\n" + 
"SYSTEM_SEQUENCE_CONFIG = 0x01\n" + 
"SYSTEM_RANGE_CONFIG = 0x09\n" + 
"SYSTEM_INTERMEASUREMENT_PERIOD = 0x04\n" + 
"\n" + 
"SYSTEM_INTERRUPT_CONFIG_GPIO = 0x0A\n" + 
"\n" + 
"GPIO_HV_MUX_ACTIVE_HIGH = 0x84\n" + 
"\n" + 
"SYSTEM_INTERRUPT_CLEAR = 0x0B\n" + 
"\n" + 
"RESULT_INTERRUPT_STATUS = 0x13\n" + 
"RESULT_RANGE_STATUS = 0x14\n" + 
"\n" + 
"RESULT_CORE_AMBIENT_WINDOW_EVENTS_RTN = 0xBC\n" + 
"RESULT_CORE_RANGING_TOTAL_EVENTS_RTN = 0xC0\n" + 
"RESULT_CORE_AMBIENT_WINDOW_EVENTS_REF = 0xD0\n" + 
"RESULT_CORE_RANGING_TOTAL_EVENTS_REF = 0xD4\n" + 
"RESULT_PEAK_SIGNAL_RATE_REF = 0xB6\n" + 
"\n" + 
"ALGO_PART_TO_PART_RANGE_OFFSET_MM = 0x28\n" + 
"\n" + 
"I2C_SLAVE_DEVICE_ADDRESS = 0x8A\n" + 
"\n" + 
"MSRC_CONFIG_CONTROL = 0x60\n" + 
"\n" + 
"PRE_RANGE_CONFIG_MIN_SNR = 0x27\n" + 
"PRE_RANGE_CONFIG_VALID_PHASE_LOW = 0x56\n" + 
"PRE_RANGE_CONFIG_VALID_PHASE_HIGH = 0x57\n" + 
"PRE_RANGE_MIN_COUNT_RATE_RTN_LIMIT = 0x64\n" + 
"\n" + 
"FINAL_RANGE_CONFIG_MIN_SNR = 0x67\n" + 
"FINAL_RANGE_CONFIG_VALID_PHASE_LOW = 0x47\n" + 
"FINAL_RANGE_CONFIG_VALID_PHASE_HIGH = 0x48\n" + 
"FINAL_RANGE_CONFIG_MIN_COUNT_RATE_RTN_LIMIT = 0x44\n" + 
"\n" + 
"PRE_RANGE_CONFIG_SIGMA_THRESH_HI = 0x61\n" + 
"PRE_RANGE_CONFIG_SIGMA_THRESH_LO = 0x62\n" + 
"\n" + 
"PRE_RANGE_CONFIG_VCSEL_PERIOD = 0x50\n" + 
"PRE_RANGE_CONFIG_TIMEOUT_MACROP_HI = 0x51\n" + 
"PRE_RANGE_CONFIG_TIMEOUT_MACROP_LO = 0x52\n" + 
"\n" + 
"SYSTEM_HISTOGRAM_BIN = 0x81\n" + 
"HISTOGRAM_CONFIG_INITIAL_PHASE_SELECT = 0x33\n" + 
"HISTOGRAM_CONFIG_READOUT_CTRL = 0x55\n" + 
"\n" + 
"FINAL_RANGE_CONFIG_VCSEL_PERIOD = 0x70\n" + 
"FINAL_RANGE_CONFIG_TIMEOUT_MACROP_HI = 0x71\n" + 
"FINAL_RANGE_CONFIG_TIMEOUT_MACROP_LO = 0x72\n" + 
"CROSSTALK_COMPENSATION_PEAK_RATE_MCPS = 0x20\n" + 
"\n" + 
"MSRC_CONFIG_TIMEOUT_MACROP = 0x46\n" + 
"\n" + 
"SOFT_RESET_GO2_SOFT_RESET_N = 0xBF\n" + 
"IDENTIFICATION_MODEL_ID = 0xC0\n" + 
"IDENTIFICATION_REVISION_ID = 0xC2\n" + 
"\n" + 
"OSC_CALIBRATE_VAL = 0xF8\n" + 
"\n" + 
"GLOBAL_CONFIG_VCSEL_WIDTH = 0x32\n" + 
"GLOBAL_CONFIG_SPAD_ENABLES_REF_0 = 0xB0\n" + 
"GLOBAL_CONFIG_SPAD_ENABLES_REF_1 = 0xB1\n" + 
"GLOBAL_CONFIG_SPAD_ENABLES_REF_2 = 0xB2\n" + 
"GLOBAL_CONFIG_SPAD_ENABLES_REF_3 = 0xB3\n" + 
"GLOBAL_CONFIG_SPAD_ENABLES_REF_4 = 0xB4\n" + 
"GLOBAL_CONFIG_SPAD_ENABLES_REF_5 = 0xB5\n" + 
"\n" + 
"GLOBAL_CONFIG_REF_EN_START_SELECT = 0xB6\n" + 
"DYNAMIC_SPAD_NUM_REQUESTED_REF_SPAD = 0x4E\n" + 
"DYNAMIC_SPAD_REF_EN_START_OFFSET = 0x4F\n" + 
"POWER_MANAGEMENT_GO1_POWER_FORCE = 0x80\n" + 
"\n" + 
"VHV_CONFIG_PAD_SCL_SDA__EXTSUP_HV = 0x89\n" + 
"\n" + 
"ALGO_PHASECAL_LIM = 0x30\n" + 
"ALGO_PHASECAL_CONFIG_TIMEOUT = 0x30\n" + 
"\n" + 
"\n" + 
"class TimeoutError(RuntimeError):\n" + 
"    pass\n" + 
"\n" + 
"\n" + 
"class VL53L0X():\n" + 
"    def __init__(self, i2c, address=0x29):\n" + 
"        self.i2c = i2c\n" + 
"        self.address = address\n" + 
"        utime.sleep_ms(100) # give the I2C time to init\n" + 
"        self.init()\n" + 
"        self._started = False\n" + 
"        self.measurement_timing_budget_us = 0\n" + 
"        self.set_measurement_timing_budget(self.measurement_timing_budget_us)\n" + 
"        self.enables = {'tcc': 0,\n" + 
"                        'dss': 0,\n" + 
"                        'msrc': 0,\n" + 
"                        'pre_range': 0,\n" + 
"                        'final_range': 0}\n" + 
"        self.timeouts = {'pre_range_vcsel_period_pclks': 0,\n" + 
"                         'msrc_dss_tcc_mclks': 0,\n" + 
"                         'msrc_dss_tcc_us': 0,\n" + 
"                         'pre_range_mclks': 0,\n" + 
"                         'pre_range_us': 0,\n" + 
"                         'final_range_vcsel_period_pclks': 0,\n" + 
"                         'final_range_mclks': 0,\n" + 
"                         'final_range_us': 0\n" + 
"                         }\n" + 
"        self.vcsel_period_type = ['VcselPeriodPreRange', 'VcselPeriodFinalRange']\n" + 
"\n" + 
"    def ping(self):\n" + 
"        self.start()\n" + 
"        distance = self.read()\n" + 
"        self.stop()\n" + 
"        return distance\n" + 
"\n" + 
"    def _registers(self, register, values=None, struct='B'):\n" + 
"        if values is None:\n" + 
"            size = ustruct.calcsize(struct)\n" + 
"            data = self.i2c.readfrom_mem(self.address, register, size)\n" + 
"            values = ustruct.unpack(struct, data)\n" + 
"            return values\n" + 
"        data = ustruct.pack(struct, *values)\n" + 
"        self.i2c.writeto_mem(self.address, register, data)\n" + 
"\n" + 
"    def _register(self, register, value=None, struct='B'):\n" + 
"        if value is None:\n" + 
"            return self._registers(register, struct=struct)[0]\n" + 
"        self._registers(register, (value,), struct=struct)\n" + 
"\n" + 
"    def _flag(self, register=0x00, bit=0, value=None):\n" + 
"        data = self._register(register)\n" + 
"        mask = 1 << bit\n" + 
"        if value is None:\n" + 
"            return bool(data & mask)\n" + 
"        elif value:\n" + 
"            data |= mask\n" + 
"        else:\n" + 
"            data &= ~mask\n" + 
"        self._register(register, data)\n" + 
"\n" + 
"    def _config(self, *config):\n" + 
"        for register, value in config:\n" + 
"            self._register(register, value)\n" + 
"\n" + 
"    def init(self, power2v8=True):\n" + 
"        self._flag(_EXTSUP_HV, 0, power2v8)\n" + 
"\n" + 
"        # I2C standard mode\n" + 
"        self._config(\n" + 
"            (0x88, 0x00),\n" + 
"\n" + 
"            (0x80, 0x01),\n" + 
"            (0xff, 0x01),\n" + 
"            (0x00, 0x00),\n" + 
"        )\n" + 
"        self._stop_variable = self._register(0x91)\n" + 
"        self._config(\n" + 
"            (0x00, 0x01),\n" + 
"            (0xff, 0x00),\n" + 
"            (0x80, 0x00),\n" + 
"        )\n" + 
"\n" + 
"        # disable signal_rate_msrc and signal_rate_pre_range limit checks\n" + 
"        self._flag(_MSRC_CONFIG, 1, True)\n" + 
"        self._flag(_MSRC_CONFIG, 4, True)\n" + 
"\n" + 
"        # rate_limit = 0.25\n" + 
"        self._register(_FINAL_RATE_RTN_LIMIT, int(0.1 * (1 << 7)),\n" + 
"                       struct='>H')\n" + 
"\n" + 
"        self._register(_SYSTEM_SEQUENCE, 0xff)\n" + 
"\n" + 
"        spad_count, is_aperture = self._spad_info()\n" + 
"        spad_map = bytearray(self._registers(_SPAD_ENABLES, struct='6B'))\n" + 
"\n" + 
"        # set reference spads\n" + 
"        self._config(\n" + 
"            (0xff, 0x01),\n" + 
"            (_SPAD_REF_START, 0x00),\n" + 
"            (_SPAD_NUM_REQUESTED, 0x2c),\n" + 
"            (0xff, 0x00),\n" + 
"            (_REF_EN_START_SELECT, 0xb4),\n" + 
"        )\n" + 
"\n" + 
"        spads_enabled = 0\n" + 
"        for i in range(48):\n" + 
"            if i < 12 and is_aperture or spads_enabled >= spad_count:\n" + 
"                spad_map[i // 8] &= ~(1 << (i >> 2))\n" + 
"            elif spad_map[i // 8] & (1 << (i >> 2)):\n" + 
"                spads_enabled += 1\n" + 
"\n" + 
"        self._registers(_SPAD_ENABLES, spad_map, struct='6B')\n" + 
"\n" + 
"        self._config(\n" + 
"            (0xff, 0x01),\n" + 
"            (0x00, 0x00),\n" + 
"\n" + 
"            (0xff, 0x00),\n" + 
"            (0x09, 0x00),\n" + 
"            (0x10, 0x00),\n" + 
"            (0x11, 0x00),\n" + 
"\n" + 
"            (0x24, 0x01),\n" + 
"            (0x25, 0xFF),\n" + 
"            (0x75, 0x00),\n" + 
"\n" + 
"            (0xFF, 0x01),\n" + 
"            (0x4E, 0x2C),\n" + 
"            (0x48, 0x00),\n" + 
"            (0x30, 0x20),\n" + 
"\n" + 
"            (0xFF, 0x00),\n" + 
"            (0x30, 0x09),\n" + 
"            (0x54, 0x00),\n" + 
"            (0x31, 0x04),\n" + 
"            (0x32, 0x03),\n" + 
"            (0x40, 0x83),\n" + 
"            (0x46, 0x25),\n" + 
"            (0x60, 0x00),\n" + 
"            (0x27, 0x00),\n" + 
"            (0x50, 0x06),\n" + 
"            (0x51, 0x00),\n" + 
"            (0x52, 0x96),\n" + 
"            (0x56, 0x08),\n" + 
"            (0x57, 0x30),\n" + 
"            (0x61, 0x00),\n" + 
"            (0x62, 0x00),\n" + 
"            (0x64, 0x00),\n" + 
"            (0x65, 0x00),\n" + 
"            (0x66, 0xA0),\n" + 
"\n" + 
"            (0xFF, 0x01),\n" + 
"            (0x22, 0x32),\n" + 
"            (0x47, 0x14),\n" + 
"            (0x49, 0xFF),\n" + 
"            (0x4A, 0x00),\n" + 
"\n" + 
"            (0xFF, 0x00),\n" + 
"            (0x7A, 0x0A),\n" + 
"            (0x7B, 0x00),\n" + 
"            (0x78, 0x21),\n" + 
"\n" + 
"            (0xFF, 0x01),\n" + 
"            (0x23, 0x34),\n" + 
"            (0x42, 0x00),\n" + 
"            (0x44, 0xFF),\n" + 
"            (0x45, 0x26),\n" + 
"            (0x46, 0x05),\n" + 
"            (0x40, 0x40),\n" + 
"            (0x0E, 0x06),\n" + 
"            (0x20, 0x1A),\n" + 
"            (0x43, 0x40),\n" + 
"\n" + 
"            (0xFF, 0x00),\n" + 
"            (0x34, 0x03),\n" + 
"            (0x35, 0x44),\n" + 
"\n" + 
"            (0xFF, 0x01),\n" + 
"            (0x31, 0x04),\n" + 
"            (0x4B, 0x09),\n" + 
"            (0x4C, 0x05),\n" + 
"            (0x4D, 0x04),\n" + 
"\n" + 
"            (0xFF, 0x00),\n" + 
"            (0x44, 0x00),\n" + 
"            (0x45, 0x20),\n" + 
"            (0x47, 0x08),\n" + 
"            (0x48, 0x28),\n" + 
"            (0x67, 0x00),\n" + 
"            (0x70, 0x04),\n" + 
"            (0x71, 0x01),\n" + 
"            (0x72, 0xFE),\n" + 
"            (0x76, 0x00),\n" + 
"            (0x77, 0x00),\n" + 
"\n" + 
"            (0xFF, 0x01),\n" + 
"            (0x0D, 0x01),\n" + 
"\n" + 
"            (0xFF, 0x00),\n" + 
"            (0x80, 0x01),\n" + 
"            (0x01, 0xF8),\n" + 
"\n" + 
"            (0xFF, 0x01),\n" + 
"            (0x8E, 0x01),\n" + 
"            (0x00, 0x01),\n" + 
"            (0xFF, 0x00),\n" + 
"            (0x80, 0x00),\n" + 
"        )\n" + 
"\n" + 
"        self._register(_INTERRUPT_GPIO, 0x04)\n" + 
"        self._flag(_GPIO_MUX_ACTIVE_HIGH, 4, False)\n" + 
"        self._register(_INTERRUPT_CLEAR, 0x01)\n" + 
"\n" + 
"        # XXX Need to implement this.\n" + 
"        # budget = self._timing_budget()\n" + 
"        # self._register(_SYSTEM_SEQUENCE, 0xe8)\n" + 
"        # self._timing_budget(budget)\n" + 
"\n" + 
"        self._register(_SYSTEM_SEQUENCE, 0x01)\n" + 
"        self._calibrate(0x40)\n" + 
"        self._register(_SYSTEM_SEQUENCE, 0x02)\n" + 
"        self._calibrate(0x00)\n" + 
"\n" + 
"        self._register(_SYSTEM_SEQUENCE, 0xe8)\n" + 
"\n" + 
"    def _spad_info(self):\n" + 
"        self._config(\n" + 
"            (0x80, 0x01),\n" + 
"            (0xff, 0x01),\n" + 
"            (0x00, 0x00),\n" + 
"\n" + 
"            (0xff, 0x06),\n" + 
"        )\n" + 
"        self._flag(0x83, 3, True)\n" + 
"        self._config(\n" + 
"            (0xff, 0x07),\n" + 
"            (0x81, 0x01),\n" + 
"\n" + 
"            (0x80, 0x01),\n" + 
"\n" + 
"            (0x94, 0x6b),\n" + 
"            (0x83, 0x00),\n" + 
"        )\n" + 
"        for timeout in range(_IO_TIMEOUT):\n" + 
"            if self._register(0x83):\n" + 
"                break\n" + 
"            utime.sleep_ms(1)\n" + 
"        else:\n" + 
"            raise TimeoutError()\n" + 
"        self._config(\n" + 
"            (0x83, 0x01),\n" + 
"        )\n" + 
"        value = self._register(0x92)\n" + 
"        self._config(\n" + 
"            (0x81, 0x00),\n" + 
"            (0xff, 0x06),\n" + 
"        )\n" + 
"        self._flag(0x83, 3, False)\n" + 
"        self._config(\n" + 
"            (0xff, 0x01),\n" + 
"            (0x00, 0x01),\n" + 
"\n" + 
"            (0xff, 0x00),\n" + 
"            (0x80, 0x00),\n" + 
"        )\n" + 
"        count = value & 0x7f\n" + 
"        is_aperture = bool(value & 0b10000000)\n" + 
"        return count, is_aperture\n" + 
"\n" + 
"    def _calibrate(self, vhv_init_byte):\n" + 
"        self._register(_SYSRANGE_START, 0x01 | vhv_init_byte)\n" + 
"        for timeout in range(_IO_TIMEOUT):\n" + 
"            if self._register(_RESULT_INTERRUPT_STATUS) & 0x07:\n" + 
"                break\n" + 
"            utime.sleep_ms(1)\n" + 
"        else:\n" + 
"            raise TimeoutError()\n" + 
"        self._register(_INTERRUPT_CLEAR, 0x01)\n" + 
"        self._register(_SYSRANGE_START, 0x00)\n" + 
"\n" + 
"    def start(self, period=0):\n" + 
"        self._config(\n" + 
"            (0x80, 0x01),\n" + 
"            (0xFF, 0x01),\n" + 
"            (0x00, 0x00),\n" + 
"            (0x91, self._stop_variable),\n" + 
"            (0x00, 0x01),\n" + 
"            (0xFF, 0x00),\n" + 
"            (0x80, 0x00),\n" + 
"        )\n" + 
"        if period:\n" + 
"            oscilator = self._register(_OSC_CALIBRATE, struct='>H')\n" + 
"            if oscilator:\n" + 
"                period *= oscilator\n" + 
"            self._register(_MEASURE_PERIOD, period, struct='>H')\n" + 
"            self._register(_SYSRANGE_START, 0x04)\n" + 
"        else:\n" + 
"            self._register(_SYSRANGE_START, 0x02)\n" + 
"        self._started = True\n" + 
"\n" + 
"    def stop(self):\n" + 
"        self._register(_SYSRANGE_START, 0x01)\n" + 
"        self._config(\n" + 
"            (0xFF, 0x01),\n" + 
"            (0x00, 0x00),\n" + 
"            (0x91, self._stop_variable),\n" + 
"            (0x00, 0x01),\n" + 
"            (0xFF, 0x00),\n" + 
"        )\n" + 
"        self._started = False\n" + 
"\n" + 
"    def read(self):\n" + 
"        if not self._started:\n" + 
"            self._config(\n" + 
"                (0x80, 0x01),\n" + 
"                (0xFF, 0x01),\n" + 
"                (0x00, 0x00),\n" + 
"                (0x91, self._stop_variable),\n" + 
"                (0x00, 0x01),\n" + 
"                (0xFF, 0x00),\n" + 
"                (0x80, 0x00),\n" + 
"                (_SYSRANGE_START, 0x01),\n" + 
"            )\n" + 
"            for timeout in range(_IO_TIMEOUT):\n" + 
"                if not self._register(_SYSRANGE_START) & 0x01:\n" + 
"                    break\n" + 
"                utime.sleep_ms(1)\n" + 
"            else:\n" + 
"                raise TimeoutError()\n" + 
"        for timeout in range(_IO_TIMEOUT):\n" + 
"            if self._register(_RESULT_INTERRUPT_STATUS) & 0x07:\n" + 
"                break\n" + 
"            utime.sleep_ms(1)\n" + 
"        else:\n" + 
"            raise TimeoutError()\n" + 
"        value = self._register(_RESULT_RANGE_STATUS + 10, struct='>H')\n" + 
"        self._register(_INTERRUPT_CLEAR, 0x01)\n" + 
"        return value\n" + 
"\n" + 
"    def set_signal_rate_limit(self, limit_Mcps):\n" + 
"        if limit_Mcps < 0 or limit_Mcps > 511.99:\n" + 
"            return False\n" + 
"        self._register(0x44, limit_Mcps * (1 << 7))\n" + 
"        return True\n" + 
"\n" + 
"    def decode_Vcsel_period(self, reg_val):\n" + 
"        return (((reg_val) + 1) << 1)\n" + 
"\n" + 
"    def encode_Vcsel_period(self, period_pclks):\n" + 
"        return (((period_pclks) >> 1) - 1)\n" + 
"\n" + 
"    def set_Vcsel_pulse_period(self, type, period_pclks):\n" + 
"        vcsel_period_reg = self.encode_Vcsel_period(period_pclks)\n" + 
"\n" + 
"        self.get_sequence_step_enables()\n" + 
"        self.get_sequence_step_timeouts()\n" + 
"\n" + 
"        if type == self.vcsel_period_type[0]:\n" + 
"            if period_pclks == 12:\n" + 
"                self._register(PRE_RANGE_CONFIG_VALID_PHASE_HIGH, 0x18)\n" + 
"            elif period_pclks == 14:\n" + 
"                self._register(PRE_RANGE_CONFIG_VALID_PHASE_HIGH, 0x30)\n" + 
"            elif period_pclks == 16:\n" + 
"                self._register(PRE_RANGE_CONFIG_VALID_PHASE_HIGH, 0x40)\n" + 
"            elif period_pclks == 18:\n" + 
"                self._register(PRE_RANGE_CONFIG_VALID_PHASE_HIGH, 0x50)\n" + 
"            else:\n" + 
"                return False\n" + 
"\n" + 
"            self._register(PRE_RANGE_CONFIG_VALID_PHASE_LOW, 0x08)\n" + 
"            self._register(PRE_RANGE_CONFIG_VCSEL_PERIOD, vcsel_period_reg)\n" + 
"\n" + 
"            new_pre_range_timeout_mclks = self.timeout_microseconds_to_Mclks(self.timeouts['pre_range_us'],\n" + 
"                                                                             period_pclks)\n" + 
"            self._register(PRE_RANGE_CONFIG_TIMEOUT_MACROP_HI, self.encode_timeout(new_pre_range_timeout_mclks))\n" + 
"\n" + 
"            new_msrc_timeout_mclks = self.timeout_microseconds_to_Mclks(self.timeouts['msrc_dss_tcc_us'],\n" + 
"                                                                        period_pclks)\n" + 
"            self._register(MSRC_CONFIG_TIMEOUT_MACROP, 255 if new_msrc_timeout_mclks > 256 else (new_msrc_timeout_mclks - 1))\n" + 
"        elif type == self.vcsel_period_type[1]:\n" + 
"            if period_pclks == 8:\n" + 
"                self._register(FINAL_RANGE_CONFIG_VALID_PHASE_HIGH, 0x10)\n" + 
"                self._register(FINAL_RANGE_CONFIG_VALID_PHASE_LOW, 0x08)\n" + 
"                self._register(GLOBAL_CONFIG_VCSEL_WIDTH, 0x02)\n" + 
"                self._register(ALGO_PHASECAL_CONFIG_TIMEOUT, 0x0C)\n" + 
"                self._register(0xFF, 0x01)\n" + 
"                self._register(ALGO_PHASECAL_LIM, 0x30)\n" + 
"                self._register(0xFF, 0x00)\n" + 
"            elif period_pclks == 10:\n" + 
"                self._register(FINAL_RANGE_CONFIG_VALID_PHASE_HIGH, 0x28)\n" + 
"                self._register(FINAL_RANGE_CONFIG_VALID_PHASE_LOW, 0x08)\n" + 
"                self._register(GLOBAL_CONFIG_VCSEL_WIDTH, 0x03)\n" + 
"                self._register(ALGO_PHASECAL_CONFIG_TIMEOUT, 0x09)\n" + 
"                self._register(0xFF, 0x01)\n" + 
"                self._register(ALGO_PHASECAL_LIM, 0x20)\n" + 
"                self._register(0xFF, 0x00)\n" + 
"            elif period_pclks == 12:\n" + 
"                self._register(FINAL_RANGE_CONFIG_VALID_PHASE_HIGH, 0x38)\n" + 
"                self._register(FINAL_RANGE_CONFIG_VALID_PHASE_LOW, 0x08)\n" + 
"                self._register(GLOBAL_CONFIG_VCSEL_WIDTH, 0x03)\n" + 
"                self._register(ALGO_PHASECAL_CONFIG_TIMEOUT, 0x08)\n" + 
"                self._register(0xFF, 0x01)\n" + 
"                self._register(ALGO_PHASECAL_LIM, 0x20)\n" + 
"                self._register(0xFF, 0x00)\n" + 
"            elif period_pclks == 14:\n" + 
"                self._register(FINAL_RANGE_CONFIG_VALID_PHASE_HIGH, 0x48)\n" + 
"                self._register(FINAL_RANGE_CONFIG_VALID_PHASE_LOW, 0x08)\n" + 
"                self._register(GLOBAL_CONFIG_VCSEL_WIDTH, 0x03)\n" + 
"                self._register(ALGO_PHASECAL_CONFIG_TIMEOUT, 0x07)\n" + 
"                self._register(0xFF, 0x01)\n" + 
"                self._register(ALGO_PHASECAL_LIM, 0x20)\n" + 
"                self._register(0xFF, 0x00)\n" + 
"            else:\n" + 
"                return False\n" + 
"\n" + 
"            self._register(FINAL_RANGE_CONFIG_VCSEL_PERIOD, vcsel_period_reg)\n" + 
"\n" + 
"            new_final_range_timeout_mclks = self.timeout_microseconds_to_Mclks(self.timeouts['final_range_us'], period_pclks)\n" + 
"\n" + 
"            if self.enables['pre_range']:\n" + 
"                new_final_range_timeout_mclks += 1\n" + 
"            self._register(FINAL_RANGE_CONFIG_TIMEOUT_MACROP_HI, self.encode_timeout(new_final_range_timeout_mclks))\n" + 
"        else:\n" + 
"            return False\n" + 
"        self.set_measurement_timing_budget(self.measurement_timing_budget_us)\n" + 
"        sequence_config = self._register(SYSTEM_SEQUENCE_CONFIG)\n" + 
"        self._register(SYSTEM_SEQUENCE_CONFIG, 0x02)\n" + 
"        self.perform_single_ref_calibration(0x0)\n" + 
"        self._register(SYSTEM_SEQUENCE_CONFIG, sequence_config)\n" + 
"\n" + 
"        return True\n" + 
"\n" + 
"    def get_sequence_step_enables(self):\n" + 
"        sequence_config = self._register(0x01)\n" + 
"\n" + 
"        self.enables['tcc'] = (sequence_config >> 4) & 0x1\n" + 
"        self.enables['dss'] = (sequence_config >> 3) & 0x1\n" + 
"        self.enables['msrc'] = (sequence_config >> 2) & 0x1\n" + 
"        self.enables['pre_range'] = (sequence_config >> 6) & 0x1\n" + 
"        self.enables['final_range'] = (sequence_config >> 7) & 0x1\n" + 
"\n" + 
"    def get_vcsel_pulse_period(self, type):\n" + 
"        if type == self.vcsel_period_type[0]:\n" + 
"            return self.decode_Vcsel_period(0x50)\n" + 
"        elif type == self.vcsel_period_type[1]:\n" + 
"            return self.decode_Vcsel_period(0x70)\n" + 
"        else:\n" + 
"            return 255\n" + 
"\n" + 
"    def get_sequence_step_timeouts(self):\n" + 
"        self.timeouts['pre_range_vcsel_period_pclks'] = self.get_vcsel_pulse_period(self.vcsel_period_type[0])\n" + 
"        self.timeouts['msrc_dss_tcc_mclks'] = int(self._register(MSRC_CONFIG_TIMEOUT_MACROP)) + 1\n" + 
"        self.timeouts['msrc_dss_tcc_us'] = self.timeout_Mclks_to_microseconds(self.timeouts['msrc_dss_tcc_mclks'],\n" + 
"                                                                              self.timeouts[\n" + 
"                                                                                  'pre_range_vcsel_period_pclks'])\n" + 
"        self.timeouts['pre_range_mclks'] = self.decode_timeout(PRE_RANGE_CONFIG_TIMEOUT_MACROP_HI)\n" + 
"        self.timeouts['pre_range_us'] = self.timeout_Mclks_to_microseconds(self.timeouts['pre_range_mclks'],\n" + 
"                                                                           self.timeouts[\n" + 
"                                                                               'pre_range_vcsel_period_pclks'])\n" + 
"        self.timeouts['final_range_vcsel_period_pclks'] = self.get_vcsel_pulse_period(self.vcsel_period_type[1])\n" + 
"        self.timeouts['final_range_mclks'] = self.decode_timeout(self._register(FINAL_RANGE_CONFIG_TIMEOUT_MACROP_HI))\n" + 
"\n" + 
"        if self.enables['pre_range']:\n" + 
"            self.timeouts['final_range_mclks'] -= self.timeouts['pre_range_mclks']\n" + 
"        self.timeouts['final_range_us'] = self.timeout_Mclks_to_microseconds(self.timeouts['final_range_mclks'],\n" + 
"                                                                             self.timeouts[\n" + 
"                                                                                 'final_range_vcsel_period_pclks'])\n" + 
"\n" + 
"    def timeout_Mclks_to_microseconds(self, timeout_period_mclks, vcsel_period_pclks):\n" + 
"        macro_period_ns = self.calc_macro_period(vcsel_period_pclks)\n" + 
"        return ((timeout_period_mclks * macro_period_ns) + (macro_period_ns / 2)) / 1000\n" + 
"\n" + 
"    def timeout_microseconds_to_Mclks(self, timeout_period_us, vcsel_period_pclks):\n" + 
"        macro_period_ns = self.calc_macro_period(vcsel_period_pclks)\n" + 
"        return (((timeout_period_us * 1000) + (macro_period_ns / 2)) / macro_period_ns)\n" + 
"\n" + 
"    def calc_macro_period(self, vcsel_period_pclks):\n" + 
"        return (((2304 * (vcsel_period_pclks) * 1655) + 500) / 1000)\n" + 
"\n" + 
"    def decode_timeout(self, reg_val):\n" + 
"        return ((reg_val & 0x00FF) << ((reg_val & 0xFF00) >> 8)) + 1\n" + 
"\n" + 
"    def encode_timeout(self, timeout_mclks):\n" + 
"        timeout_mclks = int(timeout_mclks)\n" + 
"        ls_byte = 0\n" + 
"        ms_byte = 0\n" + 
"\n" + 
"        if timeout_mclks > 0:\n" + 
"            ls_byte = timeout_mclks - 1\n" + 
"\n" + 
"            while (ls_byte & 0xFFFFFF00) > 0:\n" + 
"                ls_byte >>= 1\n" + 
"                ms_byte += 1\n" + 
"            return (ms_byte << 8) or (ls_byte & 0xFF)\n" + 
"        else:\n" + 
"            return 0\n" + 
"\n" + 
"    def set_measurement_timing_budget(self, budget_us):\n" + 
"        start_overhead = 1320\n" + 
"        end_overhead = 960\n" + 
"        msrc_overhead = 660\n" + 
"        tcc_overhead = 590\n" + 
"        dss_overhead = 690\n" + 
"        pre_range_overhead = 660\n" + 
"        final_range_overhead = 550\n" + 
"\n" + 
"        min_timing_budget = 20000\n" + 
"\n" + 
"        if budget_us < min_timing_budget:\n" + 
"            return False\n" + 
"        used_budget_us = start_overhead + end_overhead\n" + 
"\n" + 
"        self.get_sequence_step_enables()\n" + 
"        self.get_sequence_step_timeouts()\n" + 
"\n" + 
"        if self.enables['tcc']:\n" + 
"            used_budget_us += self.timeouts['msrc_dss_tcc_us'] + tcc_overhead\n" + 
"        if self.enables['dss']:\n" + 
"            used_budget_us += 2* self.timeouts['msrc_dss_tcc_us'] + dss_overhead\n" + 
"        if self.enables['msrc']:\n" + 
"            used_budget_us += self.timeouts['msrc_dss_tcc_us'] + msrc_overhead\n" + 
"        if self.enables['pre_range']:\n" + 
"            used_budget_us += self.timeouts['pre_range_us'] + pre_range_overhead\n" + 
"        if self.enables['final_range']:\n" + 
"            used_budget_us += final_range_overhead\n" + 
"\n" + 
"            if used_budget_us > budget_us:\n" + 
"                return False\n" + 
"            final_range_timeout_us = budget_us - used_budget_us\n" + 
"            final_range_timeout_mclks = self.timeout_microseconds_to_Mclks(final_range_timeout_us, self.timeouts['final_range_vcsel_period_pclks'])\n" + 
"\n" + 
"            if self.enables['pre_range']:\n" + 
"                final_range_timeout_mclks += self.timeouts['pre_range_mclks']\n" + 
"            self._register(FINAL_RANGE_CONFIG_TIMEOUT_MACROP_HI, self.encode_timeout(final_range_timeout_mclks))\n" + 
"            self.measurement_timing_budget_us = budget_us\n" + 
"        return True\n" + 
"\n" + 
"    def perform_single_ref_calibration(self, vhv_init_byte):\n" + 
"        \n" + 
"        # Pico MicroPython doesn't have a Chrono class, so the line below is commented out\n" + 
"        # chrono = Timer.Chrono()\n" + 
"        \n" + 
"        self._register(SYSRANGE_START, 0x01|vhv_init_byte)\n" + 
"\n" + 
"        # Instead of using the chrono class, I'll just capture the current time\n" + 
"        chrono_start = utime.ticks_ms()\n" + 
"        while self._register((RESULT_INTERRUPT_STATUS & 0x07) == 0):\n" + 
"\n" + 
"            # elapsed time is juse the current time minus the start time.\n" + 
"            time_elapsed = utime.ticks_ms() - chrono_start\n" + 
"            if time_elapsed > _IO_TIMEOUT:\n" + 
"                return False\n" + 
"        self._register(SYSTEM_INTERRUPT_CLEAR, 0x01)\n" + 
"        self._register(SYSRANGE_START, 0x00)\n" + 
"        return True\n"
], {type: 'text'});