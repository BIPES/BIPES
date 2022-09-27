import {Tool} from '../../base/tool.js'

import {storage} from '../../base/storage.js'
import {navigation} from '../../base/navigation.js'

export let easyMQTT = {
  session: storage.has('mqtt_session') ?
           storage.fetch('mqtt_session') : storage.set('mqtt_session', Tool.SID())
}
/**
 * Handle MQTT database requests, return JSON on success and true on error.
 */
class MQTTDatabase {
  constructor (){
    this._data = []
    this._keys = []
    this._coorLength = {}
    this.ref   // Reference the grid object
    this._inited = false
    // Handle topics
    this.topics = {
      session:false,
      fetching:false
    }
    this.isConnected = false // If the MQTT broker is connected

    if (!navigation.isLocal){
      this.do('public_conf')
        .then(obj => {
          if (obj.easyMQTT.password === false)
            return
          for (const key in obj.easyMQTT){
            easyMQTT[key] = obj.easyMQTT[key]
          }
          // Port 9001 for WebSockets
          this.client = new Paho.MQTT.Client(
            easyMQTT.host,
            easyMQTT.ws_port,
            '',
            `bipes${new Date()}`)
          this.client.onConnectionLost = () => {this.onConnectionLost()}
          this.client.onMessageArrived = (message) => {this.onMessageArrived(message)}
          this.client.connect({
            useSSL:easyMQTT.ssl,
            userName : "bipes",
            password : easyMQTT.password,
            onSuccess:() => {this.onConnect()}
          })
      })
    }
  }
  /** Init databaseMQTT referencing the grid object */
  init (ref){
    this.ref = ref

    if (!this._inited && !navigation.isLocal){
      this.do(`${easyMQTT.session}/ls`)
        .then(obj => {
          if (obj.hasOwnProperty(easyMQTT.session)){
            if(obj[easyMQTT.session].length === 0){
              this.ref.regenCharts('EasyMQTT')
              return
            }
            this.topics.fetching = []  // watch fetch resolve
            obj[easyMQTT.session].forEach(topic => {
              this.topics.fetching.push(topic.topic)

              this.do(`${easyMQTT.session}/${topic.topic.replaceAll('/','$')}/grep`)
                .then(obj => {
                  if (obj.hasOwnProperty(easyMQTT.session))
                    this._data[topic.topic] = []
                    this._keys.push(topic.topic)
                    obj[easyMQTT.session].reverse().forEach(data => {
                      this.write(topic.topic, data.data)
                    })

                    this.topics.fetching.splice(this.topics.fetching.indexOf(topic.topic), 1)
                    if (this.topics.fetching.length === 0){
                      this.ref.regenCharts('EasyMQTT')
                    }
                })
            })
          }
      })
      this._inited = true
    }
  }
  /** Deinit databaseMQTT visual, dereference the grid object */
  deinit (){
    this.ref = undefined
  }
  /** Reinit everything, called after the user changed the session. */
  reinit (){
    this._data = []
    this._keys = []
    this._coorLength = {}
    this._inited = false
    this.topics.fetching = false
    //this.topics.toSubscribe = []

    this.unsubscribe()
    this.subscribe()
    this.init(this.ref)
  }
  async do (url){
    const response = await fetch(`${window.location.href.match('^(.*)/ide')[1]}/mqtt/${url}`, {
      method:'Post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({})
    })

    if (!response.ok)
      throw new Error(response.status)

    return await response.json ()
  }
  /**
   * Checks the income MQTT topic for comma divided data (chart) or single number value (gauge).
   * @param {boolean} push - True to push data to current plugins on grid.
   */
  async write (topic, chunk, push){
    let coordinates = chunk.split(',').map((item)=>item = parseFloat(item))
    if (coordinates.every((item) => !isNaN(item)) && coordinates.length > 1){
      this.push(topic, coordinates, push, 'chart')
      return
    }

    let value = parseFloat(chunk)
    if (!isNaN(chunk))
      this.push(topic, value, push, 'gauge')
  }
  /**
   * Push identified topic and data to memory.
   * @param {string} topic - Identified topic.
   * @param {Number|Number[]} data - Identified data.
   * @param {boolean} push - True to push data to current plugins on grid.
   * @param {string|string[]} plugin - Type of plugin to push the data to.
   */
  push (topic, data, push, plugin){
    if (plugin == 'gauge' && push === true){
      this.ref.gaugesPush(topic, data, 'EasyMQTT')
      return
    }

    if (!(data instanceof Array))
      return

    if (!this._data.hasOwnProperty(topic)){
      this._keys.push(topic)
      this._data[topic] = []
      this._coorLength[topic] = 0
    }

    this._data[topic].push(data)
    // Push to charts
    if (this.ref !== undefined && push === true){
      this.ref.chartsPush(topic, this._data[topic], data, 'EasyMQTT')
    }
  }
  /**
   * Remove topic from memory
   * @param {string} uid - Topic's uid.
   */
  remove (uid) {
		this._keys.forEach((topic, index) => {
		  if (topic == uid)
			  this._keys.splice(index,1)
		})
		delete this._data[uid]
  }
  chartData (topic, opt) {
    let data
    if (this._keys.includes(topic))
      data = this._data[topic]
    else
      data = []

    const map1 = data.map(c => c.length)
    const max1 = Math.max(...map1)
    this._coorLength[topic] = max1
    let mat = data.map(function(arr) {
      return arr.slice();
    })

	  let limitPoints = parseInt(opt.setup.limitPoints)
    if (!isNaN(limitPoints))
      mat = mat.slice(-limitPoints)

    Tool.transpose(mat)

    let labels = opt.setup.labels.split(',').map((i)=>i.trim())
    labels = labels.length == 1 && labels[0] == '' ? [] : labels

    let datasets = [];


    for (let i = 1; i < mat.length; i++){
      let bd = i < 7 ? Tool.colors(i - 1) : Tool.randomColor()

      datasets.push ({
        label: i - 1 < labels.length  ? labels [i - 1]: `Data ${i}`,
        data: mat[i],
        backgroundColor:bd[1],
        borderColor:bd[0],
        borderWidth:1
      })
    }
    return  {
            labels: mat[0],
            datasets:datasets
      }
  }
  /** Triggered when MQTT connection is established */
  onConnect (){
    bipes.page.dashboard.storagemanager.onConnect()
    this.isConnected = true
    this.subscribe()
  }
  /** Triggered when MQTT connection lost */
  onConnectionLost (){
    bipes.page.dashboard.storagemanager.onConnectionLost()
    this.isConnected = false
    this.topics.subscribed = []

  }
  /** Triggered when MQTT message received */
  onMessageArrived (message){
    let destination = Array(...message.destinationName.split('/'))
    let payload = String(message.payloadString)
    let session = destination.shift()
    this.write(destination.join('/'), payload, true)
  }
  /** Subscribe to topics listed */
  subscribe (){
    // Subscribe to all topics
    this.client.subscribe(`${easyMQTT.session}/#`)
    // Cache current session
    this.topics.session = easyMQTT.session
  }
  /** Unsubscribe to all subscribed topics */
  unsubscribe (){
    this.client.unsubscribe(`${this.topics.session}/#`)
    this.topics.session = false
  }
}

export let databaseMQTT = new MQTTDatabase()
