<table>
<thead>
<tr><th>Rasse</th><th>Sektor</th><th>Heimatplanet</th></tr>
</thead>
<tbody>
{% for rasse in site.data.Rassen %}
    {% assign Name = rasse[1].Name %}
    {% assign Sektor = rasse[1].Sektor %}
    {% assign Heimatplanet = rasse[1].Heimatplanet %}

    {% if include.filter_field == '' or rasse[1][include.filter_field] contains include.filter_value %}
        <tr>
            <td>{% include printlink.md data=Name link=Link %}</td>
            <td>{% include printlink.md data=Sektor type='Sektoren' %}</td>
            <td>{% include printtext.md data=Heimatplanet type='Planeten' %}</td>
        </tr>
    {% endif %}
{% endfor %}
</tbody>
</table>
