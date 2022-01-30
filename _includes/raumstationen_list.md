<table>
<thead>
<tr><th>Name</th><th>Sektor</th><th>Bewohner</th><th>Politisches</th></tr>
</thead>
<tbody>
{% for station in site.data.Raumstationen %}
    {% assign Name = station[1].Name %}
    {% assign Sektor = station[1].Sektor %}
    {% assign Bewohner = station[1].Bewohner %}
    {% assign Politisches = station[1].Politisches %}
    {% if include.filter_field == '' or station[1][include.filter_field] == include.filter_value or station[1][include.filter_field].Text == include.filter_value %}
        <tr>
            <td>{% include printlink.md data=Name %}</td>
            <td>{% include printlink.md data=Sektor %}</td>
            <td>{% include printlink.md data=Bewohner %}</td>
            <td>{% include printlink.md data=Politisches %}</td>
        </tr>
    {% endif %}
{% endfor %}
</tbody>
</table>
