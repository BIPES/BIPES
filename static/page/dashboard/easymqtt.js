import {Tool} from '../../base/tool.js'

import {storage} from '../../base/storage.js'
import {navigation} from '../../base/navigation.js'

export let easyMQTT = {
  passwd: undefined,
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
      this.do(`passwd`)
        .then(obj => {
          if (obj.easyMQTT.passwd === false)
            return
          easyMQTT.passwd = obj.easyMQTT.passwd
          // Port 9001 for WebSockets
          this.client = new Paho.MQTT.Client(location.hostname, 9001, `bipes${new Date()}`)
          this.client.onConnectionLost = () => {this.onConnectionLost()}
          this.client.onMessageArrived = (message) => {this.onMessageArrived(message)}
          this.client.connect({
            //useSSL:true,
            userName : "bipes",
            password : easyMQTT.passwd,
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
              this.ref.regenCharts('easyMQTT')
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
                    obj[easyMQTT.session].forEach(data => {
                      this.write(topic.topic, data.data)
                    })

                    this.topics.fetching.splice(this.topics.fetching.indexOf(topic.topic), 1)
                    if (this.topics.fetching.length === 0){
                      this.ref.regenCharts('easyMQTT')
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
      method:'Get'
    })

    if (!response.ok)
      throw new Error(response.status)

    return await response.json ()
  }
  /**
   * Checks the income MQTT topic for comma divided data.
   * @param {boolean} chartsPush - True to push data to current charts on grid.
   */
  async write (topic, chunk, chartsPush){
    let coordinates = chunk.split(',').map((item)=>item = parseFloat(item))
    if (coordinates.every((item) => !isNaN(item)))
      this.push (topic, coordinates, chartsPush)
  }
  /**
   * Push identified topic and coordinates to memory.
   * @param {boolean} chartsPush - True to push data to current charts on grid.
   */
  push (topic, coordinates, chartsPush) {
    if (coordinates.constructor.name != 'Array')
      return

    if (!this._data.hasOwnProperty(topic)){
      this._keys.push(topic)
      this._data[topic] = []
      this._coorLength[topic] = 0
    }

    this._data[topic].push(coordinates)
    // Push to charts
    if (this.ref !== undefined && chartsPush === true){
      this.ref.chartsPush(topic, this._data[topic], coordinates, this._coorLength)
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

    this.transpose (mat)

    let labels = opt.setup.labels.split(',').map((i)=>i.trim())
    labels = labels.length == 1 && labels[0] == '' ? [] : labels

    let datasets = [];


    for (let i = 1; i < mat.length; i++){
      let bd = i < 7 ? Tool.colors(i - 1) : this.randomColor()

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
  transpose (mat) {
    for (var i = 0; i < mat.length; i++) {
          for (var j = 0; j < i; j++) {
              const tmp = mat[i][j]
              mat[i][j] = mat[j][i]
              mat[j][i] = tmp
          }
      }
    mat.forEach((sets, index) => {
      if (!sets.some(set => set != undefined)){
        return mat.splice(index)
      }
    })
    return mat
  }
  randomColor() {
    let a = parseInt(Math.random()*255)
    let b = 255 - a
    let c = 255 - a - b

    return [`rgba(${a},${b}.${c},0.8)`,`rgba(${a},${b}.${c},1.0)`]

  }
  /** Triggered when MQTT connection is established */
  onConnect (){
    console.log('Dashboard: MQTT connection established.')
    this.isConnected = true
    this.subscribe()
  }
  /** Triggered when MQTT connection lost */
  onConnectionLost (){
    console.log('Dashboard: MQTT connection lost.')
    this.isConnected = false
    this.topics.subscribed = []

  }
  /** Triggered when MQTT message received */
  onMessageArrived (message){
    let destination = Array(...message.destinationName.split('/'))
    let payload = String(message.payloadString)
    let session = destination[0]
    destination.shift()
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
