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
{% for system in site.data.Sternensysteme %}
    <tr><td>{{ system[1].Name | markdownify }}</td><td>{{ system[1].Sektor | markdownify }}</td><td>{{ system[1].Politisches }}</td></tr>
{% endfor %}
</tbody>
</table>

## Planeten

{% include planeten_list  filter_field='' filter_value='' %}
