var rtttlBlob = new Blob([
"from machine import Pin, PWM\n" +
"import time\n" +
"import songs\n" +
"\n" +
"# define frequency for each tone\n" +
"B1  = 31\n" +
"C2  = 33\n" +
"CS2 = 35\n" +
"D2  = 37\n" +
"DS2 = 39\n" +
"E2  = 41\n" +
"F2  = 44\n" +
"FS2 = 46\n" +
"G2  = 49\n" +
"GS2 = 52\n" +
"A2  = 55\n" +
"AS2 = 58\n" +
"B2  = 62\n" +
"C3  = 65\n" +
"CS3 = 69\n" +
"D3  = 73\n" +
"DS3 = 78\n" +
"E3  = 82\n" +
"F3  = 87\n" +
"FS3 = 93\n" +
"G3  = 98\n" +
"GS3 = 104\n" +
"A3  = 110\n" +
"AS3 = 117\n" +
"B3  = 123\n" +
"C4  = 131\n" +
"CS4 = 139\n" +
"D4  = 147\n" +
"DS4 = 156\n" +
"E4  = 165\n" +
"F4  = 175\n" +
"FS4 = 185\n" +
"G4  = 196\n" +
"GS4 = 208\n" +
"A4  = 220\n" +
"AS4 = 233\n" +
"B4  = 247\n" +
"C5  = 262\n" +
"CS5 = 277\n" +
"D5  = 294\n" +
"DS5 = 311\n" +
"E5  = 330\n" +
"F5  = 349\n" +
"FS5 = 370\n" +
"G5  = 392\n" +
"GS5 = 415\n" +
"A5  = 440\n" +
"AS5 = 466\n" +
"B5  = 494\n" +
"C6  = 523\n" +
"CS6 = 554\n" +
"D6  = 587\n" +
"DS6 = 622\n" +
"E6  = 659\n" +
"F6  = 698\n" +
"FS6 = 740\n" +
"G6  = 784\n" +
"GS6 = 831\n" +
"A6  = 880\n" +
"AS6 = 932\n" +
"B6  = 988\n" +
"C7  = 1047\n" +
"CS7 = 1109\n" +
"D7  = 1175\n" +
"DS7 = 1245\n" +
"E7  = 1319\n" +
"F7  = 1397\n" +
"FS7 = 1480\n" +
"G7  = 1568\n" +
"GS7 = 1661\n" +
"A7  = 1760\n" +
"AS7 = 1865\n" +
"B7  = 1976\n" +
"C8  = 2093\n" +
"CS8 = 2217\n" +
"D8  = 2349\n" +
"DS8 = 2489\n" +
"E8  = 2637\n" +
"F8  = 2794\n" +
"FS8 = 2960\n" +
"G8  = 3136\n" +
"GS8 = 3322\n" +
"A8  = 3520\n" +
"AS8 = 3729\n" +
"B8  = 3951\n" +
"C9  = 4186\n" +
"CS9 = 4435\n" +
"D9  = 4699\n" +
"DS9 = 4978\n" +
"P = 0\n" +
"\n" +
"# Super Mario - Main Theme:d=4,o=5,b=125:a,8f.,16c,16d,16f,16p,f,16d,16c,16p,16f,16p,16f,16p,8c6,8a.,g,16c,a,8f.,16c,16d,16f,16p,f,16d,16c,16p,16f,16p,16a#,16a,16g,2f,16p,8a.,8f.,8c,8a.,f,16g#,16f,16c,16p,8g#.,2g,8a.,8f.,8c,8a.,f,16g#,16f,8c,2c6\n" +
"\n" +
"def RTTTL(text):\n" +
"    try:\n" +
"        title, defaults, song = text.split(':')\n" +
"        d, o, b = defaults.split(',')\n" +
"        d = int(d.split('=')[1])\n" +
"        o = int(o.split('=')[1])\n" +
"        b = int(b.split('=')[1])\n" +
"        whole = (60000/b)*4\n" +
"        noteList = song.split(',')\n" +
"    except:\n" +
"        return 'Please enter a valid RTTTL string.'\n" +
"    notes = 'abcdefgp'\n" +
"    outList = []\n" +
"    for note in noteList:\n" +
"        index = 0\n" +
"        for i in note:\n" +
"            if i in notes:\n" +
"                index = note.find(i)\n" +
"                break\n" +
"        length = note[0:index]\n" +
"        value = note[index:].replace('#','s').replace('.','')\n" +
"        if not any(char.isdigit() for char in value):\n" +
"            value += str(o)\n" +
"        if 'p' in value:\n" +
"            value = 'p'\n" +
"        if length == '':\n" +
"            length = d\n" +
"        else:\n" +
"            length = int(length)\n" +
"        length = whole/length\n" +
"        if '.' in note:\n" +
"            length += length/2\n" +
"        outList.append((eval(value.upper()), length))\n" +
"    return outList\n" +
"\n" +
"def play(pinOut, tune):\n" +
"    tune = RTTTL(tune)\n" +
"    if type(tune) is not list:\n" +
"        return tune\n" +
"    for freqc, msec in tune:\n" +
"        msec = msec * 0.001\n" +
"        if freqc > 0:\n" +
"            pwm0 = PWM(pinOut)\n" +
"            pwm0.freq(freqc)\n" +
"            pwm0.duty_u16(512)\n" +
"        time.sleep(msec*0.9)\n" +
"        if freqc > 0:\n" +
"            pwm0.deinit()\n" +
"        time.sleep(msec*0.1)\n"
], {type: 'text'});