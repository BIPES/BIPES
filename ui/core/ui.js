'use strict';
function get (e) {return document.querySelector (e); }
function getIn (a, b) {return a.querySelector (b); }
function getAll (e, f) {return get (e).querySelectorAll (f); }
function style (e) {return get (e).style; }
function fx (e, vfx) {e.style.Transition = vfx; }

var $em = 16; // size of 1em

/**
 * Attach a panel that contains a button to shows and hides it.
 * @typedef {panel}
 * @param {string} button_ - the query selector for the button.
 * @param {string} panel_ - the query selector for the panel.
 */
function panel (button_, panel_) {
  this.panel_ = panel_;
  this.button = get (button_);
  this.panel = get (panel_);
  this.button.onclick = () => {this.showPanel ()};
}
/**
 * Show or hide the panel.
 */
panel.prototype.showPanel = function () {
  let panel_ = UI ['responsive'].panels [this.panel_];

  UI ['responsive'].closeZone._dom.classList.add('on')

  if(!panel_.show) {
    this.panel.id = "show";
    if(panel_.from == 'notify-panel')
      UI ['notify'].container.id = '';
 } else {
    this.panel.id = '';
  }
  panel_.show = !panel_.show;
  if (this.onOpenPanel_ != undefined)
    this.onOpenPanel_ ();
}

account.prototype = Object.create (panel.prototype);
/**
 * The account panel to manage projects and settings.
 * @type panel
 */
function account (button_, panel_) {
	panel.call (this, button_, panel_);
  this.projectList = get("#ProjectList");
  this.newProjectButton = get('#newProjectButton');
  this.dom_username = get('#account_user');
  this.dom_username.addEventListener("input", () => {localStorage.setItem('account_user', this.dom_username.innerText)});
  this.newProjectButton.onclick = () => {this.newProject ()};

  this.currentProject = {uid:'', xml:''};
	this.projects = [];

	if (localStorage ['account_user']) {
	  this.dom_username.innerText = localStorage ['account_user'];
	} else {
	  localStorage.setItem('account_user', 'User');
	}
}
/**
 * Check if project  listed in localStorage's item `bipes_projects` is stored in localStorage
 * and then list it in the account panel. If not, the item is discarted.
 * @param {Object} projects_ - parsed JSON from localStorage's item `bipes_projects`.
 */
account.prototype.restoreProjects = function (projects_) {
  this.projects = projects_;
  for (const prop in this.projects) {
    if (localStorage[prop]) {
      this.listProject (prop, this.projects[prop])
    } else {
      delete this.projects[prop]
    }
  }
}

/**
 * Open last edited project
 */
account.prototype.openLastEdited = function () {
  this.currentProject.uid  = Object.keys(this.projects).reduce((a, b) => (this.projects[a] > this.projects[b]) ? a : b);
  this.currentProject.xml = localStorage[this.currentProject.uid];

  getIn(this.projectList, `#${this.currentProject.uid}`).className = 'current';

  var xml = UI ['workspace'].readWorkspace (this.currentProject.xml, false);
  Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), Blockly.getMainWorkspace());
}

/**
 * List project in the account panel.
 * @param {string} uid - UID of the project
 * @param {string} timestamp - Timestamp for the project
 */
account.prototype.listProject = function (uid, timestamp) {
    let project_name = this.getProjectName_ (uid);
    timestamp = Tool.unix2date(timestamp);
    let short_project_name = project_name.length > 30 ? `${project_name.substring(0,27)}...` : project_name;
    let wrapper2_ = new DOM ('div', {'id':uid});
    let openButton_ = new DOM ('div', {innerText:short_project_name, className: 'runText', title:`Open project ${project_name}, created at ${timestamp}`})
        .onclick (this, this.openProject, [uid])
    let deleteButton_ = new DOM ('span', {className:'icon', id:'trashIcon', title:`Delete project ${project_name}`})
        .onclick (this, this.deleteProject, [uid])
    let downloadButton_ = new DOM ('span', {className:'icon', id:'downloadIcon', title:`Download project ${project_name}`})
        .onclick (this, UI ['workspace'].saveXML, [uid])

    let wrapper_ = new DOM ('div')
        .append([downloadButton_, deleteButton_])
    wrapper2_.append([openButton_, wrapper_])
    this.projectList.append(wrapper2_._dom)
}
/**
 * Open project.
 * @param {string} uid - UID of the project to be opened.
 */
account.prototype.openProject = function (uid) {
  if (this.currentProject.uid != '') {
    BlocklyStorage.backupBlocks_ ();
    try {getIn(this.projectList, `#${this.currentProject.uid}`).className = ''} catch (e) {};
  }
  let xml = localStorage[uid];

  this.currentProject.uid = uid;
  this.currentProject.xml = xml;

  getIn(this.projectList, `#${uid}`).className = 'current';

  this.projects[uid] = +new Date();

  BlocklyStorage.loadXml_ (xml, Blockly.getMainWorkspace());
  Files.handleCurrentProject ();
}
/**
 * Delete project.
 * @param {string} uid - UID of the project to be deleted.
 */
account.prototype.deleteProject = function (uid) {
  localStorage.removeItem (uid);
  delete this.projects[uid];
  localStorage.setItem('bipes_projects', JSON.stringify(this.projects))

  getIn(this.projectList, `#${uid}`).remove();

  if (this.currentProject.uid == uid) {
    this.currentProject.uid = '';
    this.currentProject.xml = '';
    if (Object.keys(this.projects).length == 0) {
      this.newProject ();
    } else {
      this.openProject (Object.keys(this.projects).reduce((a, b) => (this.projects[a] > this.projects[b]) ? a : b));
    }
  }
}
/**
 * Get project name from XML stored in localStorage.
 * @param {string} uid - UID of the project.
 */
account.prototype.getProjectName_ = function (uid) {
  let xml = localStorage[uid];
  let project_name = '';
  let regex_ = /<value name="project_description">.*?<\/value>/;
  if (regex_.test(xml)) {
    let project_description_chunk = xml.match (regex_) [0];
    project_name = project_description_chunk.match (/<field name="TEXT">(.*?)<\/field>/)[1].slice();
  } else {
    project_name = "My BIPES Project";
  }
  return project_name;
}
/**
 * Create new project and open it.
 */
account.prototype.newProject = function () {
  if (this.currentProject.uid != '') {
    BlocklyStorage.backupBlocks_ ();
    try{getIn(this.projectList, `#${this.currentProject.uid}`).className = ''} catch (e) {};
  }

  let emptyXML = Tool.emptyXML ();
  let uid = Tool.uid ();
  this.projects [uid] = +new Date ();
  localStorage.setItem('bipes_projects', JSON.stringify(this.projects))
  localStorage.setItem (uid, emptyXML)

  this.currentProject.uid = uid;
  this.currentProject.xml = emptyXML;

  this.listProject (uid, this.projects [uid]);

  BlocklyStorage.loadXml_ (emptyXML, Blockly.getMainWorkspace());

  getIn(this.projectList, `#${uid}`).className = 'current';
}
/**
 * Import a project to localStorage.
 * @param {string} xml - XML of the project to be imported.
 */
account.prototype.importProject = function (xml) {
  if (this.currentProject.uid != '') {
    BlocklyStorage.backupBlocks_ ();
    try{getIn(this.projectList, `#${this.currentProject.uid}`).className = ''} catch (e) {};
  }
  let uid = Tool.uid ();
  this.projects [uid] = +new Date ();
  localStorage.setItem('bipes_projects', JSON.stringify(this.projects))
  localStorage.setItem (uid, xml);

  this.currentProject.uid = uid;
  this.currentProject.xml = xml;

  this.listProject (uid, this.projects [uid]);

  BlocklyStorage.loadXml_ (xml, Blockly.getMainWorkspace());

  getIn(this.projectList, `#${uid}`).className = 'current';
}
/**
 * Set current project name from block to the account panel.
 * @param {string} str_ - Project name to be displayed in the account panle.
 */
account.prototype.setCurrentProjectName_ = function (str_) {
  let short_project_name = str_.length > 30 ? `${str_.substring(0,27)}...` : str_;

  let a_ = getIn(this.projectList, `#${this.currentProject.uid}`);
  let b_ = getIn(a_, '.runText')
  b_.innerText = short_project_name;
  b_.title = `Open project ${str_}.`;
}

account.prototype.onOpenPanel_ = function () {
   this.setCurrentProjectName_(Tool.makeAName(Code.generateCode(), ''));
}

channelPanel.prototype = Object.create (panel.prototype);
/**
 * The channel panel to connect and switch protocols.
 * @type panel
 */
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


/**
 * The notification class is used to show notifications and keep logs.
 */
class notify {
  constructor () {
    this.panel_ = '.notify-panel'
	  this.container = get ('.notify');
	  this.container.innerHTML = '';
	  this.panel = get (this.panel_);
    /**All messages are stored here*/
    this.messages = [];
    /**All logs are stored here*/
    this.logs = [];
    this.buffer_count = 0;
    this.timeOut;
    this.timeOut2;
  }
}
/**
 * Show a notification in the user interface, will also add it to :js:attr:`notify#logs`.
 * @param {string} message - The notification message.
 */
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
/**
 * Show a notification in the user interface, will also add it to :js:attr:`notify#logs`.
 * @param {string} message - The notification message.
 */
notify.prototype.log = function (message) {
  this.logs.push ({timestamp: +new Date, message: message});
}

/**
 * Do a XML Http request, if in offline mode, will try to find the data inside the index.html file.
 * @param {string} filename - The name of the file
 * @param {string} responsetype - The types of responses, 'document', 'text' or '' (empty).
 * @param {function} onsuccess -Callback function when the the XMLHttpRequest succeed.
 * @param {function} [onfail] - Callback function when the the XMLHttpRequest fails.
 */
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
      filename = filename.replace(/[\/\.]/g, '_')
	    let regex_xml = /_(.*)_xml/;
	    let regex_json = /_(.*)_json/;
      if (regex_json.test (filename)) {
	        window.addEventListener('load', () => {
            onsuccess(JSON.parse (eval(`OFFLINE_${filename}`)));
        }, false);
      } else if (regex_xml.test (filename)) {
        var xml_ = get(`#OFFLINE_${filename}`);
        if (xml_ == undefined) {
          xml_ = get(`#OFFLINE_toolbox_default_xml`);
          UI ['notify'].send(MSG['noToolbox']);
        }
        onsuccess(xml_);
	    } else
	      alert(`Could not find ${filename} locally, please run at a server or use the live version at bipes.net.br/beta2/ui.`);


  }
}

/**
 * Handles how the panel are disposed in the user interface.
 */
class responsive {
  constructor () {
    this.mobile = window.innerWidth < 60*$em ? true : false;
    this.body = get ('body');
    this.closeZone = new DOM('div', {id:"closeZone"})
      .onclick (this, this.hidePanels)

    /**The dead area for each panel in 'em', if the users taps out, the panel will close*/
	  this.panels = {'.toolbar':{from:'toolbar',x:$em*22, x2:0, y:$em*7.5, show:false},
	                 '.notify-panel':{from:'notify-panel',x:$em*22, x2:0, y:0, show:false},
	                 '.account-panel':{from:'account',x:$em*22, x2:0, y:$em*0, show:false},
	                 '.channel-panel':{from:'channel-panel',x:$em*42.5, x2:$em*22, y:$em*24.5, show:false}};

    this.body.append(this.closeZone._dom)

    this.binded = false;

    window.onresize = () => {
      Files.resize ();
      term.resize ();

      this.mobile = window.innerWidth < 60*$em ? true : false;
    };
  }
}
/**
 * Hide panels if the users taps outside the dead zone.
 */
responsive.prototype.hidePanels = function (ev) {
  for (const prop in this.panels) {
      UI [this.panels[prop].from].panel.id=''
      this.panels[prop].show = false
  }
  this.closeZone._dom.classList.remove('on')
}

/** Show a progress bar under the DOM `.top-menu`. */
class progress {
  constructor () {
    /**DOM node element for the progress bar.*/
	  this.dom = get ('.progress-bar');
	  this.div = document.createElement ('div');
	  this.dom.appendChild (this.div);
	  this.len;
	}

	  /**
   * Sets the progress bar width by the loaded and total to load, e.g. loaded=256, total=1024 equals 75%.
   * @param {number} loaded - How much has been loaded.
   * @param {number} total - Total to load.
   */
	load (loaded, total) {
		var percent = (loaded * 100 / total);
		this.div.style.width = percent + '%';
	}
	  /**
   * Sets the progress bar width by the remaining value to load, e.g. 256 from 1024 equals 75%.
   * @param {number} len_ - How much more to load.
   */
	remain (len_) {
		var percent = ((this.len - len_) * 100 / this.len);
		this.div.style.width = percent + '%';
	}
	  /**
   * Unhide :js:attr:`notify#dom`. and sets the (estimated) loading length.
   * @param {number} len_ - The (estimated) loading length.
   */
	start (len_) {
	  this.len = len_;
	  this.dom.id = 'on';
	}
	  /**
   * Hides :js:attr:`notify#dom` and reset the style.
   */
	end () {
	  this.dom.id = '';
    this.div.style.width = '0%';
	}
}


/**
 * The user interface integration of the Blockly workspace,
 * therefore, will handle XML loading and generation, the target device and its specification and
 * the styling for connection status with the devices.
 */
class workspace {
  constructor () {
    if (window.location.pathname.includes ('index.html') && window.location.protocol == 'file:') {
      alert('You will now be redirected to the offline version.');
      window.location.replace("index_offline.html");
    }

    this.defaultToolbox = 'default.xml';
    this.selector = get('#device_selector');
    this.content = get('#content_device');
    this.toolbarButton = get('#toolbarButton');
    this.channel_connect = get('#channel_connect');
    this.device_title = getIn(this.content, '#device_title'),
    this.device_img = getIn(this.content, '#device_img'),
    this.device_desc = getIn(this.content, '#device_desc');
    /** gets `devinfo/devinfo.json` data as an object.*/
    this.devices = [];
    xhrGET("devinfo/devinfo.json", 'json', (response) => {
      this.devices = response.devices;
      if (!/#(.)/.test(window.location.href)) // checks if there is a file to be loaded
        this.change ();
    });
    this.selector.onchange = () => {this.change ()};

    this.websocket = {url:get('#url'), pass:get('#password')};
    this.runButton = {
        dom:get('#runButton'),
        status:true
      };
    this.connectButton = get('#connectButton');
    this.saveButton = get('#saveButton');
    this.loadButton = get('#loadXML');
    this.connectButton.onclick = () => {this.connectClick ()};
    this.runButton.dom.onclick = () => {this.run ()};
    this.saveButton.onclick = () => {this.saveXML ()};
	  this.loadButton.addEventListener ('change', () => {this.loadXML ()});

    this.resetBoard = get('#resetBoard');
    this.EasyMQTT_bridge = get('#EasyMQTT_bridge');
    this.term = get('#term');
    this.file_status = get('#file-status');
    this.put_file_select = get('#put-file-select');
    this.file = get('#content_file_name');
    this.content_file_name = get('#content_file_name');
    this.put_file_select.onchange = () => {Files.handle_put_file_select ()};

    /** store loaded freeboard JSON, generated by :js:func:`freeboard#serialize`.*/
    this.freeboard = '';
  }
}

/**
 * Run program from Blockly workspace or stop current running program, called when clicking
 * DOM `#runButton`. If not connection, will try to connect then run.
 */
workspace.prototype.run = function () {
  if (this.runButton.status) {
    if(mux.connected ()) {
        Tool.runPython();
    } else {
      Channel ['mux'].connect ();
      setTimeout(() => { if (mux.connected ()) Tool.runPython();}, 2000);
    }
  } else {
    Tool.stopPython();
  }
}

/**
 * Styling for when the platform is trying to connect to a device.
 */
workspace.prototype.connecting = function () {
  this.toolbarButton.className = 'icon medium wait';
  this.channel_connect.className = 'wait';
}

/**
 * Switch for DOM `#connectButton` to connect or disconnect on click.
 */
workspace.prototype.connectClick = function () {
  if (mux.connected ()) {
    mux.disconnect ();
  } else {
    Channel ['mux'].connect ();
  }
}

/**
 * Switch on styling for connected to device.
 */
workspace.prototype.receiving = function () {
  this.channel_connect.className = '';
  this.runButton.status = false;
  this.runButton.dom.className = 'icon on';
  this.toolbarButton.className = 'icon medium on';
  this.connectButton.className = 'icon on';
  this.term.className = 'on';
}

/**
 * Switch off styling for connected to device.
 */
workspace.prototype.runAbort = function () {
  this.channel_connect.className = '';
  this.runButton.status = true;
  this.runButton.dom.className = 'icon';
  this.toolbarButton.className = 'icon medium';
  this.connectButton.className = 'icon';
  this.term.className = '';
  this.websocket.url.disabled = false;
  this.connectButton.value = "Connect";
}

/**
 * Switch the workspace to DOM `#device_selector` selected value if available in :js:attr:`workspace#devices`.
 * Will update the dropdown in the :js:attr:`Blockly.Blocks['pinout']` block, change the toolbox and set :js:attr:`webserial#packetSize`
 * and :js:attr:`webserial#speed` with the target device info.
 */
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
    if (this.devices.constructor.name == 'Object') {
      /* refreshes block pinout with device change */
      let blocks = Code.workspace.getBlocksByType('pinout');
       Code.workspace.getBlocksByType('pinout').forEach ((block, id) => {
         block.refresh ();
       });
       if (blocks.length != 0) UI ['notify'].send (MSG['wrongDevicePin']);
    }

    Channel ['webserial'].packetSize = parseInt(selected.serial_packet_size);
    Channel ['webserial'].speed = parseInt(selected.speed);

  } else
    UI ['notify'].send(MSG['invalidDevice']);
}

/**
 * Change the device in the dropdown DOM `#device_selector` and call :js:func:`workspace#change`
 * @param {string} device - device that will the '#device_selector' be changed to, if available in :js:attr:`workspace#devices`.
 */
workspace.prototype.changeTo = function (device) {
    if (device in this.devices)
      this.selector.value = device,
      this.change ();
    else if (device != '')
      UI ['notify'].send (MSG['deviceUnavailable'].replace ('%1', device));
}

/**
 * Generate XML through Blockly and download it.
 * @param {string} uid - optional uid to download a specific project, if none, the current will be downloaded.
 */
workspace.prototype.saveXML = function (uid) {
  let xmlText = '';
  if (uid == undefined) {
    xmlText = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(Code.workspace));
    xmlText = this.writeWorkspace (xmlText, true);
  } else {
    // Bounce in Blockly to make Pretty Text formatting
    xmlText = Blockly.Xml.domToPrettyText(Blockly.Xml.textToDom(localStorage [uid]));
  }

  let data = "data:x-application/xml;charset=utf-8," + encodeURIComponent(xmlText);
	let element = document.createElement('a');
	element.setAttribute('href', data),
	element.setAttribute('download', 'workspace.bipes.xml'),
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click ();
	document.body.removeChild(element);
}

/**
 * Read freeboard, device, timestamp and origin from BIPES generated XML.
 * if XML `</workspace>` not available, will set to the first device in :js:attr:`workspace#devices`
 * @param {string} xml - BIPES generated XML.
 * @param {boolean} prettyText - If the XML contains indentation and line breaks (human readable).
 */
workspace.prototype.readWorkspace = function (xml, prettyText) {
  let regex_;
  if (prettyText)
    regex_ = /(<workspace>.*<\/workspace>\n)/s;
  else
    regex_ = /(<workspace>.*<\/workspace>)/;
  if (regex_.test(xml)) {
    let workspace_chunk = xml.match (regex_) [0];
    xml = xml.replace (regex_,'');

    try {
      let timestamp = workspace_chunk.match(/<field name="TIMESTAMP">(.+?)<\/field>/) [1];
    } catch (e) {UI ['notify'].log(e)}
    try {
      let freeboard = workspace_chunk.match(/<freeboard><!\[CDATA\[(.+?)\]\]><\/freeboard>/) [1];
      this.loadFreeboard(freeboard);
    } catch (e) {UI ['notify'].log(e)}
    try {
      let databoard = workspace_chunk.match(/<databoard><!\[CDATA\[(.+?)\]\]><\/databoard>/) [1];
      this.loadDataboard(databoard)
    } catch (e) {UI ['notify'].log(e)}
    try {
      let device = workspace_chunk.match(/<field name="DEVICE">(.+?)<\/field>/) [1];
      if (this.devices.constructor.name == 'Object') {
        this.changeTo (device);
      } else {
        /** wait to devices to load */
        var interval_ = setInterval(() => {
          if (this.devices.constructor.name == 'Object') {
            this.changeTo (device);
            clearInterval(interval_);
          }
        }, 500);
      }
    } catch(e) {UI ['notify'].log(e)}
  } else {
    this.changeTo (Object.keys(this.devices) [0]);
  }
  return xml;
}

/**
 * Write device, timestamp and origin to Blockly generated XML.
 * @param {string} xml - Blockly generated XML.
 * @param {boolean} prettyText - If the XML contains indentation and line breaks (human readable).
 */
workspace.prototype.writeWorkspace = function (xml, prettyText) {
  let timestamp =  + new Date();
  let device = this.selector.value;

  let freeboard = '',
    databoard = '';
  /** Can't acess iFrame running locally due to cross-origin policy in Chrome*/
  try {
    freeboard = JSON.stringify(window.frames[1].freeboard.serialize());
    /** Check if freeboard is empty */
    if (freeboard == "{\"version\":1,\"allow_edit\":true,\"plugins\":[],\"panes\":[],\"datasources\":[{\"name\":\"vars\",\"type\":\"core_scratchpad_plugin\",\"settings\":{\"data\":\"={}\",\"persist\":\"off\",\"lock\":false}}],\"columns\":3}")
      freeboard='';
  } catch (e) {}
  try {
    databoard = window.frames[3].modules.Workspaces.compress();
  } catch (e) {}

  xml = xml.replace(/(xmlns=")(?:.+?)(")/g, '$1https://bipes.net.br$2')
  if (prettyText)
    xml = xml.replace(/(<xml xmlns=".+?">\n)/, `$1  <workspace>\n    <field name="DEVICE">${device}</field>\n    <field name="TIMESTAMP">${timestamp}</field>\n    <freeboard><![CDATA[${freeboard}]]></freeboard>\n    <databoard><![CDATA[${databoard}]]></databoard> \n  </workspace>\n`);
  else
    xml = xml.replace(/(<xml xmlns=".+?">)/, `$1<workspace><field name="DEVICE">${device}</field><field name="TIMESTAMP">${timestamp}</field><freeboard><![CDATA[${freeboard}]]></freeboard><databoard><![CDATA[${databoard}]]></databoard></workspace>`);
  return xml;
}

/**
 * Load XML, called after clicking the button DOM `#loadButton`.
 * Will check if there is a file, if can be parsed as XML and if contains unique variables already
 * in the Blockly workspace.
 */
workspace.prototype.loadXML = function () {
  if  (this.loadButton.files [0] != undefined) {
    let file = this.loadButton.files [0]
    if(/.xml$/.test(file.name) && file.type == 'text/xml'){
      let reader = new FileReader ();
      reader.readAsText(file,'UTF-8');
      let self = this;
      reader.onload = readerEvent => {
        let content = this.readWorkspace (readerEvent.target.result, true);
        try {
          let xml = Blockly.Xml.textToDom(content);
          Blockly.Xml.domToWorkspace(xml, Code.workspace);
        }
        catch (e) {
          UI ['notify'].log(e)
          if (/Error: Variable id, (.*) is already in use\.$/.test(e))
            UI ['notify'].send (`Unique variable is already in use, could not load ${file.name}.`);
          else
            UI ['notify'].send (`Failed to parse data, could not load ${file.name}.`);
          this.loadButton.value = ''
          return;
        }
        UI ['notify'].send (MSG['blocksLoadedFromFile'].replace('%1', file.name));
        this.loadButton.value = ''
      }
    } else {
      UI ['notify'].send ('No valid file selected to load.');
    }
  }
}


/**
 * Load freeboard from JSON.
 * @param {string} JSON_ - serialized freeboard JSON.
 */
workspace.prototype.loadFreeboard = function (JSON_) {
  try {
    let freeboard = JSON.parse(JSON_)
    /** Test if iframe is a freeboard */
    if (/\/freeboard/.test(window.frames[1].location.pathname)) {
      if (typeof  window.frames[1].freeboard == 'object') {
        window.frames[1].freeboard.loadDashboard(freeboard);
      } else {
        /** wait to freeboard iframe to load */
        var interval = setInterval(() => {
          if (typeof  window.frames[1].freeboard == 'object') {
            window.frames[1].freeboard.loadDashboard(freeboard);
            clearInterval(interval);
          }
        }, 500);
      }
    } else
      UI ['notify'].log('iFrame is not a freeboard');
  } catch (e) {
    UI ['notify'].log(e);
  }
}

/**
 * Load databoard from JSON.
 * @param {string} JSON_ - serialized databoard JSON.
 */
workspace.prototype.loadDataboard = function (JSON_) {
  try {
    let databoard = JSON.parse(JSON_)
    /** Test if iframe is a freeboard */
    if (/\/databoard/.test(window.frames[3].location.pathname)) {
      if (typeof window.frames[3].modules == 'object') {
        window.frames[3].modules.Workspaces.deinit()
        window.frames[3].modules.Workspaces.clearLocalStorage();
        window.frames[3].modules.Workspaces.uncompress(databoard);
        if (get('#tab_databoard').classList.contains("on"))
          window.frames[3].modules.Workspaces.init()
      } else {
        /** wait to databoard iframe to load */
        var interval = setInterval(() => {
          if (typeof window.frames[3].mopdules == 'object') {
            window.frames[3].modules.Workspaces.deinit()
            window.frames[3].modules.Workspaces.clearLocalStorage();
            window.frames[3].modules.Workspaces.uncompress(databoard);
            clearInterval(interval);
          }
        }, 500);
      }
    } else
      UI ['notify'].log('iFrame is not a Databoard');
  } catch (e) {
    UI ['notify'].log(e);
  }
}





