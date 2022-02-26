var raumschiffgen = {};

raumschiffgen.generate = function() {
    if (randgen.randNr(2) > 0) {
        document.getElementById('name').textContent = randgen.randTable(tabellen.raumschiffprefixe) + " " + randgen.randTable(tabellen.raumschiffnamen);
    }
    else {
        document.getElementById('name').textContent = randgen.randTable(tabellen.raumschiffnamen) + " " + randgen.parser(randgen.randTable(tabellen.raumschiffsuffixe));
    }
    document.getElementById('raumschiff').textContent = randgen.parser(randgen.randTable(tabellen.raumschiffe));
    document.getElementById('eigentuemer').textContent = randgen.parser(randgen.randTable(tabellen.raumschiffe_owner));
    document.getElementById('besatzung').textContent = randgen.parser(randgen.randTable(tabellen.raumschiffe_besatzung));
    document.getElementById('besonderheit').textContent = randgen.parser(randgen.randTable(tabellen.raumschiffe_besonderheit));
}

//init
raumschiffgen.generate();
document.getElementById('generate').addEventListener('click', function () {
    raumschiffgen.generate();
}, false);
