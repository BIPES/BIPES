// %{TEMP_HUMI} ----------------------------------------------------------------
// DHT11/22 -------------------------------------------------------------------
Blockly.Python['dht_init'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var type = block.getFieldValue('DHT_TYPE');
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_dht'] = 'import dht';
  Blockly.Python.definitions_['import_time'] = 'import time';
  var code = 'dhts=dht.' + type + '(Pin(' + value_pin + '));dhts.measure();time.sleep(2)\n';
  return code;
};

/// Measure DHT11/22 Sensor
Blockly.Python['dht_measure'] = function(block) {
  var code = 'dhts.measure()\n';
  return code;
};

/// Read DHT11/22 Temperature
Blockly.Python['dht_read_temp'] = function(block) {
  var code = 'dhts.temperature()';
  return [code, Blockly.Python.ORDER_NONE];
};

/// Read DHT11/22 Humidity
Blockly.Python['dht_read_humidity'] = function(block) {
  var code = 'dhts.humidity()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['tm1640_init'] = function(block) {
  var clk = Blockly.Python.valueToCode(block, 'clk', Blockly.Python.ORDER_ATOMIC);
  var dio = Blockly.Python.valueToCode(block, 'dio', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_tm1640'] = 'import tm1640';
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';

  var code = 'tm = tm1640.TM1640(clk=Pin(14), dio=Pin(13))\n';
  return code;
};

// SHT20 I2C  -----------------------------------------------------------------

Blockly.Python['sht20_init'] = function(block) {
	var scl = Blockly.Python.valueToCode(block, 'scl', Blockly.Python.ORDER_ATOMIC);
	var sda = Blockly.Python.valueToCode(block, 'sda', Blockly.Python.ORDER_ATOMIC);

	Blockly.Python.definitions_['import_I2C_Pin'] = 'from machine import I2C, Pin';
	Blockly.Python.definitions_['import_time_'] = 'import time';
	Blockly.Python.definitions_['def_sht20_temperature'] = 'def sht20_temperature():\n\ti2c.writeto(0x40,b\'\\xf3\')\n\ttime.sleep_ms(70)\n\tt=i2c.readfrom(0x40, 2)\n\treturn -46.86+175.72*(t[0]*256+t[1])/65535\n';
	Blockly.Python.definitions_['def_sht20_humidity'] = 'def sht20_humidity():\n\ti2c.writeto(0x40,b\'\\xf5\')\n\ttime.sleep_ms(70)\n\tt=i2c.readfrom(0x40, 2)\n\treturn -6+125*(t[0]*256+t[1])/65535';

	var code = 'i2c=I2C(scl=Pin(' + scl + '), sda=Pin(' + sda + '))\n';

	return code;
};

Blockly.Python['sht20_temperature'] = function(block) {
	var code = 'sht20_temperature()';
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sht20_humidity'] = function(block) {
	var code = 'sht20_humidity()';
	return [code, Blockly.Python.ORDER_NONE];
};


// Ultrasound ------------------------------------------------------------------
// HCSR04 ultrasound distance sensor -------------------------------------------

Blockly.Python['hcsr_init'] = function(block) {
  var pEcho = Blockly.Python.valueToCode(block, 'echo', Blockly.Python.ORDER_ATOMIC);
  var pTrig = Blockly.Python.valueToCode(block, 'trigger', Blockly.Python.ORDER_ATOMIC);
  var pTime = Blockly.Python.valueToCode(block, 'timeout', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_hcr'] = `
from machine import time_pulse_us
#Based on: https://github.com/lemariva/uPySensors
class HCSR04:
    def __init__(self, trigger_pin, echo_pin, echo_timeout_us=500*2*30):
        self.echo_timeout_us = echo_timeout_us
        self.trigger = Pin(trigger_pin, mode=Pin.OUT)
        self.trigger.value(0)
        self.echo = Pin(echo_pin, mode=Pin.IN)
    def _send_pulse_and_wait(self):
        self.trigger.value(0)
        time.sleep_us(5)
        self.trigger.value(1)
        time.sleep_us(10)
        self.trigger.value(0)
        try:
			pulse_time = time_pulse_us(self.echo, 1, self.echo_timeout_us)
			return pulse_time
        except OSError as ex:
            if ex.args[0] == 110: # 110 = ETIMEDOUT
                raise OSError('Out of range')
            raise ex
    def distance_mm(self):
        pulse_time = self._send_pulse_and_wait()
        mm = pulse_time * 100 // 582
        return mm
    def distance_cm(self):
        pulse_time = self._send_pulse_and_wait()
        cms = (pulse_time / 2) / 29.1
        return cms
`;

/*
 * while 1:
	sensor = HCSR04(trigger_pin=13, echo_pin=15, echo_timeout_us=10000)
	distance = sensor.distance_mm()
	print(distance)
	time.sleep(1)
*/


  var code = 'ultraSoundSensor = HCSR04(trigger_pin=' + pTrig + ', echo_pin=' + pEcho + ', echo_timeout_us=' + pTime + ')\n';

  return code;
};

Blockly.Python['hcsr_read'] = function(block) {
  var code = 'ultraSoundSensor.distance_mm()';
  return [code, Blockly.Python.ORDER_NONE];
};


// GPS Module ------------------------------------------------------------------

Blockly.Python['gps_init'] = function(block) {
	var tx = Blockly.Python.valueToCode(block, 'tx', Blockly.Python.ORDER_ATOMIC);
	var rx = Blockly.Python.valueToCode(block, 'rx', Blockly.Python.ORDER_ATOMIC);
	var bps = Blockly.Python.valueToCode(block, 'bps', Blockly.Python.ORDER_ATOMIC);
	var uart = Blockly.Python.valueToCode(block, 'uart', Blockly.Python.ORDER_ATOMIC);

	Blockly.Python.definitions_['import_uart'] = 'from machine import UART';
	Blockly.Python.definitions_['import_micropyGPS'] = 'from mini_micropyGPS import MicropyGPS';

	var code =  'uartGPS = UART(' + uart + ', tx=' + tx + ', rx=' + rx + ')\n';
	    code += 'uartGPS.init(' + bps + ', bits=8, parity=None, stop=1)\n';
	    code += 'gps = MicropyGPS()\n';
	return code;
};

Blockly.Python['gps_update'] = function(block) {

	var code =  'if uartGPS.any():\n';
	    code += '\tc=int.from_bytes(uartGPS.read(1), "big")\n';
	    code += '\tstat = gps.update(chr(c))\n';

	return code;
};

Blockly.Python['gps_coord_format'] = function(block) {
	var dropdown_format = block.getFieldValue('format');
	var code = 'gps.coord_format=\'' + dropdown_format + '\'\n';
	return code;
};

Blockly.Python['gps_get_lat'] = function(block) {

  var code = 'gps.latitude';

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['gps_get_long'] = function(block) {

  var code = 'gps.longitude';

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['gps_get_height'] = function(block) {

  var code = 'gps.altitude';

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['gps_get_speed'] = function(block) {

  var code = 'gps.speed';

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['gps_get_date'] = function(block) {

  var code = 'gps.date';

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['gps_get_time'] = function(block) {

  var code = 'gps.timestamp';

  return [code, Blockly.Python.ORDER_NONE];
};


// Oximeter --------------------------------------------------------------------
// MAX30100 --------------------------------------------------------------------

Blockly.Python['max30100_init'] = function(block) {
  var scl = Blockly.Python.valueToCode(block, 'scl', Blockly.Python.ORDER_ATOMIC);
  var sda = Blockly.Python.valueToCode(block, 'sda', Blockly.Python.ORDER_ATOMIC);

  var code = '#TODO: init max30100\n';

  return code;
};

Blockly.Python['max30100_read'] = function(block) {

  var code = '#read max30100\n';

  return code;
};

Blockly.Python['max30100_red'] = function(block) {

  var code = '1';

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['max30100_ir'] = function(block) {

  var code = '2';

  return [code, Blockly.Python.ORDER_NONE];
};


// BMP180-----------------------------------------------------------------------
Blockly.Python['bmp180_init'] = function(block) {
	var scl = Blockly.Python.valueToCode(block, 'scl', Blockly.Python.ORDER_ATOMIC);
	var sda = Blockly.Python.valueToCode(block, 'sda', Blockly.Python.ORDER_ATOMIC);

	Blockly.Python.definitions_['import_bmp180'] = 'from bmp180 import BMP180';
	Blockly.Python.definitions_['import_I2C_Pin'] = 'from machine import I2C, Pin';

	var code = 'bus=I2C(scl=Pin(' + scl + '), sda=Pin(' + sda + '), freq=100000)\n';
	code += 'bmp180 = BMP180(bus)\n';
	code += 'bmp180.oversample_sett = 2\n';
	code += 'bmp180.baseline = 101325\n\n';

	return code;
};

Blockly.Python['bmp180_temperature'] = function(block) {
	var code = 'bmp180.temperature';
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['bmp180_pressure'] = function(block) {
	var code = 'bmp180.pressure';
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['bmp180_altitude'] = function(block) {
	var code = 'bmp180.altitude';
	return [code, Blockly.Python.ORDER_NONE];
};

// BMP280 ----------------------------------------------------------------------
Blockly.Python['bmp280_init'] = function(block) {
	var scl = Blockly.Python.valueToCode(block, 'scl', Blockly.Python.ORDER_ATOMIC);
	var sda = Blockly.Python.valueToCode(block, 'sda', Blockly.Python.ORDER_ATOMIC);

	Blockly.Python.definitions_['import_I2C_Pin'] = 'from machine import I2C, Pin';
	Blockly.Python.definitions_['import_bmp280'] = 'from bmp280 import *';

	var code = 'bus=I2C(scl=Pin(' + scl + '), sda=Pin(' + sda + '))\n';
	code += 'bmp280 = BMP280(bus)\n';
	code += 'bmp280.use_case(BMP280_CASE_WEATHER)\n';
	code += 'bmp280.oversample(BMP280_OS_HIGH)\n';

	return code;
};

Blockly.Python['bmp280_temperature'] = function(block) {
	var code = 'bmp280.temperature';
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['bmp280_pressure'] = function(block) {
	var code = 'bmp280.pressure';
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['bmp280_altitude'] = function(block) {
	var code = 'bmp280.altitude';
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['bmp280_measure'] = function(block) {
	var code = 'bmp280.normal_measure()\n';
	return code;
};

Blockly.Python['bmp280_sleep'] = function(block) {
	var code = 'bmp280.sleep()\n';
	return code;
};


// CCS811 Air Quality Sensor ---------------------------------------------------
Blockly.Python['ccs811_init'] = function(block) {
	var scl = Blockly.Python.valueToCode(block, 'scl', Blockly.Python.ORDER_ATOMIC);
	var sda = Blockly.Python.valueToCode(block, 'sda', Blockly.Python.ORDER_ATOMIC);

	Blockly.Python.definitions_['import_I2C_Pin'] = 'from machine import I2C, Pin';
	Blockly.Python.definitions_['import_ccs811'] = 'import CCS811';

	var code = 'bus=I2C(scl=Pin(' + scl + '), sda=Pin(' + sda + '))\n';
	code += 'sCCS811 = CCS811.CCS811(i2c=bus, addr=90)\n';

	return code;
};

Blockly.Python['ccs811_data_ready'] = function(block) {
	var code = 'sCCS811.data_ready()';
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ccs811_eCO2'] = function(block) {
	var code = 'sCCS811.eCO2';
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ccs811_tVOC'] = function(block) {
	var code = 'sCCS811.tVOC';
	return [code, Blockly.Python.ORDER_NONE];
};

// MPU6050 ---------------------------------------------------------------------

Blockly.Python['init_mpu6050'] = function(block) {
  var scl = Blockly.Python.valueToCode(block, 'scl', Blockly.Python.ORDER_ATOMIC);
  var sda = Blockly.Python.valueToCode(block, 'sda', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_imu'] = 'import imu';

//  var code = 'i2c=I2C(-1, scl=Pin(' + scl + '), sda=Pin(' + sda + '))\n';
 //     code += 'oled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)\n';
    var code = "imu.init_MPU()\nimu.calibrate_sensors()\n";

  return code;
};


Blockly.Python['mpu6050_read_acc_x'] = function(block) {
  var code = 'imu.read_mpu6050v(1)';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['mpu6050_read_acc_y'] = function(block) {
  var code = 'imu.read_mpu6050v(2)';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['mpu6050_read_acc_z'] = function(block) {
  var code = 'imu.read_mpu6050v(3)';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['mpu6050_read_gyro_x'] = function(block) {
  var code = 'imu.read_mpu6050v(4)';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['mpu6050_read_gyro_y'] = function(block) {
  var code = 'imu.read_mpu6050v(5)';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['mpu6050_read_gyro_z'] = function(block) {
  var code = 'imu.read_mpu6050v(6)';
  return [code, Blockly.Python.ORDER_NONE];
};

// MPU9250 ---------------------------------------------------------------------
Blockly.Python['mpu9250_init'] = function(block) {
	var scl = Blockly.Python.valueToCode(block, 'scl', Blockly.Python.ORDER_ATOMIC);
	var sda = Blockly.Python.valueToCode(block, 'sda', Blockly.Python.ORDER_ATOMIC);

	Blockly.Python.definitions_['import_I2C_Pin'] = 'from machine import I2C, Pin';
	Blockly.Python.definitions_['import_mpu9250'] = 'from mpu9250 import MPU9250';

	var code =  'i2c=I2C(scl=Pin(' + scl + '), sda=Pin(' + sda + '))\n';
	    code += 'mpu9250s = MPU9250(i2c)\n';

	return code;
};

Blockly.Python['mpu9250_acc'] = function(block) {
	var code = 'mpu9250s.acceleration';
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['mpu9250_mag'] = function(block) {
	var code = 'mpu9250s.magnetic';
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['mpu9250_gyro'] = function(block) {
	var code = 'mpu9250s.gyro';
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['mpu9250_temp'] = function(block) {
	var code = 'mpu9250s.temperature';
	return [code, Blockly.Python.ORDER_NONE];
};


// OneWire ---------------------------------------------------------------------
// DS1820 ----------------------------------------------------------------------
Blockly.Python['onewire_ds18x20_init'] = function(block) {
  var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_onewire'] = 'import onewire,ds18x20';

  var code = 'onewire_pin = Pin(' + pin + ')\n';
      code += 'ds = ds18x20.DS18X20(onewire.OneWire(onewire_pin))\n';

  return code;
};


Blockly.Python['onewire_ds18x20_scan'] = function(block) {
  var code = 'ds.scan()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['onewire_ds18x20_convert'] = function(block) {
  var code = 'ds.convert_temp()\n';
  return code;
};

Blockly.Python['onewire_ds18x20_read_temp'] = function(block) {
  var rom = Blockly.Python.valueToCode(block, 'rom', Blockly.Python.ORDER_ATOMIC);
  var code = 'ds.read_temp(' + rom + ')';
  return [code, Blockly.Python.ORDER_NONE];
};


// RC522 RFID Reader -----------------------------------------------------------
Blockly.Python['rfid_rc522_init'] = function(block) {
  var sck = Blockly.Python.valueToCode(block, 'sck', Blockly.Python.ORDER_ATOMIC);
  var mosi = Blockly.Python.valueToCode(block, 'mosi', Blockly.Python.ORDER_ATOMIC);
  var miso = Blockly.Python.valueToCode(block, 'miso', Blockly.Python.ORDER_ATOMIC);
  var rst = Blockly.Python.valueToCode(block, 'rst', Blockly.Python.ORDER_ATOMIC);
  var cs = Blockly.Python.valueToCode(block, 'cs', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_mfrc522'] = 'import mfrc522';

  //var code = 'rdr=mfrc522.MFRC522(0,2,4,5,14)\n';
  var code = 'rdr=mfrc522.MFRC522(' + sck + ',' + mosi + ',' + miso + ',' + rst + ',' + cs + ')\n';
  return code;
};


Blockly.Python['rfid_rc522_detect_card'] = function(block) {
  var stat = Blockly.Python.valueToCode(block, 'stat', Blockly.Python.ORDER_ATOMIC);
  var tag = Blockly.Python.valueToCode(block, 'tag', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_mfrc522'] = 'import mfrc522';

  var code = '(' + stat + ',' + tag + ') = rdr.request(rdr.REQIDL)\n';
  //return [code, Blockly.Python.ORDER_NONE];
  return code;
};


Blockly.Python['rfid_rc522_anticoll'] = function(block) {
  var stat = Blockly.Python.valueToCode(block, 'stat', Blockly.Python.ORDER_ATOMIC);
  var tag = Blockly.Python.valueToCode(block, 'tag', Blockly.Python.ORDER_ATOMIC);

  var code = '(' + stat + ',' + tag + ') = rdr.anticoll()\n';
  return code;

  //Blockly.Python.definitions_['import_mfrc522'] = 'import mfrc522';
  //var code = 'rdr.anticoll()';
  //return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['rfid_rc522_read_card'] = function(block) {
  var code = 'rdr=mfrc522.MFRC522(0,2,4,5,14)\n';
  return code;
};


Blockly.Python['rfid_rc522_write_card'] = function(block) {
  var code = 'rdr=mfrc522.MFRC522(0,2,4,5,14)\n';
  return code;
};

// Rotatory Encoder ------------------------------------------------------------
Blockly.Python['encoder_init'] = function(block) {
  var p0 = Blockly.Python.valueToCode(block, 'p0', Blockly.Python.ORDER_ATOMIC);
  var p1 = Blockly.Python.valueToCode(block, 'p1', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_encoder_class'] = `
#Encoder class
#Source: https://github.com/peterhinch/micropython-samples/blob/master/encoders/encoder_portable.py
class Encoder(object):
    def __init__(self, pin_x, pin_y, reverse, scale):
        self.reverse = reverse
        self.scale = scale
        self.forward = True
        self.pin_x = pin_x
        self.pin_y = pin_y
        self._pos = 0
        self.x_interrupt = pin_x.irq(trigger=Pin.IRQ_RISING | Pin.IRQ_FALLING, handler=self.x_callback)
        self.y_interrupt = pin_y.irq(trigger=Pin.IRQ_RISING | Pin.IRQ_FALLING, handler=self.y_callback)
    def x_callback(self, line):
        self.forward = self.pin_x.value() ^ self.pin_y.value() ^ self.reverse
        self._pos += 1 if self.forward else -1
    def y_callback(self, line):
        self.forward = self.pin_x.value() ^ self.pin_y.value() ^ self.reverse ^ 1
        self._pos += 1 if self.forward else -1
    @property
    def position(self):
        return self._pos * self.scale
    @position.setter
    def position(self, value):
        self._pos = value // self.scale
  `;

	/*
  Blockly.Python.definitions_['import_encoder_callback'] = `
#BIPES Encoder CallBack
x=0
def callback(p):
    global x
    x=x+1
    print(x)
    `;
	//TODO: count backwards
  var code =  "p0 = Pin(" + p0 + ", Pin.IN)\n";
      code += "p1 = Pin(" + p1 + ", Pin.IN)\n";
      code += "p0.irq(trigger=Pin.IRQ_RISING | Pin.IRQ_FALLING, handler=callback) \n";
      code += "p1.irq(trigger=Pin.IRQ_RISING | Pin.IRQ_FALLING, handler=callback) \n";
      */

  var code =  "p00 = Pin(" + p0 + ", Pin.IN)\n";
      code += "p11 = Pin(" + p1 + ", Pin.IN)\n";
      code += "encoder = Encoder(p00,p11,1,1)\n";

  return code;
};

Blockly.Python['encoder_reset'] = function(block) {

  var code = 'encoder.position=0\n';

  return code;
};

Blockly.Python['encoder_read'] = function(block) {

  var code = 'encoder.position';

  return [code, Blockly.Python.ORDER_NONE];
};

// Camera (ESP32CAM) -----------------------------------------------------------
Blockly.Python["esp32_cam_init"] = function(block) {
	Blockly.Python.definitions_['import_camera'] = 'import camera';
	var code = "camera.init(1)\n";
	return code;
};

Blockly.Python["esp32_cam_capture"] = function(block) {
	Blockly.Python.definitions_['import_camera'] = 'import camera';
	var code = "camera.capture()";
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["esp32_cam_red_led"] = function(block) {
	var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
	Blockly.Python.definitions_['gpio_set'] = 'def gpio_set(pin,value):\n  if value >= 1:\n    Pin(pin, Pin.OUT).on()\n  else:\n    Pin(pin, Pin.OUT).off()';

	var code = 'gpio_set(33' + ', ' + value_value + ')\n';
	return code;
};

Blockly.Python["esp32_cam_white_led"] = function(block) {
	var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
	Blockly.Python.definitions_['gpio_set'] = 'def gpio_set(pin,value):\n  if value >= 1:\n    Pin(pin, Pin.OUT).on()\n  else:\n    Pin(pin, Pin.OUT).off()';

	var code = 'gpio_set(4' + ', ' + value_value + ')\n';
	return code;
};

