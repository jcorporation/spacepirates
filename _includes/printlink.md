{%if include.link %}
    {% assign crumbs = include.link | split: '/' %}
    {% assign title = crumbs | join: " › " | remove_first: " › " %}
    <a title="{{ title }}" href="{{ include.link }}">{{ include.data }}</a>
{%elsif include.type %}
    {% assign key = include.data | replace: ' ', '_' %}
    {% assign link = site.data[include.type][key].Link %}
    {% if link %}
        {% assign crumbs = link | split: '/' %}
        {% assign title = crumbs | join: " › " | remove_first: " › " %}
        <a title="{{ title }}" href="{{ link }}">{{ include.data }}</a>
    {% else %}
        {{ include.data }}
    {% endif %}
{% else %}
    {% for text in include.data %}
        {% include lookup.md data=text mode="first" %}
        {% unless forloop.last %}
            ,&nbsp;
        {% endunless %}
    {% endfor %}
{% endif %}
