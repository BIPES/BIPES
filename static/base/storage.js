
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
  fetch (reg){
    let match
    if (typeof reg == "RegExp")
      match = this.fetchAll(reg)[0]
    else
      match = localStorage[reg]
    if (match == undefined || match == '')
      return false
    else
      return match
  }
  has (str){
    if (!localStorage.hasOwnProperty(str))
      return false
    else if(localStorage[str] == '') {
      this.remove(str)
      return false
    } else
      return true
  }
  set (key, value){
    if (value == undefined)
      value = '[]'
    localStorage.setItem(key, value)
  }
  remove (key){
    localStorage.removeItem(key)
  }
}

export let storage = new StorageBroker()
