var piratenklatsch = {};

piratenklatsch.generate = function () {
    var selort = document.getElementById('selort').options[document.getElementById('selort').selectedIndex].value;
    if (selort === "w4") {
        anzahl = randgen.randNr(4);
    }
    else if (selort === "-2") {
        anzahl = randgen.randNr(4) - 2;
        if (anzahl < 0) {
            anzahl = 0;
        }
    }
    else if (selort === "+1") {
        anzahl = randgen.randNr(4) + 1;
    }
    document.getElementById('klatsch').textContent = '';
    if (anzahl === 0) {
        anzahl++;
    }
    for (var a = 0; a < anzahl; a++) {
        piratenklatsch.geruecht(a);
    }
}

piratenklatsch.geruecht = function(a) {
    const klatsch = document.createElement('div');
    klatsch.classList.add('mb-2');
    klatsch.innerHTML = '<table><tbody>' +
        '<tr><th>Gerücht</th><td>' + randgen.parser(randgen.randTable(tabellen["geruechte"])) + '</td></tr>' +
        '<tr><th>Quelle</th><td>' + randgen.parser(randgen.randTable(tabellen["quelle"])) + '</td></tr>' +
        '<tr><th>Wahrheitsgehalt</th><td>' + randgen.parser(randgen.randTable(tabellen["wahrheit"])) + '</td></tr>' +
        '<tr><th>Alter</th><td>' + randgen.parser(randgen.randTable(tabellen["alter"])) + '</td></tr>' +
        '<tr><th>Vertraulichkeit</th><td>' + randgen.parser(randgen.randTable(tabellen["vertraulichkeit"])) + '</td></tr>' +
        '</tbody></table>';

    document.getElementById('klatsch').appendChild(klatsch);
}

//init
piratenklatsch.generate();
document.getElementById('generate').addEventListener('click', function() {
    piratenklatsch.generate();
}, false);
