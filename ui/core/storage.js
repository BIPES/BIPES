/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Loading and saving blocks with localStorage and cloud storage.
 * @author q.neutron@gmail.com (Quynh Neutron)
 * @author gastmaier@gmail.com (Jorge Marques)
 */
'use strict';

/**
 * Create the storage namespace.
 */
var BlocklyStorage = {};

/**
 * Backup code blocks to localStorage.
 * @param {!Blockly.WorkspaceSvg} opt_workspace Workspace.
 * @private
 */
BlocklyStorage.backupBlocks_ = function(opt_workspace) {
  if ('localStorage' in window) {
    var workspace =  opt_workspace || Blockly.getMainWorkspace();

    var xml = Blockly.Xml.workspaceToDom(workspace);
    var data = Blockly.Xml.domToText(xml);
    data = UI ['workspace'].writeWorkspace (data, false);
    localStorage.setItem(UI ['account'].currentProject.uid, data)
    localStorage.setItem('bipes_projects', JSON.stringify(UI ['account'].projects))
  }
};
/**
 * Bind the localStorage backup function to the unload event.
 * @param {Blockly.WorkspaceSvg=} opt_workspace Workspace.
 */
BlocklyStorage.backupOnUnload = function(opt_workspace) {
  var workspace = opt_workspace || Blockly.getMainWorkspace();
  window.addEventListener('unload',
      function() {BlocklyStorage.backupBlocks_(workspace);}, false);
};
/**
 * Restore code blocks from localStorage.
 * @param {Blockly.WorkspaceSvg=} opt_workspace Workspace.
 */
BlocklyStorage.restoreBlocks = function(opt_workspace) {
  if ('localStorage' in window) {
    var workspace = opt_workspace || Blockly.getMainWorkspace();
    /** Import project list*/
    if (localStorage['bipes_projects'] && localStorage['bipes_projects'] != '[]') {
      try {
        let projects = JSON.parse(localStorage['bipes_projects'])
        UI ['account'].restoreProjects (projects);
      } catch (e) {
        UI ['notify'].log(e)
      }
    } else {
      let uid = Tool.uid ();
      localStorage.setItem (uid, Tool.emptyXML ())
      let emptyProject = `{"${uid}":"${+new Date}"}`;
      localStorage.setItem('bipes_projects', emptyProject)
      UI ['account'].restoreProjects (JSON.parse(emptyProject));
    }
  }
};



/**
 * Save blocks to database and return a link containing key to XML.
 * @param {Blockly.WorkspaceSvg=} opt_workspace Workspace.
 */
BlocklyStorage.link = function(opt_workspace) {
  var workspace = opt_workspace || Blockly.getMainWorkspace();
  var xml = Blockly.Xml.workspaceToDom(workspace, true);
  // Remove x/y coordinates from XML if there's only one block stack.
  // There's no reason to store this, removing it helps with anonymity.
  if (workspace.getTopBlocks(false).length == 1 && xml.querySelector) {
    var block = xml.querySelector('block');
    if (block) {
      block.removeAttribute('x');
      block.removeAttribute('y');
    }
  }
  var data = Blockly.Xml.domToText(xml);
  data = UI ['workspace'].writeWorkspace (data, false);
  BlocklyStorage.makeRequest_('/storage', 'xml', data, workspace);
};

/**
 * Retrieve XML text from database using given key.
 * @param {string} key Key to XML, obtained from href.
 * @param {Blockly.WorkspaceSvg=} opt_workspace Workspace.
 */
BlocklyStorage.retrieveXml = function(key, opt_workspace) {
  var workspace = opt_workspace || Blockly.getMainWorkspace();
  BlocklyStorage.makeRequest_('/storage', 'key', key, workspace);
};

/**
 * Global reference to current AJAX request.
 * @type {XMLHttpRequest}
 * @private
 */
BlocklyStorage.httpRequest_ = null;

/**
 * Fire a new AJAX request.
 * @param {string} url URL to fetch.
 * @param {string} name Name of parameter.
 * @param {string} content Content of parameter.
 * @param {!Blockly.WorkspaceSvg} workspace Workspace.
 * @private
 */
BlocklyStorage.makeRequest_ = function(url, name, content, workspace) {
  if (BlocklyStorage.httpRequest_) {
    // AJAX call is in-flight.
    BlocklyStorage.httpRequest_.abort();
  }
  BlocklyStorage.httpRequest_ = new XMLHttpRequest();
  BlocklyStorage.httpRequest_.name = name;
  BlocklyStorage.httpRequest_.onreadystatechange =
      BlocklyStorage.handleRequest_;
  BlocklyStorage.httpRequest_.open('POST', url);
  BlocklyStorage.httpRequest_.setRequestHeader('Content-Type',
      'application/x-www-form-urlencoded');
  BlocklyStorage.httpRequest_.send(name + '=' + encodeURIComponent(content));
  BlocklyStorage.httpRequest_.workspace = workspace;
};

/**
 * Callback function for AJAX call.
 * @private
 */
BlocklyStorage.handleRequest_ = function() {
  if (BlocklyStorage.httpRequest_.readyState == 4) {
    if (BlocklyStorage.httpRequest_.status != 200) {
      BlocklyStorage.alert(BlocklyStorage.HTTPREQUEST_ERROR + '\n' +
          'httpRequest_.status: ' + BlocklyStorage.httpRequest_.status);
    } else {
      var data = BlocklyStorage.httpRequest_.responseText.trim();
      if (BlocklyStorage.httpRequest_.name == 'xml') {
        window.location.hash = data;
        BlocklyStorage.alert(BlocklyStorage.LINK_ALERT.replace('%1',
            window.location.href));
      } else if (BlocklyStorage.httpRequest_.name == 'key') {
        if (!data.length) {
          BlocklyStorage.alert(BlocklyStorage.HASH_ERROR.replace('%1',
              window.location.hash));
        } else {
          UI ['account'].importProject (data);
          UI ['notify'].send ('Project imported from link!');
        }
      }
      BlocklyStorage.monitorChanges_(BlocklyStorage.httpRequest_.workspace);
    }
    BlocklyStorage.httpRequest_ = null;
  }
};

/**
 * Start monitoring the workspace.  If a change is made that changes the XML,
 * clear the key from the URL.  Stop monitoring the workspace once such a
 * change is detected.
 * @param {!Blockly.WorkspaceSvg} workspace Workspace.
 * @private
 */
BlocklyStorage.monitorChanges_ = function(workspace) {
  var startXmlDom = Blockly.Xml.workspaceToDom(workspace);
  var startXmlText = Blockly.Xml.domToText(startXmlDom);
  function change() {
    var xmlDom = Blockly.Xml.workspaceToDom(workspace);
    var xmlText = Blockly.Xml.domToText(xmlDom);
    if (startXmlText != xmlText) {
      window.location.hash = '';
      workspace.removeChangeListener(change);
    }
  }
  workspace.addChangeListener(change);
};

/**
 * Load blocks from XML.
 * @param {string} xml Text representation of XML.
 * @param {!Blockly.WorkspaceSvg} workspace Workspace.
 * @private
 */
BlocklyStorage.loadXml_ = function(xml, workspace) {
  xml = UI ['workspace'].readWorkspace (xml, false);
  try {
    xml = Blockly.Xml.textToDom(xml);
  } catch (e) {
    BlocklyStorage.alert(BlocklyStorage.XML_ERROR + '\nXML: ' + xml);
    return;
  }
  // Clear the workspace to avoid merge.
  workspace.clear();
  Blockly.Xml.domToWorkspace(xml, workspace);
};

/**
 * Present a text message to the user.
 * Designed to be overridden if an app has custom dialogs, or a butter bar.
 * @param {string} message Text to alert.
 */
BlocklyStorage.alert = function(message) {
  window.alert(message);
};
