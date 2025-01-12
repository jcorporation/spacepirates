---
layout: page
permalink: /Abenteuer/Schatzjagd/Zweite_Piratengruppe
title: Zweite Piratengruppe
sitedata:
    Slc:
        Xia_Xu:
            Name: "Xia Xu"
            Rasse: "Neuasiatin"
            Kategorie: "Forscher"
            Wohnort: ""
            SOELDNER: "4"
            TECH: "6"
            PILOT: "1"
            HAENDLER: "2"
            Zaehigkeit: "4"
            Bewaffnung: "Laserpistole: WB 0"
            Position: ""
order: /04
---

## Zweiter Schlüssel

Der zweite Schlüssel ist ein altmodischer Schlüssel, wie man ihn aus dem 19. Jahrhundert kennt. Im Inneren beherbergt er aber eine empfindliche Elektronik, die zu Wackelkontakten und Fehlfunktionen neigt.

## Die Piratengruppe

Diese Gruppe hat nur zufällig etwas von der Schatzkarte mitbekommen.

{% assign data=site.Piratencrews | where:"name", "Tanaka Mao" | first %}
{{ data.content }}

## Aktionen der Piratengruppe

1. Sie versuchen, den Charakteren die Karte für 5.000 UC abzukaufen.
2. Sie greifen die erste Piratengruppe an.
3. Sie versuchen, einen Informanten in die Gruppe der Spieler zu schmuggeln.

### Die Informantin

Die Informantin heißt Xia Xu, ist eine asiatische Schönheit und eine ausgewiesene Expertin in Unwahrscheinlichkeitsphänomenen. Sie wird zufällig auftauchen und den Charakteren helfen, die Effekte der Unwahrscheinlichkeitszone auszunutzen und diese Kenntnisse ihrer Gruppe zuzuspielen. Sie scheut sich natürlich auch nicht davor einem Charakter schöne Augen zu machen, um an Informationen zu kommen, wird aber in erster Linie ihr Wissen betonen.

{% include slc_profile.md data=page.sitedata.Slc.Xia_Xu %}
