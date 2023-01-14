---
layout: page
permalink: /Zufallstabellen/KI-Eigenschaften
title: KI-Eigenschaften
sitedata:
    KiEigenschaften:
        - "Mütterlich und überfürsorglich"
        - "Ängstlich und vorsichtig"
        - "Abenteuerlustig"
        - "Spielt gern den Pausenclown"
        - "Besserwisserisch und eingebildet"
        - "Stottert"
        - "Überschätzt sich selbst"
        - "Bürokratisch"
        - "Schüchtern"
        - "Extrem euphorisch"
        - "Kommt nicht zum Punkt"
---

# Eigenschaft einer KI

Hier kann ausgewürfelt werden, wie sich eine KI gegenüber den Spielercharakteren verhält.

{% assign nrWoerter = page.sitedata.KiEigenschaften.size %}
<table>
<thead>
<tr><th>W{{ nrWoerter }}</th><th>Eigenschaft</th></tr>
</thead>
<tbody>
{% assign i = 1 %}
{% for wort in page.sitedata.KiEigenschaften %}
    <tr><td>{{ i }}</td><td>{{ wort }}</td></tr>
    {% assign i = i | plus: 1 %}
{% endfor %}
</tbody>
</table>
