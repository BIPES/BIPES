var mini_micropyGPSBlob = new Blob([
'"""\n' +
'# MicropyGPS - a GPS NMEA sentence parser for Micropython/Python 3.X\n' +
'# Copyright (c) 2017 Michael Calvin McCoy (calvin.mccoy@protonmail.com)\n' +
'# The MIT License (MIT) - see LICENSE file\n' +
'#\n' +
'# mini_micropyGPS.py is a is a reduced version of micropyGPS.py\n' +
'# with the support for the main NMEA messages.\n' +
'# Tested and working with ESP32 without the need of including it as a frozen module.\n' +
'#\n' +
'"""\n' +
'\n' +
'# TODO:\n' +
'# Time Since First Fix\n' +
'# Distance/Time to Target\n' +
'# More Helper Functions\n' +
'# Dynamically limit sentences types to parse\n' +
'\n' +
'from math import floor, modf\n' +
'\n' +
'# Import utime or time for fix time handling\n' +
'try:\n' +
'    # Assume running on MicroPython\n' +
'    import utime\n' +
'except ImportError:\n' +
'    # Otherwise default to time module for non-embedded implementations\n' +
'    # Should still support millisecond resolution.\n' +
'    import time\n' +
'\n' +
'\n' +
'class MicropyGPS(object):\n' +
'    """GPS NMEA Sentence Parser. Creates object that stores all relevant GPS data and statistics.\n' +
'    Parses sentences one character at a time using update(). """\n' +
'\n' +
'    # Max Number of Characters a valid sentence can be (based on GGA sentence)\n' +
'    SENTENCE_LIMIT = 90\n' +
'    __HEMISPHERES = ("N", "S", "E", "W")\n' +
'    __NO_FIX = 1\n' +
'    __FIX_2D = 2\n' +
'    __FIX_3D = 3\n' +
'    __DIRECTIONS = ("N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W",\n' +
'                    "WNW", "NW", "NNW")\n' +
'    __MONTHS = ("January", "February", "March", "April", "May",\n' +
'                "June", "July", "August", "September", "October",\n' +
'                "November", "December")\n' +
'\n' +
'    def __init__(self, local_offset=0, location_formatting="ddm"):\n' +
'        """\n' +
'        Setup GPS Object Status Flags, Internal Data Registers, etc\n' +
'            local_offset (int): Timzone Difference to UTC\n' +
'            location_formatting (str): Style For Presenting Longitude/Latitude:\n' +
'                                       Decimal Degree Minute (ddm) - 40 26.7672 N\n' +
'                                       Degrees Minutes Seconds (dms) - 40 262 463 N\n' +
'                                       Decimal Degrees (dd) - 40.446 N\n' +
'        """\n' +
'\n' +
'        #####################\n' +
'        # Object Status Flags\n' +
'        self.sentence_active = False\n' +
'        self.active_segment = 0\n' +
'        self.process_crc = False\n' +
'        self.gps_segments = []\n' +
'        self.crc_xor = 0\n' +
'        self.char_count = 0\n' +
'        self.fix_time = 0\n' +
'\n' +
'        #####################\n' +
'        # Sentence Statistics\n' +
'        self.crc_fails = 0\n' +
'        self.clean_sentences = 0\n' +
'        self.parsed_sentences = 0\n' +
'\n' +
'        #####################\n' +
'        # Logging Related\n' +
'        self.log_handle = None\n' +
'        self.log_en = False\n' +
'\n' +
'        #####################\n' +
'        # Data From Sentences\n' +
'        # Time\n' +
'        self.timestamp = [0, 0, 0.0]\n' +
'        self.date = [0, 0, 0]\n' +
'        self.local_offset = local_offset\n' +
'\n' +
'        # Position/Motion\n' +
'        self._latitude = [0, 0.0, "N"]\n' +
'        self._longitude = [0, 0.0, "W"]\n' +
'        self.coord_format = location_formatting\n' +
'        self.speed = [0.0, 0.0, 0.0]\n' +
'        self.course = 0.0\n' +
'        self.altitude = 0.0\n' +
'        self.geoid_height = 0.0\n' +
'\n' +
'        # GPS Info\n' +
'        self.satellites_in_view = 0\n' +
'        self.satellites_in_use = 0\n' +
'        self.satellites_used = []\n' +
'        self.last_sv_sentence = 0\n' +
'        self.total_sv_sentences = 0\n' +
'        self.satellite_data = dict()\n' +
'        self.hdop = 0.0\n' +
'        self.pdop = 0.0\n' +
'        self.vdop = 0.0\n' +
'        self.valid = False\n' +
'        self.fix_stat = 0\n' +
'        self.fix_type = 1\n' +
'\n' +
'    ########################################\n' +
'    # Coordinates Translation Functions\n' +
'    ########################################\n' +
'    @property\n' +
'    def latitude(self):\n' +
'        """Format Latitude Data Correctly"""\n' +
'        if self.coord_format == "dd":\n' +
'            decimal_degrees = self._latitude[0] + (self._latitude[1] / 60)\n' +
'            return [decimal_degrees, self._latitude[2]]\n' +
'        elif self.coord_format == "dms":\n' +
'            minute_parts = modf(self._latitude[1])\n' +
'            seconds = round(minute_parts[0] * 60)\n' +
'            return [self._latitude[0], int(minute_parts[1]), seconds, self._latitude[2]]\n' +
'        else:\n' +
'            return self._latitude\n' +
'\n' +
'    @property\n' +
'    def longitude(self):\n' +
'        """Format Longitude Data Correctly"""\n' +
'        if self.coord_format == "dd":\n' +
'            decimal_degrees = self._longitude[0] + (self._longitude[1] / 60)\n' +
'            return [decimal_degrees, self._longitude[2]]\n' +
'        elif self.coord_format == "dms":\n' +
'            minute_parts = modf(self._longitude[1])\n' +
'            seconds = round(minute_parts[0] * 60)\n' +
'            return [self._longitude[0], int(minute_parts[1]), seconds, self._longitude[2]]\n' +
'        else:\n' +
'            return self._longitude\n' +
'\n' +
'\n' +
'    ########################################\n' +
'    # Sentence Parsers\n' +
'    ########################################\n' +
'    def gprmc(self):\n' +
'        """Parse Recommended Minimum Specific GPS/Transit data (RMC)Sentence.\n' +
'        Updates UTC timestamp, latitude, longitude, Course, Speed, Date, and fix status\n' +
'        """\n' +
'\n' +
'        # UTC Timestamp\n' +
'        try:\n' +
'            utc_string = self.gps_segments[1]\n' +
'\n' +
'            if utc_string:  # Possible timestamp found\n' +
'                hours = (int(utc_string[0:2]) + self.local_offset) % 24\n' +
'                minutes = int(utc_string[2:4])\n' +
'                seconds = float(utc_string[4:])\n' +
'                self.timestamp = [hours, minutes, seconds] \n' +
'            else:  # No Time stamp yet \n' +
'                self.timestamp = [0, 0, 0.0] \n' +
' \n' +
'        except ValueError:  # Bad Timestamp value present \n' +
'            return False \n' +
' \n' +
'        # Date stamp \n' +
'        try: \n' + '            date_string = self.gps_segments[9] \n' +
' \n' +
'            # Date string printer function assumes to be year >=2000, \n' +
'            # date_string() must be supplied with the correct century argument to display correctly \n' +
'            if date_string:  # Possible date stamp found \n' +
'                day = int(date_string[0:2]) \n' +
'                month = int(date_string[2:4]) \n' +
'                year = int(date_string[4:6]) \n' +
'                self.date = (day, month, year) \n' +
'            else:  # No Date stamp yet \n' +
'                self.date = (0, 0, 0) \n' +
' \n' +
'        except ValueError:  # Bad Date stamp value present \n' +
'            return False \n' +
' \n' +
'        # Check Receiver Data Valid Flag \n' +
'        if self.gps_segments[2] == "A":  # Data from Receiver is Valid/Has Fix \n' +
' \n' +
'            # Longitude / Latitude \n' +
'            try: \n' +
'                # Latitude \n' +
'                l_string = self.gps_segments[3] \n' +
'                lat_degs = int(l_string[0:2]) \n' +
'                lat_mins = float(l_string[2:]) \n' +
'                lat_hemi = self.gps_segments[4] \n' +
' \n' +
'                # Longitude \n' +
'                l_string = self.gps_segments[5] \n' +
'                lon_degs = int(l_string[0:3]) \n' +
'                lon_mins = float(l_string[3:]) \n' +
'                lon_hemi = self.gps_segments[6] \n' +
'            except ValueError: \n' +
'                return False \n' +
' \n' +
'            if lat_hemi not in self.__HEMISPHERES: \n' +
'                return False \n' +
' \n' +
'            if lon_hemi not in self.__HEMISPHERES: \n' +
'                return False \n' +
' \n' +
'            # Speed \n' +
'            try: \n' +
'                spd_knt = float(self.gps_segments[7]) \n' +
'            except ValueError: \n' +
'                return False \n' +
' \n' +
'            # Course \n' +
'            try: \n' +
'                if self.gps_segments[8]: \n' +
'                    course = float(self.gps_segments[8]) \n' +
'                else: \n' +
'                    course = 0.0 \n' +
'            except ValueError: \n' +
'                return False \n' +
' \n' +
'            # TODO - Add Magnetic Variation \n' +
' \n' +
'            # Update Object Data \n' +
'            self._latitude = [lat_degs, lat_mins, lat_hemi] \n' +
'            self._longitude = [lon_degs, lon_mins, lon_hemi] \n' +
'            # Include mph and hm/h \n' +
'            self.speed = [spd_knt, spd_knt * 1.151, spd_knt * 1.852] \n' +
'            self.course = course \n' +
'            self.valid = True \n' +
' \n' +
'            # Update Last Fix Time \n' +
'            self.new_fix_time() \n' +
' \n' +
'        else:  # Clear Position Data if Sentence is "Invalid" \n' +
'            self._latitude = [0, 0.0, "N"] \n' +
'            self._longitude = [0, 0.0, "W"] \n' +
'            self.speed = [0.0, 0.0, 0.0] \n' +
'            self.course = 0.0 \n' +
'            self.valid = False \n' +
' \n' +
'        return True \n' +
' \n' +
' \n' +
'    def gpvtg(self): \n' +
'        """Parse Track Made Good and Ground Speed (VTG) Sentence. Updates speed and course""" \n' +
'        try: \n' +
'            course = float(self.gps_segments[1]) if self.gps_segments[1] else 0.0 \n' +
'            spd_knt = float(self.gps_segments[5]) if self.gps_segments[5] else 0.0 \n' +
'        except ValueError: \n' +
'            return False \n' +
' \n' +
'        # Include mph and km/h \n' +
'        self.speed = (spd_knt, spd_knt * 1.151, spd_knt * 1.852) \n' +
'        self.course = course \n' +
'        return True \n' +
' \n' +
'    def gpgga(self): \n' +
'        """Parse Global Positioning System Fix Data (GGA) Sentence. Updates UTC timestamp, latitude, longitude, \n' +
'        fix status, satellites in use, Horizontal Dilution of Precision (HDOP), altitude, geoid height and fix status""" \n' +
' \n' +
'        try: \n' +
'            # UTC Timestamp \n' +
'            utc_string = self.gps_segments[1] \n' +
' \n' +
'            # Skip timestamp if receiver doesn"t have on yet \n' +
'            if utc_string: \n' +
'                hours = (int(utc_string[0:2]) + self.local_offset) % 24 \n' +
'                minutes = int(utc_string[2:4]) \n' +
'                seconds = float(utc_string[4:]) \n' +
'            else: \n' +
'                hours = 0 \n' +
'                minutes = 0 \n' +
'                seconds = 0.0 \n' +
' \n' +
'            # Number of Satellites in Use \n' +
'            satellites_in_use = int(self.gps_segments[7]) \n' +
' \n' +
'            # Get Fix Status \n' +
'            fix_stat = int(self.gps_segments[6]) \n' + 
' \n' + 
'        except (ValueError, IndexError): \n' + 
'            return False \n' + 
' \n' +
'        try: \n' +
'            # Horizontal Dilution of Precision \n' +
'            hdop = float(self.gps_segments[8]) \n' +
'        except (ValueError, IndexError): \n' +
'            hdop = 0.0 \n' +
' \n' +
'        # Process Location and Speed Data if Fix is GOOD \n' +
'        if fix_stat: \n' +
' \n' +
'            # Longitude / Latitude \n' +
'            try: \n' +
'                # Latitude \n' +
'                l_string = self.gps_segments[2] \n' +
'                lat_degs = int(l_string[0:2]) \n' +
'                lat_mins = float(l_string[2:]) \n' +
'                lat_hemi = self.gps_segments[3] \n' +
' \n' +
'                # Longitude \n' +
'                l_string = self.gps_segments[4] \n' +
'                lon_degs = int(l_string[0:3]) \n' +
'                lon_mins = float(l_string[3:]) \n' +
'                lon_hemi = self.gps_segments[5] \n' +
'            except ValueError: \n' +
'                return False \n' +
' \n' +
'            if lat_hemi not in self.__HEMISPHERES: \n' +
'                return False \n' +
' \n' +
'            if lon_hemi not in self.__HEMISPHERES: \n' +
'                return False \n' +
' \n' +
'            # Altitude / Height Above Geoid \n' +
'            try: \n' +
'                altitude = float(self.gps_segments[9]) \n' +
'                geoid_height = float(self.gps_segments[11]) \n' +
'            except ValueError: \n' +
'                altitude = 0 \n' +
'                geoid_height = 0 \n' +
' \n' +
'            # Update Object Data \n' +
'            self._latitude = [lat_degs, lat_mins, lat_hemi] \n' +
'            self._longitude = [lon_degs, lon_mins, lon_hemi] \n' +
'            self.altitude = altitude \n' +
'            self.geoid_height = geoid_height \n' +
' \n' +
'        # Update Object Data \n' +
'        self.timestamp = [hours, minutes, seconds] \n' +
'        self.satellites_in_use = satellites_in_use \n' +
'        self.hdop = hdop \n' +
'        self.fix_stat = fix_stat \n' +
' \n' +
'        # If Fix is GOOD, update fix timestamp \n' +
'        if fix_stat: \n' +
'            self.new_fix_time() \n' +
' \n' +
'        return True \n' +
' \n' +
' \n' +
' \n' +
'    ########################################## \n' +
'    # Data Stream Handler Functions \n' +
'    ########################################## \n' +
' \n' +
'    def new_sentence(self): \n' +
'        """Adjust Object Flags in Preparation for a New Sentence""" \n' +
'        self.gps_segments = [""] \n' +
'        self.active_segment = 0 \n' +
'        self.crc_xor = 0 \n' +
'        self.sentence_active = True \n' +
'        self.process_crc = True \n' +
'        self.char_count = 0 \n' +
' \n' +
'    def update(self, new_char): \n' +
'        """Process a new input char and updates GPS object if necessary based on special characters ("$", ",", "*") \n' +
'        Function builds a list of received string that are validate by CRC prior to parsing by the  appropriate \n' +
'        sentence function. Returns sentence type on successful parse, None otherwise""" \n' +
' \n' +
'        valid_sentence = False \n' +
' \n' +
'        # Validate new_char is a printable char \n' +
'        ascii_char = ord(new_char) \n' +
' \n' +
'        if 10 <= ascii_char <= 126: \n' +
'            self.char_count += 1 \n' +
' \n' +
'            # Write Character to log file if enabled \n' +
'            if self.log_en: \n' +
'                self.write_log(new_char) \n' +
' \n' +
'            # Check if a new string is starting ($) \n' +
'            if new_char == "$": \n' +
'                self.new_sentence() \n' +
'                return None \n' +
' \n' +
'            elif self.sentence_active: \n' +
' \n' +
'                # Check if sentence is ending (*) \n' +
'                if new_char == "*": \n' +
'                    self.process_crc = False \n' +
'                    self.active_segment += 1 \n' +
'                    self.gps_segments.append("") \n' +
'                    return None \n' +
' \n' +
'                # Check if a section is ended (,), Create a new substring to feed \n' +
'                # characters to \n' +
'                elif new_char == ",": \n' +
'                    self.active_segment += 1 \n' +
'                    self.gps_segments.append("") \n' +
' \n' +
'                # Store All Other printable character and check CRC when ready \n' +
'                else: \n' +
'                    self.gps_segments[self.active_segment] += new_char \n' +
' \n' +
'                    # When CRC input is disabled, sentence is nearly complete \n' +
'                    if not self.process_crc: \n' +
' \n' +
'                        if len(self.gps_segments[self.active_segment]) == 2: \n' +
'                            try: \n' +
'                                final_crc = int(self.gps_segments[self.active_segment], 16) \n' +
'                                if self.crc_xor == final_crc: \n' +
'                                    valid_sentence = True \n' +
'                                else: \n' +
'                                    self.crc_fails += 1 \n' +
'                            except ValueError: \n' +
'                                pass  # CRC Value was deformed and could not have been correct \n' +
' \n' +
'                # Update CRC \n' +
'                if self.process_crc: \n' +
'                    self.crc_xor ^= ascii_char \n' +
' \n' +
'                # If a Valid Sentence Was received and it"s a supported sentence, then parse it!! \n' +
'                if valid_sentence: \n' +
'                    self.clean_sentences += 1  # Increment clean sentences received \n' +
'                    self.sentence_active = False  # Clear Active Processing Flag \n' +
' \n' +
'                    if self.gps_segments[0] in self.supported_sentences: \n' +
' \n' +
'                        # parse the Sentence Based on the message type, return True if parse is clean \n' +
'                        if self.supported_sentences[self.gps_segments[0]](self): \n' +
' \n' +
'                            # Let host know that the GPS object was updated by returning parsed sentence type \n' +
'                            self.parsed_sentences += 1 \n' +
'                            return self.gps_segments[0] \n' +
' \n' +
'                # Check that the sentence buffer isn"t filling up with Garage waiting for the sentence to complete \n' +
'                if self.char_count > self.SENTENCE_LIMIT: \n' +
'                    self.sentence_active = False \n' +
' \n' +
'        # Tell Host no new sentence was parsed \n' +
'        return None \n' +
' \n' +
'    def new_fix_time(self): \n' +
'        """Updates a high resolution counter with current time when fix is updated. Currently only triggered from \n' +
'        GGA, GSA and RMC sentences""" \n' +
'        try: \n' +
'            self.fix_time = utime.ticks_ms() \n' +
'        except NameError: \n' +
'            self.fix_time = time.time() \n' +
' \n' +
'    ######################################### \n' +
'    # User Helper Functions \n' +
'    # These functions make working with the GPS object data easier \n' +
'    ######################################### \n' +
' \n' +
'    def satellite_data_updated(self): \n' +
'        """ \n' +
'        Checks if the all the GSV sentences in a group have been read, making satellite data complete \n' +
'        :return: boolean \n' +
'        """ \n' +
'        if self.total_sv_sentences > 0 and self.total_sv_sentences == self.last_sv_sentence: \n' +
'            return True \n' +
'        else: \n' +
'            return False \n' +
' \n' +
'    def unset_satellite_data_updated(self): \n' +
'        """ \n' +
'        Mark GSV sentences as read indicating the data has been used and future updates are fresh \n' +
'        """ \n' +
'        self.last_sv_sentence = 0 \n' +
' \n' +
'    def satellites_visible(self): \n' +
'        """ \n' +
'        Returns a list of of the satellite PRNs currently visible to the receiver \n' +
'        :return: list \n' +
'        """ \n' +
'        return list(self.satellite_data.keys()) \n' +
' \n' +
'    def time_since_fix(self): \n' +
'        """Returns number of millisecond since the last sentence with a valid fix was parsed. Returns 0 if \n' +
'        no fix has been found""" \n' +
' \n' +
'        # Test if a Fix has been found \n' +
'        if self.fix_time == 0: \n' +
'            return -1 \n' +
' \n' +
'        # Try calculating fix time using utime; if not running MicroPython \n' +
'        # time.time() returns a floating point value in secs \n' +
'        try: \n' +
'            current = utime.ticks_diff(utime.ticks_ms(), self.fix_time) \n' +
'        except NameError: \n' +
'            current = (time.time() - self.fix_time) * 1000  # ms \n' +
' \n' +
'        return current \n' +
' \n' +
'    def compass_direction(self): \n' +
'        """ \n' +
'        Determine a cardinal or inter-cardinal direction based on current course. \n' +
'        :return: string \n' +
'        """ \n' +
'        # Calculate the offset for a rotated compass \n' +
'        if self.course >= 348.75: \n' +
'            offset_course = 360 - self.course \n' +
'        else: \n' +
'            offset_course = self.course + 11.25 \n' +
' \n' +
'        # Each compass point is separated by 22.5 degrees, divide to find lookup value \n' +
'        dir_index = floor(offset_course / 22.5) \n' +
' \n' +
'        final_dir = self.__DIRECTIONS[dir_index] \n' +
' \n' +
'        return final_dir \n' +
' \n' +
'    def latitude_string(self): \n' +
'        """ \n' +
'        Create a readable string of the current latitude data \n' +
'        :return: string \n' +
'        """ \n' +
'        if self.coord_format == "dd": \n' +
'            formatted_latitude = self.latitude \n' +
'            lat_string = str(formatted_latitude[0]) + " " + str(self._latitude[2]) \n' +
'        elif self.coord_format == "dms": \n' +
'            formatted_latitude = self.latitude \n' +
'            lat_string = str(formatted_latitude[0]) + " " + str(formatted_latitude[1]) + chr(39) + " " + str(formatted_latitude[2]) + chr(34) + " " + str(formatted_latitude[3]) \n' +
'        else: \n' +
'            lat_string = str(self._latitude[0]) + " " + str(self._latitude[1]) + chr(39) + " " + str(self._latitude[2]) \n' +
'        return lat_string \n' +
' \n' +
'    def longitude_string(self): \n' +
'        """ \n' +
'        Create a readable string of the current longitude data \n' +
'        :return: string \n' +
'        """ \n' +
'        if self.coord_format == "dd": \n' +
'            formatted_longitude = self.longitude \n' +
'            lon_string = str(formatted_longitude[0]) + " " + str(self._longitude[2]) \n' +
'        elif self.coord_format == "dms": \n' +
'            formatted_longitude = self.longitude \n' +
'            lon_string = str(formatted_longitude[0]) + " " + str(formatted_longitude[1]) + chr(39) + " " + str(formatted_longitude[2]) + chr(34) + " " + str(formatted_longitude[3]) \n' +
'        else: \n' +
'            lon_string = str(self._longitude[0]) + " " + str(self._longitude[1]) + chr(39) + " " + str(self._longitude[2]) \n' +
'        return lon_string \n' +
' \n' +
'    def speed_string(self, unit="kph"): \n' +
'        """ \n' +
'        Creates a readable string of the current speed data in one of three units \n' +
'        :param unit: string of "kph","mph, or "knot" \n' +
'        :return: \n' +
'        """ \n' +
'        if unit == "mph": \n' +
'            speed_string = str(self.speed[1]) + " mph" \n' +
' \n' +
'        elif unit == "knot": \n' +
'            if self.speed[0] == 1: \n' +
'                unit_str = " knot" \n' +
'            else: \n' +
'                unit_str = " knots" \n' +
'            speed_string = str(self.speed[0]) + unit_str \n' +
' \n' +
'        else: \n' +
'            speed_string = str(self.speed[2]) + " km/h" \n' +
' \n' +
'        return speed_string \n' +
' \n' +
'    def date_string(self, formatting="s_mdy", century="20"): \n' +
'        """ \n' +
'        Creates a readable string of the current date. \n' +
'        Can select between long format: Januray 1st, 2014 \n' +
'        or two short formats: \n' +
'        11/01/2014 (MM/DD/YYYY) \n' +
'        01/11/2014 (DD/MM/YYYY) \n' +
'        :param formatting: string "s_mdy", "s_dmy", or "long" \n' +
'        :param century: int delineating the century the GPS data is from (19 for 19XX, 20 for 20XX) \n' +
'        :return: date_string  string with long or short format date \n' +
'        """ \n' +
' \n' +
'        # Long Format Januray 1st, 2014 \n' +
'        if formatting == "long": \n' +
'            # Retrieve Month string from private set \n' +
'            month = self.__MONTHS[self.date[1] - 1] \n' +
' \n' +
'            # Determine Date Suffix \n' +
'            if self.date[0] in (1, 21, 31): \n' +
'                suffix = "st" \n' +
'            elif self.date[0] in (2, 22): \n' +
'                suffix = "nd" \n' +
'            elif self.date[0] == (3, 23): \n' +
'                suffix = "rd" \n' +
'            else: \n' +
'                suffix = "th" \n' +
' \n' +
'            day = str(self.date[0]) + suffix  # Create Day String \n' +
' \n' +
'            year = century + str(self.date[2])  # Create Year String \n' +
' \n' +
'            date_string = month + " " + day + ", " + year  # Put it all together \n' +
' \n' +
'        else: \n' +
'            # Add leading zeros to day string if necessary \n' +
'            if self.date[0] < 10: \n' +
'                day = "0" + str(self.date[0]) \n' +
'            else: \n' +
'                day = str(self.date[0]) \n' +
' \n' +
'            # Add leading zeros to month string if necessary \n' +
'            if self.date[1] < 10: \n' +
'                month = "0" + str(self.date[1]) \n' +
'            else: \n' +
'                month = str(self.date[1]) \n' +
' \n' +
'            # Add leading zeros to year string if necessary \n' +
'            if self.date[2] < 10: \n' +
'                year = "0" + str(self.date[2]) \n' +
'            else: \n' +
'                year = str(self.date[2]) \n' +
' \n' +
'            # Build final string based on desired formatting \n' +
'            if formatting == "s_dmy": \n' +
'                date_string = day + "/" + month + "/" + year \n' +
' \n' +
'            else:  # Default date format \n' +
'                date_string = month + "/" + day + "/" + year \n' +
' \n' +
'        return date_string \n' +
' \n' +
'    # All the currently supported NMEA sentences \n' +
'    supported_sentences = {"GPRMC": gprmc, "GLRMC": gprmc, \n' +
'                           "GPGGA": gpgga, "GLGGA": gpgga, \n' +
'                           "GPVTG": gpvtg, "GLVTG": gpvtg, \n' +
'                           "GNGGA": gpgga, "GNRMC": gprmc, \n' +
' \n' +
'                          } \n' +
' \n' +
'if __name__ == "__main__": \n' +
'    pass \n'
], {type: 'text'});