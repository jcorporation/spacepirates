---
layout: aside
permalink: /Weltraum/Weltraumtiere
title: Weltraumtiere
---

{% for weltraumtier in site.Weltraumtiere %}
  <h2>{{ weltraumtier.name }}</h2>
  {{ weltraumtier.content | markdownify }}
{% endfor %}

***

## Spielwerte der Weltraumtiere

<table>
<thead>
<tr><th>Weltraumtier</th><th>Profilwert</th><th>Schadensmodifikator</th><th>Schadenspunkte</th></tr>
</thead>
<tbody>
{% for weltraumtier in site.data.Weltraumtiere %}
<tr>
<td>{{ weltraumtier[1].Name }}</td>
<td>{{ weltraumtier[1].Profilwert }}</td>
<td>{{ weltraumtier[1].SM }}</td>
<td>{{ weltraumtier[1].Schadenspunkte }}</td>
</tr>
{% endfor %}
</tbody>
</table>

Weltraumtiere kämpfen mit ihrem Profilwert und der Schadensmodifikator funktioniert wie bei Raumschiffwaffen. Unter normalen Umständen fliehen sie, wenn sie die Hälfte ihrer Schadenspunkte verloren haben.
