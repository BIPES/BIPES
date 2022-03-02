# %{MACHINE}
<category name="%{MACHINE}">

# CPU
<category name="CPU">

# ESP32 CPU
<label text="ESP32 CPU"></label>

# get_freq
<block type="get_freq"></block>
    
# set_freq
<block type="set_freq">
 <value name="freq">
    <shadow type="math_number">
      <field name="NUM">160000000</field>
    </shadow>
  </value>
</block>

# reset
<block type="reset"></block>

# machine_unique_id
<block type="machine_unique_id"></block>

# machine_reset_cause
<block type="machine_reset_cause"></block>

# reset_cause_soft
<block type="reset_cause_soft"></block>

# reset_cause_hard
<block type="reset_cause_hard"></block>

# reset_cause_wdt
<block type="reset_cause_wdt"></block>

# reset_cause_deep
<block type="reset_cause_deep"></block>
    
# In/Out Pins
<category name="In/Out Pins">
<label text="In/Out Pins"></label>

# pinout
<block type="pinout"></block>

# gpio_set
<block type="gpio_set">
  <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
  <value name="value">
    <shadow type="logic_boolean">
      <field name="BOOL"></field>
    </shadow>
  </value>
</block>

# gpio_get
<block type="gpio_get">
  <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
  <value name="pullup">
    <shadow type="logic_boolean">
      <field name="BOOL"></field>
    </shadow>
  </value>
</block>

# adc
<block type="adc">
 <value name="pin">
    <shadow type="math_number">
      <field name="NUM">0</field>
    </shadow>
  </value>
</block>

# adc_pico
<block type="adc_pico">
  <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
</block>

# adc_esp32
<block type="adc_esp32">
 <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
</block>

# pwm
<block type="pwm">
  <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
  <value name="frequency">
    <shadow type="math_number">
      <field name="NUM">1000</field>
    </shadow>
  </value>
  <value name="duty">
    <shadow type="math_number">
      <field name="NUM">50</field>
    </shadow>
  </value>
</block>

# pwm.freq
<block type="pwm.freq">
  <value name="frequency">
    <shadow type="math_number">
      <field name="NUM">1000</field>
    </shadow>
  </value>
</block>

# pwm.duty
<block type="pwm.duty">
  <value name="duty">
    <shadow type="math_number">
      <field name="NUM">50</field>
    </shadow>
  </value>
</block>

# pwm.init
<block type="pwm.init">
  <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
</block>

# pwm.deinit
<block type="pwm.deinit"></block>

# gpio_interrupt
<block type="gpio_interrupt">
  <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
</block>


# Snek GPIO Pins
<!-- Snek Related -->
<label text="Snek GPIO Pins"></label>

# snek_gpio_set
<block type="snek_gpio_set">
  <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
  <value name="value">
    <shadow type="logic_boolean">
      <field name="BOOL"></field>
    </shadow>
  </value>
</block>

# snek_gpio_get
<block type="snek_gpio_get">
  <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
</block>

# snek_adc
<block type="snek_adc">
 <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
</block>

# snek_setpower
<block type="snek_setpower">
  <value name="pin">
    <shadow type="pinout">
      <field name="PIN"></field>
    </shadow>
  </value>
  <value name="frequency">
    <shadow type="math_number">
      <field name="NUM">1000</field>
    </shadow>
  </value>
  <value name="duty">
    <shadow type="math_number">
      <field name="NUM">50</field>
    </shadow>
  </value>
</block>
<!-- Snek Related End -->

# -
