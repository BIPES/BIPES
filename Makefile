PROJECT=bipes

lang ?= "en"
path ?= "/var/www/bipes3"
chown ?= "www-data:www-data"
database ?= "sqlite"

DEPS = python pip npm mosquitto
UBUNTU_DEPS = python3 python3-pip python3-venv npm mosquitto
FEDORA_DEPS = python3 python3-pip npm mosquitto
SUSE_DEPS = python python3-pip npm17 mosquitto
NPM_DEPS = jsdoc

BLOCKLY_VERSION = 7.20211209.4

all: yn-dependencies umd-deps unpkg blockly pip database conf-ini yn-mosquitto licenses clean greeting run

yn-dependencies:
	@printf "$(NC)The dependencies $(PURPLE)$(DEPS) $(NPM_DEPS)$(NC) are needed.\n"
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
	sudo dnf install $(FEDORA_DEPS) ; \
	elif [ -n "$$(command -v apt)" ] ; \
	then \
	printf "$(BLUE)Installing $(DEPS) with apt.$(NC)\n" ; \
	sudo apt install $(UBUNTU_DEPS) ; \
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
	@printf "Fetching and building $(PURPLE)rollup$(NC) and \
	$(PURPLE)codemirror$(NC) with npm.\n"
	@npm install rollup@2.70.1 \
	rollup-plugin-terser@7.0.2 \
	@rollup/plugin-node-resolve@13.1.3 \
	@codemirror/view@0.19.47 \
	@codemirror/state@0.19.9 \
	@codemirror/history@0.19.2 \
	@codemirror/fold@0.19.3 \
	@codemirror/language@0.19.8 \
	@codemirror/gutter@0.19.9 \
	@codemirror/commands@0.19.8 \
	@codemirror/matchbrackets@0.19.4 \
	@codemirror/closebrackets@0.19.1 \
	@codemirror/search@0.19.9 \
	@codemirror/autocomplete@0.19.14 \
	@codemirror/comment@0.19.1 \
	@codemirror/rectangular-selection@0.19.1 \
	@codemirror/highlight@0.19.7 \
	@codemirror/lint@0.19.6 \
	@codemirror/lang-python@0.19.4 \
	@codemirror/lang-markdown@0.19.6 \
	@codemirror/theme-one-dark@0.19.1
	@node_modules/.bin/rollup -c templates/libs/rollup.config.codemirror.js

unpkg:
	@printf "Fetching $(PURPLE)xterm.js chart.js murri dash.js paho-mqtt shortcuts.js$(NC).\n"
	@wget -O static/libs/xterm.umd.js https://unpkg.com/xterm@4.15.0/lib/xterm.js
	@wget -O static/libs/chart.umd.js https://cdn.jsdelivr.net/npm/chart.js@3.7.1/dist/chart.min.js
	@wget -O static/libs/chart-adapter-date-fns.bundle.umd.js https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.bundle.min.js
	@wget -O static/libs/muuri.umd.js https://raw.githubusercontent.com/haltu/muuri/master/dist/muuri.js
	@wget -O static/libs/dash.umd.js  http://cdn.dashjs.org/latest/dash.all.min.js
	@wget -O static/libs/paho-mqtt.umd.js  https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js
	@wget -O static/libs/shortcuts.umd.js  http://www.openjs.com/scripts/events/keyboard_shortcuts/shortcut.js

blockly:
	@printf "Fetching $(PURPLE)blockly$(NC).\n"
	@rm -rf blockly
	git clone -b $(BLOCKLY_VERSION) https://github.com/google/blockly.git --depth 1
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
	@printf "Creating enviroment and installing $(PURPLE)flask \
	flask-mqtt paho psycopg sphinx sphinx-js furo$(NC).\n"
	@python3 -m venv venv
	@. venv/bin/activate && \
	pip install Flask flask-mqtt paho-mqtt sphinx sphinx-js furo psycopg && \
	exit

database:
	@. venv/bin/activate && \
	python -c "import server.sqlite.api; server.sqlite.api.make()" && \
	exit
	@. venv/bin/activate && \
	python -c "import server.sqlite.mqtt; server.sqlite.mqtt.make()" && \
	exit

conf-ini:
	@KEY=$$(cat /proc/sys/kernel/random/uuid | sed 's/[-]//g' | head -c 20) ; \
	. venv/bin/activate && \
	python -c "import app; app.conf_ini(flask_passwd='$$KEY')" && \
	exit

yn-mosquitto:
	@printf "$(PURPLE)BIPES$(NC) uses a $(PURPLE)mosquitto$(NC) MQTT broker.\n"
	@read -p "Setup mosquitto? (requires sudo) [y/N]: " mos ; \
	if [ "$$mos" = 'y' ] || [ "$$mos" = 'Y' ] ; \
	then \
	make mosquitto --no-print-directory ; \
	else  \
	printf "$(BLUE)Mosquitto setup skipped, setup later with $(PURPLE)make mosquitto.$(NC)\n" ; \
	fi


MOSQ_BIPES_CONF = /etc/mosquitto/conf.d/bipes.conf

mosquitto:
ifndef WSLENV
	@read -s -p "New password (mosquitto): " pwd ; \
	printf "\n" ; \
	sudo mosquitto_passwd -c -b /etc/mosquitto/conf.d/passwd bipes $$pwd ; \
	. venv/bin/activate && \
	python -c "import app; app.conf_ini(mosquitto_passwd='$$pwd')" && \z
	exit
else
	@KEY2=$$(cat /proc/sys/kernel/random/uuid | sed 's/[-]//g' | head -c 10) ; \
	echo "$(RED)Attention:$(NC) Password $$KEY2 auto set for Mosquitto under WSL2, you can change at server/conf.ini and /etc/mosquitto/conf.d/passwd." && \
	sudo bash -c 'printf  "$$KEY2" > /etc/mosquitto/conf.d/passwd' && \
	. venv/bin/activate && \
	python -c "import app; app.conf_ini(mosquitto_passwd='$$KEY2')" && \
	exit 
endif
	@sudo bash -c 'printf  "allow_anonymous false\nlistener 1883\n\nlistener 9001\nprotocol websockets\npassword_file /etc/mosquitto/conf.d/passwd" > $(MOSQ_BIPES_CONF)'
	@printf "\n"
ifndef WSLENV
	@read -p "Open port 1883 and 9001? (\"N\" will close them if already open) [y/N]: " mos2 ; \
	if [ "$$mos2" = 'y' ] || [ "$$mos2" = 'Y' ] ; \
	then \
	sudo sudo firewall-cmd --zone=public --add-port=1883/tcp && \
	sudo sudo firewall-cmd --zone=public --add-port=9001/tcp && \
	sudo firewall-cmd --runtime-to-permanent ; \
	else \
	sudo sudo firewall-cmd --zone=public --remove-port=1883/tcp && \
	sudo sudo firewall-cmd --zone=public --remove-port=9001/tcp && \
	sudo firewall-cmd --runtime-to-permanent ; \
	fi
endif
ifdef WSLENV
	@read -p "Start mosquitto service? (\"N\" will stop it if already running) [y/N]: " mos3 ; \
	if [ "$$mos3" = 'y' ] || [ "$$mos3" = 'Y' ] ; \
	then \
	sudo service mosquitto start; \
	else \
	sudo service mosquitto stop ; \
	fi
else
	@read -p "Enable and start mosquitto service? (\"N\" will disable it if already enabled) [y/N]: " mos3 ; \
	if [ "$$mos3" = 'y' ] || [ "$$mos3" = 'Y' ] ; \
	then \
	sudo systemctl enable mosquitto && \
	sudo systemctl start  mosquitto  ; \
	else \
	sudo systemctl disable mosquitto && \
	sudo systemctl stop    mosquitto  ; \
	fi
endif

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
	export FLASK_DEBUG=1 && \
	export FLASK_APP="app:create_app('$(database)')" && \
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
	@mv static/libs/serviceworker.temp.js .BIPES/static/libs/serviceworker.js
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
	@cp -r server/common .BIPES/server/common
	@cp -r server/postgresql .BIPES/server/postgresql
	@cp -r server/sqlite .BIPES/server/sqlite
	@cp server/release.py .BIPES/app.py
	@bash -c 'printf  "import sys\nsys.path.insert(0, \"$(path)\")\n\nfrom app import create_app\n\napplication = create_app(\"$(database)\")\n" > ./.BIPES/app.wsgi'
	@cd .BIPES && zip -y -q -r BIPES.zip * && \
	mv BIPES.zip ../BIPES.zip

build-clean:
	@rm -rf .BIPES
	@rm -rf templates/libs/bipes.temp.js
	@rm -f  ide-*.html
	@rm -f  static/style.css
	@rm -rf static/libs/bipes.umd.js
	@rm -f  static/libs/serviceworker.temp.js
	@rm -f  static/page/blocks/toolbox.umd.js
	@rm -f  static/page/blocks/blocks.umd.js
	@rm -f  static/page/blocks/pythonic.umd.js

clean: build-clean
	@rm -rf node_modules
	@rm -rf package-lock.json
	@rm -rf package.json
	@printf "$(BLUE)Build files cleared.$(NC)\n"

.PHONY: docs
docs:
	rm -rf docs/_build
	@. venv/bin/activate && \
	cd docs && make html
	@printf "Documentation generated successfully.\n"

DEPLOY-DEPS = postgresql postgresql-server postgresql-contrib postgresql-plpython

deploy:  build-release zip deploy-move build-clean | $(path_venv)

deploy-move:
	@[ -f $(path)/server/conf.ini ] && sudo mv $(path)/server/conf.ini $(path)/server_conf.ini || true
	@sudo rm -rf $(path)/ide $(path)/static $(path)/server $(path)/docs
	@sudo mkdir -p $(path)
	@sudo mkdir -p ./.BIPES/ide
	@sudo mv ./.BIPES/*.html ./.BIPES/ide
	@sudo rm -f $(path)/app.py $(path)/app.wsgi
	@sudo mv ./.BIPES/* $(path)
	@[ -f $(path)/server_conf.ini ] && sudo mv $(path)/server_conf.ini $(path)/server/conf.ini || true
	@sudo mkdir -p $(path)/logs
	@sudo chown -R $(chown) $(path)

path_venv = $(path)/venv
$(path_venv):
	@echo "Creating enviroment..."
	@cd $(path) && \
	sudo python3 -m venv venv && \
	. venv/bin/activate && \
	sudo pip install Flask flask-mqtt sphinx sphinx-js furo psycopg psycopg_c && \
	exit

#------------------------------------------------------------------------------
# Help&appearance stuff
#------------------------------------------------------------------------------

help:
	@printf "$(NC)Usage: make [options] $(PURPLE)[params]$(NC) ...\n"
	@printf "  Options:\n\
    all                     Build BIPES from source ${BLUE}[default]${NC}.\n\
                            Will use either dnf, apt or zypper to install \n\
                            the dependencies, depending on what's available\n\
                            on your system.\n\
    release $(PURPLE)lang=LANG$(NC)       Build release, a static, server/serverless \n\
                            version of the platform.\n\
    run $(PURPLE)database=DB$(NC)         Run in development mode.\n\
    clean                   Clean all build files.\n\
    docs                    Render the documentation into HTML.\n\
    mosquitto               Setup mosquitto MQTT broker.\n\
    \n\
  Deployment options:\n\
    deploy $(PURPLE)path=PATH$(NC)        Deploy release to mod_wsgi (Apache).\n\
           $(PURPLE)database=DB$(NC)      Make sure to configure Apache beforehand by\n\
           $(PURPLE)chown=USER:GROUP$(NC) following flask\'s deploying mod_wsgi tutorial.\n\
    docker-*                Execute a command inside containers, e.g. docker-run.\n\
  \n\
  Docker/container specific:\n\
    docker-build            Generate developement containers for the first time.\n\
                            Both development and mosquitto MQTT Broker containers.\n\
    docker-run              Run in development mode inside containers.\n\
                            Docker compose is used to manage the containers.\n\
    docker-login            Access development container shell.\n\
    docker-release          Build release inside containers.\n\
  \n\
  Parameters:\n\
    path=PATH               The deployed version\'s absolute $(PURPLE)path$(NC),\n\
                            if not provided, defaults to $(BLUE)/var/www/bipes3$(NC).\n\
    chown=USER:GROUP        The user and group of the WSGI server, \n\
                            if not provided, defaults to $(BLUE)www-data:www-data$(NC).\n\
    database=DB             The $(PURPLE)database$(NC) program to use: $(BLUE)sqlite$(NC) or $(BLUE)postgresql$(NC),\n\
                            if not provided, defaults to $(BLUE)sqlite$(NC).\n\
    lang=LANG               The $(PURPLE)lang$(NC)uage to set the release start page,\n\
                            if not provided, defaults to $(BLUE)en$(NC).\n"

BLUE=\033[0;34m
PURPLE=\033[0;35m
RED=\033[0;31m
NC=\033[0m

#------------------------------------------------------------------------------
# Docker commands
#------------------------------------------------------------------------------

DOCKER_REPO       =${PROJECT}
DOCKER_IMAGE      =${PROJECT}_build
DOCKER_VERSION   ?=latest
DOCKER_SHELL     ?=bash
DOCKER_RUN_EXTRA ?=

IF_DOCKER_RUNS=$(shell docker container inspect -f '{{.State.Running}}' ${DOCKER_IMAGE} 2>/dev/null)

DOCKER_RUN_PARAMS = -it --rm --name=${PROJECT} \
		--name=${DOCKER_IMAGE} \
		-p 5001:5001 \
		--workdir=/${PROJECT} \
		--mount type=bind,source=${CURDIR},target=/${PROJECT} \
		${DOCKER_RUN_EXTRA} \
		${DOCKER_REPO}/${DOCKER_IMAGE}:${DOCKER_VERSION}

docker-login:
	@if [ "${IF_DOCKER_RUNS}" != "true" ]; then \
		docker run --add-host=host.docker.internal:host-gateway \
			${DOCKER_RUN_PARAMS} \
			${DOCKER_SHELL}; \
	else \
		docker exec -it ${DOCKER_IMAGE} \
			${DOCKER_SHELL}; \
	fi

docker-build: docker_build_compose docker_build_mosquitto greeting

docker_build_compose:
	@printf "🔨 $(BLUE)Building containers images...$(NC)\n"
	@docker compose -f docker/docker-compose.yml -p bipes build
	@printf "Provide a password for $(PURPLE)mosquitto$(NC) MQTT broker.\n"
	@read -s -p "New password (mosquitto): " pwd ; \
	printf "\n" ; \
	printf  "bipes:$$pwd" > docker/mosquitto-passwd ; \
	printf "📦️ $(BLUE)Initing project with tools in container...$(NC)\n" ; \
	docker run --env PASSWD=$$pwd \
		${DOCKER_RUN_PARAMS} \
		${DOCKER_SHELL} -c \
		"make umd-deps unpkg blockly pip database conf-ini docker_build_webapp_mosquitto licenses clean"
		
docker-run:
	@docker compose -f docker/docker-compose.yml -p bipes up

docker-release:
	@docker run ${DOCKER_RUN_PARAMS} \
		${DOCKER_SHELL} -c \
		"make release"

docker_build_mosquitto:
	@docker run -it --rm --name eclipse-mosquitto \
		--workdir=/docker\
		--mount type=bind,source=${CURDIR}/docker,target=/docker \
		eclipse-mosquitto \
		sh -c \
		"mosquitto_passwd -U mosquitto-passwd"

docker_build_webapp_mosquitto:
	. venv/bin/activate && \
	python -c "import app; app.conf_ini(mosquitto_passwd='${PASSWD}',mosquitto_host='172.20.0.1')" && \
	exit
	@bash -c 'printf  "allow_anonymous false\nlistener 1883\n\nlistener 9001\nprotocol websockets\npassword_file /etc/mosquitto/conf.d/passwd" > docker/mosquitto.conf'


