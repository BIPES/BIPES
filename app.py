from flask import Flask, Response, jsonify, render_template
from flask import request, redirect, make_response
from flask import render_template

import os
import glob
import socket
import re
from configparser import ConfigParser

app_name = 'BIPES'
app_version = '3.0.10'

# Default language on server mode
# Note: this is overwritten by the Makefile's lang arg on the "make release" command.
default_lang = 'en'
# Languages available, used in the templates generators.
available_lang = {
    'en':'English',
    'pt-br':'Brazilian Portuguese',
    'de':'German',
    'es':'Spanish',
    'fr':'French',
    'it':'Italian',
    'nb':'Norwegian',
    'zh-hans':'Chinese (simplified)',
    'zh-hant':'Chinese (traditional)'
}
# Note: Default theme is in the static/base/tool.js urlDefaults function.

# Preferred order in the navigation bar
pref_order = ['blocks', 'dashboard', 'device', 'prompt', 'files', 'notification']
last_in_order = 'project'
def preferred_page_order(page):
    _page = []
    for elem in pref_order:
        if elem in page:
            _page.append(elem)
            page.remove(elem)

    _page.extend(page)

    if last_in_order in page:
        _page.remove(last_in_order)
        _page.append(last_in_order)

    return _page

# Libraries explicit set.
# Probably create a */package.json for directories, to it would be super easy to 
# implement complex plugins.
explicit_imports = [
    'page/blocks/blocks.umd',
    'page/blocks/pythonic.umd',
    'page/blocks/toolbox.umd'
]
# Language strings
lang_str = [
    # Global
    'msg/{{ lang }}.js',
    # Blockly
    'page/blocks/msg/{{ lang }}.js'
]

# Create app for developemnt mode
def create_app(database="sqlite"):
    assert database == "sqlite" or database == "postgresql" or database == None, \
           'Invalid database engine "' + database + '"'

    app = Flask(__name__)

    # Parse server/conf.ini
    conf = ConfigParser()
    conf.read(os.path.join(app.root_path,'server/conf.ini'))
    assert len(conf) > 0,\
        'Config file server/conf.ini does not exist, do make conf to generate it'
    assert 'flask' in conf and 'password' in conf['flask'], \
        'No flask password provided in server/conf.ini'

    app.config.from_mapping(
      SECRET_KEY = conf['flask']['password']
    )

    if database == "postgresql":
        assert 'postgresql' in conf and \
            set(['host','database_api','database_mqtt','user','password']) \
                .issubset(set(conf['postgresql'])), \
            'No postgresql host, database, user or password provided in server/conf.ini'
        app.config.from_mapping(
          DATABASE = 'postgresql',
          POSTGRESQL_HOST = conf['postgresql']['host'],
          POSTGRESQL_DATABASE_API = conf['postgresql']['database_api'],
          POSTGRESQL_DATABASE_MQTT = conf['postgresql']['database_mqtt'],
          POSTGRESQL_USER = conf['postgresql']['user'],
          POSTGRESQL_PASSWORD = conf['postgresql']['password'],
          API = 'api',
          MQTT = 'mqtt'
        )
        print(' * Database: postgresql')
    elif database == 'sqlite':
        app.config.from_mapping(
          DATABASE = 'sqlite',
          API = os.path.join(app.root_path, 'server/api.db'),
          MQTT = os.path.join(app.root_path, 'server/mqtt.db')
        )
        print(' * Database: sqlite')

    if database is not None:
        from server.common import api, mqtt

        app.register_blueprint(api.bp)
        app.register_blueprint(mqtt.bp)

    # Return "compiled" html file.
    @app.route("/ide")
    @app.route("/ide-<lang>")
    def call_ide(lang=None, import_type='module'):
        return ide(lang, import_type) 
        
    # Return concatanate styles.
    @app.route("/static/style.css")
    def style():
        return Response(
            concat_files("static/style/*.css") + \
            concat_files("static/page/*/style.css"),
            mimetype='text/css')

    # Return "compiled" toolboxes xml embedded in a js file.
    @app.route("/static/page/blocks/toolbox.umd.js")
    def blockly_toolbox():
        return Response(blockly_toolbox_generator(), mimetype='application/javascript')
        
    # Return concatanate blocks.
    @app.route("/static/page/blocks/blocks.umd.js")
    def blockly_blocks():
        return Response(concat_files("static/page/blocks/blocks/*.js"), mimetype='application/javascript')
        
    # Return concatanate pythonic generators.
    @app.route("/static/page/blocks/pythonic.umd.js")
    def blockly_pythonic():
        return Response(concat_files("static/page/blocks/pythonic/*.js","basic.js"), mimetype='application/javascript')
    
    @app.route("/static/libs/bipes.umd.js")
    def bipes():
        return Response(bipes_imports(), mimetype='application/javascript')
    
    
    @app.route("/empty")
    def test(name=None):
        return render_template('empty.html')
    
    
    @app.route('/')
    def go_to_ide():
        return redirect("/ide", code=302)

    # Return serviceworker.
    @app.route("/serviceworker.js")
    def service_worker():
        response = make_response(service_worker_imports(import_type='module'))
        response.headers['Content-Type'] = 'application/javascript'
        response.headers['Service-Worker-Allowed'] = '/'
        return response

    if database is None:
        return app

    # Init mqtt subscriber
    if 'mosquitto' in conf and 'password' in conf['mosquitto']:
        # Run only in main process
        if os.environ.get("WERKZEUG_RUN_MAIN") == "true":
            try:
                mqtt.listen(app, conf['mosquitto'])
            except ConnectionRefusedError:
                app.logger.warning('Mosquitto refused to connect')
    else:
        app.logger.warning('No mosquitto password in server/conf.ini, skipping')
      
    return app

# Generate server/conf.ini file
def conf_ini(flask=None, mosquitto=None):
    conf = ConfigParser()
    conf.read('server/conf.ini')
    # Setup file for the first time
    if flask is not None:
        conf['flask'] = {'password':flask}
        conf['postgresql'] = {'host':'localhost',
                                'database_api':'bipes_api',
                                'database_mqtt':'bipes_mqtt',
                                'user':'postgres',
                                'password':''}
        with open('server/conf.ini', 'w') as conf_file:
            conf.write(conf_file)
    if mosquitto is not None:
        conf['mosquitto'] = {
            'password':mosquitto,
            'ssl':False
        }
        with open('server/conf.ini', 'w') as conf_file:
            conf.write(conf_file)

# Build BIPES static release
def build_release():
    # Build styles
    with open("static/style.css",'w') as f:
        f.write(
            concat_files("static/style/*.css") + \
            concat_files("static/page/*/style.css")
            )
    # Build blockly toolboxes
    with open("static/page/blocks/toolbox.umd.js",'w') as f:
        f.write(blockly_toolbox_generator())
    # Build blockly blocks and generator
    with open("static/page/blocks/blocks.umd.js",'w') as f:
        f.write(concat_files("static/page/blocks/blocks/*.js", "micropython.js"))
    with open("static/page/blocks/pythonic.umd.js",'w') as f:
        f.write(concat_files("static/page/blocks/pythonic/*.js", "basic.js"))

    app = create_app(None)
    # "Compile" ide template as ide/index.html (default filename for servers)
    with app.app_context():
        for ln in available_lang:
            with open('ide-' + ln + '.html','w') as f:
                f.write(ide(import_type='text/javascript', lang=ln))

    with open("templates/libs/bipes.temp.js",'w') as f:
        with app.app_context():
            f.write(bipes_imports(import_type='text/javascript'))
    # Build service worker
    with open("static/libs/serviceworker.temp.js",'w') as f:
        with app.app_context():
            f.write(service_worker_imports(import_type='text/javascript'))


# Generate the ide html file
def ide(lang=None, import_type='module'):
    lang = default_lang if lang == None else lang

    lang_imports = render_lang(lang)
    page = get_files_names("static/page/*/main.js", r"^static/page/(.*)/main.js")
    imports = get_files_names("static/libs/*.umd.js", r"^static/libs/(.*).js")
    
    page = preferred_page_order(page)
  
    return render_template('ide.html', app_name=app_name, app_version=app_version,
                           page=page, imports=imports, explicit_imports=explicit_imports,
                           lang_imports=lang_imports, lang=lang,
                           import_type=import_type)

# Render language string imports
def render_lang (lang):
    return [(src.replace('{{ lang }}', lang)) for src in lang_str]
    
    
# Concatanate files
def concat_files (rule, first=None):
    # Fetch files
    files = glob.glob(rule)
    _str = ""
    if first is not None:
        for _file in files:
            if _file.find(first) != -1:
                with open (_file) as f:
                    for line in f:
                        _str += line
                files.remove(_file)

    # Concatanate
    for _file in files:
        if _file is not first:
            with open (_file) as f:
                for line in f:
                    _str += line

    return _str

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
    definitions = glob.glob("templates/page/blocks/definitions/*.md")
    devices = glob.glob("templates/page/blocks/devices/*.md")

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
        match = re.match(r"^templates/page/blocks/devices/(.*).md", dev)
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
    page = get_files_names("static/page/*/main.js", r"^static/page/(.*)/main.js")

    return render_template('libs/bipes.js', base=base,
                           page=page, import_type=import_type,
                           available_lang=available_lang)

# Return service worker imports.
def service_worker_imports(lang=None, import_type='module'):
    lang_imports = []
    for key in available_lang:
        lang_imports += render_lang(key)

    static_images = []
    for item in ['static/page/device/media', 'static/page/blocks/images', 'static/page/blocks/media']:
        _names = get_files_names(item+"/*", re.compile("^" + item + "/(.*)"))
        _names = [item[7:] + "/" + _name for _name in _names]
        static_images += _names

    imports = get_files_names("static/libs/*.umd.js", r"^static/libs/(.*).js")

    return render_template('libs/serviceworker.js', app_version=app_version,
                           imports=imports, explicit_imports=explicit_imports,
                           lang_imports=lang_imports, static_images=static_images,
                           available_lang=available_lang, import_type=import_type)




