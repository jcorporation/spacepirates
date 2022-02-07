<table>
<thead>
<tr><th>Name</th><th>Hauptplanet</th></tr>
</thead>
<tbody>
{% for sektor in site.data.Sektoren %}
    {% assign Name = sektor[1].Name %}
    {% assign Hauptplanet = sektor[1].Hauptplanet %}

    {% if include.filter_field == '' or sektor[1][include.filter_field] contains include.filter_value %}
        <tr>
            <td>{% include printlink.md data=Name link=Link %}</td>
            <td>{% include printlink.md data=Hauptplanet type='Planeten' %}</td>
        </tr>
    {% endif %}
{% endfor %}
</tbody>
</table>
