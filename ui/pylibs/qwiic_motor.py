'''
Auther: Alex Chu
Website: www.smart-prototyping.com
Email: shop@smart-prototyping.com
product link: https://www.smart-prototyping.com/Zio-4-DC-Motor-Controller.html
PCA9685PW datasheet: https://www.smart-prototyping.com/image/data/NOA-RnD/101897%204%20DC%20Motor%20Driver/PCA9685PW_datasheet.pdf
TB6612FNG datasheet: https://www.smart-prototyping.com/image/data/NOA-RnD/101897%204%20DC%20Motor%20Driver/TB6612FNG_datasheet.pdf
reference: https://github.com/adafruit/Adafruit-PWM-Servo-Driver-Library
library link: https://github.com/ZIOCC/Qwiic_4-Ch_DC_Motor_Controller/tree/master/micropython
'''

import time
import ustruct

PCA9685_MODE1 = 0x00      # < Mode Register 1
PCA9685_LED0_ON_L = 0x06  # < LED0 on tick, low byte
MODE1_SLEEP = 0x10   # < Low power mode. Oscillator off
MODE1_RESTART = 0x80 # < Restart enabled

class DCMOTOR:

    def __init__(self,i2c,addr,freq=1000):
        self.i2c = i2c
        self.addr = addr
        self.buf1 = bytearray(1)
        # A101: 0,
        # B101: 1,
        # A201: 2,
        # B201: 3
        self.dc_motor = ((0,1,2),(6,4,5),(7,8,9),(13,11,12))
        self.reset()
        self.sef_freq(freq)

    def reset(self):
        self.i2c.writeto_mem(self.addr,PCA9685_MODE1,bytearray([MODE1_RESTART]))
        time.sleep_us(10)

    def sleep(self):
        awake = self.read8(PCA9685_MODE1)
        sleep = awake | MODE1_SLEEP
        self.sendCommend8(PCA9685_MODE1,sleep)
        time.sleep_us(10)

    def sef_freq(self, freq=None):
        if freq is None:
            return int(25000000.0 / 4096.0 / (self._read(0xfe) - 0.5))
        prescale = int(25000000.0 / 4096.0 / freq + 0.5)
        old_mode = self.read8(0x00) # Mode 1
        self.sendCommend8(0x00, (old_mode & 0x7F) | 0x10) # Mode 1, sleep
        self.sendCommend8(0xfe, prescale) # Prescale
        self.sendCommend8(0x00, old_mode) # Mode 1
        time.sleep_us(5)
        self.sendCommend8(0x00, old_mode | 0xa1) # Mode 1, autoincrement on

    def set_pwm(self,num,on,off):
        buf = bytearray(4)
        reg = PCA9685_LED0_ON_L + 4 * num
        buf[0] = ustruct.pack('<H', on)[0]
        buf[1] = ustruct.pack('<H', on)[1]
        buf[2] = ustruct.pack('<H', off)[0]
        buf[3] = ustruct.pack('<H', off)[1]
        print(buf)
        self.i2c.writeto_mem(self.addr,reg,buf)

    def set_pin(self,num,val,invert=False):
        val = min(val, 4095)
        if invert:
            if val == 0:
                self.set_pwm(num, 4096, 0)
            elif val == 4095:
                self.set_pwm(num, 0, 4096)
            else:
                self.set_pwm(num,0,4095-val)
        else:
            if val == 4095:
                self.set_pwm(num,4096,0)
            elif val == 0:
                self.set_pwm(num,0,4096)
            else:
                self.set_pwm(num,0,val)

    def set_output_mode(self,totempole):
        pass

    def go_ahead(self,n):
        pinlist = self.dc_motor[n]
        if n in range(0,2):
            self.set_pin(3,0,1)
        elif n in range(2,4):
            self.set_pin(10,0,1)
        else:
            return False
        self.set_pin(pinlist[1],0,1)
        self.set_pin(pinlist[2], 4095, 1)

    def go_back(self,n):
        pinlist = self.dc_motor[n]
        if n in range(0,2):
            self.set_pin(3,0,1)
        elif n in range(2,4):
            self.set_pin(10,0,1)
        else:
            return False
        self.set_pin(pinlist[2],0,1)
        self.set_pin(pinlist[1], 4095, 1)

    def stop(self,n):
        if n in range(0,2):
            self.set_pin(3,0,0)
        elif n in range(2,4):
            self.set_pin(10,0,0)
        else:
            return False

    # speed: from 0 to 100
    def speed(self,n,speed):
        pulselen = int(speed / 100 * 4095)
        pinlist = self.dc_motor[n]
        self.set_pwm(pinlist[0], 0, pulselen)
        time.sleep_us(100)

    def read8(self,reg):
        return self.i2c.readfrom_mem(self.addr,reg,1)[0]

    def sendCommend8(self,reg,cmd=0):
        self.buf1[0] = cmd
        self.i2c.writeto_mem(self.addr, reg, self.buf1)
