{% assign Name = include.data.Name %}
{% assign Profilwert = include.data.Profilwert %}
{% assign SM = include.data.SM %}
{% assign Schadenspunkte = include.data.Schadenspunkte %}

<table>
    <caption>{{ include.data.Name }}</caption>
    <tbody>
        <tr><th>Profilwert</th><td>{{ include.data.Profilwert  }}</td></tr>
        <tr><th>SM</th><td>{{ include.data.SM }}</td></tr>
        <tr><th>Schadenspunkte</th><td>{{ include.data.Schadenspunkte }}</td></tr>
    </tbody>
</table>
