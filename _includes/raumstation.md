{% assign Name = include.data.Name %}
{% assign Sektor = include.data.Sektor %}
{% assign Bewohner = include.data.Bewohner %}
{% assign Politisches = include.data.Politisches %}
{% assign Normalized = include.data.Normalized %}
<table>
    <caption>{% include printtext.md data=Name %}</caption>
    <tbody>
        <tr><th>Sektor</th><td>{% include printlink.md data=Sektor %}</td></tr>
        <tr><th>Bewohner</th><td>{% include printlink.md data=Bewohner %}</td></tr>
        <tr><th>Politisches</th><td>{% include printlink.md data=Politisches %}</td></tr>
        <tr><th>Erwähnungen</th><td>{% include lookup.md data=Normalized %}</td></tr>
    </tbody>
</table>
