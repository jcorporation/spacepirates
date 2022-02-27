---
layout: page
permalink: /Weltraum/Piraten/Piratencrews/
title: Bekannte Piratencrews
---

# Bekannte Piratencrews

Neben den Spielern gibt es natürlich auch viele andere Piratencrews im Weltraum. Hier eine Liste von mehr oder weniger bekannten Piratencrews.

<ul>
{% for piratencrew in site.Piratencrews %}
    <li><a href="{{ site.baseurl }}{{ piratencrew.permalink }}">{{ piratencrew.name }}</a></li>
{% endfor %}
</ul>
