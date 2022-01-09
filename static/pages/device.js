"use strict";

import {DOM, Animate} from '../base/dom.js'
export {Device}

class Device {
  constructor (){
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

    $.newConnection = new DOM('div', {id:'newConnection'})
      .append([
        new DOM('h3', {innerText:'New connection'}),
        new DOM('span', {className:'funky'}).append([
          new DOM('button', {id:'WebSerial'})
            .append(new DOM('div', {innerText:'USB/Serial', className:'button icon'}))
            .onclick(this, this.connectSerial),
          new DOM('button', {id:'WebSocket'})
            .append(new DOM('div', {innerText:'Wi-fi/Internet', className:'button icon'})),
          new DOM('button', {id:'WebBluetooth'})
            .append(new DOM('div', {innerText:'Bluetooth', className:'button icon'}))
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


    // Cross tabs event handler on connecting and disconnecting device
    command.add(this, {
      use: this._use,
      unuse: this._unuse,
      updateInfo: this._updateInfo
    })
  }
  connectSerial (){
    channel.connect('webserial', [this, this.use])
  }
  use (){
    let timestamp = +new Date()

    if (channel.targetDevice == undefined){
      console.error("Device: Use function called without a established connection")
      return
    }
    command.dispatch(this, 'use', [
      channel.targetDevice, timestamp, {
        nodename: 'unknown',
        version: 'unknown'
      }, command.tabUID])
    // Only on a master tab
    this._dom.nav._dom.classList.add('using')
    this._dom.devices._dom.classList.add('master')
    let child = DOM.get(`[data-uid=${channel.targetDevice}]`, this._dom.devices._dom)
    child.classList.add('on')

    // If not inited, fill devices from StorageBroker (-->)
    if (!this.inited) {
      this.devices = JSON.parse(storage.fetch('device'))
      this._devicePush(uid, timestamp, channel.targetDevice, command.tabUID)
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
    let obj = page.project.projects[page.project.currentUID]
    if (obj.hasOwnProperty('device'))
      this.load(obj.device)
  }
  load (obj){
    // Trigger blocks because blocks might be inited
    if (obj.hasOwnProperty('target'))
      page.blocks.toolbox(obj.target)

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

    page.project.update({
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
    ev.preventDefault()
    if (channel.current != undefined)
      return

    if (uid != channel.targetDevice){
      // Only on a slave tab
      channel.targetDevice = uid
      this._dom.nav._dom.classList.add('using')
      let child = DOM.get(`[data-uid=${channel.targetDevice}]`, this._dom.devices._dom)
      child.classList.add('on')
    } else {
      this._dom.nav._dom.classList.remove('using')
      let child = DOM.get(`[data-uid=${channel.targetDevice}]`, this._dom.devices._dom)
      child.classList.remove('on')
      channel.targetDevice = undefined
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
    this._dom.devices._dom.classList.remove('master')

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
        page.notification.send(`Device ${item.nodename} version ${item.version} is unresponsive, consider resetting it.`)
      }
    })
  }
}
