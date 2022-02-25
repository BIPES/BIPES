{% for item in base -%}
import { {{item}} } from '../../static/base/{{item}}.js'
{% endfor %}

{% for item in page -%}
import { {{item}} } from '../../static/page/{{item}}/main.js'
{% endfor %}

let languages = {}
{% for key, value in available_lang.items() -%}
languages['{{ key }}'] = "{{ value }}"
{% endfor %}

export default function Bipes (){
  window.bipes = {}
  bipes.theme = '{{ theme }}'
  bipes.lang = '{{ lang }}'
  bipes.page = {}

  // Make bipes enviroment acessible
  {% for item in base -%}
  bipes.{{item}} = {{item}}
  {% endfor %}

  {% for item in page -%}
  bipes.page.{{item}} = {{item}}
  {% endfor %}

  bipes.navigation = navigation

  bipes.page.project._init()

  bipes.navigation.init(languages)
}

{% if import_type == "module" -%}
Bipes ()
{% endif %}
