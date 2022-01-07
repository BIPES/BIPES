# BIPES: Block based Integrated Platform for Embedded Systems

## Building

To build BIPES, first check if `npm`, `python` and `pip` are installed:

```
sudo dnf install npm python pip

```

Then run `make`, which will fetch and "compile" some dependecies like
`codemirror6`, `xterm.js`, and `blockly`.

After the command finishes, a `flask` server will initiate on port `5001`.

For subsequent executions, just do `make run`.


### Notes
`make offline` for the offline version and `make doc` for documentation, 
are currently missing.
