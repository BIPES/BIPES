# BIPES: Block based Integrated Platform for Embedded Systems (New base DEMO)

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
Codemirror6, xterm.js, and blockly and init a development server on port 5001
written in flask.

Then just enter http://127.0.0.1:5001/ide in the browser to use BIPES.

For subsequent executions in development mode, just do `make run`.

### Build BIPES release

BIPES release is a static version of BIPES than can be run both serverless or
with a server.

BIPES serverless provides all functionalities that do not require a dynamic loading.

To generate this version do
```
make release
```
it will generate a tiny BIPES.zip file, which contain only the essential files.

With this, extract anywhere and open the *ide-en.html* file to use BIPES serverless 
or include in a server to allow external requests (CORS policies).

By default, it will build in english, hence the *-en*.
To build in another language, like brazilian portuguese, do

```
make release lang=pt-br
```
and it will generate *BIPES.zip* with a *ide-pt-br.html* file.

Note: only the *ide-\*.html* file changes between different language builds, 
therefore, for multiple languages in the static version, just keep mutiple
*ide-\*.html* files in the zip's root folder. 

### Notes
`make doc` (documentation) is missing.
Bluetooth was not tested at all.
