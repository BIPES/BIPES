# %{TIMING}
<category name="%{TIMING}">

# label_%{TIMING}
<label text="%{TIMING}"></label>

# delay
<block type="delay">
  <value name="TIME">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
</block>

# utime.vars
<block type="utime.vars"></block>

# utime.ticks_add
<block type="utime.ticks_add">
   <value name="TIME1">
    <shadow type="utime.vars"></shadow>
  </value>
  <value name="TIME2">
  <shadow type="math_number">
    <field name="NUM">100</field>
  </shadow>
  </value>
</block>

# utime.ticks_diff
<block type="utime.ticks_diff"></block>

# esp32_set_rtc
<block type="esp32_set_rtc"></block>

# esp32_get_rtc
<block type="esp32_get_rtc"></block>

# timer
<block type="timer"></block>

# utime.deadline
<block type="utime.deadline">
  <value name="TIME">
  <shadow type="math_number">
    <field name="NUM">100</field>
  </shadow>
  </value>
</block>

# delay_ms
<block type="delay_ms">
  <value name="time">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
</block>

# delay_us
<block type="delay_us">
  <value name="time">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
</block>

# ticks_ms
<block type="ticks_ms"></block>

# ticks_diff
<block type="ticks_diff"></block>

# stop_timer
<block type="stop_timer">
  <value name="timerNumber">
    <shadow type="math_number">
      <field name="NUM">0</field>
    </shadow>
  </value>
</block>

# deep_sleep8266 
<block type="deep_sleep8266">
  <value name="interval">
    <shadow type="math_number">
      <field name="NUM">60</field>
    </shadow>
  </value>
</block>

# -
