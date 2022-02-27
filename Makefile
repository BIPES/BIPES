lang ?= "en"
path ?= /srv/www/bipes3

BLUE=\033[0;34m
PURPLE=\033[0;35m
RED=\033[0;31m
NC=\033[0m

DEPS = python pip npm mosquitto
SUSE_DEPS = python python3-pip npm17 mosquitto
NPM_DEPS = jsdoc


all: yn-dependencies umd-deps unpkg blockly pip database yn-mosquitto licenses clean greeting run

yn-dependencies:
	@printf "$(NC)[1/7] The dependencies $(PURPLE)$(DEPS) $(NPM_DEPS)$(NC) are needed.\n"
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
	@printf "[2/7] Fetching and building $(PURPLE)rollup$(NC) amd \
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

unpkg:
	@printf "[3/7] Fetching $(PURPLE)xterm chart.js murri dash.js paho-mqtt$(NC).\n"
	@wget -O static/libs/xterm.umd.js https://unpkg.com/xterm@4.15.0/lib/xterm.js
	@wget -O static/libs/chart.umd.js https://cdn.jsdelivr.net/npm/chart.js@3.7.1/dist/chart.min.js
	@wget -O static/libs/chart-adapter-date-fns.bundle.umd.js https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.bundle.min.js
	@wget -O static/libs/muuri.umd.js https://raw.githubusercontent.com/haltu/muuri/master/dist/muuri.js
	@wget -O static/libs/dash.umd.js  http://cdn.dashjs.org/latest/dash.all.min.js
	@wget -O static/libs/paho-mqtt.umd.js  https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js

blockly:
	@printf "[4/7] Fetching $(PURPLE)blockly$(NC).\n"
	@rm -rf blockly
	@git clone https://github.com/google/blockly.git --depth 1
	@cp blockly/blockly_compressed.js static/libs/blockly.umd.js
	@cp blockly/blocks_compressed.js static/page/blocks/blocks/logic.umd.js
	@mkdir -p static/page/blocks/msg
	@cp blockly/msg/js/en.js static/page/blocks/msg/en.js
	@cp blockly/msg/js/de.js static/page/blocks/msg/de.js
	@cp blockly/msg/js/pt-br.js static/page/blocks/msg/pt-br.js
	@cp blockly/msg/js/es.js static/page/blocks/msg/es.js
	@cp blockly/msg/js/fr.js static/page/blocks/msg/fr.js
	@cp blockly/msg/js/it.js static/page/blocks/msg/it.js
	@cp blockly/msg/js/nb.js static/page/blocks/msg/nb.js
	@cp blockly/msg/js/zh-hans.js static/page/blocks/msg/zh-hans.js
	@cp blockly/msg/js/zh-hant.js static/page/blocks/msg/zh-hant.js
	@mkdir -p static/page/blocks/media
	@cp blockly/media/* static/page/blocks/media
	@rm -rf blockly

pip:
	@printf "[5/7] Creating enviroment and installing $(PURPLE)flask flask-mqtt paho \
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
	@printf "[6/7] $(PURPLE)BIPES$(NC) uses a $(PURPLE)mosquitto$(NC) MQTT broker.\n"
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
	sudo bash -c 'printf  "listener 1883\n\nlistener 9001\nprotocol websockets\nallow_anonymous true\npassword_file /etc/mosquitto/conf.d/passwd\n" > $(MOSQ_BIPES_CONF)'
	@sudo systemctl restart mosquitto
	@. venv/bin/activate && \
	python -c "import server.mosquitto; server.mosquitto.make()" && \
	exit
	@printf "\n"
	@read -p "Enable mosquitto service? (Open port 1883 and start with the OS) [y/N]: " mos2 ; \
	if [ "$$mos2" = 'y' ] || [ "$$mos2" = 'Y' ] ; \
	then \
	sudo sudo firewall-cmd --zone=public --add-port=1883/tcp && \
	sudo firewall-cmd --runtime-to-permanent && \
	sudo systemctl enable mosquitto ; \
	else \
	sudo sudo firewall-cmd --zone=public --remove-port=1883/tcp && \
	sudo firewall-cmd --runtime-to-permanent && \
	sudo systemctl disable mosquitto ; \
	fi

licenses:
	@mkdir -p licenses
	@wget -O licenses/xtermjs.xterm.js-LICENSE https://raw.githubusercontent.com/xtermjs/xterm.js/master/LICENSE
	@wget -O licenses/chartjs.chart.js-LICENSE https://raw.githubusercontent.com/chartjs/Chart.js/master/LICENSE.md
	@wget -O licenses/muuri.muuri.js-LICENSE https://raw.githubusercontent.com/haltu/muuri/master/LICENSE.md
	@wget -O licenses/eclipse.mosquitto_paho-LICENSE https://raw.githubusercontent.com/eclipse/mosquitto/master/LICENSE.txt
	@wget -O licenses/google.blockly-LICENSE https://raw.githubusercontent.com/google/blockly/master/LICENSE
	@wget -O licenses/codemirror.codemirror6-LICENSE  https://raw.githubusercontent.com/codemirror/codemirror.next/master/LICENSE

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
	@rm -rf BIPES.zip && rm -rf .BIPES
	@mkdir -p .BIPES
	@mv ide-*.html .BIPES/
	@cd .BIPES && ln -s ide-$(lang).html ide.html
	@mkdir -p .BIPES/docs
	@mkdir -p .BIPES/static/libs
	@mkdir -p .BIPES/static/page/blocks
	@mkdir -p .BIPES/static/page/device
	@cp static/libs/*.js .BIPES/static/libs
	@cp static/page/blocks/*.umd.js .BIPES/static/page/blocks
	@cp -r static/page/blocks/msg .BIPES/static/page/blocks
	@cp -r static/page/blocks/media .BIPES/static/page/blocks
	@cp -r static/page/blocks/images .BIPES/static/page/blocks
	@cp -r static/page/device/media .BIPES/static/page/device
	@cp -r static/media .BIPES/static/
	@cp -r static/msg .BIPES/static/
	@cp -r docs/_build .BIPES/docs/ 2>/dev/null || :
	@cp static/style.css .BIPES/static
	@mkdir -p .BIPES/server
	@cp -r server/*.py .BIPES/server/
	@cp server/conf/release.py .BIPES/app.py
	@bash -c 'printf  "import sys\nsys.path.insert(0, \"$(path)\")\n\nfrom app import create_app\n\napplication = create_app()\n" > ./.BIPES/app.wsgi'
	@cd .BIPES && zip -y -q -r BIPES.zip * && \
	mv BIPES.zip ../BIPES.zip

build-clean:
	@rm -rf .BIPES
	@rm -rf templates/libs/bipes.temp.js
	@rm -f  ide-*.html
	@rm -f  static/style.css
	@rm -rf static/libs/bipes.umd.js
	@rm -f  static/page/blocks/toolbox.umd.js
	@rm -f  static/page/blocks/blocks.umd.js
	@rm -f  static/page/blocks/pythonic.umd.js

clean: build-clean
	@rm -rf node_modules
	@rm -rf package-lock.json
	@rm -rf package.json
	@printf "$(BLUE)Build files cleared.$(NC)\n"

doc:
	@. venv/bin/activate && \
	cd docs && make html
	@printf "Documentation generated successfully.\n"

deploy:  build-release zip deploy-move build-clean | $(path_venv)

deploy-move:
	@sudo rm -rf $(path)/ide $(path)/static $(path)/server $(path)/docs
	@sudo mkdir -p $(path)
	@sudo mkdir -p ./.BIPES/ide
	@sudo mv ./.BIPES/*.html ./.BIPES/ide
	@sudo mv ./.BIPES/* $(path)
	@sudo mkdir -p $(path)/logs
	@sudo chown -R wwwrun:www $(path)

path_venv = $(path)/venv
$(path_venv):
	@echo "Creating enviroment..."
	@cd $(path) && \
	sudo python3 -m venv venv && \
	. venv/bin/activate && \
	sudo pip install Flask flask-mqtt sphinx sphinx-js furo && \
	exit


help:
	@printf "$(NC)Usage: make [options] $(PURPLE)[params]$(NC) ...\n"
	@printf "Options:\n\
	  all                    Build BIPES from source ${BLUE}[default]${NC}.\n\
	                         Will use either dnf or apt to install the \n\
	                         dependencies, depending on what's available\n\
	                         on your system.\n\
	  release $(PURPLE)lang=LANG$(NC)      Build release, a static, server/serverless \n\
	                         version of BIPES. Use the $(PURPLE)lang$(NC) param to setup \n\
	                         a default language.\n\
	  run                    Run in development mode.\n\
	  clean                  Clean all build files.\n\
	  doc                    Render the documentation into HTML.\n\
	  mosquitto              Setup mosquitto MQTT broker.\n\
	\n\
	Deployment options:\n\
	  deploy $(PURPLE)path=PATH$(NC)       Deploy release to mod_wsgi (Apache).\n\
	                         The $(PURPLE)path$(NC) param sets the deployed version\'s\n\
	                         absolute path.\n\
	                         Make sure to configure Apache beforehand by\n\
	                         following flask\'s deploying mod_wsgi tutorial.\n"
	 
