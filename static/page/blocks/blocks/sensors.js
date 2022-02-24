// %{TEMP_HUMI} ----------------------------------------------------------------
// DHT11/22 --------------------------------------------------------------------
Blockly.Blocks['dht_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(
                     "static/page/blocks/images/dht.png",
                     55,
                     55,
                     "*"))
        .appendField(Msg["dht_start"]);
    this.appendDummyInput()
        .appendField(Msg['type'])
        .appendField(new Blockly.FieldDropdown([
                     ['DHT11', 'DHT11'],
                     ['DHT22', 'DHT22']
        ]), 'DHT_TYPE');
    this.appendValueInput("pin")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable(Msg["pin"]), "DHT_PIN_Msg");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Start DHT11 ou DHT22 sensor");
    this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['dht_measure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable(Msg["dht_measure"]), "Msg_MEASURE_DHT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Measure DHT11/22 Sensor");
    this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['dht_read_temp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable(Msg["dht_temp"]), "Msg_READ_DHT_TEMP");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("Read DHT11/22 Temperature");
    this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['dht_read_humidity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable(Msg["dht_humi"]), "Msg_READ_DHT_HUMI");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("Read DHT11/22 Humidity");
    this.setHelpUrl("http://www.bipes.net.br");
  }
};


// SHT20 I2C  ------------------------------------------------------------------
Blockly.Blocks['sht20_init'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField(Msg["init_sht20"]);

    this.appendValueInput("scl")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SCL");

    this.appendValueInput("sda")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SDA");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['sht20_temperature'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SHT20 " + Msg["temperature"]);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Temperature from the SHT20 sensor");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['sht20_humidity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SHT20 " + Msg["humidity"]);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Humidity from the SHT20 sensor");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

// Ultrasound ------------------------------------------------------------------
// HCSR04 ultrasound distance sensor -------------------------------------------
Blockly.Blocks['hcsr_init'] = {
  init: function() {


 this.appendDummyInput()
      .appendField(new Blockly.FieldImage(
        "static/page/blocks/images/hcsr04.png",
        55,
        55,
        "*"))
      .appendField("Start HCSR04 Ultrasound sensor")
	  ;

    this.appendValueInput("echo")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("echo pin"), "DHT_PIN_Msg");


    this.appendValueInput("trigger")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("trigger pin"), "DHT_PIN_Msg");


    this.appendValueInput("timeout")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("timeout (us)"), "DHT_PIN_Msg");


    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Start HCSR04 ultrasound distance sensor");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['hcsr_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Get distance (ultrasound sensor)"), "Msg_READ_DHT_TEMP");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Measure distance with ultrasound sensor");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

// GPS Module ------------------------------------------------------------------
Blockly.Blocks['gps_init'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Init GPS Module");

 this.appendDummyInput()
      .appendField(new Blockly.FieldImage(
        "static/page/blocks/images/ublox_gps.png",
        55,
        55,
        "*"));
        //.setAlign(Blockly.ALIGN_CENTRE);

    this.appendValueInput("uart")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("UART");

    this.appendValueInput("tx")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("TX");

    this.appendValueInput("rx")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("RX");

    this.appendValueInput("bps")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Baud Rate");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['gps_update'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Update GPS Readings");

    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  }
};

Blockly.Blocks['gps_get_lat'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("GPS Latitude");

    this.setOutput(true);

    this.setTooltip('');
  }
};

Blockly.Blocks['gps_get_long'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("GPS Longitude");

    this.setOutput(true);

    this.setTooltip('');
  }
};

Blockly.Blocks['gps_get_height'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("GPS Altitude");

    this.setOutput(true);

    this.setTooltip('');
  }
};

Blockly.Blocks['gps_get_speed'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("GPS Speed");

    this.setOutput(true);

    this.setTooltip('');
  }
};

Blockly.Blocks['gps_get_date'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("GPS Date");

    this.setOutput(true);

    this.setTooltip('');
  }
};

Blockly.Blocks['gps_coord_format'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("GPS Coordinate Format ")
        .appendField(new Blockly.FieldDropdown([["Decimal Degrees (DD)","dd"], ["Degree Minute Second (DMS)","dms"]]), "format");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['gps_get_time'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("GPS Timestamp");

    this.setOutput(true);

    this.setTooltip('');
  }
};

// Oximeter --------------------------------------------------------------------
// MAX30100 --------------------------------------------------------------------
Blockly.Blocks['max30100_init'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Init MAX30100 Sensor");

 this.appendDummyInput()
      .appendField(new Blockly.FieldImage(
        "static/page/blocks/images/max30100.png",
        55,
        55,
        "*"));
        //.setAlign(Blockly.ALIGN_CENTRE);

    this.appendValueInput("scl")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SCL");

    this.appendValueInput("sda")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SDA");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['max30100_read'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Update MAX30100 Reading");

    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  }
};


Blockly.Blocks['max30100_red'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Get MAX30100 Red Value");

    this.setOutput(true);

    this.setTooltip('');
  }
};

Blockly.Blocks['max30100_ir'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Get MAX30100 IR Value");

    this.setOutput(true);

    this.setTooltip('');
  }
};

// BMP180 ----------------------------------------------------------------------
Blockly.Blocks['bmp180_init'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField(Msg["bmp180_init"]);

    this.appendValueInput("scl")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SCL");

    this.appendValueInput("sda")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SDA");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['bmp180_temperature'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Msg["temperature"]);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Temperature from the BMP180 sensor");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['bmp180_pressure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Msg["pressure"]);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Pressure from the BMP180 sensor");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['bmp180_altitude'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Msg["altitude"]);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Altitude from the BMP180 sensor");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

// BMP280 ----------------------------------------------------------------------
Blockly.Blocks['bmp280_init'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Init BMP280");

    this.appendValueInput("scl")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SCL");

    this.appendValueInput("sda")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SDA");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['bmp280_temperature'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Msg["temperature"]);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Temperature from the BMP280 sensor");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['bmp280_pressure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Msg["pressure"]);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Pressure from the BMP280 sensor");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['bmp280_altitude'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Msg["altitude"]);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Altitude from the BMP280 sensor");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['bmp280_measure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("BMP280 Measure");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bmp280_sleep'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("BMP280 Sleep");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// CCS811 Air Quality Sensor ---------------------------------------------------
Blockly.Blocks['ccs811_init'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Init CCS811");

    this.appendValueInput("scl")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SCL");

    this.appendValueInput("sda")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SDA");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['ccs811_data_ready'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("CCS811 Data Ready");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Air Quality Sensor CCS811 Data Ready");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['ccs811_eCO2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("CCS811 CO2");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Air Quality Sensor CCS811 CO2 reading");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['ccs811_tVOC'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("CCS811 tVOC");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Air Quality Sensor CCS811 VOC reading");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

// MPU6050 ---------------------------------------------------------------------
Blockly.Blocks['init_mpu6050'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Init MPU6050 IMU");


 this.appendDummyInput()
      .appendField(new Blockly.FieldImage(
        "static/page/blocks/images/mpu6050.png",
        55,
        55,
        "*"));
        //.setAlign(Blockly.ALIGN_CENTRE);

    this.appendValueInput("scl")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SCL");

    this.appendValueInput("sda")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SDA");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['mpu6050_read_acc_x'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Acceleration - X axis"), "MSG_READ_MPU6050");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Acceleration on X axis");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};



Blockly.Blocks['mpu6050_read_acc_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Acceleration - Y axis"), "MSG_READ_MPU6050");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Acceleration on Y axis");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};


Blockly.Blocks['mpu6050_read_acc_z'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Acceleration - Z axis"), "MSG_READ_MPU6050");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Acceleration on Z axis");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};


Blockly.Blocks['mpu6050_read_gyro_x'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Gyro - X axis"), "MSG_READ_MPU6050");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Gyro on X axis");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};



Blockly.Blocks['mpu6050_read_gyro_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Gyro - Y axis"), "MSG_READ_MPU6050");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Gyro on Y axis");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};


Blockly.Blocks['mpu6050_read_gyro_z'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Gyro - Z axis"), "MSG_READ_MPU6050");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Gyro on Z axis");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

// MPU9250 ---------------------------------------------------------------------
Blockly.Blocks['mpu9250_init'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Init MPU9250");

    this.appendValueInput("scl")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SCL");

    this.appendValueInput("sda")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SDA");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['mpu9250_acc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MPU9250 Acceleration");
    this.setOutput(true, null);
    this.setColour(230);
    this.setHelpUrl("");
  }
};

Blockly.Blocks['mpu9250_gyro'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MPU9250 Gyro rate");
    this.setOutput(true, null);
    this.setColour(230);
    this.setHelpUrl("");
  }
};

Blockly.Blocks['mpu9250_mag'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MPU9250 Magnetometer");
    this.setOutput(true, null);
    this.setColour(230);
    this.setHelpUrl("");
  }
};

Blockly.Blocks['mpu9250_temp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MPU9250 Temperature");
    this.setOutput(true, null);
    this.setColour(230);
    this.setHelpUrl("");
  }
};


// OneWire ---------------------------------------------------------------------
// DS1820 ----------------------------------------------------------------------
Blockly.Blocks['onewire_ds18x20_init'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Init OneWire Bus");

    this.appendValueInput("pin")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("GPIO");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['onewire_ds18x20_scan'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Scan DS1820 sensors");

    this.setOutput(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['onewire_ds18x20_convert'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Trigger DS1820 reading");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['onewire_ds18x20_read_temp'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("DS1820 Temperature reading");

    this.appendValueInput("rom")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ID");

    this.setOutput(true, null);
    this.setTooltip('');
  }
};

// RC522 RFID Reader -----------------------------------------------------------
Blockly.Blocks['rfid_rc522_init'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Init RC522 RFID Module");

 this.appendDummyInput()
      .appendField(new Blockly.FieldImage(
        "static/page/blocks/images/RC522.jpg",
        55,
        55,
        "*"));
        //.setAlign(Blockly.ALIGN_CENTRE);

    this.appendValueInput("sck")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SCK");

    this.appendValueInput("mosi")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("MOSI");

    this.appendValueInput("miso")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("MISO");

    this.appendValueInput("rst")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("RST");

    this.appendValueInput("cs")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CS");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['rfid_rc522_detect_card'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Check if RFID Card is present");

    this.appendValueInput("stat")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("status");

    this.appendValueInput("tag")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("tag");


    //this.setOutput(true);

    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  }
};

Blockly.Blocks['rfid_rc522_anticoll'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Get card identification (UID)");

    this.appendValueInput("stat")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("status");

    this.appendValueInput("tag")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("tag");


    //this.setOutput(true);

    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  }
};

Blockly.Blocks['rfid_rc522_read_card'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Read RFID Card Memory");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['rfid_rc522_write_card'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Write RFID Card Memory");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

// Rotatory Encoder ------------------------------------------------------------
Blockly.Blocks['encoder_init'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Init Rotatory Encoder");


 this.appendDummyInput()
      .appendField(new Blockly.FieldImage(
        "static/page/blocks/images/encoder.png",
        55,
        55,
        "*"));
        //.setAlign(Blockly.ALIGN_CENTRE);


    this.appendValueInput("p0")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ch0");

    this.appendValueInput("p1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ch1");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['encoder_reset'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Reset Encoder");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['encoder_read'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Read Encoder Value");

    this.setOutput(true);

    this.setTooltip('');
  }
};

// Camera (ESP32CAM) -----------------------------------------------------------
Blockly.Blocks['esp32_cam_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ESP32-CAM Init");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("Init ESP32-CAM camera");
 this.setHelpUrl("www.bipes.net.br");
  }
};

Blockly.Blocks['esp32_cam_capture'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ESP32-CAM capture photo");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("Take photo with ESP32-CAM camera");
 this.setHelpUrl("www.bipes.net.br");
  }
};

Blockly.Blocks['esp32_cam_red_led'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Control ESP32-CAM red LED");
    this.appendValueInput("value")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Control ESP32-CAM Red LED");
 this.setHelpUrl("bipes.net.br");
  }
};



Blockly.Blocks['esp32_cam_white_led'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Control ESP32-CAM flashlight");
    this.appendValueInput("value")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Control ESP32-CAM White LED (flashlight)");
 this.setHelpUrl("bipes.net.br");
  }
};

