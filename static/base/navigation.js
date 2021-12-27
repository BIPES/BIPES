"use strict";

import {DOM, Animate} from './dom.js'
export {Navigation, interpretLink}

function handleLink (_navigation, _pos, push){
  let _pos0 = _pos == 2 ? 1 : 2
  let crt = _navigation.current
  let _name = this.constructor.name.toLowerCase()

  let turnOff = (elem, pos) => {
    page[elem].deinit()
	  page[elem].nav.classList.remove('on')
	  // just to avoid animation glitch
  if (pos == 1)
    	page[elem].section.classList.add(`_pos1`)
    if (pos == 2)
    	page[elem].section.classList.add(`_pos2`)
  	page[elem].section.classList.remove(`pos${pos}`)
	  Animate.off(page[elem].section)
  }

  let turnOn = (elem, pos) => {
    page[elem].init()
    page[elem].nav.classList.add('on')
	  Animate.on(page[elem].section)
	  page[elem].section.classList.remove("_pos1", "_pos2")
	  if (pos != 0)
  	  page[elem].section.classList.add(`pos${pos}`)
	  if (pos != 2 && push)
	    window.history.pushState({}, '',
	      `${window.location.origin}/ide?${elem}`)

	  handleResize()
  }

  // Interpreting link
  if (_pos == 0){
    turnOn(_name, 0)
    _navigation.current = [_name, '', '']
    return
  }

  // User switch opened section
  if (crt[_pos0] == _name) {
    page[crt[_pos]].section.classList.remove(`pos${_pos}`)
    page[crt[_pos]].section.classList.add(`pos${_pos0}`)
    page[crt[_pos0]].section.classList.remove(`pos${_pos0}`)
    page[crt[_pos0]].section.classList.add(`pos${_pos}`)
    _navigation.current = ['', crt[2], crt[1]]
    window.history.pushState({}, '',
      `${window.location.origin}/ide?${_navigation.current[1]}`);
 	  return
  }

  // User click in the same occupying the whole screen
  if (crt [0] == _name && crt [1] == '' && crt [2] == '')
    return

  // User left click in a new section while another is occuppying the whole screen
  if (_pos == 1 && crt[0] != ''){
    turnOff(crt[0], 0)
    crt[0] = _name
    turnOn(crt[0], 0)
    return
  }

  // Both have sections, user left click in one again -> occupy all screen
  if (_pos == 1){
    if (crt [_pos] == _name && crt[_pos0] != ''){
      turnOff(crt[_pos0], _pos0)
   	  page[crt[_pos]].section.classList.remove(`pos${_pos}`)
      _navigation.current = [_name, '', '']
      handleResize()
      return
    }
  }

  // Both have sections, user right click in one again -> deinit
  if (_pos == 2){
    if (crt [_pos] == _name && crt[_pos0] != ''){
      turnOff(crt[_pos], _pos)
   	  page[crt[_pos0]].section.classList.remove(`pos${_pos0}`)
      _navigation.current = [crt[_pos0], '', '']
      handleResize()
      return
    }
  }

  // User click in a new section to ocuppy
  if (crt[_pos] != _name && crt[0] == ''){
    if (crt[_pos] != '')
      turnOff(crt[_pos], _pos)
    turnOn(_name, _pos)
    _navigation.current[_pos] = _name
    handleResize()
    return
  }

  // User right click in a new section while another is occupying everthing
  if (_pos == 2 && crt[_pos] != _name && crt[0] != ''){
 	  page[crt[0]].section.classList.add(`pos1`)
    turnOn(_name, 2)
    _navigation.current = ['', crt[0], _name]
    handleResize()
    return
  }
}
function interpretLink (inited){
  let state = inited ? 1 : 0
	let	path = window.location.href.split('?')
  if (path [1] == undefined) {
    // default module
	  handleLink.apply(page.files,[navigation, state])
	  return
	}
  handleLink.apply(page[path[1]],[navigation, state])
  handleResize()
}

function handleResize (){
  navigation.portrait = window.innerHeight > window.innerWidth ? true : false

  navigation.current.forEach ((item) => {
    if (item != '' && page.hasOwnProperty(item) && typeof page[item].resize == 'function')
      setTimeout(() => {page[item].resize()}, 125)
  })
}

class Navigation {
	constructor (_page){
	  this.current = ['','','']
	  this.portrait = false

		let $ = this._dom = {}
		$.nav = DOM.get ('nav')
		$.menu = DOM.get ('#menu', $.nav)
		$.panels = DOM.getAll ('a', $.nav)
		$.menu.onclick = () => {
			DOM.switchState (this._dom.nav)
		};
		for (let module in _page) {
		  _page[module].nav = DOM.get(`a#${module}`, $.nav)
		  _page[module].section = DOM.get(`section#${module}`)
		  _page[module].nav.onclick = (ev) => {
		    ev.preventDefault()
		    handleLink.apply(_page[module], [this, 1, true])
		  }
		  _page[module].nav.addEventListener('contextmenu', (ev) => {
		    ev.preventDefault()
		    handleLink.apply(_page[module], [this, 2, true])
		  })
		}
		window.onpopstate = () => {interpretLink(true)}
		window.onresize = () => {handleResize()}
	}
}
