{% assign Name = include.data.Name %}
{% assign Sektor = include.data.Sektor %}
{% assign Zentralgestirn = include.data.Zentralgestirn %}
{% assign Planeten = include.data.Planeten %}
{% assign Bewohner = include.data.Bewohner %}
{% assign Politisches = include.data.Politisches %}
<table>
    <caption>{% include printtext.md data=Name %}</caption>
    <tbody>
        <tr><th>Sektor</th><td>{% include printlink.md data=Sektor type='Sektoren' %}</td></tr>
        <tr><th>Zentralgestirn</th><td>{% include printtext.md data=Zentralgestirn %}</td></tr>
        <tr><th>Planeten</th><td>{% include printlink.md data=Planeten type='Planeten' %}</td></tr>
        <tr><th>Bewohner</th><td>{% include printtext.md data=Bewohner %}</td></tr>
        <tr><th>Politisches</th><td>{% include printtext.md data=Politisches %}</td></tr>
        <tr><th>Erwähnungen</th><td>{% include lookup.md data=Name %}</td></tr>
    </tbody>
</table>