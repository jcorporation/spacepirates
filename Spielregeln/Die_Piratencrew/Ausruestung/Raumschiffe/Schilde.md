---
layout: page
permalink: /Spielregeln/Die_Piratencrew/Ausruestung/Raumschiffe/Schilde
title: Schilde
order: /001
sitedata:
    Raumschiffe_Schilde:
        - Name: Kleiner Schild
          Schildwert: 4
          Kosten: 12000
        - Name: Mittlerer Schild
          Schildwert: 6
          Kosten: 16000
        - Name: Großer Schild
          Schildwert: 8
          Kosten: 20000
        - Name: Militärschild
          Schildwert: 16
          Kosten: 50000
---

Schilde schützen das Raumschiff vor Schadenspunkten und sind überlebenswichtig. Ein Raumschiff kann immer nur mit einem Schild ausgestattet sein.

<table>
<thead>
<tr><th>Schild</th><th class="text-center">Schildwert</th><th class="text-end">Kosten</th></tr>
</thead>
<tbody>
{% for schild in page.sitedata.Raumschiffe_Schilde %}
    {%- assign kosten=schild["Kosten"] %}
    <tr><td>{{ schild["Name"] }}</td><td class="text-center">{{ schild["Schildwert"] }}</td><td class="text-end">{%- include number.md data=kosten %}</td></tr>
{% endfor %}
</tbody>
</table>
