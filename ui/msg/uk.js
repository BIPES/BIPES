var MSG = {
    title: "BIPES",
    blocks: "Блоки",
    files: "Файли",
    shared: "Спільні",
    device: "Пристрій",
    linkTooltip: "Зберегти і зв'язати з блоками.",
    runTooltip: "Запустити програму, визначену блоками на робочому просторі.",
    badCode: "Помилка програми:\n%1",
    timeout: "Перевищено максимальну кількість ітерацій виконання.",
    trashTooltip: "Викинути всі блоки.",
    catLogic: "Логіка",
    catLoops: "Цикли",
    catMath: "Математика",
    catText: "Текст",
    catLists: "Списки",
    catColour: "Колір",
    catVariables: "Змінні",
    catFunctions: "Функції",
    listVariable: "список",
    textVariable: "текст",
    httpRequestError: "Виникла проблема з запитом.",
    linkAlert: "Поділіться вашими блоками за цим посиланням:\n\n%1",
    hashError: "Вибачте, '%1' не відповідає жодній збереженій програмі.",
    xmlError: "Не вдалося завантажити ваш збережений файл. Можливо, він був створений з іншою версією Blockly?",
    badXml: "Помилка розбору XML:\n%1\n\nВиберіть 'OK', щоб відмовитися від змін, або 'Cancel', щоб далі редагувати XML.",
    saveTooltip: "Зберегти блоки у файл.",
    loadTooltip: "Завантажити блоки з файлу.",
    notificationTooltip: "Панель сповіщень.",
    ErrorGET: "Не вдалося завантажити запитуваний файл.",
    invalidDevice: "Неправильний пристрій.",
    languageTooltip: "Змінити мову.",
    noToolbox: "Для пристрою не налаштовано інструментальну панель.",
    networkTooltip: "Підключитися через мережу (WebREPL, http).",
    serialTooltip: "Підключитися через серійний/USB або Bluetooth (Web Serial API, https).",
    toolbarTooltip: "Показати панель інструментів",
    wrongDevicePin: "Перевірте піни, цільовий пристрій змінився!",
    notDefined: "не визначено",
    editAsFileValue: "Редагувати як файл",
    editAsFileTooltip: "Редагувати код Python та зберегти у файловій системі пристрою.",
    forumTooltip: "Форум підтримки.",
    accountTooltip: "Ваші проекти та налаштування.",
    blocksLoadedFromFile: "Блоки завантажені з файлу '%1'.",
    deviceUnavailable: "Пристрій '%1' недоступний.",
    notConnected: "Немає підключення для відправки даних.",
    serialFroozen: "Серійне з'єднання не відповідає.",
    notAvailableFlag: "$1 недоступний у вашому браузері.\r\nБудь ласка, переконайтеся, що прапорець $1 увімкнено.",
        
    // Blocks
    block_delay: "затримка",
    seconds: "секунди",
    milliseconds: "мілісекунди",
    microseconds: "мікросекунди",
    to: "до",
    setpin: "встановити вихідний пін",
    pin: "пін",
    read_digital_pin: "читати цифровий вхід",
    read_analog_pin: "читати аналоговий вхід",
    show_iot: "показати на вкладці IoT",
    data: "значення",
    set_rtc: "встановити дату і час",
    get_rtc: "отримати дату і час",
    year: "рік",
    month: "місяць",
    day: "день",
    hour: "година",
    minute: "хвилина",
    second: "секунда",
    wifi_scan: "сканувати Wi-Fi мережі",
    wifi_connect: "підключитися до Wi-Fi мережі",
    wifi_name: "назва мережі",
    wifi_key: "ключ/пароль",
    easymqtt_start: "EasyMQTT Запуск",
    easymqtt_publish: "EasyMQTT Опублікувати дані",
    topic: "тема",
    session_id: "ID сеансу",
    file_open: "відкрити файл",
    file_name: "назва файлу",
    file_mode: "режим",
    file_binary: "відкрити у бінарному режимі",
    file_close: "закрити файл",
    file_write_line: "записати рядок у файл",
    file_line: "рядок",
    try1: "виконувати",
    exp1: "при помилці",
    ntp_sync: "синхронізувати дату і час з NTP",
    timezone: "часовий пояс",
    project_info: "Інформація про проект",
    project_info_author: "Автор",
    project_info_desc: "Опис",
    easymqtt_subscribe: "EasyMQTT підписатися на тему",
    when: "коли",
    data_received: "отримано",
    easymqtt_receive: "EasyMQTT отримати дані",
    relay: "реле",
    on: "увімкнути",
    off: "вимкнути",
    relay_on: "реле на піні",
    yes: "так",
    no: "ні",
    wait_for_data: "очікувати дані",
    dht_start: "Запустити DHT сенсор",
    dht_measure: "оновити показання сенсора DHT11/22",
    dht_temp: "отримати температуру DHT11/22",
    dht_humi: "отримати вологість DHT11/22",
    type: "тип",

    
    // Ultrasound
    hcsr_install: "Встановити бібліотеку HCSR04",
    hcsr_init: "Запустити ультразвуковий датчик HCSR04",
    hcsr_timeout: "тайм-аут (мкс)",
    echo_pin: "пін відлуння",
    trigger_pin: "пін тригера",
    get_distance: "Отримати відстань (ультразвуковий датчик)",
    measure_distance: "Виміряти відстань за допомогою ультразвукового датчика",

    // BMP180
    pressure: "тиск",
    temperature: "температура",
    altitude: "висота",
    bmp180_init: "Ініціалізувати BMP180",

    // SHT20
    init_sht20: "Ініціалізувати SHT20",
    humidity: "вологість",

    
    // Network
    net_http_get: "HTTP GET запит",
    net_http_get_status: "HTTP код статусу",
    net_http_get_content: "HTTP відповідь",
    net_http_server_start: "Запустити HTTP веб-сервер",
    net_http_server_start_port: "Порт",
    net_http_server_wait: "Очікувати HTTP клієнта",
    net_http_server_requested_page: "Запитана веб-сторінка",
    net_http_server_send_response: "Відправити HTTP відповідь",
    net_http_server_send_html: "HTML",

    // MQTT
    mqtt_init: "Запустити MQTT клієнт",
    server_address: "Адреса сервера",
    server_port: "Порт сервера",
    username: "Ім'я користувача",
    password: "Пароль",
    mqtt_add_to_buffer: "Додати дані до MQTT буфера",
    field_name: "Назва поля",
    value: "Значення",
    mqtt_publish_buffer: "Опублікувати буфер у MQTT тему",
    mqtt_topic: "Тема",
    qos: "QOS:",
    mqtt_most_once: "0 - не більше одного разу",
    mqtt_least_once: "1 - принаймні один раз",
    mqtt_publish_payload: "Опублікувати навантаження в MQTT тему",
    payload: "Послання",
    mqtt_subscribe: "Підписатися на MQTT тему",
    mqtt_set_callback: "Встановити зворотний виклик для MQTT повідомлень",
    with: "з",
    received_from: "отримано від",
    do: "виконати",
    mqtt_callback_tooltip: "Функція зворотного виклику повинна мати параметри topic і msg",
    mqtt_check_msg: "Перевірити MQTT сервер на наявність очікуючих повідомлень",
    mqtt_check_msg_tooltip: "Перевірте, чи має сервер якісь очікуючі повідомлення. Неблокуючий метод. Повідомлення підписки будуть передані у зворотний виклик.",
    mqtt_wait_msg: "Очікувати повідомлення від MQTT сервера",
    mqtt_wait_msg_tooltip: "Очікувати, поки сервер надішле повідомлення. Блокуючий метод. Повідомлення підписки будуть передані у зворотний виклик.",
    mqtt_disconnect: "Відключити MQTT клієнт",
    mqtt_disconnect_tooltip: "Відключити MQTT клієнт від сервера.",
    
    // PWM
    pwm_num: "ШІМ #",
    frequenzy: "Частота",
    duty_cycle: "Робочий цикл",
    pwm_num_pico: "RPi Pico ШІМ #",
    pwm_tooltip: "Ініціалізувати та налаштувати ШІМ з частотою (1Гц до 40МГц) та робочим циклом (0-1023)",
    pwm_freq_tooltip: "Встановити частоту ШІМ від 1Гц до 40МГц",
    pwm_duty_tooltip: "Встановити діапазон робочого циклу ШІМ від 0 до 1023",
    pwm_init: "Ініціалізувати",
    pwm_init_tooltip: "Ініціалізувати ШІМ",
    pwm_deinit: "Дезінціалізувати ШІМ #",

    
    // NeoPixel
    np_init: "Ініціалізувати NeoPixel",
    np_num_leds: "Кількість світлодіодів",
    np_init_tooltip: "Ініціалізувати NeoPixel на вказаному піні",
    np_controll: "Керувати NeoPixel",
    color: "Колір",
    np_controll_tooltip: "Налаштувати NeoPixel",
    np_write: "Записати NeoPixel",
    red: "Червоний",
    green: "Зелений",
    blue: "Синій",
    np_write_tooltip: "Записати NeoPixel",
    np_color_tooltip_rgb: "Значення RGB світлодіода NeoPixel 0-255",
    np_color_tooltip_picker: "Вибір кольору для світлодіода NeoPixel",
    hue: "Відтінок",
    saturation: "Насиченість",
    lightness: "Світлість",
    np_color_tooltip_HSL: "HUE до RGB кольору, Відтінок від 0º до 360º, Насиченість і Світлотність від 0% до 100%.",
    
    // I2C Char LCD
    i2c_lcd_init: "Ініціалізувати I2C Символьний LCD дисплей",
    i2c_lcd_lines: "Рядки",
    i2c_lcd_col: "Стовпці",
    i2c_lcd_clear: "Очистити LCD",
    i2c_lcd_write: "Написати текст на LCD",
    text: "Текст",
    i2c_lcd_move: "Перемістити курсор LCD на",
    i2c_lcd_backlight: "Підсвічування LCD",
    i2c_lcd_backlight_tooltip: "Встановіть це в true/false або 1/0",
    i2c_lcd_power: "Живлення LCD",
    i2c_lcd_power_tooltip: "Встановіть це в true/false або 1/0",

    
    // RC Servo Motor
    servo_init: "Ініціалізувати RC Сервомотор",
    servo_init_tooltip: "Ініціалізувати RC сервомотор",
    servo_move: "Рух сервомотора",
    angle: "Кут",

    // Stepper Motor
    stepper_init: "Ініціалізувати кроковий двигун",
    stepper_step: "Крок крокового двигуна",
    steps: "Кроки",

    // DC Motor
    dc_motor_init: "Ініціалізувати DC двигун",
    dc_motor_power: "Встановити потужність DC двигуна",
    power: "Потужність",
    dc_motor_dir: "Встановити напрямок DC двигуна",
    direction: "Напрямок",
    dc_motor_stop: "Зупинити DC двигун",

    
    // Sound
    sound_tone: "Тон (Гц)",
    sound_duration: "Тривалість (с):",
    sound_infinite: "(0 для нескінченної тривалості)",
    sound_tone_tooltip: "Звук - генератор тону",
    sound_note: "Відтворити музичну ноту",
    note: "Нота",
    sound_note_tooltip: "Звук - генератор тону (музична нота)",
    rtttl_play: "Відтворити пісню (RTTTL)",
    song: "Пісня",

    
    // Splash screen
    splash_welcome: "Ласкаво просимо до BIPES!",
    splash_footer: "Більше не показувати цей екран",
    splash_close: "Закрити",
    splash_message: "<p><b>BIPES: Інтегрована платформа на основі блоків для вбудованих систем</b> дозволяє текстове та блочне програмування для кількох типів вбудованих систем та модулів Інтернету речей з використанням MicroPython, CircuitPython, Python або Snek. Ви можете підключати, програмувати, налагоджувати та моніторити кілька типів плат за допомогою мережі, USB або Bluetooth. Будь ласка, перегляньте список <a href=https://bipes.net.br/wp/boards/>сумісних плат тут</a>. Сумісні плати включають STM32, ESP32, ESP8266, Raspberry Pi Pico і навіть Arduino. <p><b>BIPES</b> є повністю <a href=https://bipes.net.br/wp/development/>відкритим вихідним кодом</a> і заснованим на HTML та JavaScript, тому не потрібна установка або конфігурація програмного забезпечення, і ви можете використовувати його офлайн! Ми сподіваємось, що BIPES буде корисним для вас, і що ви зможете насолоджуватись використанням BIPES. Якщо вам потрібна допомога, у нас тепер є <a href=https://github.com/BIPES/BIPES/discussions>форум для обговорень</a>, де ми також публікуємо <a href=https://github.com/BIPES/BIPES/discussions/categories/announcements>нові функції та оголошення про BIPES</a>. Не соромтесь користуватися ним! Також ми запрошуємо вас використовувати форум для зворотного зв'язку та пропозицій для BIPES!</p><p>Тепер ви можете легко завантажити MicroPython на ваш ESP32 або ESP8226 для використання з BIPES: <a href=https://bipes.net.br/flash/esp-web-tools/>https://bipes.net.br/flash/esp-web-tools/</a></p><p>Перегляньте книгу BIPES на <a href=https://bipes.net.br/wp/book-livro/>https://bipes.net.br/wp/book-livro/</a></p><p>Дякуємо від команди BIPES!</p>"

  
  
  };
  
// Toolbox categories
Blockly.Msg['CAT_TIMING'] = "Час і затримка";
Blockly.Msg['CAT_MACHINE'] = "Електроніка";
Blockly.Msg['CAT_DISPLAYS'] = "Дисплеї";
Blockly.Msg['CAT_SENSORS'] = "Датчики";
Blockly.Msg['CAT_OUTPUTS'] = "Виходи / Актуатори";
Blockly.Msg['CAT_COMM'] = "Комунікація";
Blockly.Msg['CAT_TEMP_HUMI'] = "Температура та Вологість";
Blockly.Msg['CAT_PRESS'] = "Тиск";
Blockly.Msg['CAT_FILES'] = "Файли";
Blockly.Msg['CAT_NET'] = "Мережа та Інтернет";
Blockly.Msg['CAT_CONTROL'] = "Контроль";
Blockly.Msg['CAT_IMU'] = "Інерційні Вимірювання";
Blockly.Msg['CAT_AIR'] = "Якість Повітря";
Blockly.Msg['CAT_ULTRASOUND'] = "Ультразвук";
Blockly.Msg['CAT_NEO'] = "Світлодіодна стрічка NeoPixel";
Blockly.Msg['CAT_CHAR_DISP'] = "Символьний дисплей";
Blockly.Msg['CAT_RELAY'] = "Реле";
Blockly.Msg['CAT_SERVO'] = "RC Сервомотор";
Blockly.Msg['CAT_STEPPER'] = "Кроковий двигун";
Blockly.Msg['CAT_DC_MOTOR'] = "DC двигун";

  
// Toolbox Text
Blockly.Msg['TXT_ULTRASOUND_DESCRIPTION'] = "Ультразвуковий датчик відстані HCSR04";
Blockly.Msg['TXT_ULTRASOUND_LIB'] = "Встановіть бібліотеку HCSR04";
Blockly.Msg['TXT_SERVO_DESCRIPTION'] = "Сервомотор";
Blockly.Msg['TXT_STEPPER_DESCRIPTION'] = "Кроковий двигун";
Blockly.Msg['TXT_DC_MOTOR_DESCRIPTION'] = "DC двигун";

  