<table>
<thead>
<tr><th>Name</th><th>Rasse</th><th>Wohnort</th><th>Position</th></tr>
</thead>
<tbody>
{% for slc in include.data %}
    {% assign Name = slc[1].Name %}
    {% assign Rasse = slc[1].Rasse %}
    {% assign Wohnort = slc[1].Wohnort %}
    {% assign Position = slc[1].Position %}
    <tr>
        <td>{% include printlink.md data=Name %}</td>
        <td>{% include printlink.md data=Rasse %}</td>
        <td>{% include printlink.md data=Wohnort %}</td>
        <td>{% include printlink.md data=Position %}</td>
    </tr>
{% endfor %}
</tbody>
</table>