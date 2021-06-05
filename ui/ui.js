//Code that exclusively handles the ui.
function get (e) {return document.querySelector (e); }
function getIn (a, b) {return a.querySelector (b); }
function getAll (e, f) {return get (e).querySelectorAll (f); }
function style (e) {return get (e).style; }
function fx (e, vfx) {e.style.Transition = vfx; }

function notify () {
	this.container = get ('.notify');
	this.panel = get ('.notify-panel');
	this.panelEnabled = false;
  this.messages = [];
  this.timeOut;
  this.timeOut2;
}
notify.prototype.send = function (message) {
  console.log (message);
  this.messages.push({timestamp: +new Date, message: message});
  let this_message = this.messages [this.messages.length-1];
  let closeButton_ = document.createElement ('span');
  this_message.div = document.createElement ('span');
  this_message.div.appendChild(document.createTextNode(message));
  this_message.div.appendChild(closeButton_);
  // remove notification on click
  this_message.div.onclick = (ev) => {this.panel.removeChild(ev.target.parentNode);};

  this.container.innerHTML = message + "<p>" + this.container.innerHTML,
  this.panel.appendChild(this_message.div);

  if(!this.panelEnabled) {
    this.container.id = 'show';

    clearTimeout(this.TimeOut);
    clearTimeout(this.TimeOut2);
    this.timeOut = setTimeout( () => {
      this.container.id = '';
      this.timeOut2 = setTimeout( () => {
      this.container.innerHTML = '';}, 150);
    }, 5000);
  }
}




notify.prototype.showPanel = function () {
  if(!this.panelEnabled)
    this.container.id = '',
    setTimeout( () => {this.container.innerHTML = '';}, 150),
    this.panel.id = 'show';
  else
    this.panel.id = '';
  this.panelEnabled = !this.panelEnabled;
}

function language () {
	this.panel = get ('.language-panel');
	this.panelEnabled = false;
  this.panel.appendChild(document.createTextNode(MSG['languageTooltip']))
}

language.prototype.showPanel = function () {
  if(!this.panelEnabled)
    this.panel.id = 'show';
  else
    this.panel.id = '';
  this.panelEnabled = !this.panelEnabled;
}

function xhrGET (filename, onsuccess, onfail) {
  let xmlHTTP = new XMLHttpRequest ();

	xmlHTTP.open ('GET', filename, false);
	xmlHTTP.onload = function () {
    if (this.status == 200)
      onsuccess (this.responseText);
    else
      onfail ();
	}
	xmlHTTP.send(null);
}


function workspace () {
    this.selector = get('#device_selector');
    this.content = get('#content_device');
    this.device_title = getIn(this.content, '#device_title'),
    this.device_img = getIn(this.content, '#device_img'),
    this.device_desc = getIn(this.content, '#device_desc');
    this.toolbox = get('#toolbox');


    // list of implemented devices
    this.devices = ['ESP8266','ESP32-oled'];

    // setup, could be used and external JSON file instead.
    this.devices = [
      {name:'ESP8266',
      title:'<b>ESP8266</b><br>',
      img:'devinfo/Node-MCU-ESP-12E-Pin-Out-Diagram2.jpg',
      description:"<BR><BR><input type='button' onclick='loadDoc(\"\");' value='Open Documentation' /> <BR><BR>To use ESP8266, simply connecto to MicroPython board using Wifi. Micropython must be previously installed.",
      toolbox:'toolbox_esp8266.xml'},

      {name:'ESP32',
      title:'<b>ESP32</b><br>',
      img:'devinfo/ESP32-Pinout.jpg',
      description:"",
      toolbox:'toolbox_esp32.xml'}
    ];

    this.selector.onchange = () => {this.change ()};

}

workspace.prototype.change = function () {
  let selected = this.devices.find ( ({name}) => name === this.selector.value)
  if (selected != undefined) {
    this.device_title.innerHTML = selected.name,
    this.device_img.src = selected.img,
    this.device_desc.innerHTML = selected.description;


     xhrGET(selected.toolbox, (response) => {
      this.toolbox.innerHTML = response;
      Code.workspace.updateToolbox(this.toolbox);
    }, () => {
       BIPES ['notify'].send(MSG['ErrorGET']);

    });
  } else
    BIPES ['notify'].send(MSG['invalidBoard']);
}
