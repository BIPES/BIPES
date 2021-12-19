"use strict";

import {DOM, Animate} from '../base/dom.js'
export {Files}

class Files {
  constructor (){
    this.fileOnTarget = [{name:'', files:[]}] // Files stored on target device, default depth 1 (root)
    this.fileOnHost   = {} // Files stored on host device

    let $ = this._dom = {}

    $.uploadToTarget = DOM.prototypeInputFile({
      id:'upload',
      className:'icon'
    })
    $.fileOnTarget = new DOM('span')
    $.detailsFileOnTarget = DOM.prototypeDetails({
      id:'fileOnTarget',
      innerText: "On device",
      onclick: {self:this, fun:this.listDir, args:['/']}
    })
    .append($.fileOnTarget)


    $.pane = new DOM('div', {id:'pane'})
      .append([
        new DOM('div', {className:'header'})
          .append([
            new DOM('h2', {innerText:'File manager'}),
            $.uploadToTarget
          ]),
        new DOM('div', {id:'projectTree'}).append($.detailsFileOnTarget)])

    $.filename = new DOM('input', {
      id:'filename',
      autocomplete:'off',
      placeholder:'Filename'})
    $.saveToTarget = new DOM('button', {
      id:'upload',
      className:'icon text',
      innerText:'Write'
    })

    $.codemirror = new DOM('textarea', {id:'codemirror'})

    $.editor = new DOM('div', {id:'editor'})
      .append([
        new DOM('div', {id:'header'}).append([$.filename, $.saveToTarget]),
        $.codemirror
        ])

    $.container = new DOM('div')
      .append([$.pane, $.editor])

    DOM.get('section#files').append($.container._dom)

    // Codemirror
    this.codemirror = CodeMirror.fromTextArea($.codemirror._dom, {
      mode: "python",
      lineNumbers: true,
      theme: 'base16-dark'
    });

    command.add(this, {
      buildFileTree: this._buildFileTree
    })
  }
  init (){
    if (this.inited)
      return
    this.codemirror.setValue(new Array(9).fill('\r\n').join(''))
    setTimeout(() => {
      this.codemirror.setValue('')
    }, 10)
    this.inited = true
  }
  deinit (){
    if (!this.inited)
      return
    this.inited = false
  }
  /**
   * Resize the ``xterm.js`` terminal, triggered by ``window.onresize`` event on
   * on base/navigation.js.
   */
  resize (){
     if(!this.inited)
      return

    let cols, rows
    if (navigation.portrait) {
      if (navigation.current[0] == 'files')
        rows = (window.innerHeight - (3*16))
      else
        rows = (window.innerHeight/2 - (3*16))
      cols = (window.innerWidth - (18.5*16))
    } else {
      if (navigation.current[0] == 'files')
        cols = (window.innerWidth - (18.5*16))
      else
        cols = ((window.innerWidth)/2 - (17*16))
      rows = (window.innerHeight - (3*16))
    }
    this.codemirror.setSize(cols, rows)
  }
  listDir (path, dom, ev){
    ev.preventDefault()
    console.log(dom)
    if (dom.id != "fileOnTarget"){
      //dom.open = !dom.open
      if (dom.open) {
        dom.open = false
        return
      }
    }
    if (dom.open) {
      return
    }

    path = (path == undefined) ? '/' : path
    //os.chdir('/')
    //os.getcwd()
    let cmd = `import os; os.listdir('${path}')\r\n`
    command.dispatch(channel, 'push', [
      cmd,
      channel.targetDevice,
      ['files','_fetchRecursive'],
      command.tabUID
    ])
  }
  _fetchRecursive (str, cmd, tabUID) {
    let reg_cmd = /\import os; os.listdir\('(.*)'\)/
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
              onclick: {self:this, fun:this.listDir, args:[`/${path.join('/')}`]}
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
        } else
          doms.push(item.dom = new DOM('div',{
              innerText:item.name,
              className:'listedFile'
            }).onclick(this, () => {
              console.log(`${path.join('/')}/${item.name}`)
            })
          )
      })

      dom.append(doms)

      return
    },
    path = []

    this._dom.fileOnTarget.removeChilds()
    _iterate(this.fileOnTarget[0].files, this._dom.fileOnTarget,path)

    this._dom.detailsFileOnTarget._dom.open = true
  }
}
