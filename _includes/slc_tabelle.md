<table>
<thead>
<tr><th>Name</th><th>Rasse</th><th>Wohnort</th><th>Kategorie</th><th>Position</th></tr>
</thead>
<tbody>
{% for slc in site.data.Slc %}
    {% assign Name = slc[1].Name %}
    {% assign Rasse = slc[1].Rasse %}
    {% assign Wohnort = slc[1].Wohnort %}
    {% assign Kategorie = slc[1].Kategorie %}
    {% assign Position = slc[1].Position %}
    {% assign Link = slc[1].Link %}
    {% if include.filter_field == '' or slc[1][include.filter_field] contains include.filter_value %}
        <tr>
            <td>{% include printlink.md data=Name link=Link %}</td>
            <td>{% include printlink.md data=Rasse type='Rassen' %}</td>
            <td>{% include printlink.md data=Wohnort %}</td>
            <td>{% include printtext.md data=Kategorie %}</td>
            <td>{% include printtext.md data=Position %}</td>
        </tr>
    {% endif %}
{% endfor %}
</tbody>
</table>
