<table>
<thead>
<tr><th>Name</th><th>Sektor</th><th>Politisches</th></tr>
</thead>
<tbody>
{% for phaenomen in site.data.Weltraumphaenomene %}
    {% assign Name = phaenomen[1].Name %}
    {% assign Sektor = phaenomen[1].Sektor %}
    {% if include.filter_field == '' or phaenomen[1][include.filter_field] == include.filter_value or phaenomen[1][include.filter_field].Text == include.filter_value %}
        <tr>
            <td>{% include printlink.md data=Name %}</td>
            <td>{% include printlink.md data=Sektor %}</td>
        </tr>
    {% endif %}
{% endfor %}
</tbody>
</table>
