"use strict";

import {DOM} from '../../base/dom.js'
import {Get} from './action.js'
export {Charts, Streams, Switches}

import {dataStorage} from './datastorage.js'

/** Chart plugin, powered by chart.js */
class Charts {
  constructor (){}
  static chart (data, dom) {
		let data2 = dataStorage.chartData(data.setup.dataset, data);

		let options = {
                maintainAspectRatio: false, // ::TODO:: Is causing memory leak...
		            plugins: {
		                legend: {
		                  position: 'top'
		                }
		              },
                scales: {
                  },
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

    let _chart = new Chart(dom, {
		        type: data.setup.chartType,
		        data: data2,
		        options: options
		  })
    _chart.sid = data.sid
    _chart.dataset = data.setup.dataset
    let limitPoints = parseInt(data.setup.limitPoints)
    if (!isNaN(limitPoints))
        _chart.limitPoints = limitPoints

    return _chart
  }
  static colors (i) {
    let bgc = ['rgba(106,168,251,0.5)', 'rgba(123,73,173,0.5)', 'rgba(106,251,116,0.5)', 'rgba(251,106,106,0.5', 'rgba(56,95,70,0.5)', 'rgba(318,95,70,0.5)']
    let bdc = ['rgba(0,0,255,1.0)', 'rgba(155,0,155,1.0)', 'rgba(0,255,0,1.0)', 'rgba(255,0,0,1.0)', 'rgba(56,95,70,1.0)', 'rgba(318,95,70,1.0)']

    return [bdc[i], bgc[i]]
  }
  static regen (obj, data) {
    for (const index in obj.charts) {
      if (obj.charts[index].sid == data.sid) {
        obj.charts[index].destroy()
        obj.charts[index] = Charts.chart(data, data.target._dom)
      }
    }
  }
}


class Streams {
  constructor (){}
  static stream (sid, dom) {
    let data = JSON.parse(localStorage[`stream:${sid}`])
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
  constructor (sid, dom, onUrl, offUrl){
    this.sid = sid
    this.dom = dom
    this.onUrl = onUrl
    this.offUrl = offUrl
    this.state = false
  }
  destroy () {
    this.onUrl = ''
    this.offUrl = ''
    this.state = false
    this.dom.removeChilds()

    delete this
  }
  command () {
    if (!this.state)
      Get.request(this.onUrl, () => {
        this.dom._dom.classList.add('on')
        this.state = true
      })
    else
      Get.request(this.offUrl, () => {
        this.dom._dom.classList.remove('on')
        this.state = false
      })
  }
  static switch (sid, dom) {
    let data = JSON.parse(localStorage[`stream:${sid}`])

    let _Switches = new Switches (sid, dom, data.setup.onUrl, data.setup.offUrl)

    let title = new DOM('h2', {innerText: data.setup.title}),
     subtitle = new DOM('h3', {innerText: data.setup.subtitle}),
       button = new DOM ('div', {id: 'switchPlugin', tabIndex: 0})
        .onclick(_Switches, _Switches.command)

    dom.append ([
      title,
      button,
      subtitle
      ])

    return _Switches
  }
  static regen (obj, sid, dom) {
    for (const index in obj.switches) {
      if (obj.switches[index].sid == sid) {
        obj.switches[index].destroy ()
        obj.switches[index] = Switches.switch(sid, dom)
      }
    }
  }
}
