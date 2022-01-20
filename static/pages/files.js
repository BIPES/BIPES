"use strict";

import {DOM, ContextMenu, Animate} from '../base/dom.js'
import {Tool} from '../base/tool.js'
import {command} from '../base/command.js'
import {rosetta} from '../base/rosetta.js'
import {channel} from '../base/channel.js'

import {notification} from './notification.js'
import {project} from './project.js'

class Files {
  constructor (){
    this.name = 'files'

    let $ = this._dom = {}

    $.section = new DOM(DOM.get('section#files'))

    $.sidebar = new DOM('div', {id:'sidebar'})
    $.pane = new DOM('div', {id:'pane'})
      .append([
        new DOM('div', {
          className:'header',
          innerText:'File manager'
          }),
        $.sidebar
      ])


    $.filename = new DOM('input', {
      id:'filename',
      autocomplete:'off',
      placeholder:'Filename'}
    ).onchange(this, () => {
      let _dom = $.filename._dom
      let str = _dom.value

      str = str [0] != '/' && str.length > 1 ?
                   '/' + str : str
      str += str.indexOf('.') == -1 ? '.py' : ''
      str = str
      _dom.value = str
      document.title = `${str} - BIPES`
    })


    $.codemirror = new DOM('div', {id:'codemirror'})

    $.header = new DOM('div', {id:'header'}).append([
          new DOM('button', {
            id:'hidePane',
            title:'Hide/show project tree.'
          }).onclick(this, () => {
            DOM.switchState($.section._dom, 'hidePane')
          }),
          $.filename
        ])
    $.editor = new DOM('div', {id:'editor'})
      .append([
        $.header,
        $.codemirror
        ])

    $.container = new DOM('div', {className:'container'})
      .append([$.pane, $.editor])

    $.section.append([$.container])

    this.project = new ProjectFiles(this)
    this.device = new DeviceFiles(this)

    // Codemirror
    this.codemirror = CodeMirror($.codemirror._dom, Tool.fromUrl('theme'))
  }
  init (){
    if (this.inited)
      return

    this.project.init()
    this.inited = true
  }
  deinit (){
    if (!this.inited)
      return

    this.project.deinit()
    this.inited = false
  }
  load (obj){
    if (obj.hasOwnProperty('tree')){
      this.project.load(obj)
    }
  }
}

class DeviceFiles {
  constructor (parent){
    this.parent = parent
    this.dom = {}

    this.name = "device"

    this.fileOnTarget = [{name:'', files:[]}] // Files stored on target device, default depth 1 (root)

    // Miscellaneous variables to get/put through WebSocket
    this.arrayBufferFile = new Uint8Array(0) // Temporaly store incoming files comming as buffer
    this.arrayBufferFilename                 // Temporaly store file filename
    this.arrayBufferTarget                   // After fetch, download or show
    this.arrayBufferPos                      // Position on the current file being sent

    let $ = this._dom = {}

    $.contextMenu = new DOM('div')
    this.contextMenu = new ContextMenu($.contextMenu, this)
    this.parent._dom.section.append($.contextMenu)

    $.fileOnTarget = new DOM('span')
    $.detailsFileOnTarget = DOM.prototypeDetails({
      id:'fileOnTarget',
      innerText: "Device files",
      onevent: [{
        event:'click',
        self:this,
        fun:this.listDir,
        args:['/', undefined]
      }, {
        event:'contextmenu',
        fun: (path, dom, ev) => {
          ev.preventDefault()
          this.contextMenu.open([
            {
              id:'add',
              innerText:'New folder',
              fun:this.newFolder,
              args:[path]
            }, {
              id:'script',
              innerText:'New script',
              fun:this.newScript,
              args:[path]
            }, {
              id:'upload',
              accept:'.py,.csv,.md',
              innerText:'Upload file',
              fun:this.uploadFile,
              args:[path]
            }
          ], ev)
        },
        args:['/']
      }]
    })
    .append($.fileOnTarget)

    $.saveToTarget = new DOM('button', {
      id:'upload',
      className:'icon text',
      innerText:'Write',
      title:'Write to device'
    }).onclick(this, this._fromEditor)

    this.parent._dom.sidebar.append($.detailsFileOnTarget)
    this.parent._dom.header.append($.saveToTarget)

    command.add([this.parent, this], {
      buildFileTree: this._buildFileTree,
      editorSetValue: this._editorSetValue,
      downloadValue: this._downloadValue,
      // miscellanious WebSocket file handling (run on master)
      getFileArrayBuffer: this._getFileArrayBuffer,
      gotFileArrayBuffer: this.__gotFileArrayBuffer,
      putFileArrayBuffer: this._putFileArrayBuffer,
      putFileArrayBufferEnd: this.__putFileArrayBufferEnd,
    })
  }

  listDir (path, tabUID, dom, ev) {
    if (dom != undefined) {
      ev.preventDefault()
      if (dom.id != "fileOnTarget"){
        if (dom.open) {
          dom.open = false
          return
        }
      }
      if (dom.open) {
        return
      }
    }

    path = (path == undefined) ? '/' : path
    let cmd = rosetta.ls.cmd(path)
    command.dispatch(channel, 'push', [
      cmd,
      channel.targetDevice,
      ['files', 'device', '_fetchRecursive'],
      tabUID == undefined ? command.tabUID : tabUID
    ])
  }
  _fetchRecursive (str, cmd, tabUID) {
    let reg_cmd = rosetta.ls.reg
    if (!reg_cmd.test(cmd)){
      console.error('Files: Incorrect command structure on _FetchRecursive')
      return true
    }
    cmd = cmd.match(reg_cmd)[1]

    let map = cmd == '/' ? [""] : cmd.split('/'),
        ref = this.fileOnTarget,
        found = new Array(map.length).fill(false)

    map.forEach ((m, i) => {
      ref.every(p => {
        if (p.name == m){
          found[i] = true
          ref = p.files
          return false
        }
        return true
      })
    })
    if (found.includes(false)){
      console.error("Files: some directory don't exist or haven't been mapped!")
      return true
    }
    ref.length = 0 // clear reference pointer to update with files

    let reg = /(['])(?:(?=(\\?))\2.)*?\1/g
    let matches = str.match(reg)
    if (matches != null) {
      matches = matches.map(str => str.replaceAll("'",""))
      matches.forEach ((match) => {
        if(match.match(/\./) == null) {
          ref.push({
            name:match,
            files:[]
          })
        } else
          ref.push({name:match})
      })
    } else
        ref.push({empty:true})

    command.dispatch([this.parent, this], 'buildFileTree', [this.fileOnTarget, map, tabUID])
  }
  /**
   * Build the file tree
   * @param{object} fileOnTarget - DOM node of the file tree
   * @param{object} map - Array path to a directory
   * @param{string} tabUID - UID from the requesting tab
   */
  _buildFileTree (fileOnTarget, map, tabUID) {
    this.fileOnTarget = fileOnTarget

    if (tabUID != command.tabUID)
      return

    let _iterate = (obj, dom, path) => {
      let doms = []
      obj.forEach(item => {
        if (item.files != undefined) {
          path.push(item.name)
          doms.push(
            DOM.prototypeDetails({
              id:`path_${path.join('_')}`,
              innerText: item.name,
              onevent: [
              {
                event:'click',
                self:this,
                fun:this.listDir,
                args:[`/${path.join('/')}`, undefined]
              }, {
                event:'contextmenu',
                fun: (path, dom, ev) => {
                  ev.preventDefault()
                  this.contextMenu.open([
                    {
                      id:'add',
                      innerText:'New folder',
                      fun:this.newFolder,
                      args:[path]
                    }, {
                      id:'script',
                      innerText:'New script',
                      fun:this.newScript,
                      args:[path]
                    }, {
                      id:'upload',
                      innerText:'Upload file',
                      fun:this.uploadFile,
                      args:[path]
                    }, {
                      id:'remove',
                      innerText:'Remove folder',
                      fun:this.remove,
                      args:[path]
                    }
                  ], ev)
                },
                args:[`/${path.join('/')}`]
              }]
            })
          )
          if (item.files.length > 0) {
            doms[doms.length - 1]._dom.open = true
            if (item.files[0].hasOwnProperty('empty')) {
              doms[doms.length - 1]._dom.open = true
              doms[doms.length - 1].append(
                new DOM('span', {innerText:'(Empty)', className:'emptyDir'})
              )
            } else
            _iterate (item.files, doms[doms.length - 1], path)
          }
          path.pop()
        } else {
          let _path = path.length == 0 ? '' : `/${path.join('/')}`

          doms.push(item.dom = new DOM('button',{
              innerText:item.name,
              className:'listedFile'
            })
            .onclick(this, () => {this.fetchFile('editor', `${_path}/${item.name}`)})
            .onevent('contextmenu', this, (ev) => {
              ev.preventDefault()
              this.contextMenu.open([
                {
                  id:'run',
                  innerText:'Execute script',
                  fun:this.runOnTarget,
                  args:[`${_path}/${item.name}`]
                }, {
                  id:'download',
                  innerText:'Download',
                  fun:this.download,
                  args:[`${_path}/${item.name}`]
                }, {
                  id:'remove',
                  innerText:'Remove',
                  fun:this.remove,
                  args:[`${_path}/${item.name}`]
                },
              ], ev)
            })
          )
        }
      })

      dom.append(doms)

      return
    },
    path = []

    this._dom.fileOnTarget.removeChilds()
    _iterate(this.fileOnTarget[0].files, this._dom.fileOnTarget,path)

    this._dom.detailsFileOnTarget._dom.open = true
  }
  /**
   * Fetch file from a device
   * @param{string} target - Target device uid
   * @param{string} filename - Path to file, eg. /libs/my_lib.py
   */
  fetchFile (target, filename) {
    switch (channel.currentProtocol) {
      case 'WebSocket':
        command.dispatch([this.parent, this], 'getFileArrayBuffer', [
          filename,
          target,
          command.tabUID,
          channel.targetDevice
        ])
        break
      case 'WebSerial':
      case 'WebBluetooth':
        let cmd1 = rosetta.preopen.cmd(filename),
            cmd2 = channel.pasteMode(
              rosetta.open.cmd(filename)
            )

        command.dispatch(channel, 'push', [
          cmd1,
          channel.targetDevice,
          []
        ])
        command.dispatch(channel, 'push', [
          cmd2,
          channel.targetDevice,
          ['files', 'device', target == 'editor' ? '_fetchFileToEditor' : '_fetchFileToDownload'],
          command.tabUID
        ])
        break
    }
  }
  _getFileArrayBuffer (filename, target, tabUID, targetDevice){
    if (channel.current == undefined || channel.targetDevice != targetDevice)
      return
    if (this.arrayBufferFile.length !== 0){
      console.error('Files: another hexastream is running')
      return
    }
    // get request
    let rec1 = new Uint8Array(2 + 1 + 1 + 8 + 4 + 2 + 64)
    rec1[0] = 'W'.charCodeAt(0) // 87 (retruns 87)
    rec1[1] = 'A'.charCodeAt(0) // 65 (returns 66)
    rec1[2] = 2 // get
    rec1[16] = filename.length & 0xff
    rec1[17] = (filename.length >> 8) & 0xff
    for (let i = 0; i < filename.length && i < 64; i++)
      rec1[18 + i] = filename.charCodeAt(i)

    command.dispatch(channel, 'push', [
      rec1,
      channel.targetDevice,
      ['files', 'device', '__checkHexaGet'],
      tabUID
    ])

    this.arrayBufferTarget = target == 'editor' ? 'editor' : 'download'
    this.arrayBufferFilename = filename
  }


  __checkHexaGet (uint8, cmd, tabUID){
    if (uint8[0] == cmd[0] && uint8[1] == cmd[1] + 1) {
      // clear any other
      this.arrayBufferFile = new Uint8Array(0)
      console.log('Files: Got get match')
      // confirm get
      let rec2 = new Uint8Array([0x00])
      command.dispatch(channel, 'push', [
        rec2,
        channel.targetDevice,
        ['files', 'device', '__checkFileGet'],
        tabUID
      ])
    }
  }
  __checkFileGet (uint8, cmd, tabUID){
    if (cmd[0] == 0x03) {
      console.log('Files: Got file!')
      let str = new TextDecoder().decode(this.arrayBufferFile)
      // Converts MicroPython output \r into unix new line \n and 4 spaces to \t
      let script = str.replaceAll(/\r/g,'\n').replaceAll(/    /g,'\t'),
          filename = this.arrayBufferFilename,
          then = this.arrayBufferTarget

      command.dispatch([this.parent, this], 'gotFileArrayBuffer', [filename, str, then, tabUID])
      // End request, clear variables
      this.arrayBufferTarget = undefined
      this.arrayBufferFilename = undefined
      this.arrayBufferFile = new Uint8Array(0)
    } else {
      // concatanate array
      let ar = new Uint8Array(uint8.length - 2 + this.arrayBufferFile.length)
      ar.set(this.arrayBufferFile)
      ar.set(uint8.slice(2), this.arrayBufferFile.length)
      this.arrayBufferFile = ar
      // continue get
      let rec2 = new Uint8Array([0x00])
      command.dispatch(channel, 'push', [
        rec2,
        channel.targetDevice,
        ['files', 'device', '__checkFileGet'],
        tabUID
      ])
    }
  }
  __gotFileArrayBuffer (filename, script, then, tabUID){
    if (command.tabUID != tabUID)
      return
    if (then == 'editor')
      this._editorSetValue(filename, script, tabUID)
    else if (then == 'download')
      this._downloadValue(filename, script, tabUID)
  }

  _fetchFileToEditor (str, cmd, tabUID){
    this._fetchFile ('editor', str, cmd, tabUID)
  }
  _fetchFileToDownload (str, cmd, tabUID){
    this._fetchFile ('download', str, cmd, tabUID)
  }
  _fetchFile (then, str, cmd, tabUID){
    // Get filename from cmd
    let filename = cmd.match(rosetta.open.reg)
    if (filename != null)
      filename = filename [1]
    else {
      console.error('Files: Could not fetch requested filename')
      return
    }

    // Converts MicroPython output \r into unix new line \n and 4 spaces to \t
    let script = str.substring(2).replaceAll(/\r/g,'\n').replaceAll(/    /g,'\t')

    if (then == 'editor')
      command.dispatch([this.parent, this], 'editorSetValue', [filename, script, tabUID])
    else if (then == 'download')
      command.dispatch([this.parent, this], 'downloadValue', [filename, script, tabUID])
  }
  _editorSetValue (filename, script, tabUID){
    if (command.tabUID != tabUID)
      return

    this.parent._dom.filename._dom.value = filename
    this.parent.codemirror.dispatch({
      changes: {from:0, to:this.parent.codemirror.state.doc.length, insert:script}
    })
    document.title = `${filename} - BIPES`
  }
  /*
   * Download fetched file.
   * @param{string} filename - filename
   * @param{string} script - file to download
   * @param{string} tabUID - target tab UID
   */
  _downloadValue = (filename, script, tabUID) => {
    if (command.tabUID != tabUID)
      return
    DOM.prototypeDownload(filename.substring(1), script)
  }
  /**
   * Get file from ``codemirror`` editor and calls :js:func:`Files.writeToTarget` to upload.
   */
  _fromEditor (){
    //For codemirror
      let script = this.parent.codemirror.state.doc.toString(),
        filename = this.parent._dom.filename._dom.value
    //let uint8Array = new Uint8Array([...script].map(s => s.charCodeAt(0)))

    this.writeToTarget (filename, script)
  }
  /**
   * Get file from ``codemirror`` editor and calls :js:func:`Files.writeToTarget` to upload.
   * @param{string} filename - Filename with full path
   * @param{string/ArrayBuffer} script - File to be saved
   */
  writeToTarget (filename, script){
    switch (channel.currentProtocol) {
      case 'WebSocket':
        script = script
          .replaceAll(/\t/g, '    ')
        command.dispatch([this.parent, this], 'putFileArrayBuffer', [
          filename,
          script,
          command.tabUID,
          channel.targetDevice
        ])
        break
      case 'WebSerial':
      case 'WebBluetooth':
        if (script instanceof ArrayBuffer)
          script = new TextDecoder().decode(script)
        script = script
          .replaceAll(/\\/g, '\\\\')
          .replaceAll(/(\r\n|\r|\n)/g, '\\r')
          .replaceAll(/'/g, "\\'")
          .replaceAll(/"/g, '\\"')
          .replaceAll(/\t/g, '    ')
        let cmd = channel.pasteMode(
          rosetta.write.cmd(filename, script)
        )

        command.dispatch(channel, 'push', [
          cmd,
          channel.targetDevice,
          ['files', 'device', '_wroteToTarget'],
          command.tabUID
        ])
        break
    }
  }
  _putFileArrayBuffer (filename, script, tabUID, targetDevice){
    if (channel.current == undefined || channel.targetDevice != targetDevice)
      return
    if (this.arrayBufferFile.length !== 0){
      console.error('Files: another hexastream is running')
      return
    }
    let fsize = script.length
    // get request
    let rec1 = new Uint8Array(2 + 1 + 1 + 8 + 4 + 2 + 64)
    rec1[0] = 'W'.charCodeAt(0) // 87 (returns 87)
    rec1[1] = 'A'.charCodeAt(0) // 65 (returns 66)
    rec1[2] = 1 // put
    rec1[12] = fsize & 0xff
    rec1[13] = (fsize >> 8) & 0xff
    rec1[14] = (fsize >> 16) & 0xff
    rec1[15] = (fsize >> 24) & 0xff
    rec1[16] = filename.length & 0xff
    rec1[17] = (filename.length >> 8) & 0xff
    for (let i = 0; i < filename.length && i < 64; i++)
      rec1[18 + i] = filename.charCodeAt(i)

    this.arrayBufferFilename = filename
    this.arrayBufferFile = new TextEncoder().encode(script)

    command.dispatch(channel, 'push', [
      rec1,
      channel.targetDevice,
      ['files', 'device', '__checkHexaPut'],
      tabUID
    ])
  }
  __checkHexaPut (uint8, cmd, tabUID){
    if (uint8[0] == cmd[0] && uint8[1] == cmd[1] + 1) {
      console.log('Files: Got put match')
      let rec2 = this.arrayBufferFile
      command.dispatch(channel, 'push', [
        rec2,
        channel.targetDevice,
        ['files', 'device', '__checkFilePut'],
        tabUID
      ])
    }
  }
  __checkFilePut (uint8, cmd, tabUID){
    console.log('Files: file put finished')
    command.dispatch([this.parent, this], 'putFileArrayBufferEnd', [this.arrayBufferFilename, tabUID])
    this.arrayBufferFile = new Uint8Array(0)
    this.arrayBufferPos = undefined
    this.arrayBufferFilename = undefined
  }
  __putFileArrayBufferEnd (filename, tabUID){
    if (command.tabUID != tabUID)
      return
    this.listDir(filename.match(/(.*)\/(?:.*)/)[1], tabUID)
  }

  _wroteToTarget (str, cmd, tabUID){
    let reg = rosetta.write.reg
    if (!reg.test(cmd))
      return

    this.listDir(cmd.match(reg)[1], tabUID)
  }
  newScript (path){
    this.contextMenu.oninput({
      title:"New script's name",
      placeholder:"eg.: my_script.py"
    }, (input, ev) => {
      ev.preventDefault()
      let filename = input.value.replaceAll(' ','_'),
          script = "# Create your script here"

      this.contextMenu.close()

      if (filename == undefined || filename == '')
        return

      if (filename.indexOf('.') == -1)
        filename += '.py'

      this.writeToTarget(
        `${path}/${filename}`,
        script
      )
    })
  }
  remove (filename){
    this.contextMenu.close()

    let cmd = rosetta.rm.cmd(filename)

    command.dispatch(channel, 'push', [
      cmd,
      channel.targetDevice,
      ['files', 'device', '_removedFromTarget'],
      command.tabUID
    ])
  }
  _removedFromTarget (str, cmd, tabUID){
    let reg = rosetta.rm.reg;
    if (!reg.test(cmd))
      return

    let reg_oserror = rosetta.error.reg
    let path = cmd.match(reg)

    if (reg_oserror.test(str)) {
      let error = str.match(reg_oserror)[1]
      switch (error) {
        case '39':
          notification.send(`Folder "${path[1]}/${path[2]}" not empty, can't be removed.`)
          break
        default:
          notification.send(`Could not remove folder ${path[1]}/${path[2]}.`)
          break;
      }
    }
    this.listDir(path[1], tabUID)
  }
  runOnTarget (filename){
    this.contextMenu.close()

    let cmd = rosetta.exec.cmd(filename)

    command.dispatch(channel, 'push', [
      cmd,
      channel.targetDevice,
      ['files', 'device', '_ranOnTarget'],
      command.tabUID
    ])
  }
  _ranOnTarget (str, cmd, tabUID){
    //let reg = rosetta.exec.reg
    //if (!reg.test(cmd))
    //  return

    //notification.send(`Script ${cmd.match(reg)[1]} finished executing!`)
    notification.send(`Script finished executing!`)
  }
  /* Download a file
   * @param{string} filename - Full path with filename
   */
  download (filename){
    this.contextMenu.close()

    this.fetchFile('download', filename)
  }
  newFolder (path){
    this.contextMenu.oninput({
      title:"New folder's name",
      placeholder:"eg.: important_files"
    }, (input, ev) => {
      ev.preventDefault()
      let folder = input.value.replaceAll('.', '-')

      this.contextMenu.close()

      if (folder == undefined || folder == '')
        return

      let cmd = rosetta.mkdir.cmd(path, folder)

      command.dispatch(channel, 'push', [
        cmd,
        channel.targetDevice,
        ['files', 'device', '_addedFolderOnTarget'],
        command.tabUID
      ])
    })
  }
  /*
   * After command execution callback to the :js:func:`newFolder` command.
   * @param {string} str - Sent command
   * @param {string} cmd - Repplied back command plus output
   * @param {string} tabUID - UID from the origin tab.
   */
  _addedFolderOnTarget (str, cmd, tabUID){
    let reg = rosetta.mkdir.reg
    if (!reg.test(cmd))
      return

    this.listDir(cmd.match(reg)[1], tabUID)
  }
  /*
   * Upload a file from the operation system's file picker to the device.
   * @param {string} path - Target path to upload the file
   * @param {Object} dom - Node containig the file
   * @param {string} ev - Input on change event
   */
  uploadFile (path, dom, ev){
    if  (dom.files [0] == undefined)
      return

    let file = dom.files[0]
    let filename = `${path}/${file.name}`

    let reader = new FileReader()
    reader.onload = (e) => {
        this.writeToTarget (filename, e.target.result)
    }
    reader.readAsArrayBuffer(file)

    this.contextMenu.close()
  }
}

class ProjectFiles {
  constructor (parent){
    this.name = 'project'
    this.parent = parent
    this.dom = {}

    this.tree               //  Reference to project file tree

    let $ = this._dom = {}

    $.contextMenu = new DOM('div')
    this.contextMenu = new ContextMenu($.contextMenu, this)
    this.parent._dom.section.append($.contextMenu)

    $.section = new DOM(DOM.get('section#files'))
    $.detailsFileOnProject = DOM.prototypeDetails({
      id:'fileOnProject',
      innerText: "Project files",
      onevent: [{
        event:'contextmenu',
        fun: (path, dom, ev) => {
          ev.preventDefault()
          this.contextMenu.open([
            {
              id:'add',
              innerText:'New folder',
              fun:this.newFolder,
              args:[path]
            }, {
              id:'script',
              innerText:'New script',
              fun:this.newScript,
              args:[path]
            }, {
              id:'upload',
              accept:'.py,.csv,.md',
              innerText:'Upload file',
              fun:this.uploadFile,
              args:[path]
            }
          ], ev)
        },
        args:['/']
      }]
    })


    $.saveToLocal = new DOM('button', {
      id:'save',
      className:'icon',
      title:'Save to project'
    }).onclick(this, this._fromEditor)

    this.parent._dom.sidebar.append($.detailsFileOnProject)
    this.parent._dom.header.append($.saveToLocal)


    command.add([this.parent, this], {
      newFolder: this._newFolder,
      newScript: this._newScript,
      remove: this._remove,
      save: this._save
    })
  }
  init(){
    if (this.tree === undefined){
      let obj = project.projects[project.currentUID]
      if (!obj.hasOwnProperty('files'))
        obj.files = {tree:{name:'',files:[]}}

      this.tree = obj.files.tree
    }
    this._buildFileTree([])
  }
  deinit(){
    this._destroyFileTree()
  }
  load (obj){
    this.tree = obj.tree

    if (!this.parent.inited)
      return

    this._destroyFileTree()
    this._buildFileTree([])
  }
  /**
   * Get file from ``codemirror`` editor and save to project.
   */
  _fromEditor (){
    // From codemirror
    let script = this.parent.codemirror.state.doc.toString()
      .replaceAll(/\t/g, '    '),
      filename = this.parent._dom.filename._dom.value

    // Apply to all tabs
    command.dispatch([this.parent, this], 'save', [
      filename, script,
      project.currentUID
    ])
    // Changed by reference, just write to localStorage
    project.write()
  }
  /**
   * Save file to project. Will not save if path does not exist.
   * @param{string} filename - Full path to file
   * @param{string} file - Name of the new folder
   * @param{string} projectUID - UID of the project with a new folder
   */
  _save (filename, file, projectUID){
    let path = filename.split('/')
    path.shift()

    if (path == undefined || path == '')
      return

    let obj
    if (projectUID === project.currentUID)
      obj = this.objByName(path)
    else
      obj = this.objByName(path, projectUID)

    if (obj === true || obj.script == undefined) {
      bipes.page.notification.send(`Create paths or file for "${filename}" before saving to project.`)
      return
    }
    obj.script = file
  }
  /**
   * Create a new folder, context menu input.
   * Will dispatch command and update project by reference on input.
   * @param{string} path - Path to new folder
   */
  newFolder (path){
    this.contextMenu.oninput({
      title:"New folder's name",
      placeholder:"eg.: important_files"
    }, (input, ev) => {
      ev.preventDefault()
      let folder = input.value.replaceAll('.', '-')

      this.contextMenu.close()

      if (folder == undefined || folder == '')
        return

      // Apply to all tabs
      command.dispatch([this.parent, this], 'newFolder', [
        path, folder,
        project.currentUID
      ])
      // Changed by reference, just write to localStorage
      project.write()
    })
  }
  /**
   * Create a new folder
   * @param{string} path - Path to new folder
   * @param{string} folder - Name of the new folder
   * @param{string} projectUID - UID of the project with a new folder
   */
  _newFolder (path, folder, projectUID){
    let obj
    if (projectUID === project.currentUID)
      obj = this.objByName(path)
    else
      obj = this.objByName(path, projectUID)


    if (obj === true || obj.files == undefined)
      return
    let item = {
      name:folder,
      files:[]
    }

    // Search if already exist
    if  (!obj.files.every(item => item.name !== folder)){
      console.log(`Files: Folder ${folder} already exist in path "${path}"`)
      return
    }

    path += path == '/' ? folder : '/' + folder
    let map = path.split('/')
      map.shift()
    obj.files.push(item)

    if (!this.parent.inited || projectUID !== project.currentUID)
      return

    item.dom = this._domSpan(item, map, false)
    obj.dom._dom.append(item.dom._dom)

    obj.dom._dom.open = true
  }
  /**
   * Remove folder or file, dispatch command and update project by reference.
   * @param{string} path - Path to folder or file
   */
  remove (path){
    this.contextMenu.close()

    // Apply to all tabs
    command.dispatch([this.parent, this], 'remove', [
      path,
      project.currentUID
    ])
    // Changed by reference, just write to localStorage
    project.write()
  }
  /**
   * Remove folder or path
   * @param{string} path - Path to new folder
   * @param{string} projectUID - UID of the project with a new folder
   */
  _remove (path, projectUID){
    // Remove DOM Node
    if (this.parent.inited && projectUID === project.currentUID) {
      let obj
      if (projectUID === project.currentUID)
        obj = this.objByName(path)

      obj.dom._dom.remove()
    }

    // Get parent object
    let ar = path.split('/')
    let toRemoval = ar[ar.length - 1]
    ar.shift()
    ar.pop()

    let obj
    if (projectUID === project.currentUID)
      obj = this.objByName(ar)
    else
      obj = this.objByName(ar, projectUID)

    if (obj === true || obj.files == undefined)
      return

    obj.files.forEach((item, index) => {
      if (item.name == toRemoval) {
        obj.files.splice(index,1)
      }
    })
  }
  /**
   * Create a new file, context menu input.
   * Will dispatch command and update project by reference on input.
   * @param{string} path - Path to new file
   */
  newScript (path){
    this.contextMenu.oninput({
      title:"New script's name",
      placeholder:"eg.: my_script.py"
    }, (input, ev) => {
      ev.preventDefault()
      let filename = input.value.replaceAll(' ','_')
      this.contextMenu.close()

      if (filename == undefined || filename == '')
        return

      if (filename.indexOf('.') == -1)
        filename += '.py'

      // Apply to all tabs
      command.dispatch([this.parent, this], 'newScript', [
        path, filename, undefined,
        project.currentUID
      ])
      // Changed by reference, just write to localStorage
      project.write()
    })
  }
  /**
   * Create a new file
   * @param{string} path - Path to new file
   * @param{string} filename - Name of the new file
   * @param{string} file - Content of the new file, if empty, will default
   * @param{string} projectUID - UID of the project with a new file
   */
  _newScript (path, filename, file, projectUID){
    let obj
    if (projectUID === project.currentUID)
      obj = this.objByName(path)
    else
      obj = this.objByName(path, projectUID)

    if (obj === true || obj.files == undefined)
      return
    let item = {
      name:filename,
      script: file == undefined ? `# Create your "${filename}" script here` : file
    }

    // Search if already exist
    if  (!obj.files.every(item => item.name !== filename)){
      console.log(`Files: File "${filename}" already exist in path "${path}"`)
      notification.send(`File "${filename}" already exist in path "${path}"`)
      return
    }

    //path += path == '/' ? filename : '/' + filename
    let map = path.split('/')
      map.shift()
    obj.files.push(item)

    if (!this.parent.inited || projectUID !== project.currentUID)
      return

    item.dom = this._domSpan(item, map, true)
    obj.dom._dom.append(item.dom._dom)

    obj.dom._dom.open = true
  }
  /*
   * Upload a file from the operation system's file picker to the project.
   * @param{string} path - target path to upload the file
   * @param{object} dom - Node containig the file
   * @param{string} ev - input on change event
   */
  uploadFile (path, dom, ev){
    if (dom.files [0] == undefined)
      return

    let file = dom.files[0]
    let filename = `${path}/${file.name}`

    let reader = new FileReader()
    reader.onload = (e) => {
      command.dispatch([this.parent, this], 'newScript', [
        path, file.name, e.target.result,
        project.currentUID
      ])

      // Changed by reference, just write to localStorage
      project.write()
    }
    reader.readAsText(file)

    this.contextMenu.close()
  }
  /* Download a file
   * @param{string} filename - Full path with filename
   */
  download (filename){
    this.contextMenu.close()

    let path = filename.split('/')
    path.shift()

    if (path == undefined || path == '')
      return

    let obj = this.objByName(path)

    if (obj === true || obj.script == undefined) {
      console.error('Files: File do not exist')
      return
    }
    DOM.prototypeDownload(filename.substring(1), obj.script)
  }
  /* Execute file on paste mode
   * @param{string} filename - Full path with filename
   */
  execOnTarget (filename){
    this.contextMenu.close()

    let path = filename.split('/')
    path.shift()

    if (path == undefined || path == '')
      return

    let obj = this.objByName(path)

    if (obj === true || obj.script == undefined) {
      console.error('Files: File do not exist')
      return
    }

    let cmd = channel.pasteMode(obj.script)
    command.dispatch(channel, 'push', [
      cmd,
      channel.targetDevice,
      ['files', 'project', '_execedOnTarget'],
      command.tabUID
    ])
  }
  _execedOnTarget (str, cmd, tabUID){
    notification.send('Script finished executing!')
  }
  /**
   * Build the file tree
   * @param{object} map - Array path to a directory
   */
  _buildFileTree (map) {
    let _iterate = (obj, dom, path) => {
      let doms = []
      obj.forEach(item => {
        if (item.files != undefined) {
          path.push(item.name)
          doms.push(item.dom = this._domSpan(item, path, false))
          if (item.files.length > 0) {
            doms[doms.length - 1]._dom.open = true
            if (item.files[0].hasOwnProperty('empty')) {
              doms[doms.length - 1]._dom.open = true
              doms[doms.length - 1].append(
                new DOM('span', {innerText:'(Empty)', className:'emptyDir'})
              )
            } else
            _iterate (item.files, doms[doms.length - 1], path)
          }
          path.pop()
        } else {
          let _path = path.length == 0 ? '' : `/${path.join('/')}`

          doms.push(item.dom = this._domSpan(item, path, true))
        }
      })
      dom.append(doms)

      return
    },
    path = []
    _iterate(this.tree.files, this._dom.detailsFileOnProject, path)

    this.tree.dom = {}
    this.tree.dom._dom = this._dom.detailsFileOnProject._dom
    this._dom.detailsFileOnProject._dom.open = true

  }
  /**
   * Destroy the file tree, triggered by ::js::fun::Files::devinit.
   */
  _destroyFileTree () {
    let _dom = this._dom.detailsFileOnProject._dom

    let child = _dom.lastElementChild
    while (child) {
      if (child.nodeName === 'SUMMARY')
        return
      _dom.removeChild(child)
      child = _dom.lastElementChild
    }
  }
  /*
   * Generate the folder or file DOM node.
   * @param {String} item - folder/file object.
   * @param {Array} path - array path to folder/file object.
   * @param {bool} type - false equals folder and true a file.
   */
  _domSpan (item, path, type){
    switch (type) {
      case false:
        return DOM.prototypeDetails({
          id:`path_${path.join('_')}`,
          innerText: item.name,
          onevent: [{
            event:'contextmenu',
            fun: (path, dom, ev) => {
              ev.preventDefault()
              this.contextMenu.open([
                {
                  id:'add',
                  innerText:'New folder',
                  fun:this.newFolder,
                  args:[path]
                }, {
                  id:'script',
                  innerText:'New script',
                  fun:this.newScript,
                  args:[path]
                }, {
                  id:'upload',
                  innerText:'Upload file',
                  fun:this.uploadFile,
                  args:[path]
                }, {
                  id:'remove',
                  innerText:'Remove folder',
                  fun:this.remove,
                  args:[path]
                }
              ], ev)
            },
            args:[`/${path.join('/')}`]
          }]
        })
      case true:
        let _path = `/${path.join('/')}`
        _path += _path == '/' ? item.name : '/' + item.name
        return new DOM('button',{
          innerText:item.name,
          className:'listedFile'
        })
        .onclick(this, () => {this.open(_path)})
        .onevent('contextmenu', this, (ev) => {
          ev.preventDefault()
          this.contextMenu.open([
            {
              id:'run',
              innerText:'Execute script',
              fun:this.execOnTarget,
              args:[_path]
            }, {
              id:'download',
              innerText:'Download',
              fun:this.download,
              args:[_path]
            }, {
              id:'remove',
              innerText:'Remove',
              fun:this.remove,
              args:[_path]
            },
          ], ev)
        })
    }
  }
  /*
   * Open file.
   * @param {String/Array} path - array or string path.
   */
  open (path){
    let file = this.objByName(path)
    if (file === true)
      return

    this.parent._dom.filename._dom.value = path
    this.parent.codemirror.dispatch({
      changes: {from:0, to:this.parent.codemirror.state.doc.length, insert:file.script}
    })
    document.title = `${path} - BIPES`
  }
  /*
   * Gets object in the file tree by array path or string path.
   * If projectUID is null, assume current project.
   * @param{string/array} path - array or string path.
   * @param{string} projectUID - UID of the project with the path.
   */
  objByName (path, projectUID) {
    let tree
    if (projectUID === undefined)
      tree = this.tree
    else
      tree = project.projects[projectUID].files.tree

    if (path == '/')
      return tree

    let map
    if (typeof path == 'string'){
      map = path.split('/')
      map.shift()
    } else if (path instanceof Array){
      map = path
      if (path.length == 0)
        return tree
    }

    let ref_dir = tree.files,
        ref = tree.files,
      found = new Array(map.length).fill(false)

    map.forEach ((m, i) => {
      ref_dir.every(p => {
        if (p.name == m){
          found[i] = true
          ref_dir = p.files
          ref = p
          return false
        }
        return true
      })
    })

    if (found.includes(false)){
      console.error("Files: some directory don't exist or haven't been mapped!")
      return true
    }
    return ref
  }
}


export let files = new Files()
