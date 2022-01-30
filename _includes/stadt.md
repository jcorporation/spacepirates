{% assign Name = include.data.Name %}
{% assign Planet = include.data.Planet %}
{% assign Größe = include.data.Größe %}
{% assign Kategorie = include.data.Kategorie %}
<table>
    <caption>{% include printtext.md data=Name %}</caption>
    <tbody>
        <tr><th>Planet</th><td>{% include printtext.md data=Planet %}</td></tr>
        <tr><th>Größe</th><td>{% include printtext.md data=Größe %}</td></tr>
        <tr><th>Kategorie</th><td>{% include printtext.md data=Kategorie %}</td></tr>
    </tbody>
</table>
