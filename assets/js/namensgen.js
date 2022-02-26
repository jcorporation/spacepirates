var namensgen = {};

namensgen.generate = function () {
    var w = document.getElementById('type').value;
    var z = document.getElementById('anzahl').value;
    var a = '';
    switch(w) {
        case 'konzern':
            for (var i = 0; i < z; i++) {
                if (randgen.randNr(2) > 0) {
                    a += randgen.randTable(tabellen.konzernprefix) + " " + randgen.randTable(tabellen.konzernnamen) + "<br/>";
                } else {
                    a += randgen.randTable(tabellen.konzernnamen) + " " + randgen.randTable(tabellen.konzernsuffix) + "<br/>";
                }
            }
            break;
        case 'planet':
            for (var i = 0; i < z; i++) {
                a += randgen.parser(randgen.randTable(tabellen.planetenprefix)) + " " + randgen.parser(randgen.randTable(tabellen.planetennamen)) + " " + randgen.parser(randgen.randTable(tabellen.planetensuffix)) + "<br/>";
            }
            break;
        case 'stadt':
            for (var i = 0; i < z; i++) {
                a += randgen.randTable(tabellen.staedtenamen) + randgen.randTable(tabellen.staedtesuffix) + "<br/>";
            }
            break;
        case 'alien':
            for (var i = 0; i < z; i++) {
                a += randgen.randTable(tabellen.aliennamen) + randgen.randTable(tabellen.aliensuffix) + "<br/>";
            }
            break;
        case 'foederationm':
            for (var i = 0; i < z; i++) {
                a += randgen.randTable(tabellen.foederationvormann) + " " + randgen.randTable(tabellen.foederationnachnamen) + "<br/>";
            }
            break;
        case 'foederationw':
            for (var i = 0; i < z; i++) {
                a += randgen.randTable(tabellen.foederationvorweib) + " " + randgen.randTable(tabellen.foederationnachnamen) + "<br/>";
            }
            break;
        case 'neuasienm':
            for (var i = 0; i < z; i++) {
                a += randgen.randTable(tabellen.neuchinanachnamen) + " " + randgen.randTable(tabellen.neuchinavormann) + "<br/>";
            }
            break;
        case 'neuasienw':
            for (var i = 0; i < z; i++) {
                a += randgen.randTable(tabellen.neuchinanachnamen) + " " + randgen.randTable(tabellen.neuchinavorweib) + "<br/>";
            }
            break;
        case 'raumschiff':
            for (var i = 0; i < z; i++) {
                if (randgen.randNr(2) > 0) {
                    a += randgen.randTable(tabellen.raumschiffprefixe) + " " + randgen.randTable(tabellen.raumschiffnamen) + "<br/>";
                } else {
                    a += randgen.randTable(tabellen.raumschiffnamen) + " " + randgen.parser(randgen.randTable(tabellen.raumschiffsuffixe)) + "<br/>";
                }
            }
            break;
    }
    document.getElementById("namensgenout").innerHTML = a;
}

//init
document.getElementById('generate').addEventListener('click', function () {
    namensgen.generate();
}, false);
document.getElementById('type').addEventListener('change', function () {
    namensgen.generate();
}, false);
