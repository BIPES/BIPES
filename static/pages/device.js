"use strict";

import {DOM, Animate} from '../base/dom.js'
import {command} from '../base/command.js'
import {storage} from '../base/storage.js'
import {channel} from '../base/channel.js'
import {rosetta} from '../base/rosetta.js'

import {notification} from './notification.js'

class Device {
  constructor (){
    this.name = 'device'
    this.devices = storage.has('device') && storage.fetch('device') != '[]' ?
                    JSON.parse(storage.fetch('device')) : []

    if (this.devices.length === 0)
      storage.set('device')

    this.inited = false
    this.deviceInfo = {
      arduino:{
        nodename:'arduino',
        name:'Arduino'
      },
      esp32:{
        nodename:'esp32',
        name:'ESP32'
      }
    }
    this.default = 'esp32'

    let $ = this._dom = {}

    $.buttonWebSerial = new DOM('button', {id:'WebSerial'})
        .append([
          new DOM('span', {innerText:'Not supported'}),
          new DOM('div', {innerText:'USB/Serial', className:'button icon'}),
        ]).onclick(this, this.connectWebSerial),
    $.buttonWebSocket = new DOM('button', {id:'WebSocket'})
          .append([
          new DOM('span', {innerText:'Not supported'}),
          new DOM('div', {innerText:'Wi-fi/Internet', className:'button icon'}),
        ])
    $.buttonWebBluetooth = new DOM('button', {id:'WebBluetooth'})
        .append([
          new DOM('span', {innerText:'Not supported'}),
          new DOM('div', {innerText:'Bluetooth', className:'button icon'}),
        ]).onclick(this, this.connectWebBluetooth)

    $.newConnection = new DOM('div', {id:'new-connection'})
      .append([
        new DOM('h3', {innerText:'New connection'}),
        new DOM('span', {className:'funky'}).append([
          $.buttonWebSerial, $.buttonWebSocket, $.buttonWebBluetooth
        ])
      ])

    $.devices = new DOM('span', {className:'funky'})


    $.h2 = new DOM('h2', {innerText:"Device"})
    $.wrapper = new DOM('span', {className: "device-connect"})
      .append([
        new DOM('div', {id:'devices'})
        .append([
          new DOM('h3', {innerText:'Connected devices'}),
          $.devices
        ]), $.newConnection])

    let targets = []
    for (const key in this.deviceInfo) {
      targets.push(
        new DOM('option', {innerText:key, value:key})
      )
    }
    $.targetDropdown = new DOM('select')
      .append(targets)
      .onevent('change', this, this.setProjectTarget)

    $.pinout = new DOM('img', {id:'pinout', src:`./static/media/devices/${this.default}.svg`})
    $.wrapper2 = new DOM('span', {className: "device-current"})
      .append([
        new DOM('div', {id:'target-device'})
        .append([
          new DOM('hr'),
          new DOM('div', {className:'header'})
            .append([
              new DOM('h3', {innerText:"Target device"}),
              $.targetDropdown
            ]),
          new DOM('div')
            .append([
              new DOM('div')
                .append([
                  $.pinout
                ]),
              new DOM('span', {
                innerText:"Change the project's target device at anytime.",
                className:'tips icon text'
              }),
            ])
        ])
      ])

    $.container = new DOM('div', {className:'container'})
      .append([$.h2, $.wrapper, $.wrapper2])


    $.section = new DOM(DOM.get('section#device'))
      .append([$.container._dom])
    $.section._dom.classList.add('default')
    $.nav = new DOM(DOM.get('a#device'))
    
    $.webSocketSetup = new DOM('div')
    this.webSocketSetup = new WebSocketSetup($.webSocketSetup, this)
    $.buttonWebSocket.onclick(this.webSocketSetup, this.webSocketSetup.open)
    $.section.append($.webSocketSetup)


    // Cross tabs event handler on connecting and disconnecting device
    command.add(this, {
      use: this._use,
      unuse: this._unuse,
      updateInfo: this._updateInfo
    })

    this.checkAPISupport()
  }
  /*
   * Trigger WebSerial connection to a device.
   */  
  connectWebSerial (){
    if (channel.targetDevice != undefined)
      this.select(channel.targetDevice)
    channel.connect('webserial', [this, this.use])
  }
  /*
   * Trigger WebSocket connection to a device.
   * @param{string} url - Device's URL (IP + port number)
   * @param{string} passwd - Device's password.
   */
  connectWebSocket (url, passwd){
    if (channel.targetDevice != undefined)
      this.select(channel.targetDevice)
    channel.connect('websocket', [this, this.use], {url:url,passwd:passwd})
  }
  /*
   * Trigger WebBluetooth connection to a device.
   */  
  connectWebBluetooth (){
    if (channel.targetDevice != undefined)
      this.select(channel.targetDevice)
    channel.connect('webbluetooth', [this, this.use])
  }
  use (){
    let timestamp = +new Date()

    if (channel.targetDevice == undefined){
      console.error("Device: Use function called without a established connection")
      return
    }
    let str = {
        protocol: channel.currentProtocol,
        nodename: 'unknown',
        version: 'unknown'
      }
    command.dispatch(this, 'use', [
      channel.targetDevice, timestamp, str, command.tabUID
    ])
    // Only on a master tab
    this._dom.nav._dom.classList.add('using')
    this._dom.wrapper._dom.classList.add('master')
    let child = DOM.get(`[data-uid=${channel.targetDevice}]`, this._dom.devices._dom)
    child.classList.add('on')

    // If not inited, fill devices from StorageBroker (-->)
    if (!this.inited) {
      this.devices = JSON.parse(storage.fetch('device'))
      this._devicePush(uid, timestamp, str, command.tabUID)
    }
    // Update StorageBroker once
    storage.set('device', JSON.stringify(this.devices))
    // (-->) then clear again, do this for any module with methods that could
    // be called even deinited.
    if (!this.inited)
      this.devices = []

    // Request info
    setTimeout(()=>{this.fetchInfo(channel.targetDevice)},500)
  }

  _devicePush (uid, timestamp, str, tabUID){
    this.devices.push({
      uid: uid,
      timestamp: timestamp,
      protocol: str.protocol,
      nodename: str.nodename,
      version: str.version,
      tab: tabUID
      })
  }


  // Visual and instance object
  _use (uid, timestamp, str, tabUID){
    this._devicePush(uid, timestamp, str, tabUID)

    if (!this.inited)
      return

    if (this.devices.length == 1) {
      this._dom.devices.removeChilds()
    }
    this._dom.devices._dom.insertBefore(
      this._domCard(this.devices[this.devices.length - 1])._dom,
      this._dom.devices._dom.firstChild
    )
  }
  init (){
    if (this.inited)
      return

    this.nav.classList.remove('new')
    if (this.devices.length > 0) {
      let msgs = []
      this.devices.forEach (item => {
        msgs.unshift(this._domCard(item))
      })
      this._dom.devices.append(msgs)
    } else
      this._noDevice()

    // Only on a slave tab
    if (channel.targetDevice != undefined) {
      let child = DOM.get(`[data-uid=${channel.targetDevice}]`, this._dom.devices._dom)
      child.classList.add('on')
    }

    this.inited = true
    let obj = window.bipes.page.project.projects[window.bipes.page.project.currentUID]
    if (obj.hasOwnProperty('device'))
      this.load(obj.device)
  }
  load (obj){
    // Trigger blocks because blocks might be inited
    if (obj.hasOwnProperty('target'))
      window.bipes.page.blocks.toolbox(obj.target)

    if (!this.inited)
      return
    if (obj.hasOwnProperty('target')){
      DOM.setSelected(this._dom.targetDropdown, obj.target),
      this._dom.pinout._dom.src = `./static/media/devices/${obj.target}.svg`
      // Set target's blockly toolbox
    }
  }
  setProjectTarget (){
    let target = this._dom.targetDropdown._dom.value

    window.bipes.page.project.update({
      device:{target:target}
    })
  }

  _noDevice (){
    this._dom.devices.append(
      new DOM('span', {innerText:'No connected devices, connect below!'})
    )
  }
  // Creates a DOM notificaton card
  _domCard (item){
    let about = item.tab == command.tabUID ? "On this tab" : "On other tab"
    let using = "Using this device"
    return new DOM('button', {uid: item.uid})
      .append([
        new DOM('div').append([
          new DOM('h4', {id:'nodename', innerText: item.nodename}),
          new DOM('div', {id:'version', innerText: item.version}),
          new DOM('div', {innerText: about}),
          new DOM('div', {className:'using-text', innerText: using}),
          new DOM('button', {
            id:'fetch',
            className:'icon text',
            innerText:"Get info"
          }).onclick(this, this.fetchInfo, [item.uid]),
          new DOM('button', {
            id:'disconnect',
            className:'icon text',
            innerText:'Disconnect'
          }).onclick(channel, channel.disconnect, [])
        ])
        .onclick(this, this.select, [item.uid])
      ])
  }
  deinit (){
    if(!this.inited)
      return
    this._dom.devices.removeChilds()
    this.inited = false
  }
  select (uid, ev){
    if (ev !== undefined)
      ev.preventDefault()
    if (channel.current != undefined)
      return

    if (uid != channel.targetDevice){
      // Only on a slave tab
      channel.targetDevice = uid
      this.devices.forEach((device) => {
        if (device.uid == uid) {
          channel.currentProtocol = device.protocol
        }
      })
      this._dom.nav._dom.classList.add('using')
      let child = DOM.get(`[data-uid=${channel.targetDevice}]`, this._dom.devices._dom)
      if (child != null)
        child.classList.add('on')
    } else {
      this._dom.nav._dom.classList.remove('using')
      let child = DOM.get(`[data-uid=${channel.targetDevice}]`, this._dom.devices._dom)
      if (child != null)
        child.classList.remove('on')
      channel.targetDevice = undefined
      channel.currentProtocol = undefined
    }
  }
  fetchInfo (uid){
    let cmd = rosetta.uname.cmd()

    channel.push(cmd, channel.targetDevice, ['device', '_fetchedInfo'])
  }
  _fetchedInfo (str, cmd, tabUID){
    let reg = rosetta.uname.reg,
        reg_str = rosetta.uname.reg_str
    if (!reg.test(cmd) || !reg_str.test(str))
      return

    let match = str.match(reg_str)


    command.dispatch(this, 'updateInfo', [
      channel.targetDevice,
      match[1],
      match[2]
    ], command.tabUID)
    // Update localStorage once
    storage.set('device', JSON.stringify(this.devices))
  }
  _updateInfo (uid, nodename, version){
    this.devices.forEach((device) => {
      if (device.uid == uid) {
        device.nodename = nodename,
        device.version = version
      }
    })
    if (!this.inited)
      return

    DOM.get(`[data-uid=${uid}] #nodename`, this._dom.devices._dom).innerText = nodename
    DOM.get(`[data-uid=${uid}] #version`, this._dom.devices._dom).innerText = version
  }
  // Main instance call
  unuse (uid){
    // Update actual locaStorage, do right now to guarantee run before unload.
    this.devices.forEach((item, index) => {
      if (item.uid == uid) {
        this.devices.splice(index,1)
      }
    })
    storage.set('device', JSON.stringify(this.devices))

    // Only on a master tab
    this._dom.nav._dom.classList.remove('using')
    this._dom.wrapper._dom.classList.remove('master')

    command.dispatch(this, 'unuse', [uid])
  }
  // Visual and instance object
  _unuse (uid){
    if (channel.targetDevice == uid){
      channel.targetDevice = undefined
      this._dom.nav._dom.classList.remove('using')
    }

    this.devices.forEach((item, index) => {
      if (item.uid == uid) {
        this.devices.splice(index,1)
      }
    })

    if (!this.inited)
      return

    // Must find child to work between tabs
    let child = DOM.get(`[data-uid=${uid}]`, this._dom.devices._dom)
    this._dom.devices._dom.removeChild(child)
    if (this._dom.devices._dom.childElementCount == 0)
      this._noDevice()
  }
  unresponsive (uid){
    this.devices.forEach((item, index) => {
      if (item.uid == uid) {
        notification.send(`Device ${item.nodename} version ${item.version} is unresponsive, consider resetting it.`)
      }
    })
  }
	/**
   * Wheck if the browser or current protocol (file:, https: and http) enables
   * the APIs.
   */
  checkAPISupport (){
    if (window.location.protocol == 'https:')
      this._dom.buttonWebSocket._dom.classList.add('unsupported')

    if (window.location.protocol == 'http:' && window.location.hostname != '127.0.0.1')
      this._dom.buttonWebSerial._dom.classList.add('unsupported'),
      this._dom.buttonWebBluetooth._dom.classList.add('unsupported')

    if (navigator.serial == undefined)
      this._dom.buttonWebSerial._dom.classList.add('unsupported')

    if (navigator.bluetooth == undefined)
      this._dom.buttonWebBluetooth._dom.classList.add('unsupported')
  }
}


/* Create the WebSocket setup popup */
class WebSocketSetup {
  constructor (dom, parent){
    this.mdTimestamp  // A timestamp to differentiate click and selection drag.

    let $ = this._dom = {}
    $.webSocketSetup = dom
    $.webSocketSetup._dom.id = 'webSocketSetup'
    $.webSocketSetup._dom.classList.add('popup')

    $.webSocketSetup.onclick(this, this.close)
      .onevent('contextmenu', this, this.close)
      .onevent('mousedown', this, (ev) => {this.mdTimestamp = +new Date()})
    $.title = new DOM('h3', {innerText:'New WebSocket connection'})
    $.urlLabel = new DOM('h4', {innerText:'Address:'})
    $.urlInput = new DOM('input', {
      placeholder:"Device' address, e.g. [ws/wss]://192.168.0.35:8266",
      value:'ws://192.168.0.35:8266'
    })
    $.passwordLabel = new DOM('h4', {innerText:'Password:'})
    $.passwordInput = new DOM('input', {
      placeholder:"Device's  password",
      type:'password'
    })
    $.buttonConnect = new DOM('button', {
      innerText:'Connect',
      className:'icon text',
      id:'connect'
    }).onclick(this, () => {
      this.close()
      parent.connectWebSocket($.urlInput._dom.value, $.passwordInput._dom.value)
    })
    $.buttonScan = new DOM('button', {
      innerText:'Scan devices',
      className:'icon text',
      id:'scan'
    })
    $.info = new DOM('span', {
      className:'icon text warnings',
      innerText:"ws does not work in https, only wss."
    })
    $.wrapper = new DOM('div')
      .append([$.title, $.info]);
    this.webSocketScan = new WebSocketScan(this, $.wrapper)
    $.buttonScan.onclick (this, () => {
      DOM.switchState(this.webSocketScan._dom.container._dom)
      this.webSocketScan._dom.inputPrefix._dom.focus()
    })
    $.wrapper.append([
        $.urlLabel, $.urlInput,
        $.passwordLabel, $.passwordInput,
        new DOM ('div').append([
          $.buttonScan, $.buttonConnect
        ])
      ])
    
    $.webSocketSetup.append($.wrapper)
  }
  /**
  * Close the webSocketSetup menu.
  * @param {Object} ev - On click event, close when target is undefined or the
  *                      blank grey area.
  */
  close (ev) {
    if (ev != undefined)
      ev.preventDefault()
    if (ev == undefined || ev.target.id == 'webSocketSetup'){
      if (+new Date - this.mdTimestamp < 150 || ev == undefined){
        this._dom.wrapper._dom.style.marginTop = '110vh'
        Animate.off(this._dom.webSocketSetup._dom, undefined, 125)
      }
    }
  }
  /**
  * Render the webSocketSetup and open it.
  */
  open (){
    let $ = this._dom
    setTimeout(() =>{
      $.wrapper._dom.style.marginTop = window.innerWidth/16 > 40 ? '10vh' : `calc(${window.innerHeight}px - 20.5rem)`
      },125)
    setTimeout(() => {this._dom.urlInput._dom.focus()}, 125)
    Animate.on($.webSocketSetup._dom, 125)
  }
}

/* Scan network for devices acessible through WebSocket */
class WebSocketScan {
  /*
   * Construct class with parent class and target to insert
   * @param {Object} parent - Parent class.
   * @param {Object} dom - target to insert the device scanner.
   */
  constructor (parent, dom) {
    this.parent = parent
    this.last = 255             // Last valid id
    this.multiplier = 0         // protocol*prefix*port
    this.count = 0              // Increment for every error or connect
    this.found = 0              // How many have been found.
    this.scanning = false       // Is currently scanning?
    
    let $ = this._dom = {}
    $.label = new DOM('h4', {
      innerText:'Scan network for addresses like:'  
    }) 
    $.inputProtocol = new DOM('input', {
      value: 'ws',
      placeholder: 'xx'
    }) 
    $.inputPrefix = new DOM('input', {
      value: '192.168.0',
      placeholder: '000.000.0'
    }) 
    $.inputPort = new DOM('input', {
      value: '8266,8261',
      placeholder: '0000'
    }) 
    $.buttonScan = new DOM('button', {
      innerText:'Start scan',
      className:'noicon text',
      id:'scan'
      }).onclick(this, this.scan)
    $.container = new DOM('div', {id:'addressConf'})
      .append([$.label,
        new DOM('div').append([
          $.inputProtocol, new DOM('span', {innerText:'://'}),
          $.inputPrefix, new DOM('span', {innerText:'.0/24:'}),
          $.inputPort,
        ]),
        $.buttonScan
    ])
    $.status = new DOM('div')
    $.found = new DOM('div', {className:'listy'})
    $.addressFound = new DOM('div', {id:'addressFound'}).append([
      $.status, $.found
    ])
    dom.append([
      $.container,
      $.addressFound
    ])
  }
  /*
   * Start network scan.
   */
  scan (){
    if (this.scanning)
      return

    this._dom.container._dom.classList.remove('on')
    this._dom.addressFound._dom.classList.add('on')
    let $ = this._dom
    let protocol = $.inputProtocol._dom.value.replaceAll(' ','').split(','),
        prefix = $.inputPrefix._dom.value.replaceAll(' ','').split(','),
        ports = $.inputPort._dom.value.replaceAll(' ','').split(','),
        last = 0
    
    if (!protocol.every(this._checkIPAddress)) {
      notification.send('Device: Invalid network prefix.')
      return  
    }
    this.multiplier = protocol.length * prefix.length * ports.length
    this.scanning = true
    this.clear()
    protocol.forEach (pro => {
      prefix.forEach (pre => {
        ports.forEach (por => {
          for (let i = 1; i <= this.last; i++) {
            let addr = `${pro}://${pre}.${i}:${por}`
            console.log(addr)
            let ws = new WebSocket(addr)
            ws.start = performance.now
            ws.port = por
            ws.onerror = () => {
              this.progress() 
            }
            ws.onopen = () => {
              this.include(ws.url)
              this.progress() 
              ws.close()
            }
          }
        })
      })
    })
  }
  /*
   * Update process status.
   */
  progress (){
    this._dom.status._dom.innerText = `Scanned ${this.count} of ${this.last*this.multiplier} IPs, found ${this.found}:` 
    
    if (this.count == (this.last) * this.multiplier){
      this._dom.status._dom.innerText = `Done scanning ${this.last*this.multiplier} IPs, found ${this.found}:` 
      this.scanning = false
      this.multiplier = 0
      this.count = 0
      this.found = 0
    }
    this.count++
  }
  /*
   * Include found url to the list.
   * @param{string} url - Reachable url.
   */
  include (url){
    this.found++
    url = url.substring(0, url.length - 1)
    this._dom.found.append(
      new DOM('button', {
        className:'noicon text'
      }).append([new DOM('div', {innerText:url})])
        .onclick(this, this.apply, [url])
    )
  }
  /*
   * Apply url to WebSocket setup.
   * @param{string} url - Reachable url to apply.
   */
  apply (url){
    this.parent._dom.urlInput._dom.value = url
    this.parent._dom.passwordInput._dom.focus()
  }
  /*
   * Clear previous urls.
   */
  clear (){
    this._dom.found.removeChilds()
  }
  /*
   * Apply url to WebSocket setup.
   */
  _checkIPAddress (ipaddress){
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress))
      return (false)
    return (true)
  }
}

export let device = new Device()
