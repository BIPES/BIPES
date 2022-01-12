"use strict";

import {DOM, ContextMenu, Animate} from '../base/dom.js'
import {command} from '../base/command.js'
import {rosetta} from '../base/rosetta.js'
import {channel} from '../base/channel.js'

import {notification} from './notification.js'

class Files {
  constructor (){
    this.name = 'files'
    this.fileOnTarget = [{name:'', files:[]}] // Files stored on target device, default depth 1 (root)
    this.fileOnHost   = {} // Files stored on host device

    // Miscellaneous variables to get/put through WebSocket
    this.arrayBufferFile = new Uint8Array(0) // Temporaly store incoming files comming as buffer
    this.arrayBufferFilename                 // Temporaly store file filename
    this.arrayBufferTarget                   // After fetch, download or show
    this.arrayBufferPos                      // Position on the current file being sent

    let $ = this._dom = {}

    $.section = new DOM(DOM.get('section#files'))
    $.fileOnTarget = new DOM('span')
    $.detailsFileOnTarget = DOM.prototypeDetails({
      id:'fileOnTarget',
      innerText: "Files on device",
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
              fun:this.newFolderOnTarget,
              args:[path]
            }, {
              id:'script',
              innerText:'New script',
              fun:this.newFileOnTarget,
              args:[path]
            }, {
              id:'upload',
              accept:'.py,.csv,.md',
              innerText:'Upload file',
              fun:this.uploadFileToTarget,
              args:[path]
            }
          ], ev)
        },
        args:['/']
      }]
    })
    .append($.fileOnTarget)

    $.contextMenu = new DOM('div')
    this.contextMenu = new ContextMenu($.contextMenu, this)

    $.pane = new DOM('div', {id:'pane'})
      .append([
        new DOM('div', {className:'header'})
          .append([
         //   new DOM('h2', {innerText:'Files'})
          ]),
        new DOM('div', {id:'projectTree'}).append($.detailsFileOnTarget)])

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
      str = str.replaceAll(' ', '_')
      _dom.value = str
      document.title = `${str} - BIPES`
    })

    $.saveToTarget = new DOM('button', {
      id:'upload',
      accept:'.py,.csv,.md',
      className:'icon text',
      innerText:'Write'
    }).onclick(this, this._editorToTarget)

    $.codemirror = new DOM('div', {id:'codemirror'})

    $.editor = new DOM('div', {id:'editor'})
      .append([
        new DOM('div', {id:'header'}).append([
          new DOM('button', {
            id:'hidePane',
            title:'Hide/show project tree.'
          }).onclick(this, () => {
            DOM.switchState($.section._dom, 'hidePane')
          }),
          $.filename,
          $.saveToTarget
        ]),
        $.codemirror
        ])

    $.container = new DOM('div', {className:'container'})
      .append([$.pane, $.editor])

    $.section.append([$.container, $.contextMenu])

    // Codemirror
    this.codemirror = CodeMirror($.codemirror._dom)

    command.add(this, {
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
  init (){
    if (this.inited)
      return

    this.inited = true

  }
  deinit (){
    if (!this.inited)
      return
    this.inited = false
  }
  listDir (path, tabUID, dom, ev){
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
      ['files','_fetchRecursive'],
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

    command.dispatch(this, 'buildFileTree', [this.fileOnTarget, map, tabUID])
  }
  _buildFileTree (fileOnTarget, map, tabUID){
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
                      fun:this.newFolderOnTarget,
                      args:[path]
                    }, {
                      id:'script',
                      innerText:'New script',
                      fun:this.newFileOnTarget,
                      args:[path]
                    }, {
                      id:'upload',
                      innerText:'Upload file',
                      fun:this.uploadFileToTarget,
                      args:[path]
                    }, {
                      id:'remove',
                      innerText:'Remove folder',
                      fun:this.removeFromTarget,
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
                  fun:this.downloadFromTarget,
                  args:[`${_path}/${item.name}`]
                }, {
                  id:'remove',
                  innerText:'Remove',
                  fun:this.removeFromTarget,
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
  fetchFile (target, filename){
    switch (channel.currentProtocol) {
      case 'WebSocket':
        command.dispatch(this, 'getFileArrayBuffer', [
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
          ['files', target == 'editor' ? '_fetchFileToEditor' : '_fetchFileToDownload'],
          command.tabUID
        ])
        break
    }
  }
  _getFileArrayBuffer(filename, target, tabUID, targetDevice){
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
      ['files', '__checkHexaGet'],
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
        ['files', '__checkFileGet'],
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

      command.dispatch(this, 'gotFileArrayBuffer', [filename, str, then, tabUID])
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
        ['files', '__checkFileGet'],
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
      command.dispatch(this, 'editorSetValue', [filename, script, tabUID])
    else if (then == 'download')
      command.dispatch(this, 'downloadValue', [filename, script, tabUID])
  }
  _editorSetValue (filename, script, tabUID) {
    if (command.tabUID != tabUID)
      return

    this._dom.filename._dom.value = filename
    this.codemirror.dispatch({
      changes: {from:0, to:this.codemirror.state.doc.length, insert:script}
    })
    document.title = `${filename} - BIPES`
  }
  _downloadValue (filename, script, tabUID) {
    if (command.tabUID != tabUID)
      return
    DOM.prototypeDownload(filename, script)
  }
  /**
   * Get file from ``codemirror`` editor and calls :js:func:`Files.writeToTarget` to upload.
   */
  _editorToTarget () {
    //For codemirror
      let script = this.codemirror.state.doc.toString(),
        filename = this._dom.filename._dom.value
    //let uint8Array = new Uint8Array([...script].map(s => s.charCodeAt(0)))

    this.writeToTarget (filename, script)
  }
  writeToTarget (filename, script) {

    switch (channel.currentProtocol) {
      case 'WebSocket':
        script = script
          .replaceAll(/\t/g, '    ')
        command.dispatch(this, 'putFileArrayBuffer', [
          filename,
          script,
          command.tabUID,
          channel.targetDevice
        ])
        break
      case 'WebSerial':
      case 'WebBluetooth':

        script =  script
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
          ['files','_wroteToTarget'],
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
      ['files', '__checkHexaPut'],
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
        ['files', '__checkFilePut'],
        tabUID
      ])
    }
  }
  __checkFilePut (uint8, cmd, tabUID){
    console.log('Files: file put finished')
    command.dispatch(this, 'putFileArrayBufferEnd', [this.arrayBufferFilename, tabUID])
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
  newFileOnTarget (path){
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
  removeFromTarget (filename){
    this.contextMenu.close()

    let cmd = rosetta.rm.cmd(filename)

    command.dispatch(channel, 'push', [
      cmd,
      channel.targetDevice,
      ['files','_removedFromTarget'],
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
          notification.send(`Folder ${path[1]}/${path[2]} not empty, can't be removed.`)
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
      ['files','_ranOnTarget'],
      command.tabUID
    ])
  }
  _ranOnTarget (str, cmd, tabUID){
    let reg = rosetta.exec.reg
    if (!reg.test(cmd))
      return

    notification.send(`Script ${cmd.match(reg)[1]} finished executing!`)
  }
  downloadFromTarget (filename){
    this.contextMenu.close()

    this.fetchFile('download', filename)
  }
  newFolderOnTarget (path){
    this.contextMenu.oninput({
      title:"New folder's name",
      placeholder:"eg.: important_files"
    }, (input, ev) => {
      ev.preventDefault()
      let folder = input.value.replaceAll(' ', '_').replaceAll('.', '-')

      this.contextMenu.close()

      if (folder == undefined || folder == '')
        return

      let cmd = rosetta.mkdir.cmd(path, folder)

      command.dispatch(channel, 'push', [
        cmd,
        channel.targetDevice,
        ['files','_addedFolderOnTarget'],
        command.tabUID
      ])
    })
  }
  _addedFolderOnTarget (str, cmd, tabUID){
    let reg = rosetta.mkdir.reg
    if (!reg.test(cmd))
      return

    this.listDir(cmd.match(reg)[1], tabUID)
 }
  uploadFileToTarget (path, dom, ev){
    if  (dom.files [0] == undefined)
      return

    let file = dom.files[0]
    let filename = `${path}/${file.name}`.replaceAll(' ', '_')

    let reader = new FileReader()
    reader.onload = (e) => {
        this.writeToTarget (filename, e.target.result)
    };
    reader.readAsArrayBuffer(file)

    this.contextMenu.close()
  }
}

export let files = new Files()
