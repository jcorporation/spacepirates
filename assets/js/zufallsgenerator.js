"use strict";

var randgen = {};

randgen.generate = function(target) {
    const table = target.getAttribute('data-table');
    const count = Number(target.previousElementSibling.value);
    const out = document.getElementById(table + 'Out');
    out.innerText = '';
    for (let i = 0; i < count; i++) {
        const item = document.createElement('div');
        item.classList.add('list-group-item');
        while (item.innerHTML === '' ||
               randgen.isDuplicate(out, item) === true)
        {
            item.innerHTML = randgen.parser(randgen.randTable(tabellen[table]));
        }
        out.appendChild(item);
    }
}

randgen.isDuplicate = function(out, item) {
    const existing = out.querySelectorAll('.list-group-item');
    for (let i = 0, j = existing.length; i < j; i++) {
        if (existing[i].innerHTML === item.innerHTML) {
            return true;
        }
    }
    return false;
}

randgen.init = function() {
    const randTables = document.querySelectorAll('[data-type="zufallstabelle"]');
    for (const randTable of randTables) {
        const tableName = randTable.getAttribute('data-table');
        if (randTable.getAttribute('data-manual') !== 'false') {
            randgen.array2html(tabellen[tableName], document.getElementById(tableName + 'Table'));
        }
        const btn = randTable.querySelector('button');
        btn.addEventListener('click', function (event) {
            randgen.generate(event.target);
        }, false);
        if (randTable.getAttribute('data-auto') !== 'false') {
            randgen.generate(btn);
        }
    }
}

randgen.array2html = function(table, dst) {
    const j = table.length;
    const tbl = document.createElement('table');
    const thead = document.createElement('thead');
    thead.innerHTML = '<tr><th>W' + j + '</th><th>&nbsp;</th></tr>';
    tbl.appendChild(thead);
    const tbody = document.createElement('tbody');

    for (let i = 0; i < j; i++) {
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        th.textContent = i + 1;
        const td = document.createElement('td');
        const z = table[i].split(/\[|\]/);
        for (let k = 0; k < z.length; k++) {
            const w = z[k].match(/^(\d)?W(\d+)$/);
            if (w) {
                const span = document.createElement('span');
                span.classList.add('dice');
                span.innerText = w[0];
                td.appendChild(span);
            }
            else if (tabellen[z[k]]) {
                const div = document.createElement('div');
                div.classList.add('tbl-collapsed', 'clickable');
                div.title = 'Klicken um die Tabelle auszuklappen';
                const span = document.createElement('span');
                span.classList.add('btn', 'btn-yellow', 'btn-sm', 'mi');
                span.innerHTML = '&#xF5AA;';
                span.addEventListener('click', function(event) {
                    event.target.parentNode.classList.toggle('tbl-collapsed');
                }, false);
                div.appendChild(span);
                randgen.array2html(tabellen[z[k]], div);
                td.appendChild(div);
            }
            else if (z[k].charAt(0) === '?') {
                if (randgen.randNr(2) === 0) {
                    td.appendChild(document.createTextNode(z[k].substring(1)));
                }
            }
            else {
                td.appendChild(document.createTextNode(z[k]));
            }
        }
        tr.appendChild(th);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    tbl.appendChild(tbody);
    dst.appendChild(tbl);
}

randgen.randNr = function(x) {
    return Math.floor(Math.random() * x);
}

randgen.randTable = function(table) {
    return table[Math.floor(Math.random() * table.length)];
}

randgen.randOrd = function() {
    return (Math.round(Math.random()) - 0.5);
}

randgen.numSort = function (a, b) {
    return a - b;
}

randgen.parser = function(x) {
    const z = x.split(/\[|\]/);
    let u = "";
    for (let i = 0; i < z.length; i++) {
        const w = z[i].match(/^(\d)?W(\d+)$/);
        if (w) {
            let e = 0;
            if (!w[1]) {
                w[1] = 1;
            }
            for (let j = 0; j < w[1]; j++) {
                e += 1 + randgen.randNr(w[2]);
            }
            u += e;
        }
        else if (tabellen[z[i]]) {
            u += randgen.parser(randgen.randTable(tabellen[z[i]]));
        }
        else if (z[i].charAt(0) === '?') {
            if (randgen.randNr(2) === 0) {
                u += z[i].substring(1);
            }
        }
        else {
            u += z[i];
        }
    }
    return u;
}

// Sternensysteme
var galaxygen = {};

galaxygen.generate = function () {
    let anzplaneten = 0;
    let groesse;
    let bewohnbareplaneten;
    let optbewohnt = document.getElementById('optbewohnt').options[document.getElementById('optbewohnt').selectedIndex].value;
    let optgroesse = document.getElementById('optgroesse').options[document.getElementById('optgroesse').selectedIndex].value;

    document.getElementById('galaxyname').textContent = randgen.parser(randgen.randTable(tabellen["planetenprefix"])) + " " +
        randgen.parser(randgen.randTable(tabellen["planetennamen"])) + " " + randgen.parser(randgen.randTable(tabellen["planetensuffix"]));

    if (optgroesse === "zufall") {
        optgroesse = randgen.randNr(2) === 0 ? "gross" : "klein";
    }
    if (optgroesse === "klein") {
        anzplaneten = randgen.randNr(10) + 1;
        groesse = (randgen.randNr(5) + anzplaneten) * 500;
    }
    else if (optgroesse === "gross") {
        anzplaneten = randgen.randNr(20) + 5;
        groesse = (randgen.randNr(12) + anzplaneten) * 500;
    }
    document.getElementById('planeten').textContent = anzplaneten + " Planeten / " + groesse + " Millionen km";

    if (optbewohnt === "zufall") {
        optbewohnt = randgen.randNr(2) === 0 ? "ja" : "nein";
    }

    document.getElementById("zentralgestirn").textContent = optbewohnt === "ja" ?
        randgen.parser(tabellen["sternensysteme_bewohnbar_unbewohnbar"][0]) :
        randgen.parser(tabellen["sternensysteme_bewohnbar_unbewohnbar"][1]);

    document.getElementById("besonderheit").textContent = randgen.parser(randgen.randTable(tabellen["gal_besonderheit"]));

    if (optbewohnt === "ja") {
        bewohnbareplaneten = randgen.randNr(3) + 1;
        if (bewohnbareplaneten > anzplaneten) { bewohnbareplaneten = anzplaneten; }
        document.getElementById('bewohnbar').textContent = "ja, " + bewohnbareplaneten + " Planeten";
    }
    else if (optbewohnt === "nein") {
        bewohnbareplaneten = 0;
        document.getElementById('bewohnbar').textContent = "nein";
    }

    const unbewohnbareplaneten = anzplaneten - bewohnbareplaneten;
    const ersteplaneten = Math.floor(unbewohnbareplaneten / 2);
    const letzteplaneten = Math.floor(unbewohnbareplaneten / 2) + unbewohnbareplaneten % 2;
    const planetenlistEl = document.getElementById('planetenlist');
    planetenlistEl.textContent = '';
    for (let i = 0; i < ersteplaneten; i++) {
        const li = document.createElement('li');
        li.textContent = randgen.parser(randgen.randTable(tabellen["planetentyp_unbewohnbar"]));
        planetenlistEl.appendChild(li);
    }
    for (let i = 0; i < bewohnbareplaneten; i++) {
        const li = document.createElement('li');
        li.textContent = randgen.parser(randgen.randTable(tabellen["gal_planetneu"])) + "; Bewohner: " +
            randgen.parser(randgen.randTable(tabellen["gal_bewohnt"]))
        planetenlistEl.appendChild(li);
    }
    for (let i = 0; i < letzteplaneten; i++) {
        const li = document.createElement('li');
        li.textContent = randgen.parser(randgen.randTable(tabellen["planetentyp_unbewohnbar"]));
        planetenlistEl.appendChild(li);
    }
}

galaxygen.init = function() {
    galaxygen.generate();
    document.getElementsByName('generate')[0].addEventListener('click', function() {
        galaxygen.generate();
    }, false);
}

// SLC Generator
var slcgen = {};

slcgen.isduplicate = function(t, r) {
    for (let i = 0; i < t.length; i++) {
        if ((t[i][0] === r[0]) && (t[i][1] === r[1]) && (t[i][2] === r[2]) && (t[i][3] === r[3])) {
            return 1;
        }
    }
    return 0;
}

slcgen.gentupel = function(x) {
    const t = new Array();
    for (let p1 = 1; p1 < x; p1++) {
        for (let p2 = 1; p2 < x; p2++) {
            for (let p3 = 1; p3 < x; p3++) {
                for (let p4 = 1; p4 < x; p4++) {
                    if (p1 + p2 + p3 + p4 === x) {
                        const r = new Array(p1, p2, p3, p4).sort(randgen.numSort);
                        if ((r[0] + 2 >= r[1]) && (r[1] + 2 >= r[2]) && (r[2] + 2 >= r[3])) {
                            if (slcgen.isduplicate(t, r) === 0) { t.push(r); }
                        }
                    }
                }
            }
        }
    }
    const tupel = randgen.randTable(t);
    return (tupel.sort(randgen.randOrd));
};

slcgen.generate = function() {
    const or = document.getElementById('optrasse').options[document.getElementById('optrasse').selectedIndex].value;
    let r = or === "Zufall" ? randgen.randTable(tabellen["rasse"]) : or;
    if (r === "Mensch") {
        const x = randgen.randNr(4);
        switch(x) {
            case 1:
                document.getElementById('name').value = randgen.randTable(tabellen["foederationvormann"]) + " " + randgen.randTable(tabellen["foederationnachnamen"]);
                break;
            case 2:
                document.getElementById('name').value = randgen.randTable(tabellen["foederationvorweib"]) + " " + randgen.randTable(tabellen["foederationnachnamen"]);
                break;
            case 3:
                document.getElementById('name').value = randgen.randTable(tabellen["neuchinanachnamen"]) + " " + randgen.randTable(tabellen["neuchinavormann"]);
                break;
            default:
                document.getElementById('name').value = randgen.randTable(tabellen["neuchinanachnamen"]) + " " + randgen.randTable(tabellen["neuchinavorweib"]);
        }
    }
    else {
        r = randgen.randTable(tabellen["aliens"]);
        document.getElementById('name').value = randgen.randTable(tabellen["aliennamen"]) + randgen.randTable(tabellen["aliensuffix"]);
    }
    document.getElementById('rasse').value = r;
    const m1 = randgen.randTable(tabellen["scmacken"]);
    let m2 = m1;
    while (m1 === m2) {
        m2 = randgen.randTable(tabellen["scmacken"]);
    }
    document.getElementById('macke1').textContent = m1;
    document.getElementById('macke2').textContent = m2;
    const optstufe = document.getElementById('optstufe');
    let stufe = optstufe.options[optstufe.selectedIndex].value;
    if (stufe === "-1") {
        stufe = randgen.randTable(tabellen["stufen"]);
    }
    else {
        stufe = tabellen["stufen"][stufe];
    }
    document.getElementById('stufe').value = stufe[0];
    if (r !== 'Mensch') {
        stufe[1]++;
    }
    const profile = slcgen.gentupel(stufe[1]);
    document.getElementById('haendler').value = profile[0];
    document.getElementById('pilot').value = profile[1];
    document.getElementById('tech').value = profile[2];
    document.getElementById('soeldner').value = profile[3];
}

slcgen.init = function() {
    slcgen.generate();
    document.getElementById('generate').addEventListener('click', function() {
        slcgen.generate();
    }, false);
}

// Namensgenerator
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

namensgen.init = function() {
    document.getElementById('generate').addEventListener('click', function() {
        namensgen.generate();
    }, false);
    document.getElementById('type').addEventListener('change', function() {
        namensgen.generate();
    }, false);
}
