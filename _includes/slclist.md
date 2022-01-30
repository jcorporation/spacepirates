<table>
<thead>
<tr><th>Name</th><th>Rasse</th><th>Wohnort</th><th>Position</th></tr>
</thead>
<tbody>
{% for slc in include.data %}
    <tr><td>{{ slc[1].Name | markdownify }}</td><td>{{ slc.Rasse[1] | markdownify }}</td><td>{{ slc.Wohnort[1] }}</td><td>{{ slc.Position[1] }}</td></tr>
{% endfor %}
</tbody>
</table>