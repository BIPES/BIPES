var servoBlob = new Blob([
"# servo.py\n" + 
"# Kevin McAleer\n" + 
"# March 2021\n" + 
"\n" + 
"from pca9685 import PCA9685\n" + 
"import math\n" + 
"\n" + 
"\n" + 
"class Servos:\n" + 
"    def __init__(self, i2c, address=0x40, freq=50, min_us=600, max_us=2400,\n" + 
"                 degrees=180):\n" + 
"        self.period = 1000000 / freq\n" + 
"        self.min_duty = self._us2duty(min_us)\n" + 
"        self.max_duty = self._us2duty(max_us)\n" + 
"        self.degrees = degrees\n" + 
"        self.freq = freq\n" + 
"        self.pca9685 = PCA9685(i2c, address)\n" + 
"        self.pca9685.freq(freq)\n" + 
"\n" + 
"    def _us2duty(self, value):\n" + 
"        return int(4095 * value / self.period)\n" + 
"\n" + 
"    def position(self, index, degrees=None, radians=None, us=None, duty=None):\n" + 
"        span = self.max_duty - self.min_duty\n" + 
"        if degrees is not None:\n" + 
"            duty = self.min_duty + span * degrees / self.degrees\n" + 
"        elif radians is not None:\n" + 
"            duty = self.min_duty + span * radians / math.radians(self.degrees)\n" + 
"        elif us is not None:\n" + 
"            duty = self._us2duty(us)\n" + 
"        elif duty is not None:\n" + 
"            pass\n" + 
"        else:\n" + 
"            return self.pca9685.duty(index)\n" + 
"        duty = min(self.max_duty, max(self.min_duty, int(duty)))\n" + 
"        self.pca9685.duty(index, duty)\n" + 
"\n" + 
"    def release(self, index):\n" + 
"        self.pca9685.duty(index, 0)\n"
], {type: 'text'});