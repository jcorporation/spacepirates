<ul>
{% for system in site.data.Sternensysteme %}
    {% assign Name = system[1].Name %}
    {% if include.filter_field == '' or system[1][include.filter_field] == include.filter_value or system[1][include.filter_field].Text == include.filter_value %}
        <li>{% include printlink.md data=Name %}</li>
    {% endif %}
{% endfor %}
</ul>
