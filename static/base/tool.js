
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
    return (+new Date).toString(36) + Math.random().toString(36).substr(2)
  }
}
