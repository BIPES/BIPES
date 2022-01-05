"use strict";

import {DOM, Animate} from '../base/dom.js'
export {Notification}

class Notification {
	constructor (){
	  this.notify = new Notify()
	  this.messages = []

	  this.inited = false

	  let $ = this._dom = {}
	  $.h2 = new DOM('h2', {innerText:'Notifications'})
	  $.wrapper = new DOM('span', {className: 'cards'})
	  $.container = new DOM('div', {className:'container'})
	    .append([$.h2, $.wrapper])

		$.section = new DOM(DOM.get('section#notification'))
		  .append($.container._dom)
		$.section._dom.classList.add('default')

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
      this._dom.wrapper.removeChilds()
    }
    this._dom.wrapper._dom.insertBefore(
      this._domCard(this.messages[this.messages.length - 1])._dom,
      this._dom.wrapper._dom.firstChild
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
        msgs.unshift(this._domCard(item))
      })
      this._dom.wrapper.append(msgs)
    } else {
      storage.set('notification')
      this._noNotification()
    }
    this.inited = true
	}
	_noNotification (){
    this._dom.wrapper.append(
      new DOM('span', {innerText:'There is no notifications.'})
    )
	}
	// Creates a DOM notificaton card
	_domCard (item){
	  return new DOM('span', {uid: item.uid}).append([
      new DOM('span').append([
        new DOM('h3', {
          innerText: item.message
          }),
        new DOM('div', {
          innerText: new Date(item.timestamp)
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
	  this._dom.wrapper.removeChilds()
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
    let child = DOM.get(`[data-uid=${uid}]`, this._dom.wrapper._dom)
    this._dom.wrapper._dom.removeChild(child)
    if (this._dom.wrapper._dom.childElementCount == 0)
      this._noNotification()
  }
}

/**
 * The Notify class is used to show notifications.
 */
class Notify {
  constructor () {
    let $ = this._dom = {}
    $.container = new DOM('div', {id: 'notify'})

    document.querySelector('body').append($.container._dom)

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
  let container = this._dom.container._dom

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
