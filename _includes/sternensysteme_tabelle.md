<table>
<thead>
<tr><th>Name</th><th>Sektor</th><th>Politisches</th></tr>
</thead>
<tbody>
{% for system in site.data.Sternensysteme %}
    {% assign Name = system[1].Name %}
    {% assign Sektor = system[1].Sektor %}
    {% assign Politisches = system[1].Politisches %}
    {% if include.filter_field == '' or system[1][include.filter_field] == include.filter_value or system[1][include.filter_field].Text == include.filter_value %}
        <tr>
            <td>{% include printlink.md data=Name %}</td>
            <td>{% include printlink.md data=Sektor %}</td>
            <td>{% include printlink.md data=Politisches %}</td>
        </tr>
    {% endif %}
{% endfor %}
</tbody>
</table>