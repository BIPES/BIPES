'use strict';

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
          } else if (BIPES ['workspace'].runButton.status == true){
            BIPES ['workspace'].runButton.status = false;
            BIPES ['workspace'].runButton.dom.className = 'icon on';
            BIPES ['workspace'].connectButton.className = 'icon on';
            BIPES ['workspace'].term.className = 'on';
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
