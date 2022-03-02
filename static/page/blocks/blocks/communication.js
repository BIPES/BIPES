// %{COMM} ---------------------------------------------------------------------
// UART ------------------------------------------------------------------------
Blockly.Blocks['uart_init'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Init UART Serial Port");

    this.appendValueInput("port")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Port:");

    this.appendValueInput("speed")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Baud rate:");

    this.appendValueInput("bits")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Start bit:");

    this.appendValueInput("stop")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Stop bit:");

    this.appendValueInput("par")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Parity:");

    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  }
};

Blockly.Blocks['uart_write'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Send data to UART");

    this.appendValueInput("buf")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Data:");

    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  }
};

Blockly.Blocks['uart_read'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Read data from UART");

    this.appendValueInput("s")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Bytes to read:");

    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['uart_read_all'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Read all data from UART");

    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['uart_readline'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Read one line from UART");

    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['uart_read_into'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Read from UART into a Buffer");

    this.appendValueInput("b")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Destination Buffer:");

    this.setOutput(true);
    this.setTooltip('');
  }
};

// SPI -------------------------------------------------------------------------


Blockly.Blocks["machine.SPI_SPI.init"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" SPI.init");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.SPI.html");
  }
};



Blockly.Blocks["machine.SPI_SPI.deinit"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" SPI.deinit");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: SPI.deinit() Turn off the SPI bus. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.SPI.html");
  }
};



Blockly.Blocks["machine.SPI_SPI.read"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" SPI.read");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: SPI.read(nbytes, write=0x00) Read a number of bytes specified by ``nbytes`` while continuously writing the single byte given by ``write``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.SPI.html");
  }
};



Blockly.Blocks["machine.SPI_SPI.readinto"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" SPI.readinto");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: SPI.readinto(buf, write=0x00) Read into the buffer specified by ``buf`` while continuously writing the single byte given by ``write``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.SPI.html");
  }
};



Blockly.Blocks["machine.SPI_SPI.write"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" SPI.write");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: SPI.write(buf) Write the bytes contained in ``buf``. Returns ``None``. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.SPI.html");
  }
};



Blockly.Blocks["machine.SPI_SPI.write_readinto"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" SPI.write_readinto");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: SPI.write_readinto(write_buf, read_buf) Write the bytes from ``write_buf`` while reading into ``read_buf``. The buffers can be the same or different, but both buffers must have the ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.SPI.html");
  }
};

// GSM Modem -------------------------------------------------------------------
Blockly.Blocks['gsm_modem_init'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Init SIM800/900 GSM MODEM");

    this.appendValueInput("tx")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("TX Pin:");

    this.appendValueInput("rx")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("RX Pin:");

    this.appendValueInput("bps")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Baud rate:");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['gsm_modem_send_sms'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Send SMS Message");

    this.appendValueInput("dst")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Destination:");

    this.appendValueInput("msg")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Message:");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['gsm_modem_send_at'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Send AT Command");

    this.appendValueInput("cmd")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Command:");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['gsm_modem_http_get'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("GSM: Send HTTP GET Request");

    this.appendValueInput("cmd")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Request:");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['gsm_modem_response'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("Get GSM Modem Response");

    this.appendValueInput("timeout")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Timeout:");

    this.setOutput(true);
    this.setTooltip('');
  }
};


// I2C -------------------------------------------------------------------------


Blockly.Blocks["machine.I2C_I2C.init"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" I2C.init");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};



Blockly.Blocks["machine.I2C_I2C.deinit"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" I2C.deinit");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: I2C.deinit() Turn off the I2C bus. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};



Blockly.Blocks["machine.I2C_I2C.scan"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" I2C.scan");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: I2C.scan() Scan all I2C addresses between 0x08 and 0x77 inclusive and return a list of those that respond. A device responds if it pulls the SDA line low after ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};



Blockly.Blocks["machine.I2C_I2C.start"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" I2C.start");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: I2C.start() Generate a START condition on the bus (SDA transitions to low while SCL is hi gh). ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};



Blockly.Blocks["machine.I2C_I2C.stop"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" I2C.stop");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: I2C.stop() Generate a STOP condition on the bus (SDA transitions to high while SCL is hi gh). ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};



Blockly.Blocks["machine.I2C_I2C.readinto"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" I2C.readinto");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: I2C.readinto(buf, nack=True, /) Reads bytes from the bus and stores them into *buf*. The number of bytes read is the length of *buf*. An ACK will be sent on the bus after ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};



Blockly.Blocks["machine.I2C_I2C.write"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" I2C.write");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: I2C.write(buf) Write the bytes from *buf* to the bus. Checks that an ACK is received after each byte and stops transmitting the remaining bytes if a NACK is ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};



Blockly.Blocks["machine.I2C_I2C.readfrom"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" I2C.readfrom");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: I2C.readfrom(addr, nbytes, stop=True, /) Read *nbytes* from the slave specified by *addr*. If *stop* is true then a STOP condition is generated at the end of the transf ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};



Blockly.Blocks["machine.I2C_I2C.readfrom_into"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" I2C.readfrom_into");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. method:: I2C.readfrom_into(addr, buf, stop=True, /) Read into *buf* from the slave specified by *addr*. The number of bytes read will be the length of *buf*. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};



Blockly.Blocks["machine.I2C_I2C.writeto"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" I2C.writeto");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: I2C.writeto(addr, buf, stop=True, /) Write the bytes from *buf* to the slave specified by *addr*. If a NACK is received following the write of a byte from *buf* then the ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};



Blockly.Blocks["machine.I2C_I2C.writevto"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" I2C.writevto");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: I2C.writevto(addr, vector, stop=True, /) Write the bytes contained in *vector* to the slave specified by *addr*. *vector* should be a tuple or list of objects with the buffer protocol. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};



Blockly.Blocks["machine.I2C_I2C.readfrom_mem"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" I2C.readfrom_mem");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};



Blockly.Blocks["machine.I2C_I2C.readfrom_mem_into"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" I2C.readfrom_mem_into");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};



Blockly.Blocks["machine.I2C_I2C.writeto_mem"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" I2C.writeto_mem");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.I2C.html");
  }
};

