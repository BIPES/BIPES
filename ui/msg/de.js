var MSG = {
  title: "BIPES",
  blocks: "Bausteine",
  files: "Dateien",
  shared: "Teilen",
  device: "Gerät",
  linkTooltip: "Link zum Projekt erstellen.",
  runTooltip: "Das Programm ausführen, das von den Bausteinen im Arbeitsbereich definiert ist.",
  badCode: "Programmfehler:\n%1",
  timeout: "Die maximalen Ausführungswiederholungen wurden überschritten.",
  trashTooltip: "Alle Bausteine verwerfen.",
  catLogic: "Logik",
  catLoops: "Schleifen",
  catMath: "Mathematik",
  catText: "Text",
  catLists: "Listen",
  catColour: "Farbe",
  catVariables: "Variablen",
  catFunctions: "Funktionen",
  listVariable: "Liste",
  textVariable: "Text",
  httpRequestError: "Mit der Anfrage gab es ein Problem.",
  linkAlert: "Teile dein Projekt mit dem Link aus der Adresszeile:\n\n%1",
  hashError: "„%1“ stimmt leider mit keinem gespeicherten Programm überein.",
  xmlError: "Deine gespeicherte Datei konnte nicht geladen werden. Vielleicht wurde sie mit einer anderen Version von Blockly erstellt.",
  badXml: "Fehler beim Parsen von XML:\n%1\n\nWähle 'OK' zum Verwerfen deiner Änderungen oder 'Abbrechen' zum weiteren Bearbeiten des XML.",
  saveTooltip: "Projekt in Datei speichern.",
  loadTooltip: "Projekt aus Datei laden.",
  notificationTooltip: "Benachritigungen.",
  ErrorGET: "Datei kann nicht geladen werden.",
  invalidDevice: "Gerät ungültig.",
  languageTooltip: "Sprache wechseln / Change language / cambiar lenguage.",
  noToolbox: "Das Gerät hat keine Toolbox.",
  networkTooltip: "Über Netzwerk verbinden (WebREPL, HTTP).",
  serialTooltip: "Über USB oder Bluetooth verbinden (Web Serial API, HTTPS).",
  toolbarTooltip: "Werkzeugleiste anzeigen",
  wrongDevicePin: "Gerät wurde gewechselt, Bitte Pinzuweisung überprüfen!",
  notDefined: "nicht definiert",
  editAsFileValue: "Als Datei bearbeiten",
  editAsFileTooltip: "Python Code bearbeiten und auf dem Gerät speichern.",
  forumTooltip: "Hilfe im Diskussionsforum.",
  accountTooltip: "Eigene Projekte und Einstellungen.",
  blocksLoadedFromFile: "Blöcke aus Datei '%1'.",
  deviceUnavailable: "Gerät '%1' nicht verfügbar.",
  notConnected: "Es besteht keine Datenverbindung.",
  serialFroozen: "Serielle Verbindung antwortet nicht.",
  notAvailableFlag: "$1 ist nicht verfügbar in Ihrem Browser.\r\nBitte sicherstellen, dass das $1 Flag aktiviert ist.",

  //Blocks
  block_delay: "warte",
  seconds: "Sekunden",
  milliseconds: "Millisekunden",
  microseconds: "Mikrosekunden",
  to: "zu",
  setpin: "setze Ausgang",
  pin: "Pin",
  read_digital_pin: "lese digitalen Eingang",
  read_analog_pin: "lese analogen Eingang",
  show_iot: "zeige im IoT Tab",
  data: "Wert",
  set_rtc: "setze Datum und Uhrzeit",
  get_rtc: "hole Datum und Uhrzeit",
  year: "Jahr",
  month: "Monat",
  day: "Tag",
  hour: "Stunde",
  minute: "Minute",
  second: "Sekunde",
  wifi_scan: "WLAN-Netze suchen",
  wifi_connect: "mit WLAN-Netz verbinden",
  wifi_name: "Netzwerkname",
  wifi_key: "Netzwerkschlüssel / Passwort",
  easymqtt_start: "EasyMQTT Starten",
  easymqtt_publish: "EasyMQTT veröffentliche Daten",
  easymqtt_subscribe: "EasyMQTT abboniere Topic",
  easymqtt_receive: "EasyMQTT empfange Daten",
  easymqtt_disconnect: "EasyMQTT trennen",
  topic: "Topic",
  session_id: "Session ID",
  file_open: "Datei öffnen",
  file_name: "Dateiname",
  file_mode: "Modus",
  file_binary: "in Binärmodus öffnen",
  file_close: "Datei schließen",
  file_write_line: "Zeile in Datei schreiben",
  file_line: "Zeile",
  try1: "versuche",
  exp1: "falls Fehler",
  ntp_sync: "Synchronisiere Datum und Uhrzeit mit NTP",
  timezone: "Zeitzone",
  project_info: "Projektinfo",
  project_info_author: "Autor",
  project_info_desc: "Beschreibung",
  when: "wann",
  data_received: "wurde empfangen",
  relay: "Relais",
  on: "einschalten",
  off: "ausschalten",
  relay_on: "Relais am Pin",
  yes: "ja",
  no: "nein",
  wait_for_data: "warte auf Daten",
  dht_start: "starte DHT Sensor",
  dht_measure: "aktualisiere DHT11/22 Sensor Messung",
  dht_temp: "hole DHT11/22 Temperatur",
  dht_humi: "hole DHT11/22 Luftfeuchtigkeit",
  type: "Typ",

  //Ultrasound
  hcsr_install: "Installiere HCSR04 Bibliothek",
  hcsr_init: "Starte HCSR04 Ultraschall Sensor",
  hcsr_timeout: "Time-out (us)",
  echo_pin: "Echo Pin",
  trigger_pin: "Trigger Pin",
  get_distance: "Messe Abstand (Ultraschall sensor)",
  measure_distance: "Messe Abstände mit dem Ultraschall sensor",

  //BMP180
  pressure: "Luftdruck",
  temperature: "Temperatur",
  altitude: "Seehöhe",
  bmp180_init: "Initialisiere BMP180",

  //SHT20
  init_sht20: "Initialisiere SHT20",
  humidity: "Luftfeuchtigkeit",

  //Network
  net_http_get: "HTTP GET Request",
  net_http_get_status: "HTTP Statuscode",
  net_http_get_content: "HTTP Response Inhalt",
  net_http_server_start: "Starte HTTP Web Server",
  net_http_server_start_port: "Port",
  net_http_server_wait: "Warte auf HTTP Client",
  net_http_server_requested_page: "Angeforderte Webseite",
  net_http_server_send_response: "Sende HTTP Response",
  net_http_server_send_html: "HTML",

  // MQTT
  mqtt_init: "Starte MQTT Client",
  server_address: "Server Addresse",
  server_port: "Server Port",
  username: "Benutzername",
  password: "Passwort",
  mqtt_add_to_buffer: "Füge Daten zu MQTT Buffer hinzu",
  field_name: "Feld Name",
  value: "Wert",
  mqtt_publish_buffer: "Veröffentliche Buffer in MQTT Topic",
  mqtt_topic: "Topic",
  qos: "QOS:",
  mqtt_most_once: "0 - maximal\u00A0einmal",
  mqtt_least_once: "1 - mindestend\u00A0einmal",
  mqtt_publish_payload: "Veröffentliche Payload in MQTT Topic",
  payload: "Payload",
  mqtt_subscribe: "Abboniere MQTT Topic",
  mqtt_set_callback: "Setze Callback für MQTT Nachrichten",
  with: "mit",
  received_from: "erhalte von",
  do: "mache",
  mqtt_callback_tooltip: "Callback Funktionen müssen ein Topic und Nachrichten Parameter haben",
  mqtt_check_msg: "Frage MQTT Server nach ausstehenden Nachrichten",
  mqtt_check_msg_tooltip: "Frage den Server ob er ausstehende Nachrichten hat. Nicht-blockierende Methode. Abbonierte Nachrichten werden an die Callback Funktion weitergegeben.",
  mqtt_wait_msg: "Warte auf Nachrichten von MQTT Server",
  mqtt_wait_msg_tooltip: "Warte auf Nachrichten vom Server. Blockierende Methode. Abbonierte Nachrichten werden an die Callback Funktion weitergegeben.",
  mqtt_disconnect: "Trenne Verbindung des MQTT Client",
  mqtt_disconnect_tooltip: "Trenne die Verbindung des MQTT Clienten vom Server.",

  //PWM
  pwm_num: "PWM #",
  frequency: "Frequenz",
  duty_cycle: "Duty Cycle",
  pwm_num_pico: "RPi Pico PWM #",
  pwm_tooltip: "Initialisiere und aktiviere PWM mit einer Frequenz (1Hz bis 40MHz) und Duty Cycle (0-1023)",
  pwm_freq_tooltip: "Bestimme PWM Frequenz von 1Hz bis 40MHz",
  pwm_duty_tooltip: "Bestimme PWM Duty Cycle 0-1023",
  pwm_init: "Initalisieren",
  pwm_init_tooltip: "Initialisiert PWM",
  pwm_deinit: "Deinitialisiere PWM #",

  //NeoPixel
  np_init: "Initialisiere NeoPixel",
  np_num_leds: "Anzahl der LEDs",
  np_init_tooltip: "Initialisiere NeoPixel an spezifischem Pin",
  np_controll: "Steuere NeoPixel",
  color: "Farbe",
  np_controll_tooltip: "Stelle eine beliebige Farbe für ein Pixel ein",
  np_write: "Schreibe NeoPixel",
  red: "Rot",
  green: "Grün",
  blue: "Blau",
  np_write_tooltip: "Schreibt die Daten auf NeoPixel Bus und aktualisiert die Pixel",
  np_color_tooltip_rgb: "Wähle eine Farbe mit RGB Werten (0-255) ein",
  np_color_tooltip_picker: "Wähle eine beliebige Farbe für ein Pixel",
  hue: "Farbton",
  saturation: "Sättigung",
  lightness: "Helligkeit",
  np_color_tooltip_HSL: "Wähle eine Farbe mit HSL Werten. Farbton von 0º bis 360º, Sättigung und Helligkeit von 0% bis 100%.",

  //I2C Char LCD
  i2c_lcd_init: "Initialisiere I2C LCD Display",
  i2c_lcd_lines: "Zeilen",
  i2c_lcd_col: "Spalten",
  i2c_lcd_clear: "Lösche LCD",
  i2c_lcd_write: "Schreibe Text auf LCD",
  text: "Text",
  i2c_lcd_move: "Bewege den LCD Cursor zu Punkt",
  i2c_lcd_backlight: "LCD Hintergrundbeleuchtung",
  i2c_lcd_backlight_tooltip: "Setze den Wert auf wahr/falsch oder 1/0",
  i2c_lcd_power: "LCD Power",
  i2c_lcd_power_tooltip: "Setze den Wert auf wahr/falsch oder 1/0",

  //RC Servo Motor
  servo_init: "Initialisiere RC Servo Motor",
  servo_init_tooltip: "Initialisiere RC servo motor",
  servo_move: "Bewege Servo Motor",
  angle: "Winkel",

  //Stepper Motor
  stepper_init: "Initialisiere Schrittmotor",
  stepper_step: "Bewege Schrittmotor",
  steps: "Schritte",

  //DC Motor
  dc_motor_init: "Initialisiere DC Motor",
  dc_motor_power: "Stelle Strom ein",
  power: "Strom",
  dc_motor_dir: "Stelle Richtung des DC Motors ein",
  direction: "Richtung",
  dc_motor_stop: "Stoppe DC Motor",

  //Sound
  sound_tone: "Ton (Hz)",
  sound_duration: "Dauer (s):",
  sound_infinite: "(0 für unendlich lange Dauer)",
  sound_tone_tooltip: "Sound - Ton Generator",
  sound_note: "Spiele Note",
  note: "Note",
  sound_note_tooltip: "Sound - Ton Generator (Musik Note)",
  rtttl_play: "Spiele Lied (RTTTL)",
  song: "Lied",


  //Splash screen
  splash_welcome: "Willkommen bei BIPES",
  splash_footer: "Dieses Fenster nicht mehr anzeigen",
  splash_close: "Schließen",
  splash_message: "<p><b>BIPES (Block based Integrated Platform for Embedded Systems)</B> erlaubt blockbasierte Programmierung für verschiedene eingebetteter Systeme und IoT-Module mit Hilfe von MicroPython, CircuitPython, Python oder Snek. Es ist möglich sich mit verschiedenen Arten von Boards zu verbinden, sie zu programmieren, zu debuggen und sie zu überwachen, wahlweise über Netzwerk, USB oder Bluetooth. Kompatible Boards sind unter anderem STM32, ESP32, ESP8266, Raspberry Pi Pico und sogar Arduino. <a href=https://bipes.net.br/wp/boards/>Die Liste der kompatible Boards findest du hier</a>. <p><b>BIPES</b> ist vollständig <a href=https://bipes.net.br/wp/development/>Open Source</a> und basiert auf HTML und JavaScript, sodass keine Software installiert werden muss und auch offline gearbeitet werden kann! Wir hoffen BIPES ist nützlich für dich und dass du viel Spaß damit hast. Falls du Hilfe brauchst, haben wir jetzt <a href=https://github.com/BIPES/BIPES/discussions> ein Diskussionsforum</a>, wo wir auch über <a href=https://github.com/BIPES/BIPES/discussions/categories/announcements>neue Features berichten und Neuigkeiten ankündigen</a>. Du bist eingeladen es auch zu benutzen, zum Beispiel für Feedback oder Verbesserungsvorschläge! </p><p>Es ist jetzt auch möglich MicroPython direkt vom Browser aus auf deinen ESP32 oder ESP8266 zu flashen um BIPES benutzen zu können: <a href=https://bipes.net.br/flash/esp-web-tools/>https://bipes.net.br/flash/esp-web-tools/</a></p> <p>Viele Dank vom BIPES Team!</p>"

};

//Toolbox categories
Blockly.Msg['CAT_TIMING'] = "Zeit";
Blockly.Msg['CAT_MACHINE'] = "Gerät";
Blockly.Msg['CAT_DISPLAYS'] = "Displays";
Blockly.Msg['CAT_SENSORS'] = "Sensoren";
Blockly.Msg['CAT_OUTPUTS'] = "Ausgänge / Aktuatoren";
Blockly.Msg['CAT_COMM'] = "Kommunikation";
Blockly.Msg['CAT_TEMP_HUMI'] = "Temperatur und Luftfeuchtigkeit";
Blockly.Msg['CAT_PRESS'] = "Luftdruck";
Blockly.Msg['CAT_FILES'] = "Dateien";
Blockly.Msg['CAT_NET'] = "Netzwerk und Internet";
Blockly.Msg['CAT_CONTROL'] = "Regelung";
Blockly.Msg['CAT_IMU'] = "Trägheitsmessung";
Blockly.Msg['CAT_AIR'] = "Luftqualität";
Blockly.Msg['CAT_ULTRASOUND'] = "Ultraschall";
Blockly.Msg['CAT_NEO'] = "NeoPixel LED Streifen";
Blockly.Msg['CAT_CHAR_DISP'] = "LCD Display";
Blockly.Msg['CAT_RELAY'] = "Relais";
Blockly.Msg['CAT_SERVO'] = "RC Servo Motor";
Blockly.Msg['CAT_STEPPER'] = "Schrittmotor";
Blockly.Msg['CAT_DC_MOTOR'] = "DC Motor";

//Toolbox Text
Blockly.Msg['TXT_ULTRASOUND_DESCRIPTION'] = "HCSR04 Ultraschall Abstandssensor";
Blockly.Msg['TXT_ULTRASOUND_LIB'] = "Installiere HCSR04 Bibliothek";
Blockly.Msg['TXT_SERVO_DESCRIPTION'] = "Hobby RC Servo Motor";
Blockly.Msg['TXT_STEPPER_DESCRIPTION'] = "Schrittmotor";
Blockly.Msg['TXT_DC_MOTOR_DESCRIPTION'] = "DC Motor";
//%{BKY_CAT_CHAR_DISP}