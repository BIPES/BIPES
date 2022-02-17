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
  /** Push identified dataset and coordinates to localStorage */
  push (dataset, coordinates) {
    if (coordinates.constructor.name != 'Array')
      return

    if (!this._keys.includes(dataset))
      this._keys.push (dataset),
      this._data[dataset] = []

    this._data[dataset].push(coordinates)

    storage.set(`datastorage:${dataset}`, JSON.stringify(this._data[dataset]))
    // Push to charts
    if (!this.ref !== undefined)
      this.ref.chartsPush(dataset, this._data[dataset], coordinates, this._coorLength)
  }
  /**
   * Remove topic from localStorage
   * @param {string} uid - Topic's uid.
   */
  remove (uid) {
		this._keys.forEach((dataset, index) => {
		  if (dataset == uid)
			  this._keys.splice(index,1)
		})
		delete this._data[uid]
  }
  chartData (dataset, opt) {
    if (!this._keys.includes(dataset)) {
      this._keys.push (dataset)
      if (storage.has(`datastorage:${dataset}`)) {
        this._data[dataset] = JSON.parse(storage.fetch(`datastorage:${dataset}`))
        const map1 = this._data[dataset].map(c => c.length)
        const max1 = Math.max(...map1)
        this._coorLength[dataset] = max1
     } else {
        this._data[dataset] = []
        this._coorLength[dataset] = 0
        storage.set(`datastorage:${dataset}`, JSON.stringify(this._data[dataset]))
      }
    }
    let mat = this._data[dataset].map(function(arr) {
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


