---
layout: page
permalink: /Spielregeln/Die_Piratencrew/Ausruestung/Raumschiffe/FTL-Funk
title: FTL-Funk
order: /003
sitedata:
    Raumschiffe_FTLFunk:
        - Name: FTL10-Funk
          Kosten: 2000
        - Name: FTL20-Funk
          Kosten: 4000
        - Name: FTL30-Funk
          Kosten: 10000
        - Name: FTL40-Funk
          Kosten: 25000
---

Raumschiffe verfügen standardmäßig nur über normalen Funk. FTL-Funk ist in Ausführungen von FTL10 bis FTL40 verfügbar, die Funksprüche verbreiten sich also bis zu 40 Lichtjahren pro Stunde. Schneller geht es beim besten Willen nicht mehr.

<table>
<thead>
<tr><th>Funk</th><th class="text-end">Kosten</th></tr>
</thead>
<tbody>
{% for ftlfunk in page.sitedata.Raumschiffe_FTLFunk %}
    {%- assign kosten=ftlfunk["Kosten"] %}
    <tr><td>{{ ftlfunk["Name"] }}</td><td class="text-end">{%- include number.md data=kosten %}</td></tr>
{% endfor %}
</tbody>
</table>
