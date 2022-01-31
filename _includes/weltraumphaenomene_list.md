<ul>
{% for phaenomen in site.data.Weltraumphaenomene %}
    {% assign Name = phaenomen[1].Name %}
    {% if include.filter_field == '' or phaenomen[1][include.filter_field] == include.filter_value or phaenomen[1][include.filter_field].Text == include.filter_value %}
        <li>{% include printlink.md data=Name %}</li>
    {% endif %}
{% endfor %}
</ul>
