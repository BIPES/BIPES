from flask import Flask, Response, jsonify, render_template
from flask import request, redirect
from flask import render_template
import glob
import socket
import struct
import re

app = Flask(__name__)

app_name = 'BIPES'
app_version = 'v0.01'

# Default language on server mode
# Note: this is overwritten by the Makefile's lang arg on the "make release" command.
default_lang = 'en'
# Languages available, used in the templates generators.
available_lang = ['en','pt-br','de','es']
# Note: Default theme is in the static/base/tool.js urlDefaults function.

if __name__ == '__main__':
    app.run(port=5001)

# Libraries imports
imports = {
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
        }
}
# Language strings
lang_str = [
    # Global
    './static/msg/{{ lang }}.js',
    # Blockly
    './static/libs/blockly/msg/{{ lang }}.js'
]

# Navigation dictionary
class Navigation:
    def __init__ (self, caption, href, css_src=False):
        self.caption = caption
        self.href = href
        self.css_src = css_src
navigation = [
    Navigation('Blocks', 'blocks','blocks'),
    #Navigation('Dashboard','dashboard'),
    Navigation('Files','files','files'),
    Navigation('Notifications','notification'),
    #Navigation('Settings','admin'),
    Navigation('Terminal','prompt','prompt'),
    Navigation('Device','device','device'),
    Navigation('Projects','project','project')
    ];

# Base core files
base = {
    'command',
    'storage',
    'channel',
    'rosetta',
    'navigation'
}

# Render language string imports
def render_lang (lang):
    return [(src.replace('{{ lang }}', lang)) for src in lang_str]

# Generates the toolboxes per device
def blockly_toolbox_generator ():
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
    js = "let blockly_toolbox = {}\n"

    # Build the toolboxes per device
    for dev in devices:
        match = re.match(r"^templates/libs/blockly/devices/(.*).md", dev)
        dev_name = match.group(1)

        with open (dev) as f:
            lines = f.readlines()

        xml = ''
        for i in lines:
            xml += dict[i[0:len(i)-1]]

        js += "blockly_toolbox." + dev_name + " = `\n<xml>\n" + xml + "</xml>\n`\n\n"

    return js

# Return BIPES imports.
def bipes_imports(import_type='module'):
    return render_template('libs/bipes.js', base=base,navigation=navigation,
                           import_type=import_type)

# Build BIPES static release
def build_release ():
    # Build blockly toolboxes
    with open("static/libs/blockly/toolbox.umd.js",'w') as f:
        f.write(blockly_toolbox_generator())

    # "Compile" ide template as ide/index.html (default filename for servers)
    with app.app_context():
        for ln in available_lang:
            with open('ide-' + ln + '.html','w') as f:
                f.write(ide(import_type='text/javascript', lang=ln))

    with open("templates/libs/bipes.temp.js",'w') as f:
        with app.app_context():
            f.write(bipes_imports(import_type='text/javascript'))

 # Check is a object has a attribute, can also return another attribute if true
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
@app.route("/ide-<lang>")
def ide(lang=None, import_type='module'):
    lang = default_lang if lang == None else lang

    lang_imports = render_lang(lang)

    return render_template('ide.html', app_name=app_name, app_version=app_version,
                           navigation=navigation, imports=imports,
                           lang_imports=lang_imports, import_type=import_type)



# Return "compiled" toolboxes xml embedded in a js file.
@app.route("/static/libs/blockly/toolbox.umd.js")
def blockly_toolbox():
    return Response(blockly_toolbox_generator(), mimetype='application/javascript')

@app.route("/static/libs/bipes.umd.js")
def bipes():
    return Response(bipes_imports(), mimetype='application/javascript')


@app.route("/empty")
def test(name=None):
    return render_template('empty.html')


@app.route('/')
def go_to_ide():
    return redirect("/ide", code=302)

