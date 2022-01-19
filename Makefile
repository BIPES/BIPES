lang ?= "en"

BLUE=\033[0;34m
PURPLE=\033[0;35m
RED=\033[0;31m
NC=\033[0m

DEPS = python pip npm mosquitto

all: dependencies codemirror xterm blockly flask clean greeting run

dependencies:
	@printf "$(NC)The dependencies $(PURPLE)$(DEPS)$(NC) are needed.\n"
	@read -p "[1/5] Install dependencies? (requires sudo) [y/N]:" dep ; \
	if [ "$$dep" = 'y' ] || [ "$$dep" = 'Y' ] ; \
	then \
	make deps --no-print-directory ; \
	else  \
	printf "$(BLUE)Depedencies install skipped.$(NC)\n" ; \
	fi

deps:
	@if [ -n "$$(command -v dnf)" ] ; \
	then \
	printf "$(BLUE)Installing with dnf.$(NC)\n" ; \
	sudo dnf install $(DEPS) ; \
	elif [ -n "$$(command -v apt)" ] ; \
	then \
	printf "$(BLUE)Installing with apt.$(NC)\n" ; \
	sudo apt install $(DEPS) ; \
	else \
	printf "$(RED)No package installed! Neither apt or dnf package managers \
	have been found.$(NC)" ; \
	fi

greeting:
	@printf "😄 $(NC)Thanks for using $(PURPLE)BIPES$(NC)!\n"

codemirror:
	@printf "[2/5] Fetching and builing $(PURPLE)rollup$(NC) and \
	$(PURPLE)codemirror$(NC) with npm.\n"
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
	@printf "[3/5] Fetching $(PURPLE)xterm$(NC).\n"
	@wget -O static/libs/xterm.umd.js https://unpkg.com/xterm@4.15.0/lib/xterm.js

blockly:
	@printf "[4/5] Fetching $(PURPLE)blockly$(NC).\n"
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
	@printf "[5/5] Creating enviroment and installing $(PURPLE)flask$(NC), \
	$(PURPLE)sphinx$(NC) and $(PURPLE)sphinx-js$(NC).\n"
	@python -m venv venv
	@. venv/bin/activate && \
	pip install Flask sphinx sphinx-js && \
	exit

run:
	@printf "Running $(PURPLE)BIPES$(NC) in development mode.\n"
	@. venv/bin/activate && \
	export FLASK_ENV=development && \
	export FLASK_APP="__init__" && \
	flask run --port=5001 --host=0.0.0.0


release: build-release zip clean
	@printf "😄 $(PURPLE)BIPES$(NC) release is ready!\n"

build-release:
	@. venv/bin/activate && \
	python -c "import __init__; __init__.build_release()"
	@npm install rollup \
	rollup-plugin-terser
	@node_modules/.bin/rollup -c templates/libs/rollup.config.bipes.js

zip:
	@rm -rf BIPES.zip
	@mkdir -p .BIPES
	@cp ide-*.html .BIPES/
	@cd .BIPES && ln -s ide-$(lang).html ide.html
	@mkdir -p .BIPES/static
	@cp -r static/libs .BIPES/static/
	@cp -r static/media .BIPES/static/
	@cp -r static/msg .BIPES/static/
	@cp -r static/style .BIPES/static/
	@cd .BIPES && zip -y -q -r BIPES.zip * && \
	mv BIPES.zip ../BIPES.zip
	@rm -rf .BIPES


clean:
	@rm -rf node_modules
	@rm -rf blockly
	@rm -rf package-lock.json
	@rm -rf package.json
	@rm -rf templates/libs/bipes.temp.js
	@rm -rf ide-*.html
	@rm -rf static/libs/bipes.umd.js
	@printf "$(BLUE)Build files cleared.$(NC)\n"


help:
	@printf "$(NC)Usage: make [options] $(PURPLE)[params]$(NC) ...\n"
	@printf "Options:\n\
	 all			Build project ${BLUE}[default]${NC}.\n\
	 			Will use either dnf or apt to install the \n\
	 			dependencies, depending on what's available\n\
	 			on your system.\n\
	 release $(PURPLE)lang=LANG$(NC)	Build release, a static, server/serverless \n\
	 			version of BIPES. Use the $(PURPLE)lang$(NC) param to setup \n\
	 			a default language.\n\
	 clean			Clean all build files.\n\
	 doc			Render the documentation into HTML with $(PURPLE)sphinx$(NC).\n"
