var hcsr04Blob = new Blob([
"from machine import Pin, time_pulse_us\n" +
"from utime import sleep_us\n" +
"\n" +
"__version__ = '0.2.1'\n" +
"__author__ = 'Roberto Sánchez'\n" +
"__license__ = 'Apache License 2.0. https://www.apache.org/licenses/LICENSE-2.0'\n" +
"\n" +
"# Driver to use the untrasonic sensor HC-SR04.\n" +
"# The sensor range is between 2cm and 4m.\n" +
"\n" +
"# The timeouts received listening to echo pin are converted to OSError('Out of range')\n" +
"\n" +
"class HCSR04:\n" +
"    # echo_timeout_us is based in chip range limit (400cm)\n" +
"    # trigger_pin: Output pin to send pulses\n" +
"    # echo_pin: Readonly pin to measure the distance. The pin should be protected with 1k resistor\n" +
"    # echo_timeout_us: Timeout in microseconds to listen to echo pin. \n" +
"    # By default is based in sensor limit range (4m)\n" +
"\n" +
"    def __init__(self, trigger_pin, echo_pin, echo_timeout_us=500*2*30):\n" +
"        self.echo_timeout_us = echo_timeout_us\n" +
"        # Init trigger pin (out)\n" +
"        self.trigger = Pin(trigger_pin, mode=Pin.OUT, pull=None)\n" +
"        self.trigger.value(0)\n" +
"\n" +
"        # Init echo pin (in)\n" +
"        self.echo = Pin(echo_pin, mode=Pin.IN, pull=None)\n" +
"\n" +
"    # Send the pulse to trigger and listen on echo pin.\n" +
"    # We use the method `machine.time_pulse_us()` to get the microseconds until the echo is received.\n" +
"    def _send_pulse_and_wait(self):\n" +
"        self.trigger.value(0) # Stabilize the sensor\n" +
"        sleep_us(5)\n" +
"        self.trigger.value(1)\n" +
"        # Send a 10us pulse.\n" +
"        sleep_us(10)\n" +
"        self.trigger.value(0)\n" +
"        try:\n" +
"            pulse_time = time_pulse_us(self.echo, 1, self.echo_timeout_us)\n" +
"            # time_pulse_us returns -2 if there was timeout waiting for condition; and -1 if there was timeout during the main measurement. It DOES NOT raise an exception\n" +
"            # ...as of MicroPython 1.17: http://docs.micropython.org/en/v1.17/library/machine.html#machine.time_pulse_us\n" +
"            if pulse_time < 0:\n" +
"                MAX_RANGE_IN_CM = const(500) # it's really ~400 but I've read people say they see it working up to ~460\n" +
"                pulse_time = int(MAX_RANGE_IN_CM * 29.1) # 1cm each 29.1us\n" +
"            return pulse_time\n" +
"        except OSError as ex:\n" +
"            if ex.args[0] == 110: # 110 = ETIMEDOUT\n" +
"                raise OSError('Out of range')\n" +
"            raise ex\n" +
"\n" +
"    # Get the distance in milimeters without floating point operations.\n" +
"    def distance_mm(self):\n" +
"        pulse_time = self._send_pulse_and_wait()\n" +
"\n" +
"        # To calculate the distance we get the pulse_time and divide it by 2 \n" +
"        # (the pulse walk the distance twice) and by 29.1 becasue\n" +
"        # the sound speed on air (343.2 m/s), that It's equivalent to\n" +
"        # 0.34320 mm/us that is 1mm each 2.91us\n" +
"        # pulse_time // 2 // 2.91 -> pulse_time // 5.82 -> pulse_time * 100 // 582 \n" +
"        mm = pulse_time * 100 // 582\n" +
"        return mm\n" +
"\n" +
"    # Get the distance in centimeters with floating point operations.\n" +
"    # It returns a float\n" +
"    def distance_cm(self):\n" +
"        pulse_time = self._send_pulse_and_wait()\n" +
"\n" +
"        # To calculate the distance we get the pulse_time and divide it by 2 \n" +
"        # (the pulse walk the distance twice) and by 29.1 becasue\n" +
"        # the sound speed on air (343.2 m/s), that It's equivalent to\n" +
"        # 0.034320 cm/us that is 1cm each 29.1us\n" +
"        cms = (pulse_time / 2) / 29.1\n" +
"        return cms\n"
], {type: 'text'});