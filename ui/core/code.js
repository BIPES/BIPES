/**
 * Based on Blockly Demos: Code
 *
 */

/**
 * @fileoverview JavaScript for Blockly's Code demo.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

/**
 * Create a namespace for the application.
 */
var Code = {};

//Lib to installed
var libToInstall = '';

/**
 * Lookup for names of supported languages.  Keys should be in ISO 639 format.
 */
Code.LANGUAGE_NAME = {
  'en': 'English',
  'pt-br': 'Português Brasileiro',
  'es': 'Español',
  'it': 'Italiano',
  'fr': 'Français',
  'de': 'Deutsch',
  'zh-hans': 'Chinese (simplified)',
  'zh-hant': 'Chinese (traditional)'
};

/**
 * List of RTL languages.
 */
Code.LANGUAGE_RTL = ['ar', 'fa', 'he', 'lki'];

/**
 * Blockly's main workspace.
 * @type {Blockly.WorkspaceSvg}
 */
Code.workspace = null;

/**
 * Extracts a parameter from the URL.
 * If the parameter is absent default_value is returned.
 * @param {string} name The name of the parameter.
 * @param {string} defaultValue Value to return if parameter not found.
 * @return {string} The parameter value or the default value if not found.
 */
Code.getStringParamFromUrl = function(name, defaultValue) {
  var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
  return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};

/**
 * Get the language of this user from the URL.
 * @return {string} User's language.
 */
Code.getLang = function() {
  var lang = Code.getStringParamFromUrl('lang', '');
  if (Code.LANGUAGE_NAME[lang] === undefined) {
    // Default to English.
    lang = 'en';
  }
  return lang;
};

/**
 * Is the current language (Code.LANG) an RTL language?
 * @return {boolean} True if RTL, false if LTR.
 */
Code.isRtl = function() {
  return Code.LANGUAGE_RTL.indexOf(Code.LANG) != -1;
};

/**
 * Load blocks saved on App Engine Storage or in session/local storage.
 * @param {string} defaultXml Text representation of default blocks.
 */
Code.loadBlocks = function(defaultXml) {
  try {
    var loadOnce = window.sessionStorage.loadOnceBlocks;
  } catch(e) {
    // Firefox sometimes throws a SecurityError when accessing sessionStorage.
    // Restarting Firefox fixes this, so it looks like a bug.
    var loadOnce = null;
  }
  // wait to devices to load
  var interval_ = setInterval(() => {
    if (typeof UI != 'undefined' && UI ['workspace'].devices.constructor.name == 'Object') {
      if ('BlocklyStorage' in window && window.location.hash.length > 1) {
        BlocklyStorage.restoreBlocks ();
        // An href with #key trigers an AJAX call to retrieve saved blocks.
        BlocklyStorage.retrieveXml(window.location.hash.substring(1));
      } else if (loadOnce) {
        // Language switching stores the blocks during the reload.
        delete window.sessionStorage.loadOnceBlocks;
        var xml = Blockly.Xml.textToDom(loadOnce);
        Blockly.Xml.domToWorkspace(xml, Code.workspace);
      } else if (defaultXml) {
        // Load the editor with default starting blocks.
        var xml = Blockly.Xml.textToDom(defaultXml);
        Blockly.Xml.domToWorkspace(xml, Code.workspace);
      } else if ('BlocklyStorage' in window) {
        // Restore saved blocks in a separate thread so that subsequent
        // initialization is not affected from a failed load.
        if (typeof UI != 'undefined' && UI ['workspace'].devices.constructor.name == 'Object') {
              window.setTimeout(() => {BlocklyStorage.restoreBlocks (); UI ['account'].openLastEdited()}, 0);
        } else {
              window.setTimeout(() => {BlocklyStorage.restoreBlocks (); UI ['account'].openLastEdited()}, 0);
        }
      }
      clearInterval(interval_);
    }}, 500);
};

/**
 * Save the blocks and reload with a different language.
 */
Code.changeLanguage = function() {
  // Store the blocks for the duration of the reload.
  // MSIE 11 does not support sessionStorage on file:// URLs.
  if (window.sessionStorage) {
    var xml = Blockly.Xml.workspaceToDom(Code.workspace);
    var text = Blockly.Xml.domToText(xml);
    window.sessionStorage.loadOnceBlocks = text;
  }

  var languageMenu = document.getElementById('languageMenu');
  var newLang = encodeURIComponent(
      languageMenu.options[languageMenu.selectedIndex].value);
  var search = window.location.search;
  if (search.length <= 1) {
    search = '?lang=' + newLang;
  } else if (search.match(/[?&]lang=[^&]*/)) {
    search = search.replace(/([?&]lang=)[^&]*/, '$1' + newLang);
  } else {
    search = search.replace(/\?/, '?lang=' + newLang + '&');
  }

  window.location = window.location.protocol + '//' +
      window.location.host + window.location.pathname + search;
};

/**(DEPRECATED)
 * Bind a function to a button's click event.
 * On touch enabled browsers, ontouchend is treated as equivalent to onclick.
 * @param {!Element|string} el Button element or ID thereof.
 * @param {!Function} func Event handler to bind.
 */
Code.bindClick = function(el, func) {
  if (typeof el == 'string') {
    el = document.getElementById(el);
  }
  el.addEventListener('click', func, true);
};

/**
 * Load the Prettify CSS and JavaScript.
 */
Code.importPrettify = function() {
  var script = document.createElement('script');
  script.setAttribute('src', 'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js');
  document.head.appendChild(script);
};


/**
 * User's language (e.g. "en").
 * @type {string}
 */
Code.LANG = Code.getLang();

/**
 * List of tab names.
 * @private
 */

Code.TABS_ = ['blocks', 'console', 'files', 'device', 'programs', 'databoard', 'mqtt', 'iot'];

Code.current = ["blocks", "",""]

/**
 * Switch the visible pane when a tab is clicked, allows splitting screen.
 * @param {string} navigation Name of tab clicked.
 * @param {Number} _pos Position, 0 to full, 1 to full/left and 2 to right.
 */
Code.handleLink = (_navigation, _pos) => {
  let _pos0 = _pos == 2 ? 1 : 2
  let crt = Code.current

  let turnOff = (elem, pos) => {
    let _tab  = get(`#content_${elem}`),
        _nav  = get(`#tab_${elem}`)
    Code.deinitContent(elem)
	  _nav.classList.remove('on')
	  // just to avoid animation glitch
	  if (pos == 1)
    	_tab.classList.add(`_pos1`)
    if (pos == 2)
    	_tab.classList.add(`_pos2`)
  	_tab.classList.remove(`pos${pos}`)
	  Animate.off(_tab)
  }

  let turnOn = (elem, pos) => {
    let _tab  = get(`#content_${elem}`),
        _nav  = get(`#tab_${elem}`)
    Code.renderContent(elem)


    _nav.classList.add('on')
	  Animate.on(_tab)
	  _tab.classList.remove("_pos1", "_pos2")
	  if (pos != 0)
  	  _tab.classList.add(`pos${pos}`)
  }

  // Interpreting link
  if (_pos == 0){
    turnOn(_navigation, 0)
    Code.current = [_navigation, '', '']
    return
  }

  // User switch opened section
  if (crt[_pos0] == _navigation) {
    let _tab  = get(`#content_${crt[_pos]}`),
        _tab0 = get(`#content_${crt[_pos0]}`)

 	  _tab.classList.remove(`pos${_pos}`)
 	  _tab.classList.add(`pos${_pos0}`)
 	  _tab0.classList.remove(`pos${_pos0}`)
 	  _tab0.classList.add(`pos${_pos}`)
 	  Code.current = ['', crt[2], crt[1]]
 	  return
  }

  // User click in the same occupying the whole screen
  if (crt [0] == _navigation && crt [1] == '' && crt [2] == '')
    return

  // User left click in a new section while another is occuppying the whole screen
  if (_pos == 1 && crt[0] != ''){
    turnOff(crt[0], 0)
    crt[0] = _navigation
    turnOn(crt[0], 0)
    Code.resizeContent()
    return
  }

  // Both have sections, user left click in one again -> occupy all screen
  if (_pos == 1){
    if (crt [_pos] == _navigation && crt[_pos0] != ''){
      turnOff(crt[_pos0], _pos0)
      let _tab  = get(`#content_${crt[_pos]}`)
   	  _tab.classList.remove(`pos${_pos}`)
      Code.current = [_navigation, '', '']
      Code.resizeContent()
      return
    }
  }

  // Both have sections, user right click in one again -> deinit
  if (_pos == 2){
    if (crt [_pos] == _navigation && crt[_pos0] != ''){
      turnOff(crt[_pos], _pos)
      let _tab0  = get(`#content_${crt[_pos0]}`)
   	  _tab0.classList.remove(`pos${_pos0}`)
      Code.current = [crt[_pos0], '', '']
      Code.resizeContent()
      return
    }
  }

  // User click in a new section to ocuppy
  if (crt[_pos] != _navigation && crt[0] == ''){
    if (crt[_pos] != '')
      turnOff(crt[_pos], _pos)
    turnOn(_navigation, _pos)
    Code.current[_pos] = _navigation
    Code.resizeContent()
    return
  }

  // User right click in a new section while another is occupying everthing
  if (_pos == 2 && crt[_pos] != _navigation && crt[0] != ''){
    let _tab  = get(`#content_${crt[0]}`)
 	  _tab.classList.add(`pos1`)
    turnOn(_navigation, 2)
    Code.current = ['', crt[0], _navigation]
    Code.resizeContent()
    return
  }
}

/**
 * Handle the rendering of the tabs;
 * @param {string} _navigation Name of tab.
 */
Code.renderContent = (_navigation) => {
  if (typeof _navigation == 'undefined')
    return
  let content = get(`#content_${_navigation}`)
  switch (_navigation) {
    case  "databoard":
      // Wait 10ms because the canvas of chart.js cannot be inited while not displaying
      setTimeout(() => {
        if (!window.frames[3].inited) {
          if (typeof window.frames[3].modules == 'object' && typeof window.frames[3].modules.Workspaces == 'object') {
            window.frames[3].initDataStorage()
          } else {
            /** wait to databoad to load */
            var interval = setInterval(() => {
              if (typeof window.frames[3].modules == 'object' && typeof window.frames[3].modules.Workspaces == 'object') {
                window.frames[3].initDataStorage()
                if (window.frames[3].inited)
                  clearInterval(interval)
              }
            }, 500)
          }
        } else
        window.frames[3].initGrid()
      }, 10)
      break
    case "blocks":
      Code.workspace.setVisible(true)
      Code.auto_mode = true
      Blockly.svgResize(Code.workspace)
      break
    case "files":
      if (Files.editor.init == undefined) {
        // Horrible fix for line numbers not showing when initing
        // with less than ten lines
        Files.editor.setValue(new Array(9).fill('\r\n').join(''))
        setTimeout(() => {
          Files.editor.setValue('')
          Files.editor.init = true
        }, 10)
      }
      Files.handleCurrentProject()
      break
    case "console":
      term.resize()
      break
    case "device":
    case "programs":
    case "iot":
    case "mqtt":
      break
  }
  content.focus()
};
/**
 * Handle the resizing of the tabs on split mode;
 * @param {string} _navigation Name of tab.
 */
Code.resizeContent = (_navigation) => {
  Code.current.forEach (key => {
    switch (key) {
      case "blocks":
        setTimeout(()=>{Blockly.svgResize(Code.workspace)}, 250)
        break
      case "files":
        Files.resize()
        break
      case "console":
        term.resize()
        break
      case "databoard":
      case "device":
      case "programs":
      case "iot":
      case "mqtt":
        break
    }
  })
};

/**
 * Deinit a tab (if it supports).
 * @param {string} _navigation Name of tab to deinit.
 */
Code.deinitContent = (_navigation) => {
  switch (_navigation) {
  case  "databoard":
    if(window.frames[3].grid_inited)
      window.frames[3].deinitGrid()
    break
  case "blocks":
    Code.workspace.setVisible(false);
    Code.auto_mode = false;
    break
  }
}

/**
 * Attempt to generate the code and display it in the UI, pretty printed.
 * @param code {string} The code generated by Blockly.
 * @param prettyPrintType {string} The file type key for the pretty printer.
 * @param domTarget {string} The id for the dom element to render the code.
 */
Code.toDOM = function(code, prettyPrintType, domTarget) {
  var content = document.getElementById(domTarget);
  content.textContent = '';

  content.textContent = code;
  if (typeof PR.prettyPrintOne == 'function') {
    code = content.textContent;
    code = PR.prettyPrintOne(code, prettyPrintType);
    content.innerHTML = code;
  }
};

/**
 * Check whether all blocks in use have generator functions.
 * @param generator {!Blockly.Generator} The generator to use.
 */
Code.checkAllGeneratorFunctionsDefined = function(generator) {
  var blocks = Code.workspace.getAllBlocks();
  var missingBlockGenerators = [];
  for (var i = 0; i < blocks.length; i++) {
    var blockType = blocks[i].type;
    if (!generator[blockType]) {
      if (missingBlockGenerators.indexOf(blockType) === -1) {
        missingBlockGenerators.push(blockType);
      }
    }
  }

  var valid = missingBlockGenerators.length == 0;
  if (!valid) {
    var msg = 'The generator code for the following blocks not specified for '
        + generator.name_ + ':\n - ' + missingBlockGenerators.join('\n - ');
    Blockly.alert(msg);  // Assuming synchronous. No callback.
  }
  return valid;
};

Code.reloadToolbox = function(XML_) {
  let toolboxText = new XMLSerializer().serializeToString(XML_).replace(/(^|[^%]){(\w+)}/g,
      function(m, p1, p2) {return p1 + MSG[p2];});
  let toolboxXml = Blockly.Xml.textToDom(toolboxText);

  Code.workspace.updateToolbox(toolboxXml);

  Code.workspace.scrollCenter(); // centralize workspace
}

function loadExampleFromURL(pName){

    var request = new XMLHttpRequest();
    request.open('GET', '/beta2/ui/examples/' + pName + '.xml', true);
    //request.open('GET', 'http://bipes.net.br/beta2/ui/examples/' + pName + '.xml', true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {

		    //alert(request.responseText);

		    var content = request.responseText;
                    var xml = Blockly.Xml.textToDom(content);
                    Blockly.Xml.domToWorkspace(xml, Code.workspace);

                return request.responseText;
            }
        }
    }
}

/**
 * If the code should be autogenerated.
 * @private
 */

Code.auto_mode = false;


/**
 * Blockly code generator watcher, if auto_mode is true, will generate code
 * when called by the setInterval, if directly called (this != Window), will generate code.
 * @param generate {!Blockly.generator} If should generate code when called, defaults to Blockly.Python
 * @return {string} The generated code
 */
Code.generateCode = function (generator = Blockly.Python) {
  if (Code.auto_mode || this.constructor.name != 'Window') {
    if (Code.checkAllGeneratorFunctionsDefined(generator)) {
      if (generator.name_ == "Python")
        return generator.workspaceToCode(Code.workspace);
      else if (generator.name_ == "Javascript")
        return generator.workspaceToCode(Code.workspace);
    } else
      //break out of auto_mode if there is a block withouyt a generator function
      Code.auto_mode = false
  }
}

/**
 * Generate XML Blockly with BIPES extra information, store in Code.xmlCode
 * @param workspace {!Blockly.workspace} If should generate code when called, defaults to Code.workspace
 * @return {string} The generated XML
 */
Code.generateXML = function (workspace = Code.workspace) {
    let xmlDom = Blockly.Xml.workspaceToDom(workspace);
    let xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    return UI ['workspace'].writeWorkspace(xmlText, true);
}



/**
 * Initialize Blockly.  Called on page load.
 */
Code.init = function() {
  Code.initLanguage();

  var rtl = Code.isRtl();

  // The toolbox XML specifies each category name using Blockly's messaging
  // format (eg. `<category name="%{BKY_CATLOGIC}">`).
  // These message keys need to be defined in `Blockly.Msg` in order to
  // be decoded by the library. Therefore, we'll use the `MSG` dictionary that's
  // been defined for each language to import each category name message
  // into `Blockly.Msg`.
  // TODO: Clean up the message files so this is done explicitly instead of
  // through this for-loop.

  //init interval to auto generate Python Code
  setInterval(Code.generateCode, 250)
  Code.auto_mode = true;

  for (var messageKey in MSG) {
    if (messageKey.indexOf('cat') == 0) {
      Blockly.Msg[messageKey.toUpperCase()] = MSG[messageKey];
    }
  }

  // Construct the toolbox XML with no blocks, will populate later.
  let toolboxXml = Blockly.Xml.textToDom("<xml><category name='...'></category></xml>");

  Code.workspace = Blockly.inject('content_blocks',
      {grid:
          {spacing: 25,
           length: 3,
           colour: '#ccc',
           snap: true},
       media: 'media/',
       rtl: rtl,
       toolbox: toolboxXml,
       oneBasedIndex: false,
       zoom:
           {controls: true,
            wheel: true}
      });

  Code.loadBlocks('');

  if ('BlocklyStorage' in window) {
    // Hook a save function onto unload.
    BlocklyStorage.backupOnUnload(Code.workspace);
  }

  Code.handleLink(Code.current[0], 0);

  //Code.bindClick('trashButton',
  //    function() {Code.discard(); Code.renderContent();});


  Code.bindClick('forumButton',
    function () {window.open("https://github.com/BIPES/BIPES/discussions",'_blank')}
  )



  // Disable the link button if page isn't backed by App Engine storage.
  var linkButton = document.getElementById('linkButton');
  if ('BlocklyStorage' in window) {
    BlocklyStorage['HTTPREQUEST_ERROR'] = MSG['httpRequestError'];
    BlocklyStorage['LINK_ALERT'] = MSG['linkAlert'];
    BlocklyStorage['HASH_ERROR'] = MSG['hashError'];
    BlocklyStorage['XML_ERROR'] = MSG['xmlError'];
    Code.bindClick(linkButton,
        function () {BlocklyStorage.link(Code.workspace);});
  } else if (linkButton) {
    linkButton.className = 'disabled';
  }

  // Bind left click/tap and right click on tabs
  for (var i = 0; i < Code.TABS_.length; i++) {
    let name = Code.TABS_[i];
    let tab = get(`#tab_${name}`)
    tab.addEventListener("click", (ev) => {
      ev.preventDefault()
      Code.handleLink(name, 1)
    })
    tab.addEventListener("contextmenu", (ev) => {
      ev.preventDefault()
      Code.handleLink(name, 2)
    })
  }
  Blockly.svgResize(Code.workspace);

  Code.workspace.registerButtonCallback('installPyLib', function(button) {

	var lib = button.text_.split(" ")[1];
	console.log(button.text_);
	console.log(lib)
        alert("This will automatic download and install the library on the connected board: " + lib + ". Internet is required for this operation. Install results will be shown on console tab.");


	UI ['notify'].send('Installing library, check console')

	var installCmd = `
def bipesInstall(url, lib):
    import socket
    _, _, host, path = url.split('/', 3)
    addr = socket.getaddrinfo(host, 80)[0][-1]
    s = socket.socket()
    s.connect(addr)
    print('Downloading from ' + url)
    s.send(bytes('GET /%s HTTP/1.0\\r\\nHost: %s\\r\\n\\r\\n' % (path, host), 'utf8'))

    f = open('tmplib.py', 'w')
    #f = open(lib, 'w')

    while True:
        data = s.recv(100)
        if data:
            #print(str(data, 'utf8'), end='')
            f.write(data)
            #print('.')
        else:
            break
    s.close()
    f.close()
    print('Download done')

`;
 
    installCmd = installCmd + "lib = '" + lib + ".py'" + '\r';
    installCmd = installCmd + "bipesInstall('http://bipes.net.br/beta2/ui/pylibs/' + lib, lib)";
	    

     Tool.runPython(installCmd);

     var copyCmd = `
f=open("tmplib.py", "r")
c=open("`;

copyCmd += lib + `.py", "w")
lineC=0
for line in f:
	lineC=lineC+1
	#Jump 10 lines to skip HTTP header
	if lineC >= 10:
		r=c.write(line)
		print('.', end='')
f.close()
c.close()
print('Install done.')

`;
 
     Tool.runPython(copyCmd);


      });


    Code.workspace.registerButtonCallback('loadExample', function(button) {

	var tmp = button.text_.split(":")[1];
	var lib = tmp.replace(/\s/g,'');

        var msgCon = "This will load Example: " + lib + ". Internet is required for this operation. Important: all blocks on workspace will be lost and replaced by the example blocks. Do you want to continue?";

	if (confirm(msgCon)) {
		//console.log('Thing was saved to the database.');
		
		//Ask for confirmation
      		//Code.discard(); 
		//Delete blocks without asking for confirmation
		Code.workspace.clear();

		Code.renderContent();
		loadExampleFromURL(lib);
		Code.renderContent();
	} else {
		console.log('Example load canceled.');
	}

      });


    Code.workspace.registerButtonCallback('loadDoc', function(button) {

	var tmp = button.text_.split(":")[1];
	var lib = tmp.replace(/\s/g,'');

	var url = "https://docs.google.com/document/d/e/2PACX-1vSk-9T56hP9K9EOhkF5SoNzsYl4TzDk-GEDnMssaFP_m-LEfI6IU-uRkkLP_HoONK0QmMrZVo_f27Fw/pub";

        if (Code.getLang() == 'pt-br') {
		url = "https://docs.google.com/document/d/e/2PACX-1vT7dc6hP4sKyMJupklbGK4adIf3qCkt4r-HrEWO8jTRMx9uUOUSfboKG749IF3DZr8k6zUPSLXkrDGY/pub";
	}
        if (Code.getLang() == 'en') {
		url = "https://docs.google.com/document/d/e/2PACX-1vSk-9T56hP9K9EOhkF5SoNzsYl4TzDk-GEDnMssaFP_m-LEfI6IU-uRkkLP_HoONK0QmMrZVo_f27Fw/pub";

	}
	
	if (lib == "mpu6050") {
		url = url + '#h.79fbsr8dha21';
	}

	if (lib == "tm1640") {
		url = url + '#h.iw35vui9vzi1';
	}

	if (lib == "ds1820") {
		url = url + '#h.w84555jgod5j';
	}

	if (lib == "mfrc522") {
		url = url + '#h.owhbali4ayaj';
	}

	var win = window.open(url, '_blank');
	win.focus();


      });







  // Lazy-load the syntax-highlighting.
  window.setTimeout(Code.importPrettify, 1);
};

function loadDoc() {

	var url="";
        if (Code.getLang() == 'pt-br') {
		url = "https://docs.google.com/document/d/e/2PACX-1vT7dc6hP4sKyMJupklbGK4adIf3qCkt4r-HrEWO8jTRMx9uUOUSfboKG749IF3DZr8k6zUPSLXkrDGY/pub";
	}
        if (Code.getLang() == 'en') {
		url = "https://docs.google.com/document/d/e/2PACX-1vSk-9T56hP9K9EOhkF5SoNzsYl4TzDk-GEDnMssaFP_m-LEfI6IU-uRkkLP_HoONK0QmMrZVo_f27Fw/pub";

	}
	
	var win = window.open(url, '_blank');
	win.focus();

}




/**
 * Initialize the page language.
 */
Code.initLanguage = function() {
  // Set the HTML's language and direction.
  var rtl = Code.isRtl();
  document.dir = rtl ? 'rtl' : 'ltr';
  document.head.parentElement.setAttribute('lang', Code.LANG);

  // Sort languages alphabetically.
  var languages = [];
  for (var lang in Code.LANGUAGE_NAME) {
    languages.push([Code.LANGUAGE_NAME[lang], lang]);
  }
  var comp = function(a, b) {
    // Sort based on first argument ('English', 'Русский', '简体字', etc).
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  };
  languages.sort(comp);
  // Populate the language selection menu.
  var languageMenu = document.getElementById('languageMenu');
  languageMenu.options.length = 0;
  for (var i = 0; i < languages.length; i++) {
    var tuple = languages[i];
    var lang = tuple[tuple.length - 1];
    var option = new Option(tuple[0], lang);
    if (lang == Code.LANG) {
      option.selected = true;
    }
    languageMenu.options.add(option);
  }
  languageMenu.addEventListener('change', Code.changeLanguage, true);

  // Inject language strings.
  //Changed to a fixed title for all languages - BIPES Beta
  document.getElementById('tab_blocks').textContent = MSG['blocks'];
  document.getElementById('tab_files').textContent = MSG['files'];
  document.getElementById('tab_programs').textContent = MSG['shared'];
  document.getElementById('tab_device').textContent = MSG['device'];

  document.getElementById('linkButton').title = MSG['linkTooltip'];
  document.getElementById('runButton').title = MSG['runTooltip'];
  //document.getElementById('trashButton').title = MSG['trashTooltip'];
  document.getElementById('saveButton').title = MSG['saveTooltip'];
  document.getElementById('loadButton').title = MSG['loadTooltip'];
  document.getElementById('notificationButton').title = MSG['notificationTooltip'];
  document.getElementById('languageIcon').title = MSG['languageTooltip'];
  document.getElementById('toolbarButton').title = MSG['toolbarTooltip'];
  document.getElementById('forumButton').title = MSG['forumTooltip'];
  document.getElementById('accountButton').title = MSG['accountTooltip'];
};

/**
 * Discard all blocks from the workspace.
 */
Code.discard = function() {
  var count = Code.workspace.getAllBlocks().length;
  if (count < 2 ||
      window.confirm(Blockly.Msg['DELETE_ALL_BLOCKS'].replace('%1', count))) {
    Code.workspace.clear();
    if (window.location.hash) {
      window.location.hash = '';
    }
  }
};

// Load the Code demo's language strings.
document.write('<script src="msg/' + Code.LANG + '.js"></script>\n');
// Load Blockly's language strings.
document.write('<script src="b.msg/js/' + Code.LANG + '.js"></script>\n');
