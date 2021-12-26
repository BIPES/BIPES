rollup:
	npm install rollup \
	rollup-plugin-terser \
	@rollup/plugin-node-resolve \
	@codemirror/basic-setup \
	@codemirror/lang-python \
	@codemirror/lang-markdown
	node_modules/.bin/rollup -c templates/libs/rollup.config.js

flask:
	sudo dnf install python pip
	python -m venv venv
	. venv/bin/activate && \
	pip install Flask && \
	exit

make: rollup flask
	echo "Done, enjoy BIPES :)!"

make run:
	. venv/bin/activate && \
	export FLASK_APP=__init__ && \
	flask run --port=5001 --host=0.0.0.0

clean:
	rm -rf node_modules
	rm -rf static/libs/* package-lock.json
