<ul>
{% for planet in site.data.Planeten %}
    {% assign Name = planet[1].Name %}
    {% assign Link = planet[1].Link %}
    
    {% if include.filter_field == '' or planet[1][include.filter_field] contains include.filter_value %}
        <li>{% include printlink.md data=Name link=Link %}</li>
    {% endif %}
{% endfor %}
</ul>
