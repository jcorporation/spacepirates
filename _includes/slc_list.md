<ul>>
{% for slc in include.data %}
    {% assign Name = slc[1].Name %}
    <li>{% include printlink.md data=Name %}</li>
{% endfor %}
</ul>