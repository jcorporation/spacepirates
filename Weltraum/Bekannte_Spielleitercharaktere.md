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
{% for slc in site.data.Slc %}
    <tr><td>{{ slc[1].Name | markdownify }}</td><td>{{ slc[1].Rasse | markdownify }}</td><td>{{ slc[1].Wohnort }}</td><td>{{ slc[1].Kategorie }}</td><td>{{ slc[1].Position }}</td></tr>
{% endfor %}
</tbody>
</table>
