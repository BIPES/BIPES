Development
=================================

BIPES is an Open Source Project with General Public Licence (GPL) and is based and integrates several other open tools, such as Google Blockly and others. The main source code for BIPES is divided in 3 repositories below.

Block based User Interface and Code Generator
-------------------------------------------------

Main BIPES code. Source codes are available at `github.com/BIPES/BIPES/ <https://github.com/BIPES/BIPES/>`_.

SocketServerWebREPL
-------------------------------------------------

Optional code, allowing the execution of a Python Interactive console over a WebSocket connection. Using this server, the blocks are automatically translated into Python code, sent to a Linux based device, and executed from the blocks.

Source codes are available at `github.com/rafaelaroca/SocketServerWebREPL <https://github.com/rafaelaroca/SocketServerWebREPL>`.

ServerSerial
-------------------------------------------------

Optional code, which allows a USB device, such as ESP32, ESP8266 or mBed boards to be controlled / programmed from the BIPES web application. Basically, this software receives a WebSocket connection from the browser and translates into USB-Serial communication. In the future, this will also integrate actions to bufn firmware using esptool and avrdude.

Source codes are available at `github.com/rafaelaroca/SerialWebSocketServer <https://github.com/rafaelaroca/SerialWebSocketServer>`_.

Softwares used/integrated/adapted for BIPES Project
-------------------------------------------------------

`Google Blockly <https://developers.google.com/blockly>`_

`WebREPL from MicroPython project <https://github.com/micropython/webrepl>`_

`socketserverREPL <https://github.com/iwanders/socketserverREPL>`_

`PyWSocket <https://github.com/sanketplus/PyWSocket>`_

`CodeMirror HTML text editor <https://codemirror.net/>`_

`Freeboard <https://github.com/Freeboard/freeboard>`_

`Snek Language <https://sneklang.org/>`_

Related / similar projects
-------------------------------------------------------

`TUNIOT for ESP8266 <http://easycoding.tn/tuniot/demos/code/>`_

`Blopy (Blockly + Python) <https://github.com/mnoriaki/Blopy>`_

`Microsoft MakeCode <https://www.microsoft.com/en-us/research/project/microsoft-makecode/>`_

`UIFlow <https://flow.m5stack.com/>`_

`EduBlocks <https://edublocks.org/>`_

`Piper Make <https://make.playpiper.com/>`_

