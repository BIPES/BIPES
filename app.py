from flask import Flask, Response, jsonify, render_template
from flask import request, redirect
from flask import render_template
import os
import glob
import socket
import struct
import re
import sqlite3

app_name = 'BIPES'
app_version = 'v0.01'

# Default language on server mode
# Note: this is overwritten by the Makefile's lang arg on the "make release" command.
default_lang = 'en'
# Languages available, used in the templates generators.
available_lang = ['en','pt-br','de','es']
# Note: Default theme is in the static/base/tool.js urlDefaults function.

# Libraries explicit set.
# Probably create a */package.json for directories, to it would be super easy to 
# implement complex plugins.
explicit_imports = [
    'blockly/blockly.umd',
    'blockly/blocks',
    'blockly/pythonic',
    'blockly/toolbox.umd'
]
# Language strings
lang_str = [
    # Global
    './static/msg/{{ lang }}.js',
    # Blockly
    './static/libs/blockly/msg/{{ lang }}.js'
]

# Create app for developemnt mode
def create_app(test_config=None):
    app = Flask(__name__)
    app.config.from_mapping(
      SECRET_KEY = 'dev',
      DATABASE = os.path.join(app.root_path, 'server/database.db')
    )
    if test_config is None:
        app.config.from_pyfile('server/config.py', silent=True)
    else:
        app.config.from_mapping(test_config)
    
    
    from server import database, mosquitto
    app.register_blueprint(database.bp)
    app.register_blueprint(mosquitto.bp)
 
    # Return "compiled" html file.
    @app.route("/ide")
    @app.route("/ide-<lang>")
    def call_ide(lang=None, import_type='module'):
        return ide(lang, import_type) 
        
    # Return concatanate styles.
    @app.route("/static/style.css")
    def style():
        return Response(concat_files("static/style/*.css"), mimetype='text/css')
    
    # Return "compiled" toolboxes xml embedded in a js file.
    @app.route("/static/libs/blockly/toolbox.umd.js")
    def blockly_toolbox():
        return Response(blockly_toolbox_generator(), mimetype='application/javascript')
        
    # Return concatanate blocks.
    @app.route("/static/libs/blockly/blocks.js")
    def blockly_blocks():
        return Response(concat_files("static/libs/blockly/blocks/*.js"), mimetype='application/javascript')
        
    # Return concatanate pythonic generators.
    @app.route("/static/libs/blockly/pythonic.js")
    def blockly_pythonic():
        return Response(concat_files("static/libs/blockly/pythonic/*.js"), mimetype='application/javascript')
    
    @app.route("/static/libs/bipes.umd.js")
    def bipes():
        return Response(bipes_imports(), mimetype='application/javascript')
    
    
    @app.route("/empty")
    def test(name=None):
        return render_template('empty.html')
    
    
    @app.route('/')
    def go_to_ide():
        return redirect("/ide", code=302)   
    

    return app
    
# Build BIPES static release
def build_release():
    # Build styles
    with open("static/style.css",'w') as f:
        f.write(concat_files("static/style/*.css"))
    # Build blockly toolboxes
    with open("static/libs/blockly/toolbox.umd.js",'w') as f:
        f.write(blockly_toolbox_generator())
    # Build blockly blocks and generator
    with open("static/libs/blockly/blocks.js",'w') as f:
        f.write(concat_files("static/libs/blockly/blocks/*.js"))
    with open("static/libs/blockly/pythonic.js",'w') as f:
        f.write(concat_files("static/libs/blockly/pythonic/*.js"))
    
    app = create_app()
    # "Compile" ide template as ide/index.html (default filename for servers)
    with app.app_context():
        for ln in available_lang:
            with open('ide-' + ln + '.html','w') as f:
                f.write(ide(import_type='text/javascript', lang=ln))

    with open("templates/libs/bipes.temp.js",'w') as f:
        with app.app_context():
            f.write(bipes_imports(import_type='text/javascript'))


# Generate the ide html file
def ide(lang=None, import_type='module'):
    lang = default_lang if lang == None else lang

    lang_imports = render_lang(lang)
    page = get_files_names("static/pages/*.js", r"^static/pages/(.*).js")
    imports = get_files_names("static/libs/*.js", r"^static/libs/(.*).js") + explicit_imports
    
    return render_template('ide.html', app_name=app_name, app_version=app_version,
                           page=page, imports=imports,
                           lang_imports=lang_imports, import_type=import_type)


# Render language string imports
def render_lang (lang):
    return [(src.replace('{{ lang }}', lang)) for src in lang_str]
    
    
# Concatanate files
def concat_files (rule):
    # Fetch files
    files = glob.glob(rule)
    _str = ""
    # Concatanate
    for _file in files:
        with open (_file) as f:
            for line in f:
                _str += line

    return _str

# Get file names
def get_files_names (bash, reg):
    files = glob.glob(bash)
    names = []

    for _file in files:
        match = re.match(reg, _file)
        names.append(match.group(1))
    return names


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
    base = get_files_names("static/base/*.js", r"^static/base/(.*).js")
    base.remove('dom'); base.remove('tool')
    page = get_files_names("static/pages/*.js", r"^static/pages/(.*).js")
    return render_template('libs/bipes.js', base=base,
                           page=page,
                           import_type=import_type)

