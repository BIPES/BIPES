{% for item in base %}
import { {{item}} } from '../../static/base/{{item}}.js'{% endfor %}

{% for item in navigation %}
import { {{item.href}} } from '../../static/pages/{{item.href}}.js'{% endfor %}

export default function Bipes (){
  window.bipes = {}
  window.bipes.page = {}

  // Make bipes enviroment acessible
  {% for item in base %}
  window.bipes.{{item}} = {{item}}{% endfor %}

  {% for item in navigation %}
  window.bipes.page.{{item.href}} = {{item.href}}{% endfor %}

  window.bipes.navigation = navigation

  window.bipes.page.project._init()
  window.bipes.navigation.init()
}

{% if import_type == "module" %}
Bipes ()
{% endif %}
