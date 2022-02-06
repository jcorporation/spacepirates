<ul>
{% for station in site.data.Raumstationen %}
    {% assign Name = station[1].Name %}
    {% assign Link = station[1].Link %}
    {% if include.filter_field == '' or station[1][include.filter_field] == include.filter_value or station[1][include.filter_field].Text == include.filter_value %}
        <li>{% include printlink.md data=Name link=Link %}</li>
    {% endif %}
{% endfor %}
</ul>
