from flask import Flask, Response, jsonify, render_template
from flask import request
from flask import render_template
import socket
import struct

app = Flask(__name__)

app_name = 'BIPES'
app_version = 'v0.01'

if __name__ == '__main__':
    app.run(port=5001)

# Bibliotecas
npm  = {
    "dashjs":{
        'import':False,
        'src':'https://cdn.dashjs.org/latest/dash.all.debug.js'
        },
    "xtermjs":{
        'import':True,
        'src':'https://unpkg.com/xterm@4.15.0/lib/xterm.js'
        },
    "codemirror":{
        'import':True,
        'src':'./static/libs/codemirror.bundle.js'
        }
}

# Dicionário da navegação
class Navigation:
    def __init__ (self, js_class, caption, href, css_src=False):
        self.js_class = js_class
        self.caption = caption
        self.href = href
        self.css_src = css_src
navigation = [
    #Navigation('Dashboard', 'Dashboard','dashboard'),
    Navigation('Files','Files','files','files'),
    Navigation('Notification','Messages','notification'),
    #Navigation('Admin','Settings','admin'),
    Navigation('Console','Console','console','console')
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

# Return "compiled" html file
@app.route("/dashboard")
def dashboard(name=None):
    name = name if has_in(name, navigation, 'href') else None

    return render_template('dashboard.html', app_name=app_name, app_version=app_version,
                           navigation=navigation, name=name, npm=npm)



# Return "compiled" html file
@app.route("/test")
def test(name=None):
    return render_template('test.html')
