MicroPyhon Libraries
=================================

MicroPyhon libraries are stored inside `pylibs`, if a documentation that is not
listed here, please search for the documentation provided by the developer.

Including a library
-----------------------------

To include a library in the BIPES platform, just inclued the library file inside
`pylibs` and create a install button in the XML file of the desired device's toolbox:

.. code-block:: XML

      <label text="Library: https://github.com/JorgeGMarques/micropython-simple-pid"></label>
      <button text="Install control library" callbackKey="installPyLib"></button>

The label is included to provide the source of the file, it is very important to
give credit to the developer!

Control library
-----------------------------

The BIPES team ported `simple-pid <https://github.com/m-lundberg/simple-pid>`_ from
Python to MicroPython and the full documentation can be found `here <https://micropython-simple-pid.readthedocs.io/>`_.
