	echo "Generating offline version"
	echo > ui/index_offline.html
	cat ui/index.html >> ui/index_offline.html
	echo "Including file ui/toolbox/3pi_2040.xml" 
	echo -n "<document style='display: none' id='"OFFLINE_ >> ui/index_offline.html
	echo -n ui/toolbox/3pi_2040.xml | sed -e 's/[\/\.]/_/g' -e 's/ui_//g' >> ui/index_offline.html
	echo  "'>" >> ui/index_offline.html
	cat ui/toolbox/3pi_2040.xml | grep -v "<document>" >> ui/index_offline.html
	echo "Including file ui/toolbox/arduino.xml" 
	echo -n "<document style='display: none' id='"OFFLINE_ >> ui/index_offline.html
	echo -n ui/toolbox/arduino.xml | sed -e 's/[\/\.]/_/g' -e 's/ui_//g' >> ui/index_offline.html
	echo  "'>" >> ui/index_offline.html
	cat ui/toolbox/arduino.xml | grep -v "<document>" >> ui/index_offline.html
	echo "Including file ui/toolbox/bbblack.xml" 
	echo -n "<document style='display: none' id='"OFFLINE_ >> ui/index_offline.html
	echo -n ui/toolbox/bbblack.xml | sed -e 's/[\/\.]/_/g' -e 's/ui_//g' >> ui/index_offline.html
	echo  "'>" >> ui/index_offline.html
	cat ui/toolbox/bbblack.xml | grep -v "<document>" >> ui/index_offline.html
	echo "Including file ui/toolbox/default.xml" 
	echo -n "<document style='display: none' id='"OFFLINE_ >> ui/index_offline.html
	echo -n ui/toolbox/default.xml | sed -e 's/[\/\.]/_/g' -e 's/ui_//g' >> ui/index_offline.html
	echo  "'>" >> ui/index_offline.html
	cat ui/toolbox/default.xml | grep -v "<document>" >> ui/index_offline.html
	echo "Including file ui/toolbox/esp32.xml" 
	echo -n "<document style='display: none' id='"OFFLINE_ >> ui/index_offline.html
	echo -n ui/toolbox/esp32.xml | sed -e 's/[\/\.]/_/g' -e 's/ui_//g' >> ui/index_offline.html
	echo  "'>" >> ui/index_offline.html
	cat ui/toolbox/esp32.xml | grep -v "<document>" >> ui/index_offline.html
	echo "Including file ui/toolbox/esp32-basic.xml" 
	echo -n "<document style='display: none' id='"OFFLINE_ >> ui/index_offline.html
	echo -n ui/toolbox/esp32-basic.xml | sed -e 's/[\/\.]/_/g' -e 's/ui_//g' >> ui/index_offline.html
	echo  "'>" >> ui/index_offline.html
	cat ui/toolbox/esp32-basic.xml | grep -v "<document>" >> ui/index_offline.html
	echo "Including file ui/toolbox/esp32S2.xml" 
	echo -n "<document style='display: none' id='"OFFLINE_ >> ui/index_offline.html
	echo -n ui/toolbox/esp32S2.xml | sed -e 's/[\/\.]/_/g' -e 's/ui_//g' >> ui/index_offline.html
	echo  "'>" >> ui/index_offline.html
	cat ui/toolbox/esp32S2.xml | grep -v "<document>" >> ui/index_offline.html
	echo "Including file ui/toolbox/esp8266.xml" 
	echo -n "<document style='display: none' id='"OFFLINE_ >> ui/index_offline.html
	echo -n ui/toolbox/esp8266.xml | sed -e 's/[\/\.]/_/g' -e 's/ui_//g' >> ui/index_offline.html
	echo  "'>" >> ui/index_offline.html
	cat ui/toolbox/esp8266.xml | grep -v "<document>" >> ui/index_offline.html
	echo "Including file ui/toolbox/linux.xml" 
	echo -n "<document style='display: none' id='"OFFLINE_ >> ui/index_offline.html
	echo -n ui/toolbox/linux.xml | sed -e 's/[\/\.]/_/g' -e 's/ui_//g' >> ui/index_offline.html
	echo  "'>" >> ui/index_offline.html
	cat ui/toolbox/linux.xml | grep -v "<document>" >> ui/index_offline.html
	echo "Including file ui/toolbox/makernano.xml" 
	echo -n "<document style='display: none' id='"OFFLINE_ >> ui/index_offline.html
	echo -n ui/toolbox/makernano.xml | sed -e 's/[\/\.]/_/g' -e 's/ui_//g' >> ui/index_offline.html
	echo  "'>" >> ui/index_offline.html
	cat ui/toolbox/makernano.xml | grep -v "<document>" >> ui/index_offline.html
	echo "Including file ui/toolbox/makerpi.xml" 
	echo -n "<document style='display: none' id='"OFFLINE_ >> ui/index_offline.html
	echo -n ui/toolbox/makerpi.xml | sed -e 's/[\/\.]/_/g' -e 's/ui_//g' >> ui/index_offline.html
	echo  "'>" >> ui/index_offline.html
	cat ui/toolbox/makerpi.xml | grep -v "<document>" >> ui/index_offline.html
	echo "Including file ui/toolbox/rpi_pico.xml" 
	echo -n "<document style='display: none' id='"OFFLINE_ >> ui/index_offline.html
	echo -n ui/toolbox/rpi_pico.xml | sed -e 's/[\/\.]/_/g' -e 's/ui_//g' >> ui/index_offline.html
	echo  "'>" >> ui/index_offline.html
	cat ui/toolbox/rpi_pico.xml | grep -v "<document>" >> ui/index_offline.html
	echo "Including file ui/toolbox/rpi_pico_w.xml" 
	echo -n "<document style='display: none' id='"OFFLINE_ >> ui/index_offline.html
	echo -n ui/toolbox/rpi_pico_w.xml | sed -e 's/[\/\.]/_/g' -e 's/ui_//g' >> ui/index_offline.html
	echo  "'>" >> ui/index_offline.html
	cat ui/toolbox/rpi_pico_w.xml | grep -v "<document>" >> ui/index_offline.html
	echo "Including file ui/toolbox/stm32.xml" 
	echo -n "<document style='display: none' id='"OFFLINE_ >> ui/index_offline.html
	echo -n ui/toolbox/stm32.xml | sed -e 's/[\/\.]/_/g' -e 's/ui_//g' >> ui/index_offline.html
	echo  "'>" >> ui/index_offline.html
	cat ui/toolbox/stm32.xml | grep -v "<document>" >> ui/index_offline.html
	echo "<script>" >> ui/index_offline.html
	echo "OFFLINE_devinfo_devinfo_json = \`" >> ui/index_offline.html
	cat ui/devinfo/devinfo.json >> ui/index_offline.html
	echo "\`;" >> ui/index_offline.html
	echo "</script>" >> ui/index_offline.html
	