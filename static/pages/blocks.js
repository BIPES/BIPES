
"use strict";

import {DOM, Animate} from '../base/dom.js'
export {Blocks}

class Blocks {
  constructor (){
    this.timedResize // To guarantee that blockly is ocuppying 100%
    this.inited = false
    this.loadedWorkspace = false

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
      },
      media: './static/media/blocks/',
      oneBasedIndex: false,
      zoom: {
        controls: true,
        wheel: true
      },
      move:{
        scrollbars: {
          horizontal: true,
          vertical: true
        },
        drag: true,
        wheel: false}
    })
  }
  init (){
    this.workspace.setVisible(true)
    this.inited = true
    let obj = page.project.projects[page.project.currentUID]
    if (obj.hasOwnProperty('blocks'))
      this.load(obj.blocks)
    // Update project on changes
    this.workspace.addChangeListener(this.update)
  }
  deinit(){
    this.workspace.removeChangeListener(this.update)
    this.workspace.clear()
    this.workspace.setVisible(false)

    this.inited = false
  }
  resize (){
    Blockly.svgResize(this.workspace)
    clearTimeout(this.timedResize)
    this.timedResize = setTimeout(()=>{
      Blockly.svgResize(this.workspace)
    },250)
  }
  update (ev){
    if (!ev.recordUndo)
        return

    let xml = Blockly.Xml.domToText(
      Blockly.Xml.workspaceToDom(page.blocks.workspace)
    )
    page.project.update({
      blocks:{
        xml:xml
      }
    })
  }
  load (obj, tabUID){
    if (!this.inited || tabUID == command.tabUID)
      return
    if (obj.hasOwnProperty('xml')) {
      this.loadedWorkspace = false
      Blockly.Events.disable()
      Blockly.Xml.clearWorkspaceAndLoadFromXml(
        Blockly.Xml.textToDom(obj.xml),
        page.blocks.workspace
      )
      Blockly.Events.enable()
    }
  }
}
