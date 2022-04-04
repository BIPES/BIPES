Utilities
=================================

This page describes everything about the `core/utils.js` file, which provides functions
and classes for specific features or modules.

Handling device files
-----------------------------

All operations that involves devices files or the file editor happens inside
the ``files`` class.

BIPES uses `CodeMirror <https://github.com/codemirror/CodeMirror>`_ as its
text editor.

.. js:autoclass:: utils.files
   :short-name:
   :members:
   :private-members:

The terminal
-----------------------------

BIPES uses `xterm.js <https://github.com/xtermjs/xterm.js>`_ as its terminal.
The ``term`` class makes working with the terminal easier.

.. js:autoclass:: utils.term
   :short-name:
   :members:
   :private-members:

DOM Node
-----------------------------

To make creation of `DOM <https://developer.mozilla.org/en-US/docs/Web/API/Node>`_ elements easier, the class ``DOM`` provides some a fluent interface to
create `Node <https://developer.mozilla.org/en-US/docs/Web/API/Node>`_ elements.

For example to create a `div` with two buttons (`#trashIcon` and `#runIcon`) with on click event, just do:

.. code-block:: javascript

	let deleteButton_ = new DOM ('span', {
			className:'icon',
			id:'trashIcon'
		})
		.onclick (this,delete,[file])
	let runButton_ = new DOM ('span', {
			className:'icon',
			id:'runIcon'
		})
		.onclick (this,run,[file])

	let wrapper_ = new DOM ('div')
		.append([runButton_, deleteButton_]);

Note that the function ``DOM.onclick`` binds the first argument as the ``this`` keyword of the function (second argument) to be called.
The third argument is a list of the arguments that will be applied to the function.

.. js:autoclass:: utils.DOM
   :short-name:
   :members:
   :private-members:



Lots of tools
-----------------------------

BIPES concentrates all generic function inside the ``Tool`` class,
in which all functions are static and the class is not inited.
A brief description of every function can be seen below, just ``Ctrl+F`` what you need.

.. js:autoclass:: utils.Tool
   :short-name:
   :members:
   :private-members:
   
