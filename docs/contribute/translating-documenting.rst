.. _translating:

Translating
=================================

Translating BIPES interface is essential to make the project more accessible.

Even if you only have an hour here and there to contribute, you can help, every string translated makes a difference.

.. _language-availability:

Language availability
-------------------------------------------------------

To start our journey  as a BIPES translator, check if the language is already available:

.. list-table::
   :widths: 5 10
   :header-rows: 1

   * - ISO 639 format
     - Language
   * - en
     - English
   * - es
     - Español
   * - pt-br
     - Português Brasileiro
   * - de
     - German
   * - fr
     - French
   * - it
     - Italian
   * - nb
     - Norwegian
   * - zh-hans
     - Chinese (simplified)
   * - zh-hant
     - Chinese (traditional)

If not, feel free to include it in the source code at
`app.py#L18 <https://github.com/BIPES/BIPES/blob/b1dbadf8a8406f20c99a8f8dbe461f52fddb170c/app.py#L17>`_
and create a copy of *en.js*  at
`static/msg <https://github.com/BIPES/BIPES/tree/third/static/msg>`_
named with the desired language code,
for example, make a copy of *en.js* as *fr.js* for French.

.. note::
  By default, untranslated strings should be kept in English and not empty.


How to translate
-------------------------------------------------------


BIPES uses the global ``Msg`` JavaScript variable (available in every file) to
store all strings of the user's preferred language,
so you have to just pass the string key as in this example:

.. code-block:: javascript

  function language (button_, panel_) {
    panel.call (this, button_, panel_);
    this.panel.appendChild(document.createTextNode(Msg['languageTooltip']));
  }

Where the string key is ``languageTooltip`` and ``Msg['languageTooltip']`` will
automatically complete with the user prefered language.

Also, like `i18n <https://www.npmjs.com/package/i18n>`_ ,
a JSON like structure is used to store strings,
as seen in this chunk of `static/msg/pt-br.js <https://github.com/BIPES/BIPES/blob/third/static/msg/pt-br.js>`_:

.. code-block:: javascript

  var Msg = {
    blocks:'Blocos',
    FileManager:'Gerenciador de arquivos',
    HideShowProjectTree:'Ocultar/mostrar árvore de projecto',
   }

The string key is declared in `camel case <https://en.wikipedia.org/wiki/Camel_case>`_
and in English, followed by its translation.
All langauge files inside  ``static/msg`` should be in sync, with the same string keys
at the exact same position.

Thus, to include new translations, just create the string key at every file
inside ``static/msg``,
and use it anywhere in the codebase as ``Msg['MyStringKeyHere']``.

To make this repetitive process instantaneous, use `sed <https://www.gnu.org/software/sed/manual/sed.html>`_:

.. code:: bash

  sed -i 'N i\MY_LINE' static/msg/*.js

Replacing N with the line number you wish to append and MY_LINE with the line you want,
for example:

.. code:: bash

  sed -i "30 i\  MyStringTest:'My string test'," static/msg/*.js

Remember to indent with two space and include a comma in the end of the line.

Google Blockly exception
^^^^^^^^^^^^^^^^^^^^^^^^^

For the Google Blockly's :ref:`template definitions <template-definitions-and-devices>`,
the strings are injected directly into the ``Blockly`` object and are declared at the top of
the translation files in upper case instead of camel case, for example:

.. code-block:: javascript
  Blockly.Msg["DISPLAYS"] = "Displays";
  Blockly.Msg["LOOPS"] = "Laços";
  Blockly.Msg['DOCUMENTATION'] = "Documentação";

 Then, at the template definition:

.. code-block:: markdown

	# NeoPixel LED Strip
	<category name="NeoPixel LED Strip">
	<label text="NeoPixel RGB LED Strip"></label>
	<button text="%{DOCUMENTATION}: neopixel" callbackKey="loadDoc"></button>

``%{DOCUMENTATION}`` will be replaced with *Documentation* in English and
*Documentação* in Brazilian Portuguese.

