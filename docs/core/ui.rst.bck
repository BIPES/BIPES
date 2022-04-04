User Interface
=================================

This page describes everthing about the `core/ui.js` file, which provides functions
and classes for basic stuff related to the overall user interface.

The aliases
-----------------------------

First of all, we use some aliases for common `Node <https://developer.mozilla.org/en-US/docs/Web/API/Node>`_ selector functions, for example:

.. code-block:: javascript

   let page = get ('#myPage');
   let button = getIn (page, '#myButton');
   let images = getAll (page, 'img');

Will attach the DOM ``#myPage`` to the variable ``page``, get ``#myButton`` inside ``page`` and
get all DOM with the HTML ``img`` tag in ``page``.


Notificatios and logs
-----------------------------

To show notifications and log a message do:

.. code-block:: javascript

   UI ['notify'].send (string_);
   UI ['notify'].log (string_);

Both functions are from the class ``notify``, the basics about it:

.. js:autoclass:: ui.notify
   :short-name:
   :members:
   :private-members:


Blockly and the user interface
-------------------------------

The bridge between `Google's Blockly <https://github.com/google/blockly>`_ and BIPES
happens inside the ``workspace`` class. This class also handles the target device (e.g. ESP32).

.. js:autoclass:: ui.workspace
   :short-name:
   :members:
   :private-members:

The progress bar
-----------------------------

A progress bar is shown in many operations inside BIPES and is handled with the
``progress`` class. A simple example on how to use it is shown below:

.. code-block:: javascript

	let i=150
	UI ['progress'].start(i);
	let loading = setInterval(()=>{
	  UI ['progress'].remain(i);
	  i = i-1;
	  if(i<=0) {
		 clearInterval(loading);
	  	UI ['progress'].end (150);
	  }
	}, 100)


.. js:autoclass:: ui.progress
   :short-name:
   :members:
   :private-members:


The panels
-----------------------------

The account, notification and channel panels are all inherited from the ``panel`` class.

.. js:autoclass:: ui.panel
   :short-name:
   :members:
   :private-members:

.. js:autoclass:: ui.account
   :short-name:
   :members:
   :private-members:

.. js:autoclass:: ui.channelPanel
   :short-name:
   :members:
   :private-members:

Responsive interface
-----------------------------

The panels change position based on the screen size by a rule in the `ui/style.css`.
To hide the panels when the user taps outside it, the x and y coordinates are mapped and
recalculated on ``window.onresize()``.

.. js:autoclass:: ui.responsive
   :short-name:
   :members:
   :private-members:

XML Http Requests
-----------------------------

This functions handles both `XMLHttpRequest <https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest>`_
as a local search inside `index_offline.html` when running without a server.

.. js:autofunction:: ui.xhrGET
   :short-name:

