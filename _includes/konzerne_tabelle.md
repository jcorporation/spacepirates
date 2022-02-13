<table>
<thead>
<tr><th>Name</th><th>Kategorie</th><th>Konzernzentrale</th></tr>
</thead>
<tbody>
{% for konzern in site.data.Konzerne %}
    {% assign Name = konzern[1].Name %}
    {% assign Kategorie = konzern[1].Kategorie %}
    {% assign Konzernzentrale = konzern[1].Konzernzentrale %}
    {% assign Link = konzern[1].Link %}

    {% if include.filter_field == '' or konzern[1][include.filter_field] contains include.filter_value %}
        <tr>
            <td>{% include printlink.md data=Name link=Link %}</td>
            <td>{% include printtext.md data=Kategorie %}</td>
            <td>{% include printlink.md data=Konzernzentrale type="Planeten" %}</td>
        </tr>
    {% endif %}
{% endfor %}
</tbody>
</table>
