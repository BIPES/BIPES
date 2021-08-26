Translating
=================================

Translating BIPES interface is essential to make the project more accessible.

Even if you only have an hour here and there to contribute, you can help, every string translated makes a difference.

Language availability
-------------------------------------------------------

To start our journey  as a BIPES translator, check if the language is already available:

.. list-table:: Available languages
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
     
If not, feel free to include it in the source code at 
`ui/core/code.js#L23 <https://github.com/BIPES/BIPES/blob/c77d9554465c3186ec34f963059463cdfcb9ed47/ui/core/code.js#L23>`_
and move the language file from `ui/msg/not_used <https://github.com/BIPES/BIPES/tree/master/ui/msg/not_used>`_ 
to `ui/msg <https://github.com/BIPES/BIPES/tree/master/ui/msg>`_.


How to translate 
-------------------------------------------------------

In the codebase, BIPES uses the global ``MSG`` JavaScript variable (available in every file) to store all strings of the user's preferred language, 
so you have to just pass the string key as in this example:

.. code-block:: javascript

  function language (button_, panel_) {
    panel.call (this, button_, panel_);
    this.panel.appendChild(document.createTextNode(MSG['languageTooltip']));
  }

Where the string key is ``languageTooltip`` and ``MSG['languageTooltip']`` will automatically complete with the user prefered language.

Also, like `i18n <https://www.npmjs.com/package/i18n>`_ , we use a JSON like structure to store strings,
as seen in this chunk of `ui/msg/pt-br.js <https://github.com/BIPES/BIPES/blob/master/ui/msg/pt-br.js>`_:

.. code-block:: javascript

  var MSG = {
    blocks: "Blocos",
    linkTooltip: "Salvar e ligar aos blocos.",
    httpRequestError: "Houve um problema com a requisição.",
   }
   
We are declaring the string key in `camel case <https://en.wikipedia.org/wiki/Camel_case>`_ and english, followed by it's translation.

Thus, to include new translations, just create an string key, concatenating it for each language file inside ``ui/msg``, 
and use it anywhere in the codebase as ``MSG['myStringKeyHere']``.

Also, if the string already exists but was not included in your language, please check 
`the english translation <https://github.com/BIPES/BIPES/blob/master/ui/msg/en.js>`_ for coherense.

If the file is a HTML file, we fill the field with ``...`` like this:

.. code-block:: HTML

  <div class="tabs">
    <div id="tab_blocks" class="tabon">...</div>
  </div>

and then insert the translation on load:

.. code-block:: javascript

  get('#tab_blocks').title = MSG['blocks'];

