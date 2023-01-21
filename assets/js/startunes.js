"use strict";

const startunes = {};

startunes.songName = '';
startunes.songEl = document.getElementById('startunessong');
startunes.audioEl = document.getElementById('startunesaudio');
startunes.songButtons = document.getElementById('startunesbottom').getElementsByTagName('a');

for (let i = 0; i < startunes.songButtons.length; i++) {
    startunes.songButtons[i].addEventListener('click',function(event) {
        startunes.play(this,event);
    }, false);
}

startunes.audioEl.addEventListener('canplay', function() {
    startunes.songEl.textContent = 'Spiele: ' + startunes.songName;
}, false);

startunes.play = function(link, event) {
    event.preventDefault();
    event.stopPropagation();
    const audioEl = document.createElement('source');
    audioEl.setAttribute('type', 'audio/mpeg');
    audioEl.setAttribute('src', link);
    if (startunes.audioEl.firstChild) {
        startunes.audioEl.replaceChild(audioEl, startunes.audioEl.firstChild);
    }
    else {
        startunes.audioEl.appendChild(audioEl);
    }
    startunes.songEl.textContent = 'Lade...';
    startunes.songName = link.textContent;
    startunes.audioEl.load();
    startunes.audioEl.play();
}
