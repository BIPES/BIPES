"use strict"

import {Tool, API} from '../../base/tool.js'
import {DOM, Animate, ContextMenu} from '../../base/dom.js'
import {command} from '../../base/command.js'
import {storage} from '../../base/storage.js'
import {navigation} from '../../base/navigation.js'

import {notification} from '../notification/main.js'

class Project {
  constructor (){
    this.name = 'project'
    this.currentUID = undefined
    this.current = undefined      // Reference current project
    this.projects = {}
    this.inited = false

    this.cors_token = storage.has('cors_token') ?
                      storage.fetch('cors_token') :
                      storage.set('cors_token', Tool.UID().substring(0,12))

    this.username = storage.has('username') ?
                    storage.fetch('username') :
                    storage.set('username', Msg['AUser'])

    let $ = this.$ = {}

    $.projects = new DOM('span', {className:'listy'})

    $.h2 = new DOM('h2', {innerText:Msg['PageProject']})
    $.wrapper = new DOM('span', {className: "projects"})
      .append([
        new DOM('div', {id:'user-projects'})
        .append([
          new DOM('div', {className:'header'})
            .append([
              new DOM('h3', {innerText:Msg['YourProjects']}),
              new DOM('span').append([
                DOM.prototypeInputFile({
                  id:'upload',
                  className:'icon',
                  innerText: Msg['Import']
                }).onevent('change', this, this.upload),
                new DOM('button', {
                  id:'add',
                  className:'icon text',
                  innerText: Msg['New']
                }).onclick(this, this.new)
              ])
            ]),
          $.projects
        ])
    ])

    $.container = new DOM('div', {className:'container'})
      .append([$.h2, $.wrapper])

    $.contextMenu = new DOM('div')
    this.contextMenu = new ContextMenu($.contextMenu, this)

    $.section = new DOM(DOM.get('section#project'))
      .append([$.container, $.contextMenu])
    $.section.$.classList.add('default')

    // Cross tabs event handler on connecting and disconnecting device
    command.add(this, {
      new: this._new,
      remove: this._remove,
      update: this._update,
      lazyUpdate: this._lazyUpdate
    })

    let keys = storage.keys(/project-(.*)/)
    keys.forEach((key) => {
      this.projects[key] = undefined
    })

    // Init shared projects if server mode
    if (!navigation.isLocal)
      this.shared = new SharedProject(this, $.wrapper)
  }
  _init (){
    if (Object.keys(this.projects).length == 0){
      this.new()
      return
    }
    let key
    if (storage.has('current_project'))
      key = storage.fetch('current_project')
    else
      key = Object.keys(this.projects)[0]

    this.select(key)
  }
  /*
   * Save project to localStorage.
   * @param {string} uid - Project's UID.
   */
  save (uid){
    if (uid == undefined)
      uid = this.currentUID
    this.projects[uid].lastEdited = +new Date()
    this.write(uid)
  }
  /*
   * Create a new project in the platform. If an existing project is provided,
   * will be imported with a new uid, if not, a new empty project.
   * Then dispatches changes.
   * (:js:func:`_emptyProject`) is created.
   * @param {string} ev - On click event.
   * @param {Object/string} obj - Existing project, as parsed object or string.
   */
  new (ev, obj){
    let uid = Tool.UID(),
        project = obj == undefined ? this._emptyProject() :
                  obj instanceof Object ? obj : JSON.parse(obj)

    storage.set(`project-${uid}`, JSON.stringify(project))
    command.dispatch(this, 'new', [uid, project])
    // Select brand new project
    this.select(uid)

    return uid
  }
  /*
   * Include the new project, called by the dispatch of :js:func:`new`.
   * @param {string} uid - Project's uid.
   * @param {Object} project - The project.
   */
  _new (uid, project){
    this.projects[uid] = undefined // unloaded instance

    if (!this.inited)
      return

    this.$.projects.$.insertBefore(
      this.$Card(uid).$,
      this.$.projects.$.firstChild
    )
  }
  remove (uid){
    // Create project if no project will be left
    if (Object.keys(this.projects).length == 1)
      this.select(this.new())

    let obj = this.projects[uid]
    // Unshare if shared
    let shared = obj.project.shared
    if (shared.hasOwnProperty('uid') && shared.uid !== '')
      this.unshare(uid, true)

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
    let child = DOM.get(`[data-uid=${uid}]`, this.$.projects.$)
    this.$.projects.$.removeChild(child)

    if (uid == this.currentUID) {
      this.currentUID = undefined
      this.current = undefined
      if ((Object.keys(this.projects).length > 0)){
        this.select(Object.keys(this.projects)[0])
      }
    }
  }
  load (uid){
    this.currentUID = uid
    this.current = this.projects[uid]
    for (const key in bipes.page) {
      if (typeof window.bipes.page[key].load === "function" && this.projects.hasOwnProperty(uid) && key != 'project') {
        // If don't exist, create empty
        if (this.projects[uid][key] == undefined)
          this.projects[uid][key] = bipes.page[key].empty()
        bipes.page[key].load(this.projects[uid][key])
      }
    }
    return uid
  }
  unload (uid){
    this.projects[uid] = undefined
    this.currentUID = undefined
    this.current = undefined
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
      project:{
        name: Msg['EmptyProject'],
        author: this.username,
        shared:{
          uid:'',
          token:''
        },
        createdAt: +new Date(),
        lastEdited: +new Date()
      }
    }
  }
  init (){
    if (this.inited)
      return

    let project = []
    for (const key in this.projects) {
      project.unshift(this.$Card(key))
    }
    this.$.projects.append(project)

    // Only on a slave tab
    if (this.currentUID != undefined) {
      let child = DOM.get(`[data-uid=${this.currentUID}]`, this.$.projects.$)
      child.classList.add('on')
      DOM.get('#name', child).disabled = false
    }
    if (this.hasOwnProperty('shared'))
      this.shared.init()

    this.inited = true
  }
  select (uid){
    if (uid == this.currentUID || !this.projects.hasOwnProperty(uid))
      return

    if (this.currentUID != undefined){
      if (this.inited) {
        let child = DOM.get(`[data-uid=${this.currentUID}]`, this.$.projects.$)
        child.classList.remove('on')
        DOM.get('#name', child).disabled = true
      }
      this.unload(uid)
    }

    let proj = storage.fetch(`project-${uid}`)
    this.projects[uid] = JSON.parse(proj)

    storage.set('current_project', this.load(uid))

    if (this.inited){
      let child2 = DOM.get(`[data-uid=${this.currentUID}]`, this.$.projects.$)
      child2.classList.add('on')
      DOM.get('#name', child2).disabled = false
    }
  }
  deinit (){
    if(!this.inited)
      return

    if (this.hasOwnProperty('shared'))
      this.shared.deinit()
  }
  /*
   * Creates a DOM project card from temporary instance, just to read some
   * properties.
   * @param {string} uid - Project UID.
   */
  $Card (uid){
    let item = JSON.parse(storage.fetch(`project-${uid}`))

    let _shared_class = item.project.shared.uid != '' ? 'shared' : ''

    return new DOM('button', {className:_shared_class, uid: uid})
      .append([
        new DOM('div', {className:'row'}).append([
          new DOM('h4', {
            id:'name',
            innerText: item.project.name
          }),
          new DOM('div', {
            id:'sharedUID',
            innerText:item.project.shared.uid
          })
        ]),
        new DOM('div', {className:'row'}).append([
          new DOM('div', {
            id:'lastEdited',
            innerText:Tool.prettyEditedAt(item.project.lastEdited)
          })
        ])
     ])
     .onclick(this, this.select, [uid])
     .onevent('contextmenu', this, (ev) => {
       ev.preventDefault()
       let actions = [
         {
           id:'download',
           innerText:Msg['Download'],
           fun:this.download,
           args:[uid]
         }
       ]
       if (uid == this.currentUID) {
         let obj = this.projects[uid]
         actions.unshift({
           id:'rename',
           innerText:Msg['Rename'],
           fun:this.rename,
           args:[uid, obj.project.name]
         },
         {
           id:'remove',
           innerText:Msg['Delete'],
           fun:this.remove,
           args:[uid]
         })

         if (!navigation.isLocal) {
           if (obj.project.shared.hasOwnProperty('uid') && obj.project.shared.uid !== '')
             actions.unshift({
               id:'share',
               innerText:Msg['UpdateShared'],
               fun:this.updateShared,
               args:[uid]
             },
             {
               id:'unshare',
               innerText:Msg['Unshare'],
               fun:this.unshare,
               args:[uid]
             })
           else
             actions.unshift({
               id:'share',
               innerText:Msg['Share'],
               fun:this.share,
               args:[uid]
             })
           }
         }
         this.contextMenu.open(actions, ev)
       })
  }
  /*
   * Write project from current scope to localStorage.
   * @param {string} uid - project's uid.
   */
  write (uid){
    uid = uid == undefined ? this.currentUID : uid
    storage.set(`project-${uid}`, JSON.stringify(this.projects[uid]))
  }
  /*
   * Rename a project.
   * @param {string} uid - Project's uid
   * @param {string} name - Old project's name
   */
  rename (uid, name){
    this.contextMenu.oninput({
      title:Msg['ProjectName'],
      placeholder:name,
      value:name
    }, (input, ev) => {
      ev.preventDefault()
      let name = input.value

      this.contextMenu.close()

      if (name == undefined || name == '')
        return
      let obj = {...this.projects[uid].project}
      obj.name = name

      // Update outside the update context, since soft affects the project list
      let item = {name:obj.name, shared:obj.shared, lastEdited:obj.lastEdited}
      command.dispatch(this, 'lazyUpdate', [uid, item])
      // Now send actual update action
      this.update({project:obj}, uid)
    })
  }
  /*
   * Lazy upodate project DOM card with name, lastEdited and shared status.
   * @param {string} uid - Project's uid
   * @param {string} obj - Object with name, lastEdited and shared.
   */
  _lazyUpdate (uid, obj){
    DOM.lazyUpdate(this.$.projects.$, uid, {
      name: obj.name,
      lastEdited: Tool.prettyEditedAt(obj.lastEdited),
      sharedUID: obj.shared.uid
    })
    let $ = DOM.get(`[data-uid='${uid}']`, this.$.projects)
    if (obj.shared.uid != '')
     $.classList.add('shared')
    else
     $.classList.remove('shared')
  }
  /*
   * Update project data on all tabs then from current scope write to localStorage.
   * @param {Object} data - Changed project data
   * @param {string} uid - Project's uid
   */
  update (data, uid){
    uid = uid == undefined ? this.currentUID : uid
    // Update lastEdited
    if (!data.hasOwnProperty('project'))
      data.project = {...this.projects[uid].project}
    data.project.lastEdited = +new Date()

    command.dispatch(this, 'update', [uid, data, command.tabUID])
    // Update localStorage once
    this.write(uid)
  }
  /*
   * Update project data if the current one is the same as the dispatched change.
   * @param {string} uid - Project's uid
   * @param {string} data - Changed project data
   * @param {string} tabUID - Source tab UID.
   */
  _update (uid, data, tabUID){
    // Update only the current project, since the others are not in memory.
    if (uid !== this.currentUID)
      return

    for (const key in data){
      if (key != 'load')
        this.projects[uid][key] = data[key]
    }
    if (data.hasOwnProperty('load') && data.load == false)
      return
    for (const key in data){
      switch (key) {
        case 'project':
          break
        default:
          for (const key in data){
            if (typeof window.bipes.page[key].load == 'function' && this.projects.hasOwnProperty(uid) && key != 'project')
              window.bipes.page[key].load(data[key], tabUID)
        }
      }
    }
  }
  /**
   * Get the most recent project by last edited date.
   */
  _mostRecent (){
    let timestamp = 0,
        uid
    for (const key in this.projects) {
      if (this.projects[key].project.lastEdited > timestamp)
        timestamp = this.projects[key].project.lastEdited,
        uid = key
    }
    return uid
  }
  /**
   * Download a project to the computer
   * @param {string} uid - Project uid
   */
  download (uid){
    let proj = storage.fetch(`project-${uid}`)
    // Strip shared metadata.
    proj = proj.replace(/("shared":{"uid":")(.*?)(","token":")(.*?)("})/g,'$1$3$5')
    // Get name
    let name = proj.match(/{"project":{"name":"(.*?)"/)[1]
    DOM.prototypeDownload(`${name}.bipes.json`,proj)
    this.contextMenu.close()
  }
  /**
   * Share a local project.
   * @param {string} uid - Project uid
   */
  share (uid){
    this.contextMenu.close()
    if (!this.hasOwnProperty('shared'))
      return

    let item = this.projects[uid]
    API.do('project/cp', {
      cors_token:this.cors_token,
      data:item
      }).then(obj => {
      let proj = {...item.project}
      proj.shared = {
        uid:obj.uid,
        token:obj.token
      }
      // Update outside the update context, since soft affects the project list
      let _obj = {name:proj.name, shared:proj.shared, lastEdited:proj.lastEdited}
      command.dispatch(this, 'lazyUpdate', [uid, _obj])
      // Now send actual update action
      this.update({project:proj}, uid)
      this.shared.$.projects.$.insertBefore(
        this.shared.$Card({
          uid:obj.uid,
          name:proj.name,
          author:proj.author,
          lastEdited:proj.lastEdited,
        }).$,
        this.shared.$.projects.$.firstChild
      )
     }).catch(e => {console.error(e)})
  }
  /**
   * Update a shared project with the local project.
   * @param {string} uid - Project UID.
   */
  updateShared (uid){
    this.contextMenu.close()
    let item = this.projects[uid]
    let proj = item.project
    if (!this.hasOwnProperty('shared'))
      return

    API.do('project/w', {
      cors_token:this.cors_token,
      data:item
    }).then(obj => {
      // Server returns uid
      if (obj.uid !== proj.shared.uid)
        return
      // Update outside the update context, since soft affects the project list
      let _obj = {name:proj.name, shared:proj.shared, lastEdited:proj.lastEdited}
      command.dispatch(this, 'lazyUpdate', [uid, _obj])
      // Now send actual update action
      this.update({project:proj}, uid)
    }).catch(e => {console.error(e)})
  }
  /**
   * Unshare a local project.
   * @param {string} uid - Project UID.
   */
  unshare (uid){
    this.contextMenu.close()
    let item = this.projects[uid]
    let proj = item.project
    if (!this.hasOwnProperty('shared'))
      return
    API.do('project/rm', {
      uid:proj.shared.uid,
      token:proj.shared.token,
      cors_token:this.cors_token
    }).then(obj => {
      // Server returns uid
      if (obj.uid !== proj.shared.uid)
        return
      try {
        let _proj = {...item.project}
        _proj.shared = {
          uid:'',
          token:''
        }
        // Update outside the update context, since soft affects the project list
        let _obj = {name:_proj.name, shared:_proj.shared, lastEdited:_proj.lastEdited}
        command.dispatch(this, 'lazyUpdate', [uid, _obj])
        // Now send actual update action
        this.update({project:_proj}, uid)
      } catch(e){}
      let dom = DOM.get(`[data-uid='${obj.uid}']`, this.shared.$.projects)
      if (dom !== null)
        dom.remove()
    }).catch(e => {console.error(e)})
  }
  /*
   * Upload a project to the platform.
   * @param {string} ev - Input on change event, contains the input node as target.
   */
  upload (ev){
    if  (ev.target.files [0] == undefined)
      return

    let file = ev.target.files[0]

    let reader = new FileReader()
    reader.onload = (e) => {
      this.new(ev, e.target.result)
    }
    reader.readAsText(file)
  }
}
/* Show shared projects */
class SharedProject {
  constructor (parent, dom){
    this.parent = parent
    // This is a lazy object and is not in sync with the DOM list.
    this.projects = []
    this.inited = false
    this.firstInited = false

    let $ = this.$ = {}

    $.projects = new DOM('span', {className:'listy'})

    $.fromHash = new DOM('div', {id:'ask-shared-project'})
    $.fromHashListy = new DOM('span', {className:'listy'})

    dom.append([
      new DOM('div', {id:'shared-projects'})
        .append([
          new DOM('div', {className:'header'})
            .append([
              new DOM('h3', {innerText:Msg['SharedProjects']})
          ]),
        $.projects,
        new DOM('span', {className:'listy more-button'})
          .append([
            new DOM('button', {title:Msg['LoadMore']})
              .append([new DOM('div', {className:'button icon'})])
              .onclick(this, this.fetchAutoFrom)
        ])
      ]),
      $.fromHash
        .append([
          new DOM('div', {className:'header'})
            .append([
              new DOM('h3', {innerText:Msg['ProjectFromURL']}),
              new DOM('span', {innerText:Msg['ClickToImport']})
            ]),
          $.fromHashListy
        ])
    ])

    // Check for project to import
    if (window.location.hash){
      this.fromHash(window.location.hash.substring(1))
      window.location.hash = ''
    }
  }
  init (){
    if (!this.firstInited) {
      this.fetchSome({from: +new Date(), limit:5})
      this.firstInited = true
    }
    if (this.inited)
      return

    let doms = []
    this.projects.forEach(proj => doms.unshift(this.$Card(proj)))
    this.$.projects.append(doms)

    this.inited = true
  }
  deinit (){
    if (!this.inited)
      return

    this.inited = false
  }
  /*
   * Fetch some shared projects.
   * @param{Object} args - Arguments to pass to the project ls command,
   *                       send empty {} object to fetch latest batch.
   * @param{bool} notify- True to throw a notification.
   */
  async fetchSome (args, notify){
    API.do('project/ls', args)
      .then(obj => {
        let doms = []
        // Push unique values and also return an array of these unique
        Tool.pushUnique(this.projects, obj.projects, 'uid')
          .forEach(unique => doms.unshift(this.$Card(unique)))
        this.$.projects.append(doms)
        if (doms.length == 0 && notify === true)
          notification.send(`${Msg['PageProject']}: ${Msg['NoOlderProjects']}.`)
      })
      .catch(e => {console.error(e)})
  }
  /*
   * Clone a shared project.
   * @param{string} uid - shared project unique public id.
   */
  async clone (uid){
   API.do('project/o', {uid:uid})
    .then(obj => {
      if (obj.hasOwnProperty('projects'))
        this.parent.new(undefined, obj.projects[0].data)
      else
        notification.send(`${Msg['PageProject']}: ${Msg['SharedProjectDoesNotExist']}.`)
    })
    .catch(e => {console.error(e)})
  }
  /*
   * Automatically fetch a new from to lastEdited interval.
   */
  fetchAutoFrom (){
    // Get oldest edited project
    let obj = Tool.getMin(this.projects, 'lastEdited')
    if (obj !== null)
      this.fetchSome({from:obj.lastEdited, limit:10}, true)
    else
      this.fetchSome({from:+new Date(), limit:10}, true)
  }
  /**
   * Creates a DOM shared project card
   */
  $Card (item){
    return new DOM('button', {uid: item.uid})
      .append([
        new DOM('div', {className:'row'}).append([
          new DOM('h4', {
            id:'name',
            innerText: item.name
          }),
          new DOM('div', {
            id:'uid',
            innerText: item.uid
          })
        ]),
        new DOM('div', {className:'row'}).append([
          new DOM('span', {
            id:'author',
            innerText: `${Msg['By']} ${item.author}`
          }),
          new DOM('div', {
            id:'lastEdited',
            innerText: Tool.prettyEditedAt(item.lastEdited)
          })
        ])
      ])
      .onclick(this, this.clone, [item.uid])
  }
  /**
   * Import project using URL hash.
   * @param{string} uid - shared project unique public id.
   */
  fromHash (uid){
   API.do('project/o', {uid:uid})
    .then(obj => {
      if (obj.hasOwnProperty('projects')){
        let dom = this.$Card(obj.projects[0])
        this.$.fromHashListy.append(dom)
        this.$.fromHash.classList.add('on')
        this.parent.nav.click()
        dom.focus()
      } else
        notification.send(`${Msg['PageProject']}: ${Msg['SharedProjectDoesNotExist']}.`)
    })
    .catch(e => {console.error(e)})
  }
}

export let project = new Project()
