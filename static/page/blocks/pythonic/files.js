// %{FILES} --------------------------------------------------------------------

Blockly.Python['file_open'] = function(block) {
  var value_file_name = Blockly.Python.valueToCode(block, 'file_name', Blockly.Python.ORDER_ATOMIC);
  var mode = block.getFieldValue('dropdown_mode');
  var binary = block.getFieldValue('checkbox_binary') == 'TRUE';

  var modeB = '';
  if (binary)
    modeB='b'+mode;
  else
    modeB=mode;

  var code = 'open(' + value_file_name + ', \'' + modeB + '\')\n';

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['file_open_write'] = function(block) {
  var pIn = Blockly.Python.valueToCode(block, 'filename', Blockly.Python.ORDER_ATOMIC);
  var code = 'f = open(' + pIn + ', \'a+\')\n';
  //var code = 'f = open(' + pIn + ', \'w\')\n';
  return code;
};


Blockly.Python['file_open_read'] = function(block) {
  var pIn = Blockly.Python.valueToCode(block, 'filename', Blockly.Python.ORDER_ATOMIC);
  var code = 'f = open(' + pIn + ')\n';
  return code;
};

Blockly.Python['file_close'] = function(block) {
  var variable_filename = Blockly.Python.nameDB_.getName(block.getFieldValue('filename'), Blockly.VARIABLE_CATEGORY_NAME);

  var code = variable_filename + '.close()\n';
  return code;
};

Blockly.Python['file_write'] = function(block) {
  var variable_filename = Blockly.Python.nameDB_.getName(block.getFieldValue('filename'), Blockly.VARIABLE_CATEGORY_NAME);
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);

  var code = variable_filename + '.write(' + value_data + ')\n';

  return code;
};


Blockly.Python['file_write_line'] = function(block) {
  var variable_filename = Blockly.Python.nameDB_.getName(block.getFieldValue('filename'), Blockly.VARIABLE_CATEGORY_NAME);
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);

  var code = variable_filename + '.write(' + value_data + ')\n';
      code += variable_filename + ".write('\\n')\n";

  return code;
};

Blockly.Python['file_write_byte'] = function(block) {
  var variable_filename = Blockly.Python.nameDB_.getName(block.getFieldValue('filename'), Blockly.VARIABLE_CATEGORY_NAME);
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);

  var code = variable_filename + '.write(struct.pack(\"B\",' + value_data + '))\n';

  return code;
};

Blockly.Python['file_read'] = function(block) {
  var variable_filename = Blockly.Python.nameDB_.getName(block.getFieldValue('filename'), Blockly.VARIABLE_CATEGORY_NAME);

  var code = variable_filename + '.read()\n';

  return [code, Blockly.Python.ORDER_NONE];
};

// Disk file operations --------------------------------------------------------
Blockly.Python['files_list'] = function(block) {
  Blockly.Python.definitions_['import_os'] = 'import os';
  var code = 'os.listdir()';
  return [code, Blockly.Python.ORDER_NONE];
};

// SD CARD ---------------------------------------------------------------------
Blockly.Python["sd_mount"] = function(block) {
	Blockly.Python.definitions_['import_os'] = 'import os';
	Blockly.Python.definitions_['import_machine'] = 'import machine';

	var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);

	var code = "os.mount(machine.SDCard(), " + value_pIn + ")\n";

	return code;
};

Blockly.Python["sd_mount_custom"] = function(block) {
	/*
	 *
>>> import machine
>>> from machine import Pin
>>> s=machine.SDCard(slot=2, width=1, cd=None, wp=None, sck=Pin(18), miso=Pin(19), mosi=Pin(23), cs=Pin(15), freq=20000000)
>>> import os
>>> os.mount(s,'/sd')
>>> os.listdir('/sd')
*/
	Blockly.Python.definitions_['import_os'] = 'import os';
	Blockly.Python.definitions_['import_machine'] = 'import machine';
	Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';

	var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var slot = Blockly.Python.valueToCode(block, 'slot', Blockly.Python.ORDER_ATOMIC);
	var sck = Blockly.Python.valueToCode(block, 'sck', Blockly.Python.ORDER_ATOMIC);
	var miso = Blockly.Python.valueToCode(block, 'miso', Blockly.Python.ORDER_ATOMIC);
	var mosi = Blockly.Python.valueToCode(block, 'mosi', Blockly.Python.ORDER_ATOMIC);
	var cs = Blockly.Python.valueToCode(block, 'cs', Blockly.Python.ORDER_ATOMIC);
	var freq = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_ATOMIC);

	var code = "sdcard=machine.SDCard(slot=" + slot + ', width=1, cd=None, wp=None, sck=Pin(' + sck + '), miso=Pin(' + miso + '), mosi=Pin(' + mosi + '), cs=Pin(' + cs + '), freq=' + freq + ')\n';
	code += "os.mount(sdcard, " + value_pIn + ")\n";

	return code;
};

// Other file operations -------------------------------------------------------

Blockly.Python["uos_uname"] = function(block) {
		Blockly.Python.definitions_['import_uos'] = 'import uos';
	var code = "uos.uname()\n";
	return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python["uos_urandom"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.urandom(" + value_pIn + ")\n";
	return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python["uos_chdir"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.chdir(" + value_pIn + ")\n";
	return code;
};
Blockly.Python["uos_getcwd"] = function(block) {
		Blockly.Python.definitions_['import_uos'] = 'import uos';
	var code = "uos.getcwd()\n";
	return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python["uos_ilistdir"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.ilistdir(" + value_pIn + ")\n";
	return code;
};
Blockly.Python["uos_listdir"] = function(block) {
	var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "os.listdir(" + value_pIn + ")";
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["uos_mkdir"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.mkdir(" + value_pIn + ")\n";
	return code;
};

Blockly.Python["uos_remove"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.remove(" + value_pIn + ")\n";
	return code;
};
Blockly.Python["uos_rmdir"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.rmdir(" + value_pIn + ")\n";
	return code;
};
Blockly.Python["uos_rename"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.rename(" + value_pIn + ")\n";
	return code;
};
Blockly.Python["uos_stat"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.stat(" + value_pIn + ")\n";
	return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python["uos_statvfs"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.statvfs(" + value_pIn + ")\n";
	return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python["uos_sync"] = function(block) {
		Blockly.Python.definitions_['import_uos'] = 'import uos';
	var code = "uos.sync()\n";
	return code;
};
Blockly.Python["uos_dupterm"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.dupterm(" + value_pIn + ")\n";
	return code;
};
Blockly.Python["uos_mount"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.mount(" + value_pIn + ")\n";
	return code;
};
Blockly.Python["uos_umount"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "os.umount(" + value_pIn + ")\n";
	return code;
};
Blockly.Python["uos_readblocks"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.readblocks(" + value_pIn + ")\n";
	return code;
};
Blockly.Python["uos_readblocks"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.readblocks(" + value_pIn + ")\n";
	return code;
};
Blockly.Python["uos_writeblocks"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.writeblocks(" + value_pIn + ")\n";
	return code;
};
Blockly.Python["uos_writeblocks"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.writeblocks(" + value_pIn + ")\n";
	return code;
};
Blockly.Python["uos_ioctl"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = "uos.ioctl(" + value_pIn + ")\n";
	return code;
};
