// Project metadata
Blockly.Blocks['project_metadata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabel(Msg["project_info"]), "NAME")
    this.appendValueInput("project_author")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabel(Msg["project_info_author"]), "project_author")
    this.appendValueInput("project_iot_id")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabel("IOT ID"), "project_iot_id")
    this.appendValueInput("project_description")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabel(Msg["project_info_desc"]), "project_description")
    this.setColour(230)
    this.setTooltip("Information about the project")
    this.setHelpUrl("http://www.bipes.net.br")
  }
}

// Bipes plot ::REMOVE::
Blockly.Blocks['bipes_plot'] = {
  init: function() {
    this.appendDummyInput()
//        .appendField("Show data on IOT tab (freeboard)"); //original
        .appendField(Msg["show_iot"]); //i18n
//    this.appendDummyInput()
//        .appendField("(ideal for USB port or bluetooth)");

    this.appendValueInput("id")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ID");

    this.appendValueInput("values")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Msg["data"]);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);

 this.setTooltip("BIPES Plot");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

// Store data in the browser's localStorage
Blockly.Blocks['localstorage_store'] = {
    init: function () {
        this.appendDummyInput()
          .appendField("localStorage topic")
          .appendField(new Blockly.FieldTextInput("data"), "topic");
        this.itemCount_ = 3;
        this.updateShape_();
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setMutator(new Blockly.Mutator(["localstorage_store_item"]));
        this.setTooltip("The data will be stored in the browser, organized by topic, see the 'Databoard' tab.");
    },
    mutationToDom: function () {
        var a = Blockly.utils.xml.createElement("mutation");
        a.setAttribute("items", this.itemCount_);
        return a;
    },
    domToMutation: function (a) {
        this.itemCount_ = parseInt(a.getAttribute("items"), 10);
        this.updateShape_();
    },
    decompose: function (a) {
        var b = a.newBlock("localstorage_store_container");
        b.initSvg();
        for (var c = b.getInput("STACK").connection, d = 0; d < this.itemCount_; d++) {
            var e = a.newBlock("localstorage_store_item");
            e.initSvg();
            c.connect(e.previousConnection);
            c = e.nextConnection;
        }
        return b;
    },
    compose: function (a) {
        var b = a.getInputTargetBlock("STACK");
        for (a = []; b && !b.isInsertionMarker(); ) a.push(b.valueConnection_), (b = b.nextConnection && b.nextConnection.targetBlock());
        for (b = 0; b < this.itemCount_; b++) {
            var c = this.getInput("ADD" + b).connection.targetConnection;
            c && -1 == a.indexOf(c) && c.disconnect();
        }
        this.itemCount_ = a.length;
        this.updateShape_();
        for (b = 0; b < this.itemCount_; b++) Blockly.Mutator.reconnect(a[b], this, "ADD" + b);
    },
    saveConnections: function (a) {
        a = a.getInputTargetBlock("STACK");
        for (var b = 0; a; ) {
            var c = this.getInput("ADD" + b);
            a.valueConnection_ = c && c.connection.targetConnection;
            b++;
            a = a.nextConnection && a.nextConnection.targetBlock();
        }
    },
    updateShape_: function () {
        this.itemCount_ && this.getInput("EMPTY") ? this.removeInput("EMPTY") : this.itemCount_ || this.getInput("EMPTY") || this.appendDummyInput("EMPTY").appendField("no axis set").setAlign(Blockly.ALIGN_RIGHT);
        for (var a = 0; a < this.itemCount_; a++)
            if (!this.getInput("ADD" + a)) {
                var b = this.appendValueInput("ADD" + a).setAlign(Blockly.ALIGN_RIGHT);
                0 == a && b.appendField("axis data (x, y, ...)");
            }
        for (; this.getInput("ADD" + a); ) this.removeInput("ADD" + a), a++;
    },
};
Blockly.Blocks['localstorage_store_container'] = {
    init: function () {
        this.setColour(230);
        this.appendDummyInput().appendField("dataset");
        this.appendStatementInput("STACK");
        this.setTooltip("Dataset composed by multiple axis, the first axis is 'x'.");
        this.contextMenu = !1;
    },
};
Blockly.Blocks['localstorage_store_item'] = {
    init: function () {
        this.setColour(230);
        this.appendDummyInput().appendField("axis");
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setTooltip("Add axis to the dataset (x, y1, y2, ...).");
        this.contextMenu = !1;
    },
};
