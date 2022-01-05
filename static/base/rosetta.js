"use strict"

export {Rosetta}

class Rosetta {
  constructor () {}
  static set (mode) {
    switch (mode) {
      case 'MicroPython':
        return MicroPython
    }
  }
}

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
