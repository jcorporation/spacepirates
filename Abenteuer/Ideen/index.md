---
layout: page
permalink: /Abenteuer/Ideen/
title: Abenteuerideen
---

# Abenteuerideen

Hier sind Ideen gesammelt, die zu Abenteuer weiterentwickelt werden können.

<ul>
  {% assign mypages = site.pages | sort: "order" %}
    {% for page in mypages %}
        {% if page.permalink contains '/Abenteuer/Ideen/' %}
            <li><a href="{{ page.url | absolute_url }}">{{ page.title }}</a></li>
        {% endif %}
    {% endfor %}
</ul>
