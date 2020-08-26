
Blockly.Blocks['none'] = {
  init: function() {
    this.setColour(65);
    this.appendDummyInput()
        .appendField("None")
    this.setOutput(true);
    this.setTooltip('');
  }
};
Blockly.Python['none'] = function(block) {
  var code = "None";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['tostr'] = {
  init: function() {
    this.setColour(65);
    this.appendValueInput("input")
        .appendField("to String")
    this.setOutput(true, "String");
    this.setTooltip('');
  }
};
Blockly.Python['tostr'] = function(block) {
  var input = Blockly.Python.valueToCode(block, 'input', Blockly.Python.ORDER_ATOMIC);
  var code = "str(" + input + ")";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['copy'] = {
  init: function() {
    this.setColour(45);
    this.appendValueInput("image")
        .setCheck("image")
        .appendField("copy");
    this.setOutput(true, "image")
    this.setInputsInline(true)
    this.setTooltip('')
  }
};
Blockly.Python['copy'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var code = image + ".copy()";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['convertTo'] = {
  init: function() {
    this.setColour(45);
    this.appendValueInput("input")
        .setCheck("image")
        .appendField("convertTo")
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["float","np.float32"],
          ["uchar","np.uint8"],
          ["int", "np.int32"],]), "flag")
    this.setOutput(true, "image")
    this.setInputsInline(true)
    this.setTooltip('')
  }
};
Blockly.Python['convertTo'] = function(block) {
  var input = Blockly.Python.valueToCode(block, 'input', Blockly.Python.ORDER_ATOMIC);
  var flag = block.getFieldValue('flag');
  var code = "np.asarray(" + input + ", dtype="+flag+")";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['roi'] = {
  init: function() {
    this.setColour(45);
    this.appendValueInput("input")
        .setCheck("image");
    this.appendDummyInput()
        .appendField("roi")
        .appendField("y")
        .appendField(new Blockly.FieldTextInput(""), "y0")
        .appendField(":")
        .appendField(new Blockly.FieldTextInput(""), "y1")
        .appendField("x")
        .appendField(new Blockly.FieldTextInput(""), "x0")
        .appendField(":")
        .appendField(new Blockly.FieldTextInput(""), "x1");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};
Blockly.Python['roi'] = function(block) {
  var input = Blockly.Python.valueToCode(block, 'input', Blockly.Python.ORDER_ATOMIC);
  var y0 = block.getFieldValue('y0');
  var y1 = block.getFieldValue('y1');
  var x0 = block.getFieldValue('x0');
  var x1 = block.getFieldValue('x1');
  var code = input + "[" + y0 + ":" + y1 + "," + x0 + ":" + x1 + "]";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['indexed'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput()
        .appendField("indexed")
    this.appendValueInput("input")
        .setCheck("image");
    this.appendValueInput("index")
        .appendField("index");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};
Blockly.Python['indexed'] = function(block) {
  var index = Blockly.Python.valueToCode(block, 'index', Blockly.Python.ORDER_ATOMIC);
  var input = Blockly.Python.valueToCode(block, 'input', Blockly.Python.ORDER_ATOMIC);
  var code = input + "[" + index + "]";
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Blocks['lists_append'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput()
        .appendField("append")
    this.appendValueInput("list")
    this.appendValueInput("item")
        .appendField("item")
    this.setInputsInline(true);
    this.setTooltip('append items to a list');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
Blockly.Python['lists_append'] = function(block) {
  var list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
  var item = Blockly.Python.valueToCode(block, 'item', Blockly.Python.ORDER_ATOMIC);
  var code = list + ".append(" + item + ")\n";
  return code;
};

Blockly.Blocks['imgsize'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput()
        .appendField("imgsize")
    this.appendValueInput("image")
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};
Blockly.Python['imgsize'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var code = "np.shape(" + image + ")[:2]";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['load'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput()
        .appendField("load")
        .appendField(new Blockly.FieldVariable('image'), 'image')
        .appendField(new Blockly.FieldTextInput("media/lena.jpg"), "filename")
        .appendField("gray")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "grey");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  },
  getVars: function(){return [this.getFieldValue('image')]},
  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('image'))){this.setFieldValue(newName,'image');}},
};
Blockly.Python['load'] = function(block) {
  var img = block.getFieldValue('image');
  var filename = block.getFieldValue('filename');
  var grey = block.getFieldValue('grey') == 'TRUE';
  var flag = grey ? 0 : 1;
  var code = img + " = cv2.imread('" + filename + "'," + flag + ")\n";
  return code;
};

Blockly.Blocks['imshow'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput()
        .appendField("imshow")
        .appendField(new Blockly.FieldVariable('mywin'), 'windowname')
        //.appendField(new Blockly.FieldTextInput("mywin"), "windowname");
    this.appendValueInput("image")
        .setCheck("image");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['imshow'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var windowname = block.getFieldValue('windowname');
  var code = "cv2.imshow('" + windowname + "',"+ image +")\r\n";
  return code;
};

Blockly.Blocks['waitkey'] = {
  init: function() {
    this.setColour(45);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("waitKey");
    this.appendDummyInput()
        .appendField("millis")
        .appendField(new Blockly.FieldTextInput("0"), "millis");
    this.appendDummyInput()
        .appendField("key")
        .appendField(new Blockly.FieldTextInput("27"), "key");
    this.appendStatementInput("statement");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['waitkey'] = function(block) {
  var m = block.getFieldValue('millis');
  var k = block.getFieldValue('key');
  var s = Blockly.Python.statementToCode(block, 'statement') || '  pass\n';
  var code = "if cv2.waitKey("+m+")&0xff == "+k+":\n"+s;
  //return [code, Blockly.Python.ORDER_NONE];
  return code;
};

Blockly.Blocks['onmouse'] = {
  init: function() {
    this.setColour(45);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("onmouse")
        .appendField(new Blockly.FieldVariable('mywin'), 'windowname')
        .appendField(new Blockly.FieldVariable('button'), 'button')
        .appendField(new Blockly.FieldVariable('x'), 'x')
        .appendField(new Blockly.FieldVariable('y'), 'y')
        .appendField(new Blockly.FieldVariable('state'), 'state');
    this.appendStatementInput("statement");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  },
  getVars: function() {
    return [
      this.getFieldValue('windowname'),
      this.getFieldValue('button'),
      this.getFieldValue('x'),
      this.getFieldValue('y'),
      this.getFieldValue('state')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('windowname'))) { this.setFieldValue(newName, 'windowname'); }
    if (Blockly.Names.equals(oldName, this.getFieldValue('button'))) { this.setFieldValue(newName, 'button'); }
    if (Blockly.Names.equals(oldName, this.getFieldValue('x'))) { this.setFieldValue(newName, 'x'); }
    if (Blockly.Names.equals(oldName, this.getFieldValue('y'))) { this.setFieldValue(newName, 'y'); }
    if (Blockly.Names.equals(oldName, this.getFieldValue('state'))) { this.setFieldValue(newName, 'state'); }
  },
};
Blockly.Python['onmouse'] = function(block) {
  var w = block.getFieldValue('windowname');
  var k = block.getFieldValue('key');
  var s = Blockly.Python.statementToCode(block, 'statement') || '  pass\n';
  var code = "def onmouse(button, x, y, state, param):\n" +s + "\n" + "cv2.setMouseCallback('"+w+"', onmouse)\n";
  return code;
};

Blockly.Blocks['cascade'] = {
  init: function() {
    this.setColour(290);
    this.appendDummyInput()
        .appendField("create")
        .appendField(new Blockly.FieldVariable('cascade'), 'cascade')
        .appendField(new Blockly.FieldTextInput("opencv/data/haarcascades/haarcascade_frontalface_alt2.xml"), "xmlfile");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  },
  getVars: function() {
    return [this.getFieldValue('cascade')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('cascade'))) {
      this.setFieldValue(newName, 'cascade');
    }
  },
};
Blockly.Python['cascade'] = function(block) {
  var text_input = block.getFieldValue('xmlfile');
  var cascade = block.getFieldValue('cascade');
  var code = cascade + " = cv2.CascadeClassifier('"+text_input+"')\n" +
             "if "+cascade+".empty(): raise Exception(\"your cascade is empty. are you sure, the path is correct ?\")\n"
  return code;
};

Blockly.Blocks['findobjects'] = {
  init: function() {
    this.setColour(290);
    this.appendDummyInput()
        .appendField("detect")
        .appendField(new Blockly.FieldVariable('cascade'), 'cascade');
    this.appendValueInput("image")
        .setCheck("image");
    this.setOutput(true);
    this.setTooltip('find objects in an image and return a list of rects.\nto draw them, you will need the tl and br items');
  },
  getVars: function() {
    return [this.getFieldValue('cascade')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('cascade'))) {
      this.setFieldValue(newName, 'cascade');
    }
  },
};
Blockly.Python['findobjects'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var cascade = block.getFieldValue('cascade');
  var code = "cascade.detectMultiScale("+image+")"
  return [code, Blockly.Python.ORDER_NONE];
};

/*
Blockly.Blocks['people'] = {
  init: function() {
    this.setColour(260);
    this.appendDummyInput()
        .appendField("create")
        .appendField(new Blockly.FieldVariable('people'), 'people');
    this.setTooltip('create an peopledetector object');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  },
  getVars: function() {
    return [this.getFieldValue('people')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('people'))) {
      this.setFieldValue(newName, 'people');
    }
  },
};
Blockly.Python['people'] = function(block) {
  var people = block.getFieldValue('people');
  var code = people + " = cv2.HOGDescriptor()\n" +
             people + ".setSVMDetector( cv2.HOGDescriptor_getDefaultPeopleDetector() )\n"
  return code;
};

Blockly.Blocks['peopledetect'] = {
  init: function() {
    this.setColour(260);
    this.appendDummyInput()
        .appendField("detect");
    this.appendValueInput("image")
        .setCheck("image")
        .appendField(new Blockly.FieldVariable('people'), 'people');
    this.setOutput(true);
    this.setTooltip('find people in an image, return a list of bounding boxes');
  },
  getVars: function() {
    return [this.getFieldValue('people')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('people'))) {
      this.setFieldValue(newName, 'people');
    }
  },
};
Blockly.Python['peopledetect'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var people = block.getFieldValue('people');
  var code = people + ".detect("+image+")[0]"
  return [code, Blockly.Python.ORDER_NONE];
};
*/


Blockly.Blocks['videocapture'] = {
  init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("VideoCapture")
        .appendField(new Blockly.FieldTextInput("0"), "input")
        .appendField(new Blockly.FieldVariable('img'), 'img');
    this.appendStatementInput("statements")
        .setCheck("image");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  },
  getVars: function() {
    return [this.getFieldValue('img')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('img'))) {
      this.setFieldValue(newName, 'img');
    }
  },
};
Blockly.Python['videocapture'] = function(block) {
  var text_input = block.getFieldValue('input');
  var statements_name = Blockly.Python.statementToCode(block, 'statements');
  var img_name = block.getFieldValue('img');
  var code = "cap=cv2.VideoCapture("+text_input+")\n" +
             "if not cap.isOpened(): raise Exception(\"your input:"+text_input+" could not be opened !\")\n" +
             "while cap.isOpened():\n  r,"+img_name+"=cap.read()\n  if r==False: break\n"+statements_name;
  return code;
};




Blockly.Blocks['VideoWriter_VideoWriter'] = {
  init: function() {
    this.setColour(22);
    this.appendDummyInput()
        .appendField('VideoWriter')
        .appendField(new Blockly.FieldVariable('writer'), 'writer');
    this.appendDummyInput()
        .appendField('filename')
        .appendField(new Blockly.FieldTextInput('my.asf'), 'filename')
    this.appendDummyInput()
        .appendField('fourcc')
        .appendField(new Blockly.FieldTextInput('XVID'), 'fourcc')
    this.appendDummyInput()
        .appendField('fps')
        .appendField(new Blockly.FieldTextInput('24'), 'fps');
    this.appendValueInput('frameSize')
        .appendField('frameSize')
        .setCheck('size');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('videoio_VideoWriter_VideoWriter');
  },
  getVars: function() {
    return [this.getFieldValue('writer')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('writer'))) {
      this.setFieldValue(newName, 'writer');
    }
  },
};
Blockly.Blocks['VideoWriter_write'] = {
  init: function() {
    this.setColour(22);
    this.appendDummyInput()
        .appendField('write')
        .appendField(new Blockly.FieldVariable('writer'), 'writer');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('videoio_VideoWriter_write');
  },
  getVars: function() {
    return [this.getFieldValue('writer')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('writer'))) {
      this.setFieldValue(newName, 'writer');
    }
  },
};


Blockly.Python['VideoWriter_VideoWriter'] = function(block) {
  var writer = block.getFieldValue('writer');
  var filename = block.getFieldValue('filename')
  var fourcc = block.getFieldValue('fourcc')
  var fps = block.getFieldValue('fps');
  var frameSize = Blockly.Python.valueToCode(block, 'frameSize', Blockly.Python.ORDER_ATOMIC);
  var code = writer + " = cv2.VideoWriter('"+filename+"',"+"cv2.VideoWriter_fourcc(*'"+fourcc+"')"+","+fps+","+frameSize+")\n"
  code += "if not " + writer + ".isOpened(): raise Exception(\"your writer failed to open!\")\n"
  return code;
};
Blockly.Python['VideoWriter_write'] = function(block) {
  var that = block.getFieldValue('writer');
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var code = that + ".write("+image+")\n"
  return code;
};

Blockly.Blocks['cvtcolor'] = {
  init: function() {
    this.setColour(65);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["BGR2GRAY","cv2.COLOR_BGR2GRAY"],
          ["GRAY2BGR","cv2.COLOR_GRAY2BGR"],
          ["BGR2HSV", "cv2.COLOR_BGR2HSV"],
          ["HSV2BGR", "cv2.COLOR_HSV2BGR"],]), "flag");
    this.appendValueInput("img")
        .setCheck("image")
        .appendField("cvtColor");
    this.setOutput(true, "image");
    this.setTooltip('');
  }
};
Blockly.Python['cvtcolor'] = function(block) {
  var img = Blockly.Python.valueToCode(block, 'img', Blockly.Python.ORDER_ATOMIC);
  var flag = block.getFieldValue('flag');
  var code = "cv2.cvtColor("+img+","+flag+")";
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['threshold'] = {
  init: function() {
    this.setColour(65);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("30"), "thresh_val")
        .appendField(new Blockly.FieldTextInput("255"), "thresh_to")
        .appendField(new Blockly.FieldDropdown([
          ["BINARY","cv2.THRESH_BINARY"],
          ["BINARY_INV", "cv2.THRESH_BINARY_INV"],
          ["OTSU", "cv2.THRESH_OTSU"]]), "flag");
    this.appendValueInput("img")
        .appendField("threshold")
        .setCheck("image");
    this.setOutput(true, "image");
    this.setTooltip('');
  }
};
Blockly.Python['threshold'] = function(block) {
  var img = Blockly.Python.valueToCode(block, 'img', Blockly.Python.ORDER_ATOMIC);
  var flag = block.getFieldValue('flag');
  var thresh_val = block.getFieldValue('thresh_val');
  var thresh_to = block.getFieldValue('thresh_to');
  var code = "cv2.threshold("+img+","+thresh_val+","+thresh_to+","+flag+")[1]";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['newimage'] = {
  init: function() {
    this.setColour(65);
    this.appendDummyInput()
        .appendField("new image")
        .appendField(new Blockly.FieldTextInput("100"), "w")
        .appendField(new Blockly.FieldTextInput("100"), "h")
        .appendField(new Blockly.FieldDropdown([["bgr", "bgr"], ["gray","gray"], ["float", "float"]]), "type")
    this.appendValueInput("color")
        .appendField("color")
        //.setCheck("Colour");
    this.setOutput(true, "image");
    this.setTooltip('make a new, empty image');
  }
};
Blockly.Python['newimage'] = function(block) {
  var w = block.getFieldValue('w');
  var h = block.getFieldValue('h');
  var t = block.getFieldValue('type');
  var c = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  code = "np.ones(("+h+","+w+"),np.uint8)";
  if (t=="bgr")
    code = "np.ones(("+h+","+w+","+3+"),np.uint8)";
  if (t=="float")
    code = "np.ones(("+h+","+w+"),np.float)";
  if (c)
    code += " * " + c;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['point'] = {
  init: function() {
    this.setColour(65);
    this.appendDummyInput()
        .appendField("point")
        .appendField(new Blockly.FieldTextInput("0"), "x")
        .appendField(new Blockly.FieldTextInput("0"), "y")
    this.setOutput(true, "point");
    this.setTooltip('');
  }
};
Blockly.Python['point'] = function(block) {
  var x = block.getFieldValue('x');
  var y = block.getFieldValue('y');
  var code = "("+x+","+y+")";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['point_tl'] = {
  init: function() {
    this.setColour(65);
    this.appendValueInput("rect")
        .appendField("tl")
        .setCheck("rect");
    this.setOutput(true, "point");
    this.setTooltip('');
  }
};
Blockly.Python['point_tl'] = function(block) {
  var r = Blockly.Python.valueToCode(block, 'rect', Blockly.Python.ORDER_ATOMIC);
  var code = "("+r+"[0],"+r+"[1])";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['point_br'] = {
  init: function() {
    this.setColour(65);
    this.appendValueInput("rect")
        .appendField("br")
        .setCheck("rect");
    this.setOutput(true, "point");
    this.setTooltip('');
  }
};
Blockly.Python['point_br'] = function(block) {
  var r = Blockly.Python.valueToCode(block, 'rect', Blockly.Python.ORDER_ATOMIC);
  var code = "("+r+"[0]+" + r + "[2],"+r+"[1]+"+r+"[3])";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['size'] = {
  init: function() {
    this.setColour(65);
    this.appendDummyInput()
        .appendField("size")
        .appendField(new Blockly.FieldTextInput("0"), "w")
        .appendField(new Blockly.FieldTextInput("0"), "h")
    this.setOutput(true, "size");
    this.setTooltip('');
  }
};
Blockly.Python['size'] = function(block) {
  var w = block.getFieldValue('w');
  var h = block.getFieldValue('h');
  var code = "("+w+","+h+")";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['tuple'] = {
  init: function() {
    this.setColour(65);
    this.appendDummyInput()
        .appendField("tuple")
    this.appendValueInput("X")
    this.setOutput(true);
    this.setTooltip('');
  }
};
Blockly.Python['tuple'] = function(block) {
  var X = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var code = "("+X+")";
  return [code, Blockly.Python.ORDER_NONE];
};
//~ Blockly.Blocks['tuple'] = {
  //~ init: function() {
    //~ this.setColour(65);
    //~ this.appendDummyInput()
        //~ .appendField("tuple")
        //~ .appendField(new Blockly.FieldTextInput("0"), "a")
        //~ .appendField(new Blockly.FieldTextInput("0"), "b")
        //~ .appendField(new Blockly.FieldTextInput("0"), "c")
    //~ this.setOutput(true, "Colour");
    //~ this.setTooltip('');
  //~ }
//~ };
//~ Blockly.Python['tuple'] = function(block) {
  //~ var a = block.getFieldValue('a');
  //~ var b = block.getFieldValue('b');
  //~ var c = block.getFieldValue('c');
  //~ var code = "("+a+","+b+","+c+")";
  //~ return [code, Blockly.Python.ORDER_NONE];
//~ };

Blockly.Blocks['forRange'] = {
  init: function() {
    this.setColour(135);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("for");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('i'), 'i')
        .appendField("in range")
    this.appendValueInput("rend")
        .setCheck("Number");
    this.appendStatementInput("statement");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['forRange'] = function(block) {
  var i = block.getFieldValue('i');
  var stop = Blockly.Python.valueToCode(block, 'rend', Blockly.Python.ORDER_ATOMIC);
  var s = Blockly.Python.statementToCode(block, 'statement') || '  pass\n';
  var code = "for "+i+" in range("+stop+"):\n"+s;
  return code;
};

Blockly.Blocks['forEnum'] = {
  init: function() {
    this.setColour(135);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("enumerate");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('index'), 'index')
        .appendField("and")
        .appendField(new Blockly.FieldVariable('i'), 'i')
        .appendField("in")
    this.appendValueInput("list")
    this.appendStatementInput("statement");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  },
  getVars: function() {
    return [this.getFieldValue('index'),this.getFieldValue('i')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('index'))) { this.setFieldValue(newName, 'index'); }
    if (Blockly.Names.equals(oldName, this.getFieldValue('i'))) { this.setFieldValue(newName, 'i'); }
  },
};
Blockly.Python['forEnum'] = function(block) {
  var index = block.getFieldValue('index');
  var i = block.getFieldValue('i');
  var list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
  var s = Blockly.Python.statementToCode(block, 'statement') || '  pass\n';
  var code = "for "+index+","+i+" in enumerate("+list+"):\n"+s;
  return code;
};


Blockly.Blocks['text_eval'] = {
  init: function() {
    this.setColour(45);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("eval")
        .appendField(new Blockly.FieldTextInput(""), "text");
    //~ this.appendStatementInput("statement");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('direct python eval');
  }
};
Blockly.Python['text_eval'] = function(block) {
  var c = block.getFieldValue('text');
  var code = c + "\n";
  return code;
};
