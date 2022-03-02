# %{OUTPUTS}
<category name="%{OUTPUTS}">

# Relay
<category name="Relay">
<label text="Relay"></label>

# relay_switch
<block type="relay_switch">
  <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
</block>

# I/O Expander
<category name="I/O Expander">
<label text="I/O Expander"></label>
<label text="MCP23017"></label>
<button text="%{INSTALL_LIBRARY}:  MCP23017" callbackKey="installPyLib"></button>
<label text="Library source: https://github.com/ShrimpingIt/micropython-mcp230xx/blob/master/mcp.py"></label>

# mcp23017_init
<block type="mcp23017_init">
  <value name="scl">
    <shadow type="math_number">
      <field name="NUM">22</field>
    </shadow>
  </value>
  <value name="sda">
    <shadow type="math_number">
     <field name="NUM">21</field>
    </shadow>
  </value>
</block>

# mcp23017_setup
<block type="mcp23017_setup"></block>

# mcp23017_output
<block type="mcp23017_output"></block>

# mcp23017_input
<block type="mcp23017_input"></block>

# RC Servo Motor
<category name="RC Servo Motor">
<label text="Hobby RC Servo Motor"></label>

# init_servo
<block type="init_servo">
  <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
</block>

# move_servo
<block type="move_servo">
  <value name="angle">
    <shadow type="math_number">
      <field name="NUM">90</field>
    </shadow>
  </value>
</block>

# Stepper Motor
<category name="Stepper Motor">
<label text="Stepper Motor"></label>

# stepper_init
<block type="stepper_init">
  <value name="p0">
    <shadow type="pinout">
      <field name="Pin0"></field>
    </shadow>
  </value>
  <value name="p1">
    <shadow type="pinout">
      <field name="Pin1"></field>
    </shadow>
  </value>
  <value name="p2">
    <shadow type="pinout">
      <field name="Pin2"></field>
    </shadow>
  </value>
  <value name="p3">
    <shadow type="pinout">
      <field name="Pin3"></field>
    </shadow>
  </value>
</block>

# stepper_step
<block type="stepper_step">
 <value name="steps">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
</block>

# DC Motor
<category name="DC Motor">
<label text="DC Motor"></label>

# dc_motor_init
<block type="dc_motor_init">
  <value name="pwm">
    <shadow type="pinout">
      <field name="PWM"></field>
    </shadow>
  </value>
  <value name="dir1">
    <shadow type="pinout">
      <field name="Dir1"></field>
    </shadow>
  </value>
  <value name="dir2">
    <shadow type="pinout">
      <field name="Dir2"></field>
    </shadow>
  </value>
</block>

# dc_motor_power
<block type="dc_motor_power">
 <value name="power">
    <shadow type="math_number">
      <field name="NUM">70</field>
    </shadow>
  </value>
</block>

# dc_motor_direction
<block type="dc_motor_direction">
 <value name="dir">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
</block>

# dc_motor_stop
<block type="dc_motor_stop"></block>

# -
