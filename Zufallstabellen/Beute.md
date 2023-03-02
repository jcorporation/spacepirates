---
layout: page
permalink: /Zufallstabellen/Beute
title: Beutegenerator
sitedata:
    Beute:
        - "Uraltes Alienartefakt der [aliens], [existingBeuteTyp]"
        - "Gegenstand von Bedeutung: [bedeutung] der Alienrasse [aliens]"
        - "Prototyp: [existingBeuteTyp], [existingBeuteStatus]"
        - "Standardlieferung von [W500] [existingBeuteTyp]"
        - "Leichnam einer unbekannten Alienrasse"
        - "Geheime Dokumente: [existingDokumententyp], ursprünglicher Besitzer [organisation]"
        - "Ungewöhnliche Proben: [materie] vom Planeten [planetneu]"
        - "Lebende Materie: [materie] [materieverhalten]"
        - "Kisten mit [existingKistenInhalt]"
        - "Container mit [existingContainerInhalt]"
    BeuteTyp:
        - "Handfeuerwaffe"
        - "Raumschiffwaffe"
        - "Energieerzeuger"
        - "Küchengerät"
        - "Raumschiffantrieb"
        - "Schutzschild"
        - "Zeitmaschine"
        - "Unterhaltungsgerät"
        - "Mikrochip"
        - "Roboter"
    BeuteStatus:
        - "geheim"
        - "illegal"
        - "extrem selten"
        - "unbekannt"
        - "Unikat"
    KistenInhalt:
        - "Kleidung"
        - "Elektronikersatzteile"
        - "Schrott"
        - "keinem Inhalt"
        - "Fossilien"
        - "Religiöse Schriften"
        - "Holospiel"
        - "4D-Kamasutra"
        - "Kunst"
        - "Antike Bücher"
        - "Medikamente"
        - "Werkzeug"
        - "Drogen: [droge]"
        - "Alkohol (kein Rum)"
    ContainerInhalt:
        - "Schrott"
        - "Gestein"
        - "lebenden Tieren"
        - "Elektronikersatzteile"
        - "Altkleider"
        - "Kunst"
    Dokumententyp:
        - "Geheimdienstunterlagen der [aliens]"
        - "Blaupausen von [existingBeuteTyp]"
        - "Beweisfotos"
        - "Entwurf"
        - "Geheimformel"
        - "Schatzkarte"
        - "Interne Aufzeichnungen von [existingKonzerne]"
        - "Bauplan"
        - "Kochbuch"
---

Dieses Tool generiert zufällige Gegenstände, die die Piraten erbeuten können.

{% include zufallstabelle.md table="existingBeute" count="5" %}
