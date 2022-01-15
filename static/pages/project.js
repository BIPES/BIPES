"use strict"

import {Tool} from '../base/tool.js'
import {DOM, Animate, ContextMenu} from '../base/dom.js'
import {command} from '../base/command.js'
import {storage} from '../base/storage.js'

class Project {
  constructor (){
    this.name = 'project'
    this.currentUID = undefined
    this.projects = {}
    this.inited = false

    let $ = this._dom = {}

    $.projects = new DOM('span', {className:'listy'})

    $.h2 = new DOM('h2', {innerText:"Projects"})
    $.wrapper = new DOM('span', {className: "projects"})
      .append([
        new DOM('div', {id:'user-projects'})
        .append([
          new DOM('div', {className:'header'})
            .append([
              new DOM('h3', {innerText:'Your projects'}),
              new DOM('button', {
                id:'add',
                className:'icon text',
                innerText: "New"
              }).onclick(this, this.new)
            ]),
          $.projects
        ])
    ])

    $.container = new DOM('div', {className:'container'})
      .append([$.h2, $.wrapper])

    $.contextMenu = new DOM('div')
    this.contextMenu = new ContextMenu($.contextMenu, this)

    $.section = new DOM(DOM.get('section#project'))
      .append([$.container._dom, $.contextMenu])
    $.section._dom.classList.add('default')

    // Cross tabs event handler on connecting and disconnecting device
    command.add(this, {
      new: this._new,
      remove: this._remove,
      update: this._update
    })

    let keys = storage.keys(/project-(.*)/)
    keys.forEach((key) => {
      let proj = storage.fetch(`project-${key}`)
      try {
       this.projects[key] = JSON.parse(proj)
      } catch (e) {
        console.error(e)
      }
    })

    if (Object.keys(this.projects).length == 0)
      this.new()
  }
  _init (){
    // Get most recent project
    let uid = this._mostRecent()

    this.select(uid)
  }
  save (uid){
    if (uid == undefined)
      uid = this.currentUID
    this.projects[uid].lastEdited = +new Date()
    let json = JSON.stringify(this.projects[uid])

    storage.set(`project-${uid}`, json)
  }
  new (){
    let uid = Tool.UID(),
        project = this._emptyProject()


    command.dispatch(this, 'new', [uid, project])
    // Update localStorage once
    storage.set(`project-${uid}`, JSON.stringify(project))

    return uid
  }
  _new (uid, project){
    this.projects[uid] = project

    if (!this.inited)
      return

    this._dom.projects._dom.insertBefore(
      this._domCard(uid, this.projects[uid])._dom,
      this._dom.projects._dom.firstChild
    )
  }
  remove (uid){
    // Create project if no project will be left
    if (Object.keys(this.projects).length == 1)
      this.select(this.new())

    command.dispatch(this, 'remove', [uid])
    // Update localStorage once
    storage.remove(`project-${uid}`)

    this.contextMenu.close()
  }
  _remove (uid){
    delete this.projects[uid]

    if (!this.inited)
      return

    // Must find child to work between tabs
    let child = DOM.get(`[data-uid=${uid}]`, this._dom.projects._dom)
    this._dom.projects._dom.removeChild(child)

    if (uid == this.currentUID) {
      this.currentUID = undefined
      if ((Object.keys(this.projects).length > 0)){
        this.select(this._mostRecent())
      }
    }
  }
  load (uid){
    this.currentUID = uid

    for (const key in window.bipes.page) {
      if (typeof window.bipes.page[key].load == 'function' && this.projects.hasOwnProperty(uid) && key != 'project')
        window.bipes.page[key].load(this.projects[uid][key])
    }
    return uid
  }
  unload (uid){

  }
  set (obj, uid){
    if (uid == undefined)
      uid = this.currentUID
    for (const key in obj){
      this.projects[uid][key] = obj[key]
    }
  }
  _emptyProject (){
    return {
      createdAt: +new Date(),
      lastEdited: +new Date(),
      name: 'Empty project',
      device: {
        target:'esp32'
      },
      blocks: {
        xml:'<xml xmlns="https://bipes.net.br/ide"></xml>'
      },
      files:{
        tree:{
          name:'',
          files:[{
              name:'script.py',
              script:"# Create your script here"
            }]
          }
        }
    }
  }
  init (){
    if (this.inited)
      return

    let project = []
    for (const key in this.projects) {
      project.unshift(this._domCard(key, this.projects[key]))
    }
    this._dom.projects.append(project)

    // Only on a slave tab
    if (this.currentUID != undefined) {
      let child = DOM.get(`[data-uid=${this.currentUID}]`, this._dom.projects._dom)
      child.classList.add('on')
      DOM.get('#name', child).disabled = false
    }
    this.inited = true
  }
  select (uid){
    if (uid == this.currentUID || !this.projects.hasOwnProperty(uid))
      return

    if (this.currentUID != undefined){
      this.unload(uid)
      if (this.inited) {
        let old_uid = this.currentUID
        let child = DOM.get(`[data-uid=${old_uid}]`, this._dom.projects._dom)
        child.classList.remove('on')
        DOM.get('#name', child).disabled = true
      }
    }
    this.load(uid)

    if (this.inited){
      let child2 = DOM.get(`[data-uid=${this.currentUID}]`, this._dom.projects._dom)
      child2.classList.add('on')
      DOM.get('#name', child2).disabled = false
    }
  }
  deinit (){
    if(!this.inited)
      return

  }
  // Creates a DOM notificaton card
  _domCard (uid, item){
    let input = new DOM('input', {
            id:'name',
            value: item.name,
            placeholder: "Project name",
            disabled: true
          })
    input.onevent('change', this, (uid, dom) => {
      if (dom.value == '')
        return

      this.update({name:dom.value}, uid)
    }, [uid, input._dom]);
    return new DOM('button', {uid: uid})
      .append([
        new DOM('div').append([
          input,
          new DOM('div', {
            id:'lastEdited',
            innerText: new Date(item.lastEdited).toLocaleString()
          })
        ])
        .onclick(this, this.select, [uid])
        .onevent('contextmenu', this, (ev) => {
          ev.preventDefault()
          this.contextMenu.open([
            {
              id:'share',
              innerText:'Share',
              fun:this.share,
              args:[uid]
            },
            {
              id:'download',
              innerText:'Download',
              fun:this.download,
              args:[uid]
            },
            {
              id:'remove',
              innerText:'Delete',
              fun:this.remove,
              args:[uid]
            }
          ], ev)
        })
      ])
  }
  /*
   * Write project from current scope to localStorage
   * @param {String} uid - project's uid
   */
  write (uid){
    uid = uid == undefined ? this.currentUID : uid
    storage.set(`project-${uid}`, JSON.stringify(this.projects[uid]))
  }
  /*
   * Update project data on all tabs then from current scope write to localStorage
   * @param {Object} data - changed project data
   * @param {String} uid - project's uid
   */
  update (data, uid){
    uid = uid == undefined ? this.currentUID : uid

    command.dispatch(this, 'update', [uid, data, command.tabUID])
    // Update localStorage once
    storage.set(`project-${uid}`, JSON.stringify(this.projects[uid]))
  }
  _update (uid, data, tabUID){
    for (const key in data){
      if (key != 'load')
        this.projects[uid][key] = data[key]
    }
    if (data.hasOwnProperty('load') && data.load == false)
      return

    for (const key in data){
      switch (key) {
        case 'name':
          if (this.inited) {
            let name = DOM.get(`[data-uid=${uid}] #name`, this._dom.projects._dom)
            name.value = data[key]
          }
          break
        default:
          if (uid == this.currentUID){
            for (const key in data){
              if (typeof window.bipes.page[key].load == 'function' && this.projects.hasOwnProperty(uid) && key != 'project')
                window.bipes.page[key].load(data[key], tabUID)
          }
        }
      }
    }
  }
 /*
  * Get the most recent project by last edited date
  */
  _mostRecent (){
    let timestamp = 0,
        uid
    for (const key in this.projects) {
      if (this.projects[key].lastEdited > timestamp)
        timestamp = this.projects[key].lastEdited,
        uid = key
    }
    return uid
  }
 /*
  * Download a project to the computer
  * @param {string} uid - project uid
  */
  download (uid){
    let proj = this.projects[uid]
    DOM.prototypeDownload(`${proj.name}.bipes.json`, JSON.stringify(proj))
    this.contextMenu.close()
  }
  share (uid){

  }
}

export let project = new Project()
