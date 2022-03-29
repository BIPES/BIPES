"use strict";

import {DOM, Animate} from './dom.js'
import {Tool} from './tool.js'

export {Pipes}

/**
  * Setup the pipes for pages, if don't exist, sink.
  * This is useful to make connections between pages that not necessarly are
  * available in all bipes (modularity).
  * @param {Object} - Structured objects, in the form
  *                   {page:{function:()=>{page.function(args)},...},...}
  *
  */
function Pipes (obj){
  let pipes = {}
  for (let page in obj){
    for (let fun in obj[page]){
      if (bipes.page.hasOwnProperty(page))
        pipes[`${page}_${fun}`] = obj[page][fun]
      else
        pipes[`${page}_${fun}`] = () => {}
    }
  }
  return pipes
}

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
    if (pos != 2 && push)
      if (!_navigation.isLocal) {
     let _url = new URL(location.href)
      _url.searchParams.set('page', elem)
      history.pushState({}, '', _url)
      }

    handleResize()

    document.title = `${Msg['Page'+Tool.firstUpper(elem)]} - BIPES`
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
    if (!_navigation.isLocal) {
      let _url = new URL(location.href)
      _url.searchParams.set('page', _navigation.current[1])
      history.pushState({}, '', _url)
    }
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
  let path = document.URL.split('#').length > 1 ? document.URL.split('#')[1] : null

  let params = new URLSearchParams(window.location.search)


  if (params.get('page') == null) {
    // default module
    handleLink.apply(root.blocks,[navigation, state, root, 'blocks'])
    return
  }
  handleLink.apply(root[params.get('page')],[navigation, state, root, params.get('page')])
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
/* Build the events on the navigation bar. */
class Navigation {
  constructor (){
    this.current = ['','','']
    this.portrait = false
    this.isLocal = 'file:' == window.location.protocol

    let $ = this.$ = {}
    $.nav = DOM.get('nav')
    $.menu = DOM.get('#menu', $.nav)
    $.panels = DOM.get('#panels', $.nav)
    $.menu.onclick = () => {
      DOM.switchState (this.$.nav)
    $.langugeDropdown
    }

    // Set theme from url
    document.body.className = Tool.fromUrl('theme')
  }
  /**
   * Init pages and add language switcher.
   * @{Object} languages - Languages to show in the switcher
   */
  init (languages){
    for (let module in bipes.page) {
      let a = DOM.get(`a#${module}`, this.$.panels)
      a.innerText = Msg[`Page${Tool.firstUpper(module)}`]
      a.title = Msg[`Page${Tool.firstUpper(module)}`]
      a.onauxclick = (ev) => {
        ev.preventDefault()
        // Return on right click
        if (ev.which !== 2)
          return

        let _url = new URL(location.href)
        _url.searchParams.set('page', ev.target.id)
        open(_url, '_blank').focus()
        
      }
      a.onclick = (ev) => {
        ev.preventDefault()
        handleLink.apply(window.bipes.page[module], [this, 1, bipes.page, module, true])
      }
      a.addEventListener('contextmenu', (ev) => {
        ev.preventDefault()
        handleLink.apply(window.bipes.page[module], [this, 2, bipes.page, module, true])
      })
      bipes.page[module].section = DOM.get(`section#${module}`)
      bipes.page[module].nav = a
    }
    onpopstate = () => {interpretLink(true, bipes.page)}
    onresize = () => {handleResize()}

    interpretLink(false, bipes.page)

    // Init pipes
    bipes.channel.connectPipes()
    for (let module in bipes.page) {
      if (typeof bipes.page[module].connectPipes === "function") {
        bipes.page[module].connectPipes()
      }
    }

    // Add Language dropdown button to status
    let _languages = []
    for (const key in languages){
      _languages.push(
        new DOM('option', {innerText:languages[key], value:key})
      )
    }
    this.$.languageDropdown = new DOM('select', {
      title:Msg['Language']
    })
    .append(_languages)
    .onevent('change', this, () => {
      let _url = new URL(location.href)
      _url.pathname = `${_url.pathname.match('^(.*)/ide')[1]}/ide-${this.$.languageDropdown.value}`
      location.href = `${_url}`
    })
    new DOM(DOM.get('div#status-bar #extra')).append([
     new DOM('span', {
      innerText:Msg['Language'],
      className:'status-icon',
      id:'language'
      }).append(this.$.languageDropdown)
    ])
    // Select current language
    this.$.languageDropdown.$.value = document.documentElement.lang

    // Add dark/light theme swittcher to status
    new DOM(DOM.get('div#status-bar #extra')).append([
      new DOM('button', {
        className: new URL(location.href).searchParams.get('theme') === 'dark' ? 'status-icon on' : 'status-icon',
        id:'theme',
        title:Msg['ChangeTheme']
      }).onclick(this, () => {
        let _url = new URL(location.href)
        _url.searchParams.set('theme', _url.searchParams.get('theme') === 'dark' ? 'light' : 'dark')
        location.href = _url
      })
    ])
  }
}

export let navigation = new Navigation()
