'use strict';

class Tool {
  constructor () {

  }

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


  static asleep (milliseconds) {
    //Avoid at all cost using this
    //New async sleep function, callend with async await(), which allows UI updates
	  return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
  static sleep (milliseconds) {
    //Avoid at all cost using this
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    }
    while (currentDate - date < milliseconds);
  }
  static updateSourceCode (code, file_name) {
    const reader = new FileReader();

    // This fires after the blob has been read/loaded.
    reader.addEventListener('loadend', (e) => {
      let text = e.srcElement.result;
      console.log(text);
      //For codemirror
      //var editor = CodeMirror.fromTextArea(Textarea);
      Files.editor.getDoc().setValue(text);

      UI ['workspace'].content_file_name.value = file_name;
    });

    // Start reading the blob as text.
    reader.readAsText(code);
  }
  static blocksToPython() {
    let code = Blockly.Python.workspaceToCode(Code.workspace);
    Files.editor.getDoc().setValue(code);
  }
  static decode_resp (data) {
    if (data[0] == 'W'.charCodeAt(0) && data[1] == 'B'.charCodeAt(0)) {
      let code = data[2] | (data[3] << 8);
      return code;
    } else
      return -1;
  }
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

  static bipesVerify () {
    let re = /\r\nBIPES-DATA:(.*)\r\n/;
    let match_;
    if (re.test(Files.received_string)) {
      match_ = Files.received_string.match(re);
      if (match_.length == 2) {
        match_ = match_ [1].split(',');
        match_ [0] = parseInt(match_ [0]);
        match_ [1] = parseFloat(match_ [1]);
        if (typeof match_ [0] == 'number' && typeof match_ [1] == 'number') {
          let q = new Queue(match_ [0]);
          q.enqueue(match_ [1]);
          if (UI ['workspace'].EasyMQTT_bridge.checked)
            this.EasyMQTTBridge(match_ [0], match_ [1])
        }
      }
    }
    Files.received_string = Files.received_string.replace(re, '\r\n') //purge received string out
  }

  static EasyMQTTBridge (id_, value_) {
	  var easyMQTTsession = window.localStorage['bridgeSession'];
	  if (easyMQTTsession) {
		  xhrGET(`https://bipes.net.br/easymqtt/publish.php?session=${easyMQTTsession}&topic=Topic${id_}&value=${value_}`,'',(ev)=>{
		    UI ['notify'].log(ev);
		  });
		}
  }

  static clearQueue () {
    for (var i=0; i<20; i++) {
      var t = localStorage.getItem("queue" + i);
      if (t) {
        window.localStorage.removeItem('queue' + i);
        UI ['notify'].log(`Cleaned queue ${i}`);
      }
    }
  }

  static getText(pName){
    var request = new XMLHttpRequest();
        request.open('GET', '/beta2/ui/pylibs/' + pName, true);
        request.send(null);
        request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
          var type = request.getResponseHeader('Content-Type');
          if (typeof request.response == 'string') {
            var Textarea = document.getElementById('content_file_code');
            Files.editor.getDoc().setValue(request.responseText);
            var TextareaF = document.getElementById('content_file_name');
            TextareaF.value = pName;
        }
      }
    }
  }
}

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
    this.editor = CodeMirror.fromTextArea(content_file_code, {
      lineNumbers: true,
      mode: "python"
    });
    this.fileList = get(fileList);
  }


  static update_file_status (s) {
    UI ['workspace'].file_status.innerHTML = s;
  }

  resize () {
    this.editor.setSize(window.innerWidth - (18*$em),window.innerHeight - (6*$em))
  }

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

        //ctrl-C twice: interrupt any running program
        mux.clearBuffer ();
        mux.bufferUnshift ('\r\x03\x03');

        mux.bufferPush ("import struct\r");
        mux.bufferPush (`f=open('${this.put_file_name}', 'wb')\r`);

        UI ['progress'].start(this.put_file_data.length);
        this.put_file_data.forEach((char, index) => {
            mux.bufferPush (`f.write(struct.pack(\"B\",${char}))\r`, () => {files.update_file_status(`Sent ${index + 1}/${Files.put_file_data.length} bytes`)});
        });

        mux.bufferPush ("f.close()\r");
        mux.bufferPush ('\r\r\r');
        files.update_file_status(`File ${this.put_file_name} sent.`);
      break;
    }
  }

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
  listFiles () {
    mux.bufferPush ('import os; os.listdir()\r', files.updateTable.bind(this)); //Using ; to trigger only one ">>>"
  }
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
  files_view (file) {
    this.viewOnly=true;
    this.get_file(file);
    files.update_file_status('Downloading ' + file);
  }
  files_download (file) {

    this.viewOnly=false;
    this.get_file(file);
  }
  get_file (src_fname) {
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
        mux.bufferPush (`import uos, sys; uos.stat('${src_fname}')\r`);
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
          openButton_.flag('Is directory');
          wrapper2_.appendChilds([openButton_])
          wrapper2_.dom_.style.cursor = 'default';
        } else {
          openButton_.dom_.title = `Open file ${file}`;
          openButton_.onclick (()=>{Files.files_view(file)});
          if(file == 'boot.py' || file == 'main.py')
            openButton_.flag('Run at boot');
          let deleteButton_ = new DOM ('span', {className:'icon', id:'trashIcon', title:`Delete file ${file}`});
              deleteButton_.onclick (()=>{Files.delete(file)});
          let runButton_ = new DOM ('span', {className:'icon', id:'runIcon', title:`Run file ${file}`});
              runButton_.onclick (()=>{Files.run(file)});
          let downloadButton_ = new DOM ('span', {className:'icon', id:'downloadIcon', title:`Download file ${file}`});
              downloadButton_.onclick (()=>{Files.files_download(file)});

          let wrapper_ = new DOM ('div');
              wrapper_.appendChilds([runButton_, downloadButton_, deleteButton_]);
          wrapper2_.appendChilds([openButton_, wrapper_]);
        }

        this.fileList.appendChild(wrapper2_.dom_)
      })

      Files.received_string = Files.received_string.replace(re, '\r\n') //purge received string out
    }
  }
}

class DOM {
  constructor (DOM_, tags_) {
    this.dom_ ;
    switch (DOM_) {
      case 'span':
      case 'div':
        this.dom_ = document.createElement (DOM_);
        if (typeof tags_ == 'object') for (const tag_ in tags_) {
          if (['innerText', 'className', 'id', 'title'].includes(tag_))
          this.dom_ [tag_] = tags_ [tag_]
        }
      break;
    }
  }
  onclick (ev) {
    this.dom_.onclick = ev;
  }
  appendChilds (DOMS_) {
    DOMS_.forEach ((item) => {
      if (/HTML(.*)Element/.test(item.constructor.name))
        this.dom_.appendChild(item)
      else if (item.constructor.name == 'DOM' && (/HTML(.*)Element/.test(item.dom_)))
        this.dom_.appendChild(item.dom_);
    })
  }
  flag (str) {
    this.dom_.innerHTML = `${this.dom_.innerHTML} <span>${str}</span>`;
  }
}


//   this_message.div.onclick = (ev) => {try {this.panel.removeChild(ev.target.parentNode)}catch(e){};};



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
  static on () {
    terminal.setOption('disableStdin', false);
    terminal.focus();
  }
  static off () {
    terminal.setOption('disableStdin', true);
    terminal.blur();
  }
  static write (data) {
    terminal.write(data);
  }
  static resize () {
    let cols = Math.max(50, Math.min(200, (window.innerWidth - 4*$em) / 7)) | 0;
    let rows = Math.max(15, Math.min(40, (window.innerHeight - 20*$em) / 12)) | 0;
    terminal.resize(cols, rows);
  }
}
