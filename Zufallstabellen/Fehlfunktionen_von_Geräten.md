---
layout: page
permalink: /Zufallstabellen/Fehlfunktionen_von_Geräten
title: Fehlfunktionen von Geräten
sitedata:
    GeraeteFehlfunktionen:
        - "Rauch tritt aus"
        - "Piepst und blinkt wild"
        - "Wird unglaublich heiß"
        - "Wird extrem kalt"
        - "Vibriert stark"
        - "Wackelkontakt"
        - "Pfeift nervend"
        - "Schmilzt"
        - "Zerspringt in 1000 Teile"
        - "Explodiert"
        - "Rattert"
        - "Klappert"
        - "KI Eingebaut"
        - "Unbekannter Ausnahmefehler"
---

# Fehlfunktionen von Geräten

Hier kann ausgewürfelt werden, was geschieht, wenn ein technisches Gerät kaputt geht.

{% assign nrWoerter = page.sitedata.GeraeteFehlfunktionen.size %}
<table>
<thead>
<tr><th>W{{ nrWoerter }}</th><th>Fehlfunktion</th></tr>
</thead>
<tbody>
{% assign i = 1 %}
{% for wort in page.sitedata.GeraeteFehlfunktionen %}
    <tr><td>{{ i }}</td><td>{{ wort }}</td></tr>
    {% assign i = i | plus: 1 %}
{% endfor %}
</tbody>
</table>
