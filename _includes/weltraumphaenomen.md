{% assign Name = include.data.Name %}
{% assign Sektor = include.data.Sektor %}
{% assign Beschreibung = include.data.Beschreibung %}
{% assign Politisches = include.data.Politisches %}
{% assign Normalized = include.data.Normalized %}
<table>
    <caption>{% include printtext.md data=Name %}</caption>
    <tbody>
        <tr><th>Sektor</th><td>{% include printlink.md data=Sektor %}</td></tr>
        <tr><th>Beschreibung</th><td>{% include printlink.md data=Beschreibung %}</td></tr>
        <tr><th>Politisches</th><td>{% include printlink.md data=Politisches %}</td></tr>
        <tr><th>Erwähnungen</th><td>{% include lookup.md data=Normalized %}</td></tr>
    </tbody>
</table>
