{% assign Name = include.data.Name %}
{% assign Sektor = include.data.Sektor %}
<table>
    <caption>{% include printtext.md data=Name %}</caption>
    <tbody>
        <tr><th>Sektor</th><td>{% include printlink.md data=Sektor %}</td></tr>
    </tbody>
</table>
