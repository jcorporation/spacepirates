---
layout: page
permalink: /Zufallstabellen/Ereignisse_bei_einem_Raumflug
title: Ereignisse bei einem Raumflug
sitedata:
    RaumflugEreignisse:
        - "Das Raumschiff durchfliegt unbeabsichtigt ein Weltraumphänomen: [weltraumphaenomen]"
        - "Der FTL-Antrieb versagt nach [W100]% der Flugzeit."
        - "Eine Raumzeitverzerrung verlängert den Flug um [W10] Tage."
        - "Eine zufällige Raumschiffmacke setzt ein: [rsmacken]"
        - "Der Sprit (Neutritium) geht nach [W100]% der Flugzeit aus, obwohl die Tanknadel noch genügend Reserven zeigt."
        - "Die Crew leidet an: [raumflugkrankheit]."
        - "Der Rum geht aus."
        - "Es haben sich Parasiten eingenistet und die ganzen Vorräte verseucht."
        - "Ein verstümmelter FTL-Funkspruch wird zufällig aufgefangen."
        - "Der Bordcomputer veranstaltet eine Schnitzeljagd."
        - "Sie treffen auf ein havariertes Raumschiff von [organisation]"
        - "Ein marodes Piratenschiff greift an."
        - "Ein gut gerüstetes Patrouillenschiff will eine „Routinekontrolle“ durchführen."
        - "Ein gut gerüstetes Patrouillenschiff will eine „Routinekontrolle“ durchführen, es sind aber doch stark gerüstete Piraten!"
        - "Die Charaktere geraten in ein Raumschlacht zwischen Piraten und Kriegsschiffen."
        - "Ein Raumschiff intergalaktischer Sklavenjäger fängt das Raumschiff in seinem Traktorstrahl."
        - "Rings um das Raumschiff taucht plötzlich ein dichter Meteoritengürtel auf."
        - "Die Sensoren entdecken einen bis jetzt völlig unbekannten Planeten."
        - "Ein kaum verständlicher Notruf kommt an."
        - "Das Raumschiff gerät in einen Raumzeitwirbel und landet irgendwo und irgendwann in der Galaxis."
        - "Eine Sekte will die Piraten bekehren: [sekte]"
        - "[weltraumtier] kreuzen"
        - "Eine Mail kommt an (Mails gibt es eigentlich seit 1000 Jahren nicht mehr)."
    RaumflugKrankheiten:
        - Seekrankheit
        - Extreme Langeweile
        - Platzangst
        - Hautausschlag
        - Lagerkoller
---

# Ereignisse bei einem Raumflug

Diese Zufallstabelle kann genutzt werden um einen Raumflug interessanter zu gestalten.

<button class="btn btn-yellow" id="generate">Generieren</button>

<div id="raumflugOut" class="card p-2 mt-2"></div>

***

## Manuell auswürfeln

<div id="raumflugTable"></div>

<script type="text/javascript" src="{{ site.baseurl }}/assets/js/data_names.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/zufallstabellen.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/zufallsgenerator.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/raumflug-ereignisse.js"></script>

<script>
randgen.array2html(tabellen["existingRaumflugEreignisse"], document.getElementById('raumflugTable'));
</script>
