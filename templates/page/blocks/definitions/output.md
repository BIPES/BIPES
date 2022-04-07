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
<button text="%{INSTALL_LIBRARY}: MCP23017" callbackKey="installPyLib"></button>
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

# %{SOUNDS}
<category name="%{SOUNDS}">
<label text="Sounds and RTTTL:"></label>
<label text="Ring Tone Text Transfer Language (RTTTL) "></label>
<button text="%{INSTALL_LIBRARY}: rtttl" callbackKey="installPyLib"></button>
<button text="%{INSTALL_LIBRARY}: songs" callbackKey="installPyLib"></button>
<button text="%{LOAD_EXAMPLE}: songs" callbackKey="loadExample"></button>
<button text="%{DOCUMENTATION_HOW}: sound" callbackKey="loadDoc"></button>

# tone
<block type="tone"> 
  <value name="pin">
    <shadow type="pinout">
      <field name="pin"></field>
    </shadow>
  </value>
 <value name="frequency">
    <shadow type="math_number">
      <field name="NUM">1200</field>
    </shadow>
  </value>
 <value name="duration">
    <shadow type="math_number">
      <field name="NUM">-1</field>
    </shadow>
  </value>
</block>

# note
<block type="note"> 
  <value name="pin">
    <shadow type="pinout">
      <field name="pin"></field>
    </shadow>
  </value>
  <value name="note">
    <shadow type="tone_type">
      <field name="note"></field>
    </shadow>
  </value>
 <value name="duration">
    <shadow type="math_number">
      <field name="NUM">-1</field>
    </shadow>
  </value>
</block>

# tone_type
<block type="tone_type"></block>

# rtttl_play
<block type="rtttl_play"> 
  <value name="pin">
    <shadow type="pinout">
      <field name="pin"></field>
    </shadow>
  </value>
  <value name="song">
    <shadow type="text">
      <field name="TEXT">Super Mario - Main Theme</field>
    </shadow>
  </value>
</block>

# sounds_text_blocks
<block type="text"> <field name="TEXT">Super Mario - Main Theme</field> </block>
<block type="text"> <field name="TEXT">Super Mario - Title Music</field> </block>
<block type="text"> <field name="TEXT">SMBtheme</field> </block>
<block type="text"> <field name="TEXT">SMBwater</field> </block>
<block type="text"> <field name="TEXT">SMBunderground</field> </block>
<block type="text"> <field name="TEXT">Picaxe</field> </block>
<block type="text"> <field name="TEXT">Simpsons</field> </block>
<block type="text"> <field name="TEXT">Indiana</field> </block>
<block type="text"> <field name="TEXT">TakeOnMe</field> </block>
<block type="text"> <field name="TEXT">Entertainer</field> </block>
<block type="text"> <field name="TEXT">Muppets</field> </block>
<block type="text"> <field name="TEXT">Xfiles</field> </block>
<block type="text"> <field name="TEXT">Looney</field> </block>
<block type="text"> <field name="TEXT">20thCenFox</field> </block>
<block type="text"> <field name="TEXT">Bond</field> </block>
<block type="text"> <field name="TEXT">MASH</field> </block>
<block type="text"> <field name="TEXT">StarWars</field> </block>
<block type="text"> <field name="TEXT">GoodBad</field> </block>
<block type="text"> <field name="TEXT">TopGun</field> </block>
<block type="text"> <field name="TEXT">A-Team</field> </block>
<block type="text"> <field name="TEXT">Flintstones</field> </block>
<block type="text"> <field name="TEXT">Jeopardy</field> </block>
<block type="text"> <field name="TEXT">Gadget</field> </block>
<block type="text"> <field name="TEXT">Smurfs</field> </block>
<block type="text"> <field name="TEXT">MahnaMahna</field> </block>
<block type="text"> <field name="TEXT">LeisureSuit</field> </block>
<block type="text"> <field name="TEXT">MissionImp</field> </block>

# -
