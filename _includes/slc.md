{% assign Name = inlcude.data.Name %}
{% assign Rasse = inlcude.data.Rasse %}
{% assign Wohnort = inlcude.data.Wohnort %}
{% assign Kategorie = inlcude.data.Kategorie %}
{% assign Position = inlcude.data.Position %}
<table>
    <caption>{% include printtext.md data=Name %}</caption>
    <tbody>
        <tr><th>Rasse</th><td>{% include printtext.md data=Rasse %}</td></tr>
        <tr><th>Wohnort</th><td>{% include printtext.md data=Wohnort %}</td></tr>
        <tr><th>Kategorie</th><td>{% include printtext.md data=Kategorie %}</td></tr>
        <tr><th>Position</th><td>{% include printtext.md data=Position %}</td></tr>
        <tr><th>Erwähnungen</th><td>{% include lookup.md data=Name %}</td></tr>
    </tbody>
</table>
