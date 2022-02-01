{% assign Name = include.data.Name %}
{% assign Planet = include.data.Planet %}
{% assign Groesse = include.data.Groesse %}
{% assign Kategorie = include.data.Kategorie %}
<table>
    <caption>{% include printtext.md data=Name %}</caption>
    <tbody>
        <tr><th>Planet</th><td>{% include printtext.md data=Planet %}</td></tr>
        <tr><th>Größe</th><td>{% include printtext.md data=Groesse %}</td></tr>
        <tr><th>Kategorie</th><td>{% include printtext.md data=Kategorie %}</td></tr>
        <tr><th>Erwähnungen</th><td>{% include lookup.md data=Name %}</td></tr>
    </tbody>
</table>
