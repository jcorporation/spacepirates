var beute = {};

beute.generate = function () {
    for (let i = 1; i <= 5; i++) {
        document.getElementById('beute' + i).textContent = randgen.parser(randgen.randTable(tabellen.beute));
    }
}

//init
beute.generate();
document.getElementById('generate').addEventListener('click', function () {
    beute.generate();
}, false);
