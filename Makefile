DIR=ui/core
FILES_BLOCKLY1=blockly_compressed.js blocks_compressed.js javascript_compressed.js python_compressed.js media
FILES_WEBREPL=FileSaver.js term.js

git-clone:
	if [ ! -d "blockly" ]; then \
		git clone https://github.com/google/blockly.git; \
	else \
		echo "O diretório 'blockly' já existe, pulando clonagem."; \
	fi

copy:
	cd blockly; cp -pr $(FILES_BLOCKLY1) ../$(DIR)/
	cp -pr blockly/msg $(DIR)/b.msg
	cp -p blockly/appengine/storage.js $(DIR)/
	cd webrepl; cp -pr $(FILES_WEBREPL) ../$(DIR)/

copy-bipes-blocks:
	cp bipes_blocks/block_definitions.js ui/
	echo "Please, add <>"



offline:
	echo "Generating offline version"
	echo > ui/index_offline.html
	cat ui/index.html >> ui/index_offline.html
	for i in ui/toolbox/*.xml ; do \
		echo "Including file $$i" ; \
		echo -n "<document style='display: none' id='"OFFLINE_ >> ui/index_offline.html ; \
		echo -n $$i | sed -e 's/[\/\.]/_/g' -e 's/ui_//g' >> ui/index_offline.html ; \
		echo  "'>" >> ui/index_offline.html ;\
		cat $$i | grep -v "<document>" >> ui/index_offline.html ; \
	done
	echo "<script>" >> ui/index_offline.html
	echo "OFFLINE_devinfo_devinfo_json = \`" >> ui/index_offline.html
	cat ui/devinfo/devinfo.json >> ui/index_offline.html
	echo "\`;" >> ui/index_offline.html
	echo "</script>" >> ui/index_offline.html
	zip -q -r bipes_offline.zip *

 doc:
	cd docs && make html
