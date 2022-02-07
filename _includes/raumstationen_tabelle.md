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
    {% assign Link = station[1].Link %}
    {% if include.filter_field == '' or station[1][include.filter_field] contains include.filter_value %}
        <tr>
            <td>{% include printlink.md data=Name link=Link %}</td>
            <td>{% include printlink.md data=Sektor type='Sektoren' %}</td>
            <td>{% include printtext.md data=Bewohner %}</td>
            <td>{% include printtext.md data=Politisches %}</td>
        </tr>
    {% endif %}
{% endfor %}
</tbody>
</table>
