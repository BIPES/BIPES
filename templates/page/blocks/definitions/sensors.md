# %{SENSORS}
  <category name="%{SENSORS}">
  
# %{TEMP_HUMI}
<category name="%{TEMP_HUMI}">

# DHT11/22 Temperature and Humidity Sensor
<label text="DHT11/22 Temperature and Humidity Sensor"></label>

# dht_init
<block type="dht_init">
  <field name="BLOCK_DHT_INIT">Start DHT11/22 sensor</field>
  <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
</block>

# dht_measure
<block type="dht_measure"></block>

# dht_read_temp
<block type="dht_read_temp"></block>

# dht_read_humidity
<block type="dht_read_humidity"></block>

# SHT20 I2C Temperature and Humidity Sensor
<label text="SHT20 I2C Temperature and Humidity Sensor"></label>

# sht20_init
<block type="sht20_init">
  <value name="scl">
    <shadow type="math_number">
     <field name="NUM">22</field>
    </shadow>
  </value>
  <value name="sda">
    <shadow type="math_number">
      <field name="NUM">21</field>
    </shadow>
  </value>
</block>

# sht20_temperature
<block type="sht20_temperature"></block>

# sht20_humidity
<block type="sht20_humidity"></block>

# Ultrasound
<category name="Ultrasound">

# HCSR04 ultrasound distance sensor
<label text="HCSR04 ultrasound distance sensor"></label>
<label text="Library: https://github.com/rsc1975/micropython-hcsr04"></label>
<button text="%{INSTALL_LIBRARY}: HCSR04" callbackKey="installPyLib"></button>

# hcsr_init
<block type="hcsr_init">
  <field name="BLOCK_HCSR_INIT">Start HCSR04 Ultrasound sensor</field>
  <value name="echo">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
  <value name="trigger">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
  <value name="timeout">
    <shadow type="math_number">
      <field name="NUM">10000</field>
    </shadow>
  </value>
</block>
      
# hcsr_read
<block type="hcsr_read"></block>

# GPS
<category name="GPS">
<label text="Global Positioning System (GPS) sensor"></label>
<label text="Library: https://github.com/rafaelaroca/mini_micropyGPS"></label>
<button text="%{INSTALL_LIBRARY}: mini_micropyGPS" callbackKey="installPyLib"></button>

# gps_init
<block type="gps_init">
<value name="uart">
  <shadow type="math_number">
    <field name="NUM">2</field>
  </shadow>
</value>
<value name="tx">
  <shadow type="math_number">
    <field name="NUM">17</field>
  </shadow>
</value>
<value name="rx">
  <shadow type="math_number">
    <field name="NUM">16</field>
  </shadow>
</value>
<value name="bps">
  <shadow type="math_number">
    <field name="NUM">38400</field>
  </shadow>
</value>
</block>

# gps_update
<block type="gps_update"> </block>

# gps_coord_format
<block type="gps_coord_format"> </block>

# gps_get_lat
<block type="gps_get_lat"> </block>

# gps_get_long
<block type="gps_get_long"> </block>

# gps_get_height
<block type="gps_get_height"> </block>

# gps_get_speed
<block type="gps_get_speed"> </block>

# gps_get_date
<block type="gps_get_date"> </block>

# gps_get_time
<block type="gps_get_time"> </block>

# Oximeter
<category name="Oximeter">

# MAX30100 pulse oximeter sensor
<label text="MAX30100 pulse oximeter sensor"></label>
<label text="Library: https://github.com/"></label>
<button text="%{INSTALL_LIBRARY}: MAX30100" callbackKey="installPyLib"></button>

# max30100_init
<block type="max30100_init"></block>

# max30100_read
<block type="max30100_read"></block>

# max30100_red
<block type="max30100_red"></block>

# max30100_ir
<block type="max30100_ir"></block>

# %{PRESS}
<category name="%{PRESS}">

# BMP180
<label text="BMP180"></label>
<label text="Library: https://github.com/micropython-IMU/micropython-bmp180"></label>
<button text="%{INSTALL_LIBRARY}: BMP180" callbackKey="installPyLib"></button>

# bmp180_init
<block type="bmp180_init">
  <value name="scl">
    <shadow type="math_number">
      <field name="NUM">5</field>
    </shadow>
  </value>
  <value name="sda">
    <shadow type="math_number">
      <field name="NUM">4</field>
    </shadow>
  </value>
</block>

# bmp180_temperature
<block type="bmp180_temperature"> </block>

# bmp180_pressure
<block type="bmp180_pressure"> </block>

# bmp180_altitude
<block type="bmp180_altitude"> </block>

# BMP280
<label text="BMP280"></label>
<label text="Library: "></label>
<button text="%{INSTALL_LIBRARY}: BMP280" callbackKey="installPyLib"></button>

# bmp280_init
<block type="bmp280_init">
  <value name="scl">
    <shadow type="math_number">
      <field name="NUM">22</field>
    </shadow>
  </value>
  <value name="sda">
    <shadow type="math_number">
      <field name="NUM">21</field>
    </shadow>
  </value>
</block>

# bmp280_measure
<block type="bmp280_measure"> </block>

# bmp280_sleep
<block type="bmp280_sleep"> </block>

# bmp280_temperature
<block type="bmp280_temperature"> </block>

# bmp280_pressure
<block type="bmp280_pressure"> </block>

# %{AIR}
<category name="%{AIR}">

# CCS811 Air Quality Sensor
<label text="CCS811 Air Quality Sensor"></label>
<label text="Library: https://github.com/Notthemarsian/CCS811"></label>
<button text="%{INSTALL_LIBRARY}: CCS811" callbackKey="installPyLib"></button>

# ccs811_init
<block type="ccs811_init">
  <value name="scl">
    <shadow type="math_number">
      <field name="NUM">22</field>
    </shadow>
  </value>
  <value name="sda">
    <shadow type="math_number">
      <field name="NUM">21</field>
    </shadow>
  </value>
</block>

# ccs811_data_ready
<block type="ccs811_data_ready"> </block>

# ccs811_eCO2
<block type="ccs811_eCO2"> </block>

# ccs811_tVOC
<block type="ccs811_tVOC"> </block>

# %{IMU}
<category name="%{IMU}">

# MPU6050 IMU
<label text="MPU6050 IMU"></label>
<label text="Library: https://github.com/"></label>
<button text="%{INSTALL_LIBRARY}: MPU6050" callbackKey="installPyLib"></button>
<button text="%{LOAD_EXAMPLE}: MPU6050" callbackKey="loadExample"></button>
<button text="Documentation and how to connect: mpu6050" callbackKey="loadDoc"></button>

# init_mpu6050
<block type="init_mpu6050">
	<value name="scl">
    <shadow type="math_number">
      <field name="NUM">5</field>
    </shadow>
  </value>
  <value name="sda">
	  <shadow type="math_number">
	    <field name="NUM">4</field>
	  </shadow>
	</value>
</block>

# mpu6050_read_acc_x
<block type="mpu6050_read_acc_x"></block>

# mpu6050_read_acc_y
<block type="mpu6050_read_acc_y"></block>

# mpu6050_read_acc_z
<block type="mpu6050_read_acc_z"></block>

# mpu6050_read_gyro_x
<block type="mpu6050_read_gyro_x"></block>

# mpu6050_read_gyro_y
<block type="mpu6050_read_gyro_y"></block>

# mpu6050_read_gyro_z
<block type="mpu6050_read_gyro_z"></block>

# MPU9250 IMU
<label text="MPU9250 IMU"></label>
<button text="%{INSTALL_LIBRARY}: MPU9250" callbackKey="installPyLib"></button>
<button text="%{INSTALL_LIBRARY}: MPU6500" callbackKey="installPyLib"></button>
<button text="%{INSTALL_LIBRARY}: AK8963" callbackKey="installPyLib"></button>

# mpu9250_init
<block type="mpu9250_init">
	<value name="scl">
	  <shadow type="math_number">
	   <field name="NUM">22</field>
	  </shadow>
	</value>
	<value name="sda">
	  <shadow type="math_number">
	    <field name="NUM">21</field>
	  </shadow>
	</value>
</block>

# mpu9250_acc
<block type="mpu9250_acc"></block>

# mpu9250_gyro
<block type="mpu9250_gyro"></block>

# mpu9250_mag
<block type="mpu9250_mag"></block>

# mpu9250_temp
<block type="mpu9250_temp"></block>

# OneWire
<category name="OneWire">
<label text="OneWire"></label>
<button text="Load example: ds1820" callbackKey="loadExample"></button>
<button text="Documentation and how to connect: ds1820" callbackKey="loadDoc"></button>

# onewire_ds18x20_init
<block type="onewire_ds18x20_init">
  <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
</block>

# onewire_ds18x20_scan
<block type="onewire_ds18x20_scan"></block>

# onewire_ds18x20_convert
<block type="onewire_ds18x20_convert"></block>

# onewire_ds18x20_read_temp
<block type="onewire_ds18x20_read_temp">
  <value name="rom">
    <shadow type="math_number">
      <field name="NUM">10000</field>
    </shadow>
  </value>
</block>

# RFID Reader
<category name="RFID Reader">
<label text="RC522 13.56MHz RFID Reader"></label>
<label text="Library: https://github.com/wendlers/micropython-mfrc522"></label>
<button text="%{INSTALL_LIBRARY}: MFRC522" callbackKey="installPyLib"></button>
<button text="%{LOAD_EXAMPLE}: MFRC522" callbackKey="loadExample"></button>
<button text="Documentation and how to connect: mfrc522" callbackKey="loadDoc"></button>

# rfid_rc522_init
<block type="rfid_rc522_init">
  <value name="sck">
    <shadow type="pinout">
      <field name="SCK"></field>
    </shadow>
  </value>
  <value name="mosi">
    <shadow type="pinout">
      <field name="MOSI"></field>
    </shadow>
  </value>
   <value name="miso">
    <shadow type="pinout">
      <field name="MISO"></field>
    </shadow>
  </value>
  <value name="rst">
    <shadow type="pinout">
      <field name="RST"></field>
    </shadow>
  </value>
  <value name="cs">
    <shadow type="pinout">
      <field name="RST"></field>
    </shadow>
  </value>
</block>

# rfid_rc522_detect_card
<block type="rfid_rc522_detect_card"></block>

# rfid_rc522_anticoll
<block type="rfid_rc522_anticoll"></block>

# rfid_rc522_read_card
<block type="rfid_rc522_read_card"></block>

# rfid_rc522_write_card
<block type="rfid_rc522_write_card"></block>

# Rotatory Encoder
<category name="Rotatory Encoder">
<label text="Rotatory Incremental Encoder"></label>
<button text="%{LOAD_EXAMPLE}: encoder" callbackKey="loadExample"></button>
<button text="%{DOCUMENTATION}: encoder" callbackKey="loadDoc"></button>

# encoder_init
<block type="encoder_init">
  <value name="p0">
    <shadow type="pinout">
      <field name="ch0"></field>
    </shadow>
  </value>
  <value name="p1">
    <shadow type="pinout">
      <field name="ch1"></field>
    </shadow>
  </value>
</block>

# encoder_reset
<block type="encoder_reset"></block>

# encoder_read
<block type="encoder_read"></block>

# Camera (ESP32CAM)
<category name="Camera (ESP32CAM)">
<label text="OV2640 Camera on ESP32-CAM Board"></label>
<button text="%{LOAD_EXAMPLE}: esp32cam" callbackKey="loadExample"></button>
<label text="More info: https://rafaelaroca.wordpress.com/2021/07/15/esp32-camera-micropython-and-no-esptool/"></label>

# esp32_cam_init
<block type="esp32_cam_init"></block>

# esp32_cam_capture
<block type="esp32_cam_capture"></block>

# esp32_cam_red_led
<block type="esp32_cam_red_led"></block>

# esp32_cam_white_led
<block type="esp32_cam_white_led"></block>

# -
