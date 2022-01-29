---
layout: page
permalink: /Weltraum/Planeten_und_Sternensysteme
title: Planeten und Sternensysteme
---

# Planeten und Sternensysteme

Hier sind alle wichtigen Planeten und Sternensysteme des SpacePirates Universums aufgelistet.

## Sternensysteme

## Planeten

<table>
<thead>
<tr><th>Name</th><th>Sektor</th><th>Einwohner</th><th>Politisches</th></tr>
</thead>
<tbody>
{% for planet in site.data.planeten %}
    <tr><td>{{ planet.Name }}</td><td>{{ planet.Sektor }}</td><td>{{ planet.Einwohner }}</td><td>{{ planet.Politisches }}</td></tr>
{% endfor %}
</tbody>
</table>
