"use strict";

import {DOM} from '../../base/dom.js'
import {Charts, Streams, Switches, Ranges, Gauges} from './plugins.js'
export {Actions, Action}

import {project} from '../project/main.js'

class Actions {
	constructor (dom){
		this.actions = []

		let $ = this.$ = {}
		$.container = new DOM('span')
		dom.append($.container)
	}
	show (sid, obj){
		this.deinit()
		this.init(sid, obj)
	}
	/**
	 * Init setup panel.
	 * @param {Object} data - Plugin to setup.
	 * @param {Object} obj - Grid object.
	 */
	init (data, obj){
	  let defu = Actions.defaults(data.type)
	  let defuKeys = Object.keys(defu),
	      setupKeys = Object.keys(data.setup)
	  // Create missing or new props with default values
	  for (const key in defu){
	    if (!setupKeys.includes(key))
	      data.setup[key] = defu[key]
	  }
	  // Remove deprecated props
	  for (const key in data.setup){
	    if (!defuKeys.includes(key))
	      delete data.setup[key]
	  }
	  // Generate setup panel
		for (const key in data.setup) {
			let _action = new Action(data.setup[key], data, key, obj)
			if (Object.keys(_action.$).length !== 0){
			  this.actions.push(_action)
			  let $ = this.$
			  $.container.append(_action.$.action)
			} else {
			  console.log(`Dashboard: When opening setup panel, ${key} was ignored.`)
			}
		}
	}
	deinit (){
		this.actions.forEach((action) => {
			action.$.action.$.remove()
		});
		this.actions = []
	}
	static _getType (plugin, key){
	  let _dict = {
	    'chart': {
	      topic: 'input',
	      chartType: 'dropdown',
	      title: 'input',
	      source: 'dropdown',
	      labels: 'input',
	      timeseries: 'switch',
	      limitPoints: 'input',
	      xLabel: 'input',
	      yLabel: 'input'
	    },
	    'stream': {
	      source: 'dropdown',
	      manifest: 'input'
	    },
	    'switch': {
	      title: 'input',
	      subtitle: 'input',
	      target: 'dropdown',
	      topic: 'input',
	      messageOn: 'input',
	      messageOff: 'input',
	    },
		  'range': {
	      title: 'input',
	      subtitle: 'input',
	      target: 'dropdown',
	      topic: 'input',
	      minValue: 'input',
	      maxValue: 'input',
	      step: 'input'
	    },
	    'gauge': {
	      title: 'input',
	      subtitle: 'input',
	      target: 'dropdown',
	      topic: 'input',
	      minValue: 'input',
	      maxValue: 'input',
	    },
	  }
	  return _dict[plugin][key]
	}
	static defaults (plugin){
	  switch (plugin){
	    case 'stream':
	      return {
	        source:'DASH',
	        manifest: 'https://livesim.dashif.org/livesim/chunkdur_1/ato_7/testpic4_8s/Manifest300.mpd'
	      }
	      break
	    case 'chart':
        return {
          source: 'EasyMQTT',
          topic:'data',
          chartType: 'line',
          title: '',
          labels: 'Variable 1, Variable 2',
          limitPoints: 100,
          xLabel: '',
          yLabel: '',
          timeseries: false
        }
	      break
	    case 'switch':
	      return {
          target: 'EasyMQTT',
	        title: 'Click',
	        subtitle: 'Me',
	        topic: 'button',
	        messageOn: 'turn_on',
	        messageOff: 'turn_off',
	        }
	      break
	    case 'range':
	      return {
          target: 'EasyMQTT',
	        title: 'Range',
	        subtitle: 'Description',
	        topic: 'range',
	        minValue: 0,
	        maxValue: 100,
	        step: 1
	        }
	      break
	    case 'gauge':
	      return {
          target: 'EasyMQTT',
	        title: 'Gauge',
	        subtitle: 'Unit',
	        topic: 'gauge',
	        minValue: 0,
	        maxValue: 100
	        }
	      break
	  }
	}

	static dict (plugin, key){
	  let _dict = {
	    'chart': {
	      topic: 'Topic',
	      chartType: ['Chart type', ['line','scatter','bar','pie','radar']],
	      title: 'Title',
	      source: ["Target", ["localStorage","EasyMQTT"]],
	      labels: 'Labels',
	      timeseries: 'Is Unix timestamp',
	      limitPoints: 'Limit to last datapoints',
	      xLabel: 'x-axis label',
	      yLabel: 'y-axis label'
	    },
	    'stream': {
	      source: ["Standard",["MJPEG","DASH"]],
	      manifest: 'Manifest address'
	    },
	    'switch': {
	      target: ["Target", ["EasyMQTT"]], //::TODO:: Add REPL option
	      title: 'Title',
	      subtitle: 'Subtitle',
	      topic: 'Topic',
	      messageOn: 'Switch on message',
	      messageOff: 'Switch off message'
	    },
	    'range': {
	      target: ["Target", ["EasyMQTT"]], //::TODO:: Add REPL option
	      title: 'Title',
	      subtitle: 'Subtitle',
	      topic: 'Topic',
	      minValue: 'Lower bound',
	      maxValue: 'Upper bound',
	      step: 'Step'
	    },
	    'gauge': {
	      target: ["Target", ["EasyMQTT"]], //::TODO:: Add REPL option
	      title: 'Title',
	      subtitle: 'Subtitle',
	      topic: 'Topic',
	      minValue: 'Lower bound',
	      maxValue: 'Upper bound'
	    },
	  }
	  return _dict[plugin][key]
	}
}
class Action {
	constructor (action, data, key, obj){
	  this.plugin = data.type
	  this.key = key
	  this.sid = data.sid
	  this.dom = data.target

		let $ = this.$ = {}
		switch (Actions._getType(data.type, key)) {
			case 'button':
				$.action = new DOM('div', {className:'button'})
				$.button = new DOM('button', {innerText:Actions.dict(this.plugin,key), className:'noicon'})
					.onclick(this, this.do, [action.request])
				$.action.append($.button)
				break
			case 'input':
				$.action = new DOM('div', {className:'input'})
				$.span = new DOM('span', {innerText:Actions.dict(this.plugin,key)})
				$.input = new DOM('input', {value:action})
				  .onchange(this, this.input, [obj, data])
				$.action.append([$.span, $.input])
				break
			case 'switch':
				$.action = new DOM('div', {
				  className:action ? 'switch on' : 'switch'
				})
				$.button = new DOM('button', {
				  innerText:Actions.dict(this.plugin,key),
				  className:'noicon'
				})
					.onclick(this, this.switch, [obj, data])
				$.action.append($.button)
				break
			case 'dropdown':
			  let source = Actions.dict(this.plugin,key),
			    index = 0;
			  for (let i = 0; i < source[1].length; i++){
			    if (source[1][i] == action) {
			      index = i
			      break
			    }
			  }
				$.action = new DOM('div', {className:'dropdown'})
				$.span = new DOM('span', {innerText:source[0]})

				$.dropdown = new DOM('select')
				  .onchange(this, this.dropdown, [obj, data])
				source[1].forEach((item) => {
		      $.dropdown.append(new DOM('option', {value:item, innerText:item}))
        })
				$.action.append([$.span, $.dropdown])
				$.dropdown.$.selectedIndex = index
				break
		}
	}
  switch (obj, data) {
      data.setup.timeseries = !data.setup.timeseries
			this.$.action.$.className = data.setup.timeseries ? 'switch on' : 'switch'

			switch(this.plugin){
			  case 'chart':
			    switch (this.key){
			      case 'timeseries':
			        bipes.page.dashboard.commit()
          		Charts.regen(obj.charts, data)
          		break
          }
      }
  }
	input (obj, data) {
			let str = String(this.$.input.$.value)
			switch(this.plugin){
			  case 'chart':
			    switch (this.key){
			      case 'topic':
			      case 'title':
			      case 'labels':
			      case 'xLabel':
			      case 'yLabel':
			      case 'limitPoints':
              data.setup[this.key] = str
          		Charts.regen(obj.charts, data)
              bipes.page.dashboard.commit()
			        break
			    break
			  }
			  case 'stream':
			    switch (this.key){
			      case 'manifest':
              data.setup.manifest = str
          		Streams.manifest(obj, data)
              bipes.page.dashboard.commit()
              break
		    }
	      case 'switch':
			    switch (this.key){
			      case 'title':
			      case 'subtitle':
			      case 'topic':
			      case 'messageOn':
			      case 'messageOff':
              data.setup[this.key] = str
          		Switches.regen(obj, data)
              bipes.page.dashboard.commit()
			        break
			    break
			  }
	      case 'range':
			    switch (this.key){
			      case 'title':
			      case 'subtitle':
			      case 'topic':
			      case 'minValue':
			      case 'maxValue':
			      case 'step':
              data.setup[this.key] = str
          		Ranges.regen(obj, data)
              bipes.page.dashboard.commit()
			        break
			    break
			  }
	      case 'gauge':
			    switch (this.key){
			      case 'title':
			      case 'subtitle':
			      case 'topic':
			      case 'minValue':
			      case 'maxValue':
              data.setup[this.key] = str
          		Gauges.regen(obj, data)
              bipes.page.dashboard.commit()
			        break
			    break
			  }
			}
	}
	dropdown (obj, data) {
		let str = String(this.$.dropdown.$.value)
		switch(this.plugin){
		  case 'chart':
		    switch (this.key){
		      case 'source':
            data.setup.source = str,
        		Charts.regen(obj.charts, data)
            bipes.page.dashboard.commit()
        		break
		      case 'chartType':
            data.setup.chartType = str
        		Charts.regen(obj.charts, data)
            bipes.page.dashboard.commit()
		        break
   		}
		  case 'switch':
		    switch (this.key){
		      case 'target':
            data.setup.target = str,
            bipes.page.dashboard.commit()
        		break
   		}
   		case 'stream':
   		  switch (this.key){
   		    case 'source':
            data.setup.source = str
            Streams.regen(obj, data)
            bipes.page.dashboard.commit()
            break
   		}
		  case 'range':
		    switch (this.key){
		      case 'target':
            data.setup.target = str,
            bipes.page.dashboard.commit()
        		break
   		}
		  case 'gauge':
		    switch (this.key){
		      case 'target':
            data.setup.target = str,
            bipes.page.dashboard.commit()
        		break
   		}
    }
  }

	switchState (request) {
		let switch_ = this.currentValue == 1 ? 0 : 1

	}
}
