#Library: https://github.com/nihalpasham/micropython_sensorfusion
#More info: https://medium.com/@nihal.pasham/micropython-just-works-4e8979e7d7a6

import machine, ubinascii, time, math
from machine import Pin, I2C
from time import sleep

#from kalman import KalmanAngle
#Rafael, copied from kalman.py to have all IMU code in only one file
class KalmanAngle:

    def __init__(self):

        self.QAngle = 0.001                     # Q (ANGLE) unknown uncertainty from the environment
        self.QBias = 0.003                      # Q (BIAS) unknown uncertainty from the environment. Here - covariance is degree of correlation between variances of the angle and its error/bias.     
        self.RMeasure = 0.1                     
        self.angle = 0.0
        self.bias = 0.0
        self.rate = 0.0
        self.P=[[0.0,0.0],[0.0,0.0]]

    def getAngle(self,newAngle, newRate,dt):

        #step 1: Predict new state (for our case - state is angle) from old state + known external influence

        self.rate = newRate - self.bias    #new_rate is the latest Gyro measurement
        self.angle += dt * self.rate

        #Step 2: Predict new uncertainty (or covariance) from old uncertainity and unknown uncertainty from the environment. 

        self.P[0][0] += dt * (dt*self.P[1][1] -self.P[0][1] - self.P[1][0] + self.QAngle)
        self.P[0][1] -= dt * self.P[1][1]
        self.P[1][0] -= dt * self.P[1][1]
        self.P[1][1] += self.QBias * dt

        #Step 3: Innovation i.e. predict th next measurement

        y = newAngle - self.angle

        #Step 4: Innovation covariance i.e. error in prediction 

        s = self.P[0][0] + self.RMeasure

        #Step 5:  Calculate Kalman Gain

        K=[0.0,0.0]
        K[0] = self.P[0][0]/s
        K[1] = self.P[1][0]/s

        #Step 6: Update the Angle

        self.angle += K[0] * y
        self.bias  += K[1] * y

        #Step 7: Calculate estimation error covariance - Update the error covariance

        P00Temp = self.P[0][0]
        P01Temp = self.P[0][1]

        self.P[0][0] -= K[0] * P00Temp
        self.P[0][1] -= K[0] * P01Temp
        self.P[1][0] -= K[1] * P00Temp
        self.P[1][1] -= K[1] * P01Temp

        return self.angle


    def setAngle(self,angle):
        self.angle = angle

    def setQAngle(self,QAngle):
        self.QAngle = QAngle

    def setQBias(self,QBias):
        self.QBias = QBias

    def setRMeasure(self,RMeasure):
        self.RMeasure = RMeasure

    def getRate():
        return self.rate

    def getQAngle():
        return self.QAngle

    def getQBias():
        return self.QBias

    def  getRMeasure():   
        return self.RMeasure


# Default I2C address for the MPU6050
# Instantiate a kalman filter object

mpu6050_addr = 0x68
kalmanX = KalmanAngle()
kalmanY = KalmanAngle()

# Required MPU6050 registers and their addresses

PWR_MGMT_1   = 0x6B
SMPLRT_DIV   = 0x19
CONFIG       = 0x1A
GYRO_CONFIG  = 0x1B
INT_ENABLE   = 0x38
ACCEL_XOUT_H = 0x3B
ACCEL_YOUT_H = 0x3D
ACCEL_ZOUT_H = 0x3F
GYRO_XOUT_H  = 0x43
GYRO_YOUT_H  = 0x45
GYRO_ZOUT_H  = 0x47
TEMP_OUT_H   = 0X41

# Globals
last_read_time = 0.0   

# These are the filtered angles
last_x_angle = 0.0          
last_y_angle = 0.0
last_z_angle = 0.0  

# Calibrated measurements to offset some bias or error in the readings.
calib_x_accel = 0.0 
calib_y_accel = 0.0 
calib_z_accel = 0.0 
calib_x_gyro  = 0.0 
calib_y_gyro  = 0.0 
calib_z_gyro  = 0.0 

#instantiate the i2c interface on esp32 (pins 21,22 for wroom32 variants) 
i2c = I2C(scl=machine.Pin(5), sda=machine.Pin(4), freq=400000)
      
def init_MPU():
    #write to sample rate register 
    i2c.writeto_mem(mpu6050_addr, SMPLRT_DIV, b'\x07')
    #Write to power management register to wake up mpu6050
    i2c.writeto_mem(mpu6050_addr, PWR_MGMT_1, b'\x00')
    #Write to Configuration register 
    i2c.writeto_mem(mpu6050_addr, CONFIG, b'\x00')
    #Write to Gyro configuration register to self test gyro 
    i2c.writeto_mem(mpu6050_addr, GYRO_CONFIG, b'\x18')
    #Set interrupt enable register to 0 .. disable interrupts
    i2c.writeto_mem(mpu6050_addr, INT_ENABLE, b'\x00')

def read_raw_data(addr):
    #Accelero and Gyro value are 16-bit
    high = i2c.readfrom_mem(mpu6050_addr, addr, 1)
    #print(ubinascii.hexlify(high))
    low  = i2c.readfrom_mem(mpu6050_addr, addr+1, 1)
    #print(ubinascii.hexlify(low))
    
    #concatenate higher and lower values
    val = high[0] << 8 | low[0]
        
    #we're expecting a 16 bit signed int (between -32768 to 32768). This step ensures 16 bit unsigned int raw readings are resolved. 
    if(val > 32768):
        val = val - 65536
    return val

def read_mpu6050v(p):
                
	t_now = time.ticks_ms()
	dt = (t_now - get_last_time())/1000.0

	acc_x, acc_y, acc_z, gyro_x, gyro_y, gyro_z = read_values_helper()

	#Full scale range +/- 250 degree/C as per sensitivity scale factor. The is linear acceleration in each of the 3 directions ins g's
	Ax = acc_x/16384.0
	Ay = acc_y/16384.0
	Az = acc_z/16384.0
            
    # This is angular velocity in each of the 3 directions 
	Gx = (gyro_x - calib_x_gyro)/131.0
	Gy = (gyro_y - calib_y_gyro)/131.0
	Gz = (gyro_z - calib_z_gyro)/131.0

	#tp = temp/ 340 + 36.53

	acc_angles = acc_angle(Ax, Ay, Az) # Calculate angle of inclination or tilt for the x and y axes with acquired acceleration vectors
	gyr_angles = gyr_angle(Gx, Gy, Gz, dt) # Calculate angle of inclination or tilt for x,y and z axes with angular rates and dt 
	(c_angle_x, c_angle_y) = c_filtered_angle(acc_angles[0], acc_angles[1], gyr_angles[0], gyr_angles[1]) # filtered tilt angle i.e. what we're after
	(k_angle_x, k_angle_y) = k_filtered_angle(acc_angles[0], acc_angles[1], Gx, Gy, dt)

	set_last_read_angles(t_now, c_angle_x, c_angle_y)
	#print ("Gx=%.6f" %Gx, u'\u00b0'+ "/s", "\tGy=%.6f" %Gy, u'\u00b0'+ "/s", "\tGz=%.6f" %Gz, u'\u00b0'+ "/s", "\tAx=%.6f g" %Ax, "\tAy=%.6f g" %Ay, "\tAz=%.6f g" %Az, "\ttemp=%.6f" %tp, u'\u00b0'+ "C") 	
    
	#print("%.8f," %c_angle_x, "%.8f," %c_angle_y, "%.8f," %k_angle_x,"%.8f" %k_angle_y)

    #TODO - return filtered value or non filtered, according with parameter
	if p == 1:
		return Ax
	elif p == 2:
		return Ay
	elif p == 3:
		return Az
	elif p == 4:
		return Gx
	elif p == 5:
		return Gy
	elif p == 6:
		return Gz
	else:
		print("incorrect param")


def read_mpu6050():
    
    init_MPU()
    calibrate_sensors()
    try:
        while True:
            
            t_now = time.ticks_ms()
            dt = (t_now - get_last_time())/1000.0

            acc_x, acc_y, acc_z, gyro_x, gyro_y, gyro_z = read_values_helper()

            #Full scale range +/- 250 degree/C as per sensitivity scale factor. The is linear acceleration in each of the 3 directions ins g's
            Ax = acc_x/16384.0
            Ay = acc_y/16384.0
            Az = acc_z/16384.0
            
            # This is angular velocity in each of the 3 directions 
            Gx = (gyro_x - calib_x_gyro)/131.0
            Gy = (gyro_y - calib_y_gyro)/131.0
            Gz = (gyro_z - calib_z_gyro)/131.0

            #tp = temp/ 340 + 36.53

            acc_angles = acc_angle(Ax, Ay, Az) # Calculate angle of inclination or tilt for the x and y axes with acquired acceleration vectors
            gyr_angles = gyr_angle(Gx, Gy, Gz, dt) # Calculate angle of inclination or tilt for x,y and z axes with angular rates and dt 
            (c_angle_x, c_angle_y) = c_filtered_angle(acc_angles[0], acc_angles[1], gyr_angles[0], gyr_angles[1]) # filtered tilt angle i.e. what we're after
            (k_angle_x, k_angle_y) = k_filtered_angle(acc_angles[0], acc_angles[1], Gx, Gy, dt)

            set_last_read_angles(t_now, c_angle_x, c_angle_y)
            #print ("Gx=%.6f" %Gx, u'\u00b0'+ "/s", "\tGy=%.6f" %Gy, u'\u00b0'+ "/s", "\tGz=%.6f" %Gz, u'\u00b0'+ "/s", "\tAx=%.6f g" %Ax, "\tAy=%.6f g" %Ay, "\tAz=%.6f g" %Az, "\ttemp=%.6f" %tp, u'\u00b0'+ "C") 	
    
            print("%.8f," %c_angle_x, "%.8f," %c_angle_y, "%.8f," %k_angle_x,"%.8f" %k_angle_y)

            time.sleep_ms(4)

    except KeyboardInterrupt:
        pass

def calibrate_sensors():
    x_accel = 0
    y_accel = 0
    z_accel = 0
    x_gyro  = 0
    y_gyro  = 0
    z_gyro  = 0
    
    #print("Starting Calibration")

    #Discard the first set of values read from the IMU
    read_values_helper()

    # Read and average the raw values from the IMU
    for int in range(10): 
        values = read_values_helper()
        x_accel += values[0]
        y_accel += values[1]
        z_accel += values[2]
        x_gyro  += values[3]
        y_gyro  += values[4]
        z_gyro  += values[5]
        time.sleep_ms(100)
    
    x_accel /= 10
    y_accel /= 10
    z_accel /= 10
    x_gyro  /= 10
    y_gyro  /= 10
    z_gyro  /= 10

    # Store the raw calibration values globally
    calib_x_accel = x_accel
    calib_y_accel = y_accel
    calib_z_accel = z_accel
    calib_x_gyro  = x_gyro
    calib_y_gyro  = y_gyro
    calib_z_gyro  = z_gyro

    #print("Finishing Calibration")

def set_last_read_angles(time, x, y):
    global last_read_time, last_x_angle, last_y_angle
    last_read_time = time
    last_x_angle = x 
    last_y_angle = y
    #last_z_angle = z

# accelerometer data can't be used to calculate 'yaw' angles or rotation around z axis.
def acc_angle(Ax, Ay, Az):
    radToDeg = 180/3.14159
    ax_angle = math.atan(Ay/math.sqrt(math.pow(Ax,2) + math.pow(Az, 2)))*radToDeg
    ay_angle = math.atan((-1*Ax)/math.sqrt(math.pow(Ay,2) + math.pow(Az, 2)))*radToDeg
    return (ax_angle, ay_angle)

def gyr_angle(Gx, Gy, Gz, dt):
    gx_angle = Gx*dt + get_last_x_angle()
    gy_angle = Gy*dt + get_last_y_angle()
    gz_angle = Gz*dt + get_last_z_angle()
    return (gx_angle, gy_angle, gz_angle)

  # A complementary filter to determine the change in angle by combining accelerometer and gyro values. Alpha depends on the sampling rate...
def c_filtered_angle(ax_angle, ay_angle, gx_angle, gy_angle):
    alpha = 0.90
    c_angle_x = alpha*gx_angle + (1.0 - alpha)*ax_angle
    c_angle_y = alpha*gy_angle + (1.0 - alpha)*ay_angle
    return (c_angle_x, c_angle_y)

 # Kalman filter to determine the change in angle by combining accelerometer and gyro values. 
def k_filtered_angle(ax_angle, ay_angle, Gx, Gy, dt):
    k_angle_x = kalmanX.getAngle(ax_angle, Gx, dt)
    k_angle_y = kalmanY.getAngle(ay_angle, Gy, dt)
    return (k_angle_x, k_angle_y)

def read_values_helper():

    #Read Accelerometer raw value
    acc_x = read_raw_data(ACCEL_XOUT_H)
    acc_y = read_raw_data(ACCEL_YOUT_H)
    acc_z = read_raw_data(ACCEL_ZOUT_H)
    
    #Read Gyroscope raw value
    gyro_x = read_raw_data(GYRO_XOUT_H)
    gyro_y = read_raw_data(GYRO_YOUT_H)
    gyro_z = read_raw_data(GYRO_ZOUT_H)

    #Read Temp raw value
    temp = read_raw_data(TEMP_OUT_H)

    return (acc_x, acc_y, acc_z, gyro_x, gyro_y, gyro_z)

def get_last_time(): 
    return last_read_time
def get_last_x_angle():
    return last_x_angle
def get_last_y_angle():
    return last_y_angle
def get_last_z_angle():
    return last_z_angle

