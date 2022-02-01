{% assign phrases = data | downcase | split: " " %}
{% assign normalized = "" %}
{% assign words = "aus|bis|zum|für|hinter|in|im|mehr|zu|nach|vor|dem|an|auf|der|die|das|ein|eine" | split: "|" %}
{% for phrase in phrases %}
    {% assign match = 0 %}
    {% for word in words %}
        {% if phrase == word %}
            {% assign match = 1 %}
        {% endif %} 
        {% if match == 0 %}
            {% assign normalized =  normalized | append: " " | append: phrase %}
        {%endif %}
    {% endfor %}
{% endfor %}


{% assign chars = "'`´,;.-?!():[]|&/" | split: "" %}
{% for char in chars %}
  {% assign normalized = normalized | replace: char %}
{% endfor %}


<ul data-lookup="{{ normalized }}">
{%if site.data.searchindex[normalized] %}
    {% for uri in site.data.searchindex[normalized] %}
        {% if page.permalink != uri[0] %}
            {% assign crumbs = uri[0] | split: '/' %}
            <li><a title="{{ crumbs | join: " › " }}" href="{{ uri[0] }}">{{ crumbs | last }}</a></li>
        {% endif %}
    {% endfor %}
{% else %}
    <li>keine Einträge gefunden</li>
{% endif %}
</ul>
