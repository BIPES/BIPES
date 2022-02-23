${LOGIC}
controls_if
logic_compare
logic_operation
logic_negate
logic_boolean
logic_null
logic_ternary
end_category

%{LOOPS}
controls_repeat_ext
controls_whileUntil
controls_for
controls_forEach
controls_flow_statements
end_category

%{MATH}
math_number
math_arithmetic
math_single
math_trig
math_constant
math_number_property
math_round
math_on_list
math_modulo
math_constrain
math_random_int
math_random_float
var_to_int
end_category

${TEXT}
text
text_join
text_append
text_length
text_isEmpty
text_indexOf
text_charAt
text_getSubstring
text_changeCase
text_trim
text_print
text_prompt_ext
text_to_str
end_category

%{LISTS}
lists_create_with
lists_create_with
lists_repeat
lists_length
lists_isEmpty
lists_indexOf
lists_getIndex
lists_setIndex
lists_getSublist
lists_split
lists_sort
end_category

sep
%{VARIABLES}
end_category

%{FUNCTIONS}
end_category
sep

BIPES
project_metadata
localstorage_store
end_category

%{TIMING}
label_%{TIMING}
delay
utime.vars
utime.ticks_add
utime.ticks_diff
esp32_set_rtc
esp32_get_rtc
timer
utime.deadline
stop_timer
deep_sleep8266 
end_category

%{MACHINE}
inout_pins_label
pinout
gpio_set
gpio_get
adc_esp32
pwm
pwm.freq
pwm.duty
pwm.init
pwm.deinit
gpio_interrupt
end_category
end_category


