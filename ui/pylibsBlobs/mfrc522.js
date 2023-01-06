var mfrc522Blob = new Blob([
"from machine import Pin, SPI\n" + 
"from os import uname\n" + 
"\n" + 
"\n" + 
"class MFRC522:\n" + 
"\n" + 
"    DEBUG = False\n" + 
"    OK = 0\n" + 
"    NOTAGERR = 1\n" + 
"    ERR = 2\n" + 
"\n" + 
"    REQIDL = 0x26\n" + 
"    REQALL = 0x52\n" + 
"    AUTHENT1A = 0x60\n" + 
"    AUTHENT1B = 0x61\n" + 
"  \n" + 
"    PICC_ANTICOLL1 = 0x93\n" + 
"    PICC_ANTICOLL2 = 0x95\n" + 
"    PICC_ANTICOLL3 = 0x97\n" + 
"  \n" + 
"\n" + 
"    def __init__(self, sck, mosi, miso, rst, cs,baudrate=1000000,spi_id=0):\n" + 
"\n" + 
"        self.sck = Pin(sck, Pin.OUT)\n" + 
"        self.mosi = Pin(mosi, Pin.OUT)\n" + 
"        self.miso = Pin(miso)\n" + 
"        self.rst = Pin(rst, Pin.OUT)\n" + 
"        self.cs = Pin(cs, Pin.OUT)\n" + 
"\n" + 
"        self.rst.value(0)\n" + 
"        self.cs.value(1)\n" + 
"        \n" + 
"        board = uname()[0]\n" + 
"\n" + 
"        if board == 'WiPy' or board == 'LoPy' or board == 'FiPy':\n" + 
"            self.spi = SPI(0)\n" + 
"            self.spi.init(SPI.MASTER, baudrate=1000000, pins=(self.sck, self.mosi, self.miso))\n" + 
"        elif (board == 'esp8266') or (board == 'esp32'):\n" + 
"            self.spi = SPI(baudrate=100000, polarity=0, phase=0, sck=self.sck, mosi=self.mosi, miso=self.miso)\n" + 
"            self.spi.init()\n" + 
"        elif board == 'rp2':\n" + 
"            self.spi = SPI(spi_id,baudrate=baudrate,sck=self.sck, mosi= self.mosi, miso= self.miso)\n" + 
"        else:\n" + 
"            raise RuntimeError('Unsupported platform')\n" + 
"\n" + 
"        self.rst.value(1)\n" + 
"        self.init()\n" + 
"\n" + 
"    def _wreg(self, reg, val):\n" + 
"\n" + 
"        self.cs.value(0)\n" + 
"        self.spi.write(b'%c' % int(0xff & ((reg << 1) & 0x7e)))\n" + 
"        self.spi.write(b'%c' % int(0xff & val))\n" + 
"        self.cs.value(1)\n" + 
"\n" + 
"    def _rreg(self, reg):\n" + 
"\n" + 
"        self.cs.value(0)\n" + 
"        self.spi.write(b'%c' % int(0xff & (((reg << 1) & 0x7e) | 0x80)))\n" + 
"        val = self.spi.read(1)\n" + 
"        self.cs.value(1)\n" + 
"\n" + 
"        return val[0]\n" + 
"\n" + 
"    def _sflags(self, reg, mask):\n" + 
"        self._wreg(reg, self._rreg(reg) | mask)\n" + 
"\n" + 
"    def _cflags(self, reg, mask):\n" + 
"        self._wreg(reg, self._rreg(reg) & (~mask))\n" + 
"\n" + 
"    def _tocard(self, cmd, send):\n" + 
"\n" + 
"        recv = []\n" + 
"        bits = irq_en = wait_irq = n = 0\n" + 
"        stat = self.ERR\n" + 
"\n" + 
"        if cmd == 0x0E:\n" + 
"            irq_en = 0x12\n" + 
"            wait_irq = 0x10\n" + 
"        elif cmd == 0x0C:\n" + 
"            irq_en = 0x77\n" + 
"            wait_irq = 0x30\n" + 
"\n" + 
"        self._wreg(0x02, irq_en | 0x80)\n" + 
"        self._cflags(0x04, 0x80)\n" + 
"        self._sflags(0x0A, 0x80)\n" + 
"        self._wreg(0x01, 0x00)\n" + 
"\n" + 
"        for c in send:\n" + 
"            self._wreg(0x09, c)\n" + 
"        self._wreg(0x01, cmd)\n" + 
"\n" + 
"        if cmd == 0x0C:\n" + 
"            self._sflags(0x0D, 0x80)\n" + 
"\n" + 
"        i = 2000\n" + 
"        while True:\n" + 
"            n = self._rreg(0x04)\n" + 
"            i -= 1\n" + 
"            if ~((i != 0) and ~(n & 0x01) and ~(n & wait_irq)):\n" + 
"                break\n" + 
"\n" + 
"        self._cflags(0x0D, 0x80)\n" + 
"\n" + 
"        if i:\n" + 
"            if (self._rreg(0x06) & 0x1B) == 0x00:\n" + 
"                stat = self.OK\n" + 
"\n" + 
"                if n & irq_en & 0x01:\n" + 
"                    stat = self.NOTAGERR\n" + 
"                elif cmd == 0x0C:\n" + 
"                    n = self._rreg(0x0A)\n" + 
"                    lbits = self._rreg(0x0C) & 0x07\n" + 
"                    if lbits != 0:\n" + 
"                        bits = (n - 1) * 8 + lbits\n" + 
"                    else:\n" + 
"                        bits = n * 8\n" + 
"\n" + 
"                    if n == 0:\n" + 
"                        n = 1\n" + 
"                    elif n > 16:\n" + 
"                        n = 16\n" + 
"\n" + 
"                    for _ in range(n):\n" + 
"                        recv.append(self._rreg(0x09))\n" + 
"            else:\n" + 
"                stat = self.ERR\n" + 
"\n" + 
"        return stat, recv, bits\n" + 
"\n" + 
"    def _crc(self, data):\n" + 
"\n" + 
"        self._cflags(0x05, 0x04)\n" + 
"        self._sflags(0x0A, 0x80)\n" + 
"\n" + 
"        for c in data:\n" + 
"            self._wreg(0x09, c)\n" + 
"\n" + 
"        self._wreg(0x01, 0x03)\n" + 
"\n" + 
"        i = 0xFF\n" + 
"        while True:\n" + 
"            n = self._rreg(0x05)\n" + 
"            i -= 1\n" + 
"            if not ((i != 0) and not (n & 0x04)):\n" + 
"                break\n" + 
"\n" + 
"        return [self._rreg(0x22), self._rreg(0x21)]\n" + 
"\n" + 
"    def init(self):\n" + 
"\n" + 
"        self.reset()\n" + 
"        self._wreg(0x2A, 0x8D)\n" + 
"        self._wreg(0x2B, 0x3E)\n" + 
"        self._wreg(0x2D, 30)\n" + 
"        self._wreg(0x2C, 0)\n" + 
"        self._wreg(0x15, 0x40)\n" + 
"        self._wreg(0x11, 0x3D)\n" + 
"        self.antenna_on()\n" + 
"\n" + 
"    def reset(self):\n" + 
"        self._wreg(0x01, 0x0F)\n" + 
"\n" + 
"    def antenna_on(self, on=True):\n" + 
"\n" + 
"        if on and ~(self._rreg(0x14) & 0x03):\n" + 
"            self._sflags(0x14, 0x03)\n" + 
"        else:\n" + 
"            self._cflags(0x14, 0x03)\n" + 
"\n" + 
"    def request(self, mode):\n" + 
"\n" + 
"        self._wreg(0x0D, 0x07)\n" + 
"        (stat, recv, bits) = self._tocard(0x0C, [mode])\n" + 
"\n" + 
"        if (stat != self.OK) | (bits != 0x10):\n" + 
"            stat = self.ERR\n" + 
"\n" + 
"        return stat, bits\n" + 
"  \n" + 
"    def anticoll(self,anticolN):\n" + 
"\n" + 
"        ser_chk = 0\n" + 
"        ser = [anticolN, 0x20]\n" + 
"\n" + 
"        self._wreg(0x0D, 0x00)\n" + 
"        (stat, recv, bits) = self._tocard(0x0C, ser)\n" + 
"\n" + 
"        if stat == self.OK:\n" + 
"            if len(recv) == 5:\n" + 
"                for i in range(4):\n" + 
"                    ser_chk = ser_chk ^ recv[i]\n" + 
"                if ser_chk != recv[4]:\n" + 
"                    stat = self.ERR\n" + 
"            else:\n" + 
"                stat = self.ERR\n" + 
"\n" + 
"        return stat, recv\n" + 
"\n" + 
"    \n" + 
"    def PcdSelect(self, serNum,anticolN):\n" + 
"        backData = []\n" + 
"        buf = []\n" + 
"        buf.append(anticolN)\n" + 
"        buf.append(0x70)\n" + 
"        #i = 0\n" + 
"        ###xorsum=0;\n" + 
"        for i in serNum:\n" + 
"            buf.append(i)\n" + 
"        #while i<5:\n" + 
"        #    buf.append(serNum[i])\n" + 
"        #    i = i + 1\n" + 
"        pOut = self._crc(buf)\n" + 
"        buf.append(pOut[0])\n" + 
"        buf.append(pOut[1])\n" + 
"        (status, backData, backLen) = self._tocard( 0x0C, buf)\n" + 
"        if (status == self.OK) and (backLen == 0x18):\n" + 
"            return  1\n" + 
"        else:\n" + 
"            return 0\n" + 
"    \n" + 
"    \n" + 
"    def SelectTag(self, uid):\n" + 
"        byte5 = 0\n" + 
"        \n" + 
"        #(status,puid)= self.anticoll(self.PICC_ANTICOLL1)\n" + 
"        #print('uid',uid,'puid',puid)\n" + 
"        for i in uid:\n" + 
"            byte5 = byte5 ^ i\n" + 
"        puid = uid + [byte5]\n" + 
"        \n" + 
"        if self.PcdSelect(puid,self.PICC_ANTICOLL1) == 0:\n" + 
"            return (self.ERR,[])\n" + 
"        return (self.OK , uid)\n" + 
"        \n" + 
"    def tohexstring(self,v):\n" + 
"        s='['\n" + 
"        for i in v:\n" + 
"            if i != v[0]:\n" + 
"                s = s+ ', '\n" + 
"            s=s+ '0x{:02X}'.format(i)\n" + 
"        s= s+ ']'\n" + 
"        return s\n" + 
"        \n" + 
"  \n" + 
"            \n" + 
"    \n" + 
"    def SelectTagSN(self):\n" + 
"        valid_uid=[]\n" + 
"        (status,uid)= self.anticoll(self.PICC_ANTICOLL1)\n" + 
"        #print(' Tag 1:',self.tohexstring(uid))\n" + 
"        if status != self.OK:\n" + 
"            return  (self.ERR,[])\n" + 
"        \n" + 
"        if self.DEBUG:   print('anticol(1) {}'.format(uid))\n" + 
"        if self.PcdSelect(uid,self.PICC_ANTICOLL1) == 0:\n" + 
"            return (self.ERR,[])\n" + 
"        if self.DEBUG:   print('pcdSelect(1) {}'.format(uid))\n" + 
"        \n" + 
"        #check if first byte is 0x88\n" + 
"        if uid[0] == 0x88 :\n" + 
"            #ok we have another type of card\n" + 
"            valid_uid.extend(uid[1:4])\n" + 
"            (status,uid)=self.anticoll(self.PICC_ANTICOLL2)\n" + 
"            #print('Select Tag 2:',self.tohexstring(uid))\n" + 
"            if status != self.OK:\n" + 
"                return (self.ERR,[])\n" + 
"            if self.DEBUG: print('Anticol(2) {}'.format(uid))\n" + 
"            rtn =  self.PcdSelect(uid,self.PICC_ANTICOLL2)\n" + 
"            if self.DEBUG: print('pcdSelect(2) return={} uid={}'.format(rtn,uid))\n" + 
"            if rtn == 0:\n" + 
"                return (self.ERR,[])\n" + 
"            if self.DEBUG: print('PcdSelect2() {}'.format(uid))\n" + 
"            #now check again if uid[0] is 0x88\n" + 
"            if uid[0] == 0x88 :\n" + 
"                valid_uid.extend(uid[1:4])\n" + 
"                (status , uid) = self.anticoll(self.PICC_ANTICOLL3)\n" + 
"                #print('Select Tag 3:',self.tohexstring(uid))\n" + 
"                if status != self.OK:\n" + 
"                    return (self.ERR,[])\n" + 
"                if self.DEBUG: print('Anticol(3) {}'.format(uid))\n" + 
"                if self.MFRC522_PcdSelect(uid,self.PICC_ANTICOLL3) == 0:\n" + 
"                    return (self.ERR,[])\n" + 
"                if self.DEBUG: print('PcdSelect(3) {}'.format(uid))\n" + 
"        valid_uid.extend(uid[0:5])\n" + 
"        # if we are here than the uid is ok\n" + 
"        # let's remove the last BYTE whic is the XOR sum\n" + 
"        \n" + 
"        return (self.OK , valid_uid[:len(valid_uid)-1])\n" + 
"        #return (self.OK , valid_uid)\n" + 
"    \n" + 
"    \n" + 
"   \n" + 
"       \n" + 
"    \n" + 
"\n" + 
"    def auth(self, mode, addr, sect, ser):\n" + 
"        return self._tocard(0x0E, [mode, addr] + sect + ser[:4])[0]\n" + 
"    \n" + 
"    def authKeys(self,uid,addr,keyA=None, keyB=None):\n" + 
"        status = self.ERR\n" + 
"        if keyA is not None:\n" + 
"            status = self.auth(self.AUTHENT1A, addr, keyA, uid)\n" + 
"        elif keyB is not None:\n" + 
"            status = self.auth(self.AUTHENT1B, addr, keyB, uid)\n" + 
"        return status\n" + 
"       \n" + 
"\n" + 
"    def stop_crypto1(self):\n" + 
"        self._cflags(0x08, 0x08)\n" + 
"\n" + 
"    def read(self, addr):\n" + 
"\n" + 
"        data = [0x30, addr]\n" + 
"        data += self._crc(data)\n" + 
"        (stat, recv, _) = self._tocard(0x0C, data)\n" + 
"        return stat, recv\n" + 
"\n" + 
"    def write(self, addr, data):\n" + 
"\n" + 
"        buf = [0xA0, addr]\n" + 
"        buf += self._crc(buf)\n" + 
"        (stat, recv, bits) = self._tocard(0x0C, buf)\n" + 
"\n" + 
"        if not (stat == self.OK) or not (bits == 4) or not ((recv[0] & 0x0F) == 0x0A):\n" + 
"            stat = self.ERR\n" + 
"        else:\n" + 
"            buf = []\n" + 
"            for i in range(16):\n" + 
"                buf.append(data[i])\n" + 
"            buf += self._crc(buf)\n" + 
"            (stat, recv, bits) = self._tocard(0x0C, buf)\n" + 
"            if not (stat == self.OK) or not (bits == 4) or not ((recv[0] & 0x0F) == 0x0A):\n" + 
"                stat = self.ERR\n" + 
"        return stat\n" + 
"\n" + 
"\n" + 
"    def writeSectorBlock(self,uid, sector, block, data, keyA=None, keyB = None):\n" + 
"        absoluteBlock =  sector * 4 + (block % 4)\n" + 
"        if absoluteBlock > 63 :\n" + 
"            return self.ERR\n" + 
"        if len(data) != 16:\n" + 
"            return self.ERR\n" + 
"        if self.authKeys(uid,absoluteBlock,keyA,keyB) != self.ERR :\n" + 
"            return self.write(absoluteBlock, data)\n" + 
"        return self.ERR\n" + 
"\n" + 
"    def readSectorBlock(self,uid ,sector, block, keyA=None, keyB = None):\n" + 
"        absoluteBlock =  sector * 4 + (block % 4)\n" + 
"        if absoluteBlock > 63 :\n" + 
"            return self.ERR, None\n" + 
"        if self.authKeys(uid,absoluteBlock,keyA,keyB) != self.ERR :\n" + 
"            return self.read(absoluteBlock)\n" + 
"        return self.ERR, None\n" + 
"\n" + 
"    def MFRC522_DumpClassic1K(self,uid, Start=0, End=64, keyA=None, keyB=None):\n" + 
"        for absoluteBlock in range(Start,End):\n" + 
"            status = self.authKeys(uid,absoluteBlock,keyA,keyB)\n" + 
"            # Check if authenticated\n" + 
"            print('{:02d} S{:02d} B{:1d}: '.format(absoluteBlock, absoluteBlock//4 , absoluteBlock % 4),end='')\n" + 
"            if status == self.OK:                    \n" + 
"                status, block = self.read(absoluteBlock)\n" + 
"                if status == self.ERR:\n" + 
"                    break\n" + 
"                else:\n" + 
"                    for value in block:\n" + 
"                        print('{:02X} '.format(value),end='')\n" + 
"                    print('  ',end='')\n" + 
"                    for value in block:\n" + 
"                        if (value > 0x20) and (value < 0x7f):\n" + 
"                            print(chr(value),end='')\n" + 
"                        else:\n" + 
"                            print('.',end='')\n" + 
"                    print('')\n" + 
"            else:\n" + 
"                break\n" + 
"        if status == self.ERR:\n" + 
"            print('Authentication error')\n" + 
"            return self.ERR\n" + 
"        return self.OK\n"
], {type: 'text'});