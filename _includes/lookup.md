{% assign phrases = include.data | downcase | split: " " %}

{% assign normalized = "" %}
{% assign words = "aus|bis|zum|für|hinter|in|im|mehr|zu|nach|vor|dem|an|auf|der|die|das|ein|eine" | split: "|" %}
{% assign start = 1 %}
{% for phrase in phrases %}
    {% assign match = 0 %}
    {% if start == 1 %}
        {% for word in words %}
            {% if phrase == word %}
                {% assign match = 1 %}
                {% break %}
            {% endif %} 
        {% endfor %}
    {% endif %}
    {% if match == 0 %}
        {% assign start = 0 %}
        {% assign normalized =  normalized | append: " " | append: phrase %}
    {%endif %}
{% endfor %}

{% assign normalized = normalized | remove_first: " " %}

{% assign chars = "'`´,;.-?!():[]|&/#{}" | split: "" %}
{% assign normalized = normalized | remove: char '"' %}
{% assign normalized = normalized | replace: 'ö', 'oe' %}
{% assign normalized = normalized | replace: 'ü', 'ue' %}
{% assign normalized = normalized | replace: 'ä', 'ae' %}
{% assign normalized = normalized | replace: 'Ö', 'oe' %}
{% assign normalized = normalized | replace: 'Ü', 'ue' %}
{% assign normalized = normalized | replace: 'Ä', 'ae' %}
{% assign normalized = normalized | replace: 'ß', 'ss' %}
{% assign normalized = normalized | replace: '&', 'und' %}
{% for char in chars %}
    {% assign normalized = normalized | remove: char %}
{% endfor %}

{% if site.data.index_stompkeys[normalized] %}
    {% assign normalized = site.data.index_stompkeys[normalized] %}
{% endif %}

{% if include.mode == "first" %}
    {%if site.data.index[normalized] %}
        {% for uri in site.data.index[normalized] %}
            {% assign crumbs = uri[0] | split: '/' %}
            {% assign title = crumbs | join: " › " | remove_first: " › " %}
            <a title="{{ title }}" href="{{ uri[0] }}">{{ include.data }}</a>
            {% break %}
        {% endfor %}
    {% else %}
        {{ include.data }}
    {% endif %}
{% else %}
    <ul data-lookup="{{ normalized }}">
    {%if site.data.index[normalized] %}
        {% for uri in site.data.index[normalized] %}
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