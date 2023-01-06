var vector3dBlob = new Blob([
"# vector3d.py 3D vector class for use in inertial measurement unit drivers\n" +
"# Authors Peter Hinch, Sebastian Plamauer\n" +
"\n" +
"# V0.7 17th May 2017 pyb replaced with utime\n" +
"# V0.6 18th June 2015\n" +
"\n" +
"'''\n" +
"The MIT License (MIT)\n" +
"Copyright (c) 2014 Sebastian Plamauer, oeplse@gmail.com, Peter Hinch\n" +
"Permission is hereby granted, free of charge, to any person obtaining a copy\n" +
"of this software and associated documentation files (the Software), to deal\n" +
"in the Software without restriction, including without limitation the rights\n" +
"to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n" +
"copies of the Software, and to permit persons to whom the Software is\n" +
"furnished to do so, subject to the following conditions:\n" +
"The above copyright notice and this permission notice shall be included in\n" +
"all copies or substantial portions of the Software.\n" +
"THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n" +
"IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n" +
"FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n" +
"AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n" +
"LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n" +
"OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n" +
"THE SOFTWARE.\n" +
"'''\n" +
"\n" +
"from utime import sleep_ms\n" +
"from math import sqrt, degrees, acos, atan2\n" +
"\n" +
"\n" +
"def default_wait():\n" +
"    '''\n" +
"    delay of 50 ms\n" +
"    '''\n" +
"    sleep_ms(50)\n" +
"\n" +
"\n" +
"class Vector3d(object):\n" +
"    '''\n" +
"    Represents a vector in a 3D space using Cartesian coordinates.\n" +
"    Internally uses sensor relative coordinates.\n" +
"    Returns vehicle-relative x, y and z values.\n" +
"    '''\n" +
"    def __init__(self, transposition, scaling, update_function):\n" +
"        self._vector = [0, 0, 0]\n" +
"        self._ivector = [0, 0, 0]\n" +
"        self.cal = (0, 0, 0)\n" +
"        self.argcheck(transposition, 'Transposition')\n" +
"        self.argcheck(scaling, 'Scaling')\n" +
"        if set(transposition) != {0, 1, 2}:\n" +
"            raise ValueError('Transpose indices must be unique and in range 0-2')\n" +
"        self._scale = scaling\n" +
"        self._transpose = transposition\n" +
"        self.update = update_function\n" +
"\n" +
"    def argcheck(self, arg, name):\n" +
"        '''\n" +
"        checks if arguments are of correct length\n" +
"        '''\n" +
"        if len(arg) != 3 or not (type(arg) is list or type(arg) is tuple):\n" +
"            raise ValueError(name + ' must be a 3 element list or tuple')\n" +
"\n" +
"    def calibrate(self, stopfunc, waitfunc=default_wait):\n" +
"        '''\n" +
"        calibration routine, sets cal\n" +
"        '''\n" +
"        self.update()\n" +
"        maxvec = self._vector[:]                # Initialise max and min lists with current values\n" +
"        minvec = self._vector[:]\n" +
"        while not stopfunc():\n" +
"            waitfunc()\n" +
"            self.update()\n" +
"            maxvec = list(map(max, maxvec, self._vector))\n" +
"            minvec = list(map(min, minvec, self._vector))\n" +
"        self.cal = tuple(map(lambda a, b: (a + b)/2, maxvec, minvec))\n" +
"\n" +
"    @property\n" +
"    def _calvector(self):\n" +
"        '''\n" +
"        Vector adjusted for calibration offsets\n" +
"        '''\n" +
"        return list(map(lambda val, offset: val - offset, self._vector, self.cal))\n" +
"\n" +
"    @property\n" +
"    def x(self):                                # Corrected, vehicle relative floating point values\n" +
"        self.update()\n" +
"        return self._calvector[self._transpose[0]] * self._scale[0]\n" +
"\n" +
"    @property\n" +
"    def y(self):\n" +
"        self.update()\n" +
"        return self._calvector[self._transpose[1]] * self._scale[1]\n" +
"\n" +
"    @property\n" +
"    def z(self):\n" +
"        self.update()\n" +
"        return self._calvector[self._transpose[2]] * self._scale[2]\n" +
"\n" +
"    @property\n" +
"    def xyz(self):\n" +
"        self.update()\n" +
"        return (self._calvector[self._transpose[0]] * self._scale[0],\n" +
"                self._calvector[self._transpose[1]] * self._scale[1],\n" +
"                self._calvector[self._transpose[2]] * self._scale[2])\n" +
"\n" +
"    @property\n" +
"    def magnitude(self):\n" +
"        x, y, z = self.xyz  # All measurements must correspond to the same instant\n" +
"        return sqrt(x**2 + y**2 + z**2)\n" +
"\n" +
"    @property\n" +
"    def inclination(self):\n" +
"        x, y, z = self.xyz\n" +
"        return degrees(acos(z / sqrt(x**2 + y**2 + z**2)))\n" +
"\n" +
"    @property\n" +
"    def elevation(self):\n" +
"        return 90 - self.inclination\n" +
"\n" +
"    @property\n" +
"    def azimuth(self):\n" +
"        x, y, z = self.xyz\n" +
"        return degrees(atan2(y, x))\n" +
"\n" +
"    # Raw uncorrected integer values from sensor\n" +
"    @property\n" +
"    def ix(self):\n" +
"        return self._ivector[0]\n" +
"\n" +
"    @property\n" +
"    def iy(self):\n" +
"        return self._ivector[1]\n" +
"\n" +
"    @property\n" +
"    def iz(self):\n" +
"        return self._ivector[2]\n" +
"\n" +
"    @property\n" +
"    def ixyz(self):\n" +
"        return self._ivector\n" +
"\n" +
"    @property\n" +
"    def transpose(self):\n" +
"        return tuple(self._transpose)\n" +
"\n" +
"    @property\n" +
"    def scale(self):\n" +
"        return tuple(self._scale)\n"
], {type: 'text'});