
"use strict";

import {DOM, Animate} from '../../base/dom.js'
import {Tool} from '../../base/tool.js'
import {command} from '../../base/command.js'
import {channel} from '../../base/channel.js'
import {notification} from '../notification/main.js'
import {files} from '../files/main.js'
import {prompt} from '../prompt/main.js'

/* Code visually, uses Google Blockly as visual language library. */
class Blocks {
  /* Construct the object, is executed on load of the window. */
  constructor (){
    this.name = 'blocks'
    this.timedResize // To guarantee that blockly is ocuppying 100%
    this.inited = false
    this.loadedWorkspace = false

    let $ = this._dom = {}

    $.section = new DOM (DOM.get('section#blocks'))
      .append(new DOM('div', {id:'blockly'}))

    // Empty toolbox to use in the workspace until loading project
    let emptyToolbox = Blockly.Xml.textToDom("<xml><category name='...'></category></xml>")
    this.workspace = Blockly.inject('blockly', {
      theme: Tool.fromUrl('theme') === 'dark' ? Blockly.Themes.Dark : Blockly.Themes.Light,
      toolbox: emptyToolbox,
      visible: false,
      grid: {
        spacing: 25,
        length: 3,
        colour: Tool.fromUrl('theme') === 'dark' ? '#444' : '#ccc',
        snap: true
      },
      media: './static/page/blocks/media/',
      oneBasedIndex: false,
      zoom: {
        controls: false,
        wheel: true
      },
      move:{
        scrollbars: {
          horizontal: true,
          vertical: true
        },
        drag: true,
        wheel: false
        }
    })

    // Init language strings
    for (const target in blockly_toolbox){
      blockly_toolbox[target] = blockly_toolbox[target].replace(/%{(\w+)}/g,
        (m, p1) => Blockly.Msg[p1]
      )
    }

    // Init code generation and viewer module.
    this.code = new BlocksCode(this, $.section)
  }
  /*
   * On display, initiates the page.
   */
  init (){
    if (this.inited)
      return

    this.workspace.setVisible(true)
    this.code.init()
    this.inited = true
    let obj = window.bipes.page.project.projects[window.bipes.page.project.currentUID]
    if (obj.hasOwnProperty('blocks'))
      this.load(obj.blocks)
    if (obj.hasOwnProperty('device'))
      this.toolbox(obj.device.target)
    // Update project on changes
    this.workspace.addChangeListener(this.update)
  }
  /*
   * On hidden, deinitiate the page.
   */
  deinit(){
    if (!this.inited)
      return

    this.workspace.removeChangeListener(this.update)
    this.workspace.clear()
    this.workspace.setVisible(false)
    this.code.deinit()
    this.inited = false
  }
  /*
   * On resize, resize the page.
   */
  resize (){
    Blockly.svgResize(this.workspace)
    clearTimeout(this.timedResize)
    this.timedResize = setTimeout(()=>{
      Blockly.svgResize(this.workspace)
    },250)
  }
  /*
   * On load a project, load the blocks' scope of the project.
   */
  load (obj, tabUID){
    if (!this.inited || tabUID == command.tabUID)
      return
    if (obj.hasOwnProperty('xml')) {
      this.loadedWorkspace = false
      Blockly.Events.disable()
      Blockly.Xml.clearWorkspaceAndLoadFromXml(
        Blockly.Xml.textToDom(obj.xml),
        this.workspace
      )
      Blockly.Events.enable()
    }
  }
  /*
   * On change applied to the workspace, update the blocks'.
   * When event does not conatin `recordUndo` property, it means the event
   * does not affect the project, for example, while dragging the block.
   * scope of the project.
   * @param {Object} ev - Blockly event of the change.
   */
  update (ev){
    if (!ev.recordUndo)
        return

    let xml = Blockly.Xml.domToText(
      Blockly.Xml.workspaceToDom(blocks.workspace)
    )
    window.bipes.page.project.update({
      blocks:{
        xml:xml
      }
    })
  }
  /*
   * On target device change, update the blocks toolbox.
   * @param {string} target - Target device.
   */
  toolbox (target){
    if (!this.inited)
      return

    this.workspace.updateToolbox(blockly_toolbox[target])
    this.workspace.scrollCenter()
  }
  /**
   * Create this page empty object
   * @return {Object} This page scope in the project file.
   */
  empty (){
    return {
      xml:'<xml xmlns="https://bipes.net.br/ide"></xml>'
    }
  }
  /**
   * Change target device.
   * @param {string} target - Target device.
   */
  deviceTarget (target){
    /* refreshes block pinout with device change */
    let blocks = this.workspace.getBlocksByType('pinout')

    blocks.forEach((block) => {
      block.refresh(target)
    })
    if (blocks.length != 0) notification.send(`${Msg['PageBlocks']}: ${Msg['DeviceChangedCheckPins']}`)
  }
}

/* Code generator and viewer. */
class BlocksCode {
  /*
   * Init code generator and viewer.
   * @param {Object} parent - Parent object.
   * @param {Object} dom - Target DOM.
   */
  constructor (parent, dom) {
    this.generating = false // is generating code
    this.parent = parent
    this.name = 'code'

    this.interval           // store watcher interval.
    this.executing          // store if is executing code.

    let $ = this._dom = {}

    $.codeButton = new DOM('button', {
      title:Msg['ViewBlocksCode'],
      id:'code',
      className:'icon'
    }).onevent('click', this, this.show)
    $.runButton = new DOM('button', {
      title:Msg['RunBlocks'],
      className:'icon',
      id:'run'
    }).onevent('click', this, this.exec)
    $.editAsFileButton = new DOM('button', {
      innerText:Msg['BlocksEditAsFile'],
      className:'icon text',
      id:'copy'
    }).onevent('click', this, this.copyEdit)
    $.codemirror = new DOM('div', {id:'codemirror'})
      .append([$.editAsFileButton])
    $.container = new DOM('div', {id:'blocks-code'})
      .append([$.codemirror, $.codeButton, $.runButton])
    dom.append([$.container])


    this.codemirror = CodeMirror($.codemirror._dom, Tool.fromUrl('theme'),
      {contenteditable:false})

    command.add([this.parent, this], {
      execedOnTarget: this._execedOnTarget,
    })
  }
  init (){
    this.interval = setInterval(() => {this.watcher()}, 250)
  }
  deinit (){
    clearInterval(this.interval)
  }
  /*
   * Show generated code.
   */
  show (){
    this.generating = !this.generating
    DOM.switchState(this._dom.container)
  }
  watcher (){
    // Handle executing change without triggering DOM change everytime.
    if (prompt.locked){
      this._dom.runButton._dom.classList.add('on')
    } else if (!prompt.locked){
      this._dom.runButton._dom.classList.remove('on')
    }
    if (!this.generating)
      return

    this.codemirror.dispatch({
      changes: {from:0, to:this.codemirror.state.doc.length,
        insert:Blockly.Python.workspaceToCode(this.parent.workspace)
      }
    })
  }
  exec (){
    // If already executing, stop.
    if (prompt.locked){
      command.dispatch(channel, 'push', [
        '\x03',
        channel.targetDevice, [], command.tabUID
      ])
      return
    }

    let script = Blockly.Python.workspaceToCode(this.parent.workspace)

    let cmd = channel.pasteMode(script)
    command.dispatch(channel, 'push', [
      cmd,
      channel.targetDevice,
      ['files', 'project', '_execedOnTarget'],
      command.tabUID
    ])
  }
  _execedOnTarget (str, cmd, tabUID){
    this._dom.runButton._dom.classList.remove('on')
    notification.send(`${Msg['PageBlocks']}:${Msg['ScriptFinishedExecuting']}`)
  }

  /*
   * Generate code from blocks, copy, create script and open in the editor.
   */
  copyEdit (){
    let script = Blockly.Python.workspaceToCode(this.parent.workspace)

    files._dom.filename._dom.value = `/${Msg['BlocksPy']}`
    files.codemirror.dispatch({
      changes: {from:0, to:files.codemirror.state.doc.length, insert:script}
    })
    document.title = `${Msg['BlocksPy']} - BIPES`
    files.nav.click()
  }
}

/* Dark blockly theme*/
Blockly.Themes.Dark = Blockly.Theme.defineTheme('dark', {
  'base': Blockly.Themes.Classic,
  'componentStyles': {
    'workspaceBackgroundColour': '#1e1e1e',
    'toolboxBackgroundColour': 'blackBackground',
    'toolboxForegroundColour': '#fff',
    'flyoutBackgroundColour': '#252526',
    'flyoutForegroundColour': '#ccc',
    'flyoutOpacity': 1,
    'scrollbarColour': '#797979',
    'insertionMarkerColour': '#fff',
    'insertionMarkerOpacity': 0.3,
    'scrollbarOpacity': 0.4,
    'cursorColour': '#d0d0d0',
    'blackBackground': '#333',
  },
})

export let blocks = new Blocks()
