var MSG = {
  title: "BIPES",
  blocks: "Blocks",
  files: "Files",
  shared: "Shared",
  device: "Device",
  linkTooltip: "Save and link to blocks.",
  runTooltip: "Run the program defined by the blocks in the workspace.",
  badCode: "Program error:\n%1",
  timeout: "Maximum execution iterations exceeded.",
  trashTooltip: "Discard all blocks.",
  catLogic: "Logic",
  catLoops: "Loops",
  catMath: "Math",
  catText: "Text",
  catLists: "Lists",
  catColour: "Colour",
  catVariables: "Variables",
  catFunctions: "Functions",
  listVariable: "list",
  textVariable: "text",
  httpRequestError: "There was a problem with the request.",
  linkAlert: "Share your blocks with this link:\n\n%1",
  hashError: "Sorry, '%1' doesn't correspond with any saved program.",
  xmlError: "Could not load your saved file. Perhaps it was created with a different version of Blockly?",
  badXml: "Error parsing XML:\n%1\n\nSelect 'OK' to abandon your changes or 'Cancel' to further edit the XML.",
  saveTooltip: "Save blocks to file.",
  loadTooltip: "Load blocks from file.",
  notificationTooltip: "Notifications panel.",
  ErrorGET: "Unable to load requested file.",
  invalidDevice: "Invalid device.",
  languageTooltip: "Change language.",
  noToolbox: "The device has no toolbox set.",
  networkTooltip: "Connect through network (WebREPL, http).",
  serialTooltip: "Connect through serial/USB or Bluetooth (Web Serial API, https).",
  toolbarTooltip: "Show toolbar",
  wrongDevicePin: "Check pins, target device changed!",
  notDefined: "not defined",
  editAsFileValue: "Edit as a file",
  editAsFileTooltip: "Edit python code and save to device's filesystem.",
  forumTooltip: "Help forum.",
  accountTooltip: "Your projects and settings.",
  blocksLoadedFromFile: "Blocks loaded from file '%1'.",
  deviceUnavailable: "Device '%1' unavailable.",
  notConnected: "No connection to send data.",
  serialFroozen: "Serial connection is unresponsive.",
  notAvailableFlag: "$1 is not available on your browser.\r\nPlease make sure the $1 flag is enabled.",

  //Blocks
  block_delay: "delay",
  seconds: "seconds",
  milliseconds: "milliseconds",
  microseconds: "microseconds",
  to: "to",
  setpin: "set output pin",
  pin: "pin",
  read_digital_pin: "read digital input",
  read_analog_pin: "read analog input",
  show_iot: "show on IoT tab",
  data: "value",
  set_rtc: "set date and time",
  get_rtc: "get date and time",
  year: "year",
  month: "month",
  day: "day",
  hour: "hour",
  minute: "minute",
  second: "second",
  wifi_scan: "scan wifi networks",
  wifi_connect: "connect to wifi network",
  wifi_name: "network name",
  wifi_key: "key/password",
  easymqtt_start: "EasyMQTT Start",
  easymqtt_publish: "EasyMQTT Publish Data",
  topic: "topic",
  session_id: "session ID",
  file_open: "open File",
  file_name: "file name",
  file_mode: "mode",
  file_binary: "open in binary mode",
  file_close: "close file",
  file_write_line: "write line to file",
  file_line: "line",
  try1: "try",
  exp1: "except",
  ntp_sync: "sync date and time with NTP",
  timezone: "timezone",
  project_info: "Project Info",
  project_info_author: "Author",
  project_info_desc: "Description",
  easymqtt_subscribe: "EasyMQTT subscribe to topic",
  when: "when",
  data_received: "is received",
  easymqtt_receive: "EasyMQTT receive data",
  relay: "relay",
  on: "turn on",
  off: "turn off",
  relay_on: "relay on pin",
  yes: "yes",
  no: "no",
  wait_for_data: "wait for data",
  dht_start: "Start DHT Sensor",
  dht_measure: "update DHT11/22 sensor reading",
  dht_temp: "get DHT11/22 temperature",
  dht_humi: "get DHT11/22 humidity",
  type: "type",

  //Ultrasound
  hcsr_install: "Install HCSR04 library",
  hcsr_init: "Start HCSR04 Ultrasound Sensor",
  hcsr_timeout: "timeout (us)",
  echo_pin: "echo pin",
  trigger_pin: "trigger pin",
  get_distance: "Get distance (Ultrasound sensor)",
  measure_distance: "Measure distance with Ultrasound sensor",

  //BMP180
  pressure: "pressure",
  temperature: "temperature",
  altitude: "altitude",
  bmp180_init: "Init BMP180",

  //SHT20
  init_sht20: "Init SHT20",
  humidity: "humidity",

  //Network
  net_http_get: "HTTP GET Request",
  net_http_get_status: "HTTP Status code",
  net_http_get_content: "HTTP Response content",
  net_http_server_start: "Start HTTP Web Server",
  net_http_server_start_port: "Port",
  net_http_server_wait: "Wait for HTTP Client",
  net_http_server_requested_page: "Requested Web Page",
  net_http_server_send_response: "Send HTTP Response",
  net_http_server_send_html: "HTML",

  // MQTT
  mqtt_init: "Start MQTT Client",
  server_address: "Server Address",
  server_port: "Server Port",
  username: "Username",
  password: "Password",
  mqtt_add_to_buffer: "Add Data to MQTT Buffer",
  field_name: "Field Name",
  value: "Value",
  mqtt_publish_buffer: "Publish Buffer to MQTT Topic",
  mqtt_topic: "Topic",
  qos: "QOS:",
  mqtt_most_once: "0 - at most\u00A0once",
  mqtt_least_once: "1 - at least\u00A0once",
  mqtt_publish_payload: "Publish Payload to MQTT Topic",
  payload: "Payload",
  mqtt_subscribe: "Subscribe to MQTT Topic",
  mqtt_set_callback: "Set Callback to MQTT Messages",
  with: "with",
  received_from: "received from",
  do: "do",
  mqtt_callback_tooltip: "Callback function must have topic and msg parameters",
  mqtt_check_msg: "Check MQTT Server for pending messages",
  mqtt_check_msg_tooltip: "Check if the server has any pending messages. Non-blocking method. Subscription messages will be passed to the callback.",
  mqtt_wait_msg: "Wait for MQTT Server messages",
  mqtt_wait_msg_tooltip: "Wait for server sending any message. Blocking method. Subscription messages will be passed to the callback.",
  mqtt_disconnect: "Disconnect MQTT Client",
  mqtt_disconnect_tooltip: "Disconnect the MQTT Client from Server.",

  //PWM
  pwm_num: "PWM #",
  frequenzy: "Frequency",
  duty_cycle: "Duty Cycle",
  pwm_num_pico: "RPi Pico PWM #",
  pwm_tooltip: "Init and set PWM with frequency (1Hz to 40MHz) and duty (0-1023)",
  pwm_freq_tooltip: "Set PWM frequency from 1Hz to 40MHz",
  pwm_duty_tooltip: "Set PWM duty range of 0-1023",
  pwm_init: "init",
  pwm_init_tooltip: "Init PWM",
  pwm_deinit: "deinit PWM #",

  //NeoPixel
  np_init: "Init NeoPixel",
  np_num_leds: "Number of LEDs",
  np_init_tooltip: "Init NeoPixel on the specified pin",
  np_controll: "Control NeoPixel",
  color: "Color",
  np_controll_tooltip: "Set NeoPixel",
  np_write: "Write NeoPixel",
  red: "Red",
  green: "Green",
  blue: "Blue",
  np_write_tooltip: "Write NeoPixel",
  np_color_tooltip_rgb: "NeoPixel LED RGB Values 0-255",
  np_color_tooltip_picker: "NeoPixel LED Picker, pick a color",
  hue: "Hue",
  saturation: "Saturation",
  lightness: "Lightness",
  np_color_tooltip_HSL: "HUE to RGB color, Hue from 0º to 360º, Saturation and Lightness from 0% to 100%.",

  //I2C Char LCD
  i2c_lcd_init: "Init I2C Character LCD Display",
  i2c_lcd_lines: "Lines",
  i2c_lcd_col: "Columns",
  i2c_lcd_clear: "Clear LCD",
  i2c_lcd_write: "Write text on LCD",
  text: "Text",
  i2c_lcd_move: "Move LCD Cursor to",
  i2c_lcd_backlight: "LCD Backlight",
  i2c_lcd_backlight_tooltip: "Set this to true/false or 1/0",
  i2c_lcd_power: "LCD Power",
  i2c_lcd_power_tooltip: "Set this to true/false or 1/0",

  //RC Servo Motor
  servo_init: "Init RC Servo Motor",
  servo_init_tooltip: "Init RC servo motor",
  servo_move: "Move Servo Motor",
  angle: "Angle",

  //Stepper Motor
  stepper_init: "Init Stepper Motor",
  stepper_step: "Stepper Step",
  steps: "Steps",

  //DC Motor
  dc_motor_init: "Init DC Motor",
  dc_motor_power: "Set DC Motor Power",
  power: "Power",
  dc_motor_dir: "Set DC Motor Direction",
  direction: "Direction",
  dc_motor_stop: "Stop DC Motor",

  //Sound
  sound_tone: "Tone (Hz)",
  sound_duration: "Duration (s):",
  sound_infinite: "(0 for infinite duration)",
  sound_tone_tooltip: "Sound - tone generator",
  sound_note: "Play music note",
  note: "Note",
  sound_note_tooltip: "Sound - tone generator (music note)",
  rtttl_play: "Play song (RTTTL)",
  song: "Song",

  //Splash screen
  splash_welcome: "Welcome to BIPES!",
  splash_footer: "Do not show this screen again",
  splash_close: "Close",
  splash_message: "<p><b>BIPES: Block based Integrated Platform for Embedded Systems</B> allows text and block based programming for several types of embedded systems and Internet of Things modules using MicroPython, CircuitPython, Python or Snek. You can connect, program, debug and monitor several types of boards using network, USB or Bluetooth. Please check a list of <a href=https://bipes.net.br/wp/boards/>compatible boards here</a>. Compatible boards include STM32, ESP32, ESP8266, Raspberry Pi Pico and even Arduino.  <p><b>BIPES</b> is fully <a href=https://bipes.net.br/wp/development/>open source</a> and based on HTML and JavaScript, so no software install or configuration is needed and you can use it offline! We hope BIPES is useful for you and that you can enjoy using BIPES. If you need help, we now have a <a href=https://github.com/BIPES/BIPES/discussions>discussion forum</a>, where we also post <a href=https://github.com/BIPES/BIPES/discussions/categories/announcements>new features and announcements about BIPES</a>. Feel free to use it! Also, we invite you to use the forum to leave feedbacks and suggestions for BIPES!</p><p>Now you can easily load MicroPython on your ESP32 or ESP8226 to use with BIPES: <a href=https://bipes.net.br/flash/esp-web-tools/>https://bipes.net.br/flash/esp-web-tools/</a></p><p>Checkout BIPES Book at <a href=https://bipes.net.br/wp/book-livro/>https://bipes.net.br/wp/book-livro/</a></p> <p>Thank you from the BIPES Team!</p>"



};

//Toolbox categories
Blockly.Msg['CAT_TIMING'] = "Timing";
Blockly.Msg['CAT_MACHINE'] = "Machine";
Blockly.Msg['CAT_DISPLAYS'] = "Displays";
Blockly.Msg['CAT_SENSORS'] = "Sensors";
Blockly.Msg['CAT_OUTPUTS'] = "Outputs / Actuators";
Blockly.Msg['CAT_COMM'] = "Communication";
Blockly.Msg['CAT_TEMP_HUMI'] = "Temperature and Humidity";
Blockly.Msg['CAT_PRESS'] = "Pressure";
Blockly.Msg['CAT_FILES'] = "Files";
Blockly.Msg['CAT_NET'] = "Network and Internet";
Blockly.Msg['CAT_CONTROL'] = "Control";
Blockly.Msg['CAT_IMU'] = "Inertial Measurement";
Blockly.Msg['CAT_AIR'] = "Air Quality";
Blockly.Msg['CAT_ULTRASOUND'] = "Ultrasound";
Blockly.Msg['CAT_NEO'] = "NeoPixel LED Strip";
Blockly.Msg['CAT_CHAR_DISP'] = "Character display";
Blockly.Msg['CAT_RELAY'] = "Relay";
Blockly.Msg['CAT_SERVO'] = "RC Servo Motor";
Blockly.Msg['CAT_STEPPER'] = "Stepper Motor";
Blockly.Msg['CAT_DC_MOTOR'] = "DC Motor";

//Toolbox Text
Blockly.Msg['TXT_ULTRASOUND_DESCRIPTION'] = "HCSR04 ultrasound distance sensor";
Blockly.Msg['TXT_ULTRASOUND_LIB'] = "Install HCSR04 library";
Blockly.Msg['TXT_SERVO_DESCRIPTION'] = "Hobby RC Servo Motor";
Blockly.Msg['TXT_STEPPER_DESCRIPTION'] = "Stepper Motor";
Blockly.Msg['TXT_DC_MOTOR_DESCRIPTION'] = "DC Motor";
