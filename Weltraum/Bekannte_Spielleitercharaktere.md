---
layout: page
permalink: /Weltraum/Bekannte_Spielleitercharaktere
title: Bekannte Spielleitercharaktere
---

# Bekannte Spielleitercharaktere

Hier eine Zusammenstellung von bekannten Spielleitercharakteren die im Grundregelwerk, Themenheften, SP:Insidern und Abenteuern verstreut sind.

<table>
<thead>
<tr><th>Name</th><th>Rasse</th><th>Wohnort</th><th>Kategorie</th><th>Position</th></tr>
</thead>
<tbody>
{% for slc in site.data.slc %}
    <tr><td>{{ slc.Name | markdownify }}</td><td>{{ slc.Rasse | markdownify }}</td><td>{{ slc.Wohnort }}</td><td>{{ slc.Kategorie }}</td><td>{{ slc.Position }}</td></tr>
{% endfor %}
</tbody>
</table>
