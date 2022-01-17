# BIPES: Block based Integrated Platform for Embedded Systems

## Build BIPES from source

To build BIPES, first check if `npm`, `python` and `pip` are installed:

```
sudo dnf install npm python pip
```

Then run
```
make
```
which will fetch and "compile" some dependecies like
Codemirror6, xterm.js, and blockly and run a development server on port 5001
written in flask.

Just enter http://127.0.0.1:5001/ide in the browser to use BIPES.

For subsequent runs in development mode, just do 
```
make run
```
In the development mode, different languages are acessed by including the language 
code to the link, e.g. http://127.0.0.1:5001/ide-de loads in german.


### Build BIPES release

BIPES release is a static version of BIPES than can be run both serverless or
with a server.

BIPES serverless provides all functionalities that do not require a dynamic loading.

To generate this version do
```
make release
```
it will generate a tiny BIPES.zip file, which contain only the essential files 
plus many *ide-\*.html* files, each linking to language, e.g. *ide-es.html* 
loads the spanish version.

With this, extract anywhere and open the desired *ide-\*.html* file to use BIPES 
serverless or include in a server to allow external requests 
([CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policies).

By default, the main */ide.html* loads the english version, however, to link to another 
language, like brazilian portuguese, do
```
make release lang=pt-br
```
Note: On a server, its good to link *ide-\*.html* as *ide-\**, making the url
friendlier.

### Notes
`make doc` (documentation) is missing.
Bluetooth was not tested at all.
