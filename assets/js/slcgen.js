var slcgen = {};

slcgen.isduplicate = function(t, r) {
    for (i = 0; i < t.length; i++) {
        if ((t[i][0] == r[0]) && (t[i][1] == r[1]) && (t[i][2] == r[2]) && (t[i][3] == r[3])) {
            return 1;
        }
    }
    return 0;
}

slcgen.gentupel = function(x) {
    var t = new Array();
    for (var p1 = 1; p1 < x; p1++) {
        for (var p2 = 1; p2 < x; p2++) {
            for (var p3 = 1; p3 < x; p3++) {
                for (var p4 = 1; p4 < x; p4++) {
                    if (p1 + p2 + p3 + p4 == x) {
                        var r = new Array(p1, p2, p3, p4).sort(randgen.numSort);
                        if ((r[0] + 2 >= r[1]) && (r[1] + 2 >= r[2]) && (r[2] + 2 >= r[3])) {
                            if (slcgen.isduplicate(t, r) == 0) { t.push(r); }
                        }
                    }
                }
            }
        }
    }
    var tupel = randgen.randTable(t);
    return (tupel.sort(randgen.randOrd));
};

slcgen.generate = function() {
    const or = document.getElementById('optrasse').options[document.getElementById('optrasse').selectedIndex].value;
    let r = or === "Zufall" ? randgen.randTable(tabellen["rasse"]) : or;
    if (r === "Mensch") {
        var x = randgen.randNr(4);
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

//init
slcgen.generate();
document.getElementById('generate').addEventListener('click', function () {
    slcgen.generate();
}, false);
