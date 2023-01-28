"use strict";

// helper functions
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

// sitemap
const sitemap = {};

sitemap.showNode = function(node) {
    node.setAttribute('data-expanded', 'true');
    node.innerHTML = '&#xF2E9;';
    node.parentNode.lastElementChild.style.display = 'block';
}

sitemap.hideNode = function(node) {
    node.removeAttribute('data-expanded');
    node.innerHTML = '&#xF4FD;';
    node.parentNode.lastElementChild.style.display = 'none';
}

sitemap.show = function() {
    sitemap.container = document.querySelector('.sitemap');
    sitemap.container.addEventListener('click', function(event) {
        if (event.target.classList.contains('sm-expand')) {
            if (event.target.getAttribute('data-expanded') === 'true') {
                sitemap.hideNode(event.target);
            }
            else {
                sitemap.showNode(event.target);
            }
            event.preventDefault();
            event.stopPropagation();
        }
    }, false);
    sitemap.showCurrent();
}

sitemap.showCurrent = function() {
    const path = decodeURI(window.location.pathname).replace(/[^\w]/g, '_').replace(/__/g, '_');
    let site = sitemap.container.querySelector('#sitemap-' + path);
    site.classList.add('sm-current');
    if (site.firstChild.classList.contains('sm-expand')) {
        sitemap.showNode(site.firstChild);
    }

    while (site.nodeName !== 'DIV') {
        if (site.nodeName === 'UL') {
            const ex = site.previousElementSibling;
            if (ex) {
                sitemap.showNode(ex.previousElementSibling);
            }
        }
        site = site.parentNode;
    }
}

sitemap.fetch = async function() {
    try {
      const response = await fetch('/assets/html/sitemap.html');
      document.getElementById('sitemap-body').innerHTML = await response.text();
      sitemap.show();
    }
    catch (err) {
      console.log(err);
    }
}

sitemap.init = function() {
    const sitemapEl = document.getElementById('nav-sitemap');
    if (sitemapEl === null) {
        return;
    }
    sitemapEl.addEventListener('show.bs.tab', function() {
        if (document.getElementById('main-menu').querySelector('.sitemap') === null) {
            sitemap.fetch();
        }
        else {
            sitemap.showCurrent();
        }
    }, false);
}

// enhance tables
const tables = {};

tables.init = function() {
    tables.allTables = document.querySelectorAll('table');
    for (const table of tables.allTables) {
        const caption = table.previousElementSibling.classList.contains('table-caption')
            ? table.previousElementSibling.textContent
            : '';
        if (table.parentNode.classList.contains('tbl-collapsed') === false) {
            const div = document.createElement('div');
            div.classList.add('table-responsive', 'mb-3');
            table.parentNode.insertBefore(div, table);
            div.appendChild(table);
        }
        if (caption !== '') {
            const c = document.createElement('caption');
            c.textContent = caption;
            table.insertAdjacentElement('afterbegin', c);
            table.parentNode.previousElementSibling.remove();
        }
        const firstRow = table.querySelector('tr');
        if (tables.randomTable(table) === true) {
            firstRow.title = 'Klick: würfeln';
        }
        else if (tables.sortTable(table) === true) {
            firstRow.title = 'Klick: sortieren';
        }
        if (tables.filterTable(table) === true) {
            firstRow.title = firstRow.title += '\nRechts Klick: filtern';
        }
    }
}

tables.filterTable = function(table) {
    const firstRow = table.querySelector('tr');
    const th = firstRow.querySelectorAll('th');
    if (th.length < 2) {
        return false;
    }
    firstRow.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        tables.showHideFilter(event);
    }, false);
    return true;
}

tables.showHideFilter = function(event) {
    const table = getParent(event.target, 'TABLE');
    const inputEl = event.target.querySelector('input');
    if (inputEl !== null) {
        inputEl.remove();
        tables.showAllRows(table);
        return;
    }
    const firstRow = table.querySelector('tr');
    const inputs = firstRow.querySelectorAll('input');
    for (let i = 0, j = inputs.length; i < j; i++) {
        inputs[i].remove();
    }
    tables.showAllRows(table);
    const input = document.createElement('input');
    input.placeholder = 'Filtern';
    input.classList.add('filter-table');
    event.target.appendChild(input);
    input.focus();
    input.addEventListener('keyup', function(ev) {
        tables.filterRows(ev);
    }, false);
}

tables.showAllRows = function(table) {
    const tbody = table.querySelector('tbody');
    for (let i = 0, j = tbody.rows.length; i < j; i++) {
        tbody.rows[i].classList.remove('d-none');
    }
}

tables.filterRows = function(event) {
    const filter = event.target.value.toLowerCase();
    const firstRow = getParent(event.target, 'TR');
    const cell = getParent(event.target, 'TH');
    const cols = firstRow.querySelectorAll('th');
    let colNr;
    for (let i = 0, j = cols.length; i < j; i++) {
        if (cols[i] === cell) {
            colNr = i;
            break;
        }
    }
    const table = getParent(event.target, 'TABLE');
    const tbody = table.querySelector('tbody');
    for (let i = 0, j = tbody.rows.length; i < j; i++) {
        if (tbody.rows[i].cells[colNr].textContent.toLowerCase().indexOf(filter) > -1) {
            tbody.rows[i].classList.remove('d-none');
        }
        else {
            tbody.rows[i].classList.add('d-none');
        }
    }
}

tables.sortTable = function(table) {
    const firstRow = table.querySelector('tr');
    const th = firstRow.querySelectorAll('th');
    if (th.length < 2) {
        return false;
    }
    firstRow.classList.add('clickable');
    firstRow.addEventListener('click', function(event) {
        tables.sortRows(event);
    }, false);
    return true;
}

tables.sortRows = function(event) {
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
    const rows = table.querySelector('tbody').rows;
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
}

tables.randomTable = function(table) {
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
const dice = {};

dice.init = function() {
    dice.dices = document.getElementsByClassName('dice');
    for (const el of dice.dices) {
        el.classList.add('btn', 'btn-sm', 'btn-yellow');
        el.addEventListener('click', function(event) {
            if (event.target.classList.contains('dice')) {
                dice.roll(event.target);
            }
            else {
                dice.roll(event.target.parentNode);
            }
        }, false);
    }
}

dice.roll = function(el) {
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
const siteSearch = {};

siteSearch.fetchJSON = async function(dataFile, callback) {
    try {
      const response = await fetch('/assets/json/' + dataFile + '.json');
      const data = await response.json();
      siteSearch.cbFetchJSON(dataFile, data, callback);
    }
    catch (err) {
      console.log(err);
    }
}

siteSearch.cbFetchJSON = function(dataFile, obj, callback) {
    switch(dataFile) {
        case 'index':
            siteSearch.searchIndex = obj;
            break;
        case 'index_stompkeys':
            siteSearch.stompWords = obj;
            break;
        case 'sitemap':
            siteSearch.sitemap = obj;
            break;
    }
    if (callback !== null) {
        callback();
    }
}

siteSearch.cbSearchInitialized = function() {
    if (siteSearch.searchIndex !== null &&
        siteSearch.stompWords !== null &&
        siteSearch.sitemap !== null)
    {
        siteSearch.inputSearch.removeAttribute('disabled');
        siteSearch.inputSearch.setAttribute('placeholder','Suchen');
        siteSearch.inputSearch.focus();
        return true;
    }
    return false;
}

siteSearch.doSearch = function(value, resultEl) {
    if (value.length === 0) {
        resultEl.textContent = '';
        return;
    }
    // normalize searchstring
    value = value.toLowerCase().replace(/['`´",;.\-?!():[\]|&/#{}]/g, '');
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
    let valueOld;
    do {
        // replace all prefixes
        valueOld = value;
        value = value.replace(/^\s*(aus|bis|zum|für|hinter|in|im|mehr|zu|nach|vor|dem|an|auf|der|die|das|ein|eine|\d+\.?)\s+/, '')
    } while (value !== valueOld)
    // stomp searchstring
    const stomp = siteSearch.stompWords[value];
    if (stomp !== undefined) {
        value = stomp;
    }
    // search
    const matches = {};
    for (const key in siteSearch.searchIndex) {
        if (key.indexOf(value) === 0) {
            const bump = key === value ? 50 : 0;
            for (const uri in siteSearch.searchIndex[key]) {
                if (matches[uri]) {
                    if (matches[uri] < siteSearch.searchIndex[key][uri]) {
                        matches[uri] = siteSearch.searchIndex[key][uri] + bump;
                    }
                }
                else {
                    matches[uri] = siteSearch.searchIndex[key][uri] + bump;
                }
            }
        }
    }
    // sort
    const keys = Object.keys(matches);
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
        const crumbs = document.createElement('small');
        crumbs.classList.add('d-block');
        crumbs.textContent = siteSearch.createCrumb(match);
        a.innerText = siteSearch.sitemap[match].title;
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

siteSearch.createCrumb = function(match) {
    const path = match.split('/');
    path.shift();
    path.pop();
    let crumb = '';
    let link = '/';
    const lastIdx = path.length - 1;
    for (let i = 0; i <= lastIdx; i++) {
        link += path[i] + '/';
        crumb += siteSearch.sitemap[link].title + (i < lastIdx ? ' › ' : '');
    }
    return crumb;
}

siteSearch.init = function() {
    siteSearch.searchIndex = null;
    siteSearch.stompWords = null;
    siteSearch.sitemap = null;
    siteSearch.inputSearch = document.getElementById('inputSearch');
    siteSearch.searchResult = document.getElementById('searchResult');

    const searchEl = document.getElementById('nav-search');
    if (searchEl === null) {
        return;
    }
    searchEl.addEventListener('show.bs.tab', function() {
        if (siteSearch.cbSearchInitialized() === false) {
            siteSearch.inputSearch.setAttribute('disabled', 'disabled');
            siteSearch.inputSearch.setAttribute('placeholder','Wird initializiert...');
            siteSearch.fetchJSON('index', siteSearch.cbSearchInitialized);
            siteSearch.fetchJSON('index_stompkeys', siteSearch.cbSearchInitialized);
            siteSearch.fetchJSON('sitemap', siteSearch.cbSearchInitialized);
        }
    }, false);

    siteSearch.inputSearch.addEventListener('click', function(event) {
        // do not close dropdown
        event.stopPropagation();
    }, false);

    siteSearch.inputSearch.addEventListener('keyup', function(event) {
        siteSearch.doSearch(event.target.value, siteSearch.searchResult);
    }, false);
}

//init all
dice.init();
sitemap.init();
siteSearch.init();
tables.init();

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
