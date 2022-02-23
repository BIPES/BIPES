
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
   * Return param from url search parami, if unset, return the default.
   * @param {string} _param - Parameter to search in the array. 
   * @return Requested parameter.
   */
  static fromUrl (_param){
    let param = new URLSearchParams(document.location.search)
    return param.get(_param) == null ?
      this.urlDefaults(_param) : this.urlValidParams(_param, param.get(_param))
  }
  /**
   * Default url parameters values if not set
   * @param {string} _param - Parameter to return the default.
   * @return Default parameter.
   */
  static urlDefaults (_param){
    switch (_param) {
      case 'theme':
        return 'light'
    }
  }
  /**
   * Valid parameters, if a invalid is passed, will return the default.
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
   * @param {Object} obj - Depth one object with parameters.
   * @return {string} URL encoded query parameters.
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
   * @param {Object[]} as - Target array.
   * @param {array} bs - New values array.
   * @param {string} prop - Property to be used as unique key/uid.
   * @return {Object[]} List of unique objects.
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
   * @param {Object[]} as - Object array.
   * @param {string} prop - Property to be used as unique key/uid.
   * @param {bool} toNumber - Id property is stored as string and should be parsed.
   * @return {Object} Object with the smallest value.
   */
  static getMin (as, prop, toNumber){
    return (as.length && as.reduce(function(prev, curr){
      if (toNumber) 
        return parseFloat(prev[prop]) < parseFloat(curr[prop]) ? prev : curr; 
      else
        return prev[prop] < curr[prop] ? prev : curr; 
    })) || null;
  }
  /**
   * Get highest value from object array.
   * @param {Object[]} as - Object array.
   * @param {string} prop - Property to be used as unique key/uid.
   * @param {bool} toNumber - Id property is stored as string and should be parsed.
   * @return {Object} Object with the smallest value.
   */
  static getMax (as, prop, toNumber){
    return (as.length && as.reduce(function(prev, curr){
      if (toNumber)
        return parseFloat(prev[prop]) > parseFloat(curr[prop]) ? prev : curr;
      else
        return prev[prop] > curr[prop] ? prev : curr;
    })) || null;
  }
  /**
   * Return a pretty edited at string.
   * @param {string} value - Value.
   */
  static prettyEditedAt (value){
    return `${Msg['EditedAt']} ${new Date(value).toLocaleString()}`
  }
  /**
   * Return the first character in upper case.
   * @param {string} str - String.
   * @return {string} String with first character in upper case.
   */
  static firstUpper (str){
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  /**
   * Format a string.
   * @param {string[]} str - Array of strings, first is the on to format.
   * @return {string} Formated string.
   */
  static format (str){
    let args = Array.prototype.slice.call(str, 1)
    return str[0].replace(/{(\d+)}/g, (match, number) => {
      return typeof args[number] != 'undefined' ? args[number] : match
    })
  }
  /** Get some RGBA colors. */
  static colors (i) {
    let bgc = ['rgba(106,168,251,0.5)', 'rgba(123,73,173,0.5)', 'rgba(106,251,116,0.5)', 'rgba(251,106,106,0.5', 'rgba(56,95,70,0.5)', 'rgba(318,95,70,0.5)']
    let bdc = ['rgba(0,0,255,1.0)', 'rgba(155,0,155,1.0)', 'rgba(0,255,0,1.0)', 'rgba(255,0,0,1.0)', 'rgba(56,95,70,1.0)', 'rgba(318,95,70,1.0)']

    return [bdc[i], bgc[i]]
  }
}
/**
 * Handle API requests, return JSON on success and true on error.
 */
class API {
  /**
   * Do an API request, the sent object is implicitelly converted to a JSON.
   * @param {string} url - Path after the `/api`.
   * @return {Object} obj - Object sent with the request.
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
