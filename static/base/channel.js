"use strict";

export {Channel}

class Channel {
   /**
   * Create the Channel object with a root object.
   * @param {Object} root - Root object, where all callbacks are child from.
   */
  constructor (root){
    this.root = root
    this.current

    this.input = []  // Input to be sent to a device
    this.output = '' // Output from the last command run in the decide
    this.ending = '' // Last 4 chars to match with MicroPython's ">>> " code
    this.watcher     // Store the interval to send data to a device
    this.callbacks = []
    this.webserial = new _WebSerial ()
    this.checkUp ()
    this.targetDevice = 'mock'

		// Cross tabs event handler on muxing terminal
    command.add(this, {
      push: this.push
    })
  }
  push (code, targetDevice){
    if (this.current == undefined || this.targetDevice != targetDevice)
      return

    let reg = new RegExp(`(.|[\r]){1,${this.current.config.packetSize}}`, 'g')

    if (typeof code == 'object')
      this.input.push(code)
    else if (typeof code == 'string')
      this.input.push(...code.replace(/\r\n|\n/gm, '\r').match(reg))
  }
  switch (channel){
    this.diconnect()
    this.connect(channel)

  }
  connect (channel){
    this[channel].connect()
  }
  _connected (channel){
    this.current = this[channel]
    this.watcher = setInterval(
      this.current.watch.bind(this.current),
      50);
    modules.console.on()
    modules.console.write(`\r\n\x1b[31mConnected with ${this.current.constructor.name}!\x1b[m\r\n`);
  }
  disconnect (){
    if (!this.current.disconnect())
      return

    modules.console.write(`\r\n\x1b[31mDisconnected from ${this.current.constructor.name}!\x1b[m\r\n`);
    clearInterval(this.watcher);

    this.ending = ''
    this.output = ''
    this.callbacks = []
    this.current = undefined
    modules.console.term.off()
  }
  checkUp (){
    if (navigator.serial == undefined)
      modules.notification.send("Don't support WebSerial")
  }
}

class _WebSerial {
  constructor (){
    this.port
    this.config = {
      baudrate:115200,
      packetSize:100
    }
    this.encoder = new TextEncoder();
  }
	/**
   * Connect using webserial protocol, will ask user permission for the serial port.
   */
  connect (){
    if (navigator.serial == undefined)
      return false

    navigator.serial.requestPort().then((port) => {
      this.port = port
      this.port.open({baudRate: [this.config.baudrate] }).then(() => {
        const appendStream = new WritableStream({
          write(chunk) {
            if (typeof chunk == 'string') {
              //data comes in chunks, keep last 4 chars to check MicroPython REPL string
              channel.ending = channel.ending.concat(chunk.substr(-4,4)).substr(-4,4)
              if (channel.ending == ">>> "){
                //After all code was executed
                if (channel.callbacks.length > 0)
                  try {
                    channel.callbacks[0]()
                  } catch (e) {
                    console.error(e)
                  }
                  channel.callbacks.shift()
                  channel.output = ''
              } else
                channel.output += chunk
            }
            modules.console.write(chunk)
          }
        })
        this.port.readable
        .pipeThrough(new TextDecoderStream())
        .pipeTo(appendStream)
        channel._connected('webserial')
        return true

      }).catch((e) => {
        console.error(e)
        if (e.code == 11) {
          channel._connected('webserial')
          return true
        }
      })
    }).catch((e) => {
      console.error(e)
      return false
    })
  }  /**
   * Disconnect device connected with webserial protocol.
   */
  disconnect () {
    const writer = this.port.writable.getWriter()
    writer.close().then(() => {
      this.port.close().then(() => {
          this.port = undefined
        }).catch((e) => {
          console.error(e)
          writer.abort()
          this.port = undefined
        })
        return true
    })
  }
	/**
   * Runs every 50ms to check if there is code to be sent in the :js:attr:`channel#input` (appended with :js:func:`channel.push()`)
   */
  watch (){
    if (this.port && this.port.writable && this.port.writable.locked == false) {
      if (channel.input.length > 0) {
        try {
		      this.write(channel.input [0]);
        } catch (e) {
          console.error(e)
        }
      }
    }
  }
  /**
   * Directly send code via webserial, normally called by this.watch()
   * @param {(Uint8Array|string|number)} data - code to be sent via webserial
   */
  write (data) {
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
      writer.write(dataArrayBuffer).then (() => {writer.releaseLock(); channel.input.shift ()});
	  }
	}
}









