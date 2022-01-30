
"use strict";

export {Tool, API}

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
  
  /**
   * Encode a query data to url from a Object, use this instead of SearchParameters
   * since that last converts spaces into plus sign '+', plus signs into escaped, etc.
   * @param{Object} obj - Depth one object with parameters
   */
  static encodeQueryData (obj){
    const ret = []
    for (let o in obj)
      ret.push(`${encodeURIComponent(o)}=${encodeUDIComponent(obj[o])}`)
    return ret.join('&')
  }
  /**
   * Push unique keys from one array to another and return a list of these filters 
   * values.
   * @param{array} as - Target array.
   * @param{array} bs - New values array.
   * @param{string} prop - Property to be used as unique key/uid.
   */
  static pushUnique (as, bs, prop){
    let c = []
  
    bs.forEach(b => {
      if (as.some(a => a[prop] == b[prop])) ;
      else {
        as.push(b)  
        c.push(b)
      }
    })
    return c
  }
  /**
   * Get smallest value from object array.
   * @param{array} as - Object array.
   * @param{string} prop - Property to be used as unique key/uid.
   * @param{bool} toNumber - Id property is stored as string and should be parsed.
   */
  static getMin(as, prop, toNumber){
    return (as.length && as.reduce(function(prev, curr){
      if (toNumber) 
        return parseFloat(prev[prop]) < parseFloat(curr[prop]) ? prev : curr; 
      else
        return prev[prop] < curr[prop] ? prev : curr; 
    })) || null;
  }
  /**
   * Return a pretty edited at string.
   * @param{string} value - Value.
   */
  static prettyEditedAt(value){
    return `Edited at ${new Date(value).toLocaleString()}`
  }
}
/**
 * Handle API requests, return JSON on success and true on error.
 */
class API {
 /**
  * Do an API request.
  */
  static async do (url, obj){
    const response = await fetch(`${window.location.origin}/api/${url}`, {
      method:'Post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(obj)
    })
    
    if (!response.ok)
      throw new Error(response.status)

    return await response.json ()
  }
}
