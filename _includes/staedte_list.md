<ul>
{% for stadt in site.data.Staedte %}
    {% assign Name = stadt[1].Name %}
    {% assign Link = stadt[1].Link %}
    {% if include.filter_field == '' or stadt[1][include.filter_field] == include.filter_value or stadt[1][include.filter_field].Text == include.filter_value %}
        <li>{% include printlink.md data=Name link=Link %}</li>
    {% endif %}
{% endfor %}
</li>
