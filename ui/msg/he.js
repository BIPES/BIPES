var MSG = {
  title: "קוד",
  blocks: "קטעי קוד",
  files: "קבצים",
  shared: "מְשׁוּתָף",
  device: "התקן",
  linkTooltip: "שמירה וקישור לקטעי קוד.",
  runTooltip: "הרצת התכנית שהוגדרה על ידי קטעי הקוד שבמרחב העבודה.",
  badCode: "שגיאה בתכנית: %1",
  timeout: "חריגה ממספר פעולות חוזרות אפשריות.",
  trashTooltip: "השלך את כל קטעי הקוד.",
  catLogic: "לוגיקה",
  catLoops: "לולאות",
  catMath: "מתמטיקה",
  catText: "טקסט",
  catLists: "רשימות",
  catColour: "צבע",
  catVariables: "משתנים",
  catFunctions: "פונקציות",
  listVariable: "רשימה",
  textVariable: "טקסט",
  httpRequestError: "הבקשה נכשלה.",
  linkAlert: "ניתן לשתף את קטעי הקוד שלך באמצעות קישור זה:\n\n%1",
  hashError: "לצערנו, '%1' איננו מתאים לאף אחת מהתוכניות השמורות",
  xmlError: "נסיון הטעינה של הקובץ השמור שלך נכשל. האם ייתכן שהוא נוצר בגרסא שונה של blockly?",
  badXml: "תקלה בפענוח XML:\n\n%1\n\nנא לבחור 'אישור' כדי לנטוש את השינויים שלך או 'ביטול' כדי להמשיך ולערוך את ה־XML."
  saveTooltip: "שמור קטעי קוד לקובץ.",
  loadTooltip: "טען קטעי קוד מהקובץ.",
  notificationTooltip: "פאנל הודעות.",
  ErrorGET: "לא ניתן לטעון את הקובץ המבוקש.",
  invalidDevice: "מכשיר לא חוקי.",
  languageTooltip: "שנה שפה.",
  noToolbox: "למכשיר אין ערכת כלים.",
  networkTooltip: "התחבר דרך רשת (WebREPL, http).",
  serialTooltip: "התחבר באמצעות טורי/USB או Bluetooth (Web Serial API, https).",
  toolbarTooltip: "הצג סרגל כלים",
  wrongDevicePin: "בדוק סיכות, מכשיר היעד שונה!",
  notDefined: "לא מוגדר",
  editAsFileValue: "ערוך כקובץ",
  editAsFileTooltip: "ערוך את קוד פיתון ושמור במערכת הקבצים של המכשיר.",
  forumTooltip: "פורום עזרה.",
  accountTooltip: "הפרויקטים וההגדרות שלך.",
  blocksLoadedFromFile: "קטעי קוד נטענו מהקובץ '%1'.",
  deviceUnavailable: "מכשיר '% 1' אינו זמין.",
  notConnected: "אין חיבור לשליחת נתונים.",
  serialFroozen: "החיבור הטורי אינו מגיב.",
  notAvailableFlag: "$1 אינו זמין בדפדפן שלך.\r\nאנא ודא שדגל $1 מופעל.",

//Blocks
  block_delay: "לְעַכֵּב",
  seconds: "שניות",
  milliseconds: "אלפיות השנייה",
  microseconds: "מיקרו שניות",
  to: "ל",
  setpin: "הגדר סיכה פלט",
  pin: "סיכה",
  read_digital_pin: "לקרוא קלט דיגיטלי",
  read_analog_pin: "לקרוא קלט אנלוגי",
  show_iot: "הצג בכרטיסיית IoT",
  data: "ערך",
  set_rtc: "להגדיר תאריך ושעה",
  get_rtc: "לקבל תאריך ושעה",
  year: "שָׁנָה",
  month: "חוֹדֶשׁ",
  day: "יְוֹם",
  hour: "שָׁעָה",
  minute: "דַקָה",
  second: "שְׁנִיָה",
  wifi_scan: "לסרוק רשתות wifi",
  wifi_connect: "להתחבר לרשת wifi",
  wifi_name: "שם רשת",
  wifi_key: "מפתח/סיסמה",
  easymqtt_start: "EasyMQTT התחל",
  easymqtt_publish: "EasyMQTT פרסם נתונים",
  topic: "נוֹשֵׂא",
  session_id: "מזהה הפעלה",
  file_open: "קובץ פתוח",
  file_name: "שם קובץ",
  file_mode: "מצב",
  file_binary: "פתוח במצב בינארי",
  file_close: "לסגור קובץ",
  file_write_line: "כתוב שורה לקובץ",
  file_line: "קַו",
  try1: "לְנַסוֹת",
  exp1: "מלבד",
  ntp_sync: "סנכרון תאריך ושעה עם NTP",
  timezone: "אזור זמן",
  project_info: "מידע על הפרויקט",
  project_info_author: "מְחַבֵּר",
  project_info_desc: "תיאור",
  easymqtt_subscribe: "EasyMQTT הירשם לנושא",
  when: "מתי",
  data_received: "מתקבל",
  easymqtt_receive: "EasyMQTT מקבל נתונים",
  relay: "ממסר",
  on: "להדליק",
  off: "לכבות",
  relay_on: "ממסר על סיכה",
  yes: "כן",
  no: "לא",
  wait_for_data: "לחכות לנתונים",
  dht_start: "הפעל את חיישן DHT",
  dht_measure: "עדכון קריאת חיישן DHT11/22",
  dht_temp: "לקבל טמפרטורה DHT11/22",
  dht_humi: "לקבל לחות DHT11/22",
  type: "סוּג",

//BMP180
  pressure: "לַחַץ",
  temperature: "טֶמפֶּרָטוּרָה",
  altitude: "גוֹבַה",
  bmp180_init: "Init BMP180",

//SHT20
  init_sht20: "Init SHT20",
  humidity: "לחות",

//Network
  net_http_get: "בקשת HTTP GET",
  net_http_get_status: "קוד סטטוס HTTP",
  net_http_get_content: "תוכן תגובת HTTP",
  net_http_server_start: "הפעל את שרת האינטרנט HTTP",
  net_http_server_start_port: "נמל",
  net_http_server_wait: "המתן ללקוח HTTP",
  net_http_server_requested_page: "דף אינטרנט מבוקש",
  net_http_server_send_response: "שלח תגובת HTTP",
  net_http_server_send_html: "HTML",

//Splash screen
  splash_welcome: "ברוכים הבאים ל-BIPES!",
  splash_footer: "אל תציג את המסך הזה שוב",
  splash_close: "סגור",
  splash_message: "<p><b>BIPES: פלטפורמה משולבת מבוססת קטע קוד למערכות משובצות</B> מאפשרת תכנות מבוסס טקסט וקטע קוד עבור מספר סוגים של מערכות משובצות ומודולים של האינטרנט של הדברים באמצעות MicroPython, CircuitPython, Python או Snek. אתה יכול לחבר, לתכנת, לנפות באגים ולנטר מספר סוגים של לוחות באמצעות רשת, USB או Bluetooth. אנא בדוק רשימה של <a href=https://bipes.net.br/wp/boards/>לוחות תואמים כאן</a>. לוחות תואמים כוללים STM32, ESP32, ESP8266, Raspberry Pi Pico ואפילו Arduino. <p><b>BIPES</b> הוא מלא <a href=https://bipes.net.br/wp/development/>קוד פתוח</a> ומבוסס על HTML ו-JavaScript, כך שאין התקנת תוכנה או יש צורך בתצורה ואתה יכול להשתמש בה במצב לא מקוון! אנו מקווים ש-BIPES שימושי עבורך ושתוכל ליהנות מהשימוש ב-BIPES. אם אתה צריך עזרה, יש לנו כעת <a href=https://github.com/BIPES/BIPES/discussions>פורום דיונים</a>, שבו אנו מפרסמים גם <a href=https://github.com/ BIPES/BIPES/discussions/categories/announcements>תכונות חדשות והכרזות על BIPES</a>. אתה מוזמן להשתמש בו! כמו כן, אנו מזמינים אותך להשתמש בפורום כדי להשאיר משוב והצעות עבור BIPES!</p><p>עכשיו אתה יכול לטעון בקלות את MicroPython ב-ESP32 או ESP8226 שלך לשימוש עם BIPES: <a href=https://bipes. net.br/flash/esp-web-tools/>https://bipes.net.br/flash/esp-web-tools/</a></p><p>Checkout BIPES הזמן ב-<a href= https://bipes.net.br/wp/book-livro/>https://bipes.net.br/wp/book-livro/</a></p> <p>תודה מצוות BIPES !</p>"

  

};

//Toolbox categories
Blockly.Msg['CAT_TIMING'] = "תִזמוּן";
Blockly.Msg['CAT_MACHINE'] = "מְכוֹנָה";
Blockly.Msg['CAT_DISPLAYS'] = "תצוגות";
Blockly.Msg['CAT_SENSORS'] = "חיישנים";
Blockly.Msg['CAT_OUTPUTS'] = "פלטים / מפעילים";
Blockly.Msg['CAT_COMM'] = "תִקשׁוֹרֶת";
Blockly.Msg['CAT_TEMP_HUMI'] = "טמפרטורה ולחות";
Blockly.Msg['CAT_PRESS'] = "לַחַץ";
Blockly.Msg['CAT_FILES'] = "קבצים";
Blockly.Msg['CAT_NET'] = "רשת ואינטרנט";
Blockly.Msg['CAT_CONTROL'] = "לִשְׁלוֹט";
Blockly.Msg['CAT_IMU'] = "מדידת אינרציה";
Blockly.Msg['CAT_AIR'] = "איכות אוויר";

