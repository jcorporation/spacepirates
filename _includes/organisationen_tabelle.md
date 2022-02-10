<table>
<thead>
<tr><th>Name</th><th>Kategorie</th></tr>
</thead>
<tbody>
{% for slc in site.data.Organisationen %}
    {% assign Name = slc[1].Name %}
    {% assign Kategorie = slc[1].Kategorie %}
    {% assign Link = slc[1].Link %}
    {% if include.filter_field == '' or slc[1][include.filter_field] contains include.filter_value %}
        <tr>
            <td>{% include printlink.md data=Name link=Link %}</td>
            <td>{% include printtext.md data=Kategorie %}</td>
        </tr>
    {% endif %}
{% endfor %}
</tbody>
</table>
