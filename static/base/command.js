"use strict";

import {Tool} from './tool.js'
export {CommandBroker}

/**
 * Send commands across tabs and windows by listening to localStorage events.
 * Each command has a key, a rule, function and callback associated.
 */
class CommandBroker {
   /**
   * Create the LocalCommand object with a root object. The root object should
   * be tightly structured and easily navigable to properley dispatch commands.
   * @param {Object} root - Root object, where all callbacks are child from.
   */
  constructor (root) {
    this.root = root
    this.map = {}
    this.event = window.addEventListener("storage", (ev) => {this.mux(ev)})

    this.tabUID = Tool.UID()
  }
  /**
   * Add a LocalCommand, which callback when the event is dispatched.
   * The callback of each item is associated to it's key.
   * The callback should not change the localStorage,
   * only handle local variables and DOM Nodes.
   * @param {Object} self - Object that the callbacks belong to.
   * @param {Object} callbacks - Object composed of callback functions
   * @param {Boolenan} skipMain - Set "true" to skip the callback on main tab
   */
  add (self, callbacks, skipMain){
   for (let key in callbacks){
      let _key = `${self.constructor.name.toLowerCase()}_${key}`
      this.map[_key] = {}
      this.map[_key].fun = () => {
        let args = JSON.parse(localStorage[_key])

        let self = this.root
        if (args[0] == 'channel') {
          self = window.channel
        } else {
          args[0].forEach((item) => {
            self = self[item]
          })
        }

        args.shift()
        this.map[_key].callback.apply(self, args)
        localStorage.removeItem(_key)
      }
      this.map[_key].callback = callbacks[key]
      this.map[_key].skipMain = skipMain == true ? true : false
    }
  }
   /**
   * Remove a LocalCommand.
   * @param {Object} self - Object that the callbacks belong to.
   * @param {(string|string[])} keys - Key or keys to remove.
   */
  remove (self, keys){
    if (keys.constructor.name != 'Array')
      keys = [keys]
    keys.forEach((key) => {
      let _key = `${self.constructor.name}_${key}`
      window.removeEventListener ("storage", this.map[_key].fun)
      delete this.map[_key]
    })
  }
  /**
   * Dispatch a LocalCommand.
   * @param {Object} self - Object with the callback.
   * @param {key} - Key or keys to remove.
   * @param {Object[]} - Arguments to apply to the callback.
   */
  dispatch (self, key, args){
    if (self.constructor.name != 'Array')
      self = [self]

    // Call function on main window
    let _key = `${self[self.length-1].constructor.name.toLowerCase()}_${key}`,
        _self = []

    if (this.map[_key].skipMain == false)
      this.map[_key].callback.apply(self[self.length-1], args)

    // Include this parent to child key
    self.forEach((item) => {
      _self.push(item.constructor.name == 'String' ?
                 item : item.constructor.name.toLowerCase())
    })
    args.unshift(_self)

    // Dispatch command
    localStorage.removeItem(_key)
    localStorage.setItem(_key, JSON.stringify(args))
  }
  mux (ev){
    if (!this.map.hasOwnProperty(ev.key) || localStorage[ev.key] == undefined)
      return

    this.map[ev.key].fun()
  }
}
