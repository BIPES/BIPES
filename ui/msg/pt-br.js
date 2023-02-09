var MSG = {
  title: "BIPES Beta",
  blocks: "Blocos",
  files: "Arquivos",
  shared: "Compartilhado",
  device: "Dispositivo",
  linkTooltip: "Salvar e ligar aos blocos.",
  runTooltip: "Execute o programa definido pelos blocos na área de trabalho.",
  badCode: "Erro no programa:\n%1",
  timeout: "Máximo de iterações de execução excedido.",
  trashTooltip: "Descartar todos os blocos.",
  catLogic: "Lógica",
  catLoops: "Laços",
  catMath: "Matemática",
  catText: "Texto",
  catLists: "Listas",
  catColour: "Cor",
  catVariables: "Variáveis",
  catFunctions: "Funções",
  listVariable: "lista",
  textVariable: "texto",
  httpRequestError: "Houve um problema com a requisição.",
  linkAlert: "Compartilhe seus blocos com este link:\n\n%1",
  hashError: "Desculpe, '%1' não corresponde a um programa salvo.",
  xmlError: "Não foi possível carregar seu arquivo salvo. Talvez ele tenha sido criado com uma versão diferente do Blockly?",
  badXml: "Erro de análise XML:\n%1\n\nSelecione 'OK' para abandonar suas mudanças ou 'Cancelar' para editar o XML.",
  saveTooltip: "Salvar blocos para arquivo.",
  loadTooltip: "Carregar blocos de arquivo.",
  notificationTooltip: "Painel de notificações.",
  ErrorGET: "O arquivo solicitado não carregou.",
  invalidDevice: "Aparelho inválido.",
  languageTooltip: "Mudar idioma.",
  noToolbox: "O aparelho não possui toolbox definida.",
  networkTooltip: "Conectar via rede (WebREPL, http).",
  serialTooltip: "Conectar via serial/USB ou Bluetooth (Web Serial API, https).",
  toolbarTooltip: "Mostrar barra de ferramentas",
  wrongDevicePin: "Verifique os pinos, o aparelho alvo mudou!",
  notDefined: "não definido",
  editAsFileValue: "Editar como arquivo",
  editAsFileTooltip: "Editar código python e salvar para a memória do aparelho.",
  forumTooltip: "Fórum de ajuda.",
  accountTooltip: "Tus proyectos y escenarios.",
  blocksLoadedFromFile: "Blocos carregados do arquivo '%1'.",
  deviceUnavailable: "Aparelho '%1' indisponível.",
  notConnected: "No connection to send data.",
  serialFroozen: "Serial connection is unresponsive.",
  notAvailableFlag: "$1 is not available on your browser.\r\nPlease make sure the $1 flag is enabled.",

//Blocos
  block_delay: "esperar",
  seconds: "segundos",
  milliseconds: "milisegundos",
  microseconds: "microsegundos",
  to: "para",
  setpin: "ajustar pino de saida",
  pin: "pino",
  read_digital_pin: "ler entrada digital",
  read_analog_pin: "ler entrada analógica",
  show_iot: "mostrar na aba IoT ",
  data: "valor",
  set_rtc: "ajustar data e hora",
  get_rtc: "obter data e hora",
  year: "ano",
  month: "mês",
  day: "dia",
  hour: "hora",
  minute: "minuto",
  second: "segundo",
  wifi_scan: "listar redes wifi",
  wifi_connect: "conectar na rede wifi",
  wifi_name: "nome da rede",
  wifi_key: "senha/chave",
  easymqtt_start: "iniciar EasyMQTT",
  easymqtt_publish: "publicar dado com EasyMQTT",
  topic: "tópico",
  session_id: "Sessão:",
  file_open: "abrir arquivo",
  file_name: "nome do arquivo",
  file_mode: "modo",
  file_binary: "modo binário",
  file_close: "fechar arquivo",
  file_write_line: "escrever linha no arquivo",
  file_line: "linha",
  try1: "tente",
  exp1: "no erro",
  ntp_sync: "sincronizar data e hora com NTP",
  timezone: "fuso horário",
  project_info: "Dados do projeto",
  project_info_author: "Autor",
  project_info_desc: "Descrição",
  easymqtt_subscribe: "incrição no tópico EasyMQTT",
  easymqtt_receive: "receber dados EasyMQTT",
  when: "quando",
  data_received: "for recebido",
  relay: "rele",
  on: "ligar",
  off: "desligar",
  relay_on: "rele no pino",
  yes: "sim",
  no: "não",
  wait_for_data: "esperar por dados",
  dht_start: "Iniciar sensor DHT11/22",
  dht_measure: "atualizar leitura do sensor DHT11/22",
  dht_temp: "temperatura do DHT11/22",
  dht_humi: "umidade do DHT11/22",
  type: "modelo",

  //Ultrasound
  hcsr_install: "Install HCSR04 library",
  hcsr_init: "Start HCSR04 Ultrasound Sensor",
  hcsr_timeout: "timeout (us)",
  echo_pin: "echo pin",
  trigger_pin: "trigger pin",
  get_distance: "Get distance (Ultrasound sensor)",
  measure_distance: "Measure distance with Ultrasound sensor",

//BMP180
  pressure: "pressão",
  temperature: "temperatura",
  altitude: "altura",
  bmp180_init: "Iniciar BMP180",

//SHT20
  init_sht20: "Iniciar o SHT20",
  humidity: "umidade",

//Network
  net_http_get: "Requisição HTTP GET",
  net_http_get_status: "Status da resposta HTTP",
  net_http_get_content: "Conteúdo da resposta HTTP",
  net_http_server_start: "Iniciar servidor HTTP Web",
  net_http_server_start_port: "Porta",
  net_http_server_wait: "Aguarde cliente HTTP",
  net_http_server_requested_page: "Página web solicitada",
  net_http_server_send_response: "Enviar resposta HTTP",
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
  splash_welcome: "Bem vindo ao BIPES!",
  splash_footer: "Não mostrar esta tela novamente",
  splash_close: "Fechar",
  splash_message: "<p><b>BIPES: Block based Integrated Platform for Embedded Systems</B> permite programar, usando texto ou blocos, diversos tipos de sistemas embarcados e módulos para Internet das Coisas usando MicroPython, CircuitPython, Linux ou Snek. Você pode conectar, programar, depurar e monitorar diversos tipos de placas usando rede, wifi, USB ou Bluetooth. Verifique a lista de placas suportadas <a href=https://bipes.net.br/wp/boards/>aqui</a>. Alguns exemplos de placas compatíveis são: STM32, ESP32, ESP8266, Raspberry Pi (incluindo a Pico) e até mesmo  Arduino. <p>O <b>BIPES</b> é totalmente <a href=https://bipes.net.br/wp/development/>aberto</a> e gratuito e funciona sem a necessidade de instalação de nenhum plugin ou software adicional,  além de funcionar offline, sem conexão com a Internet. Esperamos que o BIPES seja útil para você e que você possa aproveitá-lo. Se precisar de ajuda, temos o <a href=https://github.com/BIPES/BIPES/discussions>fórum de discussões</a>, onde <a href=https://github.com/BIPES/BIPES/discussions/categories/announcements>novidades também são anunciadas</a>. Sinta-se à vontade para participar e também deixar comentários e sugestões para o projeto!</p><p>Grave o MicroPython, a partir do navegador web, na ESP32 ou ESP8266 facilmente para usar o BIPES: <a href=https://bipes.net.br/flash/esp-web-tools/>https://bipes.net.br/flash/esp-web-tools/</a></p><p>Conheça o livro do BIPES:<a href=https://bipes.net.br/wp/book-livro/>https://bipes.net.br/wp/book-livro/</a></p> <p>A equipe do projeto BIPES agradece o seu interesse!</p>"

  

};

//Categorias da caixa de ferramentas
Blockly.Msg['CAT_TIMING'] = "Temporização";
Blockly.Msg['CAT_MACHINE'] = "Máquina";
Blockly.Msg['CAT_DISPLAYS'] = "Displays";
Blockly.Msg['CAT_SENSORS'] = "Sensores";
Blockly.Msg['CAT_OUTPUTS'] = "Saidas e atuadores";
Blockly.Msg['CAT_COMM'] = "Comunicação";
Blockly.Msg['CAT_TEMP_HUMI'] = "Temperatura e Umidade";
Blockly.Msg['CAT_PRESS'] = "Pressão";
Blockly.Msg['CAT_FILES'] = "Arquivos";
Blockly.Msg['CAT_NET'] = "Rede e Internet";
Blockly.Msg['CAT_CONTROL'] = "Controle";
Blockly.Msg['CAT_IMU'] = "Medidas inerciais";
Blockly.Msg['CAT_AIR'] = "Qualidade do ar";
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
