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

<table>
<thead>
<tr><th>Name</th><th>Sektor</th><th>Einwohner</th><th>Politisches</th></tr>
</thead>
<tbody>
{% for planet in site.data.Planeten %}
    {% assign Name = planet[1].Name %}
    {% assign Sektor = planet[1].Sektor %}
    {% assign Einwohner = planet[1].Name %}
    {% assign Politisches = planet[1].Name %}
    <tr>
        <td>{% include printlink.md data=Name %}</td>
        <td>{% include printlink.md data=Sektor %}</td>
        <td>{% include printlink.md data=Einwohner %}</td>
        <td>{% include printlink.md data=Politisches %}</td>
    </tr>
{% endfor %}
</tbody>
</table>
