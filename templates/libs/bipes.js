{% for item in base -%}
import { {{item}} } from '../../static/base/{{item}}.js'
{% endfor %}

{% for item in page -%}
import { {{item}} } from '../../static/page/{{item}}/main.js'
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

  bipes.channel._init()
  bipes.navigation = navigation

  bipes.page.project._init()
  bipes.navigation.init()
}

{% if import_type == "module" -%}
Bipes ()
{% endif %}
