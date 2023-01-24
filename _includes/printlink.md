{%if include.link %}
    {% if include.data[1] %}
        {% assign text = include.data | join: ", " %}
    {% else %}
        {% assign text = include.data %}
    {%endif %}
    {% include printlink_title.md link=include.link text=text %}
{% elsif include.type %}
    {% for text in include.data %}
        {% assign key = text | replace: ' ', '_' %}
        {% assign key = key | remove: '.' %}
        {% assign key = key | remove: '"' %}
        {% assign key = key | replace: 'ö', 'oe' %}
        {% assign key = key | replace: 'ü', 'ue' %}
        {% assign key = key | replace: 'ä', 'ae' %}
        {% assign key = key | replace: 'Ö', 'oe' %}
        {% assign key = key | replace: 'Ü', 'ue' %}
        {% assign key = key | replace: 'Ä', 'ae' %}
        {% assign key = key | replace: 'ß', 'ss' %}
        {% assign key = key | replace: '&', 'und' %}

        {% if site.data.data_synonyms[key] %}
            {% assign key = site.data.data_synonyms[key] %}
        {% endif %}

        {% assign link = site.data[include.type][key].Link %}
        {% if link %}
            {% include printlink_title.md link=link text=text %}
        {% else %}
            {{ text }}
        {% endif %}
        {% unless forloop.last %}
            ,&nbsp;
        {% endunless %}
    {% endfor %}
{% else %}
    {% for text in include.data %}
        {% include lookup.md data=text mode="first" %}
        {% unless forloop.last %}
            ,&nbsp;
        {% endunless %}
    {% endfor %}
{% endif %}
