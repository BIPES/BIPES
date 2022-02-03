lang ?= "en"

BLUE=\033[0;34m
PURPLE=\033[0;35m
RED=\033[0;31m
NC=\033[0m

DEPS = python pip npm mosquitto
SUSE_DEPS = python python3-pip npm17 mosquitto
NPM_DEPS = jsdoc


all: yn-dependencies umd-deps xterm blockly pip database yn-mosquitto clean greeting run

yn-dependencies:
	@printf "$(NC)[1/6] The dependencies $(PURPLE)$(DEPS) $(NPM_DEPS)$(NC) are needed.\n"
	@read -p "Install dependencies? (requires sudo) [y/N]: " dep ; \
	if [ "$$dep" = 'y' ] || [ "$$dep" = 'Y' ] ; \
	then \
	make dependencies --no-print-directory ; \
	else  \
	printf "$(BLUE)Depedencies install skipped.$(NC)\n" ; \
	fi

dependencies:
	@if [ -n "$$(command -v dnf)" ] ; \
	then \
	printf "$(BLUE)Installing $(DEPS) with dnf.$(NC)\n" ; \
	sudo dnf install $(DEPS) ; \
	elif [ -n "$$(command -v apt)" ] ; \
	then \
	printf "$(BLUE)Installing $(DEPS) with apt.$(NC)\n" ; \
	sudo apt install $(DEPS) ; \
	elif [ -n "$$(command -v zypper)" ] ; \
	then \
	printf "$(BLUE)Installing $(DEPS) with zypper.$(NC)\n" ; \
	sudo zypper install $(SUSE_DEPS) ; \
	else \
	printf "$(RED)No package installed! Neither dnf, apt or zypper package \
	managers have been found.$(NC)" ; \
	fi
	@printf "$(BLUE)Installing $(NPM_DEPS) with npm.$(NC)\n"
	@sudo npm install -g $(NPM_DEPS)

greeting:
	@printf "😄 $(NC)Thanks for giving $(PURPLE)BIPES$(NC) a try!\n"

umd-deps:
	@printf "[2/6] Fetching and building $(PURPLE)rollup$(NC) amd \
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

xterm:
	@printf "[3/6] Fetching $(PURPLE)xterm$(NC).\n"
	@wget -O static/libs/xterm.umd.js https://unpkg.com/xterm@4.15.0/lib/xterm.js

blockly:
	@printf "[4/6] Fetching $(PURPLE)blockly$(NC).\n"
	@git clone https://github.com/google/blockly.git --depth 1
	@cp blockly/blockly_compressed.js static/libs/blockly/blockly.umd.js
	@cp blockly/blocks_compressed.js static/libs/blockly/blocks/logic.umd.js
	@mkdir -p static/libs/blockly/msg
	@cp blockly/msg/js/en.js static/libs/blockly/msg/en.js
	@cp blockly/msg/js/de.js static/libs/blockly/msg/de.js
	@cp blockly/msg/js/pt-br.js static/libs/blockly/msg/pt-br.js
	@cp blockly/msg/js/es.js static/libs/blockly/msg/es.js
	@mkdir -p static/media/blocks
	@cp blockly/media/* static/media/blocks/
	@rm -rf blockly

pip:
	@printf "[5/6] Creating enviroment and installing $(PURPLE)flask flask-mqtt paho \
	sphinx sphinx-js furo$(NC).\n"
	@python3 -m venv venv
	@. venv/bin/activate && \
	pip install Flask flask-mqtt sphinx sphinx-js furo && \
	exit

database:
	@. venv/bin/activate && \
	python -c "import server.api; server.api.make()" && \
	exit

yn-mosquitto:
	@printf "[6/6] $(PURPLE)BIPES$(NC) uses a $(PURPLE)mosquitto$(NC) MQTT broker.\n"
	@read -p "Setup mosquitto? (requires sudo) [y/N]: " mos ; \
	if [ "$$mos" = 'y' ] || [ "$$mos" = 'Y' ] ; \
	then \
	make mosquitto --no-print-directory ; \
	else  \
	printf "$(BLUE)Mosquitto setup skipped, setup later with $(PURPLE)make mosquitto.$(NC)\n" ; \
	fi


MOSQ_BIPES_CONF = /etc/mosquitto/conf.d/bipes.conf

mosquitto:
	@read -s -p "New password (mosquitto): " pwd;\
	printf "\n" ; \
	sudo mosquitto_passwd -c -b /etc/mosquitto/conf.d/passwd bipes $$pwd ; \
	echo  "$$pwd" > server/mosquitto.txt ; \
	sudo bash -c 'printf  "allow_anonymous false\npassword_file /etc/mosquitto/conf.d/passwd \n" > $(MOSQ_BIPES_CONF)'
	@sudo systemctl restart mosquitto
	@. venv/bin/activate && \
	python -c "import server.mosquitto; server.mosquitto.make()" && \
	exit
	@printf "\n"
	@read -p "Enable mosquitto service? (Starts with the OS) [y/N]: " mos2 ; \
	if [ "$$mos2" = 'y' ] || [ "$$mos2" = 'Y' ] ; \
	then \
	sudo systemctl enable mosquitto ; \
	else \
	sudo systemctl disable mosquitto ; \
	fi


run:
	@printf "Running $(PURPLE)BIPES$(NC) in development mode.\n"
	@. venv/bin/activate && \
	export FLASK_ENV=development && \
	export FLASK_APP=app && \
	flask run --port=5001 --host=0.0.0.0


release: build-release zip build-clean
	@printf "😄 $(PURPLE)BIPES$(NC) release is ready!\n"

build-release:
	@. venv/bin/activate && \
	python -c "import app; app.build_release()" && \
	exit
	@npm install rollup \
	rollup-plugin-terser
	@node_modules/.bin/rollup -c templates/libs/rollup.config.bipes.js

zip:
	@rm -rf BIPES.zip
	@mkdir -p .BIPES
	@cp ide-*.html .BIPES/
	@cd .BIPES && ln -s ide-$(lang).html ide.html
	@mkdir -p .BIPES/static/libs/blockly
	@cp static/libs/*.js .BIPES/static/libs
	@cp static/libs/blockly/*.js .BIPES/static/libs/blockly
	@cp -r static/libs/blockly/msg .BIPES/static/libs/blockly
	@cp -r static/media .BIPES/static/
	@cp -r static/msg .BIPES/static/
	@cp static/style.css .BIPES/static
	@cd .BIPES && zip -y -q -r BIPES.zip * && \
	mv BIPES.zip ../BIPES.zip

build-clean:
	@rm -rf .BIPES
	@rm -rf templates/libs/bipes.temp.js
	@rm -f  ide-*.html
	@rm -f  static/style.css
	@rm -rf static/libs/bipes.umd.js
	@rm -f  static/libs/blockly/toolbox.umd.js
	@rm -f  static/libs/blockly/blocks.js
	@rm -f  static/libs/blockly/pythonic.js

clean: build-clean
	@rm -rf node_modules
	@rm -rf package-lock.json
	@rm -rf package.json
	@printf "$(BLUE)Build files cleared.$(NC)\n"

doc:
	@. venv/bin/activate && \
	cd docs && make html  

help:
	@printf "$(NC)Usage: make [options] $(PURPLE)[params]$(NC) ...\n"
	@printf "Options:\n\
	 all			Build BIPES from source ${BLUE}[default]${NC}.\n\
	 			Will use either dnf or apt to install the \n\
	 			dependencies, depending on what's available\n\
	 			on your system.\n\
	 release $(PURPLE)lang=LANG$(NC)	Build release, a static, server/serverless \n\
	 			version of BIPES. Use the $(PURPLE)lang$(NC) param to setup \n\
	 			a default language.\n\
	 run                    Run in development mode.\n\
	 clean			Clean all build files.\n\
	 doc                    Render the documentation into HTML.\n\
	 mosquitto              Setup mosquitto MQTT broker.\n"
	 
