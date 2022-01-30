<table>
<thead>
<tr><th>Name</th><th>Sektor</th><th>Einwohner</th><th>Politisches</th></tr>
</thead>
<tbody>
{% for planet in site.data.Planeten %}
    {% assign Name = planet[1].Name %}
    {% assign Sektor = planet[1].Sektor %}
    {% assign Einwohner = planet[1].Einwohner %}
    {% assign Politisches = planet[1].Politisches %}
    
    {% if include.filter_field == '' or planet[1][include.filter_field] == include.filter_value or planet[1][include.filter_field].Text == include.filter_value %}
        <tr>
            <td>{% include printlink.md data=Name %}</td>
            <td>{% include printlink.md data=Sektor %}</td>
            <td>{% include printlink.md data=Einwohner %}</td>
            <td>{% include printlink.md data=Politisches %}</td>
        </tr>
    {% endif %}
{% endfor %}
</tbody>
</table>
