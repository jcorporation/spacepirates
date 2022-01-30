<table>
<thead>
<tr><th>Name</th><th>Rasse</th><th>Wohnort</th><th>Position</th></tr>
</thead>
<tbody>
{% for slc in include.data %}
    <tr><td>{{ slc[1].Name | markdownify }}</td><td>{{ slc.Rasse | markdownify }}</td><td>{{ slc.Wohnort }}</td><td>{{ slc.Position }}</td></tr>
{% endfor %}
</tbody>
</table>