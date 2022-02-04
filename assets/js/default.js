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
}

//search
let searchIndex = null;
let stompWords = null;

function fetchJSON(dataFile, callback) {
    const ajaxRequest = new XMLHttpRequest();
    ajaxRequest.open('GET', '/assets/json/' + dataFile + '.json', true);
    ajaxRequest.onreadystatechange = function() {
        if (ajaxRequest.status === 200) {
            const obj = JSON.parse(ajaxRequest.responseText);
            cbFetchJSON(dataFile, obj, callback);
        }
    };
    ajaxRequest.send();
}

function cbFetchJSON(dataFile, obj, callback) {
    switch(dataFile) {
        case 'searchindex':
            searchIndex = obj;
            break;
        case 'searchindex_stompkeys':
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
        fetchJSON('searchindex', cbSearchInitialized);
        fetchJSON('searchindex_stompkeys', cbSearchInitialized);
    }
}, false);

inputSearch.addEventListener('click', function(event) {
    // do not close dropdown
    event.stopPropagation();
}, false);

inputSearch.addEventListener('keyup', function(event) {
    let value = event.target.value.toLowerCase();
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
                matches.push({
                    "uri": uri,
                    "weight": searchIndex[key][uri]
                });
            }
        }
    }
    // sort by weight
    matches.sort(function(a, b) {
        //primary sort by defined tag
        if (a.weight < b.weight) {
            return 1;
        }
        if (a.weight > b.weight) {
            return -1;
        }
        //secondary sort by Name
        if (a.uri < b.uri) {
            return 1;
        }
        if (a.uri > b.uri) {
            return -1;
        }
        //equal
        return 0;
    });
    // print result
    searchResult.innerText = '';
    let i = 0;
    for (const match of matches) {
        const a = document.createElement('a');
        const path = match.uri.split('/');
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
        searchResult.appendChild(a);
        i++;
        if (i > 9) {
            break;
        }
    }
}, false);
