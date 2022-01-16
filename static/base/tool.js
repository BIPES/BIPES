
"use strict";

export {Tool}

/**
 * Provides useful generic functions.
 */
class Tool {
 /**
  * Generate a unique identifier.
  */
  static UID (){
    return (+new Date).toString(36) + Math.random().toString(36).substring(2)
  }
 /**
  * Generate a small non-timed identifier.
  */
  static SID (){
    return (Math.random()).toString(36).substring(2,8)
  }
  /**
   * Return theme from url search param "theme"
   * if not set, return light
   */
  static fromUrl (_param){
    let param = new URLSearchParams(document.location.search)
    return param.get(_param) == null ?
      this.urlDefaults(_param) : this.urlValidParams(_param, param.get(_param))
  }
  /**
   * Default url parameters values if not set
   */
  static urlDefaults (_param){
    switch (_param) {
      case 'theme':
        return 'light'
    }
  }
  /**
   * Valid parameters, if a invalid is passed, will return the default
   */
  static urlValidParams (_param, value){
    switch (_param) {
      case 'theme':
        return ['dark', 'light'].includes(value) ? value : this.urlDefaults(_param)
    }
  }
}
