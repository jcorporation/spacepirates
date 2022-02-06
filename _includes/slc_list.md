<ul>
{% for slc in site.data.Slc %}
    {% assign Name = slc[1].Name %}
    {% assign Link = slc[1].Link %}
    {% if include.filter_field == '' or slc[1][include.filter_field] == include.filter_value or slc[1][include.filter_field].Text == include.filter_value %}
        <li>{% include printlink.md data=Name link=Link %}</li>
    {% endif %}
{% endfor %}
</ul>
