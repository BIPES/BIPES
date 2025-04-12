var MSG = {
  title: "BIPES Beta",
  blocks: "Blocos",
  files: "Arquivos",
  shared: "Compartilhado",
  device: "Dispositivo",
  linkTooltip: "Salvar e ligar aos blocos.",
  runTooltip: "Execute o programa definido pelos blocos na área de trabalho.",
  microPythonTooltip: 'Instalar MicroPython',
  badCode: "Erro no programa:\n%1",
  timeout: "Máximo de iterações de execução excedido.",
  trashTooltip: "Descartar todos os blocos.",
  catLogic: "Lógica",
  catLoops: "Laços",
  catMath: "Matemática",
  catText: "Texto",
  catLists: "Listas",
  catColour: "Cor",  listVariable: "lista",
  textVariable: "texto",
  catVariables: "Variáveis criadas",
  catFunctions: "Funções criadas",
  cattextVariable: "Texto",
  catbooleanVariable: "Boleanas",
  catnumericVariable: "Numéricas",
  catlistVariable: "Listas",
  cattextFuncions: "Texto",
  catlistFunctions: "Listas",
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
  nanoseconds: "nanosegundos",
  cpu_ticks: "ciclos de CPU",
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
  exp1: "exceto",
  ntp_sync: "sincronizar data e hora com NTP",
  timezone: "fuso horário",
  project_info: "Dados do projeto",
  project_info_author: "Autor",
  project_info_desc: "Descrição",
  easymqtt_subscribe: "incrição no tópico EasyMQTT",
  easymqtt_receive: "receber dados EasyMQTT",
  easymqtt_disconnect_title: "Desconectar EasyMQTT",
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
  start_thread: "iniciar tarefa paralela com a função",
  
  //categoria temporizador
  get: "obter contador em",
  counter: "contador",
  by: "com",
  by2: "para",
  sum_time: "somar tempo",
  diff_time: "diferença de tempo de",
  timer: "temporizador n°",
  do_timer: "executar",
  every_timer: "a cada",
  once_in: "uma vez em",
  until_deadline: "até o tempo limite nº",
  of: "de",
  do: "executar",
  stop_timer: "parar temporizador",
  deep_sleep: "sono profundo",

  //Categoria Comunicação
  //Bluetooth
  configure_bluetooth: "Configura e inicia o Bluetooth com o nome",
  handle_ble: "Definir os dados recebidos via bluetooth para",
  check_ble: "Verificar os dados recebidos",
  configure_data_plotter: "Configurar o plotador para sensores",
  call_format_plotter: "Enviar dados para o plotador",
  bluetooth_name: "meuBluetooth",

  //espnow
  initialize_wlan_title: "Preparar para obter endereço MAC",
  get_mac_address_title: "Obter Endereço MAC da Placa Amado",
  set_master_title: "Configurar Placa Amado como Mestre",
  add_peer_title: "Adicionar Dispositivo pelo Endereço MAC",
  receive_message_title: "Receber Mensagens de Dispositivos",
  set_peer_title: "Configurar Placa Amado como Dispositivo Secundário",
  send_message_to_peer_title: "Enviar Mensagem para Dispositivo pelo MAC",
  send_message_title: "Enviar Mensagem para o Dispositivo Mestre",
  receive_message_master_title: "Receber Mensagens do Dispositivo Mestre",
  variable_list: "Lista de variáveis",
  add_variable_container: "Adicionar variável",
  variable_name: "Nome da variável",
  variable_value: "Valor da variável",
  if: "Se",
  is_none: "for None, definir",
  default_value: "para valor padrão",

  //Blocos Lógica
  math_min_title: "Mínimo entre",
  math_max_title: "Máximo entre",
  and: "e",

  //Blocos Operadores
  var_to_int_title: "Para inteiro",
  var_to_float_title: "Para decimal",

  //Blocos funções de texto
  to_string_title: "Para texto",

  //Blocos para as funções da categoria Python
  os_error: "Exceto OSError",

  //Blocos para os pinos de entrada/saida
  analog_amado_board: "Ler entrada analógica",
  attenuation: "Atenuação: ",
  width: "Largura: ",
  frequency: "Frequência",
  frequency2: "frequência",
  duty: "Ciclo de trabalho",
  init_pwm: "Iniciar",
  deinit_pwm: "Desativar PWM #",
  pins: "pinos",
  external_event: "Evento externo (interrupção no  pino de entrada)",
  trigger: "Gatilho: ",
  irq_falling: "QUEDA DE SINAL",
  irq_rising: "SUBIDA DE SINAL",
  both: "QUEDA E SUBIDA(AMBOS)",

 
  //Sensor ultrassônico
  hcsr04_title: "Iniciar sensor ultrassônico HCSR04",
  get_distance_hcsr04: "Obter distancia",
  echo_pin: "Pino echo",
  trigger_pin: "Pino trigger",
  timeout_hcsr04: "Tempo limite (μs)",

  //acelerometro e giroscopio
  mpu6050_init: "Iniciar sensor acelerômetro e giroscópio MPU6050",
  mpu6050_read_acc_x: "Ler aceleração no eixo X",
  mpu6050_read_acc_y: "Ler aceleração no eixo Y",
  mpu6050_read_acc_z: "Ler aceleração no eixo Z",
  mpu6050_read_gyro_x: "Ler velocidade angular no eixo X",
  mpu6050_read_gyro_y: "Ler velocidade angular no eixo Y",
  mpu6050_read_gyro_z: "Ler velocidade angular no eixo Z",
  
  //Leitor RFID
  rfid_rc522_init_title: "Iniciar leitor RFID MFRC522",
  rfid_rc522_detect_card_title: "Verificar se o cartão RFID está presente",
  rfid_rc522_anticoll_title: "Obter identificação do cartão (UID)",
  rfid_rc522_read_card_title: "Ler memória do cartão RFID",
  rfid_rc522_write_card_title: "Escrever na memória do cartão RFID",
  
  //Display OLED
  init_oled_title: "Iniciar display OLED SSD1306 I2C",
  fill_oled_title: "Preencher display OLED com",
  clear_oled_title: "Limpar display OLED",
  show_oled_title: "Atualizar display OLED",
  write_oled_title: "Escrever texto no display",
  write_oled_int_title: "Exibir valor no display",
  x_position: "Posição X",
  y_position: "Posição Y",
  value_display: "Valor",

  //Servo motor
  init_servo_title: "Iniciar servo motor",
  init_servo_name: "Nome do servo: ",
  init_servo_pin: "Pino",
  move_servo_title: "Mover servo",
  move_servo_name: "Nome do servo: ",
  move_servo_angle: "Ângulo",
  no_servos: "Nenhum servo",

  //DC motor
  dc_motor_init_title: "Iniciar motor DC",
  dc_motor_pwm_label: "PWM",
  dc_motor_dir1_label: "Direção 1",
  dc_motor_dir2_label: "Direção 2",
  dc_motor_name_label: "Nome do motor: ",
  dc_motor_power_title: "Definir potência do motor DC  -",
  dc_motor_power_label: "Potência:",
  dc_motor_direction_title: "Definir direção do motor DC  -",
  dc_motor_direction_label: "Direção:",
  dc_motor_stop_title: "Parar motor DC",

  //Buzzer
  tone_title: "Reproduzir buzzer no",
  note_title: "Reproduzir buzzer no",
  rttl_play_title: "Reproduzir música",
  duration_label: "duração (s): ",
  duration_label2: "(0 para duração infinita)",
  note_label: "nota",
  frequency_label: "frequência",
  songs_label: "Música:",
  melody_label: "melodia",

  //Bluetooth REPL
  bluetooth_repl_start_title: "Iniciar REPL via Web Bluetooth",
  bluetooth_repl_setup_title: "Configurar REPL via Web Bluetooth",
  bluetooth_name_label: "Nome Bluetooth:",

  //Wifi
  net_ap_mode_title: "Configurar Modo Ponto de Acesso",
  net_network_name_label: "Nome da rede",
  net_network_key_label: "Senha da rede",
  net_ifconfig_title: "Endereço IP Atual",

  //Cliente HTTP
  Make_HTTP_POST_Request_URL_title: "Fazer requisição HTTP POST -  URL",



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
  net_http_server_close_title: "Fechar HTTP web server",


//Splash screen
  splash_welcome: "Bem vindo ao DBLOCKS!",
  splash_footer: "Não mostrar esta tela novamente",
  splash_close: "Fechar",
  splash_message: "<p><b>Dblocks: Uma Plataforma Educacional de Programação Baseada em Blocos</b> permite programar sistemas embarcados e dispositivos de Internet das Coisas (IoT) de forma prática e intuitiva, utilizando blocos ou código. Atualmente, a plataforma é otimizada para a Amado Board, baseada no chip ESP32, mas também suporta programação para ESP32 diretamente, sem complicações.</p><p>Para começar, é necessário gravar o firmware MicroPython no dispositivo. Utilize nossa ferramenta para instalação direta via navegador: <a href='https://amadomaker.github.io/Instalador_Micropython/'>Instalador MicroPython</a>.</p><p>O Dblocks é uma solução criada pela Amado Maker, uma empresa com foco em tecnologia educacional, visando simplificar o ensino de programação e eletrônica.</p><p>Agradecemos pelo seu interesse e esperamos que o Dblocks seja uma ferramenta útil e inspiradora para seus projetos educacionais!</p>",


  // Music
  music: "Música",
  saveMelody: "Salvar Melodia",
  importMelody: "Importar Melodia",
  exportMelody: "Exportar Melodia",
  melodyName: "Nome da melodia",
  cancel: "Cancelar", 
  save: "Salvar",
  import: "Importar", 
  export: "Exportar",
  saveAMelody: "Salvar uma melodia", 
  importAMelody: "Importar uma melodia", 
  exportAMelody: "Exportar uma melodia",

  saveSpriteTitle: "Salvar um sprite",
  spriteNameLabel: "Nome do sprite",
  saveDesign: "Salvar desenho",
  columns: "Colunas",
  rows: "Linhas",
};

//Categorias da caixa de ferramentas

Blockly.Msg['CAT_CONTROL'] = "Controle";
Blockly.Msg['CAT_LOOPS'] = "Laços";
Blockly.Msg['CAT_TIMING'] = "Temporização";
Blockly.Msg['CAT_INOUT'] = "Pinos entrada/saída";
Blockly.Msg['CAT_DISPLAYS'] = "Telas";
Blockly.Msg['CAT_SENSORS'] = "Sensores";
Blockly.Msg['CAT_OUTPUTS'] = "Saídas e atuadores";
Blockly.Msg['CAT_COMM'] = "Comunicação";
Blockly.Msg['CAT_FILES'] = "Arquivos";
Blockly.Msg['CAT_NET'] = "Rede e Internet";
Blockly.Msg['CAT_OPERATORS'] = "Operadores";
Blockly.Msg['CAT_VARIABLES'] = "Variáveis";
Blockly.Msg['CAT_FUNCTIONS'] = "Funções";
Blockly.Msg['CAT_DHT11/22'] = "Temperatura e umidade";
Blockly.Msg['CAT_ULTRASONIC'] = "Ultrassônico";
Blockly.Msg['CAT_ACCELEROMETER'] = "Acelerômetro e giroscópio";
Blockly.Msg['CAT_RFID'] = "Leitor RFID";
Blockly.Msg['CAT_OLEDDISPLAY'] = "Display OLED";
Blockly.Msg['CAT_RELAY'] = "Módulo relé";
Blockly.Msg['CAT_SERVO'] = "Servo motor";
Blockly.Msg['CAT_DCMOTOR'] = "Motor DC";
Blockly.Msg['CAT_BUZZER'] = "Campainha";
Blockly.Msg['CAT_WIFI'] = "WiFi";
Blockly.Msg['CAT_HTTPCLIENT'] = "Cliente HTTP";
Blockly.Msg['CAT_HTTPSERVER'] = "Servidor HTTP"
Blockly.Msg['INSTALL_LIBRARY'] = "Instalar biblioteca:"
Blockly.Msg['PINOUT_LEGEND'] = "Pinos de entrada e saída"
Blockly.Msg['DHT_SENSOR_LEGEND'] = "Sensor de temperatura e umidade DHT11/22";
Blockly.Msg['HCSR04_LEGEND'] = "Sensor de distância ultrassônico HCSR04";
Blockly.Msg['LIBRARY_LEGEND'] = "Biblioteca";
Blockly.Msg['MPU6050_LEGEND'] = "Acelerômetro e Giroscópio MPU-6050";
Blockly.Msg['MFRC522_LEGEND'] = "Leitor RFID MFRC522";
Blockly.Msg['RELAY_LEGEND'] = "Relé";
Blockly.Msg['SOUND_LIBRARIES_LEGEND'] = "Bibliotecas necessárias para tocar sons";
Blockly.Msg['USER_CREATED_MUSIC_LEGEND'] = "Músicas criadas pelo usuário";
Blockly.Msg['LIBRARY_SONGS_LEGEND'] = "Músicas disponíveis da biblioteca songs";
Blockly.Msg['LOW_CONSUMPTION_LEGEND'] = "Baixo consumo";
Blockly.Msg['BLUEFRUIT_CONNECT_COMPATIBLE_LEGEND'] = "Compatível com o aplicativo 'Bluefruit Connect' disponível nas lojas de aplicativos";
Blockly.Msg['DOWNLOAD_APP_LEGEND'] = "Baixe o app";
Blockly.Msg['BLUETOOTH_TERMINAL_LEGEND'] = "Este bloco permite acesso ao terminal/console usando Bluetooth, além de possibilitar o envio de programação diretamente para o dispositivo via Bluetooth.";
Blockly.Msg['INSTALL_THREE_FILES_LEGEND'] = "Você precisa instalar 3 arquivos para usar";
Blockly.Msg['USAGE_LEGEND'] = "Uso";
Blockly.Msg['INSTALL_THREE_FILES_ABOVE_LEGEND'] = "Instale os 3 arquivos acima";
Blockly.Msg['START_WEB_BLUETOOTH_REPL_LEGEND'] = "Inicie o Web Bluetooth REPL";
Blockly.Msg['PAIR_AMADO_BOARD_LEGEND'] = "Emparelhe a Amado board com seu dispositivo";
Blockly.Msg['ACCESS_LEGEND'] = "Acesse";
Blockly.Msg['SELECT_BLUETOOTH_CONNECT_LEGEND'] = "Selecione a opção de Bluetooth e Conectar (Web Bluetooth)";
Blockly.Msg['ESP_NOW_PROTOCOL_LEGEND'] = "Protocolo de comunicação ESP-NOW";
Blockly.Msg['ESP_NOW_COMMUNICATION_LEGEND'] = "Permite comunicação sem fio entre as placas Amado board.";
Blockly.Msg['FEATURES_LEGEND'] = "Características";
Blockly.Msg['HIGH_SPEED_LOW_LATENCY_LEGEND'] = "Alta velocidade e baixa latência";
Blockly.Msg['P2P_COMMUNICATION_NO_WIFI_LEGEND'] = "Comunicação ponto-a-ponto sem necessidade de Wi-Fi";
Blockly.Msg['REQUIREMENTS_LEGEND'] = "Requisitos";
Blockly.Msg['ESP_NOW_RANGE_CONFIG_LEGEND'] = "Os dispositivos devem estar próximos (20m a 50m) e configurados corretamente";
Blockly.Msg['WIFI_CONFIG_BLOCKS_LEGEND'] = "Blocos para configurar Wi-Fi.";
Blockly.Msg['WIFI_AP_CLIENT_SUPPORT_LEGEND'] = "Inclui suporte para modo Ponto de Acesso (AP) e Cliente Wi-Fi.";
Blockly.Msg['WIFI_SCAN_CONNECT_IP_LEGEND'] = "Permite conectar, escanear redes e obter o IP atual.";
Blockly.Msg['HTTP_REQUEST_BLOCKS_LEGEND'] = "Blocos para realizar requisições HTTP (GET/POST).";
Blockly.Msg['HTTP_API_CONNECT_SEND_LEGEND'] = "Use para conectar-se a APIs e recuperar ou enviar dados.";
Blockly.Msg['HTTP_SERVER_BLOCKS_LEGEND'] = "Blocos para configurar um servidor HTTP que responde a solicitações de páginas web ou dados.";
Blockly.Msg['HTTP_SERVER_IOT_LEGEND'] = "Permite criar servidores simples para acessar informações via navegador ou integrar dispositivos IoT.";
Blockly.Msg['MQTT_CONFIG_LEGEND'] = "Configure conexões MQTT para IoT, publique e receba dados.";
Blockly.Msg['EASYMQTT_TAB_LEGEND'] = "Acompanhe os resultados na aba EasyMQTT.";
Blockly.Msg['DOCUMENTATION_LEGEND'] = "Documentação";
Blockly.Msg['LOAD_EXAMPLE_LEGEND'] = "Carregar exemplo";
Blockly.Msg['REQUIRED_LIBRARY_LEGEND'] = "Biblioteca necessária";






