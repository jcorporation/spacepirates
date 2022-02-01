{%if include.link %}
    {% assign crumbs = include.link | split: '/' %}
    {% assign title = crumbs | join: " › " | remove_first: " › " %}
    <a title="{{ title }}" href="{{ include.link }}">{{ include.data }}</a>
{% else %}
    {% for text in include.data %}
        {% include lookup.md data=text mode="first" %}
        {% unless forloop.last %}
            ,&nbsp;
        {% endunless %}
    {% endfor %}
{% endif %}
