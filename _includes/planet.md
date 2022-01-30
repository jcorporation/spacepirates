{% assign Name = include.data.Name %}
{% assign Typ = include.data.Typ %}
{% assign Sektor = include.data.Sektor %}
{% assign Monde = include.data.Monde %}
{% assign Einwohner = include.data.Einwohner %}
{% assign Hauptstadt = include.data.Hauptstadt %}
{% assign Besiedelung = include.data.Besiedelung %}
{% assign Politisches = include.data.Politisches %}
<table>
    <caption>{% include printtext.md data=Name %}</caption>
    <tbody>
        <tr><th>Typ</th><td>{% include printlink.md data=Typ %}</td></tr>
        <tr><th>Sektor</th><td>{% include printlink.md data=Sektor %}</td></tr>
        <tr><th>Monde</th><td>{% include printlink.md data=Monde %}</td></tr>
        <tr><th>Einwohner</th><td>{% include printlink.md data=Einwohner %}</td></tr>
        <tr><th>Hauptstadt</th><td>{% include printlink.md data=Hauptstadt %}</td></tr>
        <tr><th>Besiedelung</th><td>{% include printlink.md data=Besiedelung %}</td></tr>
        <tr><th>Politisches</th><td>{% include printlink.md data=Politisches %}</td></tr>
    </tbody>
</table>
