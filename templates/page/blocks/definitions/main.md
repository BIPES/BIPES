# end_category
</category>

# sep
<sep></sep>

# ${LOGIC}
<category name="%{LOGIC}" colour="%{LOGIC_HUE}">

# controls_if
<block type="controls_if"></block>

# logic_compare
<block type="logic_compare"></block>

# logic_operation
<block type="logic_operation"></block>

# logic_negate
<block type="logic_negate"></block>

# logic_boolean
<block type="logic_boolean"></block>

# logic_null
<block type="logic_null"></block>

# logic_ternary
<block type="logic_ternary"></block>

# %{LOOPS}
<category name="%{LOOPS}" colour="%{LOOPS_HUE}">

# controls_repeat_ext
<block type="controls_repeat_ext">
  <value name="TIMES">
    <shadow type="math_number">
      <field name="NUM">10</field>
    </shadow>
  </value>
</block>

# controls_whileUntil
<block type="controls_whileUntil"></block>

# controls_for
<block type="controls_for">
  <value name="FROM">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
  <value name="TO">
    <shadow type="math_number">
      <field name="NUM">10</field>
    </shadow>
  </value>
  <value name="BY">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
</block>
      
# controls_forEach
<block type="controls_forEach"></block>

# controls_flow_statements
<block type="controls_flow_statements"></block>

# %{MATH}
<category name="%{MATH}" colour="%{MATH_HUE}">

# math_number
<block type="math_number">
  <field name="NUM">123</field>
</block>

# math_arithmetic
<block type="math_arithmetic">
  <value name="A">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
  <value name="B">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
</block>

# math_single
<block type="math_single">
<value name="NUM">
  <shadow type="math_number">
    <field name="NUM">9</field>
  </shadow>
</value>
</block>

# math_trig
<block type="math_trig">
  <value name="NUM">
    <shadow type="math_number">
      <field name="NUM">45</field>
    </shadow>
  </value>
</block>

# math_constant
<block type="math_constant"></block>

# math_number_property
<block type="math_number_property">
  <value name="NUMBER_TO_CHECK">
    <shadow type="math_number">
      <field name="NUM">0</field>
    </shadow>
  </value>
</block>

# math_round
<block type="math_round">
  <value name="NUM">
    <shadow type="math_number">
      <field name="NUM">3.1</field>
    </shadow>
  </value>
</block>

# math_on_list
<block type="math_on_list"></block>

# math_modulo
<block type="math_modulo">
  <value name="DIVIDEND">
    <shadow type="math_number">
      <field name="NUM">64</field>
    </shadow>
  </value>
  <value name="DIVISOR">
    <shadow type="math_number">
      <field name="NUM">10</field>
    </shadow>
  </value>
</block>

# math_constrain
<block type="math_constrain">
  <value name="VALUE">
    <shadow type="math_number">
      <field name="NUM">50</field>
    </shadow>
  </value>
  <value name="LOW">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
  <value name="HIGH">
    <shadow type="math_number">
      <field name="NUM">100</field>
    </shadow>
  </value>
</block>

# math_random_int
<block type="math_random_int">
  <value name="FROM">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
  <value name="TO">
    <shadow type="math_number">
      <field name="NUM">100</field>
    </shadow>
  </value>
</block>

# math_random_float
<block type="math_random_float"></block>

# var_to_int
<block type="var_to_int">  
  <field name="VAR">to int</field>
</block>

# ${TEXT}
<category name="%{TEXT}" colour="%{TEXTS_HUE}">

# text
<block type="text"></block>

# text_join
<block type="text_join"></block>

# text_append
<block type="text_append">
  <value name="TEXT">
    <shadow type="text"></shadow>
  </value>
</block>

# text_length
<block type="text_length">
  <value name="VALUE">
    <shadow type="text">
      <field name="TEXT">abc</field>
    </shadow>
  </value>
</block>

# text_isEmpty
<block type="text_isEmpty">
  <value name="VALUE">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
</block>

# text_indexOf
<block type="text_indexOf">
  <value name="VALUE">
    <block type="variables_get">
      <field name="VAR">{textVariable}</field>
    </block>
  </value>
  <value name="FIND">
    <shadow type="text">
      <field name="TEXT">abc</field>
    </shadow>
  </value>
</block>

# text_charAt
<block type="text_charAt">
  <value name="VALUE">
    <block type="variables_get">
      <field name="VAR">{textVariable}</field>
    </block>
  </value>
</block>

# text_getSubstring
<block type="text_getSubstring">
  <value name="STRING">
    <block type="variables_get">
      <field name="VAR">{textVariable}</field>
    </block>
  </value>
</block>

# text_changeCase
<block type="text_changeCase">
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">abc</field>
    </shadow>
  </value>
</block>

# text_trim
<block type="text_trim">
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">abc</field>
    </shadow>
  </value>
</block>

# text_print
<block type="text_print">
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">abc</field>
    </shadow>
  </value>
</block>

# text_prompt_ext
<block type="text_prompt_ext">
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">abc</field>
    </shadow>
  </value>
</block>

# text_to_str
<block type="text_to_str">  
  <field name="VAR">to str</field>
</block>

# %{LISTS}
<category name="%{LISTS}" colour="%{LISTS_HUE}">

# lists_create_with
<block type="lists_create_with">
  <mutation items="0"></mutation>
</block>

# lists_create_with
<block type="lists_create_with"></block>

# lists_repeat
<block type="lists_repeat">
  <value name="NUM">
    <shadow type="math_number">
      <field name="NUM">5</field>
    </shadow>
  </value>
</block>

# lists_length
<block type="lists_length"></block>

# lists_isEmpty
<block type="lists_isEmpty"></block>

# lists_indexOf
<block type="lists_indexOf">
  <value name="VALUE">
    <block type="variables_get">
      <field name="VAR">{listVariable}</field>
    </block>
  </value>
</block>

# lists_getIndex
<block type="lists_getIndex">
  <value name="VALUE">
    <block type="variables_get">
      <field name="VAR">{listVariable}</field>
    </block>
  </value>
</block>

# lists_setIndex
<block type="lists_setIndex">
  <value name="LIST">
    <block type="variables_get">
      <field name="VAR">{listVariable}</field>
    </block>
  </value>
</block>

# lists_getSublist
<block type="lists_getSublist">
  <value name="LIST">
    <block type="variables_get">
      <field name="VAR">{listVariable}</field>
    </block>
  </value>
</block>

# lists_split
<block type="lists_split">
  <value name="DELIM">
    <shadow type="text">
      <field name="TEXT">,</field>
    </shadow>
  </value>
</block>

# lists_sort
<block type="lists_sort"></block>

# %{VARIABLES}
<category name="%{VARIABLES}" colour="%{VARIABLES_HUE}" custom="VARIABLE">

# %{FUNCTIONS}
<category name="%{FUNCTIONS}" colour="%{PROCEDURES_HUE}" custom="PROCEDURE">

# Oximeter
<category name="Oximeter">
<label text="MAX30100 pulse oximeter sensor"></label>
<label text="Library: https://github.com/"></label>
<button text="Install MAX30100 library" callbackKey="installPyLib"></button>

# max30100_init
<block type="max30100_init"></block>

# max30100_read
<block type="max30100_read"></block>

# max30100_red
<block type="max30100_red"></block>

# max30100_ir
<block type="max30100_ir"></block>

# -
