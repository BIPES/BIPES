'use strict';
//Code that exclusively handles the ui.
function get (e) {return document.querySelector (e); }
function getIn (a, b) {return a.querySelector (b); }
function getAll (e, f) {return get (e).querySelectorAll (f); }
function style (e) {return get (e).style; }
function fx (e, vfx) {e.style.Transition = vfx; }

var $em = 16; // size of 1em

function panel (button_, panel_) {
  this.panel_ = panel_;
  this.button = get (button_);
  this.panel = get (panel_);
  this.button.onclick = () => {this.showPanel ()};
}
panel.prototype.showPanel = function () {
  let panel_ = UI ['responsive'].panels [this.panel_];
  if(!panel_.show) {
    this.panel.id = "show";
    if(panel_.from == 'notify-panel')
      UI ['notify'].container.id = '';
 } else {
    this.panel.id = '';
  }
  panel_.show = !panel_.show;
}


language.prototype = Object.create (panel.prototype);
function language (button_, panel_) {
	panel.call (this, button_, panel_);
  this.panel.appendChild(document.createTextNode(MSG['languageTooltip']));
}

channelPanel.prototype = Object.create (panel.prototype);
function channelPanel (button_, panel_) {
	panel.call (this, button_, panel_);
  this.bluetooth = get ('#bluetoothButton');
  this.serial = get ('#serialButton');
  this.network = get ('#networkButton');
  this.hidePanel = (target_) => {
    this.panel.id = '';
    this.button.className = `icon ${target_}`;
    UI ['responsive'].panels [this.panel_].show = false;
  };

  this.button.className = `icon ${Channel ['mux'].currentChannel}`;
  this.bluetooth.onclick = () => {this.hidePanel ('webbluetooth'); Channel ['mux'].switch('webbluetooth');};
  this.serial.onclick = () => {this.hidePanel ('webserial'); Channel ['mux'].switch('webserial');};
  this.network.onclick = () => {this.hidePanel ('websocket'); Channel['mux'].switch('websocket');};
}

function notify () {
  this.panel_ = '.notify-panel'
	this.container = get ('.notify');
	this.container.innerHTML = '';
	this.panel = get (this.panel_);
  this.messages = [];
  this.logs = [];
  this.buffer_count = 0;
  this.timeOut;
  this.timeOut2;
}
notify.prototype.send = function (message) {
  console.log (`Notification: ${message}`);
  this.messages.push ({timestamp: +new Date, message: message});
  let last_message;
  let this_message = this.messages [this.messages.length - 1];
  if(!!this.messages [this.messages.length - 2]) last_message = this.messages [this.messages.length - 2].message;
  let closeButton_ = document.createElement ('span');
  closeButton_.classList.add("icon");
  closeButton_.id="trashIcon";
  this_message.div = document.createElement ('span');
  let time_ =  Tool.unix2date(this_message.timestamp);
  let message_ = `[${time_}] ${message}`;
  this_message.div.title = message_;
  this_message.div.appendChild(document.createTextNode(message_));
  this_message.div.appendChild(closeButton_);
  // remove notification on click
  this_message.div.onclick = (ev) => {try {this.panel.removeChild(ev.target.parentNode)}catch(e){};};
  this.panel.appendChild(this_message.div);

  let panel_ = UI ['responsive'].panels [this.panel_];
  if (!panel_.show) {
    if(last_message == message && this.container.id == 'show') {
        this.buffer_count = this.buffer_count + 1;
        this.container.innerHTML = `(${this.buffer_count}x) ${message_}`;
    } else {
        if (this.container.innerHTML == '')
          this.container.innerHTML = message_;
        else
          this.container.innerHTML = `${message_}<hr>${this.container.innerHTML}`;
        this.buffer_count = 0;
    }

    this.container.id = 'show';

    window.clearTimeout(this.timeOut);
    this.timeOut = setTimeout( () => {
      this.container.id = '';
      this.buffer_count = 0;
      this.timeOut2 = setTimeout( () => {
      this.container.innerHTML = '';}, 150);
    }, 3000);
  }
}
notify.prototype.log = function (message) {
  this.logs.push ({timestamp: +new Date, message: message});
}

function responsive () {
  this.mobile = window.innerWidth < 60*$em ? true : false;
  this.body = get ('body');
	this.panels = {'.toolbar':{from:'toolbar',x:$em*18.5, x2:0, y:$em*7.5, show:false},
	               '.notify-panel':{from:'notify-panel',x:$em*18.5, x2:0, y:0, show:false},
	               '.language-panel':{from:'language',x:$em*18.5, x2:0, y:$em*13, show:false},
	               '.channel-panel':{from:'channel-panel',x:$em*42.5, x2:$em*22, y:$em*25.5, show:false}};
  this.binded = false;

  this.body.onclick = (ev) => {this.hidePanels (ev)};
  window.onresize = () => {
    this.mobile = window.innerWidth < 60*$em ? true : false;
  };
}

async function xhrGET (filename, responsetype, onsuccess, onfail) {
  let xmlHTTP = new XMLHttpRequest ();

  if (!Channel ['mux'].isLocalFile) {
    xmlHTTP.open ('GET', `${filename}`);
    xmlHTTP.responseType = responsetype;
    xmlHTTP.onload = function () {
      if (this.status == 200) {
        if (responsetype == 'text' || responsetype == '')
          onsuccess (this.responseText);
        else if (responsetype == 'document')
          onsuccess (this.responseXML);
        else
          onsuccess (this.response);
      } else if (onfail != undefined)
        onfail ();
      else
        UI ['notify'].send(MSG['ErrorGET']);
      }
  xmlHTTP.send();
	} else {
	  alert("Please run at a server or use the live version at bipes.net.br/beta2/ui. We can't load some files locally.")
	}
}
responsive.prototype.hidePanels = function (ev) {
  if (ev.x !== 0 && ev.y !== 0) {
    let minx = 0;
    let minx2 = Infinity;
    let miny = 0;
    for (const prop in this.panels) {
      let item = this.panels[prop];
      let x = this.mobile ? item.x-item.x2 : item.x;
      let x2 = this.mobile ? 0 : item.x2;
      if (item.show === true) {
        if (x > minx)
          minx = x;
        if (x2 < minx2)
          minx2 = x2;
        if (item.y > miny)
          miny = item.y;
        if (item.y === 0)
          miny = window.innerHeight;
      }
    };
    for (const prop in this.panels) {
      if (((((window.innerWidth - minx) > (ev.x)) || ((minx2) > (window.innerWidth - ev.x))) || miny < (ev.y)) && this.panels[prop].show === true) {
        UI [this.panels[prop].from].panel.id='';
        this.panels[prop].show = false;
      }
    };
  }
}

function progress () {
	this.dom = get ('.progress-bar');
	this.div = document.createElement ('div');
	this.dom.appendChild (this.div);
	this.len;

	this.load = function (loaded, total) {
		var percent = (loaded * 100 / total);
		this.div.style.width = percent + '%';
	}
	this.remain = function (len_) {
		var percent = ((this.len - len_) * 100 / this.len);
		this.div.style.width = percent + '%';
	}
	this.start = (len_) => {
	  this.len = len_;
	  this.dom.id = 'on';
	}
	this.end = () => {
	  this.dom.id = '';
    this.div.style.width = '0%';
	}
}


function workspace () {
    this.defaultToolbox = 'default.xml';
    this.selector = get('#device_selector');
    this.content = get('#content_device');
    this.toolbarButton = get('#toolbarButton');
    this.channel_connect = get('#channel_connect');
    this.device_title = getIn(this.content, '#device_title'),
    this.device_img = getIn(this.content, '#device_img'),
    this.device_desc = getIn(this.content, '#device_desc');
    this.devices = [];
    xhrGET("devinfo/devinfo.json", 'json', (response) => {
      this.devices = response.devices;
      if (!/#(.)/.test(window.location.href)) // checks if there is a file to be loaded
        this.change ();
    });
    this.selector.onchange = () => {this.change ()};

    this.websocket = {connected:false, reconnect:false, url:get('#url'), pass:get('#password')};
    this.bluetooth = {connected:false};
    this.webserial = {connected:false};
    this.runButton = {
        dom:get('#runButton'),
        status:true
      };
    this.connectButton = get('#connectButton');
    this.saveButton = get('#saveButton');
    this.loadButton = get('#loadButton');
    this.connectButton.onclick = () => {this.connectClick ()};
    this.runButton.dom.onclick = () => {this.run ()};
    this.saveButton.onclick = () => {this.saveXML ()};
    this.loadButton.onclick = () => {this.loadXML ()};

    this.resetBoard = get('#resetBoard');
    this.term = get('#term');
    this.file_status = get('#file-status');
    this.put_file_list = get('#put-file-list');
    this.put_file_button = get('#put-file-button');
    this.put_file_select = get('#put-file-select');
    this.file = get('#content_file_name');
    this.content_file_name = get('#content_file_name');
    this.put_file_select.onchange = () => {Files.handle_put_file_select ()};
    this.put_file_button.disabled = true;
}

workspace.prototype.run = function () {
  if (this.runButton.status) {
    if(mux.connected ()) {
        Tool.runPython();
    } else {
      this.buttonConnect ();
      setTimeout(() => { mux.connected (); Tool.runPython();}, 2000);
    }
  } else {
    Tool.stopPython();
  }
}

workspace.prototype.connecting = function () {
  this.toolbarButton.className = 'icon medium wait';
  this.channel_connect.className = 'wait';
}

workspace.prototype.buttonConnect = function () {
  Channel ['mux'].connect ();
}

workspace.prototype.websocketConnected = function () {
  this.websocket.url.disabled = true;
}

workspace.prototype.connectClick = function () {
  if (mux.connected ()) {
    mux.disconnect ();
  } else {
    this.buttonConnect ();
  }
}

workspace.prototype.receiving = function () {
  this.channel_connect.className = '';
  this.runButton.status = false;
  this.runButton.dom.className = 'icon on';
  this.toolbarButton.className = 'icon medium on';
  this.connectButton.className = 'icon on';
  this.term.className = 'on';
}

workspace.prototype.runAbort = function () {
  this.runButton.status = true;
  this.runButton.dom.className = 'icon';
  this.toolbarButton.className = 'icon medium';
  this.connectButton.className = 'icon';
  this.term.className = '';
  this.websocket.url.disabled = false;
  this.connectButton.value = "Connect";
}

workspace.prototype.change = function () {

  if (this.selector.value in this.devices) {
    let selected = this.devices [this.selector.value];
    this.device_title.innerHTML = selected.title,
    this.device_img.src = selected.img,
    this.device_desc.innerHTML = selected.description;

    if (!!selected.toolbox) { // checks if toolbox is set
       xhrGET(`toolbox/${selected.toolbox}`, 'document', (XML_) => {
        Code.reloadToolbox(XML_);
      });
    } else {
        xhrGET(`toolbox/${this.defaultToolbox}`, 'document', (XML_) => {
          Code.reloadToolbox(XML_);
        });
        UI ['notify'].send(MSG['noToolbox']);
    }

    /* refreshes block pinout with device change */
    let blocks = Code.workspace.getBlocksByType('pinout');
     Code.workspace.getBlocksByType('pinout').forEach ((block, id) => {
       block.refresh ();
     });
    if (blocks.length != 0) UI ['notify'].send (MSG['wrongDevicePin']);

    Code.renderContent (); // renders selected tab

    Channel ['webserial'].packetSize = parseInt(selected.serial_packet_size);

  } else
    UI ['notify'].send(MSG['invalidDevice']);
}

workspace.prototype.changeTo = function (device) {
    if (device in this.devices)
      this.selector.value = device,
      this.change ();
    else if (device != '')
      UI ['notify'].send (MSG['deviceUnavailable'].replace ('%1', device));
}

workspace.prototype.saveXML = function () {
  let xmlText = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(Code.workspace));
  xmlText = this.writeWorkspace (xmlText, true);
	let data = "data:x-application/xml;charset=utf-8," + encodeURIComponent(xmlText);

	let element = document.createElement('a');
	element.setAttribute('href', data),
	element.setAttribute('download', 'bipes_blocks.xml'),
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click ();
	document.body.removeChild(element);
}

workspace.prototype.readWorkspace = function (xml, prettyText) {
  let regex_;
  if (prettyText)
    regex_ = /(<workspace>.*<\/workspace>\n)/s;
  else
    regex_ = /(<workspace>.*<\/workspace>)/;
  if (regex_.test(xml)) {
    let workspace_chunk = xml.match (regex_) [0];
    xml = xml.replace (regex_,'');

    let device = workspace_chunk.match(/<field name="DEVICE">(.+?)<\/field>/) [1];
    let timestamp = workspace_chunk.match(/<field name="TIMESTAMP">(.+?)<\/field>/) [1];

    this.changeTo (device);
  }
  return xml;
}

workspace.prototype.writeWorkspace = function (xml, prettyText) {
  let timestamp =  + new Date();
  let device = this.selector.value;
  xml = xml.replace(/(xmlns=")(?:.+?)(")/g, '$1https://bipes.net.br$2')
  if (prettyText)
    xml = xml.replace(/(<xml xmlns=".+?">\n)/, `$1  <workspace>\n    <field name="DEVICE">${device}</field>\n    <field name="TIMESTAMP">${timestamp}</field>\n  </workspace>\n`);
  else
    xml = xml.replace(/(<xml xmlns=".+?">)/, `$1<workspace><field name="DEVICE">${device}</field><field name="TIMESTAMP">${timestamp}</field></workspace>`);
  return xml;
}

workspace.prototype.loadXML = function () {
  this.promptFile().then((file) => {
	  let reader = new FileReader ();
	  reader.readAsText(file,'UTF-8');
    let self = this;
	  reader.onload = readerEvent => {
	      UI ['notify'].send (MSG['blocksLoadedFromFile'].replace('%1', file.name));

	      let content = this.readWorkspace (readerEvent.target.result, true);

	      let xml = Blockly.Xml.textToDom(content);
	      Blockly.Xml.domToWorkspace(xml, Code.workspace);
	  }

  });
}

workspace.prototype.promptFile = function (contentType, multiple) {
  let input = document.createElement("input");
  input.type = "file";

  input.multiple = false;
  input.accept = contentType;
  return new Promise(function(resolve) {
      document.activeElement.onfocus = function() {
      document.activeElement.onfocus = null;
      setTimeout(resolve, 100);
    };
    input.onchange = function() {
      let files = Array.from(input.files);
      if (multiple)
        return resolve(files);
      resolve(files[0]);
    };
    input.click();
  });
}

