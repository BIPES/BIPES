from flask import Flask, Response, jsonify, render_template
from flask import request
from flask import render_template
import glob
import socket
import struct
import re

app = Flask(__name__)

app_name = 'BIPES'
app_version = 'v0.01'

if __name__ == '__main__':
    app.run(port=5001)

# Bibliotecas
npm  = {
    "xtermjs":{
        'import':True,
        'src':'./static/libs/xterm.umd.js'
        },
    # Codemirror rollup script
    "codemirror":{
        'import':True,
        'src':'./static/libs/codemirror.umd.js'
        },
    # Blockly imported scripts
    "blockly_blockly":{
        'import':True,
        'src':'./static/libs/blockly/blockly.umd.js'
        },
    "blockly_blocks":{
        'import':True,
        'src':'./static/libs/blockly/blocks.umd.js'
        },
    "blockly_blocks_extra":{
        'import':True,
        'src':'./static/libs/blockly/blocks-extra.js'
        },
    "blockly_msg_en":{
        'import':True,
        'src':'./static/libs/blockly/msg/en.js'
        },
    # Blockly compiled toolbox
    "blockly_toolbox":{
        'import':True,
        'src':'./static/libs/blockly/toolbox.umd.js'
        },
    # Blockly custom scripts
    "blockly_micropython":{
        'import':True,
        'src':'./static/libs/blockly/micropython.js'
        },
    "blockly_micropython_extra":{
        'import':True,
        'src':'./static/libs/blockly/micropython-extra.js'
        },
}

# Dicionário da navegação
class Navigation:
    def __init__ (self, js_class, caption, href, css_src=False):
        self.js_class = js_class
        self.caption = caption
        self.href = href
        self.css_src = css_src
navigation = [
    Navigation('Blocks', 'Blocks', 'blocks','blocks'),
    #Navigation('Dashboard', 'Dashboard','dashboard'),
    Navigation('Files','Files','files','files'),
    Navigation('Notification','Notifications','notification'),
    #Navigation('Admin','Settings','admin'),
    Navigation('Console','Console','console','console'),
    Navigation('Device','Device','device','device'),
    Navigation('Project','Projects','project','project')
    ];

 # Verifica se objeto possui propriedade, e pode retornar outra propriedade
def has_in (name, array, attr, return_attr=None):
    for item in array:
        if getattr(item, attr) == name:
            if (return_attr==None):
                return True
            else:
                return getattr(item, return_attr)
    return False

# Return "compiled" html file.
@app.route("/ide")
def ide(name=None):
    name = name if has_in(name, navigation, 'href') else None

    return render_template('ide.html', app_name=app_name, app_version=app_version,
                           navigation=navigation, name=name, npm=npm)



# Return "compiled" toolboxes xml embedded in a js file.
@app.route("/static/libs/blockly/toolbox.umd.js")
def blockly_toolbox(name=None):

    # Fetch definitions and blocks per device
    definitions = glob.glob("templates/libs/blockly/definitions/*.md")
    devices = glob.glob("templates/libs/blockly/devices/*.md")

    # Definitions dictionary
    dict = {}

    # Build the definitions dictionary
    for d in definitions:
        f = open(d,'r')
        a = f.read()
        pattern = re.compile(r"^# (.*)$", re.MULTILINE)

        m = ''
        l = (0,0)
        for match in pattern.finditer(a):
            i = l[1]
            l = match.span()
            if l[0] - 1 == -1:
                dict[m] = a[i+1:l[0]]
            else:
                dict[m] = a[i+1:l[0]-1]

            m = match.group(1)
            dict[m] = a[i+1:l[0]-1]

    # toolbox.umd.js string
    js = ''

    # Build the toolboxes per device
    for dev in devices:
        match = re.match(r"^templates/libs/blockly/devices/(.*).md", dev)
        dev_name = match.group(1)

        with open (dev) as f:
            lines = f.readlines()

        xml = ''
        for i in lines:
            xml += dict[i[0:len(i)-1]]

        js += "let blockly_toolbox_" + dev_name + " = `\n<xml>\n" + xml + "</xml>\n`\n\n"

    return Response(js, mimetype='application/javascript')

@app.route("/test")
def test(name=None):
    return render_template('test.html')

