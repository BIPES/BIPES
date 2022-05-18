"use strict";

import {DOM} from '../../base/dom.js'
import {Tool} from '../../base/tool.js'
export {Charts, Streams, Switches, Ranges, Gauges}

import {dataStorage} from './datastorage.js'
import {databaseMQTT} from './easymqtt.js'
import {easyMQTT} from './easymqtt.js'

/** Handle all plugins types */
export const plugins = {
  types:['charts', 'switches', 'ranges', 'gauges'],
  /** Init plugins */
  init: () => {
  	// Setup chart.js defaults
	  if (Tool.fromUrl('theme') === 'dark'){
      Chart.defaults.color = '#eee'
      Chart.defaults.borderColor = 'rgba(255,255,255,0.1)'
    } else {
      Chart.defaults.color = '#222'
    }
  },
  /**
	 * Deinit plugins.
	 */
	deinit: (grid) => {
		plugins.types.forEach(type => {
		  grid[type].forEach((item) => {
		    item.destroy()
		  })
		  grid[type] = []
		})
	},
  /**
	 * Remove a plugin.
	 * @param {Object} grid - Dashboard grid object.
	 * @param {Object} data - Plugin object.
	 */
  remove: (grid, data) => {
		switch (data.type) {
		  case 'plugin':
		    grid.players.forEach((player, index) => {
			    if (player.sid == data.sid) {
				      if (player.source = 'DASH')
				        player.destroy()
			      grid.players.splice(index,1)
			    }
		    })
		    break
		  case 'chart':
		    grid.charts.forEach((chart, index) => {
		      if (chart.sid == data.sid){
		        chart.destroy()
		        grid.charts.splice(index,1)
		      }
		    })
		    break
		}
  },
  /**
	 * Include a plugin.
	 * @param {Object} grid - Dashboard grid object.
	 * @param {Object} data - Plugin object.
	 * @param {Object} _$ - Object of DOM elements: grab, remove, and silk.
	 */
  include: (grid, data, _$) => {
    switch (data.type) {
      case 'chart':
        Charts.include(grid, data, _$)
        break
      case 'switch':
        Switches.include(grid, data, _$)
        break
      case 'range':
        Ranges.include(grid, data, _$)
        break
      case 'gauge':
        Gauges.include(grid, data, _$)
        break
    }
  },
  /**
	 * Regenerate a plugin.
	 * @param {Object} grid - Dashboard grid object.
	 * @param {Object} data - Plugin object.
	 */
  regen: (obj, data) => {
    switch (data.type) {
      case 'chart':
        Charts.regen(obj, data)
        break
    }
  }
}

/** Chart plugin, powered by chart.js */
class Charts {
  constructor (){}
  static chart (data, dom) {
    let data2
    switch (data.setup.source) {
      case 'localStorage':
		    data2 = dataStorage.chartData(data.setup.topic, data)
		    break
		  case 'easyMQTT':
		    // Include dummy if not exist
		    if (!databaseMQTT._inited)
		      return {
		        sid:data.sid,
            topic:data.setup.topic,
            source:data.setup.source,
            destroy:()=>{}
          }
        data2 = databaseMQTT.chartData(data.setup.topic, data)
        break
	    }

    let options = {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                      position: 'top'
                    }
                  },
                scales: {},
                animation: {
                  duration: 0
                },
                resizeDelay: 125
              }

    if (data.setup.title != '')
      options.plugins.title = {display: true, text: data.setup.title, font: {size: 14}}

    if (data.setup.timeseries)
      options.scales.xAxes = {type: 'time', distribution: 'linear'}

    if (data.setup.xLabel != '')
      options.scales.x = {display: true, title:{display: true, text: data.setup.xLabel}}
    if (data.setup.yLabel != '')
      options.scales.y = {beginAtZero: true, display: true, title:{display: true, text: data.setup.yLabel}}
    else
      options.scales.y = {beginAtZero: true}

    let _chart = new Chart(dom.$, {
            type: data.setup.chartType,
            data: data2,
            options: options,
      })
    _chart.sid = data.sid
    _chart.topic = data.setup.topic
    _chart.source = data.setup.source
    let limitPoints = parseInt(data.setup.limitPoints)
    if (!isNaN(limitPoints))
        _chart.limitPoints = limitPoints

    return _chart
  }
  /**
	 * Regenerate a chart plugin.
	 * @param {Object} grid - Dashboard grid object.
	 * @param {Object} data - Plugin object.
	 */
  static regen (obj, data) {
    for (const index in obj) {
      if (obj[index].sid == data.sid) {
        obj[index].destroy()
        obj[index] = Charts.chart(data, data.target)
      }
    }
  }
  /**
	 * Include a chart plugin.
	 * @param {Object} grid - Dashboard grid object.
	 * @param {Object} data - Plugin object.
	 * @param {Object} _$ - Object of DOM elements: grab, remove, and silk.
	 */
  static include(grid, data, _$){
    data.target = new DOM('canvas', {className:'chart'})
    let content1 = new DOM('div')
	    .append([
	      _$.silk,
	      _$.grab,
		    _$.remove,
		    data.target,
	    ])
	  let container1 = new DOM('div', {sid:data.sid, className:'chart broad'})
	    .append(content1)

    grid.muuri.add(container1.$)

    grid.charts.push(Charts.chart(data, data.target))

    _$.silk.onevent('contextmenu', grid, ()=>{
      DOM.switchState(grid.parent.$.dashboard)
    })
    _$.grab.onclick(grid, grid.edit, [data, container1])
  }
}


class Streams {
  constructor (){}
  static stream (sid, dom) {
    switch (data.setup.source) {
      case 'DASH':
        let _stream1 = dashjs.MediaPlayer().create()
        _stream1.sid = sid
        _stream1.source = 'DASH'
        _stream1.updateSettings({ 'streaming': { 'lowLatencyEnabled': true } })

        _stream1.initialize(dom, data.setup.manifest, true)
        Streams.dashApplyParamenters(_stream1)
        return _stream1
        break
      case 'MJPEG':
        let _stream2 = {
          sid: sid,
          source: "MJPEG",
          attachSource: (src) => {
            dom.src = src
          }
        }
        _stream2.attachSource (data.setup.manifest)
        return _stream2
        break
    }

  }
  static regen (obj, setup, sid, dom) {
    for (const index in obj.players) {
      if (obj.players[index].sid == sid) {
        if (obj.players[index].source == "DASH")
          obj.players[index].destroy()
        obj.players[index] = Streams.stream(sid, dom)
      }
    }
  }
  static manifest (obj, setup, sid) {
    for (const index in obj.players) {
      if (obj.players[index].sid == sid) {
        switch (obj.players[index].source) {
          case "DASH":
          case "MJPEG":
            obj.players[index].attachSource(setup.manifest)
            obj.players[index].sid = sid
            break
        }
      }
    }
  }
  	/*REVIEW*/
	static dashApplyParamenters (player){
        let targetLatency = parseFloat(10, 10);
        let minDrift = parseFloat(0.05, 10);
        let catchupPlaybackRate = parseFloat(0.05, 10);
        let liveCatchupLatencyThreshold = parseFloat(60, 10);

		player.updateSettings({
            streaming: {
                delay: {
                    liveDelay: targetLatency
                },
                liveCatchup: {
                    minDrift: minDrift,
                    playbackRate: catchupPlaybackRate,
                    latencyThreshold: liveCatchupLatencyThreshold,
                }
            }
        });
	}
	/*ENDREVIEW*/
}

class Switches {
  constructor (data, dom){
    this.sid = data.sid
    this.dom = dom
    this.target = data.setup.target
    this.topic = data.setup.topic
    this.messageOn = data.setup.messageOn
    this.messageOff = data.setup.messageOff
    this.state = false
  }
  destroy () {
    this.target = undefined
    this.topic = ''
    this.messageOn = ''
    this.messageOff = ''
    this.state = false
    this.dom.removeChilds()

    delete this
  }
  command () {
    if (this.target == 'easyMQTT'){
      if (!this.state)
        databaseMQTT.client.send(`${easyMQTT.session}/${this.topic}`, this.messageOn, 0, false),
        this.dom.$.classList.add('on')
      else
        databaseMQTT.client.send(`${easyMQTT.session}/${this.topic}`, this.messageOff, 0, false),
        this.dom.$.classList.remove('on')
      this.state = !this.state
    }
  }
  static switch (data, dom) {
    let _Switches = new Switches (data, dom)
    let title = new DOM('h2', {innerText: data.setup.title}),
     subtitle = new DOM('h3', {innerText: data.setup.subtitle})
   dom.onclick(_Switches, _Switches.command)

    dom.append ([
      title,
      subtitle
      ])
    return _Switches
  }
  static regen (obj, data) {
    for (const index in obj.switches) {
      if (obj.switches[index].sid == data.sid) {
        obj.switches[index].destroy ()
        obj.switches[index] = Switches.switch(data, data.target)
      }
    }
  }
  /**
	 * Include a switch plugin.
	 * @param {Object} grid - Dashboard grid object.
	 * @param {Object} data - Plugin object.
	 * @param {Object} _$ - Object of DOM elements: grab, remove, and silk.
	 */
  static include (grid, data, _$){
    data.target = new DOM('button', {className:'press'})
    let content3 = new DOM('div')
      .append([
        //_$.silk,
        _$.grab,
	      _$.remove,
	      data.target,
      ])
    let container3 = new DOM('div', {sid:data.sid, className:'switch tiny'})
      .append(content3)

    grid.muuri.add(container3.$)
    grid.switches.push(Switches.switch(data, data.target))

    data.target.onevent('contextmenu', grid, ()=>{
      DOM.switchState(grid.parent.$.dashboard)
    })
    _$.grab.onclick(grid, grid.edit, [data, container3])
  }
}

class Ranges {
  constructor (data, dom){
    this.sid = data.sid
    this.dom = dom
    this.target = data.setup.target
    this.topic = data.setup.topic
    this.minValue = Number(data.setup.minValue)
    this.maxValue = Number(data.setup.maxValue)
    this.step = Number(data.setup.step)

    this.precision = String(data.setup.step).includes('.') ?
                     data.setup.step.split('.')[1].length : 0
  }
  destroy (){
    this.target = undefined
    this.topic = ''
    this.minValue = undefined
    this.maxValue = undefined
    this.step = undefined
    this.input = undefined
    this.dom.removeChilds()

    delete this
  }
  /**
	 * Set range by sending a MQTT message.
	 * @param {string|Object} _set - "lower" to subtract, "raise" to add and
	 *                                 DOM to set current node value.
	 */
  command (_set){
    if (this.target == 'easyMQTT'){
      let value = this.input.value
      if (_set == 'lower')
        value = Number(this.input.value ) - this.step
      else if (_set == 'raise')
        value = Number(this.input.value) + this.step
      else if (_set instanceof HTMLInputElement)
        value = Number(this.input.value)

      value = value < this.minValue ? this.minValue : value
      value = value > this.maxValue ? this.maxValue : value

      // Round value
      value = Tool.round(value, this.precision)

      this.input.value = value
      databaseMQTT.client.send(`${easyMQTT.session}/${this.topic}`, String(value), 0, false)
    }
  }
  static range (data, dom) {
    let _Ranges = new Ranges (data, dom)
    let title = new DOM('h2', {innerText: data.setup.title}),
     subtitle = new DOM('h3', {innerText: data.setup.subtitle})
    _Ranges.input = new DOM('input')
    _Ranges.input.value = (Number(data.setup.maxValue) + Number(data.setup.minValue))/2
    _Ranges.input.onevent('change', _Ranges, _Ranges.command, [_Ranges.input.$])

    dom.append([
        title,
      new DOM('div', {className: 'container'}).append([
        new DOM('button', {id:'lower', className:'icon'})
          .onclick(_Ranges, _Ranges.command, ['lower']),
        _Ranges.input,
        new DOM('button', {id:'raise', className:'icon'})
          .onclick(_Ranges, _Ranges.command, ['raise'])
      ]),
        subtitle
    ])

    return _Ranges
  }
  static regen (obj, data) {
    for (const index in obj.ranges) {
      if (obj.ranges[index].sid == data.sid){
        obj.ranges[index].destroy()
        obj.ranges[index] = Ranges.range(data, data.target)
      }
    }
  }
  /**
	 * Include a range plugin.
	 * @param {Object} grid - Dashboard grid object.
	 * @param {Object} data - Plugin object.
	 * @param {Object} _$ - Object of DOM elements: grab, remove, and silk.
	 */
  static include(grid, data, _$){
    data.target = new DOM('span')
    let content3 = new DOM('div')
      .append([
        //_$.silk,
        _$.grab,
	      _$.remove,
	      data.target,
      ])
    let container3 = new DOM('div', {sid:data.sid, className:'range wide'})
      .append(content3)

    grid.muuri.add(container3.$)
    grid.ranges.push(Ranges.range(data, data.target))

    data.target.onevent('contextmenu', grid, ()=>{
      DOM.switchState(grid.parent.$.dashboard)
    })
    _$.grab.onclick(grid, grid.edit, [data, container3])
  }
}


class Gauges {
  constructor (data, dom){
    this.sid = data.sid
    this.dom = dom
    this.target = data.setup.target
    this.topic = data.setup.topic
    this.minValue = Number(data.setup.minValue)
    this.maxValue = Number(data.setup.maxValue)
  }
  destroy () {
    this.target = undefined
    this.topic = ''
    this.minValue = undefined
    this.maxValue = undefined
    this.input = undefined
    this.dom.removeChilds()

    delete this
  }
  static gauge (data, dom) {
    let _Gauges = new Gauges (data, dom)
    let title = new DOM('h2', {innerText: data.setup.title}),
     subtitle = new DOM('h3', {innerText: data.setup.subtitle})

    _Gauges.field = new DOM('div', {className:'value'})
    _Gauges.percentage = new DOM('div', {className:'percentage'})

    dom.append ([
      _Gauges.percentage,
      new DOM('div', {className:'container'}).append([
          title,
          _Gauges.field,
          subtitle
        ])
      ])
    return _Gauges
  }
  static regen (obj, data) {
    for (const index in obj.gauges) {
      if (obj.gauges[index].sid == data.sid) {
        obj.gauges[index].destroy ()
        obj.gauges[index] = Gauges.gauge(data, data.target)
      }
    }
  }
  /**
	 * Include a gauge plugin.
	 * @param {Object} grid - Dashboard grid object.
	 * @param {Object} data - Plugin object.
	 * @param {Object} _$ - Object of DOM elements: grab, remove, and silk.
	 */
  static include(grid, data, _$){
    data.target = new DOM('span')
    let content3 = new DOM('div')
      .append([
        //_$.silk,
        _$.grab,
	      _$.remove,
	      data.target,
      ])
    let container3 = new DOM('div', {sid:data.sid, className:'gauge tiny'})
      .append(content3)

    grid.muuri.add(container3.$)
    grid.gauges.push(Gauges.gauge(data, data.target))

    data.target.onevent('contextmenu', grid, ()=>{
      DOM.switchState(grid.parent.$.dashboard)
    })
    _$.grab.onclick(grid, grid.edit, [data, container3])
  }
  /**
	 * Update gauge value.
	 * @param {Object} data - New value.
	 */
  update (data){
    this.field.innerText = data
    let percentage = (parseFloat(data) - this.minValue) / (this.maxValue - this.minValue) * 100

    percentage = percentage > 100 ? 100 : percentage
    percentage = percentage < 0 ? 0 : percentage

    this.percentage.style.marginTop = `${100 - percentage}%`
    this.percentage.style.height = `${percentage}%`
  }
}

class Get {
  constructor (){}

  static request(request_, callback, json){
		let request = new Request (request_)

    if (json) {
		  fetch(request)
			  .then(response => response.json())
			  .then(data => {
				  if (!data.hasOwnProperty('response'))
					  return
				  if (typeof callback != 'undefined' && data.response != -1)
					  callback(data.response)
			  })
			  .catch(
			    console.error
			  )
		} else {
				fetch(request)
			  .then(callback())
			  .catch(
			    console.error
			  )
		}
	}
}
