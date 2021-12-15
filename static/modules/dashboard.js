"use strict";

import {DOM, Animate} from '../base/dom.js'
import {Actions} from './dashboard_action.js'
import {MJPEG} from './dashboard_plugin.js'
export {Dashboard}

class Dashboard {
	constructor (dom, dom_grid) {
	  this.currentWorkspace
		this.workspaces = []
		this.inited = false

		let $ = this._dom = {}

		$.dashboard = new DOM('div', {id:'dashboard'})
		$.grid = new DOM('div', {id:'grid'})
		$.workspaces = new DOM('div', {id:'workspaces'})
		$.addMenu = new DOM('div', {id:'addMenu', className: 'popup'})
		$.urlPopup = new DOM('div', {id: 'urlPopup', className: 'popup'})

		$.dashboard.append ([
			$.grid,
			$.workspaces,
			$.addMenu,
			$.urlPopup
			])

		DOM.get('section#dashboard').append ($.dashboard._dom)

		$.add = new DOM('div', {
			className:'button icon notext',
			id:'add',
			title:'Adicionar tela'
			})
			.onclick(this, this.add);
		$.edit = new DOM('div', {
		  id:'edit',
		  className:'button icon notext',
		  title:'Editar workspaces'
		  })
		  .onclick(this, this.edit)
		$.addPlugin = new DOM('button', {
			'className':'icon notext',
			'id':'add',
			'title':'Adicionar widget'
			})

		$.container = new DOM('span', {id:'nav-workspaces'})
		$.wrapper = new DOM('span', {className:'wrapper'}).append([$.add,$.edit])
		$.workspaces.append([$.container, $.wrapper]);

		this.grid = new Grid($.grid)
    $.grid.append($.addPlugin)

		this.urlPopup = new UrlPopup($.urlPopup, this.grid)

		this.addMenu = new AddMenu($.addMenu, this.urlPopup)
		$.addPlugin.onclick (this.addMenu, this.addMenu.open)

		// Cross tabs event handler on adding/removing workspaces
    command.add(this, {
        add: this._add,
        remove: this._remove
      })
	}
	init (){
	  if (this.inited)
	    return

	 	this.restore()
	 	if (this.currentWorkspace == undefined)
	   	if (storage.fetch('currentWorkspace'))
		    this.show(storage.fetch('currentWorkspace'))
	    else
  		  storage.set('currentWorkspace', this.add())
    else
      this.show(this.currentWorkspace)
	}
	deinit (){
	  if (!this.inited)
	    return
    this.grid.deinit(this.currentWorkspace)
    this.workspaces.forEach((item) => {
	    item._dom.remove()
    });
    this.workspaces = []
    this.currentWorkspace = undefined
    this.inited = false
	}
	restore (){
		storage.fetchAll(/workspace:(.*)/)
		  .forEach(key => {
		    this.include(key,true)
		  })
	}
	add (){
		let uid = DOM.UID ()

		command.dispatch(this, 'add', [uid])
    // Update StorageBroker once
		storage.set(`workspace:${uid}`)
    // Show in the curret tab
		this.show(uid)

		return uid
	}fetchAll
	_add (uid){
		this.include(uid)
	}
	edit (){
	  DOM.switchState(this._dom.dashboard._dom)
	  DOM.switchState(this._dom.grid._dom, 'edit')
	}
	include (uid, restore){
	  if (!this.inited && restore == undefined)
	    return

		let h3 = new DOM('h3', {'innerText':''});
		h3.onclick(this, (uid) => {
  		storage.set('currentWorkspace', uid)
		  this.show(uid)
		}, [uid]);
		let remove = new DOM('button', {
			'className':'icon notext',
			'id':'remove',
			'title':'Remover tela'
			});
		remove.onclick(this, this.remove, [uid]);
		let workspace = new DOM('div', {uid:uid})
			.append([
				h3,
				remove
			]);
		this.workspaces.push(workspace)

		let $ = this._dom
		$.container.append (workspace)
	}
	remove (uid){
	  command.dispatch(this, 'remove', [uid])

		this.grid.purge(uid)
		storage.remove (`workspace:${uid}`)

    // Check if removed workspace is currentWorkspace
    // if so set another
    if (storage.fetch('currentWorkspace') == uid) {
      storage.set('currentWorkspace',
        storage.fetch(/workspace:(.*)/))
      }
		// Check if there is no workspace anymore
		if (this.workspaces.length == 0) {
		  storage.set('currentWorkspace', this.add())
		}
	}
	_remove (uid){
    if (!this.inited)
      return

		this.workspaces.forEach((item, index) => {
			if (item._dom.dataset.uid == uid) {
				item._dom.remove()
				this.workspaces.splice(index,1)
			}
		})

		if (this.currentWorkspace == uid){
			this.grid.deinit(this.currentWorkspace);
      if (this.workspaces.length > 0)
        this.show(this.workspaces[0]._dom.dataset.uid)
		}
	}
	show (uid){
		if (this.inited) {
			let old_uid = this.grid.deinit(this.currentWorkspace)
			this.workspaces.forEach((item) => {
				if(item._dom.dataset.uid == old_uid)
					item._dom.className = ''
				})
		}
		this.inited = true
    this.currentWorkspace = uid
		this.grid.restore(uid)
		this.workspaces.forEach((item) => {
			if(item._dom.dataset.uid == uid)
				item._dom.className = 'on'
		})
	}
}

class Grid {
	constructor (dom){
		this.streams = []
		this.players = []
		this.uid_streams = []
		this.editingStream = '';
		this.filler = []

		let $ = this._dom = {}
		$.grid = dom
		$.actions = new DOM('div', {'id':'actions'})
		$.container = new DOM('span')
		$.grid.append([$.container, $.actions])

		this.actions = new Actions($.actions)

		command.add(this, {
		  add: this._add,
		  remove: this._remove
		})
	}
	restore (wksp_uid){
		if (storage.has(`workspace:${wksp_uid}`)){
			this.uid_streams = JSON.parse (storage.fetch(`workspace:${wksp_uid}`))
			this.uid_streams.forEach ((uid) => {
				if (storage.fetch(`stream:${uid}`)) {
				  let data = JSON.parse(storage.fetch(`stream:${uid}`))
					this.include (uid, data, modules.dashboard.currentWorkspace)
				} else
					this.uid_streams.splice(this.uid_streams.indexOf(uid),1)
			})
		}
		this._filler(true)
	}
	add (plugin, arg){
		if (this.uid_streams.length >= 9)
			return false

		let uid = DOM.UID (),
        request = new Request (arg)
		fetch(request)
			.then(response => response.json())
			.then(data => {
				if(!data.hasOwnProperty('url'))
					throw 'Not a camera'


        command.dispatch(['dashboard', this], 'add', [uid, data, modules.dashboard.currentWorkspace])

        // Update StorageBroker once
				storage.set(`stream:${uid}`,JSON.stringify(data))
        // Update streams inside workspace
		    storage.set(`workspace:${modules.dashboard.currentWorkspace}`, JSON.stringify(this.uid_streams))
			})
			.catch((error) => {
			  console.log(error)
				modules.notification.send("Stream não encontrada.", `Stream "${arg}" não encontrada.`);
			})
	}
	_add (uid, data, wksp){
		this.include(uid, data, wksp)
		this._filler(true)
	}
	include (uid, data, wksp){
	  if (modules.dashboard.currentWorkspace != wksp)
	    return

		this.uid_streams.push(uid)

		let video = new DOM('img')
		let remove = new DOM('button', {
			'className':'icon notext',
			'id':'discard',
			'title':'Remover tela'
			})
		remove.onclick(this, this.remove, [uid]);
		let stream = new DOM('div', {'id':uid})
			.append([
				remove,
				video
			])
		  .onclick(this, this.edit, [uid, video])
		this.streams.push(stream)

		let $ = this._dom
		$.container.append (stream)

		//let index = this.players.length;
		//this.players.push (dashjs.MediaPlayer().create())
		//this.players [index].uid = uid
		//this.players [index].updateSettings({ 'streaming': { 'lowLatencyEnabled': true } })

		this.players.push (new MJPEG (uid, data.manifest, video._dom).stream ())
		//this.players [index].initialize(video._dom, data.manifest, true)
		//this.applyParameters(this.players [index])
	}
	remove (uid){
    command.dispatch(['dashboard', this], 'remove', [uid, modules.dashboard.currentWorkspace])

		storage.remove(`stream:${uid}`)
		storage.set(`workspace:${modules.dashboard.currentWorkspace}`, JSON.stringify(this.uid_streams))
	}
	_remove (uid, wksp){
	  if (modules.dashboard.currentWorkspace != wksp)
	    return

		if (this.editingStream == uid) {
  		this._dom.grid._dom.classList.remove('on')
			this.editingStream = '';
			setTimeout(() => {this.actions.deinit()},250)
		}

		this.players.forEach((player, index) => {
			if (player.uid == uid)
				player.destroy()
			this.players.splice(index,1)
		})
		this.streams.forEach((item, index) => {
			if (item._dom.id == uid) {
				item._dom.remove()
				this.streams.splice(index,1)
			}
		})
		this.uid_streams.forEach((item, index) => {
			if (item == uid) {
				this.uid_streams.splice(index,1)
			}
		})
		this._filler(true)

    let $ = this._dom
		$.container._dom.className = `s${this.streams.length}`
	}
	purge (wksp_uid) {
		if (storage.fetch(`workspace:${wksp_uid}`) != ''){
			let uid_streams = JSON.parse (storage.fetch(`workspace:${wksp_uid}`))
			uid_streams.forEach ((uid) => {
				storage.remove(`stream:${uid}`)
			})
		}
	}
	edit (uid, video_dom){
	  if (!this._dom.grid._dom.classList.contains('edit') || !storage.has(`stream:${uid}`))
	    return

		this.streams.forEach((item) => {
			if(item._dom.classList.contains('on'))
				item._dom.classList.remove('on')
		})
		if (uid == this.editingStream) {
			this._dom.grid._dom.classList.remove('on')
			this.editingStream = ''
			this.streams.forEach((item) => {
				if(item._dom.id == uid)
					item._dom.classList.remove('on')
			})
		} else {
			this._dom.grid._dom.classList.add('on')
			this.streams.forEach((item) => {
				if(item._dom.id == uid)
					item._dom.classList.add('on')
			})
			this.actions.show(uid, video_dom)
			this.editingStream = uid
		}
	}
	deinit (wksp){
		this._dom.grid._dom.classList.remove('on')
		this.editingStream = '';
		setTimeout(() => {this.actions.deinit()},250)

		this.players.forEach((player) => {
			player.destroy()
		});
		this.streams.forEach((item) => {
			item._dom.remove()
		});
		this.players = []
		this.streams = []
		this.uid_streams = []
		this._filler()

		return wksp
	}
	_filler (add){
    this.filler.forEach((item) => {
      item._dom.remove()
    })
    this.filler = []
    if (typeof add == "undefined")
      return
	  let spaces = [1,1,2,4,4,4,6,6,9,9],
	      length = this.streams.length

		this._dom.container._dom.className = `s${length}`
    let free = length == -1 ? 1 : spaces[length] - length
    for (let i = 0; i < free; i++){
      this.filler.unshift (new DOM('span', {className:'filler'}))
      this._dom.container.append(this.filler[0])
    }
	}
}

class AddMenu {
  constructor (dom, urlPopup_ref){
    this.plugins = {
      stream:'Stream'
    }

    let $ = this._dom = {}
    $.addMenu = dom
    $.addMenu.onclick(this, this.close)
    $.plugins = []

    for (const plugin in this.plugins) {
      $.plugins.push(new DOM('button', {
          value: plugin,
          id:`${plugin}Button`,
          className:'icon',
          innerText: this.plugins[plugin]
        })
        .onclick(this, this.add, [plugin]))
    }

    $.wrapper = new DOM('div')
      .append($.plugins)
    $.addMenu.append($.wrapper)
    this.urlPopupObj = urlPopup_ref
  }
  close (e) {
    if (e == undefined || e.target.id == 'addMenu')
      Animate.off(this._dom.addMenu._dom)
  }
  open (){
    Animate.on(this._dom.addMenu._dom)
  }
  add (plugin){
    switch (plugin) {
      case 'stream':
        this.urlPopupObj.open()
        this.close()
        break
    }
  }
}
class UrlPopup {
  constructor (dom, grid_ref){
    let $ = this._dom = {}
    $.urlPopup = dom
    $.urlPopup.onclick(this, this.close)
    $.input = new DOM('input').onchange(this, this.include)
    $.h2 = new DOM('h2', {innerText:'Incluir stream'})
    $.h3 = new DOM('h3', {innerText:'Insira a url do manifesto da stream'})

    $.wrapper = new DOM('div')
      .append([$.h2, $.input, $.h3])
    $.urlPopup.append($.wrapper)
    this.gridObj = grid_ref
  }
  close (e) {
    if (e == undefined || e.target.id == 'urlPopup')
      Animate.off(this._dom.urlPopup._dom)
  }
  open (){
    this._dom.input._dom.focus()
    Animate.on(this._dom.urlPopup._dom)
  }
  include (){
    this.gridObj.add('stream', this._dom.input._dom.value)
    this._dom.input._dom.value = ''
    this.close()
  }
}
