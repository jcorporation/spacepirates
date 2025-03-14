"use strict";

var ignoreLinksTo = [
    "/Weltraum/Sternenkarte/"
];
var ignoreLinksFrom = [
    "/Weltraum/Sternenkarte/"
];

var errorToast = new BSN.Toast('#errorToast');
var infoToast = new BSN.Toast('#infoToast');

// helper functions
function execFunctionByName(functionName) {
    const namespace = functionName.split('.');
    if (namespace.length === 2) {
        const context = namespace.shift();
        const functionToExecute = namespace.shift();
        const initFunc = window[context][functionToExecute];
        initFunc();
    }
    else {
        functionName();
    }
}

function getYpos(el, parent) {
    let yPos = 0;
    while (el !== parent &&
           el !== null
    ) {
        yPos += (el.offsetTop + el.clientTop);
        el = el.offsetParent;
    }
    return yPos;
}

// startunes
var startunes = {};

startunes.play = function(event) {
    event.preventDefault();
    event.stopPropagation();
    const audioEl = document.createElement('source');
    audioEl.setAttribute('type', 'audio/mpeg');
    audioEl.setAttribute('src', event.target.getAttribute('data-href'));
    if (startunes.audioEl.firstChild) {
        startunes.audioEl.replaceChild(audioEl, startunes.audioEl.firstChild);
    }
    else {
        startunes.audioEl.appendChild(audioEl);
    }
    startunes.songEl.textContent = 'Lade...';
    startunes.songName = event.target.textContent;
    startunes.audioEl.load();
}

startunes.init = function() {
    startunes.songName = '';
    startunes.songEl = document.getElementById('startunessong');
    startunes.audioEl = document.getElementById('startunesaudio');
    startunes.songButtons = document.getElementById('startunesbottom').getElementsByTagName('a');

    startunes.audioEl.addEventListener('canplay', function() {
        startunes.songEl.textContent = 'Spiele: ' + startunes.songName;
        startunes.audioEl.play();
    }, false);

    for (let i = 0; i < startunes.songButtons.length; i++) {
        startunes.songButtons[i].addEventListener('click', function(event) {
            startunes.play(event);
        }, false);
    }
}

// sitemap
var sitemap = {};

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

sitemap.scrollIntoView = function(el) {
    const mainMenu = document.getElementById('main-menu');
    const posY = getYpos(el, mainMenu);
    const mainMenuBody = document.getElementById('main-menu-body');
    mainMenuBody.scrollTop = posY - 80 - (mainMenuBody.offsetHeight / 2);
}

sitemap.showCurrent = function() {
    const path = decodeURI(window.location.pathname).replace(/[^\w]/g, '_').replace(/__/g, '_');
    const cur = sitemap.container.querySelector('.sm-current');
    if (cur !== null) {
        cur.classList.remove('sm-current');
    }
    const siteLink = sitemap.container.querySelector('#sitemap-' + path);
    if (siteLink) {
        siteLink.classList.add('sm-current');
        if (siteLink.firstChild.classList.contains('sm-expand')) {
            sitemap.showNode(siteLink.firstChild);
        }
        let site = siteLink;
        while (site.nodeName !== 'DIV') {
            if (site.nodeName === 'UL') {
                const ex = site.previousElementSibling;
                if (ex) {
                    sitemap.showNode(ex.previousElementSibling);
                }
            }
            site = site.parentNode;
        }
        sitemap.scrollIntoView(siteLink);
    }
}

sitemap.fetch = async function() {
    try {
        const response = await fetch('/assets/html/sitemap.html');
        if (response.status !== 200) {
            showError('Fehler beim Aufruf von /assets/html/sitemap.html');
            return;
        }
        const sitemapEl = document.querySelector('#sitemap-body');
        sitemapEl.innerHTML = await response.text();
        contentInit(sitemapEl);
        sitemap.show();
    }
    catch(error) {
        showError(error);
    }
}

sitemap.init = function(scope) {
    const sitemapEl = scope.querySelector('#nav-sitemap');
    if (sitemapEl === null) {
        return;
    }
    if (scope.getElementById('main-menu').querySelector('.sitemap') === null) {
        sitemap.fetch();
    }
    else {
        sitemap.showCurrent();
    }

    sitemapEl.addEventListener('shown.bs.tab', function() {
        const cur = sitemap.container.querySelector('.sm-current');
        sitemap.scrollIntoView(cur);
    }, false);
}

// enhance tables
var tables = {};

tables.init = function(scope) {
    tables.allTables = scope.querySelectorAll('table');
    for (const table of tables.allTables) {
        const caption = table.previousElementSibling && table.previousElementSibling.classList.contains('table-caption')
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
    const table = event.target.closest('TABLE');
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
    const firstRow = event.target.closest('TR');
    const cell = event.target.closest('TH');
    const cols = firstRow.querySelectorAll('th');
    let colNr;
    for (let i = 0, j = cols.length; i < j; i++) {
        if (cols[i] === cell) {
            colNr = i;
            break;
        }
    }
    const table = event.target.closest('TABLE');
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
    const firstRow = event.target.closest('TR');
    const table = event.target.closest('TABLE');
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
        const t1 = a.querySelectorAll('td')[colNr].textContent.replace('.', '');
        const t2 = b.querySelectorAll('td')[colNr].textContent.replace('.', '');
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
        for (const row of rows) {
            row.classList.remove('selected');
        }
        const r = Math.floor(Math.random() * rows.length);
        rows[r].classList.add('selected');
    }, false);
    return true;
}

// dice tags
var dice = {};

dice.init = function(scope) {
    dice.dices = scope.querySelectorAll('.dice');
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
var siteSearch = {};

siteSearch.fetchJSON = async function(dataFile, callback) {
    try {
        const response = await fetch('/assets/json/' + dataFile + '.json');
        if (response.status !== 200) {
            showError('Fehler beim Aufruf von /assets/json/' + dataFile + '.json');
            return;
        }
        const data = await response.json();
        siteSearch.cbFetchJSON(dataFile, data, callback);
    }
    catch(error) {
        showError(error);
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
    value = value.replace(/[üöäßÜÖÄ]/g, function(m) {
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
        value = value.replace(/^\s*(aus|bis|zum|fuer|hinter|in|im|mehr|zu|nach|vor|dem|den|an|auf|der|die|das|ein|eine|\d+\.?)\s+/, '')
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
        a.addEventListener('click', function(event) {
            link.open(event);
        }, false);
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

siteSearch.init = function(scope) {
    const searchEl = scope.querySelector('#nav-search');
    if (searchEl === null) {
        return;
    }

    siteSearch.searchIndex = null;
    siteSearch.stompWords = null;
    siteSearch.sitemap = null;
    siteSearch.inputSearch = scope.querySelector('#inputSearch');
    siteSearch.searchResult = scope.querySelector('#searchResult');
    
    if (siteSearch.cbSearchInitialized() === false) {
        siteSearch.inputSearch.setAttribute('disabled', 'disabled');
        siteSearch.inputSearch.setAttribute('placeholder','Wird initializiert...');
        siteSearch.fetchJSON('index', siteSearch.cbSearchInitialized);
        siteSearch.fetchJSON('index_stompkeys', siteSearch.cbSearchInitialized);
        siteSearch.fetchJSON('sitemap', siteSearch.cbSearchInitialized);
    }

    searchEl.addEventListener('shown.bs.tab', function() {
        siteSearch.inputSearch.focus();
    }, false);

    siteSearch.inputSearch.addEventListener('keyup', function(event) {
        siteSearch.doSearch(event.target.value, siteSearch.searchResult);
    }, false);
}

var svg = {};
svg.init = function(scope) {
    const cards = scope.querySelectorAll('.card-svg');
    for (const card of cards) {
        const image = card.querySelector('img');
        card.getElementsByTagName('button')[0].addEventListener('click', function() {
            const curWidth = image.offsetWidth;
            image.style.width = (curWidth * 0.8) + 'px';
        }, false);

        card.getElementsByTagName('button')[1].addEventListener('click', function() {
            const curWidth = image.offsetWidth;
            image.style.width = (curWidth * 1.2) + 'px';
        }, false);
    }
}

var link = {};
link.init = function(scope) {
    const as = scope.querySelectorAll('a');
    for (const a of as) {
        const bsToggle = a.getAttribute('data-bs-toggle');
        if (bsToggle !== null) {
            if (bsToggle === 'offcanvas') {
                a.addEventListener('click', function() {
                    const mainMenuInit = BSN.Offcanvas.getInstance(document.getElementById('main-menu'));
                    mainMenuInit.show();
                }, false);
            }
        }
        else {
            a.addEventListener('click', function(event) {
                link.open(event);
            }, false);
        }
    }
}

link.open = async function(event) {
    // get nearest link
    let target = event.target;
    let href = target.getAttribute('href');
    while (href === null) {
        target = target.parentNode;
        href = target.getAttribute('href');
    }
    // handle only site internal links
    if (href.charAt(0) !== '/' ||
        ignoreLinksTo.includes(href) ||
        ignoreLinksFrom.includes(window.location.pathname) ||
        href.indexOf('/Publikationen/') === 0 ||
        href.indexOf('/assets/') === 0
    ) {
        return;
    }
    // prevent default action
    event.preventDefault();
    link.fetch(href);
}

link.fetch = async function(href) {
    // fetch site and replace elements
    const response = await fetch(href);
    if (response.status !== 200) {
        showError('Fehler beim Aufruf von ' + href);
        return;
    }
    const data = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    const title = doc.querySelector('title');
    document.querySelector('title').replaceWith(title);
    for (const elName of ['header', '#mainTitle', 'main', 'aside']) {
        const newEl = doc.querySelector(elName);
        document.querySelector(elName).replaceWith(newEl);
        if (elName === 'main') {
            contentInit(newEl);
        }
        else {
            link.init(newEl);
        }
    }
    if (href === '/') {
        document.querySelector('#mainTitle').classList.add('d-none');
    }
    else {
        document.querySelector('#mainTitle').classList.remove('d-none');
    }
    // update browser history and sitemap
    history.pushState({}, "", href);
    requestAnimationFrame(() => {
        window.scrollTo(0, 0);
    });
    sitemap.showCurrent();
    // update navigation buttons in footer
    const navBottom = doc.querySelector('footer > nav > div:last-child');
    document.querySelector('footer > nav > div:last-child').replaceWith(navBottom);
    link.init(navBottom);
}

function showError(text) {
    document.getElementById('errorText').textContent = text;
    errorToast.show();
}

function showInfo(text) {
    document.getElementById('infoText').textContent = text;
    infoToast.show();
}

function contentInit(scope) {
    randgen.init(scope);
    dice.init(scope);
    tables.init(scope);
    svg.init(scope);
    link.init(scope);
    setOffcanvas();

    // clickable event handler
    const clickBoxes = document.querySelectorAll('.clickable');
    for (const box of clickBoxes) {
        const href = box.querySelector('a');
        if (href) {
            box.addEventListener('click', function() {
                href.click();
            }, false);
        }
    }
    //data-init handler
    const customInits = document.querySelectorAll('[data-init]');
    for (const init of customInits) {
        execFunctionByName(init.getAttribute('data-init'));
    }
    //BSN
    BSN.initCallback(document.querySelector('main'));
}

async function checkServiceWorker() {
    const swRegistration = await navigator.serviceWorker.getRegistration();
    const offlineBtn = document.getElementById('offlineBtn');
    if (swRegistration === undefined) {
        offlineBtn.innerHTML = '&#xF29B;';
        offlineBtn.title = 'Offline verfügbar machen';
        offlineBtn.setAttribute('data-enabled', 'false');
    }
    else {
        offlineBtn.innerHTML = '&#xF298;';
        offlineBtn.title = 'Offline verfügbar';
        offlineBtn.setAttribute('data-enabled', 'true');
    }
    offlineBtn.classList.remove('disabled');
}

async function unregisterWorker() {
    const swRegistration = await navigator.serviceWorker.getRegistration();
    if (swRegistration === undefined) {
        showError('Fehler beim Entfernen des ServiceWorkers.');
        return;
    }
    showInfo('ServiceWorker wird entfernt.');
    await swRegistration.unregister();
    caches.keys().then((keyList) => {
        keyList.map((key) => {
            caches.delete(key);
        })
    });
    checkServiceWorker();
}

function setOffcanvas() {
    const topBarHeight = document.getElementById('top-bar').offsetHeight;
    const mainMenuEl = document.getElementById('main-menu');
    mainMenuEl.style.top = 'calc(' + topBarHeight + 'px + 0.5rem)';
    mainMenuEl.style.maxHeight = 'calc(100vh - ' + topBarHeight + 'px - 5rem)';
}

//init all
function siteInit(scope) {
    contentInit(scope);

    const mainMenuBody = document.getElementById('main-menu-body');
    if (mainMenuBody === null) {
        return;
    }

    //update offcanvas top on window resize
    const resizeObserver = new ResizeObserver(function() {
        requestAnimationFrame(() => {
            setOffcanvas();
        });
    });
    resizeObserver.observe(document.querySelector('body'));

    window.addEventListener('popstate', function() {
        // The popstate event is fired each time when the current history entry changes.
        link.fetch(window.location.pathname);
    }, false);

    siteSearch.init(scope);
    sitemap.init(scope);

    const mainMenuInit = BSN.Offcanvas.getInstance(document.getElementById('main-menu'));
    mainMenuBody.addEventListener('click', function() {
        mainMenuInit.hide();
    });

    const offlineBtn = document.getElementById('offlineBtn');
    if ('serviceWorker' in navigator) {
        const channel = new BroadcastChannel('sw-messages');
        channel.addEventListener('message', event => {
            switch(event.data.id) {
                case 'caching_start':
                    showInfo(event.data.message);
                    offlineBtn.innerHTML = '&#xF116;';
                    offlineBtn.title = event.data.message;
                    offlineBtn.setAttribute('data-enabled', 'false');
                    offlineBtn.classList.add('disabled');
                    break;
                case 'caching_finished':
                    showInfo(event.data.message);
                    offlineBtn.innerHTML = '&#xF298;';
                    offlineBtn.title = 'Offline verfügbar';
                    offlineBtn.setAttribute('data-enabled', 'true');
                    offlineBtn.classList.remove('disabled');
                    break;
                default:
                    showError(event.data.message);
            }
        });
        offlineBtn.classList.remove('d-none');
        offlineBtn.addEventListener('click', function(event) {
            event.preventDefault();
            offlineBtn.classList.add('disabled');
            if (offlineBtn.getAttribute('data-enabled') === 'true') {
                unregisterWorker();
            }
            else {
                //add serviceworker
                navigator.serviceWorker.register('/sw.js', {scope: '/'}).then(function(registration) {
                    //Registration was successful
                    showInfo('Registrierung des ServiceWorkers war erfolgreich.');
                    registration.update();
                }, function(error) {
                    //Registration failed
                    showError('Registrierung des ServiceWorkers fehlgeschlagen: ' + error);
                });
            }
        }, false);
        checkServiceWorker();
    }
    else {
        offlineBtn.classList.add('d-none');
    }
}

siteInit(document);
