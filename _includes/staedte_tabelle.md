<table>
<thead>
<tr><th>Name</th><th>Planet</th><th>Größe</th><th>Kategorie</th></tr>
</thead>
<tbody>
{% for stadt in site.data.Staedte %}
    {% assign Name = stadt[1].Name %}
    {% assign Planet = stadt[1].Planet %}
    {% assign Groesse = stadt[1].Groesse %}
    {% assign Kategorie = stadt[1].Kategorie %}
    {% if include.filter_field == '' or stadt[1][include.filter_field] == include.filter_value or stadt[1][include.filter_field].Text == include.filter_value %}
        <tr>
            <td>{% include printlink.md data=Name %}</td>
            <td>{% include printlink.md data=Planet %}</td>
            <td>{% include printlink.md data=Groesse %}</td>
            <td>{% include printlink.md data=Kategorie %}</td>
        </tr>
    {% endif %}
{% endfor %}
</tbody>
</table>
