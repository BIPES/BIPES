# Embedded WebApp

Interface WebApp para interface com aplicações embarcadas.

## Instalação

O servidor é escrito em Flask e Python deste modo garanta que os requisitos estão instalados.

### Linux
Primeiramente, inicie o ambiente:

```
dnf install python pip
cd path/to/embedded-webapp
python -m venv venv
. venv/bin/activate
```

Agora, dentro do ambiente, instale o Flask
```
pip install Flask
```

Inicie a aplicação

```
export FLASK_APP=__init__
flask run
```

### Windows
Primeiramente, inicie o ambiente:

```
winget install python
cd path/to/project
py -3 -m venv venv
venv/Scripts/activate
```

Agora, dentro do ambiente, instale o Flask

```
pip install Flask
```

Inicie a aplicação

```
$env:FLASK_APP = "__init__"
flask run
````

## Organização

* `__init__.py`: Script principal do servidor Flask
* `static/`: Scripts imutáveis.
* `templates/`: Scripts que são processados na requisição

## Problemas

### Windows
Caso ao executar a página retorne erro de MimeType, verifique as chaves em `HKEY_CLASSES_ROOT\.$\Content Type` no `regedit`, onde `$` é a extensão que está servido o MimeType incorreto, explicação em [github/flask/issue/1045](https://github.com/pallets/flask/issues/1045)

