make: codemirror xterm blockly flask clean greeting run

greeting:
	@echo "Thanks for using BIPES 😄!"

codemirror:
	@npm install rollup \
	rollup-plugin-terser \
	@rollup/plugin-node-resolve \
	@codemirror/view \
	@codemirror/state \
	@codemirror/history \
	@codemirror/fold \
	@codemirror/language \
	@codemirror/gutter \
	@codemirror/commands \
	@codemirror/matchbrackets \
	@codemirror/closebrackets \
	@codemirror/search \
	@codemirror/autocomplete \
	@codemirror/comment \
	@codemirror/rectangular-selection \
	@codemirror/highlight \
	@codemirror/lint \
	@codemirror/lang-python \
	@codemirror/lang-markdown \
	@codemirror/theme-one-dark
	@node_modules/.bin/rollup -c templates/libs/rollup.config.codemirror.js

xterm:
	@wget -O static/libs/xterm.umd.js https://unpkg.com/xterm@4.15.0/lib/xterm.js

blockly:
	@git clone https://github.com/google/blockly.git --depth 1
	@cp blockly/blockly_compressed.js static/libs/blockly/blockly.umd.js
	@cp blockly/blocks_compressed.js static/libs/blockly/blocks.umd.js
	@mkdir -p static/libs/blockly/msg
	@cp blockly/msg/js/en.js static/libs/blockly/msg/en.js
	@cp blockly/msg/js/de.js static/libs/blockly/msg/de.js
	@cp blockly/msg/js/pt-br.js static/libs/blockly/msg/pt-br.js
	@cp blockly/msg/js/es.js static/libs/blockly/msg/es.js
	@mkdir -p static/media/blocks
	@cp blockly/media/* static/media/blocks/
	@rm -rf blockly

flask:
	@python -m venv venv
	@. venv/bin/activate && \
	pip install Flask && \
	exit

run:
	@. venv/bin/activate && \
	export FLASK_APP=__init__ && \
	flask run --port=5001 --host=0.0.0.0


release: build-release zip clean
	@echo "BIPES release is ready 😄!"

build-release:
	@. venv/bin/activate && \
	python -c "import __init__; __init__.build_release()"
	@npm install rollup \
	rollup-plugin-terser
	@node_modules/.bin/rollup -c templates/libs/rollup.config.bipes.js

zip:
	@rm -rf BIPES.zip
	@mkdir -p .BIPES
	@cp ide.html .BIPES
	@mkdir -p .BIPES/static
	@cp -r static/libs .BIPES/static/
	@cp -r static/media .BIPES/static/
	@cp -r static/msg .BIPES/static/
	@cp -r static/style .BIPES/static/
	@cd .BIPES && zip -q -r BIPES.zip * && \
	mv BIPES.zip ../BIPES.zip
	@rm -rf .BIPES


clean:
	@rm -rf node_modules
	@rm -rf blockly
	@rm -rf package-lock.json
	@rm -rf package.json
	@rm -rf templates/libs/bipes.temp.js
	@rm -rf ide.html
	@rm -rf static/libs/bipes.umd.js
