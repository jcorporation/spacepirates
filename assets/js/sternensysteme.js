const galaxygen = {};

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
    else if (optgroesse == "gross") {
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
    else if (optbewohnt == "nein") {
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

//init
galaxygen.generate();
document.getElementsByName('generate')[0].addEventListener('click', function () { galaxygen.generate(); }, false);
