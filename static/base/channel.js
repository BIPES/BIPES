"use strict";

export {Channel}

// Commom MicroPython outputs
const BACKSPACE = '[K' // Bbackspace character
const PASTEMODE = "paste mode; Ctrl-C to cancel, Ctrl-D to finish" // Paste mode output

class Channel {
   /**
   * Create the Channel object with a root object.
   * @param {Object} root - Root object, where all callbacks are child from.
   */
  constructor (root){
    this.root = root
    this.current

    this.input = []   // Input to be sent to a device
    this.output = ''  // Output from the last command run in the decide
    this.watcher      // Store the interval to send data to a device
    this.lock = false // If the terminal is free to send new data
    this.dirty = false// If the terminal has input (user raw input or timers)
    this.callbacks = []
    this.webserial = new _WebSerial ()
    this.checkUp ()
    this.targetDevice = 'mock'

		// Cross tabs event handler on muxing terminal
    command.add(this, {
      push: this.push,
      rawPush: this.rawPush
    })
  }
  push (cmd, targetDevice, callback, tabUID){
    if (this.current == undefined || this.targetDevice != targetDevice)
      return


    cmd = cmd.replaceAll('\t',"    ")

    let reg = new RegExp(`(.|[\r]){1,${this.current.config.packetSize}}`, 'g')

    if (typeof cmd == 'object')
      this.input.push([cmd])
    else if (typeof cmd == 'string') {
      cmd = cmd.replaceAll(/\r\n|\n/gm, '\r')
      this.input.push([...cmd.match(reg)])
    }
    // Build callback function
    if (callback != undefined && callback.constructor.name == 'Array') {
      let self = this.root,
          fun
      if (callback.length == 0) {
        // Filler/dummy callback
        fun = () => {}
      } else {
        for (let i = 0; i < callback.length-1; i++) {
          self = self[callback[i]]
      }
        fun = self[callback[callback.length-1]]
      }
      this.callbacks.push({
        self:self,
        fun:fun,
        cmd:cmd
      })
      if (tabUID)
        this.callbacks[this.callbacks.length - 1].uid = tabUID
    }
  }
  rawPush (cmd, targetDevice){
    if (!this.current || this.targetDevice != targetDevice)
      return

    this.dirty = true
    this.current.write(cmd)
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
    this.push('\r\n', this.targetDevice)
  }
  disconnect (){
    if (!this.current.disconnect())
      return

    modules.console.write(`\r\n\x1b[31mDisconnected from ${this.current.constructor.name}!\x1b[m\r\n`);
    clearInterval(this.watcher);

    this.output = ''
    this.callbacks = []
    this.current = undefined
    modules.console.term.off()
  }
  checkUp (){
    if (navigator.serial == undefined)
      modules.notification.send("Don't support WebSerial")
  }
  handleCallback (out){
    // Remove backspaces and characters that antecends it
    out = this.interpretBackspace(out)
	  let call = this.callbacks[0]

	  if (!call.hasOwnProperty('skip') && !/^[\x00-\x7F]{1}$/.test(call.cmd)) {
	    // Emulate command in paste mode
	    if (call.cmd[0] == '\x05')
	      call.cmd = this.emulatePasteMode(call.cmd)

      if (out.substring(0, call.cmd.length) != call.cmd) {
        console.error("Channel: callback's commands checkup failed")
        this.callbacks = []
        this.output = ''
        this.lock = false
        return true
      }
      out = out.substr(call.cmd.length)
      try {
        if (call.uid) {
          call.fun.apply(
           call.self, [out, call.cmd, call.uid]
          )
        } else {
          call.fun.apply(
            call.self, [out, call.cmd]
          )
        }
      } catch (e){
        console.error(e)
      }
    }
    this.output = ''
    this.lock = false

    this.callbacks.shift()
	}
	interpretBackspace (out){
	  let _out = []
	  // Simplify micropython's backspace
    out = out.replaceAll(BACKSPACE, '\b')

    for (let char of out) {
      if (char == '\b') {
        _out.pop()
      } else
        _out.push(char)
    }

    return _out.join('')
	}
	emulatePasteMode (cmd) {
	  // Remove paste mode chars
	  cmd = cmd.substring(1,cmd.length -1)
	  return `\r\n${PASTEMODE}\r\n=== ${cmd.replaceAll(/\r/g,'\r\n=== ')}`
	}
	/*
	 * Return a command with paste mode enclosing
	 */
	pasteMode (cmd){
	  return `\x05${cmd}\x04`
	}

	isDirty (){
	  if (!this.dirty)
	    return false

    this.current.write('\x03')
    this.dirty = false
    this.callbacks.unshift({skip:true})
    return true
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
              channel.output += chunk
              modules.console.write(chunk)
              if (channel.output.substring(channel.output.length - 4) == ">>> "){
                channel.output = channel.output.substring(0, channel.output.length - 4)
                //After all code was executed
                if (channel.callbacks.length > 0)
                  channel.handleCallback(channel.output)
                else {
                  channel.output = ''
                  channel.lock = false
                }
              }
            }
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
    if (this.port && this.port.writable && this.port.writable.locked == false && channel.lock == false) {
      if (channel.input.length > 0) {
        if (channel.isDirty())
          return
        try {
          channel.lock = true
		      this.write(channel.input [0])
          channel.input.shift()
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
  async write (data){
    if (data.constructor.name != 'Array')
      data = [data]

    let dataArrayBuffer = undefined
    for (const pack of data){
      switch (pack.constructor.name) {
        case 'Uint8Array':
          dataArrayBuffer = pack
        break;
        case 'String':
        case 'Number':
          dataArrayBuffer = this.encoder.encode(pack)
        break;
      }
      if (this.port && this.port.writable && dataArrayBuffer != undefined) {
        const writer = this.port.writable.getWriter()
        // Execution is paused until writer wrote dataArrayBuffer
        let response = await writer.write(dataArrayBuffer)
        writer.releaseLock()
	    }
	  }
	  // If no callback expected, release lock
	  if (channel.callbacks.length == 0)
	    channel.lock = false
	}
}









