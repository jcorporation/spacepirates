<table>
<thead>
<tr><th>Name</th><th>Sektor</th><th>Einwohner</th><th>Politisches</th></tr>
</thead>
<tbody>
{% for planet in site.data.Planeten %}
    {% assign Name = planet[1].Name %}
    {% assign Sektor = planet[1].Sektor %}
    {% assign Einwohner = planet[1].Einwohner %}
    {% assign Hauptstadt = planet[1].Hauptstadt %}
    {% assign Politisches = planet[1].Politisches %}
    {% assign Link = planet[1].Link %}

    {% if include.filter_field == '' or planet[1][include.filter_field] == include.filter_value or planet[1][include.filter_field].Text == include.filter_value %}
        <tr>
            <td>{% include printlink.md data=Name link=Link %}</td>
            <td>{% include printlink.md data=Sektor type='Sektoren' %}</td>
            <td>{% include printtext.md data=Einwohner %}</td>
            <td>{% include printlink.md data=Hauptstadt type='Staedte' %}</td>
            <td>{% include printtext.md data=Politisches %}</td>
        </tr>
    {% endif %}
{% endfor %}
</tbody>
</table>
