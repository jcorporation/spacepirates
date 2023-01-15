const randgen = {};

randgen.generate = function(target) {
    const table = target.getAttribute('data-table');
    const count = Number(target.previousElementSibling.value);
    const out = document.getElementById(table + 'Out');
    out.innerText = '';
    for (let i = 0; i < count; i++) {
        const item = document.createElement('div');
        item.classList.add('list-group-item');
        item.innerHTML = randgen.parser(randgen.randTable(tabellen[table]));
        out.appendChild(item);
    }
}

randgen.init = function() {
    const btn = document.querySelector('[data-id="generate-btn"]');
    btn.addEventListener('click', function (event) {
        randgen.generate(event.target);
    }, false);
}

randgen.start = function() {
    const btn = document.querySelector('[data-id="generate-btn"]');
    randgen.generate(btn);
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
            for (var j = 0; j < w[1]; j++) {
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
