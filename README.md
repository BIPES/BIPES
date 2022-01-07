# BIPES: Block based Integrated Platform for Embedded Systems (New base DEMO)

## Building

To build BIPES, first check if `npm`, `python` and `pip` are installed:

```
sudo dnf install npm python pip
```

Then run
```
make
```
which will fetch and "compile" some dependecies like
Codemirror6, xterm.js, and blockly.

After the command finishes, a flask server will initiate on port 5001.

Just enter http://127.0.0.1:5001/ide in the browser.

For subsequent executions, just do `make run`.


### Notes
`make offline`(offline version) and `make doc` (documentation)
are currently missing.

Only WebSerial is implemented.
