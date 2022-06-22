// Page blocks (blockly)
Blockly.Msg["LOGIC"] = "逻辑";
Blockly.Msg["LOOPS"] = "循环";
Blockly.Msg["MATH"] = "数学";
Blockly.Msg["TEXT"] = "文本";
Blockly.Msg["LISTS"] = "列表";
Blockly.Msg["VARIABLES"] = "变量";
Blockly.Msg["FUNCTIONS"] = "函数";
Blockly.Msg["TIMING"] = "Timing";
Blockly.Msg["MACHINE"] = "Machine";
Blockly.Msg["DISPLAYS"] = "Displays";
Blockly.Msg['SENSORS'] = "Sensors";
Blockly.Msg['OUTPUTS'] = "Outputs / Actuators";
Blockly.Msg['SOUNDS'] = "声音";
Blockly.Msg['COMM'] = "Communication";
Blockly.Msg['TEMP_HUMI'] = "Temperature and Humidity";
Blockly.Msg['PRESS'] = "Pressure";
Blockly.Msg['FILES'] = "Files";
Blockly.Msg['NET'] = "Network and Internet";
Blockly.Msg['CONTROL'] = "Control";
Blockly.Msg['SIMULATE'] = "Simulate";
Blockly.Msg['IMU'] = "Inertial Measurement";
Blockly.Msg['AIR'] = "Air Quality";
Blockly.Msg['INSTALL_LIBRARY'] = "Install library";
Blockly.Msg['DOCUMENTATION'] = "Documentation";
Blockly.Msg['DOCUMENTATION_HOW'] = "Documentation and how to connect";
Blockly.Msg['LOAD_EXAMPLE'] = "Load example";

var Msg = {
  // Pages names
  'PageBlocks':'块',
  'PageDevice':'设备',
  'PageFiles':'文件',
  'PageNotification':'留言',
  'PageProject':'项目',
  'PagePrompt':'安慰',
  'PageDashboard':'仪表板',
  'PageFreeboard':'Freeboard',

  // Common actions
  'Download':'下载',
  'Remove':'消除',
  'Delete':'删除',
  'Write':'写',
  'WriteToDevice':'写入设备',
  'Rename':'改名',
  'New':'新的',
  'Share':'分享',
  'UpdateShared':'更新共享',
  'Unshare':'取消分享',
  'Upload':'上传',
  'Import':'进口',
  'Filename':'文件名',
  'eg':"例如",
  Copy:'复制',
  ClearAll:'全部清除',
  
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
  'ProjectFiles':'项目文件',
  'DeviceFiles':'设备文件',
  'CouldNotRemoveFolder':'Could not remove folder "{0}/{1}".',
  'FolderNotEmpty':'Folder "{0}/{1}" not empty, can\'t be removed.',
  'CreateScriptHere':'# Create your "{0}" script here',
  FetchingLib:'Writing file "{0}" to device.',

  // Page Blocks
  'ViewBlocksCode':'View/hide blocks\' generated code',
  'BlocksEditAsFile':'复制脚本并编辑',
  'RunBlocks':'Run blocks in the device.',
  'BlocksPy':'blocks.py',

  // Page Device
  'Unknown':'unknown',
  'ConnectedDevice':'Connected device',
  'NotConnected':'未连接',
  'NoConnectedLong':'No connected device, connect below!',
  'NewConnection':'New connection',
  'NotSupported':'Not supported',
  'ProjectTarget':'Project\'s target device',
  'ChangeTargetAnytime':'Change the project\'s target device at anytime.',
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
  'NewWebSocket':'New WebSocket connection',

  ReconnectOnLost:'Reconnect if connection is lost',
  // Status bar
  'TasksRunning':'Tasks running',
  'StatusOngoingInput':'Ongoing input',
  'StatusReady':'Ready',
  'StatusWorking':'Doing {0} tasks',
  'StatusWorkingOne':'Doing 1 task',
  ChangeTheme:'Change to dark/light theme',
  'Language':'语言',

  // Page Project
  'YourProjects':'Your projects',
  'SharedProjects':'Shared projects',
  HelloUser:'Hello, ',
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

  // Page Dashboard
  BridgeDataToEasyMQTT:'Bridge data to EasyMQTT',
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
  'DeviceChangedCheckPins':'Check pins, target device changed!',
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

  //Splash screen
  splash_welcome: "Welcome to BIPES!",
  splash_footer: "Do not show this screen again",
  splash_close: "Close",
  splash_message: "<p><b>BIPES: Block based Integrated Platform for Embedded Systems</B> allows text and block based programming for several types of embedded systems and Internet of Things modules using MicroPython, CircuitPython, Python or Snek. You can connect, program, debug and monitor several types of boards using network, USB or Bluetooth. Please check a list of <a href=https://bipes.net.br/wp/boards/>compatible boards here</a>. Compatible boards include STM32, ESP32, ESP8266, Raspberry Pi Pico and even Arduino.  <p><b>BIPES</b> is fully <a href=https://bipes.net.br/wp/development/>open source</a> and based on HTML and JavaScript, so no software install or configuration is needed and you can use it offline! We hope BIPES is useful for you and that you can enjoy using BIPES. If you need help, we now have a <a href=https://github.com/BIPES/BIPES/discussions>discussion forum</a>, where we also post <a href=https://github.com/BIPES/BIPES/discussions/categories/announcements>new features and announcements about BIPES</a>. Feel free to use it! Also, we invite you to use the forum to leave feedbacks and suggestions for BIPES!</p><p>Now you can easily load MicroPython on your ESP32 or ESP8226 to use with BIPES: <a href=https://bipes.net.br/flash/esp-web-tools/>https://bipes.net.br/flash/esp-web-tools/</a></p> <p>Thank you from the BIPES Team!</p>"
};

