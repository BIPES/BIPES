// Page blocks (blockly)
Blockly.Msg["LOGIC"] = "Logic";
Blockly.Msg["LOOPS"] = "Loops";
Blockly.Msg["MATH"] = "Math";
Blockly.Msg["TEXT"] = "Text";
Blockly.Msg["LISTS"] = "Lists";
Blockly.Msg["VARIABLES"] = "Variables";
Blockly.Msg["FUNCTIONS"] = "Functions";
Blockly.Msg["TIMING"] = "Timing";
Blockly.Msg["MACHINE"] = "Maskin";
Blockly.Msg["DISPLAYS"] = "Skjermer";
Blockly.Msg['SENSORS'] = "Sensorer";
Blockly.Msg['OUTPUTS'] = "Ut-enheter / Aktuatorer";
Blockly.Msg['SOUNDS'] = "Lyder";
Blockly.Msg['COMM'] = "Kommunikasjon";
Blockly.Msg['TEMP_HUMI'] = "Temperatur og fuktighet";
Blockly.Msg['PRESS'] = "Trykk";
Blockly.Msg['FILES'] = "Filer";
Blockly.Msg['NET'] = "Nettverk og Internet";
Blockly.Msg['CONTROL'] = "Kontroll";
Blockly.Msg['SIMULATE'] = "Simulate";
Blockly.Msg['IMU'] = "Treghetsmåling";
Blockly.Msg['AIR'] = "Luftkvalitet";
Blockly.Msg['INSTALL_LIBRARY'] = "Install library";
Blockly.Msg['DOCUMENTATION'] = "Documentation";
Blockly.Msg['DOCUMENTATION_HOW'] = "Documentation and how to connect";
Blockly.Msg['LOAD_EXAMPLE'] = "Load example";

var Msg = {
  // Pages names
  'PageBlocks':'Blokker',
  'PageDevice':'Enhet',
  'PageFiles':'Filer',
  'PageNotification':'Messages',
  'PageProject':'Projects',
  'PagePrompt':'Console',
  'PageDashboard':'Dashboard',
  'PageFreeboard':'Freeboard',

  // Common actions
  'Download':'Download',
  'Remove':'Remove',
  'Delete':'Delete',
  'Write':'Write',
  'WriteToDevice':'Write to device',
  'Rename':'Rename',
  'New':'New',
  'Share':'Share',
  'UpdateShared':'Update shared',
  'Unshare':'Unshare',
  'Upload':'Upload',
  'Import':'Import',
  'Filename':'Filename',
  'eg':"eg.",
  Copy:'Kopiere',
  ClearAll:'Clear all',
  
  // Channel
  NotConnectedWarning:'No connection established with a device.',

  // Page Files
  'FileManager':'File manager',
  'HideShowProjectTree':'Hide/show project tree',
  'DirectoriesNotExistMapped':"Some directories don't exist or haven't been mapped.",
  'NewFolder':'New folder',
  'NewFile':'New file',
  'UploadFile':'Upload file',
  'RemoveFolder':'Remove folder',
  'ExecuteScript':'Execute script',
  'ScriptFinishedExecuting':'Script finished executing!',
  'Empty':'Empty',
  'FileNotExist':"File don't exist.",
  'FileAlreadyExist':'File "{0}" already exist in path "{1}".',
  'FolderAlreadyExist':'Folder "{0}" already exist in path "{1}".',
  'NewFilename':"New filename",
  'NewFolderName':"New folder name",
  'ProjectName':'Project name',
  'my_script':"my_script",
  'my_examples':"my_examples",
  'CreatePathFileBeforeSaving':'Create paths or file for "{0}" before saving to project.',
  'SaveToProject':'Save to project',
  'ProjectFiles':'Project files',
  'DeviceFiles':'Device files',
  'CouldNotRemoveFolder':'Could not remove folder "{0}/{1}".',
  'FolderNotEmpty':'Folder "{0}/{1}" not empty, can\'t be removed.',
  'CreateScriptHere':'# Create your "{0}" script here',
  WritingFile:'Writing file "{0}" to device.',

  // Page Blocks
  'ViewBlocksCode':'View/hide blocks\' generated code',
  'BlocksEditAsFile':'Copy script and edit',
  'RunBlocks':'Run blocks in the device.',
  'BlocksPy':'blocks.py',
  FetchingLib:'Installing {0} library...',
  FetchingExample:'Fetching example {0}...',

  // Page Device
  'Unknown':'unknown',
  'ConnectedDevice':'Connected device',
  'NotConnected':'not connected',
  'NoConnectedLong':'No connected device, connect below!',
  'NewConnection':'New connection',
  'NotSupported':'Not supported',
  'ChangeTargetAnytime':'Change the project\'s target device at anytime.',
  'Disconnect':'Disconnect',
  'GetInfo':'Get info',
  'TargetDevice':'Project\'s target device',
  'TargetFirmware':'Project\'s target firmware',
  'ConnectedDevices':'Connected devices',
  'UsingThisDevice':'Using this device',
  'OnThisTab':'On this tab',
  'OnOtherTab':'On other tab',
  'DeviceUnresponsive':'Device {0} version {1} is unresponsive, consider resetting it.',
  BaudRate:'Baud Rate',
  'Address':'Address',
  'Password':'Password',
  'DevicePassword':'Device\'s password',
  'DeviceAddress':'Device\'s address',
  'WSWarning':'Only wss works in https',
  'Connect':'Connect',
  'ScanDevices':'Scan devices',
  'ScanPattern':'Scan network for addresses like:',
  'StartScan':'Start scan',
  'InvalidPrefix':'Invalid network prefix',
  'ScanningInfo':'Scanned {0} of {1} IPs, found {2}:',
  'DoneScanning':'Done scanning {0} IPs, found {1}:',
  ReconnectOnLost:'Reconnect if connection is lost',

  // Status bar
  'TasksRunning':'Tasks running',
  'StatusOngoingInput':'Ongoing input',
  'StatusReady':'Ready',
  'StatusWorking':'Doing {0} tasks',
  'StatusWorkingOne':'Doing 1 task',
  ChangeTheme:'Change to dark/light theme',
  'Language':'Language',

  // Page Project
  'NewWebSocket':'New WebSocket connection',
  HelloUser:'Hello, ',
  'YourProjects':'Your projects',
  'SharedProjects':'Shared projects',
  'By':'By',
  'AUser':'a user',
  'EditedAt':'Edited at',
  'EmptyProject':'Empty project',
  'LoadMore':'Load more',
  'NoOlderProjects':'No older shared projects',
  'SharedProjectDoesNotExist':'Shared project does not exist anymore',
  ProjectFromURL:'Shared project from link',
  ClickToImport:'Tap to import to your projects',

  // Page Notification
  'Forum':'Forum',
  NewsAndAbout:'News and about',
  NoNotification:'There is no notifications',

  // Page Prompt
  'ClearConsole':'Clear console',
  'ResetDevice':'Reset device',
  'StopExecution':'Stop execution',
  'StopTimers':'Stop timers',
  'DeviceInfo':'Device info',
  BridgeDataToEasyMQTT:'Bridge data to EasyMQTT',

  // Page Dashboard
  'DashboardName':'Dashboard name',
  'Dashboard':'Dashboard',
  'Session':'Session',
  'MQTTSession':'MQTT session',
  'NewDashboard':'New dashboard',
  'EditData':'Edit data',
  'AddWidget':'Add widget',
  'EditDashboard':'Edit dashboard',
  'DashboardName':'Dashboard\'s name',
  'DismissPlugin':'Dismiss widget',
  'DeleteData':'Deleta data',
  'DownloadCSV':'Download CSV',
  'DragMe':'Drag me',

  //Blocks
  //Pinout
  'DeviceChangedCheckPins':'Sjekk pinner, målenheten er endret!',
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

  //BMP180
  pressure: "trykk",
  temperature: "temperatur",
  altitude: "høyde",
  bmp180_init: "Initiere BMP180",

  //SHT20
  init_sht20: "Initiere SHT20",
  humidity: "luftfuktighet",

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

  //Splash screen
  splash_welcome: "Velkommen til BIPES!",
  splash_footer: "Ikke vise denne skjermen igjen",
  splash_close: "Lukk",
  splash_message: "<p><b>BIPES: Blokkbasert Integrasjon for koblede systemer</B> Tillater tekst og blokkbasert programmering på forskjellige typer koblede systemer og IoT (Internet of Things)-moduler ved hjelp av MicroPython, CircuitPython, Python eller Snek. You kan koble, programmer, feilsøke og monitorere forskjellige kretskort via nettverk, USB eller Bluetooth. Sjekk listen over <a href=https://bipes.net.br/wp/boards/>kompatible kort her</a>. Kompatible kort inkluderer STM32, ESP32, ESP8266, Raspberry Pi Pico og til og med Arduino.  <p><b>BIPES</b> er fullstendig <a href=https://bipes.net.br/wp/development/>open source</a> og basert på HTML og JavaScript, så man trenger ikke installere eller konfigurere noe. Du kan også bruke det offline! Vi håper BIPES er nyttig for deg, og at du vil like og bruke BIPES. Hvis du trenger hjelp, så har vi et <a href=https://github.com/BIPES/BIPES/discussions>diskusjonsforum</a>, der vi også poster <a href=https://github.com/BIPES/BIPES/discussions/categories/announcements>nye funksjoner og kunngjøringer for BIPES</a>. Ta en kikk!Vi inviterer deg også til å bruke forumet til å legge igjen feedback og forslag for BIPES!</p><p>Nå kan du lett laste inn MicroPython på din ESP32 eller ESP8226 for å bruke med BIPES: <a href=https://bipes.net.br/flash/esp-web-tools/>https://bipes.net.br/flash/esp-web-tools/</a></p><p>Sjekk BIPES-boken her <a href=https://bipes.net.br/wp/book-livro/>https://bipes.net.br/wp/book-livro/</a></p> <p>Takk fra BIPES Teamet!</p>"
};
