
"use strict";

import {DOM, Animate} from '../base/dom.js'
export {Blocks}

class Blocks {
	constructor (){
	  this.timedResize // To guarantee that blockly is ocuppying 100%

	  let $ = this._dom = {}

		$.section = new DOM (DOM.get('section#blocks'))
		  .append(new DOM('div', {id:'blockly'}))


	  this.workspace = Blockly.inject('blockly', {
      toolbox: blockly_toolbox_esp32,
      visible: false,
      grid: {
        spacing: 25,
        length: 3,
        colour: '#ccc',
        snap: true
      }
	  })
	}
	init (){
	  this.workspace.setVisible(true);
	}
	deinit(){
	  this.workspace.setVisible(false);
	}
	resize(){
	  Blockly.svgResize(this.workspace)
	  clearTimeout(this.timedResize)
	  this.timedResize = setTimeout(()=>{
  	  Blockly.svgResize(this.workspace)
	  },250)
	}
}
