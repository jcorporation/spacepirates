---
layout: page
permalink: /Zufallstabellen/Piratenklatsch
title: Piratenklatsch
---

# Piratenklatsch

Dieses Tool generierte Gerücht und Klatsch, die Charaktere erfahren können.

<div class="row mb-3">
    <div class="col">
        <select name="selort" id="selort" class="form-select">
            <option value="w4">hochfrequentierter Raumhafen</option>
            <option value="-2">abgelegener Raumhafen</option>
            <option value="w4">zentraler Planet</option>
            <option value="-2">abgelegener Planet</option>
            <option value="+1">Piraten-/Rebellenkneipe</option>
        </select>
    </div>
    <div class="col">
        <button class="btn btn-yellow" id="generate">Generieren</button>
    </div>
</div>

<div id="klatsch">
</div>

<script type="text/javascript" src="{{ site.baseurl }}/assets/js/data_names.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/zufallstabellen.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/zufallsgenerator.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/piratenklatsch.js"></script>
