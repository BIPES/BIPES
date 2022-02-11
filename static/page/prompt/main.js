
"use strict";

import {DOM, Animate} from '../../base/dom.js'
import {command} from '../../base/command.js'
import {channel} from '../../base/channel.js'

class Prompt {
  constructor (){
    this.name = 'prompt'
    this.inited = false
    this.prompt = new Terminal ()

    let $ = this._dom = {}
    $.section = new DOM(DOM.get('section#prompt'))
    $.promptXterm = new DOM('div', {className:"xterm"})
    $.quickActions = new DOM('div', {className:"quick-actions"})
      .append([
        new DOM('span', {innerText:"Clear prompt"})
          .onclick(this, ()=>{this.prompt.clear()}),
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
        new DOM('div', {className:"wrapper"}).append($.promptXterm),
        $.quickActions
      ])

    this.prompt.open($.promptXterm._dom)
    this.prompt.setOption('fontSize',14)
    this.prompt.onData((data) => {
      // If tab is master, write directly to reduce delay
      if (channel.current != undefined)
        channel.rawPush(data, channel.targetDevice)
      else
        command.dispatch(channel, 'rawPush', [data, channel.targetDevice])
    });

    DOM.get('section#prompt').append($.container._dom)

    // Cross tabs event handler on muxing prompt
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
  /** Enable the prompt. */
  on (){
    if(!this.inited)
      return

    this.prompt.setOption('disableStdin', false);
    this.prompt.focus();
  }
  /** Disable the prompt. */
  off (){
    if(!this.inited)
      return

    this.prompt.setOption('disableStdin', true);
    this.prompt.blur();
  }
  /** Write data in the prompt. */
  write (data){
    this.prompt.write(data);

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
    this.prompt.write(data)
  }
  /**
   * Resize the ``xterm.js`` prompt, triggered by ``window.onresize`` event on
   * on base/navigation.js.
   */
  resize (){
    if(!this.inited)
      return

    let cols = (this._dom.section._dom.offsetWidth - 5*8)/8,
        rows = (this._dom.section._dom.offsetHeight - 5*16)/16.5

    this.prompt.resize(parseInt(cols), parseInt(rows))
  }
}

export let prompt = new Prompt()
