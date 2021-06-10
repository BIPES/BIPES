DIR=ui
FILES_BLOCKLY1=blockly_compressed.js blocks_compressed.js javascript_compressed.js python_compressed.js media
FILES_WEBREPL=FileSaver.js term.js

git-clone:
	git clone https://github.com/google/blockly.git
	git clone https://github.com/micropython/webrepl.git

copy:
	cd blockly; cp -pr $(FILES_BLOCKLY1) ../$(DIR)/
	cp -pr blockly/msg $(DIR)/b.msg
	cp -p blockly/appengine/storage.js $(DIR)/
	cd webrepl; cp -pr $(FILES_WEBREPL) ../$(DIR)/

copy-bipes-blocks:
	cp bipes_blocks/block_definitions.js ui/
	echo "Please, add <>"

