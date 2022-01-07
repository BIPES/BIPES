codemirror:
	npm install rollup \
	rollup-plugin-terser \
	@rollup/plugin-node-resolve \
	@codemirror/view \
	@codemirror/basic-setup \
	@codemirror/lang-python \
	@codemirror/lang-markdown \
	@codemirror/theme-one-dark
	node_modules/.bin/rollup -c templates/libs/rollup.config.js

xterm:
	wget -O static/libs/xterm.umd.js https://unpkg.com/xterm@4.15.0/lib/xterm.js

blockly:
	git clone https://github.com/google/blockly.git --depth 1
	cp blockly/blockly_compressed.js static/libs/blockly/blockly.umd.js
	cp blockly/blocks_compressed.js static/libs/blockly/blocks.umd.js
	mkdir -p static/libs/blockly/msg
	cp blockly/msg/js/en.js static/libs/blockly/msg/en.js
	cp blockly/msg/js/de.js static/libs/blockly/msg/de.js
	cp blockly/msg/js/pt-br.js static/libs/blockly/msg/pt-br.js
	cp blockly/msg/js/es.js static/libs/blockly/msg/es.js
	mkdir -p static/media/blocks
	cp blockly/media/* static/media/blocks/
	rm -rf blockly

flask:
	python -m venv venv
	. venv/bin/activate && \
	pip install Flask && \
	exit

run:
	. venv/bin/activate && \
	export FLASK_APP=__init__ && \
	flask run --port=5001 --host=0.0.0.0

blockly-toolbox:
	echo "to be implemented"

clean-up:
	rm -rf node_modules
	rm -rf blockly
	rm -rf package-lock.json


make: codemirror xterm blockly flask blockly-toolbox clean-up run
	echo "Thanks for using BIPES :)!"
	
