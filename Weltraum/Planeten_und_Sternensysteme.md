---
layout: page
permalink: /Weltraum/Planeten_und_Sternensysteme
title: Planeten und Sternensysteme
---

# Planeten und Sternensysteme

Hier sind alle wichtigen Planeten und Sternensysteme des SpacePirates Universums aufgelistet.

## Sternensysteme

<table>
<thead>
<tr><th>Name</th><th>Sektor</th><th>Politisches</th></tr>
</thead>
<tbody>
{% for system in site.data.sternensysteme %}
    <tr><td>{{ system[1].Name | markdownify }}</td><td>{{ system[1].Sektor | markdownify }}</td><td>{{ system[1].Politisches }}</td></tr>
{% endfor %}
</tbody>
</table>

## Planeten

<table>
<thead>
<tr><th>Name</th><th>Sektor</th><th>Einwohner</th><th>Politisches</th></tr>
</thead>
<tbody>
{% for planet in site.data.planeten %}
    <tr><td>{{ planet[1].Name | markdownify }}</td><td>{{ planet[1].Sektor | markdownify }}</td><td>{{ planet[1].Einwohner }}</td><td>{{ planet[1].Politisches }}</td></tr>
{% endfor %}
</tbody>
</table>
