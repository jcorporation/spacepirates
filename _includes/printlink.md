{%if include.link %}
    <a href="{{ include.link}}">{{ include.data }}</a>
{% else %}
    {% for text in include.data %}
        {% include lookup.md data=text mode=first %}
        {% unless forloop.last %}
            ,&nbsp;
        {% endunless %}
    {% endfor %}
{% endif %}
