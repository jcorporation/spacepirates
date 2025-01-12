---
layout: page
permalink: /Abenteuer/Ideen/
title: Abenteuerideen
---

Hier sind Ideen gesammelt, die zu Abenteuer weiterentwickelt werden können.

<ul>
  {% assign mypages = site.pages | sort: "order" %}
    {% for mypage in mypages %}
        {% if mypage.permalink contains '/Abenteuer/Ideen/' %}
            <li><a href="{{ site.baseurl }}{{ mypage.url }}">{{ mypage.title }}</a></li>
        {% endif %}
    {% endfor %}
</ul>
