tabellen["rsmacken"] = tabellen["existingRaumschiffmacken"];

tabellen["scmacken"] = tabellen["existingPiratenmacken"];

tabellen["raumflugkrankheit"] = tabellen["existingRaumflugKrankheiten"];

tabellen["weltraumtier"] = tabellen["existingWeltraumtiere"];

tabellen["stufen"] = [["Möchtegernpirat", 12, 0], ["Unterbezahlter Pirat", 14, 2], ["Standardpirat", 16, 4], ["Wohlhabender Pirat", 18, 8], ["Reicher Pirat", 20, 16],
    ["Unterbezahlter Piratenanführer", 22, 24], ["Standardpiratenanführer", 24, 32], ["Wohlhabender Piratenanführer", 26, 40],
    ["Reicher Piratenanführer", 28, 48], ["Superreicher Piratenanführer", 30, 56]];

tabellen["gal_gross_or_klein"] = ["[gal_klein]", "[gal_gross]"];
tabellen["gal_gross"] = ["[W20]"];
tabellen["gal_klein"] = ["[W10]"];
tabellen["gal_besonderheit"] = ["[weltraumphaenomen]", "keine"];

tabellen["geruechte"] = ["ausschweifendem und skandalösem Verhalten [persoenlichkeit], Name: [nameneu]",
    "[?bevorstehenden] Unruhen, Grund: [unruhegrund], [planet_or_stadt]",
    "einer [?geheimen] Militäraktion, [partei]: [militaeraktion], Ort: [planet_or_sektor]",
    "aufsehenerregendes Verbrechen: [verbrechen], ausgeführt von [verbrecher]",
    "der Entdeckung von etwas völlig Unbekannten: [unbekanntes]",
    "einer [?bevorstehenden] [auseinandersetzung] Auseinandersetzung: [partei] greift [partei] an",
    "einem mysteriösen und unheimlichen Geschehnis: [mystgeschehnis]",
    "neues Vorgehen gegen Piraten: [vorgehen]",
    "Großer Konzernskandal [konzern_neu_or_wichtig]: [skandal]",
    "einer wertvollen Fracht die in den kommenden Tagen von [planet_neu_or_wichtig] zu [planet_neu_or_wichtig] transportiert wird. Fracht: [beute], Transporteur: [partei]",
    "einem Schiffswrack, Ort: [weltraumort], Eigentümer: [rasse]",
    "Auftauchen von illegaler Ware, Warenursprung [aliens], Ware: [beute]",
    "Neues Handelsabkommen zwischen [handelspartei] und [handelspartei]",
    "Ausgesetztes Kopfgeld auf: [nameneu] ([kopfgeld]) von [partei]",
    "Neuer Spaceamazonenraubzug im Sektor [sektoren]",
    "Auftauchen der Syoner im Sektor [sektoren]",
    "Die [partei] liefern sich ein Scharmützel mit den Glukorianern",
    "Bau der/des größten [bau] ever, Bauherr: [partei]",
    "Gründung eines neuen Megakonzerns: [konzernneu]",
    "Besiedelung eines neuen Sonnensystems und dem Planten [planetneu]",
    "Vernichtung einer/eines [bau] durch [vernichtungsgrund] im Sektor [sektoren]",
    "Forschungsschiff, das auf dem Weg in Sektor [sektoren] ist, wahrscheinlich sind dort wertvolle [forschung] zu finden."];

tabellen["alter"] = ["[W6] Tage alt", "[W6] Wochen alt", "[W6] Monate alt"];

tabellen["forschung"] = ["Alienartefakte", "Resourcen", "Daten"];

tabellen["auseinandersetzung"] = ["kriegerischen", "politischen", "handelspolitischen"];

tabellen["bau"] = ["Raumschiff", "Raumstation", "Forschungsstation"];

tabellen["weltraumort"] = ["[planet_neu_or_wichtig]", "[bekannteweltraumphaenomene]", "[sektoren]", "[raumstationen]"];

tabellen["vernichtungsgrund"] = ["Explosion durch defekte Energieversorgung", "Kollision mit einem großen Meteoriten", "Sabotage durch [verbrecher]",
    "Plötzlich auftretendes Weltraumphänomen: [weltraumphaenomen]", "Angriff/Überfall von [partei]", "Fehlgeschlagenes Experiment"];

tabellen["weltraumphaenomen"] = ["Schwarzes Loch", "Negatronenwolke", "Plasmawolke", "Ionensturm", "Wurmloch", "Raumzeitverschiebung",
    "Unwahrscheinlichkeitswirbel", "Meteoritengürtel", "Unlöschbare Feuerwand", "Plasmaregenbogen", "Lila Loch", "Weißes Loch",
    "Spiralnebel", "Asteroidengürtel", "Quantenfluktuation", "Dimensionsriss", "Plasmasturm", "Pulsar"];

tabellen["vorgehen"] = ["schärfere Gesetze und Strafen auf dem Planeten [planetenwichtig]", "neue Spezialeinheit auf dem Planeten [planetenwichtig] gegründet",
    "Spezialeinheit auf Planet [planetenwichtig] abgebaut"];

tabellen["persoenlichkeit"] = ["Politiker/Repräsentant: [partei]", "Manager des Konzerns [konzern_neu_or_wichtig]", "Showstar [showstar]", "Sektenanführer der Sekte [sekte]",
    "einer unbekannteren Person"];

tabellen["kopfgeld"] = tabellen.persoenlichkeit.concat(["Mörders", "Rebellen", "Piraten"]);

tabellen["unruhegrund"] = ["gefälschter Wahl", "Mangel an Nahrungsmittel", "Unterdrückung einer ethnischen Minderheit", "Religiöse Aufruhr",
    "Menschen wurden aufgehetzt", "politischer Umsturz"];

tabellen["militaeraktion"] = ["Sicherung von Rohstoffen", "Behütung eines militärischen Geheimnisses", "Beseitigung eines Gegners", "Eroberung eines Alienartefakts"];

tabellen["skandal"] = ["Veruntreuung von ein paar Millionen UC", "großer Bestechungsskandal", "unverantwortbare Umweltverschmutzung, Verseuchung eines ganzen Planeten",
    "Vertreibung einer primitiven Rasse von einem Planeten", "giftige Elemente in Lebensmittel", "Betrug von Anlegern", "Bruch eines Handelsembargos"];

tabellen["planet_or_sektor"] = ["[planet_neu_or_wichtig]", "[sektoren]"];

tabellen["planet_or_stadt"] = ["Planet: [planet_neu_or_wichtig]", "Stadt: [stadtneu] auf [planet_neu_or_wichtig]"];

tabellen["planet_neu_or_wichtig"] = ["[planetneu]", "[planetenwichtig]"];

tabellen["konzern_neu_or_wichtig"] = ["[existingKonzerne]", "[konzernneu]"];

tabellen["konzernneu"] = ["[konzernnamen] [konzernsuffix]", "[konzernprefix] [konzernnamen]", "[konzernnamen] [konzernsuffix]"];

tabellen["stadt_neu_or_wichtig"] = ["[staedtewichtig]", "[stadtneu]"];

tabellen["stadtneu"] = ["[staedtenamen][staedtesuffix]"];

tabellen["planetneu"] = ["[planetenprefix][planetennamen] (Sektor: [sektoren], [planetentyp])"];

tabellen["gal_planetneu"] = ["[planetenprefix][planetennamen] ([planetentyp_bewohnbar])"];

tabellen["handelspartei"] = ["Föderation", "Handelsrat", "Neuasien", "Glukorianisches Imperium", "Kahadrisches Reich", "Samara", "Syoner", "Trullimperium",
    "Reich der Wagonen", "Streifanier", "Spaceamazonen", "Spacepears", "Atlanter", "SpaceWorms", "Raptorianer"];

tabellen["partei"] = tabellen.handelspartei.concat(["Piraten", "Rebellen", "Interstellarer Konzern: [konzern_neu_or_wichtig]",
    "Sekte: [sekte]", "unbekannte Alienrasse", "Romaha", "Glukorianisches Imperium"]);

tabellen["aliens"] = ["Glukorianisches Imperium", "Kahadrisches Reich", "Samara", "Syoner", "Trullimperium", "Reich der Wagonen",
    "Streifanier", "Spaceamazonen", "Spacepears", "Atlanter", "SpaceWorms", "unbekannte Alienrasse", "Romaha", "Raptorianer", "SpaceYetis"];

tabellen["unbekanntes"] = ["Anzeichen einer unbekannten Alienrasse im Sektor [sektoren]", "Neuartiges Weltraumphänomen im Sektor [sektoren]",
    "Unbekannte Energieart", "Schnellerer FTL-Antrieb", "Teleportation", "Künstliche Intelligenz"];

tabellen["mystgeschehnis"] = ["bevorstehender Massenselbstmord der Sekte [sekte]", "Jüngstes Gericht wird vonm Sektanführer der Sekte [sekte]",
    "extrem seltene Planeten / Sternenkonstellation im Sektor [sektoren]", "Verschwinden der gesamten Bevölkerung einer/s [orttyp]",
    "Zombieinfasion auf dem Wissenschaftsplaneten [planetneu]", "spontane Explosion einer Sonne im Sektor [sektoren]",
    "Auftauchen von Vampiren, die die Macht an sich reisen wollen", "Erscheinung von nervigen Poltergeistern"];

tabellen["orttyp"] = ["Planet [planetneu]", "Stadt [stadtneu]", "Raumschiff", "Raumstation", "Sonnensystem", "Mond"];

tabellen["verbrechen"] = ["Diebstahl einer experimentellen Waffe", "Ermordung einer bekannten Persönlichkeit: [persoenlichkeit]",
    "Entführung einer bekannten Persönlichkeit: [persoenlichkeit]", "Eindringen in eine Sperrzone", "Putsch einer Regierung auf dem Planten [planetneu]",
    "Entwendung eines neuartigen Raumschiffs", "Handel mit den Glukorianern", "Besetzung einer Raumstation"];

tabellen["verbrecher"] = ["Piraten", "Rebellen", "Unbekannten", "Abtrünnige Soldatentruppe", "Söldner", "Kleinkriminelle",
    "Organisiertes Verbrechen", "[spacemafia]", "[spacerocker]"];

tabellen["wahrheit"] = ["vollständig wahr", "größtenteils wahr", "etwas verfälscht", "nur teilweise wahr", "nur teilweise wahr", "größtenteils falsch",
    "totale Ente", "veraltet"];

tabellen["quelle"] = ["wurde gezielt von einem Feind oder Rivalen gestreut", "wurde von einem unzufriedenen Mitarbeiter oder Angestellten in Umlauf gebracht",
    "hat sich durch normale Mund-zu-Mund-Propaganda entwickelt, der Urheber ist nicht mehr festzustellen",
    "ist eine alte Verschwörungstheorie, die in dieser oder einer ähnlichen Form immer wieder hochkommt",
    "ist dem Betreffenden ebenfalls zu Ohren gekommen, und er zahlt harte Credits dafür, wenn das Gerücht aus der Welt geschafft wird.",
    "ist dem Betreffenden ebenfalls zu Ohren gekommen, und er zahlt harte Credits dafür, wenn die Quelle des Gerüchtes aus der Welt geschafft wird.",
    "ist aus geheimen oder vertraulichen Informationen entstanden, zu denen sich der Urheber illegal Zugang verschafft hat"];

tabellen["vertraulichkeit"] = ["wird offen erzählt", "wird nur hinter der Hand erzählt", "man braucht Überredungskünste / gute Beziehungen um es zu erfahren",
    "wird nur in ganz engen Kreisen erzählt", "ist gerade Tratschthema Nummer 1"];

tabellen["auftraege"] = ["Beschaffung eines Gegenstands ([beute]), der noch nicht geborgen ist. Planet: [planetneu]",
    "Beschaffung eines Gegenstands ([beute]), den eine andere Fraktion besitzt. [fraktion]",
    "Abwicklung eines schwierigen Handels. [auftraggeber]",
    "Zerstörung eines Gegenstands [beute] [orte].",
    "Transport eines heiklen Gegenstands [beute] von [orte] nach [orte].",
    "Eliminierung einer Person [fraktion].",
    "Befreiung eines Gefangenen aus den Fingern einer Organisation [organisation], [orte], [fraktion].",
    "Rettung eines verschollenen Forschungsschiffs, das zuletzt auf dem unbekanntem Planeten [planetneu] war.",
    "Rettung eines verschollenen Kriegsschiffs, das zuletzt in unbekannten Sektor war.",
    "Beschaffung von geheimen Informationen einer Organisation oder Konzerns [beute] [organisation]."];

tabellen["auftraggeber"] = ["Geheimorganisaton [rasse]", "Rebellenanführer [rasse]", "Piratenanführer [rasse]", "Politiker [rasse]",
    "Mächtiger Händler [rasse]", "Kommandant einer Raumstation [rasse]", "Militärgeneral [rasse]", "Wissenschaftler [rasse]",
    "Anonymer Auftraggeber [rasse]", "Mitglied des Galaktischen Handelsrats [handelsratrassen]"];

tabellen["handelsratrassen"] = ["Föderation", "Kahadrisches Reich", "Trullimperium", "Reich der Wagonen"];

tabellen["fraktion"] = ["Geheimorganisaton [rasse]", "Rebellenanführer [rasse]", "Piratenanführer [rasse]", "Politiker [rasse]",
    "Mächtiger Händler [rasse]", "Kommandant einer Raumstation [rasse]", "Militärgeneral [rasse]", "Wissenschaftler [rasse]",
    "Anonymer Auftraggeber [rasse]", "Mitglied des Galaktischen Handelsrats [rasse]", "SpaceNinjas [ninjaclan]"];

tabellen["ninjaclan"] = ["Akamachi-Clan", "Clan der Schildkröte", "Goemon-Ishikawa-Highschool", "Hashimara-Clan", "Hattori-Hanzo-Akademie",
    "Leiser-Wind-des-Schicksals-Dojo"];

tabellen["rasse"] = ["Mensch", "Mensch", "Mensch", "Trull", "Trull", "Trull", "Spaceamazone", "Spaceamazone",
    "Kahadrier", "Kahadrier", "Samnese", "Samnese", "Wagone", "Wagone", "Streifanier", "Streifanier", "Raptorianer",
    "Spacepear", "Syoner", "Glukorianer", "SpaceWorm", "Atlanter", "unbekannte Rasse"];

tabellen["aliens"] = ["Trull", "Spaceamazone", "Kahadrier", "Samnese", "Wagone", "Streifanier", "Spacepear", "Syoner", "Glukorianer", "SpaceWorm", "Atlanter",
    "Raptorianer", "unbekannte Rasse"];

tabellen["auftragserteilung"] = ["Durch verstohlenen Boten, der die Charaktere zum Auftraggeber bringt.",
    "An einem geheimen Ort mit vermummten Auftraggeber.",
    "Öffentlich in einer Bar, direkt durch den Auftraggeber.",
    "Die Charaktere werden erpresst.",
    "Die Charaktere benötigen ein wichtiges Ersatzteil und müssen als Gegenleistung den Auftrag ausführen.",
    "Ein Bekannter/Kontakt bittet die Charaktere um Hilfe.",
    "Der Auftraggeber entführt die Charaktere und erläutert dann seinen Auftrag.",
    "Durch einen mysteriösen, verschlüsselten Funkspruch.",
    "Durch einen Kontakt, der den Auftraggeber kennt.",
    "Durch einen seriösen, offiziellen Vertreter des Auftraggebers."];

tabellen["beutetyp"] = ["Handfeuerwaffe", "Raumschiffwaffe", "Energieerzeuger", "Küchengerät", "Raumschiffantrieb", "Schutzschild", "Zeitmaschine",
    "Unterhaltungsgerät", "Mikrochip"];
tabellen["beutestatus"] = ["geheim", "illegal", "extrem selten", "unbekannt", "einzig existierendes Exemplar"];
tabellen["dokumententyp"] = ["Geheimdienstunterlagen der [aliens]", "Blaupausen von [beutetyp]", "Beweisfotos", "Entwurf", "Geheimformel", "Schatzkarte"];
tabellen["materieverhalten"] = ["intelligent", "aggressiv", "instinktverhalten", "freundschaftlich", "anhänglich"];
tabellen["materie"] = ["Gestein", "Blut", "Pflanze", "Erde", "Gas", "Schleim", "Viren", "Microben", "Haare"];
tabellen["bedeutung"] = ["religiös", "politisch"];
tabellen["kisteninhalt"] = ["Kleidung", "Elektronikersatzteile", "Schrott", "keinem Inhalt", "lebenden Tieren", "Gestein"];

tabellen["beute"] = ["Uraltes Alienartefakt der [aliens], [beutetyp]", "Gegenstand von Bedeutung - [bedeutung] der Alienrasse [aliens]",
    "Prototyp: [beutetyp], [beutestatus]", "Standardlieferung von [W500] [beutetyp]",
    "Leichnam einer unbekannten Alienrasse", "Geheime Dokumente: [dokumententyp], ursprünglicher Besitzer [organisation]",
    "Ungewöhnliche Proben - [materie] vom Planeten [planetneu]", "Lebende Materie - [materie] [materieverhalten]",
    "Kisten mit [kisteninhalt]"];

tabellen["organisation"] = tabellen.existingKonzerne.concat(["Rebellen", "Piraten", "Militär ([rasse])", "Schmuggler", "Drogenhändler",
    "Korrupter Geschäftsmann", "[spacemafia]", "SpaceRocker [spacerocker]"], "Sekte [sekte]");

tabellen["spacerocker"] = ["SpaceAngels", "Baneros Banditos"];

tabellen["spacemafia"] = ["Italienische Mafia", "Kahadrische Mafia"];

tabellen["sekte"] = ["Heavensgate", "Kinder der Sternenleere", "Verfechter der Nacktheit", "Unbekannt", "Marmonen"];

tabellen["belohnung"] = ["[3W10].000 UC pro Charakter", "seltenes Raumschiffersatzteil", "[W4]0 % der Beute", "[4W10].000 UC Gesamt",
    "[2W10].000 UC pro Charakter", "seltenes Raumschiffersatzteil", "[W10]000 UC pro Charakter", "[4W10].000 UC Gesamt", "Alienartefakt"];

tabellen["huerden"] = ["Der Zielort ist unbekannt.", "Der Zielort ist in einem Sperrgebiet.",
    "Es sind keine Informationen zum Auftraggeber verfügbar.",
    "Der Hyperantrieb funktioniert im Zielsternensystem nicht.",
    "Ein Informant versorgt die Charaktere bewusst mit Falschinformationen.",
    "Das Raumschiff der Charaktere wird sabotiert (Raumschiff erhält eine Macke, die auch aktiv wird).",
    "Die Charaktere werden im Zielsternensystem aktiv gesucht.",
    "Auf der Reise geschieht ein Zwischenfall: [zwischenfallweltraum].",
    "Die Charaktere erhalten genau den gegenteiligen Auftrag, den sie kaum abweisen können.",
    "Es sind keine Informationen zum Ziel verfügbar."];

tabellen["haken"] = ["Die Charaktere erfahren, dass der Auftraggeber mit Hilfe der Zielperson / Gegenstand einen Planeten/Raumstation vernichten will.",
    "Der Auftraggeber wird ermordet und die Mörder jagen jetzt die Charaktere [organisation]",
    "Der Zielort wird Belagert von [W10] Kriegsschiffen der [rasse]",
    "Zielobjekt/Zielperson befindet sich woanders [orte]",
    "Auftraggeber benötigt Gegenstand für einen teuflischen Plan[schurkenplaene]",
    "Das Ganze ist eine Falle[schurkenplaene]",
    "Der Auftraggeber ist nicht der, der er zu sein scheint: [auftraggeber]",
    "Das Zielobjekt ist nicht das, was es zu sein scheint, es ist was von großer militärischer oder wissenschaftlicher Bedeutung.",
    "Mitten im Auftrag ändert der Auftraggeber seine Pläne und verschwindet. [schurkenplaene]",
    "Das Ganze ist nur ein Ablenkungsmanöver: [schurkenplaene]", "Der Auftraggeber hat nicht vor zu bezahlen.",
    "Ein Feind der Charaktere versucht das Vorhaben zu vereiteln."];

tabellen["schurkenplaene"] = ["Es ist eine tödliche Mission, er will die Charaktere töten.",
    "Auftraggeber will Planet unbewohnbar machen um dort einen seltenen Rohstoff abzubauen.",
    "Auftraggeber benötigt Gegenstand/Person um jemanden zu erpressen.",
    "Die Mission dient dazu die Charaktere dem Militär auszuliefern.",
    "Auftraggeber kooperiert mit den Glukorianern und die Person/Gegenstand kann kriegsentscheidend sein."];

tabellen["gegenspieler"] = ["Konzern [konzern_neu_or_wichtig]", "andere Piratengruppe", "Rebellen", "bekannte Alienrasse [rasse]", "Söldnertruppe",
    "Militär [rasse]", "Schmuggler / Drogenhändler", "unbekannte Alienrasse", "Sekte [sekte]", "[mafia]", "SpaceRocker [rocker]",
    "Korrupter Geschäftsmann", "SpaceNinjas [ninjaclan]", "Händler / Halunke [haendler]", "Promi [showstar]", "[bank]", "Verrückter Wissenschaftler",
    "[handelsrat]", "Korrupter Politiker", "Konzern [konzern_neu_or_wichtig]"];

tabellen["mafia"] = ["Italienische Mafia", "Kahadrische Mafia"];
tabellen["rocker"] = ["Baneros Banditos", "SpaceAngels"];
tabellen["handelsrat"] = ["Handelsrat", "SpaceHawks", "Space-Steuerfahnder"];
tabellen["bank"] = ["Handelsbank", "Trullbank", "Universalbank", "Bank von Neuasien"];

tabellen["gegenspielerverhalten"] = ["Beschützen aktiv die Zielperson/Gegenstand.",
    "Sind selber auf der Suche danach, mit dem gleichen Ziel.",
    "Sind zufällig darauf gestoßen, lassen sich bestechen.",
    "Haben die Zielperson/Gegenstand zufällig gefunden und geben ihn ungern wieder her.",
    "Wissen wesentlich mehr über die Zielperson/Gegenstand und versuchen, die Charaktere umzustimmen.",
    "Wurden vom gleichen Auftraggeber mit der gleiche Mission betraut.",
    "Sind alte Feinde der Charaktere.",
    "Sind selber auf der Suche danach, mit dem entgegengesetzten Ziel.",
    "Sind Feinde des Auftraggebers und versuchen, über die Charaktere an diesen heranzukommen.",
    "Verfolgen die Charaktere, um ihnen den Gegenstand/Zielperson wegzuschnappen."];

tabellen["zwischenfallweltraum"] = tabellen["existingRaumflugEreignisse"];

tabellen["zwischenfallraumstation"] = ["Die künstliche Schwerkraft fällt aus.",
    "Schlägerei in einer Kneipe der Raumstation.",
    "Die Raumstation wird von Rebellen angegriffen.",
    "Die Raumstation wird vom Zoll gründlich durchsucht, sehr gründlich.",
    "Die Charaktere finden einen Steckbrief mit ihren Gesichtern.",
    "Eine Raumzeitkrümmung versetzt die Raumstation auf einmal in den Wilden Westen, wo sie von Viehräubern angegriffen wird.",
    "Auf der Raumstation wuchert spontan ein blaues Moos, das jeden, der es berührt, scharf macht.",
    "Die Narrenzunft taucht auf und beschließt spontan, dass jetzt Faschingsbeginn sei.",
    "Auf der Raumstation bricht eine seltsame Krankheit aus, diese wird zur Quarantänezone erklärt.",
    "Die Charaktere werden ständig von Piratenfans genervt.",
    "Ein Alien verliebt sich in einen Charakter und stellt ihm unaufhörlich nach.",
    "Die künstliche Schwerkraft wird viel, viel zu schwer.",
    "Eine bewusstseinserweiternde Droge wird freigesetzt.",
    "Die Charaktere werden eines Mordes beschuldigt.",
    "Ein spontanes Unwahrscheinlichkeitsfeld befördert die Raumstation in einen zufälligen Sektor.",
    "Stromausfall auf der Raumstation.",
    "Das Raumschiff der Charaktere wird besetzt."];

tabellen["zwischenfallplanet"] = ["Ein Erdbeben tritt auf.",
    "Die Regierung verhängt eine Ausreisesperre, weil Terroristen/Verbrecher gesucht werden.",
    "Eine Epidemie bricht aus.",
    "Die Charaktere geraten in eine Straßenschlacht.",
    "Die Charaktere finden ein Steckbrief mit ihren Gesichtern.",
    "Ein Meteoritenhagel stürzt auf den Planeten ein.",
    "Ein Weltuntergangsprediger taucht auf und nervt die Charaktere.",
    "Es findet ein Volksfest mit sehr komischen Traditionen statt.",
    "Der Planet entpuppt sich als Rebellenhochburg.",
    "Die Charaktere werden überfallen.",
    "Großausbruch in einem naheliegenden Gefängnis.",
    "Ein Vulkan bricht aus.",
    "Die Regierung verhängt eine Ausgangssperre."];

tabellen["orte"] = ["Ruine auf einem bekannten Planeten [planetenwichtig]",
    "Ruine auf neu entdeckten Planeten [planetneu]",
    "Raumstation [sektoren]",
    "Große bekannte Stadt [ortdetails], [stadt_neu_or_wichtig]",
    "Kleine Provinzstadt ohne Raumhafen: [ortdetails] in der Stadt [staedtenamen][staedtesuffix]",
    "Mitten in der Natur [planet_neu_or_wichtig]",
    "Großer Sternenkreuzer [sektoren]",
    "Militärbasis [planet_neu_or_wichtig]",
    "Mondbasis [planet_neu_or_wichtig]",
    "Planet in einer Sperrzone [planetneu]"],

tabellen["ortdetails"] = ["Heruntergekommene Bar", "Zwielichtiger Stadtteil", "Raumhafen", "Industrieanlage", "Piratenspelunke",
    "Gut bewachter Unterschlupf", "Auf offener Straße", "Lagerhäuser", "Hochmoderner Zug", "Schutzbunker", "abgestürztes Raumschiff"];

tabellen["sektoren"] = ["Föderation", "Reich der Wagonen", "Sternenrepublik Neuasien", "Kahadrisches Reich", "Freihandelszone",
    "Trullimperium", "Neutrale Zone", "Samara", "unerforschter Sektor", "Glukorianisches Imperium", "Sektor D1", "Sektor D3"];

tabellen["sternensysteme"] = ["Überrest einer Supernova", "Eine aktive Sonne", "Weißer Zwerg", "Aktives Doppelsternsystem", "Eine aktive Sonne",
    "Roter Riese", "Aktives Doppelsonnensystem", "Neutronenstern", "Schwarzes Loch", "Hyperriese"];

tabellen["sternensysteme_bewohnbar_unbewohnbar"] = ["[sternensysteme_bewohnbar]", "[sternensysteme_unbewohnbar]", "[sternensysteme_bewohnbar]"];

tabellen["sternensysteme_unbewohnbar"] = ["Überrest einer Supernova", "Weißer Zwerg", "Roter Riese", "Neutronenstern", "Schwarzes Loch", "Hyperriese"];

tabellen["sternensysteme_bewohnbar"] = ["Eine aktive Sonne", "Doppelsonnenystem"];

tabellen["farbe"] = ["pink", "rot", "lila", "türkis", "blau", "orange", "braun", "flieder", "gelb", "schwarz", "weiß"];

tabellen["planetentyp_unbewohnbar"] = ["kleiner Feuerplanet, [trabanten]", "großer, heißer Felsplanet, [trabanten]", "kleiner Gasriese, [trabanten]",
    "Giftiger Planet, [trabanten]", "Felsplanet, [trabanten]", "großer Gasriese, [trabanten]", "Vulkanplanet, [trabanten]", "kleiner Felsplanet",
    "Unsichtbarer Planet, [trabanten]", "großer Feuerplanet, [trabanten]", "Meteoritengürtel"];

tabellen["planetentyp_bewohnbar"] = ["Dschungelplanet, [planetenbekanntheit]", "Wüstenplanet, [planetenbekanntheit]",
    "Wasserplanet, [planetenbekanntheit]", "Eisplanet, [planetenbekanntheit]", "Erdähnlicher Planet, [planetenbekanntheit]",
    "Sumpfplanet, [planetenbekanntheit]", "Erdähnlicher Planet mit farbiger Atmosphäre ([farbe]), [planetenbekanntheit]",
    "Felsplanet, [planetenbekanntheit]", "Erdähnlicher Planet mit farbiger Atmosphäre ([farbe]), [planetenbekanntheit]",
    "Gasriese (Mond bewohnt), [planetenbekanntheit]", "Gasriese (Orbitalstadt), [planetenbekanntheit]"];

tabellen["planetentyp"] = tabellen.planetentyp_unbewohnbar.concat(tabellen.planetentyp_bewohnbar);

tabellen["planetenbekanntheit"] = ["Völlig unbekannt (gerade einmal die Koordinaten sind verzeichnet), [trabanten]",
    "Etwas bekannt (Planetentyp, Monde, etc. sind verzeichnet), [trabanten]",
    "Erforschter, aber unbedeutender Planet, abseits von Handel und Politik, [trabanten]",
    "Allgemein bekannter Planet, [trabanten]", "Unter Quarantäne, [trabanten]", "Unter einem Embargo, [trabanten]"];

tabellen["trabanten"] = ["1 Mond", "1 bewohnter Mond", "Dünner Ring", "Gaswolke", "Zwei einander umkreisende Monde",
    "Kein Mond", "Dichter Ring", "[W100] Monde", "Dünner Ring und [W100] Monde", "[W10] Monde"];

tabellen["bewohner"] = ["Freundliche Alienrasse, [techlevel]", "Piratenstützpunkt", "Feindliche Alienrasse, [techlevel]", "Pelzige kleine Wesen, [techlevel]",
    "Keine Bewohner", "Außenposten, [rasse]", "Keine", "Aggressive Insekten", "Unbekannte Alienrasse, [techlevel]", "Freundliche Menschenrasse, [techlevel]",
    "Bergbauplanet ([rohstoffe])", "Forschungsplanet", "Viergliedrige, intelligente Kaltblüter, [techlevel]", "Pflanzenartige Wesen, [techlevel]",
    "Gestaltlose, hyperintelligente Wesen, [techlevel]", "Verstädteter Planet [techlevel]", "große Zivilisation [rasse]", "frühe Kolonisierungsphase",
    "kleine Kolonie, [rasse]", "große Kolonie, [rasse]", "einzelne Stämme", "1 [?weißer ]Einsiedler", "Megastädte, [rasse]", "große Zivilisation, [techlevel]",
    "Wolkenstadt, [rasse]", "Industrieplanet, [rasse]", "Agrarplanet, [rasse]", "Urlaubsplanet"];

tabellen["rohstoffe"] = ["Neutritium", "Unobtanium", "Antinitium", "Metall", "Diamanten", "Gold", "Silber", "Kohle"];

tabellen["gal_bewohnt"] = ["[bewohner]", "Keine Bewohner", "[bewohner]"];

tabellen["techlevel"] = ["Steinzeit", "Antike", "Mittelalter", "Industriezeitalter", "Computerzeitalter", "Raumfahrt im eigenen Sternensystem", "FTL-Technologie",
    "FTL-Technologie", "FTL-Technologie", "FTL-Technologie", "Weit Überlegen", "Renaissance"];

tabellen["raumschiffe"] = ["kleines Handelsschiff: [raumschiffe_ware]", "großes Handelsschiff: [raumschiffe_ware]", "großer Schlachtkreuzer", "kleines Militärschiff",
    "kleines Forschungsschiff", "großes Forschungsschiff", "kleines Urlaubsschiff", "großes Urlaubsschiff", "Bergbauschiff", "Jahrmarktschiff", "Agrarschiff"];

tabellen["raumschiffe_owner"] = ["Föderation", "Sternenrepublik Neuasien", "Trull", "Spaceamazonen", "Kahadrier", "Samnesen", "Wagone", "Streifanier", "Spacepear", "Syoner",
    "Glukorianer", "unbekannte Rasse", "Piraten", "Rebellen"];

tabellen["raumschiffe_hotstuff"] = tabellen.beute.concat(["nichts außergewöhnliches"]);

tabellen["raumschiffe_besatzung"] = ["Rumpfmannschaft", "volle Besatzung", "Anfängerbesatzung", "Alte Veteranen"];

tabellen["raumschiffe_ware"] = ["Raumschiffersatzteile", "Nahrungsmittel", "Forschungsausrüstung", "Waffen", "Lebende Tiere"];

tabellen["raumschiffe_besonderheit"] = ["von [weltraumphaenomen] beschädigt", "nichts", "Seuche an Bord", "nichts", "Raumschiff ist verstrahlt", "nichts",
    "Heiße Ware: [beute]"];

tabellen["staedtenamen"] = ["Tanru", "Anat", "Reya", "Kishar", "Wood", "Brick", "West", "Iron", "Alien", "Fox", "Taru", "Upper", "Yellow", "Old", "New", "Harris", "Woodside",
    "Fair", "Water", "Lucky", "Paradise", "Canton", "River", "East", "South", "Wank", "Mohr", "Siena", "Carming", "Glam", "Blooming", "Ironmore",
    "Damas", "Issa", "Mont", "Mount", "Taumar", "Midong", "Neu", "Side", "Norder", "Mers", "Nord", "King", "Khar", "Abu", "Aber", "Tolk", "Bayville"];

tabellen["staedtesuffix"] = ["City", "Village", "Town", "End", "Ridge", "Port", "Stead", "Crossing", "Croft", "Mont", "Hill", "Stop", "Dale", "Ville", "hunt", "Corner", "Center",
    "Wood", "Orbit", "Old", "Bridge", "Side", "Worth", "furt", "burg", "dorf", "haussen", "rod", "feld", "bach", "heim", "au", "stadt", "Falls", "bury", "Estates",
    "Cove", "Landing"];

tabellen["konzernprefix"] = ["Applied", "Integrated", "Advanced", "Limited", "Progressive", "Heads", "Fox", "Cryo", "Apex", "Lang", "Limited", "Royal"];

tabellen["konzernnamen"] = ["Solar", "Boone", "Advanced", "French", "Cosmo", "Paragon", "System", "Broadcast", "Barker", "General", "Radio", "Data", "Dotson", "Ultra", "Space",
    "Future", "Mexican", "Royal", "Tele", "Drake", "Macro", "Applied", "Aragon", "Paco", "Kamigawa", "Hioto", "Oil", "United", "Goodman", "Tora", "Praxa", "Eco", "Tora",
    "Aero", "Star", "Easy", "Blue", "Bartran", "Thin", "People", "Bell", "Tele", "Hoover", "Earth", "Outer", "Belu", "Erton", "Zardo", "Rino", "Public", "Time",
    "Paragon", "Hester", "Office", "Computer", "Paragon", "Genetics", "Alternative", "Pollution", "Equipment", "Howell", "Engineering", "Memory", "Development",
    "Equity"];

tabellen["konzernsuffix"] = ["Networks", "Motors", "Electronics", "Cargo", "Soft", "Sports", "Insurance", "Bank", "Megasys", "Transports", "Trade", "Chemical",
    "Corporation", "Unlimited", "Products", "Stores", "Systems", "Aero", "Works", "Enterprise", "Plan", "Industries", "Electric", "Mobile", "International",
    "Limited", "Universal", "Entertainment", "Insurance", "Mutual", "Control", "Vista", "XP", "Financial", "Holding", "Airlines", "Horizons", "Group",
    "Research", "Sys"];

tabellen["planetenprefix"] = ["New", "", "Neu", "", "Solo", "", "AB", "", "Alpha", "", "Eta", "", "Epsilon", "", "Xi", "", "Beta", "", "Epsilon", "", "Kappa", "", "Gamma", "", "Pi", "Ypsilon", "",
    "Delta", "", "My", "", "Tau", "", "Xi", "", "Z", "", "KY", "", "Nova", "", "Kappa", "", "Phi", "", "V[W100]", "", "Z[W100]", "", "Al", "", "Iota", "", "Lambda", "", "Sigma",
    "Omega", "", "Tejat", "", "Roh", "", "Ras"];

tabellen["planetensuffix"] = ["Prime", "", "[W10]", "", "[W10]", "", "Sol", "", "[W20]", "", "[W20]", "", "Dua", "", "Liva", "", "Qat", "", "Sup", "", "Tek", "", "[W10]", "", "[W10]", "",
    "[W20]", "", "[W20]", "", "March", "", "Horn", "[W10]", "", "", "", "", "", "", "", "", "Primus", "", "", "", "", "[W100]"];

tabellen["planetennamen"] = ["Helios", "Terra", "Osiris", "Apis", "Ruth", "Geb", "Xen", "Hah", "Hera", "Hun", "Bao", "Luca", "Jade", "Charron", "Shefron", "Togra", "Arthur",
    "Denta", "Ulban", "Pandar", "Chronos", "Gea", "Hades", "Alderan", "Osloan", "Valhel", "Atlan", "Javus", "Gaia", "Romar", "Batezir", "Tarax", "Gamir",
    "Ares", "Sin", "Ischtar", "Vorlon", "Qagir", "Avalon", "Doradus", "Acamar", "Eridani", "Achernar", "Eridani", "Achird", "Cassiopeiae", "Acrux", "Crucis", "Acubens",
    "Cancri", "Adhara", "Canis Maioris", "Adhil", "Andromedae", "Agenau", "Hadar", "Ain", "Akrab", "Scorpii", "Cephei", "Leonis",
    "Aladfar", "Lyrae", "Alamak", "Andromedae", "Alathfar", "Lyrae", "Albaldah", "Sagittarii", "Albali", "Aquarii", "Albireo", "Cygni", "Alchiba", "Corvi", "Aldebaran",
    "Tauri", "Alderamin", "Cephei", "Aldhafera", "Leonis", "Aldhanab", "Gruis", "Aldhibah", "Draconis", "Alfecca Meridiana", "Coronae Australis", "Alfirk", "Cephei",
    "Algenib", "Persei und  Pegasi", "Algieba", "Leonis", "Algiedi", "Capricornus", "Algol", "Persei", "Algorab", "Corvi", "Alhena", "Geminorum", "Alioth",
    "Ursae Maioris", "Alkalurops", "Bootis", "Kaphrah", "Chi Ursae Maioris", "Alkes", "Crateris", "Alkione", "Tauri", "Alkor", "Ursae Maioris",
    "Alkurah", "Cephei", "Kurud", "Columbae", "Nair", "Gruis", "Alnilam", "Orionis", "Alnitak", "Orionis", "Niyat", "Scorpii", "Alniyat", "Scorpii",
    "Centauri", "Alrakis", "Draconis", "Alrischa", "Piscium", "Alsafi", "Draconis", "Alschain", "Aquilae", "Alshat", "Capricorni", "Alsciaukat", "Lyncis",
    "Altarf", "Cancri", "Altair", "Aquilae", "Altais", "Draconis", "Alterf", "Leonis", "Thalimain Posterior", "Aquilae", "Thalimain Prior",
    "Aquilae", "Aludra", "Canis Maioris", "Alula Australis", "Ursae Maioris", "Alula Borealis", "Ursae Maioris", "Alwaid", "Draconis", "Alya",
    "Serpentis", "Alzir", "Geminorum", "Ancha", "Aquarii", "Angetenar", "Eridani", "Antares", "Scorpii", "Arcturus", "Bootes", "Arkab Prior", "Sagittarii",
    "Arkab Posterior", "Sagittarii", "Arm", "Capricorni", "Arneb", "Leporis", "Arrakis", "Draconis", "Asellus Australis", "Cancri", "Asellus Borealis",
    "Cancri", "Asellus", "Bootis", "Asellus Secundus", "Bootis", "Asellus Tertius", "Bootis", "Askella", "Sagittarii", "Aspidiske",
    "Carinae", "Asterion", "Canes Venaticorum", "Asterope", "Atik", "Omicron Persei", "Atlas", "Atria", "Triangulum Australis", "Avior", "Carinae",
    "Azaleh", "Aurigae", "Azelfafage", "Cygni", "Azha", "Eridani", "Azmidiske", "Puppis", "Baham", "Pegasi", "Barnards Pfeilstern", "Baten Kaitos",
    "Ceti", "Becrux", "Mimosa,  Crucis", "Beid", "Omikron1 Eridani", "Bellatrix", "Orionis", "Benetnasch", "Ursae Maioris", "Gruis",
    "Beteigeuze", "Orionis", "Betria", "Triangulum Australis", "Bharani", "Arietis", "Botein", "Arietis", "Brachium", "Librae", "Bunda",
    "Aquarii", "Canopus", "Carinae", "Caph", "Cassiopeiae", "Capella", "Aurigae", "Castor", "Geminorum", "Cebalrai", "Ophiuchi",
    "Celaeno", "Chara", "Canes Venaticorum", "Chertan", "Leonis", "Chi Cygni", "Chow", "Serpentis", "Cursa", "Eridani", "Cygnus",
    "Decrux", "Crucis", "Aquilae", "Cephei", "Velorum", "Deneb", "Cygni", "Deneb Algedi", "Capricorni", "Deneb Dulfim", "Delphini",
    "Aquilae", "Denebola", "Leonis", "Deneb Kaitos", "Ceti", "Deneb Kaitos Schemali", "Dheneb", "Ceti", "Diadem", "Comae Berenices",
    "Dschubba", "Scorpii", "Dubhe", "Ursae Maioris", "Duhr", "Leonis", "Edasich", "Draconis", "Elektra", "Elmuthalleth", "Trianguli",
    "Elnath", "Tauri", "Enif", "Pegasi", "Eridani", "Indi", "Errai", "Cephei", "Aquilae", "Carinae", "Draconis", "Serpentis", "Fomalhaut",
    "Piscis Austrini", "Fum al Samakah", "Piscium", "Furud", "Canis Maioris", "Gacrux", "Crucis", "Gatria", "Triangulum Australis", "Gianfar",
    "Lambda Draconis", "Giedi", "Capricorni", "Gienah Gurab", "Corvi", "Giennah", "Cygni", "Girtab", "Scorpii", "Gliese", "Gomeisa", "Canis Minoris",
    "Gorgonea Tertia", "Graffias", "Scorpii", "Cephei", "Groombridge", "Grumium", "Draconis", "Hadar", "Centauri", "Hadir",
    "Sigma Puppis", "Haldus", "Aurigae", "Hamal", "Arietis", "Han", "Ophiuchi", "Hassaleh", "Aurigae", "Hydri", "Heka", "Lambda Orionis", "Virginis",
    "Homam", "Pegasi", "Hyadum", "Tauri", "Izar", "Bootis", "Jabbah", "Scorpii", "Jih", "Pegasi", "Kaffaljidhm", "Ceti", "Kajam", "Herculi",
    "Kapteyns Stern", "Kastra", "Capricorni", "Kaus Borealis", "Lambda Sagittarii", "Kaus Medius", "Sagittarii", "Kaus Australis", "Sagittarii",
    "Keid", "Omikron", "Eridani", "Kit", "Equulei", "Kochab", "Ursae Maioris", "Kornephoros", "Herculi", "Kraz", "Corvi", "Kruger", "Ksora", "Cassiopeiae",
    "Kullat Nunu", "Piscium", "Kuma", "Draconis", "Sagittarii", "Cygni", "Lacaille", "Lalande", "Superba", "Canum", "Lesath", "Scorpii", "Lukida",
    "Monocerotis", "Lukida Anseris", "Vulpeculae", "Maasym", "Herculi", "Marfark", "Cassiopeiae", "Marfik", "Ophiuchi", "Markab", "Matar", "Pegasi",
    "Mebsuta", "Geminorum", "Megrez", "Ursae Maioris", "Mekbuda", "Geminorum", "Menkalinan", "Aurigae", "Menkar", "Ceti", "Menkent", "Menchib", "Persei",
    "Menkib", "Persei", "Merak", "Ursae Maioris", "Merga", "Bootis", "Merope", "Mesarthim", "Arietis", "Miaplacidus", "Carinae", "Minchir", "Sigma Hydrae",
    "Minelava", "Virginis", "Minkar", "Corvi", "Mintaka", "Orionis", "Mira", "Omikron Ceti", "Miram", "Persei", "Mirach", "Andromedae", "Misam", "Persei",
    "Mizar", "Ursae Maioris", "Mufrid", "Bootis", "Muliphein", "Canis Maioris", "Murzim", "Canis Maioris", "Muscida", "Nair Al Saif",
    "Orionis", "Naos", "Puppis", "Nash", "Sagittarii", "Nashira", "Capricorni", "Navi", "Cassiopeiae", "Nembus", "Persei", "Nemesis",
    "Nekkar", "Bootis", "Nihal", "Leporis", "Aquilae", "Cygni", "Nunki", "Sagittarii", "Nusakan", "Coronae Borealis", "Okul", "Capricorni",
    "Cygni", "Peacock", "Pavonis", "Phakt", "Columbae", "Pherkad", "Ursae Minoris", "Pherkard", "Ursae Minoris", "Pistolenstern", "Pleione",
    "Polaris Australis", "Octantis", "Polarstern", "Ursae Minoris", "Pollux", "Geminorum", "Porrima", "Virginis", "Praecipua",
    "Minoris", "Prijipati", "Aurigae", "Prokyon", "Canis Minoris", "Proxima Centauri", "Rana", "Eridani", "Aquilae", "Rasalas", "Leonis",
    "Ras Algethi", "Herculi", "Alhague", "Ophiuchi", "Elased Australis", "Leonis", "Regor", "Velorum", "Regulus", "Leonis",
    "Aquilae", "Hydrae", "Rigel", "Orionis", "Rigil", "Kentaurus", "Virginis", "Leonis", "Ross", "Rotanev", "Delphini", "Ruchba",
    "Omega", "Rukbat", "Sagittarii", "Sabik", "Ophiuchi", "Sadachbia", "Aquarii", "Sadalbari", "Pegasi", "Sadalmelik", "Aquarii",
    "Sadalsuud", "Aquarii", "Sadr", "Cygni", "Saiph", "Orionis", "Salm", "Pegasi", "Sargas", "Scorpii", "Sarin", "Herculi", "Sarir",
    "Ursae Maioris", "Sceptrum", "Eridani", "Scheat", "Pegasi", "Scheddi", "Capricorni", "Schedir", "Cassiopeiae", "Segin",
    "Cassiopeiae", "Seginus", "Bootis", "Sham", "Sagittae", "Sheliak", "Lyrae", "Sheratan", "Arietis", "Shaula", "Lambda Scorpii",
    "Aquarii", "Sirius", "Canis Maioris", "Situla", "Aquarii", "Spica", "Virginis", "Sterope", "Sualocin", "Delphini", "Subra", "Omikron Leonis", "Suhail", "Velorum",
    "Sulafat", "Lyrae", "Sanduelak", "Syrma", "Virginis", "Tabit", "Orionis", "Talitha Borealis", "Ursae", "Maioris", "Talitha", "Australis", "Ursae", "Maioris",
    "Tania Borealis", "Ursae Maioris", "Tania Australis", "Ursae Maioris", "Ceti", "Gruis", "Tarazet", "Aquilae", "Tayg", "Coronae Borealis", "Tegmen",
    "Cancri", "Terebellum", "Posterior", "Geminorum", "Prior", "Geminorum", "Orionis", "Eemin", "Eridani", "Aquilae", "Draconis", "Tien Kuan", "Toliman",
    "Torcularis Septemtrionalis", "Omikron Pisces", "Tseen Kee", "Velorum", "Turais", "Iota Carinae", "Tyl", "Draconis", "Unuk", "Serpentis", "Cephei",
    "Velorum", "Cassiopeiae", "Monocerotis", "Sagittarii", "Vindemiatrix", "Virginis", "Canis Majoris", "Wasat", "Geminorum", "Wazn", "Columbae", "Wega", "Lyrae",
    "Wei", "Scorpii", "Wezen", "Canis", "Maioris", "Winnecke", "Yed Prior", "Ophiuchi", "Yed Posterior", "Ophiuchi", "Andromedae", "Virginis", "Aurak", "Eridani", "Avijava",
    "Virginis", "Reticuli", "Librae"];

tabellen["raumschiffprefixe"] = ["MS", "Amazing", "Blue", "Red", "Black", "Costa", "Crystal", "Dancing", "Lady", "Southern", "True", "False", "Far", "White",
    "Absolon", "Acheron", "Ambush", "Ammonit", "Ancient", "Anjsan", "Apocalypse", "Aquila", "Archon", "Arkn", "Armageddon", "Armatus", "Adamant", "Adictor",
    "Arm of", "Avenger", "Bane", "Behavor", "Bonfire of", "Bull", "Bulldozer", "Call of", "Cancer", "Carnifex", "Caelium", "King", "New", "Deep",
    "Confidence", "Converter", "Conviction", "Cora", "Courage", "Cruciatus", "Dark", "Shadow", "Descent", "Deep", "Desolator", "Right",
    "Doom", "Dusty", "Elysium", "Eminenz", "Enlightenment", "Eternal", "Eruption", "Eternus", "Event", "Evocation of", "Excelsior",
    "Fall", "Faith of", "Fist of", "Fortune of", "Foundation of", "Gale of", "Geysir", "Gladius", "Glory of", "Goddess of", "Growl",
    "Heart of", "Heretics", "Heroic", "Home", "Hopelessly", "Hover", "Humanity", "Inferno", "Inspiration of", "Invictus", "Invincible", "Invisible", "Judge",
    "Lamentation of", "Legend of", "Lineage", "Lord", "Lunar", "Nocturna", "Nova", "Oberon", "Order of", "Pirates", "Lucky", "Proud of",
    "Rainbow of", "Recovery", "Retalation", "Scars of", "Scowling", "Shinoa", "Silent", "Silver", "Slayer of", "Storm of", "Sun of",
    "Tau", "Terror", "Titus", "Tow", "Transcendence", "Unbreakable", "Venator", "Rise of", "Dark", "Light", "Saviour of", "Betrayor of", "Champion of"];

tabellen["raumschiffnamen"] = ["Odin", "Thor", "Odysseus", "Kyffhäuser", "Beowulf", "Traitor", "Genture", "Charon", "Orion", "Vesta", "Ikarus", "Nautilus", "Renegate", "Inquirie",
    "Tiamat", "Armada", "Perl", "Diamond", "Adventurer", "Dream", "Pirate", "Devil", "Duck", "Positive", "Away", "Dancer", "Bermuda", "Harmony", "Jetstream",
    "Runner", "Quest", "Nemesis", "Dawn", "Sword", "Horizon", "Firestorm", "Storm", "Geysir", "Ghost", "Gladiator", "Wisdom", "Hangman", "Hades", "Harbinger",
    "Harmony", "Shield", "Hydra", "Inspiration", "Interceptor", "Immortality", "Independence", "Knight", "Kolossos", "Liberator", "Light", "Frontier", "Genesis",
    "Mirror", "Paladin", "Peacemaker", "Sword", "Hammer", "Star", "Rainbow", "Rebird", "Resurrection", "Reunion", "Scarface", "Joker", "Poison", "Shadowhunter",
    "Heaven", "Arrow", "Solution", "Soul", "Terror", "Unbreakable", "Worldeater", "Ribbon", "Fury", "Bloodhunter", "Chromskull", "Conductor", "Peace", "Impact",
    "Brother", "Executor", "Devastor", "Diktator", "Homebringer", "Mirrodin", "Tempest", "Future", "Judgement", "Torment", "Space", "Exodus", "Worldwakre",
    "Nemesis"];

tabellen["raumschiffsuffixe"] = ["[W10]", "[W20]", "Hammer", "Explorer", "SpaceShip", "Star", "Triumph", "Magic", "Princess", "Boat", "Flyer", "Bries", "Mysterie", "Thunder", "Age",
    "Sight", "Spiral", "Odysse", "Empire", "Bringer", "Chaos", "Steel"];

tabellen["nameneu"] = ["[aliennamen][aliensuffix]", "[foederationvormann] [foederationnachnamen]", "[foederationvorweib] [foederationnachnamen]",
    "[neuchinavormann] [neuchinanachnamen]", "[neuchinavorweib] [neuchinanachnamen]"];

tabellen["aliennamen"] = ["Yi", "Mox", "Dro", "Schar", "Mar", "Bal", "Bak", "Hus", "Mig", "Zam", "Rak", "Bah", "Xer", "Eys", "Elp", "Gio", "Mal", "Bar", "Hem", "Zan", "Al", "Ada",
    "Bas", "Beg", "Ece", "Dog", "Fid", "Hal", "Isi", "Jan", "Kif", "Lar", "Kul", "Kal", "Mahi", "Mar", "Naz", "Naj", "Qis", "Sabr"];

tabellen["aliensuffix"] = ["tar", "xu", "gba", "goin", "quis", "etu", "kat", "alie", "slan", "eel", "kas", "ram", "xes", "tein", "hin", "nni", "rio", "ric", "kuta", "nur",
    "yah", "za", "wa", "fun", "tur", "gul", "zen", "lin", "ma", "rra", "lah", "bel", "bar", "de", "ani", "vi", "jar", "tar", "wal", "zur", "uru", "zak"];

tabellen["foederationvormann"] = ["Jacob", "Michael", "Ethan", "Joshua", "Daniel", "Christopher", "Anthony", "William", "Matthew", "Andrew", "Alexander", "David", "Joseph",
    "Noah", "James", "Ryan", "Logan", "Jayden", "John", "Nicholas", "Tyler", "Christian", "Jonathan", "Nathan", "Samuel", "Benjamin", "Aiden", "Gabriel", "Dylan", "Elijah",
    "Brandon", "Gavin", "Jackson", "Angel", "Jose", "Caleb", "Mason", "Jack", "Kevin", "Evan", "Isaac", "Zachary", "Isaiah", "Justin", "Jordan", "Luke", "Robert", "Austin",
    "Landon", "Cameron", "Thomas", "Aaron", "Lucas", "Aidan", "Connor", "Owen", "Hunter", "Diego", "Jason", "Luis", "Adrian", "Charles", "Juan", "Brayden", "Adam", "Julian",
    "Jeremiah", "Xavier", "Wyatt", "Carlos", "Hayden", "Sebastian", "Alex", "Ian", "Sean", "Jaden", "Jesus", "Bryan", "Chase", "Carter", "Brian", "Nathaniel", "Eric", "Cole",
    "Dominic", "Kyle", "Tristan", "Blake", "Liam", "Carson", "Henry", "Caden", "Brady", "Miguel", "Cooper", "Antonio", "Steven", "Kaden", "Richard", "Timothy", "Devin", "Ayden",
    "Alejandro", "Victor", "Brody", "Josiah", "Jesse", "Parker", "Riley", "Vincent", "Bryce", "Jake", "Kaleb", "Preston", "Seth", "Patrick", "Colton", "Marcus", "Colin", "Cody",
    "Oscar", "Jeremy", "Joel", "Ashton", "Peyton", "Micah", "Ivan", "Jorge", "Alan", "Eli", "Omar", "Levi", "Nolan", "Giovanni", "Kenneth", "Trevor", "Damian", "Mark", "Cristian",
    "Oliver", "Max", "Derek", "Eduardo", "Nicolas", "Edward", "Ricardo", "George", "Paul", "Tanner", "Gage", "Andres", "Francisco", "Maxwell", "Emmanuel", "Malachi", "Braden",
    "Fernando", "Alexis", "Conner", "Jared", "Grant", "Garrett", "Javier", "Leonardo", "Jonah", "Erick", "Edgar", "Cesar", "Travis", "Manuel", "Edwin", "Stephen", "Elias",
    "Spencer", "Cayden", "Shawn", "Trenton", "Peter", "Bryson", "Mario", "Josue", "Damien", "Hector", "Shane", "Collin", "Kayden", "Johnathan", "Jaxon", "Miles", "Jeffrey",
    "Jaiden", "Abraham", "Jaylen", "Bradley", "Wesley", "Erik", "Sergio", "Donovan", "Jace", "Santiago", "Landen", "Raymond", "Dakota", "Brendan", "Israel", "Hudson", "Roman",
    "Martin", "Marco", "Devon", "Grayson", "Drew", "Andy", "Andre", "Dalton", "Braxton", "Ryder", "Roberto", "Camden", "Kaiden", "Avery", "Keegan", "Gregory", "Lincoln",
    "Harrison", "Maddox", "Dominick", "Rafael", "Pedro", "Calvin", "Troy", "Zane", "Asher", "Dillon", "Lukas", "Zion", "Ty", "Leo", "Drake", "Sawyer", "Johnny", "Griffin",
    "Tucker", "Corbin", "Ruben", "Chance", "Clayton", "Ezekiel", "Taylor", "Dawson", "Corey", "Marcos", "Fabian", "Kai", "Raul", "Rylan", "Emanuel", "Simon", "Brock",
    "Kameron", "Gerardo", "Frank", "Angelo", "Aden", "Quinn", "Julio", "Derrick", "Jalen", "Tyson", "Dante", "Dustin", "Skyler", "Armando", "Malik", "Emilio", "Enrique",
    "Scott", "Payton", "Kyler", "Xander", "Jaime", "Colby", "Mateo", "Brennan", "Trey", "Caiden", "Axel", "Allen", "Trent", "Joaquin", "Rodrigo", "Ronald", "Cade", "Lorenzo",
    "Phillip", "Gael", "Jude", "Keith", "Myles", "Gustavo", "Theodore", "Julius", "Jakob", "Mitchell", "Pablo", "Adan", "Darius", "Danny", "Saul", "Brayan", "Jaxson", "Zander",
    "Luca", "Alberto", "Maximilian", "Leland", "Lane", "Amir", "Randy", "Brenden", "Tony", "Donald", "Maximus", "Jerry", "Braeden", "Casey", "Ismael", "Cash", "Arturo", "Dennis",
    "Jonas", "Brett", "Jimmy", "Larry", "Emiliano", "Curtis", "Dane", "Zackary", "Charlie", "Dallas", "Grady", "Ezra", "Tristen", "Abel", "Louis", "Silas", "Anderson", "Mathew",
    "Declan", "Chris", "Easton", "Alfredo", "Dean", "Jayson", "Kingston", "Esteban", "Keaton", "Amari", "Elliot", "Marvin", "Braydon", "Darren", "Nehemiah", "Philip", "Alec",
    "Rowan", "Moises", "Orlando", "Weston", "Nickolas", "Albert", "Bennett", "Ricky", "Arthur", "Braylon", "Lance", "Quentin", "Walter", "Felix", "Everett", "Ramon", "Holden",
    "Graham", "Issac", "Mauricio", "Ali", "Finn", "Gary", "Elliott", "Camron", "Jameson", "Lawrence", "Cohen", "Shaun", "Davis", "Douglas", "Jay", "Hugo", "Justice", "Yahir",
    "Nikolas", "Uriel", "Joe", "Ernesto", "Morgan", "Tate", "Salvador", "Russell", "Bryant", "Cory", "Jonathon", "Javon", "Maurice", "Jayce", "Jaydon", "Marshall", "Eddie",
    "Greyson", "Kristopher", "Jamari", "Phoenix", "Beau", "Jadon", "Reece", "Judah", "Reid", "Desmond", "Damon", "Aldo", "Chandler", "Cruz", "Nasir", "Chad", "Kade", "Micheal",
    "Davion", "Talon", "Bruce", "Rodney", "Izaiah", "Marc", "Noe", "Noel", "Zachariah", "Kelvin", "Melvin", "Isiah", "Rocco", "Mekhi", "Carl", "Reed", "Jamarion", "Guillermo",
    "Sam", "Terry", "Solomon", "Brodie", "Reese", "Walker", "Jaylin", "Deandre", "Mohamed", "Nathanael", "Moses", "Colten", "Cyrus", "Roger", "Nelson", "Cristopher", "Franklin",
    "Jasper", "Kobe", "Felipe", "Terrance", "Kristian", "Porter", "Tobias", "Jermaine", "Skylar", "Quinton", "Branden", "Landyn", "Khalil", "Jeffery", "Leonel", "Osvaldo",
    "Pierce", "Tommy", "Demetrius", "Billy", "Dorian", "Jon", "Roy", "Emerson", "Quincy", "Leon", "Jessie", "Johan", "Conor", "Titus"];

tabellen["foederationvorweib"] = ["Emily", "Isabella", "Emma", "Ava", "Madison", "Sophia", "Olivia", "Abigail", "Hannah", "Elizabeth", "Addison", "Samantha", "Ashley", "Alyssa", "Mia",
    "Chloe", "Natalie", "Sarah", "Alexis", "Grace", "Ella", "Brianna", "Hailey", "Taylor", "Anna", "Kayla", "Lily", "Lauren", "Victoria", "Savannah", "Nevaeh", "Jasmine",
    "Lillian", "Julia", "Sofia", "Kaylee", "Sydney", "Gabriella", "Katherine", "Alexa", "Destiny", "Jessica", "Morgan", "Kaitlyn", "Brooke", "Allison", "Makayla", "Avery",
    "Alexandra", "Jocelyn", "Audrey", "Riley", "Kimberly", "Maria", "Evelyn", "Zoe", "Brooklyn", "Angelina", "Andrea", "Rachel", "Madeline", "Maya", "Kylie", "Jennifer",
    "Mackenzie", "Claire", "Gabrielle", "Leah", "Aubrey", "Arianna", "Vanessa", "Trinity", "Ariana", "Faith", "Katelyn", "Haley", "Amelia", "Megan", "Isabelle", "Melanie",
    "Sara", "Sophie", "Bailey", "Aaliyah", "Layla", "Isabel", "Nicole", "Stephanie", "Paige", "Gianna", "Autumn", "Mariah", "Mary", "Michelle", "Jada", "Gracie", "Molly",
    "Valeria", "Caroline", "Jordan", "Mya", "Charlotte", "Jenna", "Madelyn", "Rebecca", "Sadie", "Diana", "Daniela", "Natalia", "Kennedy", "Zoey", "Amanda", "Jade", "Katie",
    "Adriana", "Ruby", "Eva", "Gabriela", "Amy", "Briana", "Peyton", "Danielle", "Lydia", "Naomi", "Angela", "Serenity", "Leslie", "Keira", "Camila", "Rylee", "Jacqueline",
    "Jayla", "Marissa", "Giselle", "Lucy", "Kate", "Melissa", "Breanna", "Genesis", "Jordyn", "Erin", "Alana", "Catherine", "Valerie", "Lilly", "Amber", "Laila", "Cheyenne",
    "Shelby", "Reese", "Liliana", "Payton", "Angel", "Miranda", "Ashlyn", "Reagan", "Kylee", "Summer", "Bella", "Juliana", "Mckenzie", "Ana", "Kathryn", "Alexandria", "Karen",
    "Kendall", "Daisy", "Sierra", "Sienna", "Adrianna", "Skylar", "Jayden", "Margaret", "Ellie", "Christina", "Bianca", "Mariana", "Makenzie", "Alexia", "Alicia", "Maggie",
    "Mikayla", "Laura", "Alondra", "Jazmin", "Julianna", "Jillian", "Ariel", "Tessa", "Kyra", "Alina", "Elena", "Brooklynn", "Esmeralda", "Hayden", "Annabelle", "Sabrina",
    "Nadia", "Cadence", "Amaya", "Kelsey", "Kendra", "Jasmin", "Delaney", "Aniyah", "Hope", "Alivia", "Cassidy", "Chelsea", "Vivian", "Kiara", "Tiffany", "Caitlyn", "Camryn",
    "Aliyah", "Crystal", "Karina", "Joselyn", "Scarlett", "Karla", "Abby", "Kelly", "Mckenna", "Josephine", "Elise", "Lindsey", "Alaina", "Clara", "Kyla", "Caitlin", "Violet",
    "Fatima", "Courtney", "Angelica", "Julissa", "Izabella", "Haylee", "Allie", "Dakota", "Piper", "Veronica", "Nora", "Makenna", "Stella", "Jazmine", "Savanna", "Mallory",
    "Kayleigh", "Leila", "Jamie", "Eliana", "Addyson", "Joanna", "Alejandra", "Erica", "Callie", "Eden", "Ciara", "Lila", "Cassandra", "Carly", "Jayda", "Heaven", "Erika",
    "Dulce", "Nina", "Allyson", "Kira", "Aniya", "Lola", "Eleanor", "Alayna", "Ashlynn", "Cecilia", "Carmen", "Cynthia", "Kamryn", "Miley", "Brenda", "Esther", "Macy",
    "Guadalupe", "Katelynn", "London", "Kailey", "Monica", "Leilani", "Alison", "Kara", "Madeleine", "Daniella", "Bethany", "Kiera", "Lizbeth", "Melody", "Georgia", "Kaylie",
    "Delilah", "Josie", "Ryleigh", "Ivy", "Julie", "Miriam", "Heidi", "Hayley", "Camille", "Danica", "Cameron", "Rebekah", "April", "Lucia", "Emerson", "Anastasia", "Lindsay",
    "Harmony", "Iris", "Aurora", "Aubree", "Jadyn", "Selena", "Tatiana", "Hanna", "Paola", "Emely", "Kaydence", "Asia", "Carolina", "Anahi", "Shayla", "Angie", "Desiree",
    "Alissa", "Lexi", "Eliza", "Jaden", "Tatum", "Kaelyn", "Phoebe", "Holly", "Presley", "Rylie", "Kyleigh", "Michaela", "Genevieve", "Meredith", "Alice", "Ruth", "Helen",
    "Brynn", "Sasha", "Rose", "Fiona", "Cora", "Celeste", "Brittany", "Madyson", "Bridget", "Yasmin", "Diamond", "Jaelyn", "Hazel", "Itzel", "Nancy", "Kimora", "Lyla", "Anya",
    "Brenna", "Kiley", "Janiya", "Denise", "Madalyn", "Ximena", "Meghan", "Skyler", "Priscilla", "Kaylin", "Nayeli", "Wendy", "Alessandra", "Annika", "Maddison", "Madilyn",
    "Ayla", "Kadence", "Paris", "Madisyn", "Natasha", "Adeline", "Marley", "Lacey", "Imani", "Talia", "Rachael", "Valentina", "Baylee", "Estrella", "Raegan", "Cindy", "Sarai",
    "Janelle", "Nia", "Lana", "Malia", "Claudia", "Perla", "Serena", "Sandra", "Teagan", "Heather", "Nataly", "Emilee", "Penelope", "Brielle", "Marisol", "Rihanna",
    "Lilliana", "Lilian", "Emilia", "Johanna", "Kathleen", "Kaitlin", "Haylie", "Annie", "Melany", "Angelique", "Jane", "Lesly", "Kristen", "Jaiden", "Willow", "Elaina",
    "Janiyah", "Jazlyn", "Ashlee", "Rosa", "Shannon", "Abril", "Hailee", "Kiana", "Kirsten", "Harper", "Patricia", "Nyla", "Athena", "Macie", "Dana", "Kristina", "Bryanna",
    "Gloria", "Rowan", "Luna", "Danika", "Lena", "Ainsley", "Logan", "Samara", "Ryan", "Casey", "Evangeline", "Fernanda", "Miracle", "America", "Dayanara", "Marina", "Taryn",
    "Alanna", "Hadley", "Sage", "Anaya", "Norah", "Madelynn", "Yoselin", "Yesenia", "Kassidy", "Skye", "Elle", "Francesca", "Lauryn", "Melina", "Amya", "Harley", "Amari",
    "Cheyanne", "Tori", "Sidney", "Kali", "Lillie", "Kailyn", "Cali", "Viviana", "Mercedes", "Paulina", "Abbigail", "Saniya", "Kenzie", "Linda", "Raquel", "Kassandra",
    "Kaitlynn", "Aileen"];

tabellen["foederationnachnamen"] = ["Smith", "Lam", "Martin", "Brown", "Roy", "Tremblay", "Gagnon", "Wilson", "White", "Girard", "Williams", "Jones", "Anderson", "Harris", "Lewis",
    "Young", "Allen", "Clark", "King", "Torres", "Carter", "Green", "Collins", "Rogers", "Morgan", "Reed", "Bell", "Gomez", "Ward", "Nelson", "Cox", "Sullivan", "Price",
    "James", "Ward", "Foster", "Ross", "Watson", "Cruz", "Myers", "Stardust", "Stein", "Banks", "Keith", "Welch", "Mcfaden", "Larsen", "Spencer", "Harding", "Stanton",
    "Pinto", "Almeida", "Dias", "Bauer", "Lange", "Klein", "Ryan", "Doyle", "Moretti", "Rizzo", "Costa", "Janssen", "Bakker", "Karlsen", "Nilsen", "Hansen", "Khan", "Novak",
    "Hartmann", "Krause", "Peters", "Richter", "Scholz", "Schmid", "Virtanen", "Koppel", "Karu", "Andersen", "Olsen", "Leitner"];

tabellen["neuchinavormann"] = ["Ling", "Mao", "Li", "Yen", "Georgi", "Sergey", "Ani", "Sascha", "Vitali", "Hiroto", "Ren", "Yuto", "Satoshi", "Kei", "Wei", "Hao", "Dong", "Ming", "Tao",
    "An", "Bao", "Bo", "Cai", "Cheng", "De", "Dong", "Feng", "Gang", "Guo", "Hu", "Hui", "Jian", "Jie", "Kang", "Lang", "Long", "Meng", "Ning", "Peng",
    "Qiang", "Shi", "Song", "Tian", "Wei", "Wen", "Wu", "Xiong", "Yi", "Yong", "You", "Zhen", "Alok", "Amol", "Anil", "Ankur", "Bansi", "Bhim", "Bipin", "Bhanu",
    "Chamann", "Charan", "Chirag", "Dhiren", "Devesh", "Dinkar", "Dilip", "Gagan", "Geet", "Guru", "Hari", "Harshal", "Hiresh", "Ishan", "Janek", "Jishnu", "Kanan",
    "Kavi", "Manik", "Mayur", "Manish", "Martand", "Nahari", "Nilay", "Pinak", "Prabir", "Ravi", "Rohit", "Rujul", "Shiv", "Sohan", "Tejas"];

tabellen["neuchinavorweib"] = ["Pan", "Ni", "Kim", "Sai", "Mulan", "Vera", "Karoni", "Lana", "Natascha", "Risa", "Aoi", "Yui", "Hina", "Rin", "Yua", "Ying", "Ping", "Xue", "Ai", "Bao",
    "Bi", "Cai", "Chan", "Cui", "Dai", "Dan", "Fang", "Feng", "Hong", "Hua", "Huan", "Hui", "Jiao", "Ju", "Juan", "Lan", "Li", "Lian", "Lin", "Mei", "Na", "Ni", "Qian", "Qiao", "Qing",
    "Qiong", "Shan", "Shu", "Ting", "Wen", "Xia", "Xian", "Xiang", "Xiu", "Xue", "Yan", "Ying", "Yu", "Yuan", "Yun", "Zhen", "Zhi", "Zhu", "Zi", "Adita", "Ajala", "Asha", "Bala",
    "Bina", "Bhanu", "Chadna", "Chandra", "Dhara", "Disha", "Darika", "Edha", "Ela", "Farha", "Gina", "Gatita", "Harsha", "Hinay", "Ira", "Inika", "Jabeen", "Keya", "Kaveri",
    "Kanti", "Leena", "Lily", "Manali", "Mala", "Nidra", "Neha", "Niti", "Panna", "Pari", "Pritika", "Puja", "Raya", "Raka", "Rati", "Sana", "Sai"];

tabellen["neuchinanachnamen"] = ["Li", "Wang", "Zhang", "Liu", "Chen", "Yang", "Huang", "Zhao", "Wu", "Xu", "Sun", "Zhu", "Ma", "Hu", "Guo", "Lin", "He", "Gao", "Liang", "Sato", "Suzuki",
    "Takahashi", "Tanaka", "Watanabe", "Ito", "Yamamoto", "Nakamura", "Kobayashi", "Saito", "Kato", "Yoshida", "Yamada", "Sasaki", "Yamaguchi", "Matsumoto",
    "Inoue", "Kimura", "Hayashi", "Shimizu", "Smirnov", "Ivanov", "Kuznetsov", "Popov", "Sokolov", "Lebedev", "Kozlov", "Novikov", "Morozov", "Petrov",
    "Volkov", "Solovyov", "Vasilyev", "Zaytsev", "Pavlov", "Semyonov", "Golubev", "Vinogradov", "Bogdanov", "Voroyov", "Qian", "Feng", "Cheng", "Meng", "Shou",
    "Wen", "Duan", "Sha", "Quan", "Long", "Bing", "Advani", "Roshan", "Patel", "Rao", "Bedi"];

tabellen["raumzeitverschiebung"] = ["Die Piraten begegnen ihrem eigenen Raumschiff, das aus der Zukunft kommt.",
    "Die Zeit läuft rückwärts.",
    "Die Schwerkraft dreht sich um [W3] × 90 Grad.",
    "Die Zeit springt alle [W10] Minuten [W6] Stunden vorwärts.",
    "Die Piraten begegnen ihrem eigenen Raumschiff, das aus der Vergangenheit kommt.",
    "Die Zeit vergeht innerhalb des Raumschiffs nur noch halb so schnell.",
    "Außerhalb des Raumschiffs ist alles [W100] mal größer.",
    "Die Schwerkraft fluktuiert von doppelt so stark bis nicht vorhanden.",
    "Die Zeit vergeht innerhalb des Raumschiffs doppelt so schnell.",
    "Außerhalb des Raumschiffs ist alles [W100] mal kleiner."];

tabellen["unwahrscheinlichkeitszone"] = ["Alle Koordinaten, die der Bordcomputer berechnet zeigen in die entgegengesetzte Richtung.",
    "Die KI des Raumschiffs verliebt sich in ein Besatzungsmitglied.",
    "Eine zufällige Macke der Mackentabelle tritt ein: [rsmacken]",
    "Aus allen Schächten fallen Murmeln, man kann nur noch laufen wenn man 2 Erfolge auf Söldner schafft.",
    "Der Computer bläst überall große, kaum zerstörbare Luftblasen aus.",
    "Ein Betunientopf und ein verdutzter Wal fliegen auf das Raumschiff zu.",
    "Das Raumschiff verwandelt sich in ein voll ökologisches abbaubares Schiff aus Holz und Efeu.",
    "Männer werden zu Frauen, Frauen zu Männer, aus Erwachsenen Kinder und aus Kinder Erwachsene.",
    "Im Bordradio kommen nur noch tolle Lieder, die die ganze Crew abrocken lässt und kein Moderator quatscht dazwischen.",
    "Rosa Flamingos entern das Raumschiff und betrachten die Crew als ihren Nachwuchs.",
    "Alle Farben verschwinden und es ist alles nur noch schwarz/weiß.",
    "Alle Crewmitglieder gewinnen in der Spacelotterie, genauso wie alle anderen Piraten des Universums.",
    "Der Rum auf dem Raumschiff geht aus, wie auch in allen Kneipen im Sektor.",
    "Eine gigantische SpaceSchlange verschluckt das Raumschiff und beginnt es zu verdauen.",
    "Alle Waffen verschießen nur noch Luftschlagen und Konfetti.",
    "Die KI des Bordcomputers macht einen nützlichen Vorschlag.",
    "Die Service-Leuchte des gebrauchten Raumschiffs erlischt und alle Diagnoseläufe berichten von einem tiptop Raumschiff.",
    "Die Microwellenfertiggerichte der Bordkombüse sind gesund und äußerst schmackhaft.",
    "Die Piraten entdecken einen weitläufigen Erdmännchenbau in ihrem Raumschiff, in dem sich viele verloren geglaubte Dinge finden lassen.",
    "Poly der Bordpapagei gibt nicht nur nervige Wiederholungen eines nervigen Satzes wieder, sondern beteiligt sich am aktuellen Diskurs."];

tabellen["neutritiumstrahlung"] = ["Es wächst ein zusätzliches Gliedmaß an einer praktischen Stelle: [w4gliedmassen]",
    "Das Haarwachstum nimmt exponentiell zu, auch an Stellen an denen bisher keine Haare gewachsen sind.",
    "Alte Narben verschwinden spurlos.",
    "Es wächst ein zusätzliches Gliedmaß an einer unpraktischen Stelle: [w4gliedmassen]",
    "Die Haut verfärbt sich [w6farben].",
    "Es bilden sich überall auf der Haut eitrige Pickel.",
    "Alle Haare fallen auf einmal aus und wachsen auch nicht mehr nach.",
    "Es fällt ein zufälliges Gliedmaß ab: [w6gliedmassen]",
    "Die Haut wird durchsichtig.",
    "Alle Haare verfärben sich [w6farben]."];

tabellen["w6farben"] = ["rot", "blau", "grün", "schwarz", "lila", "rosa"];
tabellen["w4gliedmassen"] = ["Arm", "Arm", "Bein", "Bein", "Schwanz"];
tabellen["w6gliedmassen"] = ["Linker Arm", "Rechter Arm", "Linkes Bein", "Rechtes Bein"];

tabellen["ionensturm"] = ["Der Schiffscomputer spielt verrückt solange das Raumschiff im Sturm ist: -2 auf alle Raumschiffproben",
    "Eine, im Sturm lebende KI, bemächtigt sich des Raumschiffs. Sie hat eigene Ziele und kann jeden Befehl der Crew überschreiben (TECH-Probe oder HÄNDLER-Probe mit 7 Erfolgen um die KI zu vertreiben).",
    "Die Piraten treffen auf eine, im Sturm lebende und aus Ionen bestehende, Lebensform. Die KI [ionensturm_ki]",
    "Der Schildgenerator und die Raumschiffwaffen brennen durch (TECH-Probe mit 5 Erfolgen um den Schaden zu beheben)."];

tabellen["ionensturm_ki"] = ["ist feindlich eingestellt und greift das Raumschiff an (Kampfprofil 8, Schadensmodifikator 2, Wendigkeit: 7, Schadenspunkte: 30).",
    "ist freundlich gesonnen und hilft den Piraten weiter.",
    "ist ein Orakel und beantwortet den Piraten 3 Fragen.",
    "ist gelangweilt und will eine interessante Geschichte hören, damit sie den Piraten hilft aus dem Sturm zu kommen."];

tabellen["raumflug"] = ["Das Raumschiff durchfliegt unbeabsichtigt ein Weltraumphänomen: [weltraumphaenomen]",
    "Der FTL-Antrieb versagt nach [1W100] % der Flugzeit.",
    "Eine Raumzeitverzerrung verlängert den Flug um [1W10] Tage.",
    "Eine zufällige Macke setzt ein: [rsmacken]",
    "Der Sprit (Neutritium) geht nach [1W100] % der Flugzeit aus, obwohl die Tanknadel noch genügend Reserven zeigt.",
    "Die Crew leidet an [raumkrankheiten].",
    "Der Rum geht aus.",
    "Es haben sich Parasiten eingenistet und die ganzen Vorräte verseucht.",
    "Ein verstümmelter FTL-Funkspruch wird zufällig aufgefangen.",
    "Der Bordcomputer veranstaltet eine Schnitzeljagd."];

tabellen["raumkrankheiten"] = ["Seekrankheit", "Extremer Langeweile", "Platzangst", "Hautausschlag"];
