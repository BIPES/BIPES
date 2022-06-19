"use strict";

/**
 * Store data in the localStorage.
 * It is intended to also support synching to a server in the future.
 */
class StorageBroker {
  constructor (){}
  keys (reg){
    let values = []
    let keys = Object.keys (localStorage)
        .filter((key) => {
          return reg.test(key)
        });
    keys.forEach((key) => {
      values.push(key.match(reg) [1])
    })
    return values
  }
  fetch (reg, parse){
    let match
    if (typeof reg == "RegExp")
      match = this.fetchAll(reg)[0]
    else
      match = localStorage[reg]
    if (match == undefined || match == '')
      return false
    else
      return parse ? JSON.parse(match) : match
  }
  has (key){
    if (!localStorage.hasOwnProperty(key))
      return false
    else if(localStorage[key] == '') {
      this.remove(key)
      return false
    } else
      return true
  }
  set (key, value, stringify){
    if (value == undefined)
      value = '[]'
    localStorage.setItem(key, stringify ? JSON.stringify(value) : value)
    return value
  }
  remove (key){
    localStorage.removeItem(key)
  }
}

export let storage = new StorageBroker()
