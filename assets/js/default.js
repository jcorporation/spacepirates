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

// horizontal scrollable tables
const tables = document.getElementsByTagName('table');
for (const table of tables) {
    const div = document.createElement('div');
    div.classList.add('table-responsive', 'mb-3');
    table.parentNode.insertBefore(div, table);
    div.appendChild(table);
    randomTable(table);
}

// dice
function randomTable(table) {
    const firstRow = table.getElementsByTagName('tr')[0];
    const th = firstRow.getElementsByTagName('th')[0];
    if (th === undefined) {
        return;
    }
    const tmp = th.textContent.match(/^W(\d+)$/);
    if (tmp === null) {
        return;
    }
    firstRow.classList.add('clickable');
    firstRow.addEventListener('click', function() {
        const rows = table.getElementsByTagName('tbody')[0].rows;
        const sel = table.querySelector('.selected');
        if (sel) {
            sel.classList.remove('selected');
        }
        const r = Math.floor(Math.random() * rows.length);
        rows[r].classList.add('selected');
    }, false);
}

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
    const tmp = el.textContent.match(/(\d+)W(\d+)(\+(\d+))?/);
    const a = Number(tmp[1]);
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

//search
let searchIndex = null;
let stompWords = null;

async function fetchJSON(dataFile, callback) {
    try {
      const response = await fetch('/assets/json/' + dataFile + '.json');
      const data = await response.json();
      cbFetchJSON(dataFile, data, callback);
    } catch (err) {
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
document.getElementById('btnSearch').parentNode.addEventListener('shown.bs.dropdown', function() {
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
    let value = event.target.value.toLowerCase();
    doSearch(value, searchResult);
}, false);

function doSearch(value, resultEl) {
    // normalize searchstring
    value = value.replace(/['`´",;\.\-\?\!\(\)\:\[\]\|\&\/#]/g, '');
    // stomp searchstring
    const stomp = stompWords[value];
    if (stomp !== undefined) {
        value = stomp;
    }
    // search
    const matches = {};
    for (const key in searchIndex) {
        if (key.indexOf(value) === 0) {
            for (const uri in searchIndex[key]) {
                if (matches[uri]) {
                    if (matches[uri] < searchIndex[key][uri]) {
                        matches[uri] = searchIndex[key][uri];
                    }
                }
                else {
                    matches[uri] = searchIndex[key][uri];
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
        crumbs.innerText = path.join(" › ").replace(/_/g, ' ');
        a.innerText = name;
        a.appendChild(crumbs);
        a.href = match; 
        a.classList.add('list-group-item', 'bg-yellow');
        resultEl.appendChild(a);
        i++;
        if (i > 9) {
            break;
        }
    }
}
