<table>
<thead>
<tr><th>Name</th><th>Kategorie</th></tr>
</thead>
<tbody>
{% for org in site.data.Organisationen %}
    {% assign Name = org[1].Name %}
    {% assign Kategorie = org[1].Kategorie %}
    {% assign Link = org[1].Link %}
    {% if include.filter_field == '' or org[1][include.filter_field] contains include.filter_value %}
        <tr>
            <td>{% include printlink.md data=Name link=Link %}</td>
            <td>{% include printtext.md data=Kategorie %}</td>
        </tr>
    {% endif %}
{% endfor %}
</tbody>
</table>
