var abenteuergen = {};

abenteuergen.generate = function() {
    document.getElementById('auftrag').innerHTML = randgen.parser(randgen.randTable(tabellen.auftraege));
    document.getElementById('auftraggeber').innerHTML = randgen.parser(randgen.randTable(tabellen.auftraggeber));
    document.getElementById('auftragserteilung').innerHTML = randgen.parser(randgen.randTable(tabellen.auftragserteilung));
    document.getElementById('belohnung').innerHTML = randgen.parser(randgen.randTable(tabellen.belohnung));
    document.getElementById('huerde').innerHTML = randgen.parser(randgen.randTable(tabellen.huerden));
    document.getElementById('haken').innerHTML = randgen.parser(randgen.randTable(tabellen.haken));
    document.getElementById('gegenspieler').innerHTML = randgen.parser(randgen.randTable(tabellen.gegenspieler)) + ", " + randgen.parser(randgen.randTable(tabellen.gegenspielerverhalten));
    document.getElementById('zwischenfaelle').innerHTML = randgen.parser("Im Weltraum: " + randgen.randTable(tabellen.zwischenfallweltraum)) +
        "<br/>Auf einer Raumstation: " + randgen.parser(randgen.randTable(tabellen.zwischenfallraumstation)) +
        "<br/>Auf einem Planeten: " + randgen.parser(randgen.randTable(tabellen.zwischenfallplanet));
}

//init
abenteuergen.generate();
document.getElementById('generate').addEventListener('click', function () {
    abenteuergen.generate();
}, false);
