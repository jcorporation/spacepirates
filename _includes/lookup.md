{% assign phrases = data | downcase | split: " " %}
{% assign normalized = "" %}
{% for phrase in phrases %}
    {% assign words = "aus|bis|zum|für|hinter|in|im|mehr|zu|nach|vor|dem|an|auf|der|die|das|ein|eine" | split: "|" %}
    {% assign match = 0 %}
    {% for word in words %}
        {% if phrase == word %}
            {% assign match = 1 %}
        {% endif %} 
        {% if match == 0 %}
            {% assign normalized =  normalized | append: phrase %}
        {%endif %}
    {% endfor %}
{% endfor %}


{% assign chars = "'`´\",;.-?!():[]|&/" | split: "" %}
{% for char in chars %}
  {% assign normalized = normalized | replace: char %}
{% endfor %}


<ul>
{%if site.data.searchindex[include.data] %}
    {% for uri in site.data.searchindex[include.data] %}
        {% if page.permalink != uri[0] %}
            {% assign crumbs = uri[0] | split: '/' %}
            <li><a href="{{ uri[0] }}">{{ crumbs | last }}</a></li>
        {% endif %}
    {% endfor %}
{% else %}
    <li>keine Einträge gefunden</li>
{% endif %}
</ul>
