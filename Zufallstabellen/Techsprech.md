---
layout: page
permalink: /Zufallstabellen/Techsprech
title: Techsprech
sitedata:
    TechsprechWort1:
        - Multidimensionaler
        - Persönlicher
        - Piratischer
        - Eindimensionaler
        - Unpersönlicher
        - Karibischer
        - Keindimensionaler
        - Digitaler
        - Einmastiger
        - Temporaler
        - Traumatischer
        - Zweimastiger
        - Sublokaler
        - Smarter
        - Dreimastiger
        - Molekularer
        - Mobiler
        - Goldener
        - Elektromagnetischer
        - Stationärer
        - Silberner
        - Strahlender
        - Virtueller
        - Dreiköpfiger
        - Künstlicher
        - Grafischer
        - Kanonen
        - Natürlicher
        - Neutraler
        - Funkelnder
    TechsprechWort2:
        - Koaxial
        - Deuterium
        - Amazonen
        - Quanten
        - String
        - Halunken
        - Subraum
        - Photonen
        - Aarrrrrrr
        - Trans
        - Phasen
        - Schatz
        - Flux
        - Warp
        - Totenkopf
        - Tachyonen
        - Holo
        - Segelohr
        - Trägheits
        - Tarn
        - bärtiger
        - Disruptor
        - Materie
        - holzbeiniger
        - Neutronen
        - Vakuum
        - hasserfüllter
        - Protonen
        - Tritanium
        - kielholender
    TechsprechWort3:
        - Konverter
        - Teleportator
        - Dreispitz
        - Translokator
        - Pulsor
        - Säbel
        - Deflektor
        - Reaktor
        - Haken
        - Expector
        - Generator
        - Maat
        - Korruptor
        - Roboter
        - Papagei
        - Traktor
        - Energator
        - Rum
        - Beschleuniger
        - Tricorder
        - Holzbein
        - Repulsator
        - Kompensator
        - Fernrohr
        - Kollektor
        - Organisator
        - Pulverdampf
        - Regulator
        - Aggregator
        - Schatzkarte
---

Jedes technische Artefakt besteht aus drei Worten, Beispiele wären der Molekulare Quanten-Kollektor, die äußerst praktische Mobile Holo-Schatzkarte und natürlich der für jeden Spacepiraten unverzichtbare Persönliche Aarrrr-Roboter!

{% include zufallstabelle.md table="techsprech" count=10 manual=false %}

***

## Manuell auswürfeln

Einfach einen W30 auf jede der drei Tabellen würfeln.

{% capture include_col1 %}

### 1. Wort

{% assign nrWoerter = page.sitedata.TechsprechWort1.size %}
<table>
<thead>
<tr><th>W{{ nrWoerter }}</th><th>Wort 1</th></tr>
</thead>
<tbody>
{% assign i = 1 %}
{% for wort in page.sitedata.TechsprechWort1 %}
    <tr><td>{{ i }}</td><td>{{ wort }}</td></tr>
    {% assign i = i | plus: 1 %}
{% endfor %}
</tbody>
</table>
{% endcapture %}

{% capture include_col2 %}

### 2. Wort

{% assign nrWoerter = page.sitedata.TechsprechWort2.size %}
<table>
<thead>
<tr><th>W{{ nrWoerter }}</th><th>Wort 2</th></tr>
</thead>
<tbody>
{% assign i = 1 %}
{% for wort in page.sitedata.TechsprechWort2 %}
    <tr><td>{{ i }}</td><td>{{ wort }}</td></tr>
    {% assign i = i | plus: 1 %}
{% endfor %}
</tbody>
</table>
{% endcapture %}

{% capture include_col3 %}

### 3. Wort

{% assign nrWoerter = page.sitedata.TechsprechWort3.size %}
<table>
<thead>
<tr><th>W{{ nrWoerter }}</th><th>Wort 3</th></tr>
</thead>
<tbody>
{% assign i = 1 %}
{% for wort in page.sitedata.TechsprechWort3 %}
    <tr><td>{{ i }}</td><td>{{ wort }}</td></tr>
    {% assign i = i | plus: 1 %}
{% endfor %}
</tbody>
</table>
{% endcapture %}

{% include columns3.md col1=include_col1 col2=include_col2 col3=include_col3%}

***

**Autor:** Peter alias Joni
