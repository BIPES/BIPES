# %{NET}
<category name="%{NET}">

# MQTT
<category name="MQTT">
<label text="MQTT (Message Queue Telemetry Transport)"></label>

# mqtt_init
<block type="mqtt_init">
  <field name="BLOCK_MQTT_INIT">Start MQTT Client</field>
  <value name="server">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
  <value name="port">
    <shadow type="math_number">
      <field name="NUM">1883</field>
    </shadow>
  </value>
  <value name="user">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
  <value name="password">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
</block>

# mqtt_add_to_buffer
<block type="mqtt_add_to_buffer">
  <field name="BLOCK_MQTT_ADD_TO_BUFFER">Add data to MQTT Buffer</field>
  <value name="fieldname">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
  <field name="MQTT_VALUE">Value</field>
</block>

# mqtt_publish_buffer
<block type="mqtt_publish_buffer">
  <field name="BLOCK_MQTT_PUBLISH">Publish Buffer to MQTT Topic</field>
  <value name="topic">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
</block>

# mqtt_publish_payload
<block type="mqtt_publish_payload">
  <field name="BLOCK_MQTT_PUBLISH">Publish Payload to MQTT Topic</field>
  <value name="topic">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
  <value name="payload">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
</block>

# mqtt_set_callback
<block type="mqtt_set_callback">
  <field name="BLOCK_MQTT_SET_CALLBACK">Set Callback to MQTT Messages</field>
  <field name="MQTT_CALLBACK">Callback Function</field>
</block>

# mqtt_subscribe
<block type="mqtt_subscribe">
  <field name="BLOCK_MQTT_SUBSCRIBE">Subscribe to MQTT Topic</field>
  <value name="topic">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
</block>

# mqtt_check_msg
<block type="mqtt_check_msg">
  <field name="BLOCK_MQTT_CHECK_MSG">Check for MQTT Server messages</field>
</block>
# mqtt_wait_msg
<block type="mqtt_wait_msg">
  <field name="BLOCK_MQTT_WAIT_MSG">Wait for MQTT Server messages</field>
</block>

# mqtt_disconnect
<block type="mqtt_disconnect">
  <field name="BLOCK_MQTT_DISCONNECT">Disconnect MQTT Client</field>
</block>

# EasyMQTT
<category name="EasyMQTT">
<label text="IoT: EasyMQTT"></label>

# easymqtt_init
<block type="easymqtt_init"></block>

# easymqtt_publish_data
<block type="easymqtt_publish_data">
  <value name="topic">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
  <value name="data">
    <shadow type="math_number">
      <field name="NUM"></field>
    </shadow>
  </value>
</block>

# easymqtt_subscribe
<block type="easymqtt_subscribe">
  <value name="topic">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
</block>

# easymqtt_receive_data
<block type="easymqtt_receive_data"></block>

# easymqtt_disconnect
<block type="easymqtt_disconnect">
  <field name="BLOCK_EASYMQTT_DISCONNECT">EasyMQTT Stop</field>
</block>

# Bluetooth REPL
<category name="Bluetooth REPL">
<label text="Bluetooth REPL"></label>
<label text="This block allows terminal/console access using bluetooth."></label>
<label text="Library: https://github.com/micropython/micropython/tree/master/examples/bluetooth"></label>
<label text="You need to install 3 files to use:"></label>
<button text="Install ble_advertising library" callbackKey="installPyLib"></button>
<button text="Install ble_uart_peripheral library" callbackKey="installPyLib"></button>
<button text="Install ble_uart_repl library" callbackKey="installPyLib"></button>
<label text="Web Bluetooth REPL"></label>
<label text="Usage:"></label>
<label text="1. Install the 3 files above"></label>
<label text="2. Start Web Bluetooth REPL"></label>
<label text="3. Pair the ESP32 with your device /"></label>
<label text="4. Go to https://bipes.net.br/beta2/ui/"></label>
<label text="5. Select the bluetooth option and Connect (Web Bluetooth)"></label>

# bluetooth_repl_setup
<block type="bluetooth_repl_setup">
  <value name="name">
    <shadow type="text">
      <field name="TEXT">BIPES-BLE</field>
    </shadow>
  </value>
</block>

# bluetooth_repl_start
<block type="bluetooth_repl_start">
    <value name="name">
    <shadow type="text">
     <field name="TEXT">BIPES-BLE</field>
    </shadow>
  </value>
</block>

# -
