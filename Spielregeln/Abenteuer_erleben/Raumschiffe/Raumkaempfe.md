---
layout: page
permalink: /Spielregeln/Abenteuer_erleben/Raumschiffe/Raumkaempfe
title: Raumfkämpfe
---

Bei Raumkämpfen wird die Gruppe unterteilt, es gibt genau einen Piloten, beliebig viele Schützen und beliebig viele Techs. Es wird ja gekämpft und nicht verhandelt.

Ein Raumkampf wird wie eine Konfliktszene abgehandelt. Jedes beteiligte Raumschiff zählt dabei als eine Partei.

- Der Pilot erhält die Wendigkeit des Schiffes als Bonus auf sein PILOT-Profil.
- Bei Raumkämpfen wird mit den Waffen des Schiffes geschossen, daher erhalten die Bordschützen den Bonus einer Raumschiffwaffe auf ihr SÖLDNER-Profil.
- Die Techs erhalten die Zuverlässigkeit des Raumschiffes als Bonus auf ihr TECH-Profil.

{% capture include_body %}
Raumkämpfe mit FTL-Geschwindigkeiten sind nur möglich, wenn das Schiff mit FTL-Sensoren und FTL-Waffen ausgerüstet ist. Normale Waffen und Sensoren sind während des FTL-Flugs nutzlos.
{% endcapture %}
{% include beispiel.md title="FTL-Raumkämpfe" body=include_body %}

## Schilde

Schilde fangen Schaden ab. Wenn ein Raumschiff getroffen wird, werden die Punkte zuerst vom Schild abgezogen und erst dann von den Schadenspunkten. Wenn ein Schild keine Punkte mehr hat, bricht es zusammen. Es bietet dem Schiff keinerlei Schutz mehr, weshalb dieses jetzt auch geentert werden kann. Schilde regenerieren nach dem Kampf automatisch um 2 Punkte pro Stunde.

## Schäden

Jeder Treffer verursacht Schadenspunkte in Höhe der eingesetzten Erfolge multipliziert mit dem Schadensmodifikator (SM) der Waffe.

Wenn alle Schadenspunkte des Raumschiffs verbraucht sind, bricht es auseinander, explodiert, etc. Um die Auswirkung zu bestimmen, wird auf folgende Tabelle gewürfelt.

| W6 | Auswirkung |
| :-: | ---------- |
| 1 | Der Maschinenraum brennt lichterloh. |
| 2 | Das Schiff ist leckgeschlagen, noch 1W20 Minuten Sauerstoff. |
| 3 | Das Schiff bricht in <span class="dice">1W20</span> Minuten entzwei. |
| 4 | Das Schiff explodiert in <span class="dice">1W20</span> Minuten. |
| 5 | Der Neutritiumreaktor explodiert in <span class="dice">1W20</span> Minuten. |
| 6 | Die Lebenserhaltung fällt aus. |
| 7 | Alle Macken des Raumschiffs aktivieren sich gleichzeitig und für immer. |
| 8 | Die Schiffs-KI wird völlig verrückt. |

Für die Piratencrew muss das aber nicht das Ende des Abenteuers bedeuten. Durch den Einsatz von Piratenwürfeln, viel Improvisation und Glück kann das Raumschiff noch gerettet werden.

Um das Schiff wieder flottzubekommen, kann eine einmalige Notfall-Wartung durchgeführt werden, bei der natürlich die ganze Crew helfen sollte.

- **Benötigte Erfolge:** 10 + Summe der Stufen aller Charaktere

{% capture include_body %}
Der Spielleiter sollte vermeiden, die komplette Piratencrew in die nicht vorhandene Luft zu jagen, außer sie haben es natürlich so gewollt.
{% endcapture %}
{% include anmerkung.md body=include_body %}

{% capture include_body %}
Hier ein paar Beispiele, wie Erfolgs- und Misserfolgswürfel in einem Raumkampf eingesetzt werden können. Diese Liste dient nur der Inspirationen. Jeder Raumkampf ist unterschiedlich und daher sollten die Aktionen immer von den Gegebenheiten und den Aktionen der anderen Parteien abhängen.

##### Erfolgswürfel

- PILOT
  - Außer Schussweite des Gegners gelangen
  - Ausweichmanöver Y-Gamma-Zeta-5 fliegen, der nächste Treffer ist nur ein Streifschuss (halber Schaden)
  - 2 Erfolge: Mit der Enterschleuse andocken (Schilde beider Schiffe müssen deaktiviert sein)
- SÖLDNER
  - pro Erfolg einen Treffer (SM der Bordkanone Schaden beim gegnerischen Raumschiff)
  - 2 Erfolge: Ausschalten eines bestimmten Subsystems (Schilde des Gegners müssen deaktiviert sein)
  - 2 Erfolge: Der Schuss durchdringt das Schild und verursacht SM der Bordkanone Schaden beim gegnerischen Raumschiff
- TECH
  - Schilde regenerieren um 2 Punkte je eingesetztem Erfolg (Hilfsenergie wird umgeleitet)
  - Schaden des nächsten Schusses erhöht sich um einen Punkt je eingesetztem Erfolg
  - 2 Erfolge: Wiederinstandsetzung eines Subsystems

##### Misserfolgswürfel

- PILOT
  - verschaltet sich oder würgt den Antrieb ab (das Schiff hat keine Automatik)
  - verwechselt ein Angriffsmanöver mit einem Ausweichmanöver
  - fliegt zu wilde Manöver, so dass es der Crew schlecht wird
- SÖLDNER
  - trifft einen Meteoriten und nimmt sich selber die Sicht
  - der Schuss geht völlig daneben
  - 2 Misserfolge: Überhitzt durch den Schnellfeuermodus die Waffe und kann eine Runde nicht feuern
- TECH
  - leitet aus Versehen die Hauptenergie in die Kombüse um
  - Überhitzt den Neutritiumreaktor
  - Vertauscht die Kontrollen der beiden Raumschiffwaffen
{% endcapture %}
{% include hinweis.md title="Tipps für den Einsatz von Erfolgs- und Misserfolgswürfeln" body=include_body %}

{% capture include_body %}
Die Piraten um Chen überfallen ein altes Frachtschiff, das erstaunlich wehrhaft ist (Es gibt zwei Parteien in diesem Konflikt). Das Frachtschiff ist mit Torpedos ausgestattet und besitzt einen Schildwert von 5 Punkten. Die Piraten wollen das Raumschiff entern, der Frachter will entkommen (Ziele definieren).

Da das Piratenschiff Macken besitzt ist vor dem eigentlichen Kampf ein Mackencheck nötig. Kathy würfelt auf die Mackentabelle des Schiffs, erwürfelt eine 7 und zum Glück der Piratencrew setzt keine Macke ein.

### Die Spieler der Piratencrew würfeln

- Stardust ist der Pilot und würfelt also mit seinem PILOT Profil (5) plus der Wendigkeit des Raumschiffs (1): (1 **2** 3 **6** **8** **0**) = 4 Erfolge und 2 Misserfolge, es wird 1 Misserfolg gestrichen
- Xenur Barslan ist einer der Schützen und würfelt daher mit seinem SÖLDNER Profil (5) plus dem Bonus einer der Schiffswaffen, er wählt die Plasmakanone (2): (**2** 3 **4** 7 **8** 9 **0**) = 4 Erfolge und 3 Misserfolge, es werden 2 Misserfolge gestrichen
- Auch Sun Chen würfelt mit ihrem SÖLDNER Profil (3), sie bekommt den Bonus der anderen Schiffswaffe, eine Laserkanone (1): (1 **4** **8** **0**) = 3 Erfolge und 1 Misserfolg, es wird 1 Misserfolg gestrichen
- Drake Khan ist der Tech des Schiffs und würfelt daher mit seinem TECH Profil (5) plus der Zuverlässigkeit des Schiffs (1): (3 3 **4** 5 9 **0**) = 2 Erfolge und 4 Misserfolge, es werden 2 Misserfolge gestrichen

### Der Spielleiter würfelt für die Crew des Frachtschiffs

- Der Pilot des Frachtschiffs (PILOT 5, Wendigkeit -1) würfelt (1 **2** **6** 9) = 2 Erfolge und 2 Misserfolge, es wird 1 Misserfolg gestrichen
- Der Bordschütze (SÖLDNER 4) feuert mit seinem Torpedo (1) und würfelt (**2** 3 **4** 7 9) = 2 Erfolge und 3 Misserfolge, es werden 2 Misserfolge gestrichen
- Der Tech des Frachtschiffs würfelt mit seinem TECH Profil (5) plus der Zuverlässigkeit des Schiffs (2) und wirft (1 **2** **4** **4** 5 **8** 9) = 4 Erfolge und 2 Misserfolge, es wird 1 Misserfolg gestrichen

### Was genau ist geschehen?

Stardust beginnt, da er näher beim Spielleiter sitzt als Xenur und beide die meisten Würfel (8) geworfen haben.

#### Runde 1

- **Stardust – 1 Erfolg:** Er manövriert das Piratenschiff auf einen Abfangkurs, so dass das Frachtschiff nur Richtung Asteroidengürtel zurückweichen kann.
- **Spielleiter – 1 Misserfolg:** Der Pilot schafft es nicht den Frachter außer Schussreichweite zu bekommen.
- **Xenur – 2 Erfolge:** Er feuert mit seiner Plasmakanone auf den Frachter und die Schilde brechen zusammen. Der Schadensmodifikator der Plasmakanone beträgt 2, daher sinkt der Schildwert um 4 Punkte.
- **Spielleiter – 1 Erfolg:** Der Tech des Schiffs kann den überhitzten Feldgenerator überbrücken und so die Schilde wieder hochfahren. Die Schilde regenerieren um 2 Punkte.
- **Chen – 1 Erfolg:** Sie feuert mit der Laserkanone, trifft und der Schildwert des Frachters sinkt auf 1.
- **Spielleiter – 1 Erfolg:** Der Bordschütze feuert ein Torpedo ab und kann das Piratenschiff auf Abstand halten. Der Schildwert des Piratenschiffs sinkt um 1 Punkt.
- **Drake – 2 Misserfolge:** Er hetzt in den Maschinenraum und stolpert ganz blöd über einen seiner Rumkisten und deaktiviert dadurch die Schilde.

#### Runde 2

- **Stardust – 1 Misserfolg:** Er verschaltet sich grandios und würgt den Neutritiumreaktor ab und kracht fast rückwärts in den Asteroidengürtel.
- **Spielleiter – 1 Erfolg:** Der Pilot nutzt die Asteroidentrümmer um etwas Abstand zum Piratenschiff zu gewinnen und Zeit zu haben den FTL zu starten (dauert 2 Runden).
- **Xenur – 1 Misserfolg:** Er feuert wieder mit der Plasmakanone auf den Frachter. Der Schuss geht wegen des Rucklers von Stardust daneben und zertrümmert einen Asteroiden.
- **Spielleiter – 1 Erfolg:** Der Bordschütze erkennt die deaktivieren Schilde und feuert ein Torpedo ab und trifft ins Schwarze, das Piratenschiff nimmt 1 Punkt Schaden.
- **Chen – 1 Erfolg:** Der Schuss macht 1 Schadenspunkt auf die Schilde, deren Schildwert auf 0 sinkt und somit für den Kampf unbrauchbar sind.
- **Spielleiter – 2 Erfolge:** Der Tech schaltet die beiden Aetiriumkristallbänke parallel und kann so den Start des FTL um eine Runde verkürzen.
- **Drake – 2 Erfolge:** Er schaltet gerade noch rechtzeitig die Schilde wieder an, damit die Asteroidentrümmer keinen Schaden am Piratenschiff anrichtet. Zudem kann er gerade noch den Neutritiumreaktor stabilisieren.

#### Runde 3

- **Stardust – 1 Erfolg:** Ihn irritieren die Asteroidentrümmer kann ihnen gerade noch so ausweichen und das Piratenschiff auf Kurs fürs Entern bringen.
- **Spielleiter – 1 Erfolg:** Der Pilot weicht erfolgreich einem der Asteroidentrümmer aus.
- **Xenur – 1 Erfolg:** Er feuert weiter auf den Frachter, kann die Bordwaffe ausschalten, die jetzt lichterloh brennt. Der Frachter nimmt 2 Schadenspunkte.
- **Spielleiter – 1 Misserfolg:** Der Bordschütze will einen weiteren Torpedo abfeuern, als gerade der Schuss Xenurs einschlägt und die Abschussrampe explodieren lässt.
- **Chen:** Setzt aus
- **Spielleiter – 1 Erfolg:** Der Tech kann das Feuer in der Bordkanone eindämmen.
- **Drake:** Setzt aus

#### Runde 4

- **Stardust – 2 Erfolge:** Er dockt das Piratenschiff mittels der Enterschleuse an den Frachter an, entert ihn als erster und kann den Tech ausschalten.
- **Spielleiter – 1 Misserfolg:** Der Pilot versucht erfolglos, das Schiff von der Enterschleuse loszureißen.
- **Xenur – 1 Erfolg:** Er entert als zweiter den Frachter und kann den Bordschützen ausschalten.
- **Spielleiter:** Setzt aus
- **Chen – 1 Erfolg:** Sie entert auch den Frachter, schießt die Tür der Brücke auf und setzt den Piloten fest.
- **Spielleiter:** Setzt aus
- **Drake:** Setzt aus
{% endcapture %}
{% include beispiel.md title="Beispiel für einen Raumkampf" body=include_body %}
