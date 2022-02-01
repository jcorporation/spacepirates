{% assign phrases = include.data | downcase | split: " " %}

{% assign normalized = "" %}
{% assign words = "aus|bis|zum|für|hinter|in|im|mehr|zu|nach|vor|dem|an|auf|der|die|das|ein|eine" | split: "|" %}
{% for phrase in phrases %}
    {% assign match = 0 %}
    {% for word in words %}
        {% if phrase == word %}
            {% assign match = 1 %}
            {% break %}
        {% endif %} 
    {% endfor %}
    {% if match == 0 %}
        {% assign normalized =  normalized | append: " " | append: phrase %}
    {%endif %}
{% endfor %}

{% assign normalized = normalized | remove_first: " " %}

{% assign chars = "'`´,;.-?!():[]|&/" | split: "" %}
{% for char in chars %}
  {% assign normalized = normalized | remove: char %}
{% endfor %}

{% if include.mode == "first"}
    {% assign link = site.data.searchindex[normalized][0][0] %}
    {%if link %}
        {% assign crumbs = link | split: '/' %}
        {% assign title = crumbs | join: " › " | remove_first: " › " %}
        <a title="{{ title }}" href="{{ link }}">{{ include.data }}</a>
    {% else %}
        {{ include.data }}
    {% endif %}
{% else %}
    <ul data-lookup="{{ normalized }}">
    {%if site.data.searchindex[normalized] %}
        {% for uri in site.data.searchindex[normalized] %}
            {% if page.permalink != uri[0] %}
                {% assign crumbs = uri[0] | split: '/' %}
                {% assign title = crumbs | join: " › " | remove_first: " › " %}
                <li><a title="{{ title }}" href="{{ uri[0] }}">{{ crumbs | last | replace: "_", " " }}</a></li>
            {% endif %}
        {% endfor %}
    {% else %}
        <li>keine Einträge gefunden</li>
    {% endif %}
    </ul>
{% endif %}