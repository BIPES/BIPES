"use strict"

import {Tool} from './tool.js'
import {command} from './command.js'

// Commom MicroPython outputs
const BACKSPACE = '[K' // Backspace character
const PASTEMODE = "paste mode; Ctrl-C to cancel, Ctrl-D to finish" // Paste mode output

class Channel {
   /**
   * Create the Channel object with a root object.
   * @param {Object} root - Root object, where all callbacks are child from.
   */
  constructor (){
    this.name = 'channel'
    this.current

    this.currentProtocol // Just a string with the current connected protocol
    this.input = []   // Input to be sent to a device
    this.output = ''  // Output from the last command run in the decide
    this.watcher      // Store the interval to send data to a device
    this.lock = false // If the terminal is free to send new data
    this.dirty = false// If the terminal has input (user raw input or timers)
    this.callbacks = []

    this.webserial = new _WebSerial(this)

    this.checkUp ()
    this.targetDevice
    this.ping = {      // Create a timer on connect and on message to check
      timer:undefined, // if the device is responding
      on:false
    }
    // Cross tabs event handler on muxing terminal
    command.add(this, {
      push: this.push,
      rawPush: this.rawPush
    })

    window.addEventListener("beforeunload", () => {
      if (this.current != undefined)
        this.disconnect(true)
    })
  }
  renewPing (){
    clearTimeout(this.ping.timer)
    this.ping.timer = setTimeout(()=>{
      if (this.ping.on === false)
        window.bipes.page.device.unresponsive(this.targetDevice)
      }, 2000)
  }
  push (cmd, targetDevice, callback, tabUID){
    if (this.current == undefined || this.targetDevice != targetDevice)
      return

    this.renewPing()

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
      let self = window.bipes.page,
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
  connect (channel, callback){
    this[channel].connect(callback)
  }
  _connected (channel, callback){
    this.targetDevice = Tool.UID()
    this.current = this[channel]
    this.currentProtocol = this.current.name
    this.watcher = setInterval(
      this.current.watch.bind(this.current),
      50);
    window.bipes.page.console.on()
    window.bipes.page.console.write(`\r\n\x1b[31mConnected with ${this.currentProtocol}!\x1b[m\r\n`);
    this.push('\r\n', this.targetDevice)
    if (typeof callback == 'object' && typeof callback[1] == 'function')
      callback[1].apply(callback[0])
  }
  disconnect (force){
    if (!this.current.disconnect(force))
      return

    this._disconnected()
  }
  _disconnected (){
    clearInterval(this.watcher);

    this.output = ''
    this.callbacks = []
    this.current = undefined
    let uid = this.targetDevice,
        currentProtocol = this.currentProtocol
    this.currentProtocol = ''
    this.targetDevice = undefined
    window.bipes.page.device.unuse(uid)
    window.bipes.page.console.off()
    window.bipes.page.console.write(`\r\n\x1b[31mDisconnected from ${currentProtocol}!\x1b[m\r\n`);
  }
  checkUp (){
    if (navigator.serial == undefined)
      console.error("Don't support WebSerial")
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

function _WebSerial (parent){
  this.name = 'WebSerial'
  this.port
  this.config = {
    baudrate:115200,
    packetSize:100
  }
  this.encoder = new TextEncoder()
  this.parent = parent
  /**
   * Connect using webserial protocol, will ask user permission for the serial port.
   */
  this.connect = (callback) => {
    if (navigator.serial == undefined)
      return false

    navigator.serial.requestPort().then((port) => {
      this.port = port
      this.port.open({baudRate: [this.config.baudrate] }).then(() => {
        const appendStream = new WritableStream({
          write(chunk) {
            if (typeof chunk == 'string') {
              //data comes in chunks, keep last 4 chars to check MicroPython REPL string
              window.bipes.channel.output += chunk
              window.bipes.page.console.write(chunk)
              window.bipes.channel.ping.on = true
              if (window.bipes.channel.output.substring(window.bipes.channel.output.length - 4) == ">>> "){
                window.bipes.channel.output = window.bipes.channel.output.substring(0, window.bipes.channel.output.length - 4)
                //After all code was executed
                if (window.bipes.channel.callbacks.length > 0)
                  window.bipes.channel.handleCallback(window.bipes.channel.output)
                else {
                  window.bipes.channel.output = ''
                  window.bipes.channel.lock = false
                }
              }
            }
          },
          abort(e){
            window.bipes.channel._disconnected()
          }
        })
        this.port.readable
        .pipeThrough(new TextDecoderStream())
        .pipeTo(appendStream)
        this.parent._connected('webserial', callback)
        return true

      }).catch((e) => {
        console.error(e)
        if (e.code == 11) {
          this.parent._connected('webserial', callback)
          return true
        }
      })
    }).catch((e) => {
      console.error(e)
      return false
    })
  }  /**
   * Disconnect device connected with webserial protocol.
   * @param {boolean} force - Try to disconnect at all cost and if fails, pretend
   *                          it worked (useful on unload when everything is cleared anyway)
   */
  this.disconnect = (force) => {
    const writer = this.port.writable.getWriter()
    writer.close().then(() => {
      this.port.close().then(() => {
          this.port = undefined
        }).catch((e) => {
          console.error(e)
          if (force == true){
            writer.abort()
            this.parent._disconnected()
            this.port = undefined
          }
        })
        return true
    })
  }
  /**
   * Runs every 50ms to check if there is code to be sent in the :js:attr:`channel#input` (appended with :js:func:`this.parent.push()`)
   */
  this.watch = () => {
    if (this.port && this.port.writable && this.port.writable.locked == false && this.parent.lock == false) {
      if (this.parent.input.length > 0) {
        if (this.parent.isDirty())
          return
        try {
          this.parent.lock = true
          this.write(this.parent.input [0])
          this.parent.input.shift()
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
  this.write = async (data) => {
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
    if (this.parent.callbacks.length == 0)
      this.parent.lock = false
  }
}

export let channel = new Channel()
