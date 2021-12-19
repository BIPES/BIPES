
"use strict";

import {DOM, Animate} from '../base/dom.js'
export {Console}

class Console {
	constructor (){
	  this.inited = false
	  this.terminal = new Terminal ()

	  let $ = this._dom = {}
	  $.terminalXterm = new DOM('div', {className:"xterm"})
	  $.quickActions = new DOM('div', {className:"quick-actions"})
	    .append([
	      new DOM('span', {innerText:"Reset device"})
	        .onclick(this, this.write,["reset_device()\n\r"]),
	      new DOM('span', {innerText:"Clear terminal"})
	        .onclick(this, this.write,["clear_terminal()\n\r"]),
	      new DOM('span', {innerText:"Clear terminal"})
	        .onclick(this, this.write,["clear_terminal()\n\r"]),
	      new DOM('span', {innerText:"Remove bindings"})
	        .onclick(this, this.write,["remove_bindings()\n\r"])
      ])

	  $.container = new DOM('div', {className:"container"})
	    .append([
	      new DOM('div', {className:"wrapper"}).append($.terminalXterm),
	      $.quickActions
	    ])

	  this.terminal.open($.terminalXterm._dom)
	  this.terminal.setOption('fontSize',14)
	  this.terminal.onData((data) => {
	    // If tab is master, write directly to reduce delay
	    if (channel.current != undefined)
        channel.rawPush(data)
	    else
        command.dispatch(channel, 'push', [data, channel.targetDevice])
    });

		DOM.get('section#console').append($.container._dom)

		// Cross tabs event handler on muxing terminal
    command.add(this, {
      write: this._write
    }, true)
    // Object to delay dispatch
    this.tabs = {
      data:'',
      targetDevice:'',
      watcher:setInterval (() => {
        if (this.tabs.data != '')
          command.dispatch(this, 'write', [this.tabs.data, channel.targetDevice]),
          this.tabs.data = ''
      }, 50)
    }
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
  /** Enable the terminal. */
  on (){
    if(!this.inited)
      return

    this.terminal.setOption('disableStdin', false);
    this.terminal.focus();
  }
  /** Disable the terminal. */
  off (){
    if(!this.inited)
      return

    this.terminal.setOption('disableStdin', true);
    this.terminal.blur();
  }
  /** Write data in the terminal. */
  write (data){
    this.terminal.write(data);

    // Write to delayed dispatch
    if (this.tabs.target != channel.targetDevice)
      this.tabs.data = data,
      this.tabs.target = channel.targetDevice
    else
      this.tabs.data += data

  }
  _write (data, target){
    if(channel.targetDevice != target)
      return
    this.terminal.write(data)
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
      if (navigation.current[0] == 'console')
        rows = (window.innerHeight - 2.5*16) / 18
      else
        rows = (window.innerHeight/2 - 2.5*16) / 18
      cols = (window.innerWidth - 3.5*16) / 8.5
    } else {
      if (navigation.current[0] == 'console')
        cols = (window.innerWidth - 3.5*16) / 8.5
      else
        cols = (window.innerWidth/2 - 3.5*16) / 8.5
      rows = (window.innerHeight - 2.5*16) / 18
    }

    this.terminal.resize(parseInt(cols), parseInt(rows))
  }
}
