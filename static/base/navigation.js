"use strict";

import {DOM, Animate} from './dom.js'

function handleLink (_navigation, _pos, root, _name, push){
  let _pos0 = _pos == 2 ? 1 : 2
  let crt = _navigation.current

  let turnOff = (elem, pos) => {
    root[elem].deinit()
    root[elem].nav.classList.remove('on')
    // just to avoid animation glitch
  if (pos == 1)
      root[elem].section.classList.add(`_pos1`)
    if (pos == 2)
      root[elem].section.classList.add(`_pos2`)
    root[elem].section.classList.remove(`pos${pos}`)
    Animate.off(root[elem].section)
  }

  let turnOn = (elem, pos) => {
    root[elem].init()
    root[elem].nav.classList.add('on')
    Animate.on(root[elem].section)
    root[elem].section.classList.remove("_pos1", "_pos2")
    if (pos != 0)
      root[elem].section.classList.add(`pos${pos}`)
    /*if (pos != 2 && push)
      window.history.pushState({}, '',
        `${window.location.origin}/ide?${elem}`)*/

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
    root[crt[_pos]].section.classList.remove(`pos${_pos}`)
    root[crt[_pos]].section.classList.add(`pos${_pos0}`)
    root[crt[_pos0]].section.classList.remove(`pos${_pos0}`)
    root[crt[_pos0]].section.classList.add(`pos${_pos}`)
    _navigation.current = ['', crt[2], crt[1]]
    /*window.history.pushState({}, '',
      `${window.location.origin}/ide?${_navigation.current[1]}`);*/
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
       root[crt[_pos]].section.classList.remove(`pos${_pos}`)
      _navigation.current = [_name, '', '']
      handleResize()
      return
    }
  }

  // Both have sections, user right click in one again -> deinit
  if (_pos == 2){
    if (crt [_pos] == _name && crt[_pos0] != ''){
      turnOff(crt[_pos], _pos)
       root[crt[_pos0]].section.classList.remove(`pos${_pos0}`)
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
     root[crt[0]].section.classList.add(`pos1`)
    turnOn(_name, 2)
    _navigation.current = ['', crt[0], _name]
    handleResize()
    return
  }
}
function interpretLink (inited, root){
  let state = inited ? 1 : 0
  let path = window.location.href.split('?')
  if (path [1] == undefined) {
    // default module
    handleLink.apply(root.files,[navigation, state, root, 'files'])
    return
  }
  handleLink.apply(root[path[1]],[navigation, state, root, path[1]])
  handleResize()
}

function handleResize (){
  navigation.portrait = window.innerHeight > window.innerWidth ? true : false

  navigation.current.forEach ((item) => {
    if (item != '' && window.bipes.page.hasOwnProperty(item) &&
        typeof window.bipes.page[item].resize == 'function')
      setTimeout(() => {window.bipes.page[item].resize()}, 125)
  })
}

class Navigation {
  constructor (){
    this.current = ['','','']
    this.portrait = false
    this.isLocal = (/^file:\/\//).test(window.location.href)

    let $ = this._dom = {}
    $.nav = DOM.get ('nav')
    $.menu = DOM.get ('#menu', $.nav)
    $.panels = DOM.getAll ('a', $.nav)
    $.menu.onclick = () => {
      DOM.switchState (this._dom.nav)
    }
  }
  init (){
    for (let module in window.bipes.page) {
      window.bipes.page[module].nav = DOM.get(`a#${module}`, this._dom.nav)
      window.bipes.page[module].section = DOM.get(`section#${module}`)
      window.bipes.page[module].nav.onclick = (ev) => {
        ev.preventDefault()
        handleLink.apply(window.bipes.page[module], [this, 1, window.bipes.page, module, true])
      }
      window.bipes.page[module].nav.addEventListener('contextmenu', (ev) => {
        ev.preventDefault()
        handleLink.apply(window.bipes.page[module], [this, 2, window.bipes.page, module, true])
      })
    }
    window.onpopstate = () => {interpretLink(true, window.bipes.page)}
    window.onresize = () => {handleResize()}

    interpretLink(false, window.bipes.page)
  }
}

export let navigation = new Navigation()
