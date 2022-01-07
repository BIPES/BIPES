
"use strict";

import {DOM, Animate} from '../base/dom.js'
export {Console}

class Console {
  constructor (){
    this.inited = false
    this.terminal = new Terminal ()

    let $ = this._dom = {}
    $.section = new DOM(DOM.get('section#console'))
    $.terminalXterm = new DOM('div', {className:"xterm"})
    $.quickActions = new DOM('div', {className:"quick-actions"})
      .append([
        new DOM('span', {innerText:"Clear terminal"})
          .onclick(this, ()=>{this.terminal.clear()}),
        new DOM('span', {innerText:"Reset device", className:'master'})
          .onclick(command, () => {
            command.dispatch(channel, 'push', [
                '\x04',
                channel.targetDevice, [], command.tabUID
              ])
            }),
        new DOM('span', {innerText:"Stop program", className:'master'})
          .onclick(command, () => {
            command.dispatch(channel, 'push', [
                '\x03',
                channel.targetDevice, [], command.tabUID
              ])
            }),
        new DOM('span', {innerText:"Stop timers", className:'master'})
          .onclick(command, () => {
            command.dispatch(channel, 'push', [
                'from machine import Timer; [Timer(i).deinit() for i in range(0,16)]\r',
                channel.targetDevice, [], command.tabUID
              ])
            }),
        new DOM('span', {innerText:"Device info", className:'master'})
          .onclick(command, () => {
            command.dispatch(channel, 'push', [
                'import os; os.uname()\r',
                channel.targetDevice, [], command.tabUID
              ])
            }),
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
        channel.rawPush(data, channel.targetDevice)
      else
        command.dispatch(channel, 'rawPush', [data, channel.targetDevice])
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
      }, 25)
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

    let cols = (this._dom.section._dom.offsetWidth - 5*8)/8,
        rows = (this._dom.section._dom.offsetHeight - 3*16)/16.5

    this.terminal.resize(parseInt(cols), parseInt(rows))
  }
}
