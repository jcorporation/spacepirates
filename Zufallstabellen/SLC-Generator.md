---
layout: page
permalink: /Zufallstabellen/SLC-Generator
title: SLC-Generator
---

# SLC-Generator

Dieses Tool generiert zufällige Spielleiter-Charaktere, es hält sich an die Charaktererschaffungsregeln.

<div class="row mb-3">
    <label class="col-sm-2 col-form-label">Stufe</label>
    <div class="col-sm-10">
        <select id="optstufe" class="form-select">
            <option value="-1">0 - Zufall</option>
            <option value="0">1 - Möchtegernpirat</option>
            <option value="1">2 - Unterbezahlter Pirat</option>
            <option value="2">3 - Standardpirat</option>
            <option value="3">4 - Wohlhabender Pirat</option>
            <option value="4">5 - Reicher Pirat</option>
            <option value="5">6 - Unterbezahlter Piratenanführer</option>
            <option value="6">7 - Standardpiratenanführer</option>
            <option value="7">8 - Wohlhabender Piratenanführer</option>
            <option value="8">9 - Reicher Piratenanführer</option>
            <option value="9">10 - Superreicher Piratenanführer</option>
        </select>
    </div>
</div>
<div class="row mb-3">
    <label class="col-sm-2 col-form-label">Rasse</label>
    <div class="col-sm-10">
        <select id="optrasse" class="form-select">
            <option value="Zufall">Zufall</option>
            <option value="Mensch">Mensch</option>
            <option value="Alien">Alien</option>
        </select>
    </div>
</div>
<div class="row mb-3">
    <label class="col-sm-2 col-form-label"></label>
    <div class="col-sm-10">
        <button class="btn btn-yellow" id="generate">Generieren</button>
    </div>
</div>

<h2>Spielleitercharakter</h2>
<div class="row mb-1">
    <label class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
        <input type="text"  id="name" class="form-control">
    </div>
</div>
<div class="row mb-1">
    <label class="col-sm-2 col-form-label">Rasse</label>
    <div class="col-sm-10">
        <input type="text"  id="rasse" class="form-control">
    </div>
</div>
<div class="row mb-1">
    <label class="col-sm-2 col-form-label">Stufe</label>
    <div class="col-sm-10">
        <input type="text"  id="stufe" class="form-control">
    </div>
</div>

<h4>Profile</h4>
<div class="row mb-1">
    <label class="col-sm-2 col-form-label">Händler</label>
    <div class="col-sm-4">
        <input type="text"  id="haendler" class="form-control">
    </div>
    <label class="col-sm-2 col-form-label">Pilot</label>
    <div class="col-sm-4">
        <input type="text"  id="pilot" class="form-control">
    </div>
</div>
<div class="row mb-1">
    <label class="col-sm-2 col-form-label">Söldner</label>
    <div class="col-sm-4">
        <input type="text"  id="soeldner" class="form-control">
    </div>
    <label class="col-sm-2 col-form-label">Tech</label>
    <div class="col-sm-4">
        <input type="text"  id="tech" class="form-control">
    </div>
</div>

<h4>Macken</h4>
<div class="list-group">
    <div class="list-group-item" id="macke1">Macke 1</div>
    <div class="list-group-item" id="macke2">Macke 2</div>
</div>

<script type="text/javascript" src="{{ site.baseurl }}/assets/js/data_names.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/zufallstabellen.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/zufallsgenerator.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/slcgen.js"></script>
