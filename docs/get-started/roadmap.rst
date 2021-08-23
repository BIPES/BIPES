Roadmap
=================================

Some ideias, tasks, possibilities and pending implementations for BIPES.

Organized ideas
---------------------

#. Web based SSH on the Console, for Linux devices
#. Test and validate all the blocks
#. Integration with Google Drive and Spreadsheet (send data to the spreadsheet and files/images to Google Drive)
#. Integration / BIPES control over unicor simulator (https://micropython.org/unicorn/)
#. WebREPL for CircuitPython
#. Translations
#. Complete custom block creation for the supported boards, such as m5stick
#. Documentation
#. USB File Transfer for the Files tab
#. LORA blocks for LoRa modules
#. CAN Bus blocks
#. Optical encoder blocks
#. Bluetooth Blocks for ESP32
#. PWA with unsafe websockets?
#. OBD2
#. ESP32 Camera
#. Bugfixes at WebSocketREPLServer
#. Better reserved words (internal
#. NanoPython for Arduino
#. Compilation server
#. Web based tool to write ESP8266 and ESP32 (Adafruit WebSerial ESPTool is almost there!)
#. Linux shell utilites
#. Better fonts / images for SSD1306 and other displays
#. Bluetooh / BLE / beacons
#. Create selected blocks for libraries listed / curated by mcauser / awesome micropython (https://github.com/mcauser/awesome-micropython)
#. MIT App Inventor Integration
#. Exaustive reliability of MicroPython based programs
#. Buzzer / audio tones functions (Example: https://www.youtube.com/watch?v=QAbn-7Ai6UU)
#. Embed BIPES on the device! When there is enough flash / memory for blockly and all BIPES requirements!
#. Zip Files for BIPES offline (already existent, but make public and organized)
#. …

Unorganized ideas
------------------------

Touchscreen / LCD blocks for embedded systems
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* Sound blocks (for ESP, Linux, etc)
* Voice recognition and synthesis blocks (Linux)
* Serial port / sockets
* Servo motors
* Tone ()
* Ultrasound sensor
* net: ping, configure as wifi AP, configure as wifi station, ifconfig
* scan networks
* web server / IOT server
* IOT client / HTTP / HTTPS / MQTT
* Integration with Blynk
* Integration with App Inventor
* Integration with IFTTT
* Integration with thingspeak
* Serial display LCD / OLED 
* Byte / char / float / strings conversion
* Other useful python commands
* Read / write files / EEPROM / Flash
* Interrupts / ISRs
* Watchdog timer
* Media (sound / video, etc)

Web GUI
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* File manager to open, save, edit Python files on the device and select the program to be executed at startup
* Change IOT graph to show timestamps on the X axis and not the sample number

Documentation / HOWTOs
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* pinout / pinmaping per device
* videos / quick usage tutorial
* create and test dozens of examples!
* Better / easier install instructions

Devices
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* Finish micropython + microbit firmware port / compilation 
* mBed + ethernetShield + micropython (driver for micropython)


Bug fixes
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* Run python imports only one time
* Fix python .join bugs on blockly code generation
* Windows / Linux simple graphical interface for ServerSerial, Local socket, Arduino Bridge and other bridges
* Device auto discovery on local network (important for simple usage!)


Site
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* Translate to portuguese and spanish
* Add videos / tutorials for newbies

SocketServerWebREPL
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* Implement WebREPL missing protocol features: send file, receive file
* Implement authentication

Ports
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* Lego Mindstorms EV3 (micropython)

