{% for item in base -%}
import { {{item}} } from '../../static/base/{{item}}.js'
{% endfor %}

{% for item in page -%}
import { {{item}} } from '../../static/page/{{item}}/main.js'
{% endfor %}

export default function Bipes (){
  window.bipes = {}
  window.bipes.theme = '{{ theme }}'
  window.bipes.lang = '{{ lang }}'
  window.bipes.page = {}

  // Make bipes enviroment acessible
  {% for item in base -%}
  window.bipes.{{item}} = {{item}}
  {% endfor %}

  {% for item in page -%}
  window.bipes.page.{{item}} = {{item}}
  {% endfor %}

  window.bipes.navigation = navigation

  window.bipes.page.project._init()
  window.bipes.navigation.init()
}

{% if import_type == "module" -%}
Bipes ()
{% endif %}
