"use strict";

import {DOM, Animate} from '../base/dom.js'
export {Files}

class Files {
  constructor (){
    this.fileOnTarget = {} // Files stored on target device
    this.fileOnHost   = {} // Files stored on host device

    let $ = this._dom = {}

    $.fileOnTarget = new DOM('div', {id:'fileOnTarget'})
    $.fileOnHost = new DOM('div', {id:'fileOnHost'})
    $.pane = new DOM('div', {id:'pane'})
      .append([$.fileOnTarget, $.fileOnHost])

    $.filename = new DOM('div', {id:'filename'})
    $.codemirror = new DOM('div', {id:'codemirror'})
    $.editor = new DOM('div', {id:'editor'})
      .append([$.filename, $.codemirror])

    $.container = new DOM('div')
      .append([$.pane, $.editor])

    DOM.get('section#files').append($.container._dom)

  }
  init (){}
  deinit (){}
}
