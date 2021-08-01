from machine import Pin, PWM
import time
import songs

# define frequency for each tone
B1  = 31
C2  = 33
CS2 = 35
D2  = 37
DS2 = 39
E2  = 41
F2  = 44
FS2 = 46
G2  = 49
GS2 = 52
A2  = 55
AS2 = 58
B2  = 62
C3  = 65
CS3 = 69
D3  = 73
DS3 = 78
E3  = 82
F3  = 87
FS3 = 93
G3  = 98
GS3 = 104
A3  = 110
AS3 = 117
B3  = 123
C4  = 131
CS4 = 139
D4  = 147
DS4 = 156
E4  = 165
F4  = 175
FS4 = 185
G4  = 196
GS4 = 208
A4  = 220
AS4 = 233
B4  = 247
C5  = 262
CS5 = 277
D5  = 294
DS5 = 311
E5  = 330
F5  = 349
FS5 = 370
G5  = 392
GS5 = 415
A5  = 440
AS5 = 466
B5  = 494
C6  = 523
CS6 = 554
D6  = 587
DS6 = 622
E6  = 659
F6  = 698
FS6 = 740
G6  = 784
GS6 = 831
A6  = 880
AS6 = 932
B6  = 988
C7  = 1047
CS7 = 1109
D7  = 1175
DS7 = 1245
E7  = 1319
F7  = 1397
FS7 = 1480
G7  = 1568
GS7 = 1661
A7  = 1760
AS7 = 1865
B7  = 1976
C8  = 2093
CS8 = 2217
D8  = 2349
DS8 = 2489
E8  = 2637
F8  = 2794
FS8 = 2960
G8  = 3136
GS8 = 3322
A8  = 3520
AS8 = 3729
B8  = 3951
C9  = 4186
CS9 = 4435
D9  = 4699
DS9 = 4978
P = 0

# Super Mario - Main Theme:d=4,o=5,b=125:a,8f.,16c,16d,16f,16p,f,16d,16c,16p,16f,16p,16f,16p,8c6,8a.,g,16c,a,8f.,16c,16d,16f,16p,f,16d,16c,16p,16f,16p,16a#,16a,16g,2f,16p,8a.,8f.,8c,8a.,f,16g#,16f,16c,16p,8g#.,2g,8a.,8f.,8c,8a.,f,16g#,16f,8c,2c6

def RTTTL(text):
    try:
        title, defaults, song = text.split(':')
        d, o, b = defaults.split(',')
        d = int(d.split('=')[1])
        o = int(o.split('=')[1])
        b = int(b.split('=')[1])
        whole = (60000/b)*4
        noteList = song.split(',')
    except:
        return 'Please enter a valid RTTTL string.'
    notes = 'abcdefgp'
    outList = []
    for note in noteList:
        index = 0
        for i in note:
            if i in notes:
                index = note.find(i)
                break
        length = note[0:index]
        value = note[index:].replace('#','s').replace('.','')
        if not any(char.isdigit() for char in value):
            value += str(o)
        if 'p' in value:
            value = 'p'
        if length == '':
            length = d
        else:
            length = int(length)
        length = whole/length
        if '.' in note:
            length += length/2
        outList.append((eval(value.upper()), length))
    return outList

def play(pin, tune):
    tune = RTTTL(tune)
    if type(tune) is not list:
        return tune
    for freqc, msec in tune:
        msec = msec * 0.001
        if freqc > 0:
            pwm0 = PWM(pin, freq=freqc, duty=512)
        time.sleep(msec*0.9)
        if freqc > 0:
            pwm0.deinit()
        time.sleep(msec*0.1)
