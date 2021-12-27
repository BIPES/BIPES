"use strict";

import {DOM, ContextMenu, Animate} from '../base/dom.js'
export {Files}

class Files {
  constructor (){
    this.fileOnTarget = [{name:'', files:[]}] // Files stored on target device, default depth 1 (root)
    this.fileOnHost   = {} // Files stored on host device

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
      _dom.value = str.replaceAll(' ', '_')
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

    $.section.append([$.container._dom, $.contextMenu])

    // Codemirror
    this.codemirror = CodeMirror($.codemirror._dom)

    command.add(this, {
      buildFileTree: this._buildFileTree,
      editorSetValue: this._editorSetValue,
      downloadValue: this._downloadValue
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
  fetchFile (target, filename){
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
      let script = this.codemirror.state.doc.toString()
        filename = this._dom.filename._dom.value
    let uint8Array = new Uint8Array([...script].map(s => s.charCodeAt(0)))

    this.writeToTarget (filename, uint8Array)
  }
  writeToTarget (filename, uint8Array) {
    let decoderUint8 =  new TextDecoder().decode(uint8Array)
      .replaceAll(/\\/g, '\\\\')
      .replaceAll(/(\r\n|\r|\n)/g, '\\r')
      .replaceAll(/'/g, "\\'")
      .replaceAll(/"/g, '\\"')
      .replaceAll(/\t/g, '    ')



    let cmd = channel.pasteMode(
      rosetta.write.cmd(filename, decoderUint8)
    )

    command.dispatch(channel, 'push', [
      cmd,
      channel.targetDevice,
      ['files','_wroteToTarget'],
      command.tabUID
    ])
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
        new Uint8Array([...script].map(s => s.charCodeAt(0)))
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
          page.notification.send(`Folder ${path[1]}/${path[2]} not empty, can't be removed.`)
          break
        default:
          page.notification.send(`Could not remove folder ${path[1]}/${path[2]}.`)
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

    page.notification.send(`Script ${cmd.match(reg)[1]} finished executing!`)
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
        let data = new Uint8Array(e.target.result)
        this.writeToTarget (filename, data)
    };
    reader.readAsArrayBuffer(file)

    this.contextMenu.close()
  }
}
