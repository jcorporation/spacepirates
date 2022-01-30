<table>
<thead>
<tr><th>Name</th><th>Rasse</th><th>Wohnort</th><th>Position</th></tr>
</thead>
<tbody>
{% for slc in include.data %}
    <tr><td>{{ slc[1].Name | markdownify }}</td><td>{{ slc[1].Rasse | markdownify }}</td><td>{{ slc[1].Wohnort }}</td><td>{{ slc[1].Position }}</td></tr>
{% endfor %}
</tbody>
</table>