# BIPES: Block based Integrated Platform for Embedded Systems.

![BIPES](bipes.png)


BIPES allows anyone to quickly and reliably design, program, build, deploy and test embedded systems and IOT devices and applications. It is fully based on a web environment, so absolutely no software install is needed on the client / developer machine. 

More information at the project website: [bipes.net.br](https://bipes.net.br/).

## Live version
Try it now at: [bipes.net.br/ide](https://bipes.net.br/ide).

## Usage

To init submodules, like [BIPES/freeboard](https://github.com/BIPES/freeboard) and [BIPES/Databoard](https://github.com/BIPES/Databoard), run:
```
make submodules
```

To build/update the offline version with latest, run:
```
make offline
```
This version does not require a server since it has all core files concatanated at `ui/index_offline.html`, just open this file in a browser. It will also create a `bipes_offline.zip`. Howver, keep in mind that any tool that requires a server, like MQTT, won't work due to [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

That's it, enjoy BIPES 😄.


## Documentation

The documentation is online at [bipes.net.br/docs](https://bipes.net.br/docs).

To build the documentation out of a fresh clone, do:
```
make doc
```
after having installed the theme, [sphinx](https://www.sphinx-doc.org/en/master/) and [sphinx-js](https://pypi.org/project/sphinx-js/).
```
pip install sphinx sphinx-js furo
```
## More information
Some functions of `ui/index.html` were based on Blopy project (https://github.com/mnoriaki/Blopy), by Noriaki Mitsunaga
 (https://github.com/mnoriaki).
 
 OpenCV blocks were automatically generated using berak's OpenCV to Blockly generator (https://github.com/berak/blockly-cv2/tree/master/gen).
 
We also use `xterm.js` (https://github.com/xtermjs/xterm.js/) and `codemirror.js` (https://github.com/codemirror/codemirror).
