---
layout: post
title: "HTML5 App 2.2.3 - Favoritenverwaltung"
tag: spacepirates
permalink: /Aktuelles/2012-08-24-HTML5App-Favoritenverwaltung
---


Die neueste Version der SpacePirates App bietet nun die Verwaltung und Synchronisierung der Favoriten über PirateSpace. Dadurch ist die Favoritenfunktion auch bei nicht WebSQL-fähigen Browsern, wie z.B. Firefox möglich. Das Beste aber ist, dass die Favoriten jetzt auf jedem Gerät verfügbar sind, sobald man sich bei PirateSpace angemeldet hat. Die Favoriten werden bei jedem Aufruf der Favoritenfunktion synchronisiert. Änderungen im Offlinemodus werden zwischengespeichert (nur bei WebSQL-fähigen Browsern).

Bei der Anmeldung wird im Browser ein Logintoken gespeichert, dass auch über Sessiongrenzen hinweg gespeichert bleibt (Localstorage API). Natürlich ist auch die gleichzeitige Anmeldung auf mehreren Geräten möglich.

Getestet habe ich mit den jeweils aktuellsten Versionen von Firefox, Opera, Chromium auf Linux und den integrierten Browsern von Android 4 und iOS 5.

<p>**[Changelog]({{ site.baseurl }}/Webapp/Changelog.html)**<br/>
**[zur App]({{ site.baseurl }}/Webapp/Index.html)**</p>

