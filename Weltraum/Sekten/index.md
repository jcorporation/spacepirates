---
layout: page
permalink: /Weltraum/Sekten/
title: Sekten
---

# Sekten

Neben Piraten, Rocker, Mafiosi, Ninjas, Händler, Halunken, Konzerne und verrückte Wissenschaftler gibt es in SpacePirates natürlich auch noch Sekten, die voller Überzeugung die Ungläubigen bekehren und verzweifelte Menschen und Aliens ausnutzen, um möglichst reich und bekannt zu werden.

<ul>
{% for sekte in site.Sekten %}
    <li><a href="{{ site.baseurl }}{{ sekte.permalink }}">{{ sekte.name }}</a></li>
{% endfor %}
</ul>
