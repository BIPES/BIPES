#!/bin/sh
#Rafael
#seg abr 27 23:17:36 -03 2020

echo "Listing block categories..."
echo "machine.rst
machine.Pin.rst
machine.Signal.rst
machine.ADC.rst
machine.UART.rst
machine.SPI.rst
machine.I2C.rst
machine.RTC.rst
machine.Timer.rst
machine.WDT.rst
machine.SD.rst
machine.SDCard.rst
#" > listT.txt
lynx -dump https://docs.micropython.org/en/latest/_sources/library/index.txt |grep ".rst$" >> listT.txt

#cat listT.txt | sort | uniq > list.txt

echo "//Automatically generated" > block_definitions.js
echo "//Automatically generated" > generator_stubs.js

echo '<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">' > toolbox.xml

cat block_definitions_custom.js >> block_definitions.js
cat generator_stubs_custom.js >> generator_stubs.js
cat toolbox_custom.xml >> toolbox.xml

    #<block type="exec_python_output">
    #<field name="EXEC_PYTHON_OUTPUT">Execute Python custom with output</field>
    #</block>


echo "<category name=\"micropython\">" >> toolbox.xml

for i in `cat list.txt`;
do
	C=`basename $i .rst`
	echo "Generating blocks for $C"

	echo "<category name=\"$C\">" >> toolbox.xml

	lynx -dump https://docs.micropython.org/en/latest/_sources/library/$C.txt > functions.txt

	cat functions.txt |grep "function:: \| method::" > onlyfunctions.txt
	while read LINE
	do 
		echo "Function: $LINE"
		LINEB=`echo $LINE | awk -F':' '{ print $3 }' | awk -F'(' '{ print $1 }' |sed 's/(//g'`
		echo "LINEB = $LINEB"
		ANAME="${C}_$LINEB"
		BNAME=`echo $ANAME | sed 's/ //g'`

		#if method / function has no parameter
		echo $LINE |grep "()"

		if [ "$?" -eq "0" ];
		then
			#Toolbox.xml
			echo "Block with no parameters"
			echo "<block type=\"$BNAME\">" >> toolbox.xml
			echo "</block>" >> toolbox.xml

			#block_definitions.js
			PDESC=`cat functions.txt |grep "$LINE" -A 3`
			DESC=`echo $PDESC | tr '\r\n' ' ' |sed 's/\"//g'`
			echo "Block description: $DESC"
			
			echo $DESC |grep "Return \| Get \| Read"
			if [ "$?" -eq "0" ];
			then
				echo "Tem return"
				OUTPUT="this.setOutput(true, null);"
    				RET="return [code, Blockly.JavaScript.ORDER_NONE]; ";
			else
				OUTPUT="this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);"
    				RET="return code;"
			fi


			#TODO: go direct to the function with # in the URL
			URL="https://docs.micropython.org/en/latest/library/$C.html"
			echo "
Blockly.Blocks[\"$BNAME\"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(\"$LINEB\");
    this.setColour(0);
    $OUTPUT
 this.setTooltip(\"$DESC\");
 this.setHelpUrl(\"$URL\");
  }
};

" >> block_definitions.js

		#Generator stub
		LINEK=`echo $LINEB | sed 's/ //g'`

		echo "Blockly.Python[\"$BNAME\"] = function(block) {" >> generator_stubs.js
		echo "		Blockly.Python.definitions_['import_$C'] = 'import $C';" >> generator_stubs.js;
		echo -n "	var code = \"${C}.${LINEK}()" >> generator_stubs.js
	        echo -n '\\n' >> generator_stubs.js
		echo -n "\"; 
	$RET
};
" >> generator_stubs.js
		
		else

		#if method / function has ONE parameter
		#echo $LINE |grep ","

		#if [ "$?" -eq "1" ];
		#then
			#Toolbox.xml
			echo "Block with ONE parameters"
			echo "<block type=\"$BNAME\">" >> toolbox.xml
			echo "</block>" >> toolbox.xml

			#block_definitions.js
			PDESC=`cat functions.txt |grep "$LINE" -A 3`
			DESC=`echo $PDESC | tr '\r\n' ' ' |sed 's/\"//g'`
			echo "Block description: $DESC"
			
			echo $DESC |grep "Return \| Get \| Read"
			if [ "$?" -eq "0" ];
			then
				echo "Tem return"
				OUTPUT="this.setOutput(true, null);"
    				RET="return [code, Blockly.JavaScript.ORDER_NONE]; ";
			else
				OUTPUT="this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);"
    				RET="return code;"

			fi


			#TODO: go direct to the function with # in the URL
			URL="https://docs.micropython.org/en/latest/library/$C.html"
			echo "
Blockly.Blocks[\"$BNAME\"] = {
  init: function() {
  this.appendValueInput(\"pIn\")
        .appendField(\"$LINEB\");
        this.setColour(0);
    $OUTPUT
 this.setTooltip(\"$DESC\");
 this.setHelpUrl(\"$URL\");
  }
};

" >> block_definitions.js

		#Generator stub
		LINEK=`echo $LINEB | sed 's/ //g'`
		echo -n "Blockly.Python[\"$BNAME\"] = function(block) {
		var value_pIn = Blockly.Python.valueToCode(block, 'pIn', Blockly.Python.ORDER_ATOMIC);
	var code = \"${C}.${LINEK}(\" + value_pIn + \")" >> generator_stubs.js
	        echo -n '\\n' >> generator_stubs.js
		echo -n "\"; 
	$RET
};
" >> generator_stubs.js
		fi



		echo ""
	done < onlyfunctions.txt




	echo "</category>" >> toolbox.xml
	echo "======"
done

echo "</category>" >> toolbox.xml
echo '</xml>' >> toolbox.xml
