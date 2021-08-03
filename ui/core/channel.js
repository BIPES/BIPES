'use strict';

class mux {
  constructor () {
    this.available = ['webserial','websocket','']
    this.ifunavailable = {webbluetooth: ['https://bipes.net.br/beta2/ui', 'beta2serial']}
    this.currentChannel = 'webserial';
  }

  switch (channel_) {
    if (this.available.includes(channel_)) {
      this.currentChannel = channel_;
      mux.disconnect ();
      this.connect ();

      } else if (this.ifunavailable [channel_] != undefined) {
        let msg = `The channel ${channel_} is not yet available in this version, but at ${this.ifunavailable [channel_] [1]}, would you like to be redirected there?`;
        if (confirm(msg)) {
          window.location.replace(this.ifunavailable [channel_] [0]);
        } else {
          BIPES ['channel-panel'].button.className = `icon ${this.currentChannel}`
        }
    } else {
      alert(`The channel ${channel_} is not yet available in this version.`);
    }
  }

  connect () {
    switch (this.currentChannel) {
      case 'websocket':
        Channel ['websocket'].connect(BIPES ['workspace'].websocket.url.value, BIPES ['workspace'].websocket.pass.value);
      break;
      case 'webserial':
        Channel ['webserial'].connect();
      break;
      case 'webbluetooth':
        ;
      break;
    }
  }

  static disconnect () {
    if (Channel ['websocket'].connected) {
      Channel ['websocket'].ws.close();
    }  else if (Channel ['webserial'].connected) {
      Channel ['webserial'].disconnect();
    /*} else if (Channel ['webbluetooth'].connected) {
      Channel ['bluetooth'].ws.close();
    */}
  }
  static connected () {
    if (Channel ['websocket'].connected || Channel ['webserial'].connected /* || Channel ['webbluetooth'].connected*/)
      return true;
    else
      return false;
  }

  static bufferPush (code, callback) {
    let textArray;
    if (typeof code == 'object')
      textArray = code;
    else if (typeof code == 'string') {
      if (Channel ['websocket'].connected) {
        textArray = code.replace(/\r\n|\n/gm, '\r').match(/(.|[\r]){1,10}/g);
      } else if (Channel ['webserial'].connected) {
        textArray = code.replace(/\r\n|\n/gm, '\r').match(/(.|[\r]){1,1000}/g);
      }
    }

    if (Channel ['websocket'].connected) {
      Channel ['websocket'].buffer_ = Channel ['websocket'].buffer_.concat(textArray);
      if (callback != undefined)
        Channel ['websocket'].completeBufferCallback.push(callback);
    }  else if (Channel ['webserial'].connected) {
      Channel ['webserial'].buffer_ = Channel ['webserial'].buffer_.concat(textArray);
      if (callback != undefined)
        Channel ['webserial'].completeBufferCallback.push(callback);
    /*} else if (Channel ['webbluetooth'].connected) {
      Channel ['webbluetooth'].buffer_ = Channel ['webbluetooth'].buffer_.concat(textArray);
      if (callback != undefined)
        Channel ['webbluetooth'].completeBufferCallback.push(callback);
    */} else
      BIPES ['notify'].send(MSG['notConnected']);
  }

  static bufferUnshift (code) {
    if (Channel ['websocket'].connected) {
      Channel ['websocket'].buffer_.unshift(code);
    }  else if (Channel ['webserial'].connected) {
      Channel ['webserial'].buffer_.unshift(code);
    /*} else if (Channel ['webbluetooth'].connected) {
      Channel ['webbluetooth'].buffer_.unshift(code);
    */} else
      BIPES ['notify'].send(MSG['notConnected']);
  }

  static clearBuffer () {
    if (Channel ['websocket'].connected) {
      Channel ['websocket'].buffer_ = [];
    }  else if (Channel ['webserial'].connected) {
      Channel ['webserial'].buffer_ = [];
      Channel ['webserial'].completeBufferCallback = [];
    /*} else if (Channel ['webbluetooth'].connected) {
      Channel ['webbluetooth'].buffer_ = [];
    */} else
      BIPES ['notify'].send(MSG['notConnected']);
  }
}

class websocket {
  constructor () {
    this.ws;
    this.watcher;
    this.buffer_ = [];
    this.connected = false;
    this.completeBufferCallback = [];
  }

  watch () {
    if (this.ws.bufferedAmount == 0) {
      if (this.buffer_.length > 0) {
        BIPES ['progress'].remain(this.buffer_.length);
        try {
          if (['Uint8Array', 'String', 'Number'].includes(this.buffer_[0].constructor.name))
          this.ws.send (this.buffer_[0]);
          this.buffer_.shift();
        } catch (e) {
          BIPES ['notify'].log(e);
        }
      } else {
        BIPES ['progress'].end();
      }
    }
  }

  connect (url, pass) {
    this.ws = new WebSocket(url);
    this.ws.binaryType = 'arraybuffer';
    this.ws.onopen = () => {
      term.removeAllListeners('data');
      term.on('data', (data) => {
        // Pasted data from clipboard will likely contain
        // LF as EOL chars.
        data = data.replace(/\n/g, "\r");
        this.ws.send(data);
      });

      term.on('title', (title) => {document.title = title;})
      term.element.focus();
      term.write('\x1b[31mWelcome to BIPES Project using MicroPython!\x1b[m\r\n');

      term.write('\x1b[31mSending password...\x1b[m\r\n');
      this.ws.send(pass + '\n\n'); //this.buffer_.push(pass);

      this.connected = true;
      BIPES ['workspace'].websocketConnected ();

      this.ws.onmessage = (event) => {
        if (event.data instanceof ArrayBuffer) {
          var data = new Uint8Array(event.data);
          console.log('binary state = ' + Files.binary_state);
          switch (Files.binary_state) {
            case 11:
              // first response for put
              if (Tool.decode_resp(data) == 0) {
                // send file data in chunks
                for (var offset = 0; offset < Files.put_file_data.length; offset += 1024) {
                  this.ws.send(Files.put_file_data.slice(offset, offset + 1024));
                }
              Files.binary_state = 12;
              }
            break;
            case 12:
              // final response for put
              if (Tool.decode_resp(data) == 0) {
                files.update_file_status('Sent ' + Files.put_file_name + ', ' + Files.put_file_data.length + ' bytes');
                Files.listFiles();
              } else {
                files.update_file_status('Failed sending ' + Files.put_file_name);
              }
              Files.binary_state = 0;
            break;

            case 21:
              // first response for get
              console.log('get 1');
              if (Tool.decode_resp(data) == 0) {
                console.log('get 2');
                Files.binary_state = 22;
                var rec = new Uint8Array(1);
                rec[0] = 0;
              this.ws.send(rec);
            }
            break;
            case 22:
              // file data
              var sz = data[0] | (data[1] << 8);
              if (data.length == 2 + sz) {
                // we assume that the data comes in single chunks
                if (sz == 0) {
                  // end of file
                  Files.binary_state = 23;
                } else {
                  // accumulate incoming data to get_file_data
                  var new_buf = new Uint8Array(Files.get_file_data.length + sz);
                  new_buf.set(Files.get_file_data);
                  new_buf.set(data.slice(2), Files.get_file_data.length);
                  Files.get_file_data = new_buf;
                  files.update_file_status('Getting ' + Files.get_file_name + ', ' + Files.get_file_data.length + ' bytes');

                  var rec = new Uint8Array(1);
                  rec[0] = 0;
                  this.ws.send(rec);
                }
              } else {
                Files.binary_state = 0;
              }
            break;
            case 23:
              // final response
              if (Tool.decode_resp(data) == 0) {
                files.update_file_status('Got ' + Files.get_file_name + ', ' + Files.get_file_data.length + ' bytes');
                if (!Files.viewOnly)
                  saveAs(new Blob([Files.get_file_data], {type: "application/octet-stream"}), Files.get_file_name);
                else
                //Tool.updateSourceCode([Files.get_file_data]);
                Tool.updateSourceCode(new Blob([Files.get_file_data], {type: "text/plain"}), Files.get_file_name);
              } else {
                files.update_file_status('Failed getting ' + Files.get_file_name);
              }
              Files.binary_state = 0;
            break;
            case 31:
              // first (and last) response for GET_VER
              console.log('GET_VER', data);
              Files.binary_state = 0;
            break;
          }
        }
        term.write(event.data);
        if (typeof event.data == 'string') {
          if (event.data.includes(">>> ")) {
            BIPES ['workspace'].runButton.status = true;
            BIPES ['workspace'].runButton.dom.className = 'icon';
            if (this.completeBufferCallback.length > 0) {
              try {
                this.completeBufferCallback [0] ();
                this.completeBufferCallback.shift ();
              } catch (e) {
                BIPES ['notify'].log(e);
              }
            }
          } else if (event.data.includes("Access denied")) {
            //WebSocket might close before receiving this message, so won't trigger.
            BIPES ['notify'].send("Wrong board password.");
          } else if (BIPES ['workspace'].runButton.status == true) {
            BIPES ['workspace'].receiving ();
          }
        }
        Files.received_string = Files.received_string.concat(event.data);
      }

      this.watcher = setInterval(this.watch.bind(this), 50);
    }
    this.ws.onclose = () => {
      if (term)
        term.write('\x1b[31mDisconnected\x1b[m\r\n');
      this.buffer_ = [];
      this.connected = false;
      BIPES ['workspace'].runAbort();
      term.off('data');
      clearInterval(this.watcher);
    }
  }
}

class webserial {
  constructor () {
    this.port;
    this.watcher;
    this.watcherConnected_;
    this.buffer_ = [];
    this.connected = false;
    this.completeBufferCallback = [];
    this.last4chars = '';
    this.encoder = new TextEncoder();
    this.appendStream = undefined;
    this.shouldListen = true;
  }

  watch () {
    if (this.port && this.port.writable && this.port.writable.locked == false) {
      if (this.buffer_.length > 0) {
        BIPES ['progress'].remain(this.buffer_.length);
        try {
		      this.serialWrite(this.buffer_ [0]);
        } catch (e) {
          BIPES ['notify'].log(e);
        }
      } else {
        BIPES ['progress'].end();
      }
    }
  }

  connect () {
    navigator.serial.requestPort ().then((port) => {
      this.port = port;
      this.port.open({baudRate: 115200}).then(() => {
        const appendStream = new WritableStream({
          write(chunk) {
            if(Channel ['webserial'].shouldListen) {
              if (typeof chunk == 'string') {
                //data comes in chunks, keep last 4 chars to check MicroPython REPL string
                Channel ['webserial'].last4chars = Channel ['webserial'].last4chars.concat(chunk.substr(-4,4)).substr(-4,4)
                if (Channel ['webserial'].last4chars.includes(">>> ")) {
                  BIPES ['workspace'].runButton.status = true;
                  BIPES ['workspace'].runButton.dom.className = 'icon';
                  if (Channel ['webserial'].completeBufferCallback.length > 0) {
                    try {
                      Channel ['webserial'].completeBufferCallback [0] ();
                    } catch (e) {
                      BIPES ['notify'].log(e);
                    }
                    Channel ['webserial'].completeBufferCallback.shift ();
                  }
                } else if (BIPES ['workspace'].runButton.status == true) {
                  BIPES ['workspace'].receiving ();
                }
                Files.received_string = Files.received_string.concat(chunk);
              }
              term.write(chunk);
            }
          }
        });
        this.port.readable
        .pipeThrough(new TextDecoderStream())
        .pipeTo(appendStream);


        this.connect_ ();

        this.resetBoard ();

      }).catch((e) => {
        if (e.code == 11) {
          this.connect_ ();
          this.resetBoard ();
          this.shouldListen = true;
        }
        BIPES ['notify'].log(e);
      });

    }).catch((e) => {
        BIPES ['notify'].log(e);
    });
  }
  connect_ () {
    term.on('data', (data) => {
      this.serialWrite(data);
    });
    term.write('\x1b[31mConnected using Web Serial API !\x1b[m\r\n');
    this.connected=true;
    if (BIPES ['workspace'].runButton.status == true)
        BIPES ['workspace'].receiving ();

    this.watcher = setInterval(this.watch.bind(this), 50);
  }
  disconnect () {
    const writer = this.port.writable.getWriter();
    writer.close().then(() => {
      this.port.close().then(() => {
          this.port = undefined;
        }).catch((e) => {
          BIPES ['notify'].log(e);
          writer.abort();
          this.port = undefined;
          this.shouldListen = false;
        })
         if (term)
          term.write('\x1b[31mDisconnected\x1b[m\r\n');
        this.buffer_ = [];
        this.last4chars = '';
        this.connected = false;
        clearInterval(this.watcher);
        term.off('data');
        BIPES ['workspace'].runAbort();
    })

  }

  resetBoard () {
    setTimeout(() => {
      if (BIPES ['workspace'].resetBoard.checked) {
        term.write('\x1b[31mResetting the board...\x1b[m\r\n');
        this.serialWrite ('\x04');
      } else
        this.serialWrite ('\x03');
    },50);
  }


  serialWrite (data) {
    let dataArrayBuffer = undefined;
    switch (data.constructor.name) {
      case 'Uint8Array':
        dataArrayBuffer = data;
      break;
      case 'String':
      case 'Number':
        dataArrayBuffer = this.encoder.encode(data);
      break;
    }
    if (this.port && this.port.writable && dataArrayBuffer != undefined) {
      const writer = this.port.writable.getWriter();
      writer.write(dataArrayBuffer).then (() => {writer.releaseLock(); this.buffer_.shift ()});
	  }
	}
}


