"use strict";

karte.umrechnung = 3398; 
karte.width = 1152.1302;  
karte.height = 1052.3622;
karte.searchpath = '/Weltraum/';

karte.calc = function(x, y) {
 var lj = (Math.round(Math.sqrt(x * x + y * y) * karte.umrechnung / karte.width) / 10);
 return lj + ' Lichtjahre';
}

//init
window.addEventListener('load', function() {
    karte.init();
}, false);
