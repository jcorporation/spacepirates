"use strict";

const karte = {};

karte.prevent = function(ev) {
    ev.target.blur();
    ev.preventDefault();
    ev.stopPropagation();
}

karte.init = function() {
    // resize kartenpanel to fit screen height
    const kartenpanel = document.getElementById('kartenpanel');
    const footer = document.getElementsByTagName('footer');
    const height = window.innerHeight - kartenpanel.offsetTop - footer[0].offsetHeight - 8;
    kartenpanel.style.height = height + 'px';
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
    document.getElementById('zoomOutBtn').addEventListener('click', function(event) {
        karte.prevent(event);
        karte.zoom('out', 1.1);
    }, false);
    document.getElementById('zoomInBtn').addEventListener('click', function(event) {
        karte.prevent(event);
        karte.zoom('in', 1.1);
    }, false);
    document.getElementById('measureBtn').addEventListener('click', function(event) {
        karte.prevent(event);
        karte.measure();
    }, false);
    document.getElementById('svg2').addEventListener('click', function(event) {
        karte.clickHandler(event);
    }, false);
    document.getElementById('svg2').addEventListener('mousemove', function(event) {
        karte.measureMove(event);
    }, false);
    // set initiale size
    let pw = document.getElementById('kartenpanel').offsetWidth - 24;
    if (pw < karte.width) {
        if (pw < 400) {
            // minimum initial width
            pw = 400;
        }
        karte.zoomlevel = pw / karte.width;
        karte.umrechnung = karte.umrechnung * karte.zoomlevel;
        karte.height = karte.zoomlevel * karte.height;
        karte.width = pw;
    }
    document.getElementById('svg2').setAttribute('width', karte.width);
    document.getElementById('svg2').setAttribute('height', karte.height);
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
        const it = target.getElementsByTagName('desc')[0];
        let link = null;
        if (it) {
            link = it.getAttribute('data-desc');
        }
        const text = target.textContent;
        if (text !== '') {
            karte.getInfo(text, link);
        }
    }
}

karte.getInfo = function(text, link) {
    console.log(text + ':' + link);
}

karte.zoom = function(x,r) {
    if (x === 'in') { 
        karte.width = karte.width * r;
        karte.height = karte.height * r;
        karte.zoomlevel = karte.zoomlevel * r;
        karte.umrechnung = karte.umrechnung * r;
    }
    else if (x === 'out') { 
        karte.width = karte.width / r;
        karte.height = karte.height / r;
        karte.zoomlevel = karte.zoomlevel / r;
        karte.umrechnung = karte.umrechnung / r;
    }
    document.getElementById('svg2').setAttribute('width', karte.width);
    document.getElementById('svg2').setAttribute('height', karte.height);
    karte.measureHide();
}

karte.measure=function() {
    if (karte.funclevel=='info') {
        document.getElementById('measureBtn').classList.add('active');
        karte.funclevel = 'measureEnabled';
        document.getElementById('kartenpanel').style.cursor = 'crosshair';
    }
    else {
        karte.measureHide();
        document.getElementById('measureBtn').classList.remove('active');
        karte.funclevel = 'info';
        document.getElementById('kartenpanel').style.cursor = 'default';
    }
}

karte.getMousePoint=function(event) {
    const svgEl = document.getElementById('svg2');
    const matrix = svgEl.getScreenCTM();
    const point = svgEl.createSVGPoint();
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
    document.getElementById('Line').setAttribute('d','M '+ karte.x1 + ' ' + karte.y1 + ' L ' + karte.x2 + ' ' + karte.y2);
}

karte.measureStart = function(event) {
    karte.measureHide();
    const mp = karte.getMousePoint(event);
    karte.x1 = mp.x;
    karte.y1 = mp.y;
    document.getElementById('Start').setAttribute('cx', karte.x1);
    document.getElementById('Start').setAttribute('cy', karte.y1);
    document.getElementById('Line').setAttribute('d','M -10 -10 L -5 -5');
    karte.funclevel = 'measureStarted';
}

karte.measureStop = function(event) {
    const mp = karte.getMousePoint(event);
    karte.x2 = mp.x;
    karte.y2 = mp.y;
    document.getElementById('Stop').setAttribute('cx', karte.x2);
    document.getElementById('Stop').setAttribute('cy', karte.y2);
    document.getElementById('Line').setAttribute('d','M ' + karte.x1 + ' ' + karte.y1 + ' L ' + karte.x2 + ' ' + karte.y2);
    const x = karte.x1 - karte.x2;
    const y = karte.y1 - karte.y2;
    karte.y1 = 0;
    karte.x1 = 0;
    document.getElementById('distance').textContent = karte.calc(x, y);
    document.getElementById('distance').style.visibility = 'visible';
    karte.funclevel = 'measureEnabled';
}

karte.measureHide=function() {
    document.getElementById('Start').setAttribute('cx',-10);
    document.getElementById('Start').setAttribute('cy',-10);
    document.getElementById('Stop').setAttribute('cx',-10);
    document.getElementById('Stop').setAttribute('cy',-10);
    document.getElementById('Line').setAttribute('d','M -10 -10 L -5 -5');
    document.getElementById('distance').style.visibility = 'hidden';
}
