var namensgen = {};

namensgen.generate = function () {
    const w = document.getElementById('type').value;
    const z = document.getElementById('anzahl').value;
    const out = document.getElementById("namensgenout");
    out.textContent = '';
    for (let i = 0; i < z; i++) {
        const item = document.createElement('div');
        item.classList.add('list-group-item');
        
        switch(w) {
            case 'konzern':
                if (randgen.randNr(2) > 0) {
                    item.innerHTML = randgen.randTable(tabellen.konzernprefix) + " " +
                        randgen.randTable(tabellen.konzernnamen);
                } else {
                    item.innerHTML = randgen.randTable(tabellen.konzernnamen) + " " +
                        randgen.randTable(tabellen.konzernsuffix);
                }
                break;
            case 'planet':
                item.innerHTML = randgen.parser(randgen.randTable(tabellen.planetenprefix)) + " " +
                    randgen.parser(randgen.randTable(tabellen.planetennamen)) + " " +
                    randgen.parser(randgen.randTable(tabellen.planetensuffix));
                break;
            case 'stadt':
                item.innerHTML = randgen.randTable(tabellen.staedtenamen) +
                    randgen.randTable(tabellen.staedtesuffix);
                break;
            case 'alien':
                item.innerHTML = randgen.randTable(tabellen.aliennamen) +
                    randgen.randTable(tabellen.aliensuffix);
                break;
            case 'foederationm':
                item.innerHTML = randgen.randTable(tabellen.foederationvormann) + " " +
                    randgen.randTable(tabellen.foederationnachnamen);
                break;
            case 'foederationw':
                item.innerHTML = randgen.randTable(tabellen.foederationvorweib) + " " +
                    randgen.randTable(tabellen.foederationnachnamen);
                break;
            case 'neuasienm':
                item.innerHTML = randgen.randTable(tabellen.neuchinanachnamen) + " " +
                    randgen.randTable(tabellen.neuchinavormann);
                break;
            case 'neuasienw':
                item.innerHTML = randgen.randTable(tabellen.neuchinanachnamen) + " " +
                    randgen.randTable(tabellen.neuchinavorweib);
                break;
            case 'raumschiff':
                if (randgen.randNr(2) > 0) {
                    item.innerHTML = randgen.randTable(tabellen.raumschiffprefixe) + " " +
                        randgen.randTable(tabellen.raumschiffnamen);
                } else {
                    item.innerHTML = randgen.randTable(tabellen.raumschiffnamen) + " " +
                        randgen.parser(randgen.randTable(tabellen.raumschiffsuffixe));
                }
                break;
        }
        out.appendChild(item);
    }
}

//init
document.getElementById('generate').addEventListener('click', function () {
    namensgen.generate();
}, false);
document.getElementById('type').addEventListener('change', function () {
    namensgen.generate();
}, false);
