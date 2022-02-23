"use strict"

let MicroPython = {
  mkdir:{
    cmd: (path, folder) => `import os; os.mkdir("${path}/${folder}")\r`,
    reg: /import os; os\.mkdir\("(.*)\/(?:.*)"\)/
  },
  exec:{
    cmd: (filename) => `exec(open("${filename}").read(),globals())\r`,
    reg: /exec\(open\("(.*)"\).read\(\)\.globals\(\)\)/
  },
  rm:{
    cmd: (filename) => `import os; os.remove("${filename}")\r`,
    reg: /os\.remove\("(.*)\/(.*)"\)/
  },
  write:{
    cmd: (filename, content) =>
      `f=open("${filename}",'w')\n` +
      `f.write('${content}')\n` +
      `f.close()\n`,
    reg: /=== f=open\("(.*)\/(?:.*)",'w'\)/
  },
  preopen:{
    cmd: (filename) => `import uos, sys; uos.stat("${filename}")\r`
  },
  open:{
    cmd: (filename) =>
      `with open("${filename}", 'rb') as infile:\n` +
      `\twhile True:\n\t\tresult = infile.read(32)\n` +
      `\t\tif result == b'':\n` +
      `\t\t\tbreak\n` +
      `\t\tlen = sys.stdout.write(result)\n`,
    reg: /with open\("(.*)", 'rb'\) as infile:/
  },
  ls:{
    cmd: (path) => `import os; os.listdir('${path}')\r`,
    reg:  /\import os; os\.listdir\('(.*)'\)/
  },
  uname:{
    cmd:() => `import os; os.uname()\r`,
    reg: /import os; os\.uname\(\)/,
    reg_str: /nodename='(.*?)', release='(.*?)'/
  },
  error:{
    reg: /OSError: ([0-9]{1,})/
  }
}

// ::TODO:: Check differences! This is exact copy of MicroPython
let CircuitPython = {
  mkdir:{
    cmd: (path, folder) => `import os; os.mkdir("${path}/${folder}")\r`,
    reg: /import os; os\.mkdir\("(.*)\/(?:.*)"\)/
  },
  exec:{
    cmd: (filename) => `exec(open("${filename}").read(),globals())\r`,
    reg: /exec\(open\("(.*)"\).read\(\)\.globals\(\)\)/
  },
  rm:{
    cmd: (filename) => `import os; os.remove("${filename}")\r`,
    reg: /os\.remove\("(.*)\/(.*)"\)/
  },
  write:{
    cmd: (filename, content) =>
      `f=open("${filename}",'w')\n` +
      `f.write('${content}')\n` +
      `f.close()\n`,
    reg: /=== f=open\("(.*)\/(?:.*)",'w'\)/
  },
  preopen:{
    cmd: (filename) => `import uos, sys; uos.stat("${filename}")\r`
  },
  open:{
    cmd: (filename) =>
      `with open("${filename}", 'rb') as infile:\n` +
      `\twhile True:\n\t\tresult = infile.read(32)\n` +
      `\t\tif result == b'':\n` +
      `\t\t\tbreak\n` +
      `\t\tlen = sys.stdout.write(result)\n`,
    reg: /with open\("(.*)", 'rb'\) as infile:/
  },
  ls:{
    cmd: (path) => `import os; os.listdir('${path}')\r`,
    reg:  /\import os; os\.listdir\('(.*)'\)/
  },
  uname:{
    cmd:() => `import os; os.uname()\r`,
    reg: /import os; os\.uname\(\)/,
    reg_str: /nodename='(.*?)', release='(.*?)'/
  },
  error:{
    reg: /OSError: ([0-9]{1,})/
  }
}

export let rosetta = {
  map:{
    MicroPython:MicroPython,
    CircuitPython:CircuitPython
  },
  get languages (){
    return Object.keys(this.map)
  },
  current:undefined,
  language (str){
    for (let key in this.map){
      if (str == key){
        this.current = this.map[key]
        return str
      }
    }
    // If not found, return default
    this.current = this.map.MicroPython
    return 'MicroPython'
  },
  get mkdir (){
    return this.current.mkdir
  },
  get exec (){
    return this.current.exec
  },
  get rm (){
    return this.current.rm
  },
  get write (){
    return this.current.write
  },
  get preopen (){
    return this.current.preopen
  },
  get open (){
    return this.current.open
  },
  get ls (){
    return this.current.ls
  },
  get uname (){
    return this.current.uname
  },
  get error (){
    return this.current.error
  }
}

