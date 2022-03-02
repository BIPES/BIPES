"use strict";

import {DOM, Animate} from '../../base/dom.js'
import {command} from '../../base/command.js'
import {storage} from '../../base/storage.js'

import {Tool} from '../../base/tool.js'

class Notification {
  constructor (){
    this.name = 'notification'
    this.notify = new Notify()
    this.messages = []

    this.inited = false

    let $ = this.$ = {}
    $.h2 = new DOM('h2', {innerText:'Notifications'})
    $.wrapper = new DOM('span', {className: 'listy'})
    $.container = new DOM('div', {className:'container'})
      .append([$.h2, $.wrapper])

    $.section = new DOM(DOM.get('section#notification'))
      .append($.container.$)
    $.section.$.classList.add('default')

    // Add Forum button to status
    new DOM(DOM.get('div#status-bar #extra')).append([
      new DOM('button', {
        className:'status-icon',
        id:'forum',
        innerText:Msg['Forum'],
        title:Msg['Forum']
      }).onclick(this, () => {
        open('https://github.com/BIPES/BIPES/discussions', '_blank').focus()
      })
    ])

    // Cross tabs event handler on sending and deleting messages
    command.add(this, {
        send: this._send,
        discard: this._discard
      })
  }
  // Main instance call
  send (str, strlong){
    let uid = DOM.UID()
    let timestamp = +new Date()


    command.dispatch(this, 'send', [uid, timestamp, str, strlong])
    // If not inited, fill messages from StorageBroker (-->)
    if (!this.inited) {
      this.messages = JSON.parse(storage.fetch('notification'))
      this._messagePush(uid, timestamp, str, strlong)
    }
    // Update StorageBroker once
    storage.set('notification', JSON.stringify(this.messages))
    // (-->) then clear again, do this for any module with methods that could
    // be called even deinited.
    if (!this.inited)
      this.messages = []
  }
  _messagePush (uid, timestamp, str, strlong){
    this.messages.push({
      uid: uid,
      timestamp: timestamp,
      message: strlong == undefined ? str : strlong
      })
  }
  // Visual and instance object
  _send (uid, timestamp, str, strlong){
    this.notify.send(str)
    this.nav.classList.add('new')

    if (!this.inited)
      return

    this._messagePush(uid, timestamp, str, strlong)

    if (this.messages.length == 1) {
      this.$.wrapper.removeChilds()
    }
    this.$.wrapper.$.insertBefore(
      this.$Card(this.messages[this.messages.length - 1]).$,
      this.$.wrapper.$.firstChild
    )
  }
  init (){
    if (this.inited)
      return

    this.nav.classList.remove('new')
    if (storage.has('notification') && storage.fetch('notification') != '[]') {
      this.messages = JSON.parse(storage.fetch('notification'))
      let msgs = []
      this.messages.forEach (item => {
        msgs.unshift(this.$Card(item))
      })
      this.$.wrapper.append(msgs)
    } else {
      storage.set('notification')
      this._noNotification()
    }
    this.inited = true
  }
  _noNotification (){
    this.$.wrapper.append(
      new DOM('span', {innerText:'There is no notifications.'})
    )
  }
  // Creates a DOM notificaton card
  $Card (item){
    return new DOM('span', {uid: item.uid}).append([
      new DOM('div', {className:'row'}).append([
        new DOM('h4', {
          innerText: item.message
          })
        ]),
      new DOM('div', {className:'row'}).append([
        new DOM('div', {
          innerText: new Date(item.timestamp).toLocaleString()
          }),
        ]),
      new DOM('button', {
        id: 'discard',
        className: 'icon notext'
        })
        .onclick(this, this.discard, [item.uid]),
      ])
  }
  deinit (){
    if(!this.inited)
      return
    this.$.wrapper.removeChilds()
    this.messages = []
    this.inited = false
  }
  // Main instance call
  discard (uid, ev){
    command.dispatch(this, 'discard', [uid])
    // Update actual locaStorage
    storage.set('notification', JSON.stringify(this.messages))
  }
  // Visual and instance object
  _discard (uid){
    this.nav.classList.remove('new')

    if (!this.inited)
      return

    this.messages.forEach((item, index) => {
      if (item.uid == uid) {
        this.messages.splice(index,1)
      }
    })
    // Must find child to work between tabs
    let child = DOM.get(`[data-uid=${uid}]`, this.$.wrapper.$)
    this.$.wrapper.$.removeChild(child)
    if (this.$.wrapper.$.childElementCount == 0)
      this._noNotification()
  }
}

/**
 * The Notify class is used to show notifications.
 */
class Notify {
  constructor () {
    let $ = this.$ = {}
    $.container = new DOM('div', {id: 'notify'})

    document.querySelector('body').append($.container.$)

    this.lastMessage = []
    this.bufferCount = 0
    this.timeOut
    this.timeOut2
  }
}
/**
 * Show a Notify in the user interface.
 * @param {string} message - The Notify message.
 */
Notify.prototype.send = function (message) {
  console.log (`Notify: ${message}`);
  let container = this.$.container.$

  if (this.lastMessage == message){
      this.bufferCount++
      container.innerHTML = `(${this.bufferCount}x) ${message}`
  } else {
      if (container.innerHTML == '')
        container.innerHTML = message
      else
        container.innerHTML = `${message}<hr>${container.innerHTML}`
      this.bufferCount = 0
  }

  container.classList.add('on')

  this.lastMessage = message

  window.clearTimeout(this.timeOut)
  this.timeOut = setTimeout( () => {
    container.classList.remove('on')
    this.bufferCount = 0
    this.lastMessage = ''
    this.timeOut2 = setTimeout(() => {
      container.innerHTML = ''},
      150)
  }, 4000);
}


export let notification = new Notification()
