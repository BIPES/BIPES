# BIPES: Block based Integrated Platform for Embedded Systems

## Build from source

To build BIPES, run
```
make
```
and follow the prompts.

It will install the dependencies, fetch and "compile" 
some JavaScript libraries and run a development server on port 5001.

Just enter http://127.0.0.1:5001/ide in the browser!

For subsequent runs in development mode, do 
```
make run
```
In development mode, different languages are acessed by including the language 
code to the link, e.g. http://127.0.0.1:5001/ide-de loads the IDE in german.

For more information about the Makefile, the dependencies and libraries, check the Notes.


## Build release

The release is a static version of BIPES than can be run both serverless or
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

## Notes

### Additional Makefile information

#### Dependencies

BIPES use as dependencies the packages:
 * npm
 * python
 * pip
 * mosquitto
 
The Makefile will automatically use either `dnf` or `apt` to install these dependencies, 
but if you desire to use `flatpak` or `snap` pass either one to the flag:
```
make source=snap
```
#### JavaScript libraries

The JavaScript libraries are:
 * Codemirro6
 * xterm.js
 * blockly

which are directly fetched or "compiled" with `node.js`.
The development server is written in flask.

#### Setting up another default language to BIPES release

By default, the main */ide.html* loads the english version, however, to link to another 
language, like brazilian portuguese, do
```
make release lang=pt-br
```
On a server, its good to link *ide-\*.html* as *ide-\**, making the url
friendlier.

### Other notes
`make doc` (documentation) is missing.
Bluetooth was not tested at all.
