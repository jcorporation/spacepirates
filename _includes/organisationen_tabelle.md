<table>
<thead>
<tr><th>Name</th><th>Typ</th></tr>
</thead>
<tbody>
{% for slc in site.data.Organisationen %}
    {% assign Name = slc[1].Name %}
    {% assign Typ = slc[1].Typ %}
    {% if include.filter_field == '' or slc[1][include.filter_field] contains include.filter_value %}
        <tr>
            <td>{% include printlink.md data=Name %}</td>
            <td>{% include printtext.md data=Typ %}</td>
        </tr>
    {% endif %}
{% endfor %}
</tbody>
</table>
