---
layout: page
permalink: /Zufallstabellen/Sternensysteme
title: Sternensysteme
---

# Sternensystemgenerator

Dieser Zufallsgenerator generiert komplette Sternensysteme, entweder total zufällig oder auch mit ein paar Rahmenparameter.

<table>
<tr><th>Bewohnbar</th><td>
<select name="optbewohnt" id="optbewohnt" class="form-select">
<option value="zufall">zufällig</option>
<option value="ja">ja</option>
<option value="nein">nein</option>
</select>
</td></tr>
<tr><th>Größe</th><td>
<select name="optgroesse" id="optgroesse" class="form-select">
<option value="zufall">zufällig</option>
<option value="gross">groß</option>
<option value="klein">klein</option>
</select>
</td></tr>
<tr><th></th><td>
<button type="button" class="btn btn-yellow" name="generate">Generieren</button>
</td></tr>
</table>

<h2>Sternensystem</h2>
<table>
<tr><th>Name</th><td id="galaxyname">n/a</td></tr>
<tr><th>Planeten / Größe</th><td id="planeten"></td></tr>
<tr><th>Zentralgestirn</th><td id="zentralgestirn"></td></tr>
<tr><th>Bewohnbar</th><td id="bewohnbar"></td></tr>
<tr><th>Besonderheit</th><td id="besonderheit"></td></tr>
</table>
<h3>Planeten</h3>
<ol id="planetenlist">
</ol>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/data_names.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/zufallstabellen.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/zufallsgenerator.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/sternensysteme.js"></script>
