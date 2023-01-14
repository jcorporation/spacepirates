var techsprech = {};

techsprech.generate = function() {
    const out = document.getElementById("techsprechout");
    out.textContent = '';
    for (let i = 0; i < 10; i++) {
        const p = document.createElement('p');
        p.classList.add('m-1');
        p.textContent = randgen.randTable(tabellen["existingTechsprechWort1"]) + ' ' +
            randgen.randTable(tabellen["existingTechsprechWort2"]) + '-' +
            randgen.randTable(tabellen["existingTechsprechWort3"]);
        out.appendChild(p);
    }
}

//init
document.getElementById('generate').addEventListener('click', function() {
    techsprech.generate();
}, false);
