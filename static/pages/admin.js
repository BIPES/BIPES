"use strict";

import {DOM, Animate} from '../base/dom.js'
export {Admin}

class Admin {
	constructor (){
	  let $ = this._dom = {}
	  $.h2 = new DOM('h2', {innerText:"Settings"})
	  $.wrapper = new DOM(
	    'span', {className: "admin-settings",
	    innerText: "Not implemented"
	    })
	  $.container = new DOM('div')
	    .append([$.h2, $.wrapper])

		DOM.get('section#admin').append($.container._dom)

	}
	init(){}
	deinit(){}
}
