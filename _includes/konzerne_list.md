<ul>
{% for konzern in site.data.Konzerne %}
    {% assign Name = konzern[1].Name %}

    {% if include.filter_field == '' or konzern[1][include.filter_field] contains include.filter_value %}
        <li>{% include printlink.md data=Name link=Link %}</li>
    {% endif %}
{% endfor %}
</ul>
