var MSG = {
  title: "BIPES",
  blocks: "Blocks",
  files: "Files",
  shared: "Shared",
  device: "Device",
  linkTooltip: "Save and link to blocks.",
  microPythonTooltip: 'Install MicroPython',
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
  catVariables: "Created variables",
  catFunctions: "Created functions",
  listVariable: "list",
  textVariable: "text",
  cattextVariable: "Text",
  catbooleanVariable: "Bolean",
  catnumericVariable: "Numeric",
  catlistVariable: "List",
  cattextFuncions: "Text",
  catlistFunctions: "Lists",
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
  microseconds: "microseconds",
  nanoseconds: "nanoseconds",
  cpu_ticks: "CPU cycles",
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
  wifi_name: "Network name",
  wifi_key: "Key/password",
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
  easymqtt_disconnect_title: "EasyMQTT stop",
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
  start_thread: "start parallel task with function",

  //categoria temporizador
  get: "get counter in",
  counter: "counter",
  by: "by",
  by2: "to",
  sum_time: "add time",
  diff_time: "time difference from",
  timer: "timer n°",
  do_timer: "execute",
  every_timer: "every",
  once_in: "once in",
  until_deadline: "until deadline nº",
  of: "of",
  do: "execute",
  stop_timer: "stop timer",
  deep_sleep: "deep sleep",

  //Categoria Comunicação
  //Bluetooth
  configure_bluetooth: "Configure and start Bluetooth with name",
  handle_ble: "Set received bluetooth data to",
  check_ble: "Check received data",
  configure_data_plotter: "Configure plotter for sensors",
  call_format_plotter: "Send data to the plotter",
  bluetooth_name: "myBluetooth",

  //espnow
  initialize_wlan_title: "Prepare to get MAC address",
  get_mac_address_title: "Get MAC Address of Amado Board",
  set_master_title: "Configure Amado Board as Master",
  add_peer_title: "Add Device by MAC Address",
  receive_message_title: "Receive Messages from Devices",
  set_peer_title: "Set Amado Board as Secondary Device",
  send_message_to_peer_title: "Send Message to Device by MAC",
  send_message_title: "Send Message to Master Device",
  receive_message_master_title: "Receive Messages from Master Device",
  variable_list: "Variable list",
  add_variable_container: "Add variable",
  variable_name: "Variable name",
  variable_value: "Variable value ",
  if: "If",
  is_none: "is None, set",
  default_value: "to default value",

  //Blocos lógica
  math_min_title: "Minimum between",
  math_max_title: "Maximum between",
  and: "and",
  //Blocos operadores
  var_to_int_title: "To int",
  var_to_float_title: "To float",

  //Blocos para funções de texto
  to_string_title: "To text",

  //Blocos para as funções da categoria Python
  os_error: "Except OSError",

  //Blocos para os pinos de entrada/saida
  analog_amado_board: "Read analog input",
  attenuation: "Attenuation: ",
  width: "Width: ",
  frequency: "Frequency",
  frequency2: "frequency",
  duty: "Duty",
  init_pwm: "init",
  deinit_pwm: "Deactivate PWM #",
  pins: "pins",
  external_event: "External event (interrupt on input pin)",
  trigger: "Trigger: ",
  irq_falling: "IRQ_FALLING",
  irq_rising: "IRQ_RISING",
  both: "IRQ_FALLING and IRQ_RISING",

  //Sensor ultrassônico
  hcsr04_title: "Initialize HCSR04 ultrasonic sensor",
  get_distance_hcsr04: "Get distance",
  echo_pin: "Echo pin",
  trigger_pin: "Trigger pin",
  timeout_hcsr04: "Timeout (μs)",
  //acelerometro e giroscopio
  mpu6050_init: "Initialize MPU6050 accelerometer and gyroscope sensor",
  mpu6050_read_acc_x: "Read acceleration on X axis",
  mpu6050_read_acc_y: "Read acceleration on Y axis",
  mpu6050_read_acc_z: "Read acceleration on Z axis",
  mpu6050_read_gyro_x: "Read angular velocity on X axis",
  mpu6050_read_gyro_y: "Read angular velocity on Y axis",
  mpu6050_read_gyro_z: "Read angular velocity on Z axis",
  
  //Leitor RFID
  rfid_rc522_init_title: "Initialize RFID MFRC522 Reader",
  rfid_rc522_detect_card_title: "Check if RFID Card is present",
  rfid_rc522_anticoll_title: "Get card identification (UID)",
  rfid_rc522_read_card_title: "Read RFID Card Memory",
  rfid_rc522_write_card_title: "Write RFID Card Memory",

  //Display OLED
  init_oled_title: "Init I2C SSD1306 OLED Display",
  fill_oled_title: "Fill OLED Display with",
  clear_oled_title: "Clear OLED Display",
  show_oled_title: "Update OLED Display",
  write_oled_title: "Write text on display",
  write_oled_int_title: "Print value on display",
  x_position: "X Position",
  y_position: "Y Position",
  value_display: "Value",

  //Servo motor
  init_servo_title: "Init servo motor",
  init_servo_name: "Servo name:",
  init_servo_pin: "Pin",
  move_servo_title: "Move servo motor",
  move_servo_name: "Servo name",
  move_servo_angle: "Angle",
  no_servos: "No servos",

  //DC motor
  dc_motor_init_title: "Init DC Motor",
  dc_motor_pwm_label: "PWM",
  dc_motor_dir1_label: "Direction 1",
  dc_motor_dir2_label: "Direction 2",
  dc_motor_name_label: "Motor Name: ",
  dc_motor_power_title: "Set DC Motor Power  -",
  dc_motor_power_label: "Power",
  dc_motor_direction_title: "Set DC Motor Direction  -",
  dc_motor_direction_label: "Direction",
  dc_motor_stop_title: "Stop DC Motor",
  
  //Buzzer
  tone_title: "Play buzzer on",
  note_title: "Play buzzer on",
  rttl_play_title: "Play music",
  duration_label: "duration (s): ",
  duration_label2: "(0 for infinite duration)",
  note_label: "note",
  frequency_label: "frequency",
  songs_label: "Song:",
  melody_label: "melody",

  //Bluetooth REPL
  bluetooth_repl_start_title: "Start REPL over Web Bluetooth",
  bluetooth_repl_setup_title: "Setup REPL over Web Bluetooth",
  bluetooth_name_label: "Bluetooth name:",
  
  //Wifi
  net_ap_mode_title: "Configure Access Point Mode",
  net_network_name_label: "Network name",
  net_network_key_label: "Network password",
  net_ifconfig_title: "Wifi current IP",

  //Cliente HTTP
  Make_HTTP_POST_Request_URL_title: "Make HTTP POST Request - URL",


    
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
  net_http_server_close_title: "Close HTTP web server",

//Splash screen
  splash_welcome: "Welcome to DBLOCKS!",
  splash_footer: "Do not show this screen again",
  splash_close: "Close",
  splash_message: "<p><b>Dblocks: An Educational Platform for Block-Based Programming</b> enables programming of embedded systems and Internet of Things (IoT) devices in a practical and intuitive way, using blocks or code. Currently, the platform is optimized for the Amado Board, based on the ESP32 chip, but it also supports programming ESP32 devices directly, without complications.</p><p>To get started, it is necessary to flash the MicroPython firmware onto the device. Use our tool for direct installation via your browser: <a href='https://amadomaker.github.io/Instalador_Micropython/'>MicroPython Installer</a>.</p><p>Dblocks is a solution created by Amado Maker, a company focused on educational technology, aiming to simplify the teaching of programming and electronics.</p><p>We appreciate your interest and hope that Dblocks will be a useful and inspiring tool for your educational projects!</p>",


  // Music
  music: "Music",
  saveMelody: "Save Melody",
  importMelody: "Import Melody",
  exportMelody: "Export Melody",
  melodyName: "Melody name",
  cancel: "Cancel", 
  save: "Save",
  import: "Import", 
  export: "Export",
  saveAMelody: "Save a melody", 
  importAMelody: "Import a melody", 
  exportAMelody: "Export a melody",
  
  saveSpriteTitle: "Save a sprite",
  spriteNameLabel: "Sprite name",
  saveDesign: "Save design",
  columns: "Columns",
  rows: "Rows",
};

//Toolbox categories
Blockly.Msg['CAT_CONTROL'] = "Control";
Blockly.Msg['CAT_LOOPS'] = "Loops";
Blockly.Msg['CAT_TIMING'] = "Timing";
Blockly.Msg['CAT_INOUT'] = "Input/output pins";
Blockly.Msg['CAT_DISPLAYS'] = "Displays";
Blockly.Msg['CAT_SENSORS'] = "Sensors";
Blockly.Msg['CAT_OUTPUTS'] = "Outputs / Actuators";
Blockly.Msg['CAT_COMM'] = "Communication";
Blockly.Msg['CAT_FILES'] = "Files";
Blockly.Msg['CAT_NET'] = "Network and Internet";
Blockly.Msg['CAT_OPERATORS'] = "Operators";
Blockly.Msg['CAT_VARIABLES'] = "Variables";
Blockly.Msg['CAT_FUNCTIONS'] = "Functions";
Blockly.Msg['CAT_DHT11/22'] = "Temperature and humidity";
Blockly.Msg['CAT_ULTRASONIC'] = "Ultrasonic";
Blockly.Msg['CAT_ACCELEROMETER'] = "Accelerometer and Gyroscope";
Blockly.Msg['CAT_RFID'] = "RFID reader";
Blockly.Msg['CAT_OLEDDISPLAY'] = "OLED display";
Blockly.Msg['CAT_RELAY'] = "Relay module";
Blockly.Msg['CAT_SERVO'] = "Servo motor";
Blockly.Msg['CAT_DCMOTOR'] = "DC motor";
Blockly.Msg['CAT_BUZZER'] = "Buzzer";
Blockly.Msg['CAT_WIFI'] = "Wifi";
Blockly.Msg['CAT_HTTPCLIENT'] = "HTTP client";
Blockly.Msg['CAT_HTTPSERVER'] = "HTTP server";
Blockly.Msg['INSTALL_LIBRARY'] = "Install library:"
Blockly.Msg['PINOUT_LEGEND'] = "Input and Output Pins";
Blockly.Msg['DHT_SENSOR_LEGEND'] = "DHT11/22 Temperature and Humidity Sensor";
Blockly.Msg['HCSR04_LEGEND'] = "HCSR04 Ultrasonic Distance Sensor";
Blockly.Msg['LIBRARY_LEGEND'] = "Library";
Blockly.Msg['MPU6050_LEGEND'] = "MPU-6050 Accelerometer and Gyroscope";
Blockly.Msg['MFRC522_LEGEND'] = "RFID Reader MFRC522";
Blockly.Msg['RELAY_LEGEND'] = "Relay";
Blockly.Msg['SOUND_LIBRARIES_LEGEND'] = "Libraries needed to play sounds";
Blockly.Msg['USER_CREATED_MUSIC_LEGEND'] = "User-created music";
Blockly.Msg['LIBRARY_SONGS_LEGEND'] = "Available songs from the songs library";
Blockly.Msg['LOW_CONSUMPTION_LEGEND'] = "Low consumption";
Blockly.Msg['BLUEFRUIT_CONNECT_COMPATIBLE_LEGEND'] = "Compatible with the 'Bluefruit Connect' app available in app stores";
Blockly.Msg['DOWNLOAD_APP_LEGEND'] = "Download the app";
Blockly.Msg['BLUETOOTH_TERMINAL_LEGEND'] = "This block allows access to the terminal/console using Bluetooth, as well as enabling programming to be sent directly to the device via Bluetooth.";
Blockly.Msg['INSTALL_THREE_FILES_LEGEND'] = "You need to install 3 files to use";
Blockly.Msg['USAGE_LEGEND'] = "Usage";
Blockly.Msg['INSTALL_THREE_FILES_ABOVE_LEGEND'] = "Install the 3 files above";
Blockly.Msg['START_WEB_BLUETOOTH_REPL_LEGEND'] = "Start the Web Bluetooth REPL";
Blockly.Msg['PAIR_AMADO_BOARD_LEGEND'] = "Pair the Amado board with your device";
Blockly.Msg['ACCESS_LEGEND'] = "Access";
Blockly.Msg['SELECT_BLUETOOTH_CONNECT_LEGEND'] = "Select the Bluetooth option and Connect (Web Bluetooth)";
Blockly.Msg['ESP_NOW_PROTOCOL_LEGEND'] = "ESP-NOW communication protocol";
Blockly.Msg['ESP_NOW_COMMUNICATION_LEGEND'] = "Enables wireless communication between Amado board devices.";
Blockly.Msg['FEATURES_LEGEND'] = "Features";
Blockly.Msg['HIGH_SPEED_LOW_LATENCY_LEGEND'] = "High speed and low latency";
Blockly.Msg['P2P_COMMUNICATION_NO_WIFI_LEGEND'] = "Peer-to-peer communication without the need for Wi-Fi";
Blockly.Msg['REQUIREMENTS_LEGEND'] = "Requirements";
Blockly.Msg['ESP_NOW_RANGE_CONFIG_LEGEND'] = "Devices must be close (20m to 50m) and properly configured.";
Blockly.Msg['WIFI_CONFIG_BLOCKS_LEGEND'] = "Blocks to configure Wi-Fi.";
Blockly.Msg['WIFI_AP_CLIENT_SUPPORT_LEGEND'] = "Includes support for Access Point (AP) mode and Wi-Fi Client mode.";
Blockly.Msg['WIFI_SCAN_CONNECT_IP_LEGEND'] = "Allows connecting, scanning networks, and obtaining the current IP.";
Blockly.Msg['HTTP_REQUEST_BLOCKS_LEGEND'] = "Blocks to make HTTP requests (GET/POST).";
Blockly.Msg['HTTP_API_CONNECT_SEND_LEGEND'] = "Use to connect to APIs and retrieve or send data.";
Blockly.Msg['HTTP_SERVER_BLOCKS_LEGEND'] = "Blocks to configure an HTTP server that responds to web page or data requests.";
Blockly.Msg['HTTP_SERVER_IOT_LEGEND'] = "Allows creating simple servers to access information via a browser or integrate IoT devices.";
Blockly.Msg['MQTT_CONFIG_LEGEND'] = "Configure MQTT connections for IoT, publish, and receive data.";
Blockly.Msg['EASYMQTT_TAB_LEGEND'] = "Monitor results in the EasyMQTT tab.";
Blockly.Msg['DOCUMENTATION_LEGEND'] = "Documentation";
Blockly.Msg['LOAD_EXAMPLE_LEGEND'] = "Load example";
Blockly.Msg['REQUIRED_LIBRARY_LEGEND'] = "Required library";





