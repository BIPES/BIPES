Channels
=================================

This page describes everthing about the `core/channel.js` file, which provides classes
to connect to a device with different protocols.

BIPES uses `Web Serial API <https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API>`_,
`Web Bluetooth API <https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API>`_ and `WebSocket API <https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API>`_, in which we handle inside the ``_WebSerial``, ``_WebBluetooth`` and ``_WebSocket`` classes respectively.
All of them inside the `core/channel.js` along side the ``Channel`` class, a `'multiplexer' <https://en.wikipedia.org/wiki/Multiplexer>`_ between these protocols.

Web Serial API and Web Bluetooth API require `HTTPS <https://developer.mozilla.org/en-US/docs/Glossary/https>`_ for the server version, while the WebSocket API depends on the connection type of the device. For now, MicroPython firmware only does unsecure connection (see `MicroPython WebREPL <https://github.com/micropython/webrepl#webrepl-client-for-micropython>`_  repository for more information), therefore BIPES connection with WebSocket API can only be done via HTTP.


The Multiplexer
-----------------------------

To send data to a device, the 'no ui' way, just do:

.. code-block:: javascript

  bipes.channel.connect('webserial'|'webbluetooth'|'websocket')
  bipes.channel.rawPush(code_)

That's it, BIPES will connect to the device, append the code to a buffer in the connected protocol's class
and send it.
More info about the class:


.. js:autoclass:: base.channel.Channel
   :short-name:
   :members:
   :private-members:

WebSerial
-----------------------------

With the use of `Web Serial API <https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API>`_ , data can be sent via a serial port, with the help of the ``webserial`` class.

.. js:autoclass:: base.channel._WebSerial
   :short-name:
   :members:
   :private-members:

WebBluetooth
-----------------------------

With the use of `Web Bluetooth API <https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API>`_ , data can be sent via Bluetooth with the help of the ``webbluetooth`` class.

.. js:autoclass:: base.channel._WebBluetooth
   :short-name:
   :members:
   :private-members:

WebSockets
-----------------------------

With the use of `WebSocket API <https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API>`_ , data can be sent via TCP/IP, with the help of the ``websocket`` class.

.. js:autoclass:: base.channel._WebScoket
   :short-name:
   :members:
   :private-members:
   
