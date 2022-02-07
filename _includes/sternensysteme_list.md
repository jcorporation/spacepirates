<ul>
{% for system in site.data.Sternensysteme %}
    {% assign Name = system[1].Name %}
    {% assign Link = system[1].Link %}

    {% if include.filter_field == '' or system[1][include.filter_field] contains include.filter_value %}
        <li>{% include printlink.md data=Name link=Link %}</li>
    {% endif %}
{% endfor %}
</ul>
