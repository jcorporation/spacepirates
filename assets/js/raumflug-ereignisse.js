var raumflugEreignisse = {};

raumflugEreignisse.generate = function() {
    document.getElementById('raumflugOut').innerHTML = randgen.parser(randgen.randTable(tabellen["existingRaumflugEreignisse"]));
}

//init
document.getElementById('generate').addEventListener('click', function () {
    raumflugEreignisse.generate();
}, false);
