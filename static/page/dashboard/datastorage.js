"use strict";

import {storage} from '../../base/storage.js'
import {Tool} from '../../base/tool.js'

import {DOM, Animate} from '../../base/dom.js'

/** Store incoming data in localStorage */
class DataStorage {
  constructor (){
    this._data = []
    this._keys = []
    this._coorLength = {}
    this.buffer = ''        // Incoming lines
    this.ref   // Reference the grid object
  }
  /** Init datastorage referencing the grid object */
  init (ref){
    this.ref = ref
  }
  /** Deinit datastorage visual, dereference the grid object */
  deinit (){
    this.ref = undefined
  }
  /** Checks the income data for useful chuncks, like ``$BIPES-DATA:`` for plotting */
  write (chunk){
    this.buffer += chunk
    let re = /\r\n\$(.*):(.*)\r\n/
    let match_

    if (re.test(this.buffer)) {
      match_ = this.buffer.match(re)
      if (match_.length == 3) {
        let coordinates = match_ [2].split(',').map((item)=>item = parseFloat(item))
        this.push(match_[1],coordinates)
      }
    }
    this.buffer = this.buffer.replace(re, '\r\n') //purge received string out
  }
  /** Push identified topic and coordinates to localStorage */
  push (topic, coordinates) {
    if (coordinates.constructor.name != 'Array')
      return

    if (!this._keys.includes(topic))
      this._keys.push (topic),
      this._data[topic] = []

    this._data[topic].push(coordinates)

    storage.set(`datastorage:${topic}`, JSON.stringify(this._data[topic]))
    // Push to charts
    if (this.ref !== undefined){
      this.ref.chartsPush(topic, this._data[topic], coordinates, this._coorLength)
    }
  }
  /**
   * Remove topic from localStorage
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
    if (!this._keys.includes(topic)) {
      this._keys.push (topic)
      if (storage.has(`datastorage:${topic}`)) {
        this._data[topic] = JSON.parse(storage.fetch(`datastorage:${topic}`))
        const map1 = this._data[topic].map(c => c.length)
        const max1 = Math.max(...map1)
        this._coorLength[topic] = max1
     } else {
        this._data[topic] = []
        this._coorLength[topic] = 0
        storage.set(`datastorage:${topic}`, JSON.stringify(this._data[topic]))
      }
    }
    let mat = this._data[topic].map(function(arr) {
      return arr.slice();
    });

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
}

export let dataStorage = new DataStorage()


