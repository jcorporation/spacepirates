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
{% assign normalized = normalized | remove: '"' %}
{% assign normalized = normalized | replace: 'ö', 'oe' %}
{% assign normalized = normalized | replace: 'ü', 'ue' %}
{% assign normalized = normalized | replace: 'ä', 'ae' %}
{% assign normalized = normalized | replace: 'Ö', 'oe' %}
{% assign normalized = normalized | replace: 'Ü', 'ue' %}
{% assign normalized = normalized | replace: 'Ä', 'ae' %}
{% assign normalized = normalized | replace: 'ß', 'ss' %}
{% for char in chars %}
    {% assign normalized = normalized | remove: char %}
{% endfor %}
{% assign normalized = normalized | replace: '   ', ' ' %}
{% assign normalized = normalized | replace: '  ', ' ' %}

{% if site.data.index_stompkeys[normalized] %}
    {% assign normalized = site.data.index_stompkeys[normalized] %}
{% endif %}

{% if include.mode == "first" %}
    {%if site.data.index[normalized] %}
        {% for uri in site.data.index[normalized] %}
            {% assign luri = uri[0] %}
            {% include printlink_title.md link=luri text=include.data %}
            {% break %}
        {% endfor %}
    {% else %}
        <span data-lookup="{{ normalized }}">{{ include.data }}</span>
    {% endif %}
{% else %}
    <ul data-lookup="{{ normalized }}">
    {%if site.data.index[normalized] %}
        {% for uri in site.data.index[normalized] %}
            {% if page.permalink != uri[0] %}
                {% assign luri = uri[0] %}
                <li>{% include printlink_title.md link=luri %}</li>
            {% endif %}
        {% endfor %}
    {% else %}
        <li>keine Einträge gefunden</li>
    {% endif %}
    </ul>
{% endif %}
