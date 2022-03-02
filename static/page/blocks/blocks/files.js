// %{FILES} --------------------------------------------------------------------


Blockly.Blocks['file_open'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Msg["file_open"]);
    this.appendValueInput("file_name")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Msg["file_name"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Msg["file_mode"])
        .appendField(new Blockly.FieldDropdown([["Append","a"], ["Read","r"], ["Overwrite","w"], ["Read and Write","w+"]]), "dropdown_mode");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Msg["file_binary"])
        .appendField(new Blockly.FieldCheckbox("TRUE"), "checkbox_binary");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Open File");
 this.setHelpUrl("bipes.net.br");
  }
};


Blockly.Blocks['file_open_write'] = {
  init: function() {
   this.appendDummyInput()
        .appendField("Open text file for writing");

 this.appendValueInput("filename")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("filename");

 this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);

    this.setColour(230);
 this.setTooltip("Open text file for writing on the filesystem");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['file_open_read'] = {
  init: function() {
   this.appendDummyInput()
        .appendField("Open text file for reading");

 this.appendValueInput("filename")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("filename");

 this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);

    this.setColour(230);
 this.setTooltip("Open text file for reading on the filesystem");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};


Blockly.Blocks['file_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Write to file")
        .appendField(new Blockly.FieldVariable("file"), "filename");
    this.appendValueInput("data")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Data:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Write to a file");
 this.setHelpUrl("bipes.net.br");
  }
};


Blockly.Blocks['file_write_line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Msg["file_write_line"])
        .appendField(new Blockly.FieldVariable("file"), "filename");
    this.appendValueInput("data")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Msg["line"]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Write line to a file");
 this.setHelpUrl("bipes.net.br");
  }
};

Blockly.Blocks['file_write_byte'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Write single byte to file")
        .appendField(new Blockly.FieldVariable("file"), "filename");
    this.appendValueInput("data")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Byte:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Write byte to a file");
 this.setHelpUrl("bipes.net.br");
  }
};


Blockly.Blocks['file_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read data from the file")
        .appendField(new Blockly.FieldVariable("file"), "filename");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Read data from a file");
 this.setHelpUrl("bipes.net.br");
  }
};


Blockly.Blocks['file_close'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Msg["file_close"])
        .appendField(new Blockly.FieldVariable("file"), "filename");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Close a file");
 this.setHelpUrl("bipes.net.br");
  }
};


// Disk file operations --------------------------------------------------------

Blockly.Blocks['files_list'] = {
  init: function() {
   this.appendDummyInput()
        .appendField("List files");

    this.setOutput(true, null);

    this.setColour(230);
 this.setTooltip("List files from current directory ");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

// SD CARD ---------------------------------------------------------------------

Blockly.Blocks["sd_mount"] = {
  init: function() {

   this.appendDummyInput()
        .appendField("Mount SD Card");

  this.appendValueInput("pIn")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("mount point");

        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("Mount SD Card on the specified folder");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.SDCard.html");
  }
};

Blockly.Blocks["sd_mount_custom"] = {
  init: function() {

   this.appendDummyInput()
        .appendField("Mount SD Card (Custom Pins)");

  this.appendValueInput("slot")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("slot");

  this.appendValueInput("sck")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("sck");

  this.appendValueInput("miso")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("miso");

  this.appendValueInput("mosi")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("mosi");

  this.appendValueInput("cs")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("cs");

  this.appendValueInput("freq")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("freq");

  this.appendValueInput("pIn")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("mount point");

        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("Mount SD Card on the specified folder Custom Pins)");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/machine.SDCard.html");
  }
};

// Other file operations -------------------------------------------------------
Blockly.Blocks["uos_uname"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" uname");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: uname() Return a tuple (possibly a named tuple) containing information about the underlying machine and/or its operating system. The tuple has five fields ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["uos_urandom"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" urandom");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: urandom(n) Return a bytes object with block_definitions.js block_definitions_custom.js functions.txt generate-blocks.sh generator_stubs.js generator_stubs_custom.js onlyfunctions.txt random bytes. Whenever possible, it is generated by the hardware random number generator. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["uos_chdir"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" chdir");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: chdir(path) Change current directory. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["uos_getcwd"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" getcwd");
    this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: getcwd() Get the current directory. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};

Blockly.Blocks["uos_ilistdir"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" ilistdir");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};

Blockly.Blocks["uos_listdir"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" listdir");
        this.setColour(0);
    //this.setPreviousStatement(true, null);
    //this.setNextStatement(true, null);
    this.setOutput(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};

Blockly.Blocks["uos_mkdir"] = {
  init: function() {

   this.appendDummyInput()
        .appendField("Create new folder");

  this.appendValueInput("pIn")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("name");

        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: mkdir(path) Create a new directory. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};

Blockly.Blocks["uos_remove"] = {
  init: function() {

   this.appendDummyInput()
        .appendField("Delete file");

  this.appendValueInput("pIn")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("filename");

        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: remove(path) Remove a file. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};

Blockly.Blocks["uos_rmdir"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" rmdir");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: rmdir(path) Remove a directory. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};

Blockly.Blocks["uos_rename"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" rename");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: rename(old_path, new_path) Rename a file. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};

Blockly.Blocks["uos_stat"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" stat");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: stat(path) Get the status of a file or directory. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};

Blockly.Blocks["uos_statvfs"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" statvfs");
        this.setColour(0);
    this.setOutput(true, null);
 this.setTooltip(".. function:: statvfs(path) Get the status of a fileystem. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["uos_sync"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" sync");
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: sync() Sync all filesystems. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};

Blockly.Blocks["uos_dupterm"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" dupterm");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: dupterm(stream_object, index=0, /) Duplicate or switch the MicroPython terminal (the REPL) on the given `stream` -like ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};

Blockly.Blocks["uos_mount"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" mount");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(" ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};

Blockly.Blocks["uos_umount"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" umount");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. function:: umount(mount_point) Unmount a filesystem. *mount_point* can be a string naming the mount locatio n, ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};

Blockly.Blocks["uos_readblocks"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" readblocks");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: readblocks(block_num, buf) .. method:: readblocks(block_num, buf, offset) The first form reads aligned, multiples of blocks. ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};

Blockly.Blocks["uos_readblocks"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" readblocks");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: readblocks(block_num, buf, offset) The first form reads aligned, multiples of blocks. Starting at the block given by the index *block_num*, read blocks from ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["uos_writeblocks"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" writeblocks");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: writeblocks(block_num, buf) .. method:: writeblocks(block_num, buf, offset) The first form writes aligned, multiples of blocks, and requires that th ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["uos_writeblocks"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" writeblocks");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: writeblocks(block_num, buf, offset) The first form writes aligned, multiples of blocks, and requires that th e ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};



Blockly.Blocks["uos_ioctl"] = {
  init: function() {
  this.appendValueInput("pIn")
        .appendField(" ioctl");
        this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(".. method:: ioctl(op, arg) Control the block device and query its parameters. The operation to perform is given by *op* which is one of the following integers: ");
 this.setHelpUrl("https://docs.micropython.org/en/latest/library/uos.html");
  }
};
