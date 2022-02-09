{%if include.link %}
    {% assign crumbs = include.link | remove_first: "/" | split: '/' %}
    {% assign title = crumbs | join: " › " %}   
    {% if include.data[1] %}
        {% assign text = include.data | join: ", " %}
    {% else %}
        {% assign text = include.data %}
    {%endif %}
    <a title="{{ title }}" href="{{ include.link }}">{{ text }}</a>
{% elsif include.type %}
    {% for text in include.data %}
        {% assign key = text | replace: ' ', '_' %}
        {% assign link = site.data[include.type][key].Link %}
        {% if link %}
            {% assign crumbs = link | remove_first: "/" | split: '/' %}
            {% assign title = crumbs | join: " › " %}
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
