Storage
=================================

This page describes everything about the `core/storage.js` file, which provides functions and classes to handle the multiple projects support.

The first thing to note is that the platform uses `LocalStorage <https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage>`_ to save the projects locally, this means no data is sent to a server and, due to browser policies, the HTTP and HTTPS intances of the platform cannot share the projects, since this would mean sharing data between a secure and non secure connection, even though it is only locally processed.

Also, is based on `Google Blockly storage.js <https://github.com/google/blockly/blob/master/appengine/storage.js>`_, so the classes and functions names are mostly the same, but have been deeply changed to handle multiple projects, the file editor and the Freeboard implementation.


Since LocalStorage is a two column database, where the first is the key and the second is the data, the platform stores the project as the following:

* ``bipes_projects``: JSON structured object with a list of projects with the uid as the key and timestamp as the data;
* ``account_user``: The preferred name for the user, setted up in the account panel;
* ``UID``:  The key for each project is its unique identifier (uid) and the stored data is the platform XML, which includes its tags, the Blockly XML and the Freeboard JSON.

All functions are described below, also see :js:class:`ui.account`, since it is the class responsible to handle the user interface changes when creating, deleting, importing and switching projects.


.. js:autoclass:: storage.BlocklyStorage
   :short-name:
   :members:
   :private-members:
