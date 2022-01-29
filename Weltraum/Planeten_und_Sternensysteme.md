---
layout: page
permalink: /Weltraum/Planeten_und_Sternensysteme
title: Planeten und Sternensysteme
---

# Planeten und Sternensysteme

Hier sind alle wichtigen Planeten und Sternensysteme des SpacePirates Universums aufgelistet.

## Sternensysteme

## Planeten

| Name | Sektor | Einwohner | Politisches |
| ---- | ------ | --------- | ----------- |
{% for planet in site.data.planeten %}
    | {{ planet.Name }} | {{ planet.Sektor }} | {{ planet.Einwohner }} | {{ planet.Politisches }} |
{% endfor %}
