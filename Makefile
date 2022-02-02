lang ?= "en"

BLUE=\033[0;34m
PURPLE=\033[0;35m
RED=\033[0;31m
NC=\033[0m

DEPS = python pip npm mosquitto
SUSE_DEPS = python python3-pip npm17 mosquitto

all: yn-dependencies codemirror xterm blockly flask clean database yn-mosquitto greeting run

yn-dependencies:
	@printf "$(NC)[1/6] The dependencies $(PURPLE)$(DEPS)$(NC) are needed.\n"
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
	printf "$(BLUE)Installing with dnf.$(NC)\n" ; \
	sudo dnf install $(DEPS) ; \
	elif [ -n "$$(command -v apt)" ] ; \
	then \
	printf "$(BLUE)Installing with apt.$(NC)\n" ; \
	sudo apt install $(DEPS) ; \
	elif [ -n "$$(command -v zypper)" ] ; \
	then \
	printf "$(BLUE)Installing with zypper.$(NC)\n" ; \
	sudo zypper install $(SUSE_DEPS) ; \
	else \
	printf "$(RED)No package installed! Neither dnf, apt or zypper package \
	managers have been found.$(NC)" ; \
	fi

greeting:
	@printf "😄 $(NC)Thanks for giving $(PURPLE)BIPES$(NC) a try!\n"

codemirror:
	@printf "[2/6] Fetching and building $(PURPLE)rollup$(NC) and \
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

flask:
	@printf "[5/6] Creating enviroment and installing $(PURPLE)flask$(NC), \
	$(PURPLE)sphinx$(NC) and $(PURPLE)sphinx-js$(NC).\n"
	@python3 -m venv venv
	@. venv/bin/activate && \
	pip install Flask sphinx sphinx-js && \
	exit

database:
	@. venv/bin/activate && \
	cd server && python -c "import database; database.make()" && \
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
	sudo mosquitto_passwd -c -b /etc/mosquitto/passwd bipes $$pwd ; \
	echo  "$$pwd" > server/mosquitto.txt
	@if [ ! -e $(MOSQ_BIPES_CONF) ]; then \
	sudo bash -c 'echo  "allow_anonymus false\npasswod_file /etc/mosquitto/passwd" >> $(MOSQ_BIPES_CONF)' ; \
	fi
	@sudo systemctl restart mosquitto
	@. venv/bin/activate && \
	cd server && python -c "import mosquitto; mosquitto.make()" && \
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


release: build-release zip clean
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
	@cp static/libs/* .BIPES/static/
	@cp static/libs/blockly/* .BIPES/static/blockly
	@cp -r static/media .BIPES/static/
	@cp -r static/msg .BIPES/static/
	@cp static/style.css .BIPES/static/
	@cd .BIPES && zip -y -q -r BIPES.zip * && \
	mv BIPES.zip ../BIPES.zip
	@rm -rf .BIPES


clean:
	@rm -rf node_modules
	@rm -rf blockly
	@rm -rf package-lock.json
	@rm -rf package.json
	@rm -rf templates/libs/bipes.temp.js
	@rm -f  ide-*.html
	@rm -f  static/style.css
	@rm -rf static/libs/bipes.umd.js
	@rm -f  static/libs/blockly/toolbox.umd.js
	@rm -f  static/libs/blockly/blocks.js
	@rm -f  static/libs/blockly/pythonic.js
	@printf "$(BLUE)Build files cleared.$(NC)\n"


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
	 
