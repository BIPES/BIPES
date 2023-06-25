var MSG = {
  title: "BIPES",
  blocks: "Blokker",
  files: "Filer",
  shared: "Delt",
  device: "Enhet",
  linkTooltip: "Lagre og linke til blokker.",
  runTooltip: "Kjør programmet definert med blokkene i arbeidsområdet.",
  badCode: "Programmfeil:\n%1",
  timeout: "Maks antall kjøringer overskredet.",
  trashTooltip: "Forkaste alle blokker.",
  catLogic: "Logikk",
  catLoops: "Looper",
  catMath: "Matematikk",
  catText: "Tekst",
  catLists: "Lister",
  catColour: "Farge",
  catVariables: "Variabler",
  catFunctions: "Funksjoner",
  listVariable: "liste",
  textVariable: "tekst",
  httpRequestError: "Det var en feil med forespørselen.",
  linkAlert: "Del blokkene dine med denne linken:\n\n%1",
  hashError: "Beklager, '%1' korresponderer ikke til noe lagret programm.",
  xmlError: "Kunne ikke laste den lagrede filen. Kanskje den er laget med en annen versjn av Blockly?",
  badXml: "Feil ved lesing av XML:\n%1\n\nVelg 'OK' for å forkaste endringenen  eller 'Cancel' for å fremdeles endre XML.",
  saveTooltip: "Lagre blokker til fil.",
  loadTooltip: "Laste blokker fra fil.",
  notificationTooltip: "Varslingspanel.",
  ErrorGET: "Klarte ikke å laste den ønskede filen.",
  invalidDevice: "Ugyldig enhet.",
  languageTooltip: "Endre språk.",
  noToolbox: "Enheten har ingen verktøysskrin definert.",
  networkTooltip: "Koble til via nettverk (WebREPL, http).",
  serialTooltip: "Koble til via seriell/USB eller Bluetooth (Web Serial API, https).",
  toolbarTooltip: "Vis verktøyslinje",
  wrongDevicePin: "Sjekk pinner, målenheten er endret!",
  notDefined: "ikke definert",
  editAsFileValue: "Editere som en fil",
  editAsFileTooltip: "Editere pythonkode og lagre til enhetens filsystem.",
  forumTooltip: "Hjelp-forum.",
  accountTooltip: "Dine prosjekter og innstillinger.",
  blocksLoadedFromFile: "Blokker lastet fra fil '%1'.",
  deviceUnavailable: "Enhet '%1' er utilgjengelig.",
  notConnected: "Ingen forbindelse for å sende data.",
  serialFroozen: "Seriellforbindelsen er ikke responsiv.",
  notAvailableFlag: "$1 er ikke tilgjengelig i nettleseren din.\r\nVennligst sjekk at $1 flagget er på.",

  //Blocks
  block_delay: "forsinkelse",
  seconds: "sekunder",
  milliseconds: "millisekunder",
  microseconds: "mikrosekunder",
  to: "til",
  setpin: "sett output-pin",
  pin: "pin",
  read_digital_pin: "les digital input",
  read_analog_pin: "les analog input",
  show_iot: "show on IoT tab",
  data: "verdi",
  set_rtc: "Sett tid og dato",
  get_rtc: "Hent tid og dato",
  year: "år",
  month: "måned",
  day: "dag",
  hour: "time",
  minute: "minutt",
  second: "sekund",
  wifi_scan: "Søk etter wifi nettverk",
  wifi_connect: "koble til wifi nettverk",
  wifi_name: "nettverksnavn",
  wifi_key: "nøkkel/passord",
  easymqtt_start: "EasyMQTT Start",
  easymqtt_publish: "EasyMQTT Publisere data",
  topic: "emne",
  session_id: "sesjonsID",
  file_open: "Åpne fil",
  file_name: "filnavn",
  file_mode: "modus",
  file_binary: "åpne i binært modus",
  file_close: "lukke fil",
  file_write_line: "skriv linje til fil",
  file_line: "linje",
  try1: "prøv",
  exp1: "unntatt",
  ntp_sync: "synkroniser tid og dato med NTP",
  timezone: "tidssone",
  project_info: "Prosjektinfo",
  project_info_author: "Forfatter",
  project_info_desc: "Beskrivelse",
  easymqtt_subscribe: "EasyMQTT abonnere til emne",
  when: "når",
  data_received: "er motatt",
  easymqtt_receive: "EasyMQTT motta data",
  relay: "rele",
  on: "slå på",
  off: "slå av",
  relay_on: "rele på pin",
  yes: "ja",
  no: "nei",
  wait_for_data: "vent på data",
  dht_start: "Start DHT Sensor",
  dht_measure: "oppdatere DHT11/22 sensor-innlesning",
  dht_temp: "hent DHT11/22 temperatur",
  dht_humi: "hent DHT11/22 luftfuktighet",
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
  pressure: "trykk",
  temperature: "temperatur",
  altitude: "høyde",
  bmp180_init: "Initiere BMP180",

  //SHT20
  init_sht20: "Init SHT20",
  humidity: "humidity",


  //Network
  net_http_get: "HTTP GET forespørsel",
  net_http_get_status: "HTTP Statuskode",
  net_http_get_content: "HTTP svarinnhold",
  net_http_server_start: "Start HTTP Web Server",
  net_http_server_start_port: "Port",
  net_http_server_wait: "Vent på HTTP Client",
  net_http_server_requested_page: "Forespurt webside",
  net_http_server_send_response: "Send HTTP svar",
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
  splash_welcome: "Velkommen til BIPES!",
  splash_footer: "Ikke vise denne skjermen igjen",
  splash_close: "Lukk",
  splash_message: "<p><b>BIPES: Blokkbasert Integrasjon for koblede systemer</B> Tillater tekst og blokkbasert programmering på forskjellige typer koblede systemer og IoT (Internet of Things)-moduler ved hjelp av MicroPython, CircuitPython, Python eller Snek. You kan koble, programmer, feilsøke og monitorere forskjellige kretskort via nettverk, USB eller Bluetooth. Sjekk listen over <a href=https://bipes.net.br/wp/boards/>kompatible kort her</a>. Kompatible kort inkluderer STM32, ESP32, ESP8266, Raspberry Pi Pico og til og med Arduino.  <p><b>BIPES</b> er fullstendig <a href=https://bipes.net.br/wp/development/>open source</a> og basert på HTML og JavaScript, så man trenger ikke installere eller konfigurere noe. Du kan også bruke det offline! Vi håper BIPES er nyttig for deg, og at du vil like og bruke BIPES. Hvis du trenger hjelp, så har vi et <a href=https://github.com/BIPES/BIPES/discussions>diskusjonsforum</a>, der vi også poster <a href=https://github.com/BIPES/BIPES/discussions/categories/announcements>nye funksjoner og kunngjøringer for BIPES</a>. Ta en kikk!Vi inviterer deg også til å bruke forumet til å legge igjen feedback og forslag for BIPES!</p><p>Nå kan du lett laste inn MicroPython på din ESP32 eller ESP8226 for å bruke med BIPES: <a href=https://bipes.net.br/flash/esp-web-tools/>https://bipes.net.br/flash/esp-web-tools/</a></p><p>Sjekk BIPES-boken her <a href=https://bipes.net.br/wp/book-livro/>https://bipes.net.br/wp/book-livro/</a></p> <p>Takk fra BIPES Teamet!</p>"



};

//Toolbox categories
Blockly.Msg['CAT_TIMING'] = "Timing";
Blockly.Msg['CAT_MACHINE'] = "Maskin";
Blockly.Msg['CAT_DISPLAYS'] = "Skjermer";
Blockly.Msg['CAT_SENSORS'] = "Sensorer";
Blockly.Msg['CAT_OUTPUTS'] = "Ut-enheter / Aktuatorer";
Blockly.Msg['CAT_COMM'] = "Kommunikasjon";
Blockly.Msg['CAT_PRESS'] = "Trykk";
Blockly.Msg['CAT_FILES'] = "Filer";
Blockly.Msg['CAT_NET'] = "Nettverk og Internet";
Blockly.Msg['CAT_CONTROL'] = "Kontroll";
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
