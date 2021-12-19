"use strict";

export {DOM, Animate}

/** Make DOM Node element*/
class DOM {
  constructor (dom, tags){
    this._dom ;
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
          if (['innerText', 'className', 'id', 'title', 'innerText', 'value'].includes(tag))
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
	  case 'input':
	  case 'label':
	  case 'textarea':
        this._dom = document.createElement (dom);
        if (typeof tags == 'object') for (const tag in tags) {
          if (['value', 'className', 'id', 'placeholder', 'htmlFor', 'type', 'autocomplete'].includes(tag))
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
    let details = new DOM('details', {id:str.id})
      .append(summary)

    if (str.onclick != undefined) {
      str.onclick.args.push(details._dom)
      summary.onclick(
        str.onclick.self,
        str.onclick.fun,
        str.onclick.args
      )
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
      className:str.className})
      .append(
        new DOM('input', {id:`${str.id}_input`, type:'file'})
      )
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
  static off (dom, callback){
    dom.classList.remove('on')
    setTimeout(()=>{
      dom.classList.remove('ani', 'on')
      if (callback != undefined)
        callback ()
      }, 250)
  }
  /**
  * Remove CSS classes with delay to a DOM Node
  * @param {Object} dom - DOM node to remove `ani` and `on` classes with 250ms delay.
  */
  static on (dom){
    dom.classList.add('ani')
    setTimeout(()=>{dom.classList.add('ani', 'on')}, 250)
  }
}

