{%if include.link %}
    {% assign crumbs = include.link | remove_first: "/" | split: '/' %}

    {% assign link = "/" %}
    {% assign title = "" %}
    {% for l in crumbs %}
        {% if forloop.last %}
            {% assign link = link | append: l %}
            {% assign title = title | append: site.data.sitemap[link].title %}
        {% else %}
            {% assign link = link | append: l | append: "/" %}
            {% assign title = title | append: site.data.sitemap[link].title | append: " › " %}
        {% endif %}
    {% endfor %}

    {% if include.data[1] %}
        {% assign text = include.data | join: ", " %}
    {% else %}
        {% assign text = include.data %}
    {%endif %}
    <a title="{{ title }}" href="{{ include.link }}">{{ text }}</a>
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
            {% assign crumbs = link | remove_first: "/" | split: '/' %}
            {% assign clink = "/" %}
            {% assign title = "" %}
            {% for l in crumbs %}
                {% if forloop.last %}
                    {% assign title = title | append: site.data.sitemap[link].title %}
                {% else %}
                    {% assign clink = clink | append: l | append: "/" %}
                    {% assign title = title | append: site.data.sitemap[clink].title | append: " › " %}
                {% endif %}
            {% endfor %}
            <a title="{{ title }}" href="{{ link }}">{{ text }}</a>
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
