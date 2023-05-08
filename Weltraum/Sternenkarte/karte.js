"use strict";

const karte = {};

karte.prevent = function(ev) {
    ev.target.blur();
    ev.preventDefault();
    ev.stopPropagation();
}

karte.init = function() {
    karte.kartenpanel = document.querySelector('#kartenpanel');
    karte.infoTab = document.querySelector('#infoTab');
    karte.svg = document.querySelector('#svg2');
    karte.measureBtn = document.querySelector('#measureBtn');
    karte.startPoint = document.querySelector('#Start');
    karte.endPoint = document.querySelector('#Stop');
    karte.line = document.querySelector('#Line');
    karte.distance = document.querySelector('#distance');

    // fetch search data
    siteSearch.searchIndex = null;
    siteSearch.stompWords = null;
    siteSearch.sitemap = null;
    if (siteSearch.searchIndex === null) {
        siteSearch.fetchJSON('index', karte.cbInitialized);
        karte.kartenpanel.style.opacity = '0.2';
    }
    if (siteSearch.stompWords === null) {
        siteSearch.fetchJSON('index_stompkeys', karte.cbInitialized);
        karte.kartenpanel.style.opacity = '0.2';
    }
    if (siteSearch.sitemap === null) {
        siteSearch.fetchJSON('sitemap', karte.cbInitialized);
        karte.kartenpanel.style.opacity = '0.2';
    }
    // set defaults
    karte.screenWidth = 0;
    karte.screenHeight = 0;
    karte.x1 = 0;
    karte.x2 = 0;
    karte.y1 = 0;
    karte.y2 = 0;
    karte.zoomlevel = 1;
    karte.funclevel = 'info';
    // add event handlers
    document.querySelector('#homeBtn').addEventListener('click', function() {
        window.location.href = window.location.protocol + '//' + window.location.host + '/';
    }, false);
    document.querySelector('#zoomOutBtn').addEventListener('click', function(event) {
        karte.prevent(event);
        karte.zoom('out', 1.1);
    }, false);
    document.querySelector('#zoomInBtn').addEventListener('click', function(event) {
        karte.prevent(event);
        karte.zoom('in', 1.1);
    }, false);
    karte.measureBtn.addEventListener('click', function(event) {
        karte.prevent(event);
        karte.measure();
    }, false);
    karte.svg.addEventListener('click', function(event) {
        karte.clickHandler(event);
    }, false);
    karte.svg.addEventListener('mousemove', function(event) {
        karte.measureMove(event);
    }, false);
    // set initiale size
    let pw = karte.kartenpanel.offsetWidth - 24;
    if (pw < karte.width) {
        if (pw < 400) {
            // minimum initial width
            pw = 400;
        }
        karte.zoomlevel = pw / karte.width;
        karte.factor = karte.factor * karte.zoomlevel;
        karte.height = karte.zoomlevel * karte.height;
        karte.width = pw;
    }
    karte.svg.setAttribute('width', karte.width);
    karte.svg.setAttribute('height', karte.height);
}

karte.cbInitialized = function() {
    if (siteSearch.searchIndex !== null &&
        siteSearch.stompWords !== null &&
        siteSearch.sitemap !== null)
    {
        karte.kartenpanel.style.opacity = '1';
    }
}

karte.clickHandler = function(event) {
    if (karte.funclevel === 'measureEnabled') {
        karte.measureStart(event);
    }
    else if (karte.funclevel === 'measureStarted') {
        karte.measureStop(event);
    }
    else {
        let target = event.target;
        if (target.nodeName === 'tspan') {
            target = target.parentNode;
        }
        const it = target.querySelector('desc');
        const link = it !== null ? it.getAttribute('data-desc') : null;
        const text = target.textContent;
        if (text !== '') {
            karte.getInfo(text, link);
        }
    }
}

karte.getInfo = async function(text, link) {
    BSN.Modal.getInstance(document.getElementById('infopanel')).show();

    const result = siteSearch.doSearch(text, document.querySelector('#searchTabResult'));
    if (link === null) {
        link = result[0];
    }
    if (link === undefined) {
        karte.infoTab.textContent = 'Seite nicht gefunden';
        return;
    }

    const response = await fetch(link);
    if (response.status !== 200) {
        showError('Fehler beim Aufruf von ' + link);
        return;
    }
    const data = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    karte.infoTab.textContent = '';
    const title = doc.querySelector('h1');
    const main = doc.querySelector('main');
    const aside = doc.querySelector('aside');
    if (main !== null) {
        main.setAttribute('class', '');
        if (title !== null) {
            karte.infoTab.appendChild(title);
        }
        karte.infoTab.appendChild(main);
        if (aside !== null) {
            aside.setAttribute('class', '');
            aside.classList.add('mt-2');
            karte.infoTab.appendChild(aside);
        }
        const a = document.createElement('a');
        a.href = link;
        a.target = '_blank';
        a.textContent = 'In neuem Fenster öffnen';
        const div = document.createElement('div');
        div.appendChild(a);
        div.classList.add('mt-3', 'pt-1', 'border-top');
        karte.infoTab.appendChild(div);
        siteInit(karte.infoTab);
    }
    else {
        karte.infoTab.textContent = 'Seite nicht gefunden';
    }
}

karte.zoom = function(x, r) {
    if (x === 'in') { 
        karte.width = karte.width * r;
        karte.height = karte.height * r;
        karte.zoomlevel = karte.zoomlevel * r;
        karte.factor = karte.factor * r;
    }
    else if (x === 'out') { 
        karte.width = karte.width / r;
        karte.height = karte.height / r;
        karte.zoomlevel = karte.zoomlevel / r;
        karte.factor = karte.factor / r;
    }
    karte.svg.setAttribute('width', karte.width);
    karte.svg.setAttribute('height', karte.height);
    karte.measureHide();
}

karte.measure = function() {
    if (karte.funclevel === 'info') {
        karte.measureBtn.classList.add('active');
        karte.funclevel = 'measureEnabled';
        karte.kartenpanel.style.cursor = 'crosshair';
    }
    else {
        karte.measureHide();
        karte.measureBtn.classList.remove('active');
        karte.funclevel = 'info';
        karte.kartenpanel.style.cursor = 'default';
    }
}

karte.getMousePoint = function(event) {
    const matrix = karte.svg.getScreenCTM();
    let point = karte.svg.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    point = point.matrixTransform(matrix.inverse());
    return point;
}

karte.measureMove = function(event) {
    if (karte.funclevel !== 'measureStarted') {
        return; 
    }
    const mp = karte.getMousePoint(event);
    karte.x2 = mp.x;
    karte.y2 = mp.y;
    karte.line.setAttribute('d','M '+ karte.x1 + ' ' + karte.y1 + ' L ' + karte.x2 + ' ' + karte.y2);
}

karte.measureStart = function(event) {
    karte.measureHide();
    const mp = karte.getMousePoint(event);
    karte.x1 = mp.x;
    karte.y1 = mp.y;
    karte.startPoint.setAttribute('cx', karte.x1);
    karte.startPoint.setAttribute('cy', karte.y1);
    karte.line.setAttribute('d','M -10 -10 L -5 -5');
    karte.funclevel = 'measureStarted';
}

karte.measureStop = function(event) {
    const mp = karte.getMousePoint(event);
    karte.x2 = mp.x;
    karte.y2 = mp.y;
    karte.endPoint.setAttribute('cx', karte.x2);
    karte.endPoint.setAttribute('cy', karte.y2);
    karte.line.setAttribute('d','M ' + karte.x1 + ' ' + karte.y1 + ' L ' + karte.x2 + ' ' + karte.y2);
    const x = karte.x1 - karte.x2;
    const y = karte.y1 - karte.y2;
    karte.y1 = 0;
    karte.x1 = 0;
    karte.distance.textContent = karte.calc(x, y);
    karte.distance.style.visibility = 'visible';
    karte.funclevel = 'measureEnabled';
}

karte.measureHide = function() {
    karte.startPoint.setAttribute('cx',-10);
    karte.startPoint.setAttribute('cy',-10);
    karte.endPoint.setAttribute('cx',-10);
    karte.endPoint.setAttribute('cy',-10);
    karte.line.setAttribute('d','M -10 -10 L -5 -5');
    karte.distance.style.visibility = 'hidden';
}
