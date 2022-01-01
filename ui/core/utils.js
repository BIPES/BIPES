'use strict';

/*
 * Code from 
 * https://github.com/google/blockly/blob/096d1c46c5066cfa7e59db3b41405b7e854b95d0/tests/playgrounds/screenshot.js
 */

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Download screenshot.
 * @author samelh@google.com (Sam El-Husseini)
 */

/**
 * Convert an SVG datauri into a PNG datauri.
 * @param {string} data SVG datauri.
 * @param {number} width Image width.
 * @param {number} height Image height.
 * @param {!Function} callback Callback.
 */
function svgToPng_(data, width, height, callback) {
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  var img = new Image();

  var pixelDensity = 10;
  canvas.width = width * pixelDensity;
  canvas.height = height * pixelDensity;
  img.onload = function() {
    context.drawImage(
        img, 0, 0, width, height, 0, 0, canvas.width, canvas.height);
    try {
      var dataUri = canvas.toDataURL('image/png');
      callback(dataUri);
    } catch (err) {
      console.warn('Error converting the workspace svg to a png');
      callback('');
    }
  };
  img.src = data;
}

/**
 * Create an SVG of the blocks on the workspace.
 * @param {!Blockly.WorkspaceSvg} workspace The workspace.
 * @param {!Function} callback Callback.
 * @param {string=} customCss Custom CSS to append to the SVG.
 */
function workspaceToSvg_(workspace, callback, customCss) {

  // Go through all text areas and set their value.
  var textAreas = document.getElementsByTagName("textarea");
  for (var i = 0; i < textAreas.length; i++) {
    textAreas[i].innerHTML = textAreas[i].value;
  }

  var bBox = workspace.getBlocksBoundingBox();
  var x = bBox.x || bBox.left;
  var y = bBox.y || bBox.top;
  var width = bBox.width || bBox.right - x;
  var height = bBox.height || bBox.bottom - y;

  var blockCanvas = workspace.getCanvas();
  var clone = blockCanvas.cloneNode(true);
  clone.removeAttribute('transform');

  var svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.appendChild(clone);
  svg.setAttribute('viewBox',
      x + ' ' + y + ' ' + width + ' ' + height);

  svg.setAttribute('class', 'blocklySvg ' +
    (workspace.options.renderer || 'geras') + '-renderer ' +
    (workspace.getTheme ? workspace.getTheme().name + '-theme' : ''));
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.setAttribute("style", 'background-color: transparent');

  var css = [].slice.call(document.head.querySelectorAll('style'))
      .filter(function(el) { return /\.blocklySvg/.test(el.innerText) ||
        (el.id.indexOf('blockly-') === 0); }).map(function(el) {
        return el.innerText; }).join('\n');
  var style = document.createElement('style');
  style.innerHTML = css + '\n' + customCss;
  svg.insertBefore(style, svg.firstChild);

  var svgAsXML = (new XMLSerializer).serializeToString(svg);
  svgAsXML = svgAsXML.replace(/&nbsp/g, '&#160');
  var data = 'data:image/svg+xml,' + encodeURIComponent(svgAsXML);

  svgToPng_(data, width, height, callback);
}

/**
 * Download a screenshot of the blocks on a Blockly workspace.
 * @param {!Blockly.WorkspaceSvg} workspace The Blockly workspace.
 */
Blockly.downloadScreenshot = function(workspace) {
  workspaceToSvg_(workspace, function(datauri) {
    var a = document.createElement('a');
    a.download = 'screenshot.png';
    a.target = '_self';
    a.href = datauri;
    document.body.appendChild(a);
    a.click();
    a.parentNode.removeChild(a);
  });
};

/* END Code from 
 * https://github.com/google/blockly/blob/096d1c46c5066cfa7e59db3b41405b7e854b95d0/tests/playgrounds/screenshot.js
 */


/**
 * All generic utilities are concetrated here.
 * Should not be inited, since all functions are static.
 */

class Tool {
  constructor () {

  }
  /**(DEPRECATED)
  * Alias for :js:func:`mux.bufferPush`.
  * @param {string} code_ - Code to be sent.
  */
  static runPython (code_) {
    // if (this.selector.value == "UNO") {
    //   alert("Generating code for Arduino Uno");
    //   var code = Blockly.Arduino.workspaceToCode(Code.workspace);

    //   return;
    // }
    let code = code_ == undefined ? Blockly.Python.workspaceToCode(Code.workspace) : code_;

    if (code) {
      code+='\r\r';//Snek workaround

      mux.bufferPush (`\x05${code}\x04`);
      UI ['progress'].start(Channel.websocket.buffer_.length);
    }
  }

  /**Send ``\x03\x03`` to stop running a program, see a `ASCII table
  * <https://www.ascii-code.com/>`_ to know more.*/
  static stopPython () {
    //Send Ctrl+C to stop program
    mux.bufferPush ('\x03\x03');
  }
  static softReset () {
    if (Channel ['websocket'].connected)
      setTimeout(() => {Channel ['websocket'].connect(UI ['workspace'].websocket.url.value, UI ['workspace'].websocket.pass.value)}, 2000);
    else if (Channel ['webbluetooth'].connected)
      setTimeout(() => {Channel ['webbluetooth'].connect()}, 1000);
    mux.bufferPush ('\x04');
  }

  /**(DEPRECATED)
  * New async sleep function, callend with async await(), which allows UI updates
  */
  static asleep (milliseconds) {
	  return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  /**(DEPRECATED)
  * Delay Javascript code execution.
  */
  static sleep (milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    }
    while (currentDate - date < milliseconds);
  }

  /**
  * Add a file to the file editor
  * @param {string} code - Code.
  * @param {string} file_name - File name for the code.
  */
  static updateSourceCode (code, file_name) {
    const reader = new FileReader();

    // This fires after the blob has been read/loaded.
    reader.addEventListener('loadend', (e) => {
      let text = e.srcElement.result;
      Files.editor.getDoc().setValue(text);

      UI ['workspace'].content_file_name.value = file_name;
    });

    // Start reading the blob as text.
    reader.readAsText(code);
  }
  /**(DEPRECATED)
  *Generate code from blocks, appends to the file editor.
  */
  static blocksToPython() {
    let code = Blockly.Python.workspaceToCode(Code.workspace);
    Files.editor.getDoc().setValue(code);
  }
  /**Decode data to fetch status code.
  * @param {char} data - Response data.
  * @returns {number} Status code
  */
  static decode_resp (data) {
    if (data[0] == 'W'.charCodeAt(0) && data[1] == 'B'.charCodeAt(0)) {
      let code = data[2] | (data[3] << 8);
      return code;
    } else
      return -1;
  }
  /**Make a date with a unix time, if not passed, will make one.
  * @param {number} [timestamp] - `Unix time <https://en.wikipedia.org/wiki/Unix_time>`_.
  * @returns {string} Formatted time, e.g. 08:02:01.
  */
  static unix2date (timestamp) {
    let date;
    if (timestamp == undefined)
      date = new Date (+new Date);
    else
      date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  }
  /**Checks the income data for useful chuncks, like ``$BIPES-DATA:`` for plotting*/
  static bipesVerify () {
    let re = /\r\n\$(.*):(.*)\r\n/;
    let match_;
    if (re.test(Files.received_string)) {
      match_ = Files.received_string.match(re);
      if (match_.length == 3) {
        let coordinates = match_ [2].split(',').map((item)=>item = parseFloat(item))
        window.frames[3].modules.DataStorage.push(match_[1],coordinates)


        /*STARTDEPRECATED*/
        //Compatibilty layer with the old BIPES-DATA:INDEX,DATA
        if (match_[1] == "BIPES-DATA") {
          coordinates [0] = parseInt(coordinates [0])
          coordinates [1] = parseFloat(coordinates [1])
          let q = new Queue(coordinates [0]);
          q.enqueue(coordinates[1]);
          if (UI ['workspace'].EasyMQTT_bridge.checked)
            this.EasyMQTTBridge(coordinates [0], coordinates[1])
        }
        /*ENDDEPRECATED*/
      }
    }
    Files.received_string = Files.received_string.replace(re, '\r\n') //purge received string out
  }
  /**Bridge incoming data to MQTT.
  * @param {number} id_ - ID for the MQTT message.
  * @param {number} value_ - Value for the MQTT message.
  */
  static EasyMQTTBridge (id_, value_) {
	  var easyMQTTsession = window.localStorage['bridgeSession'];
	  if (easyMQTTsession) {
		  xhrGET(`https://bipes.net.br/easymqtt/publish.php?session=${easyMQTTsession}&topic=Topic${id_}&value=${value_}`,'',(ev)=>{
		    UI ['notify'].log(ev);
		  });
		}
  }
  /**Clear 'core/queue.js queue*/
  static clearQueue () {
    for (var i=0; i<20; i++) {
      var t = localStorage.getItem("queue" + i);
      if (t) {
        window.localStorage.removeItem('queue' + i);
        UI ['notify'].log(`Cleaned queue ${i}`);
      }
    }
  }
  /**Get code for a  MicroPython library, must be available at `ui/pylibs`.
  * @param {string} pName - File name for a MicroPython library.
  */
  static getText (pName) {
    var request = new XMLHttpRequest();
        request.open('GET', '/beta2/ui/pylibs/' + pName, true);
        request.send(null);
        request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
          var type = request.getResponseHeader('Content-Type');
          if (typeof request.response == 'string') {
            var Textarea = document.getElementById('content_file_code');
            Files.editor.getDoc().setValue(request.responseText);
            Files.file_save_as.className = 'py';
            var TextareaF = document.getElementById('content_file_name');
            TextareaF.value = pName;
        }
      }
    }
  }
  /**Makes a name for a Blockly project.
  * @param {string} code - Blockly generated code.
  * @param {string} ext - File extension.
  */
  static makeAName (code, ext) {
    let desc = code.match(/#Description: '(.*)'/)
    let imp = [...code.matchAll(/import (.*)/g)]

    if (ext == '') {
      return desc ? `${desc [1].slice()}${ext}` : 'My BIPES Project';
    } else {
      if (desc == null) {
        desc = [];
        desc [1] = 'code';
      }
      desc [1] = desc [1].toLowerCase()
      return desc ? `${desc [1].replaceAll(' ', '_').replaceAll('.', '').slice().substring(0,30)}.bipes.${ext}` : imp.length ? `my_${imp.slice(-1)[0][1]}_project.bipes.${ext}` : `my_project.bipes.${ext}`;
    }
  }
  /**Converts RGB to HEX
  * @param {number} r - Red color, from 0 to 255.
  * @param {number} g - Green color, from 0 to 255.
  * @param {number} b - Blue color, from 0 to 255.
  * @returns {string} HEX code for the RGB color.
  */
  static RGB2HEX(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  /**Converts HEX to RGB
  * @param {string} hex - HEX code
  * @returns {(Object|null)} RGB code for the RGB color.
  */
  static HEX2RGB(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  /**Converts HUE to HEX
  * @param {number} h - Hue, from 0 to 360.
  * @param {number} s - Saturation, from 0 to 100.
  * @param {number} l - Lightness, from 0 to 100.
  * @returns {string} HEX code for the HUE color.
  */
  static HUE2HEX (h,s,l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }

  /**
   * throw a notification is the criteria is met.
   * @param {object} self - A object that contains a ``warning_`` array to keep track if the notification was already thrown.
   * @param {array} criteria - A array composed by subarrays.
   * @param {function} criteria.func - Function with the criteria.
   * @param {string} criteria.str - Message to show as notification if the criteira is met.
   */
  static warningIfTrue (self, criteria) {
    // Don't check state if:
    //   * It's at the start of a drag.
    //   * It's not a move event.
    if (!self.workspace.isDragging || self.workspace.isDragging())
      return

    let warnings = [];
    criteria.forEach ((item, index) => {
      if (item [0] ())
        warnings.push(item [1])
    })
    self.setWarningText(warnings.length > 0 ? warnings.join("\n") : null)
  }

  /** Return a random UID*/
  static uid () {
    return (+new Date).toString(36) + Math.random().toString(36).substr(2);
  }
  /** Return a empty XML with only project description set, used for new projects*/
  static emptyXML () {
    let account_user = localStorage ['account_user'];
    return `<xml xmlns="https://bipes.net.br"><workspace><databoard><![CDATA[{"currentWorkspace":"kvflqzky5js84d7x5pe","workspace:kvflqzky5js84d7x5pe":[]}]]></databoard></workspace><block type="project_metadata" id="" x="-212" y="-612"><value name="project_author"><shadow type="text" id=""><field name="TEXT">${account_user}</field></shadow></value><value name="project_iot_id"><shadow type="math_number" id=""><field name="NUM">0</field></shadow></value><value name="project_description"><shadow type="text" id=""><field name="TEXT">My project</field></shadow></value></block></xml>`
  }

  static exportScreenshot() {
	  Blockly.downloadScreenshot(Code.workspace);
  }


}
/**
 * Handle the Files tab.
 */
class files {
  constructor (fileList) {
    this.watcher;
    this.watcher_calledCount = 0;
    this.put_file_name = null;
    this.put_file_data = null;
    this.get_file_name = null;
    this.get_file_data = null;
    this.binary_state = 0;
    this.received_string = "";
    this.viewOnly = false;
    /**Object that contains a ``codemirror`` editor*/
    this.editor = CodeMirror.fromTextArea(content_file_code, {
      mode: "python",
      lineNumbers: true
    });
    this.fileList = get('#fileList');
    this.file_save_as = get('#file_save_as');
    this.blocks2Code = {Python: get('#blocks2codePython'), XML: get('#blocks2codeXML')}
    this.blocks2Code.Python.onclick = () => {this.internalPython ()};
    this.blocks2Code.XML.onclick = () => {this.internalXML ()};
  }
  /**
   * Display text inside DOM `#file-status` as a operation progress
   * @param {string} s - The notification to be shown.
   */
  static update_file_status (s) {
    UI ['workspace'].file_status.innerHTML = s;
  }
  /**
   * Resize the ``codemirror`` editor, triggered by ``window.onresize`` event.
   */
  resize () {
    if (!Code.current.includes('files'))
      return
    if (Code.current[0] == 'files')
      this.editor.setSize(window.innerWidth - (18*$em),window.innerHeight - (6*$em))
    else
      this.editor.setSize((window.innerWidth/2) - (18*$em),window.innerHeight - (6*$em))
  }
  /**
   * Upload file to device.
   */
  put_file () {
    switch (Channel ['mux'].currentChannel) {
      case 'websocket':
        var dest_fname = this.put_file_name;
        var dest_fsize = this.put_file_data.length;
        // WEBREPL_FILE = "<2sBBQLH64s"
        var rec = new Uint8Array(2 + 1 + 1 + 8 + 4 + 2 + 64);
        rec[0] = 'W'.charCodeAt(0);
        rec[1] = 'A'.charCodeAt(0);
        rec[2] = 1; // put
        rec[3] = 0;
        rec[4] = 0; rec[5] = 0; rec[6] = 0; rec[7] = 0; rec[8] = 0; rec[9] = 0; rec[10] = 0; rec[11] = 0;
        rec[12] = dest_fsize & 0xff; rec[13] = (dest_fsize >> 8) & 0xff; rec[14] = (dest_fsize >> 16) & 0xff; rec[15] = (dest_fsize >> 24) & 0xff;
        rec[16] = dest_fname.length & 0xff; rec[17] = (dest_fname.length >> 8) & 0xff;
        for (var i = 0; i < 64; ++i) {
          rec[18 + i] = i < dest_fname.length ? rec[18 + i] = dest_fname.charCodeAt(i) : rec[18 + i] = 0;
        }

        // initiate put
        this.binary_state = 11;
        files.update_file_status ('Sending ' + this.put_file_name + '...');
        console.log(rec);
        mux.bufferPush (rec);
      break;
      case 'webserial':
      case 'webbluetooth':
        var dest_fname = this.put_file_name;
        var dest_fsize = this.put_file_data.length;

        files.update_file_status(`Sending raw (USB) ${this.put_file_name}...`);

        let decoderUint8 =  new TextDecoder().decode(this.put_file_data).replaceAll(/(\r\n|\r|\n)/g, '\\r').replaceAll(/'/g, "\\'").replaceAll(/"/g, '\\"').replaceAll(/\t/g, '    ');
        UI ['progress'].start(parseInt(decoderUint8.length/Channel ['webserial'].packetSize) + 1);

        //ctrl-C twice: interrupt any running program
        mux.clearBuffer ();
        mux.bufferUnshift ('\r\x03\x03');

        mux.bufferPush ("import struct\r");

	//Workaround for ESP32S2 using CircuitPython
	//Needs to remount filesystem in write mode
	if (UI ['workspace'].selector.value == "ESP32S2") {
		mux.bufferPush ("import storage\r");
		mux.bufferPush ("storage.remount(\"/\", False)\r");
	} 

        mux.bufferPush (`f=open('${this.put_file_name}', 'w')\r`);

        mux.bufferPush (`f.write('${decoderUint8}')\r`, () => {files.update_file_status(`Sent ${Files.put_file_data.length} bytes`)});

        mux.bufferPush ("f.close()\r");
        mux.bufferPush ('\r\r\r');
        files.update_file_status(`File ${this.put_file_name} sent.`);
      break;
    }
  }
  /**
   * Get version.
   */
  get_ver () {
    // WEBREPL_REQ_S = "<2sBBQLH64s"
    var rec = new Uint8Array(2 + 1 + 1 + 8 + 4 + 2 + 64);
    rec[0] = 'W'.charCodeAt(0);
    rec[1] = 'A'.charCodeAt(0);
    rec[2] = 3; // GET_VER
    // rest of "rec" is zero

    // initiate GET_VER
    this.binary_state = 31;
    mux.bufferPush(rec);
  }
  /**
   * Get file from DOM `#putFileButton` and calls :js:func:`Files.put_file` to upload
   */
  handle_put_file_select() {

    // The event holds a FileList object which is a list of File objects,
    // but we only support single file selection at the moment.
    let file_ = UI ['workspace'].put_file_select.files;
    // Get the file info and load its data.
    let f = file_[0];
    this.put_file_name = f.name;
    var reader = new FileReader();
    reader.onload = (e) => {
        this.put_file_data = new Uint8Array(e.target.result);
        this.put_file ();
    };
    reader.readAsArrayBuffer(f);
  }
  /**
   * Get file from ``codemirror``editor and calls :js:func:`Files.put_file` to upload.
   */
  files_save_as () {

    //For codemirror
    var codeStr = Files.editor.getDoc().getValue("\n");

    var bufCode = new Uint8Array(codeStr.length);
    for (var i=0, strLen=codeStr.length; i < strLen; i++) {
    bufCode[i] = codeStr.charCodeAt(i);
    }

    this.put_file_name = UI ['workspace'].file.value;
    this.put_file_data = bufCode;

    this.put_file ();
  }
  /**
   * List files from device, on success, calls :js:func:`files.updateTable` to display it.
   */
  listFiles () {
    mux.bufferPush ('import os; os.listdir(\'.\')\r', files.updateTable.bind(this)); //Using ; to trigger only one ">>>"
  }
   /**
   * Execute a program.
   * @param {string} file - File name of the script to be executed.
   */
  run (file) {
    files.update_file_status('Executing  ' + file);

    //import only works once
    //In case module already loaded, unloaded it
    //to allow it to work all the time
    //fileS = file.split('.')[0];
    //mux.bufferPush('import sys \r');
    //mux.bufferPush('sys.modules.pop(\'' + fileS + '\')\r');
    //mux.bufferPush('import ' + fileS + '\r');
    //Filename without .py
    mux.bufferPush (`exec(open(\'./${file}\').read(),globals())\r`);
  }
  /**
   * Delete a file.
   * @param {string} file - File name of the file to be deleted.
   */
  delete (file) {
    let msg = "Are you sure you want to delete " + file + "?";

    if (confirm(msg)) {
      let txt = "Will delete file " + file;
      mux.bufferPush(`os.remove(\'${file}\')\r`, this.listFiles.bind(this));
      files.update_file_status('Deleted  ' + file);
    } else {
      let txt = "Delete aborted";
      files.update_file_status('Delete aborted for ' + file);
    }
  }
  /**
   * Request a file to show in the ``codemirror`` editor.
   * @param {string} file - File name of the file to be viewed.
   */
  files_view (file) {
    this.viewOnly=true;
    this.get_file(file);
    files.update_file_status('Downloading ' + file);
  }
  /**
   * Request a file to download.
   * @param {string} file - File name of the file to be downloaded.
   */
  files_download (file) {
    this.viewOnly=false;
    this.get_file(file);
  }
  /**
   * Get file from device
   * @param {string} src_fname - File name of the file to be fetched.
   */
  get_file (src_fname) {
    this.file_save_as.className = 'py';
    switch (Channel ['mux'].currentChannel) {
      case 'websocket':
        let rec = new Uint8Array(2 + 1 + 1 + 8 + 4 + 2 + 64);
        rec[0] = 'W'.charCodeAt(0);
        rec[1] = 'A'.charCodeAt(0);
        rec[2] = 2; // get
        rec[3] = 0;
        rec[4] = 0; rec[5] = 0; rec[6] = 0; rec[7] = 0; rec[8] = 0; rec[9] = 0; rec[10] = 0; rec[11] = 0;
        rec[12] = 0; rec[13] = 0; rec[14] = 0; rec[15] = 0;
        rec[16] = src_fname.length & 0xff; rec[17] = (src_fname.length >> 8) & 0xff;
        for (let i = 0; i < 64; ++i) {
            if (i < src_fname.length) {
                rec[18 + i] = src_fname.charCodeAt(i);
            } else {
                rec[18 + i] = 0;
            }
        }

        // initiate get
        this.binary_state = 21;
        this.get_file_name = src_fname;
        this.get_file_data = new Uint8Array(0);
        files.update_file_status(`Getting ${this.get_file_name}...`);
        mux.bufferPush (rec);
      break;
      case 'webserial':
      case 'webbluetooth':
        // initiate get
        this.binary_state = 91;
        files.update_file_status(`Getting ${src_fname}...`);

        //ctrl-C twice: interrupt any running program
        mux.clearBuffer ();
        mux.bufferUnshift ('\r\x03\x03');

        this.get_file_name = src_fname;
        this.received_string = "";
        this.watcher_calledCount = 0;
        mux.bufferPush (`import os, sys; os.stat('${src_fname}')\r`);
        //mux.bufferPush (`import uos, sys; uos.stat('${src_fname}')\r`);
        mux.bufferPush (`with open('${src_fname}', 'rb') as infile:\rwhile True:\rresult = infile.read(32)\rif result == b'':\rbreak\r\blen = sys.stdout.write(result)\r`, () => {}); //Includes dummy callback due to '>>> '
        mux.bufferPush ("\r\r\r", () => {
          this.watcher = setInterval ( () => {
            if (Files.get_file_webserial_ ()) {
              Files.watcher_calledCount = 0;
              clearInterval (Files.watcher);
            } else {
              Files.watcher_calledCount += 1;
              if (Files.watcher_calledCount >= 10) {
                UI ['notify'].send(MSG['ErrorGET']);
                clearInterval (Files.watcher);
                Files.watcher = undefined;
              }
            }
          }, 250);
        });
      break;
    }
  }
  /**
   * Subfuction to get file from device with webserial or webbluetooth.
   */
  get_file_webserial_ () {
      let re = /sys\.stdout\.write\(result\)\r\n...         \r\n...         \r\n... \r\n(.*)>>> /s;
      let get_file_data_;
      if (re.test(Files.received_string)) {
        get_file_data_ = Files.received_string.match(re);
        if (get_file_data_.length == 2)
          Files.get_file_data = get_file_data_ [1]


        files.update_file_status('Got ' + Files.get_file_name + ', ' + Files.get_file_data.length + ' bytes');
        if (!Files.viewOnly)
          saveAs(new Blob([Files.get_file_data], {type: "application/octet-stream"}), Files.get_file_name);
        else
          Tool.updateSourceCode(new Blob([Files.get_file_data], {type: "text/plain"}), Files.get_file_name);
        Files.received_string = Files.received_string.replace(re, '\r\n') //purge received string out
        return true
      } else {
        return false;
      }
  }
  /**
   * Display fetched from device file list in DOM `#fileList`.
   */
  static updateTable () {
    let re = /\[(.+)?\]/g;
    if (re.test(this.received_string)) {
      let match_ = this.received_string.match((/\[(.+)?\]/g));
      let treat_ = match_ [match_.length - 1].replace(/[\[\]]/g, '');
      let split_ = treat_.split('"'[0]);
      let files_ = eval("[" + split_ + "]");

      UI ['notify'].send("File list updated at " + Tool.unix2date() + ".");


      this.fileList.innerHTML = '';

      files_.forEach (file => {
        let wrapper2_ = new DOM ('div');
        let openButton_ = new DOM ('div', {innerText:file, className: 'runText'});
        if (!(/\./.test(file))) {
          openButton_.flag('is directory');
          wrapper2_.append(openButton_)
          wrapper2_._dom.style.cursor = 'default';
        } else {
          openButton_._dom.title = `Open file ${file}`;
          openButton_.onclick (this, Files.files_view, [file]);
          if(file == 'boot.py' || file == 'main.py')
            openButton_.flag('run at boot');
          let deleteButton_ = new DOM ('span', {className:'icon', id:'trashIcon', title:`Delete file ${file}`})
            .onclick (this, Files.delete, [file]);
          let runButton_ = new DOM ('span', {className:'icon', id:'runIcon', title:`Run file ${file}`})
            .onclick (this, Files.run, [file]);
          let downloadButton_ = new DOM ('span', {className:'icon', id:'downloadIcon', title:`Download file ${file}`})
            .onclick (this, Files.files_download, [file]);

          let wrapper_ = new DOM ('div')
            .append([runButton_, downloadButton_, deleteButton_]);
          wrapper2_.append([openButton_, wrapper_]);
        }

        this.fileList.appendChild(wrapper2_._dom)
      })

      Files.received_string = Files.received_string.replace(re, '\r\n') //purge received string out
    }
  }
  /**
   * Push edited XML to the workspace.
   */
  editedXML2Workspace () {
    var result = window.confirm('Changes will be applied directly to the workspace and might break everything, continue?');
    if (result === true) {
      let content = UI ['workspace'].readWorkspace (this.editor.getDoc().getValue("\n"), true);
      let xmlDom = '';
      try {
        xmlDom = Blockly.Xml.textToDom(content);
      } catch (e) {
        var q =
            window.confirm(MSG['badXml'].replace('%1', e));
        if (!q) {
          //Leave the user on the XML tab.
          return;
        }
      }
      if (xmlDom) {
        Code.workspace.clear();
        Blockly.Xml.domToWorkspace(xmlDom, Code.workspace);
  	    Code.renderContent();
      }
    }
  }
  /**
   * "Open" MicroPython code generated from Blockly in the ``codemirror``editor.
   */
  internalPython () {
    this.file_save_as.className = 'bipes-py';
    let code = Code.generateCode();
    Tool.updateSourceCode(new Blob([code], {type: "text/plain"}), Tool.makeAName(code, 'py'));
  }
  /**
   * "Open" XML code generated from Blockly and BIPES in the ``codemirror``editor.
   */
  internalXML () {
    this.file_save_as.className = 'bipes-xml';
    Tool.updateSourceCode(new Blob([Code.generateXML()], {type: "text/plain"}), 'workspace.bipes.xml');
  }
  /**
   * Update the displayed name and automatic opened code when switching tabs or projects.
   */
  handleCurrentProject () {
    this.blocks2Code.Python.innerHTML = Tool.makeAName(Code.generateCode(), 'py') + '<span>automatic</span>'
    if (this.file_save_as.className == 'bipes-py')
      this.internalPython ();
    else if(Files.file_save_as.className == 'bipes-xml')
      this.internalXML ();
  }
}
/** Make DOM Node element*/
class DOM {
  constructor (dom, tags){
    this._dom ;
    switch (dom) {
	  case 'button':
	  case 'h2':
	  case 'h3':
      case 'span':
      case 'div':
        this._dom = document.createElement (dom);
        if (typeof tags == 'object') for (const tag in tags) {
          if (['innerText', 'className', 'id', 'title', 'innerText'].includes(tag))
            this._dom [tag] = tags [tag]
        }
        break;
	  case 'video':
        this._dom = document.createElement (dom);
        if (typeof tags == 'object') for (const tag in tags) {
          if (['preload', 'controls', 'autoplay'].includes(tag))
            this._dom [tag] = tags [tag]
        }
        break;
    }
	  return this;
  }
  /**
  * Append a ``onclick`` event.
  * @param {Object[]} self - Object to bind to the call.
  * @param {function} ev - Function to call on click.
  * @param {Object[]} args - Arguments to pass to the function.
  */
  onclick (self, ev, args){
    this._dom.onclick = () => {
			if (typeof args == 'undefined')
				ev.bind(self)()
			else if (args.constructor == Array)
				ev.apply(self, args)
		};
	  return this
  }
  /**
  * Appends others :js:func:`DOM`.
  * @param {Object[]} DOMS - Array of :js:func:`DOM` or/and direct DOM Nodes.
  */
  append (DOMS){
	  if (DOMS.constructor != Array)
	    DOMS = [DOMS]

	    DOMS.forEach ((item) => {
	      if (/HTML(.*)Element/.test(item.constructor.name))
		      this._dom.appendChild(item)
	      else if (item.constructor.name == 'DOM' && (/HTML(.*)Element/.test(item._dom)))
		      this._dom.appendChild(item._dom)
	    })

	    return this
  }
  /**
  * Adds a label to the :js:func:`DOM`.
  * @param {string} str - Message inside the label.
  */
  flag (str) {
    this._dom.innerHTML = `${this._dom.innerHTML} <span>${str}</span>`;
  }
}


/** Enables basic css3 animations in the DOM Node element*/
class Animate {
  constructor (){}
  static off (dom, callback){
    dom.classList.remove('on')
    setTimeout(()=>{
      dom.classList.remove('ani', 'on')
      if (callback != undefined)
        callback ()
      }, 250)
  }
  static on (dom){
    dom.classList.add('ani')
    setTimeout(()=>{dom.classList.add('ani', 'on')}, 250)
  }
}

/** Handle ``xterm.js`` terminal*/
class term {
  constructor () {
  }
  static init (dom) {
    terminal.open(get(dom));
    terminal.setOption('fontSize',12);
    this.resize();
    terminal.onData((data) => {
      switch (Channel ['mux'].currentChannel) {
        case 'websocket':
          data = data.replace(/\n/g, "\r");
          Channel ['websocket'].ws.send(data);
        break;
        case 'webserial':
          Channel ['webserial'].serialWrite(data);
        break;
        case 'webbluetooth':
          mux.bufferPush (data);
          Channel ['webbluetooth'].watch ();
        break;
      }
    });
  }
  /** Enable the terminal. */
  static on () {
    terminal.setOption('disableStdin', false);
    terminal.focus();
  }
  /** Disable the terminal. */
  static off () {
    terminal.setOption('disableStdin', true);
    terminal.blur();
  }
  /** Write data in the terminal. */
  static write (data) {
    terminal.write(data);
  }
  /**
   * Resize the ``xterm.js`` terminal, triggered by ``window.onresize`` event.
   */
  static resize () {
    if(!Code.current.includes('console'))
      return

    let cols
    if (Code.current[0] == 'console')
      cols = Math.max(50, Math.min(200, (window.innerWidth - 4*$em) / 7)) | 0
    else
      cols = Math.max(50, Math.min(200, ((window.innerWidth)/2 - 4*$em) / 7)) | 0

    let rows = Math.max(15, Math.min(40, (window.innerHeight - 20*$em) / 12)) | 0

    terminal.resize(cols, rows);
  }
}
