// Page blocks (blockly)
Blockly.Msg["LOGIC"] = "Lógica";
Blockly.Msg["LOOPS"] = "Laços";
Blockly.Msg["MATH"] = "Matemática";
Blockly.Msg["TEXT"] = "Texto";
Blockly.Msg["LISTS"] = "Listas";
Blockly.Msg["VARIABLES"] = "Variáveis";
Blockly.Msg["FUNCTIONS"] = "Funções";
Blockly.Msg["TIMING"] = "Temporização";
Blockly.Msg["MACHINE"] = "Máquina";
Blockly.Msg["DISPLAYS"] = "Displays";
Blockly.Msg['SENSORS'] = "Sensores";
Blockly.Msg['OUTPUTS'] = "Saidas e atuadores";
Blockly.Msg['SOUNDS'] = "Sons";
Blockly.Msg['COMM'] = "Comunicação";
Blockly.Msg['TEMP_HUMI'] = "Temperatura e Umidade";
Blockly.Msg['PRESS'] = "Pressão";
Blockly.Msg['FILES'] = "Arquivos";
Blockly.Msg['NET'] = "Rede e Internet";
Blockly.Msg['CONTROL'] = "Controle";
Blockly.Msg['SIMULATE'] = "Simulação";
Blockly.Msg['IMU'] = "Medidas inerciais";
Blockly.Msg['AIR'] = "Qualidade do ar";
Blockly.Msg['INSTALL_LIBRARY'] = "Instalar biblioteca";
Blockly.Msg['DOCUMENTATION'] = "Documentação";
Blockly.Msg['DOCUMENTATION_HOW'] = "Documentação e como conectar";
Blockly.Msg['LOAD_EXAMPLE'] = "Carregar exemplo";

var Msg = {
  // Pages names
  'PageBlocks': 'Blocos',
  'PageDevice': 'Dispositivo',
  'PageFiles': 'Arquivos',
  'PageNotification': 'Mensagens',
  'PageProject': 'Projetos',
  'PagePrompt': 'Console',
  'PageDashboard':'Painel',
  'PageFreeboard':'Freeboard',
  
  // Common actions and strings
  'Download':'Baixar',
  'Remove':'Remover',
  'Delete':'Deletar',
  'Write':'Escrever',
  'WriteToDevice':'Escrever para o aparelho',
  'Rename':'Renomear',
  'New':'Novo',
  'Share':'Compartilhar',
  'UpdateShared':'Atualizar o online',
  'Unshare':'Descompartilhar',
  'Upload':'Enviar',
  'Import':'Importar',
  'Filename':'Nome do arquivo',
  'eg':"ex",
  Copy:'Copiar',
  ClearAll:'Limpar todas',

  // Channel
  NotConnectedWarning:'Nenhum dispositivo conectado.',

  // Page Files
  'FileManager':'Gerenciador de arquivos',
  'HideShowProjectTree':'Ocultar/mostrar árvore de projecto',
  'DirectoriesNotExistMapped':"Alguns diretórios não existem ou não foram mapeados.",
  'NewFolder':'Nova pasta',
  'NewFile':'Novo arquivo',
  'UploadFile':'Enviar arquivo',
  'RemoveFolder':'Remover pasta',
  'ExecuteScript':'Executar script',
  'ScriptFinishedExecuting':'Script terminou de executar!',
  'Empty':'Vazio',
  'FileNotExist':"Arquivo não existe.",
  'FileAlreadyExist':'Arquivo "{0}" já existe no diretório "{1}".',
  'FolderAlreadyExist':'Arquivo "{0}" já existe no diretório "{1}".',
  'NewFilename':"Nome do arquivo novo",
  'NewFolderName':"Nome da pasta nova",
  'ProjectName':'Nome do projeto',
  'my_script':"meu_script",
  'my_examples':"meus_exemplos",
  'CreatePathFileBeforeSaving':'Crie a paste ou arquivo para "{0}" antes de salvar o projeto.',
  'SaveToProject':'Salvar no projeto',
  'ProjectFiles':'Arquivos no projeto',
  'DeviceFiles':'Explorar dispositivo',
  'CouldNotRemoveFolder':'Não foi possível remover a pasta "{0}/{1}".',
  'FolderNotEmpty':'Pasta "{0}/{1}" não está vazia e não pode ser removida.',
  'CreateScriptHere':'# Crie o seu script "{0}" aqui.',
  WritingFile:'Escrevendo "{0}" no dispositivo.',
  
  // Page Blocks
  'ViewBlocksCode':'Ver/esconder código gerado pelos blocos.',
  'BlocksEditAsFile':'Copiar código e editar',
  'RunBlocks':'Executar blocos no dispositivo.',
  'BlocksPy':'blocos.py',
  FetchingLib:'Obtendo biblioteca {0}...',
  FetchingExample:'Obtendo exemplo {0}...',

  // Page Device
  'Unknown':'desconhecido',
  'ConnectedDevice':'Dispositivo conectado.',
  'NotConnected':'não conectado',
  'NoConnectedLong':'Nenhum dispositivo conectado, conecte abaixo!',
  'NewConnection':'Nova conexão',
  'NotSupported':'Não suportado',
  'GetInfo':'Obter info.',
  'ProjectTarget':'Dispositivo alvo do projeto',
  'ChangeTargetAnytime':'Altere as configurações de projeto a qualquer momento.',
  'TargetDevice':'Dispositivo alvo do projeto.',
  'TargetFirmware':'Firmware alvo do projeto.',
  'ConnectedDevices':'Dispositivos conectados',
  'UsingThisDevice':'Usando esse dispositivo',
  'OnThisTab':'Nessa aba',
  'OnOtherTab':'Em outra aba',
  'DeviceUnresponsive':'Dispositivo {0} versão {1} não está respondendo, considere resetá-lo.',
  BaudRate:'Baud Rate',
  'Address':'Endereço',
  'Password':'Senha',
  'DevicePassword':'Senha do dispositivo',
  'DeviceAddress':'Endereço do dispositivo',
  'WSWarning':'Apenas wss funciona em https.',
  'Connect':'Conectar',
  'ScanDevices':'Procurar dispositivos',
  'ScanPattern':'Procurar na rede por endereços como:',
  'StartScan':'Iniciar procura',
  'InvalidPrefix':'Prefixo de rede inválido',
  'ScanningInfo':'Verificado {0} de {1} IPs, encontrado {2}:',
  'DoneScanning':'{0} IPs verificados, encontrado {1}:',
  ReconnectOnLost:'Reconectar se perder a conexão',
  'NewWebSocket':'Nova conexão via WebSocket',

  // Status bar
  'TasksRunning':'Tarefas em execução',
  'StatusOngoingInput':'Recebendo comandos',
  'StatusReady':'Pronto',
  'StatusWorking':'Fazendo {0} tarefas',
  'StatusWorkingOne':'Fazendo 1 tarefa',
  ChangeTheme:'Mudar para tema escuro/claro',
  'Language':'Idioma',

  // Page Project
  HelloUser:'Olá, ',
  'YourProjects':'Seus projetos',
  'SharedProjects':'Projetos compartilhados',
  'By':'Por',
  'AUser':'usuário anônimo',
  'EditedAt':'Editado as',
  'EmptyProject':'Projeto vazio',
  'LoadMore':'Carregar mais',
  'NoOlderProjects':'Não há projetos mais antigos',
  'SharedProjectDoesNotExist':'Projeto compartilhado não existe mais',
  ProjectFromURL:'Projeto compartilhado por link',
  ClickToImport:'Toque para importar para os seus projetos',

  // Page Notification
  'Forum':'Fórum',
  NewsAndAbout:'Novidades e sobre',
  NoNotification:'Não há notificações.',

  // Page Prompt
  'ClearConsole':'Limpar console',
  'ResetDevice':'Resetar aparelho',
  'StopExecution':'Parar execução',
  'StopTimers':'Parar timers',
  'DeviceInfo':'Info. do dispositivo',
  BridgeDataToEasyMQTT:'Bridge data to EasyMQTT',

  // Page Dashboard
  'DashboardName':'Nome do painel',
  'Dashboard':'Painel',
  'Session':'Sessão',
  'MQTTSession':'Sessão MQTT',
  'NewDashboard':'Novo painel',
  'EditData':'Editar dados',
  'AddWidget':'Adicionar widget',
  'EditDashboard':'Editar painel',
  'DashboardName':'Nome do painel',
  'DismissPlugin':'Remover widget',
  'DeleteData':'Apagar dados',
  'DownloadCSV':'Baixar CSV',
  'DragMe':'Me arraste',

  //Blocos
  //Pinout
  'DeviceChangedCheckPins':'Verifique os pinos, o aparelho alvo mudou!',
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

  //Splash screen
  splash_welcome: "Bem vindo ao BIPES!",
  splash_footer: "Não mostrar esta tela novamente",
  splash_close: "Fechar",
  splash_message: "<p><b>BIPES: Block based Integrated Platform for Embedded Systems</B> permite programar, usando texto ou blocos, diversos tipos de sistemas embarcados e módulos para Internet das Coisas usando MicroPython, CircuitPython, Linux ou Snek. Você pode conectar, programar, depurar e monitorar diversos tipos de placas usando rede, wifi, USB ou Bluetooth. Verifique a lista de placas suportadas <a href=https://bipes.net.br/wp/boards/>aqui</a>. Alguns exemplos de placas compatíveis são: STM32, ESP32, ESP8266, Raspberry Pi (incluindo a Pico) e até mesmo  Arduino. <p>O <b>BIPES</b> é totalmente <a href=https://bipes.net.br/wp/development/>aberto</a> e gratuito e funciona sem a necessidade de instalação de nenhum plugin ou software adicional,  além de funcionar offline, sem conexão com a Internet. Esperamos que o BIPES seja útil para você e que você possa aproveitá-lo. Se precisar de ajuda, temos o <a href=https://github.com/BIPES/BIPES/discussions>fórum de discussões</a>, onde <a href=https://github.com/BIPES/BIPES/discussions/categories/announcements>novidades também são anunciadas</a>. Sinta-se à vontade para participar e também deixar comentários e sugestões para o projeto!</p><p>Grave o MicroPython, a partir do navegador web, na ESP32 ou ESP8266 facilmente para usar o BIPES: <a href=https://bipes.net.br/flash/esp-web-tools/>https://bipes.net.br/flash/esp-web-tools/</a></p><p>Conheça o livro do BIPES:<a href=https://bipes.net.br/wp/book-livro/>https://bipes.net.br/wp/book-livro/</a></p> <p>A equipe do projeto BIPES agradece o seu interesse!</p>"
}

