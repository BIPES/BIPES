Protocols
=================================

To connect to devices, BIPES uses `Web Serial API <https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API>`_,
`Web Bluetooth API <https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API>`_ and `WebSocket API <https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API>`_, in which we handle inside the ``webserial``, ``webbluetooth`` and ``websocket`` classes respectively.
All of them inside the `core/channel.js` along side the ``mux`` class, a `'multiplexer' <https://en.wikipedia.org/wiki/Multiplexer>`_ between these protocols.


The Multiplexer
-----------------------------

To send data to a device, the 'no ui' way, just do:

.. code-block:: javascript

	Channel.mux.currentChannel = 'webserial'|'webbluetooth'|'websocket'
	Channel.mux.connect();
	mux.bufferPush (code_);

That's it, BIPES will connect to the device, append the code to a buffer in the connected protocol's class
and send it.
More info about the class:


.. js:autoclass:: channel.mux
   :short-name:
   :members:
   :private-members:

WebSerial
-----------------------------

.. js:autoclass:: channel.webserial
   :short-name:
   :members:
   :private-members:

WebBluetooth
-----------------------------

.. js:autoclass:: channel.webbluetooth
   :short-name:
   :members:
   :private-members:

WebSockets
-----------------------------

.. js:autoclass:: channel.websocket
   :short-name:
   :members:
   :private-members:
