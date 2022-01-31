<ul>
{% for planet in site.data.Planeten %}
    {% assign Name = planet[1].Name %}
    {% if include.filter_field == '' or planet[1][include.filter_field] == include.filter_value or planet[1][include.filter_field].Text == include.filter_value %}
        <li>{% include printlink.md data=Name %}</li>
    {% endif %}
{% endfor %}
</ul>
