//Code that exclusively handles the ui.
function get (e) {return document.querySelector (e); }
function getIn (a, b) {return a.querySelector (b); }
function getAll (e, f) {return get (e).querySelectorAll (f); }
function style (e) {return get (e).style; }
function fx (e, vfx) {e.style.Transition = vfx; }

$em = 16; // size of 1em

/* clear all schedules timeouts */
function clearAllTimeouts () {
  let id = window.setTimeout(() => {}, 0);
  while (id--) {
    window.clearTimeout(id);
  }
}

function unix2date (timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();
  return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}

function panel (button_, panel_) {
  this.panel_ = panel_;
  this.button = get (button_);
  this.panel = get (panel_);
  this.button.onclick = () => {this.showPanel ()};
}
panel.prototype.showPanel = function () {
  let panel_ = BIPES ['responsive'].panels [this.panel_];
  if(!panel_.show) {
    this.panel.id = 'show';
    if(panel_.from == 'notify-panel')
      BIPES ['notify'].container.id = '';
 } else
    this.panel.id = '';
  panel_.show = !panel_.show;
}


language.prototype = Object.create (panel.prototype);
function language (button_, panel_) {
	panel.call (this, button_, panel_);
  this.panel.appendChild(document.createTextNode(MSG['languageTooltip']));
}

function notify () {
  this.panel_ = '.notify-panel'
	this.container = get ('.notify');
	this.panel = get (this.panel_);
  this.messages = [];
  this.buffer_count = 0;
  this.timeOut;
  this.timeOut2;
}
notify.prototype.send = function (message) {
  console.log (message);
  this.messages.push({timestamp: +new Date, message: message});
  let last_message;
  let this_message = this.messages [this.messages.length - 1];
  if(!!this.messages [this.messages.length - 2]) last_message = this.messages [this.messages.length - 2].message;
  let closeButton_ = document.createElement ('span');
  closeButton_.classList.add("icon");
  closeButton_.id="trashIcon";
  this_message.div = document.createElement ('span');
  this_message.div.title = unix2date(this_message.timestamp) + ": " + message;
  this_message.div.appendChild(document.createTextNode(message));
  this_message.div.appendChild(closeButton_);
  // remove notification on click
  this_message.div.onclick = (ev) => {try {this.panel.removeChild(ev.target.parentNode)}catch(e){};};
  this.panel.appendChild(this_message.div);

  let panel_ = BIPES ['responsive'].panels [this.panel_];
  if (!panel_.show) {
    if(last_message == message && this.container.id == 'show') {
        this.buffer_count = this.buffer_count + 1;
        this.container.innerHTML = `(${this.buffer_count}x) ${message}`;
    } else {
        if (this.container.innerHTML == '')
          this.container.innerHTML = message;
        else
          this.container.innerHTML = message + '<hr>' + this.container.innerHTML,
        this.buffer_count = 0;
    }

    this.container.id = 'show';

    clearAllTimeouts();
    this.timeOut = setTimeout( () => {
      this.container.id = '';
      this.buffer_count = 0;
      this.timeOut2 = setTimeout( () => {
      this.container.innerHTML = '';}, 150);
    }, 3000);
  }
}


function responsive () {
  this.body = get ('body');
	this.panels = {'.toolbar':{from:'toolbar',x:$em*18.5, y:$em*7.5, show:false},
	               '.notify-panel':{from:'notify-panel',x:$em*18.5, y:0, show:false},
	               '.language-panel':{from:'language',x:$em*18.5, y:$em*13, show:false}};
  this.binded = false;

  this.body.onclick = (ev) => {this.hidePanels (ev)};
}

async function xhrGET (filename, responsetype, onsuccess, onfail) {
  let xmlHTTP = new XMLHttpRequest ();

	xmlHTTP.open ('GET', filename);
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
      BIPES ['notify'].send(MSG['ErrorGET']);
    }
	  xmlHTTP.send();
}
responsive.prototype.hidePanels = function (ev) {
  if (ev.x !== 0 && ev.y !== 0) {
    let minx = 0;
    let miny = 0;
    for (const prop in this.panels) {
      let item = this.panels[prop];
      if (item.show === true) {
        if (item.x > minx)
          minx = item.x;
        if (item.y > miny)
          miny = item.y;
        if (item.y === 0)
          miny = window.innerHeight;
      }
    };
    for (const prop in this.panels) {
      if (((window.innerWidth - minx) > (ev.x) || miny < (ev.y)) && this.panels[prop].show === true) {
        BIPES [this.panels[prop].from].panel.id='';
        this.panels[prop].show = false;
      }
    };
  }
}


function workspace () {
    this.defaultToolbox = 'toolbox.xml';
    this.selector = get('#device_selector');
    this.content = get('#content_device');
    this.device_title = getIn(this.content, '#device_title'),
    this.device_img = getIn(this.content, '#device_img'),
    this.device_desc = getIn(this.content, '#device_desc');
    this.devices = [];
    xhrGET("devinfo/devinfo.json", 'json', (response) => {
      this.devices = response.devices;
      this.change ();
    });

    this.selector.onchange = () => {this.change ()};

    this.saveButton = get('#saveButton');
    this.loadButton = get('#loadButton');
    this.saveButton.onclick = () => {this.saveXML ()};
    this.loadButton.onclick = () => {this.loadXML ()};
}

workspace.prototype.change = function () {

  if (this.selector.value in this.devices) {
    let selected = this.devices [this.selector.value];
    this.device_title.innerHTML = selected.title,
    this.device_img.src = selected.img,
    this.device_desc.innerHTML = selected.description;

    if (!!selected.toolbox) { // checks if toolbox is set
       xhrGET(selected.toolbox, 'document', (XML_) => {
        Code.reloadToolbox(XML_);
      });
    } else {
        xhrGET(this.defaultToolbox, 'document', (XML_) => {
          Code.reloadToolbox(XML_);
        });
        BIPES ['notify'].send(MSG['noToolbox']);
    }

    /* refreshes block pinout with device change */
    let blocks = Code.workspace.getBlocksByType('pinout');
     Code.workspace.getBlocksByType('pinout').forEach ((block, id) => {
       block.refresh ();
     });
    if (blocks.length != 0) BIPES ['notify'].send (MSG['wrongDevicePin']);

    Code.renderContent (); // renders selected tab

  } else
    BIPES ['notify'].send(MSG['invalidDevice']);
}

workspace.prototype.saveXML = function () {
  let xmlText = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(Code.workspace));
  xmlText = this.writeWorkspace (xmlText);
	let data = "data:x-application/xml;charset=utf-8," + encodeURIComponent(xmlText);

	let element = document.createElement('a');
	element.setAttribute('href', data),
	element.setAttribute('download', 'bipes_blocks.xml'),
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click ();
	document.body.removeChild(element);
}

workspace.prototype.readWorkspace = function (xml) {
  let regex_ = /(<workspace>.*<\/workspace>\n)/s;
  if (regex_.test(xml)) {
    let workspace_chunk = xml.match (regex_) [0];
    xml = xml.replace (regex_,'');

    let device = workspace_chunk.match(/<field name="DEVICE">(.+)<\/field>/);
    let timestamp = workspace_chunk.match(/<field name="TIMESTAMP">(.+)<\/field>/);

    return [device [1], xml, timestamp [1]];
  } else {
    return ['', xml, 0];
  }
}

workspace.prototype.writeWorkspace = function (xml) {
  let timestamp =  + new Date();
  let device = this.selector.value;
  xml = xml.replace(/(xmlns=")(?:.+?)(")/g, '$1https://bipes.net.br$2').replace(/\n/, `\n  <workspace>\n    <field name="DEVICE">${device}</field>\n    <field name="TIMESTAMP">${timestamp}</field>\n  </workspace>\n`);

  return xml;
}

workspace.prototype.loadXML = function () {
  this.promptFile().then((file) => {
	  let reader = new FileReader ();
	  reader.readAsText(file,'UTF-8');
    let self = this;
	  reader.onload = readerEvent => {
	      BIPES ['notify'].send (MSG['blocksLoadedFromFile'].replace('%1', file.name));

	      let [device, content, timestamp] = this.readWorkspace (readerEvent.target.result);
        if (device in this.devices)
          this.selector.value = device; //will also trigger workspace.change () as expected
        else if (device != '')
          BIPES ['notify'].send (MSG['deviceUnavailable'].replace ('%1', device));

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


