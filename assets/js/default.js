"use strict";

// clickable event handler
const clickBoxes = document.getElementsByClassName('clickable');
for (const box of clickBoxes) {
    const link = box.getElementsByTagName('a')[0];
    if (link) {
        box.addEventListener('click', function() {
            link.click();
        }, false);
    }
}

// enhance tables
const tables = document.querySelectorAll('table');
for (const table of tables) {
    if (table.parentNode.classList.contains('tbl-collapsed') === false) {
        const div = document.createElement('div');
        div.classList.add('table-responsive', 'mb-3');
        table.parentNode.insertBefore(div, table);
        div.appendChild(table);
    }
    if (randomTable(table) === false) {
        sortTable(table);
    }
}

function getParent(el, parentNodeName) {
    while (el.nodeName !== parentNodeName) {
        if (el.parentNode !== null) {
            el = el.parentNode;
        }
        else {
            break;
        }
    }
    return el;
}

function sortTable(table) {
    const firstRow = table.querySelector('tr');
    const th = firstRow.querySelectorAll('th');
    if (th.length < 2) {
        return false;
    }
    firstRow.classList.add('clickable');
    firstRow.addEventListener('click', function(event) {
        const firstRow = getParent(event.target, 'TR');
        const table = getParent(event.target, 'TABLE');
        const tbody = table.querySelector('tbody');
        const cols = firstRow.querySelectorAll('th');
        let colNr;
        let desc = false;
        for (let i = 0, j = cols.length; i < j; i++) {
            if (cols[i] === event.target) {
                colNr = i;
                const dataSort = cols[i].getAttribute('data-sort');
                if (dataSort === null ||
                    dataSort === 'desc')
                {
                    cols[i].setAttribute('data-sort', 'asc');
                    desc = false;
                }
                else {
                    cols[i].setAttribute('data-sort', 'desc');
                    desc = true;
                }
            }
            else {
                cols[i].removeAttribute('data-sort');
            }
        }
        const rowArray = [];
        const rows = table.querySelector('tbody').querySelectorAll('tr');
        for (let i = 0, j = rows.length; i < j; i++) {
            rowArray.push(rows[i]);
        }
        rowArray.sort(function(a, b) {
            const t1 = a.querySelectorAll('td')[colNr].textContent;
            const t2 = b.querySelectorAll('td')[colNr].textContent;
            return t1.localeCompare(t2, 'de', { ignorePunctuation: true, numeric: true });
        });
        if (desc === true) {
            rowArray.reverse();
        }
        for (let i = 0, j = rowArray.length; i < j; i++) {
            tbody.appendChild(rowArray[i]);
        }
    }, false);
    return true;
}

function randomTable(table) {
    const firstRow = table.querySelector('tr');
    const th = firstRow.querySelector('th');
    if (th === null) {
        return false;
    }
    const tmp = th.textContent.match(/^W(\d+)$/);
    if (tmp === null) {
        return false;
    }
    firstRow.classList.add('clickable');
    firstRow.addEventListener('click', function() {
        const rows = table.querySelector('tbody').rows;
        const sel = table.querySelector('.selected');
        if (sel) {
            sel.classList.remove('selected');
        }
        const r = Math.floor(Math.random() * rows.length);
        rows[r].classList.add('selected');
    }, false);
    return true;
}

// dice tags
const dices = document.getElementsByClassName('dice');
for (const dice of dices) {
    dice.classList.add('btn', 'btn-sm', 'btn-yellow');
    dice.addEventListener('click', function(event) {
        if (event.target.classList.contains('dice')) {
            rollDice(event.target);
        }
        else {
            rollDice(event.target.parentNode);
        }
    }, false);
}

function rollDice(el) {
    const tmp = el.textContent.match(/(\d+)?W(\d+)(\+(\d+))?/);
    const a = tmp[1] === undefined ? 1: Number(tmp[1]);
    const w = Number(tmp[2]);
    const p = tmp[4] ? Number(tmp[4]) : 0;
    let result = 0;
    let resultStr = '(';
    for (let i = 1; i <= a; i++) {
        const r = Math.floor(Math.random() * w) + 1;
        resultStr = resultStr + r;
        if (i < a) {
            resultStr = resultStr+' ';
        }
        result = result + r;
    }
    result = result + p;
    if ( p > 0) {
        resultStr = resultStr + ') + ' + p + ' = ' +result;
    }
    else {
        resultStr = resultStr + ') = ' + result;
    }
    const e = document.createElement('span');
    e.classList.add('diceresult');
    e.textContent = resultStr;

    if (el.lastChild !== el.firstChild &&
        el.lastChild.classList.contains('diceresult'))
    {
        el.lastChild.textContent = resultStr;
    }
    else {
        el.appendChild(e);
    }
}

// search
let searchIndex = null;
let stompWords = null;

async function fetchJSON(dataFile, callback) {
    try {
      const response = await fetch('/assets/json/' + dataFile + '.json');
      const data = await response.json();
      cbFetchJSON(dataFile, data, callback);
    }
    catch (err) {
      console.log(err);
    }
}

function cbFetchJSON(dataFile, obj, callback) {
    switch(dataFile) {
        case 'index':
            searchIndex = obj;
            break;
        case 'index_stompkeys':
            stompWords = obj;
            break;
    }
    if (callback !== null) {
        callback();
    }
}

function cbSearchInitialized() {
    if (searchIndex !== null &&
        stompWords !== null)
    {
        inputSearch.removeAttribute('disabled');
        inputSearch.setAttribute('placeholder','Suchen');
        inputSearch.focus();
        return true;
    }
    return false;
}

const inputSearch = document.getElementById('inputSearch');
const searchResult = document.getElementById('searchResult');
const searchMenu = document.getElementById('search-menu');
if (searchMenu !== null) {
    searchMenu.addEventListener('shown.bs.offcanvas', function() {
        if (cbSearchInitialized() === false) {
            inputSearch.setAttribute('disabled', 'disabled');
            inputSearch.setAttribute('placeholder','Wird initializiert...');
            fetchJSON('index', cbSearchInitialized);
            fetchJSON('index_stompkeys', cbSearchInitialized);
        }
    }, false);

    inputSearch.addEventListener('click', function(event) {
        // do not close dropdown
        event.stopPropagation();
    }, false);

    inputSearch.addEventListener('keyup', function(event) {
        doSearch(event.target.value, searchResult);
    }, false);
}

function doSearch(value, resultEl) {
    if (value.length == 0) {
        resultEl.textContent = '';
        return;
    }
    // normalize searchstring
    value = value.toLowerCase().replace(/['`´",;\.\-\?\!\(\)\:\[\]\|\&\/#\{\}]/g, '');
    value = value.replace(/[üöäßÜÖÄ]/, function(m) {
        switch(m) {
            case 'ü': return 'ue';
            case 'ö': return 'oe';
            case 'ä': return 'ae';
            case 'ß': return 'ss';
            case 'Ü': return 'ue';
            case 'Ö': return 'oe';
            case 'Ä': return 'ae';
        }
    });
    // remove prefixes
    let value_old;
    do {
        // replace all prefixes
        value_old = value;
        value = value.replace(/^\s*(aus|bis|zum|für|hinter|in|im|mehr|zu|nach|vor|dem|an|auf|der|die|das|ein|eine|\d+\.?)\s+/, '')
    } while (value !== value_old)
    // stomp searchstring
    const stomp = stompWords[value];
    if (stomp !== undefined) {
        value = stomp;
    }
    // search
    const matches = {};
    for (const key in searchIndex) {
        if (key.indexOf(value) === 0) {
            const bump = key === value ? 50 : 0;
            for (const uri in searchIndex[key]) {
                if (matches[uri]) {
                    if (matches[uri] < searchIndex[key][uri]) {
                        matches[uri] = searchIndex[key][uri] + bump;
                    }
                }
                else {
                    matches[uri] = searchIndex[key][uri] + bump;
                }
            }
        }
    }
    // sort
    var keys = Object.keys(matches);
    const sorted = keys.sort(function(a, b) {
        //primary sort by weight
        if (matches[a] < matches[b]) {
            return 1;
        }
        if (matches[a] > matches[b]) {
            return -1;
        }
        //secondary sort by uri
        if (a < b) {
            return 1;
        }
        if (a > b) {
            return -1;
        }
        //equal
        return 0;
    });
    resultEl.innerText = '';
    let i = 0;
    for (const match of sorted) {
        const a = document.createElement('a');
        const path = match.split('/');
        path.shift();
        let name = path.pop();
        if (name === '') {
            name = path.pop();
        }
        name = name.replace(/_/g, ' ');
        const crumbs = document.createElement('small');
        crumbs.classList.add('d-block');
        crumbs.textContent = path.join(" › ").replace(/_/g, ' ');
        a.innerText = name;
        a.appendChild(crumbs);
        a.href = match; 
        a.classList.add('list-group-item');
        resultEl.appendChild(a);
        i++;
        if (i > 49) {
            break;
        }
    }
    if (i === 0) {
        const div = document.createElement('div');
        div.classList.add('list-group-item');
        div.textContent = 'Kein Ergebnis';
        resultEl.appendChild(div);
    }
    return sorted;
}
