"use strict";

export {DOM, ContextMenu, Animate}

/** Make DOM Node element*/
class DOM {
  constructor (dom, tags){
    this._dom
    if (typeof dom != 'string'){
      this._dom = dom
      return
    }
    switch (dom) {
	  case 'button':
	  case 'h2':
	  case 'h3':
    case 'span':
    case 'div':
    case 'select':
    case 'option':
    case 'summary':
    case 'details':
    case '':
        this._dom = document.createElement (dom);
        if (typeof tags == 'object') for (const tag in tags) {
          if (['innerText', 'className', 'id', 'title', 'innerText', 'value', 'tabIndex', 'role', 'ariaPressed'].includes(tag))
           this._dom[tag] = tags[tag]
          else
            this._dom.dataset[tag] = tags[tag]
        }
        break
	  case 'video':
	  case 'img':
        this._dom = document.createElement (dom);
        if (typeof tags == 'object') for (const tag in tags) {
          if (['preload', 'controls', 'autoplay'].includes(tag))
           this._dom[tag] = tags[tag]
        }
        break
    case 'form':
	  case 'input':
	  case 'label':
	  case 'textarea':
        this._dom = document.createElement (dom);
        if (typeof tags == 'object') for (const tag in tags) {
          if (['value', 'className', 'id', 'placeholder', 'htmlFor', 'type', 'autocomplete', 'innerText', 'name', 'accept'].includes(tag))
           this._dom[tag] = tags[tag]
        }
        break
    }
  }
  /**
  * Append a ``onchange`` event.
  * @param {function} ev - Function to be executed on click.
  */
  onchange (self, ev, args){
    this._dom.onchange = (e) => {
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
    this._dom.onclick = (e) => {
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
    this._dom.addEventListener('mouseup', (e) => {
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
    this._dom.addEventListener('mousedown', (e) => {
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
    this._dom.addEventListener('mousemove', (e) => {
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
  * @param {function} ev - Function to be executed on move.
  */
  onevent (event, self, ev, args){
    this._dom.addEventListener(event, (e) => {
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
  * Appends others :js:func:`DOM`.
  * @param {Object[]} DOMS - Array of :js:func:`DOM` or/and direct DOM Nodes.
  */
  append (DOMS){
	  if (DOMS.constructor != Array)
		  DOMS = [DOMS]

	  DOMS.forEach ((item) => {
	    if (/HTML(.*)Element/.test(item.constructor.name))
		  this._dom.appendChild(item)
	    else if (item.constructor.name == 'DOM' && (/HTML(.*)Element/.test(item._dom)))
		  this._dom.appendChild(item._dom)
	  })

	  return this
  }
  /**
  * Remove childs from :js:func:`DOM` object.
  */
  removeChilds () {
    let child = this._dom.lastElementChild
    while (child) {
      this._dom.removeChild(child)
      child = this._dom.lastElementChild
    }
    return this
  }
  /**
  * Get DOM Node element.
  */
  static get (a, b){
    return (typeof b == 'undefined') ? document.querySelector (a) : b.querySelector(a)
  }
  /**
  * Get all DOM Node elements.
  */
  static getAll(a, b){
    return (typeof b == 'object') ? b.querySelectorAll(a) : get(b).querySelectorAll(a)
  }
  /**
  * Include or remove a class to a DOM Node.
  */
  static switchState (dom, _class){
    let cn = _class != undefined ? _class : `on`
    if (dom.classList.contains(cn))
      dom.classList.remove(cn)
    else
      dom.classList.add(cn)
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
  * @param {object} str[id, title, onclick] - id, title and onclick of the DOM element.
  */
  static prototypeDetails (str){
    let summary = new DOM('summary', {innerText:str.innerText})
    let details = new DOM('details', {id:str.id, name:str.id})
      .append(summary)

    if (str.onevent != undefined) {
      str.onevent.forEach(event => {
        event.args.push(details._dom)
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
  * @param {object} str[id, className] - id and class of the DOM element.
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

  static prototypeDownload (filename, file){
    let data,
        reg = /.*\.(py|xml|csv)$/
    if (!reg.test(filename))
      return

    let format = filename.match(reg)[1]
    filename = filename.substring(1).replaceAll('/','-')

    switch (format) {
      case 'xml':
        data = "data:x-application/xml;charset=utf-8," + encodeURIComponent(file);
        break
      case 'py':
        data = "data:text/python;charset=utf-8," + encodeURIComponent(file);
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

    let $ = this._dom = {}
    $.contextMenu = dom
    $.contextMenu._dom.id = 'contextMenu'
    $.contextMenu._dom.classList.add('popup')

    $.contextMenu.onclick(this, this.close)
      .onevent('contextmenu', this, this.close)

    $.wrapper = new DOM('div')
    $.contextMenu.append($.wrapper)
  }
  close (ev) {
    if (ev != undefined)
      ev.preventDefault()
    if (ev == undefined || ev.target.id == 'contextMenu') {
      this._dom.wrapper._dom.style.height = '0px'
      Animate.off(this._dom.contextMenu._dom, undefined, 125)
      setTimeout(() => {this._dom.wrapper.removeChilds()}, 125)
    }
  }
  open (actions, ev){
    let $ = this._dom
    let y = window.innerHeight < (ev.y + (actions.length*2)*16) ?
            ev.y-(1+actions.length*2)*16 : ev.y-1*16
    $.wrapper._dom.style.margin = `${y}px auto auto ${ev.x-1*16}px`
    setTimeout(() =>{
      $.wrapper._dom.style.height = `${(actions.length*2 + .25)*16}px`
      },125)

    $.wrapper.removeChilds()
    let doms = []
    actions.forEach (action => {
      switch (action.id) {
      case 'upload':
        let dom = new DOM('input', {type:'file', accept:action.accept})
        action.args.push(dom._dom)
        dom.onevent('change', this.ref, action.fun, action.args)
        doms.push(new DOM('button', {
            className:'icon text',
            id:action.id,
            innerText:action.innerText,
          }).onclick(this.ref, () => {
            dom._dom.click()
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
    setTimeout(() => {doms[0]._dom.focus()}, 125)
    Animate.on($.contextMenu._dom, 125)
  }
  oninput (str, callback){
    let $ = this._dom
    $.wrapper.removeChilds()
    $.wrapper._dom.style.height = `${4.75*16}px`

    let input = new DOM('input', {placeholder:str.placeholder})
    let form = new DOM('form')
      .onevent('submit', this, callback, [input._dom])
      .append(input)

    $.wrapper.append([
      new DOM('h3', {innerText: str.title}),
      form
    ])
    input._dom.focus()
  }
}
