"use strict";
export {DOM, ContextMenu, Animate}

/** Make DOM element*/
class DOM {
  constructor (dom, tags){
    this.$
    if (typeof dom != 'string'){
      this.$ = dom
      return
    }
    let known_tags = [
      'innerText', 'className', 'id', 'title', 'innerText',
      'value', 'tabIndex', 'role', 'href', 'ariaPressed', 'preload', 'controls',
      'autoplay', 'src', 'placeholder', 'htmlFor', 'type', 'autocomplete',
      'name', 'accept', 'disabled', 'innerHTML'
    ]
    this.$ = document.createElement (dom);
    if (typeof tags == 'object') for (const tag in tags) {
      if (known_tags.includes(tag))
       this.$[tag] = tags[tag]
      else
        this.$.dataset[tag] = tags[tag]
    }
  }
  /**
   * Set DOM innerText.
   * @param {string} str - Text to apply.
   */
  set innerText(str){
    this.$.innerText = str
  }
  /**
   * Get DOM innerText.
   */
   get innerText(){
    return this.$.innerText
  }
  /** Get DOM offset height */
  get height (){
    return this.$.offsetHeight
  }
  /** Get DOM offset width */
  get width (){
    return this.$.offsetWidth
  }
  /** Get DOM id */
  get id (){
    return this.$.id
  }
  /** Set DOM id */
  set id (str){
    this.$.id= str
  }
  /** Get DOM value */
  get value (){
    return this.$.value
  }
  /** Set DOM value */
  set value (str){
    this.$.value = str
  }
  /** Get DOM src */
  get src (){
    return this.$.src
  }
  /** Set DOM src */
  set src (str){
    this.$.src = str
  }
  /**
   * Focus on DOM.
   */
  focus (){
    this.$.focus()
  }
  /** Get DOM classList object. */
  get classList(){
    return this.$.classList
  }
  /** Get DOM style object. */
  get style(){
    return this.$.style
  }
  /**
   * Append a ``onchange`` event.
   * @param {function} ev - Function to be executed on click.
   */
  onchange (self, ev, args){
    this.$.onchange = (e) => {
      if (typeof args == 'undefined')
        ev.apply(self, [e])
      else if (args.constructor == Array) {
        args.push(e)
        ev.apply(self, args)
      }
    }
  return this
  }
  /**
   * Append a ``onclick`` event.
   * @param {function} ev - Function to be executed on click.
   */
  onclick (self, ev, args){
    this.$.onclick = (e) => {
      if (typeof args == 'undefined')
        ev.apply(self, [e])
      else if (args.constructor == Array) {
        args.push(e)
        ev.apply(self, args)
      }
    }
  return this
  }
  /**
   * Append a ``mouseup`` and ``touchup`` event.
   * @param {function} ev - Function to be executed on up.
   */
  onup (self, ev, args){
    this.$.addEventListener('mouseup', (e) => {
      if (typeof args == 'undefined')
        ev.apply(self, [e])
      else if (args.constructor == Array) {
        args.push(e)
        ev.apply(self, args)
      }
    })
  return this
  }
  /**
   * Append a ``mousedown`` and ``touchdown`` event.
   * @param {function} ev - Function to be executed on down.
   */
  ondown (self, ev, args){
    this.$.addEventListener('mousedown', (e) => {
      if (typeof args == 'undefined')
        ev.apply(self, [e])
      else if (args.constructor == Array) {
        args.push(e)
        ev.apply(self, args)
      }
    })
  return this
  }
  /**
   * Append a ``mousemove`` and ``touchmove`` event.
   * @param {function} ev - Function to be executed on move.
   */
  onmove (self, ev, args){
    this.$.addEventListener('mousemove', (e) => {
      if (typeof args == 'undefined')
        ev.apply(self, [e])
      else if (args.constructor == Array) {
        args.push(e)
        ev.apply(self, args)
      }
    })
  return this
  }
  /**
   * Append a event listener.
   * @param {string} event - Event listener name.
   * @param {function} fun - Function to be executed on move.
   * @param {function} args - Arguments to be applied to the function.
   */
  onevent (event, self, fun, args){
    this.$.addEventListener(event, (e) => {
      if (typeof args == 'undefined')
        fun.apply(self, [e])
      else if (args.constructor == Array) {
        args.push(e)
        fun.apply(self, args)
      }
    })
  return this
  }
  /**
   * Appends others :js:func:`DOM`.
   * @param {Object[]} DOMS - Array of :js:func:`DOM` or/and direct DOM Nodes.
   */
  append (DOMS){
    if (DOMS.constructor != Array)
      DOMS = [DOMS]

    DOMS.forEach ((item) => {
      if (/HTML(.*)Element/.test(item.constructor.name))
        this.$.appendChild(item)
      else if (typeof item == 'object' && (/HTML(.*)Element/.test(item.$)))
        this.$.appendChild(item.$)
    })

    return this
  }
  /**
   * Delete object.
   */
  delete (){
    this.$.remove()
    delete this
  }
  /**
   * Remove childs from :js:func:`DOM` object.
   */
  removeChilds (){
    let child = this.$.lastElementChild
    while (child) {
      this.$.removeChild(child)
      child = this.$.lastElementChild
    }
    return this
  }
  /**
   * Get DOM Node element.
   * @param {string} a - Target object query selector.
   * @param {Object} b - Optional parent DOM.
   */
  static get (a, b){
    b = b instanceof DOM ? b.$ : b
    return (typeof b == 'undefined') ? document.querySelector (a) : b.querySelector(a)
  }
  /**
   * Get all DOM Node elements.
   * @param {string} a - Target object query selector.
   * @param {Object} b - Parent DOM.
   */
  static getAll(a, b){
    b = b instanceof DOM ? b.$ : b
    return (typeof b == 'object') ? b.querySelectorAll(a) : get(b).querySelectorAll(a)
  }
  /**
   * Include or remove a class to a DOM.
   * @param {Object} b - Target DOM.
   * @param {string} _class - Optional class, defaults to `on`.
   */
  static switchState (b, _class){
    b = b instanceof DOM ? b.$ : b
    let cn = _class != undefined ? _class : `on`
    if (b.classList.contains(cn))
      b.classList.remove(cn)
    else
      b.classList.add(cn)
  }
  /**
  * Generate a unique identifier.
  */
  static UID (){
    return (+new Date).toString(36) + Math.random().toString(36).substr(2)
  }
  /**
   * Prototype a DOM composed by details, sumamary and a h2 title with optional
   * onclick event.
   * @param {Object} str - id, title and onclick function of the DOM element.
   * @param {string} str.id - Id of the DOM element.
   * @param {string} str.title - Title of the DOM element.
   * @param {Object} str.onclick - Onclick function of the DOM element.
   */
  static prototypeDetails (str){
    let summary = new DOM('summary', {innerText:str.innerText})
    let details = new DOM('details', {id:str.id, name:str.id})
      .append(summary)

    if (str.onevent != undefined) {
      str.onevent.forEach(event => {
        event.args.push(details.$)
        summary.onevent(
          event.event,
          event.self,
          event.fun,
          event.args
        )
      })
    }
    return details
  }
  /**
   * Prototype a DOM composed by input(file type) and label.
   * @param {Object} str - id and className of the DOM element.
   * @param {string} str.id - Id of the DOM element.
   * @param {string} str.className - ClassName of the DOM element.
   * @param {string} str.innerText - Inner text of the DOM element.
   */
  static prototypeInputFile (str){
    return new DOM('label', {
      htmlFor:`${str.id}_input`,
      id:str.id,
      className:str.className,
      innerText:str.innerText
      }).append(
        new DOM('input', {id:`${str.id}_input`, type:'file'})
      )
  }
  /**
   * Prototype a DOM that allows data to be downloded on its creation.
   * @param {string} filename - name of the file.
   * @param {string} file - file content.
   */
  static prototypeDownload (filename, file){
    let data,
        reg = /.*\.(py|xml|csv|json|svg|png)$/
    if (!reg.test(filename))
      return

    let format = filename.match(reg)[1]
    filename = filename
      .replaceAll('/','-')
      .replaceAll(' ','_')
      .toLowerCase()

    switch (format) {
      case 'xml':
        data = "data:x-application/xml;charset=utf-8," + encodeURIComponent(file);
        break
      case 'py':
        data = "data:text/python;charset=utf-8," + encodeURIComponent(file);
        break
      case 'json':
        data = "data:text/json;charset=utf-8," + encodeURIComponent(file);
        break
      case 'csv':
        data = "data:text/csv;charset=utf-8," + encodeURIComponent(file);
        break
      case 'svg':
        data = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(file);
        break
      case 'png':
        data = file; // Expect already in blob
        break
    }
    let element = document.createElement('a')
    element.setAttribute('href', data)
    element.setAttribute('download', filename)
    element.style.display = 'none'

    document.body.appendChild(element)
    element.click ()
    document.body.removeChild(element)
  }
  /**
   * Set a option of a select list by its innerText.
   * @param {Object} dom - Node of the select list.
   * @param {string} value - Inner text of the target option.
   */
  static setSelected (dom, value){
    for (var i = 0; i < dom.$.options.length; i++){
      if (dom.$.options[i].text == value){
        dom.$.options[i].selected = true
        return
      }
    }
  }
  /**
   * Updates parameter of children of a DOM.
   * Lazy because doesn't care is successful or not.
   * Useful for generic lists, like in searches.
   * @param {Object} dom - Container of the list.
   * @param {string} uid - Item to search for.
   * @param {Object} props - Properties to update, where the key is also the DOM id.
   * @param {string} param - Parameter to update.
   */
  static lazyUpdate (dom, uid, props, param){
    param = param == undefined ? 'innerText' : param
    let element = DOM.get(`[data-uid='${uid}']`, dom)
    for (const key in props){
      DOM.get(`#${key}`, element)[param] = props[key]
    }
  }
}

/** Creates basic CSS3 animations in the DOM Node element by switching CSS classes*/
class Animate {
  constructor (){}
  /**
  * Add CSS classes with delay to a DOM Node
  * @param {Object} dom - DOM Node to add `ani` and `on` classes with 250ms delay.
  * @param {function} callback - Function to call after the animation finished.
  */
  static off (dom, callback, duration){
    dom.classList.remove('on')
    if (!duration)
      duration = 250
    setTimeout(()=>{
      dom.classList.remove('ani', 'on')
      if (callback != undefined)
        callback ()
      }, duration)
  }
  /**
  * Remove CSS classes with delay to a DOM Node
  * @param {Object} dom - DOM node to remove `ani` and `on` classes with 250ms delay.
  */
  static on (dom, duration){
    dom.classList.add('ani')
    if (!duration)
      duration = 250
    setTimeout(()=>{dom.classList.add('ani', 'on')}, duration)
  }
}


/* Create a context menu */
class ContextMenu {
  constructor (dom, ref){
    this.ref = ref

    this.mdTimestamp  // A timestamp to differentiate click and selection drag.

    let $ = this.$ = {}
    $.contextMenu = dom
    $.contextMenu.$.id = 'contextMenu'
    $.contextMenu.$.classList.add('popup')

    $.contextMenu.onclick(this, this.close)
      .onevent('contextmenu', this, this.close)
      .onevent('mousedown', this, (ev) => {this.mdTimestamp = +new Date()})

    $.wrapper = new DOM('div')
    $.contextMenu.append($.wrapper)
  }
  /**
  * Close the context menu.
  * @param {Object} ev - On click event, close when target is undefined or the
  *                      blank grey area.
  */
  close (ev) {
    if (ev != undefined)
      ev.preventDefault()
    if (ev == undefined || ev.target.id == 'contextMenu'){
      if (+new Date - this.mdTimestamp < 250 || ev == undefined){
        this.$.wrapper.$.style.height = '0px'
        Animate.off(this.$.contextMenu.$, undefined, 125)
        setTimeout(() => {this.$.wrapper.removeChilds()}, 125)
      }
    }
  }
  /**
  * Render the context menu and open it.
  * @param {Object[]} actions - Array of actions to be rendered.
  * @param {string} actions[].id - Id of the action.
  * @param {string} actions[].innerText - InnerText of the action.
  * @param {string} actions[].fun - On click callback function.
  * @param {string} actions[].args - Arguments applied to the callback function.
  */
  open (actions, ev){
    let $ = this.$
    let y = window.innerHeight < (ev.y + (actions.length*2)*16) ?
            ev.y - (1 + (actions.length*2-1))*16 : ev.y-1*16
    let x = window.innerWidth < (ev.x + 10*16) ?
            ev.x - 11*16: ev.x - 1*16
    $.wrapper.$.style.margin = `${y}px auto auto ${x}px`
    setTimeout(() =>{
      $.wrapper.$.style.height = `${(actions.length*2 + .25)*16}px`
      },125)

    $.wrapper.removeChilds()
    let doms = []
    actions.forEach (action => {
      switch (action.id) {
      case 'upload':
        let dom = new DOM('input', {type:'file', accept:action.accept})
        action.args.push(dom.$)
        dom.onevent('change', this.ref, action.fun, action.args)
        doms.push(new DOM('button', {
            className:'icon text',
            id:action.id,
            innerText:action.innerText,
          }).onclick(this.ref, () => {
            dom.$.click()
          }))
        break
      default:
        doms.push(new DOM('button', {
            className:'icon text',
            id:action.id,
            innerText:action.innerText,
          }).onclick(this.ref, action.fun, action.args)
        )
      }
    })
    $.wrapper.append(doms)
    setTimeout(() => {doms[0].$.focus()}, 125)
    Animate.on($.contextMenu.$, 125)
  }
  /**
  * Sets the context menu to on input mode, to receive string data.
  * @param {Object} str - Information about the input state.
  * @param {string} str.title - Input's informative title.
  * @param {string} str.placeholder - Input's placeholder.
  * @param {string} str.value - A initial value for the input.
  * @param {Object} fun - Callback function to when input changes.
  */
  oninput (str, fun){
    let $ = this.$
    $.wrapper.removeChilds()
    $.wrapper.$.style.height = `${4.75*16}px`

    let input = new DOM('input', {
        placeholder:str.placeholder,
        value:str.value == undefined ? '' : str.value
      })
    let form = new DOM('form')
      .onevent('submit', this, fun, [input.$])
      .append(input)

    $.wrapper.append([
      new DOM('h3', {innerText: str.title}),
      form
    ])
    input.$.focus()
  }
}


