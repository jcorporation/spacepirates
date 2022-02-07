<ul>
{% for phaenomen in site.data.Weltraumphaenomene %}
    {% assign Name = phaenomen[1].Name %}
    {% assign Link = phaenomen[1].Link %}
    
    {% if include.filter_field == '' or phaenomen[1][include.filter_field] contains include.filter_value %}
        <li>{% include printlink.md data=Name link=Link %}</li>
    {% endif %}
{% endfor %}
</ul>
