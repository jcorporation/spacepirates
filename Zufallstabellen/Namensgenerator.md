---
layout: page
permalink: /Zufallstabellen/Namensgenerator
title: Namensgenerator
---

<div class="row">
    <div class="col">
        <select id="type" class="form-select">
        <option value="alien">Aliens</option>
        <option value="foederationm">Föderation - männlich</option>
        <option value="foederationw">Föderation - weiblich</option>
        <option value="neuasienm">Neuasien - männlich</option>
        <option value="neuasienw">Neuasien - weiblich</option>
        <option value="konzern">Konzerne</option>
        <option value="planet">Planeten</option>
        <option value="stadt">Städte</option>
        <option value="raumschiff">Raumschiffe</option>
        </select>
    </div>
    <div class="col">
        <input type="text" value="20" id="anzahl" class="form-control"/>
    </div>
    <div class="col">
        <button class="btn btn-yellow" id="generate">Generieren</button>
    </div>
</div>

<div id="namensgenout" class="card p-2 mt-2">
</div>

<script type="text/javascript" src="/assets/js/data_names.js"></script>
<script type="text/javascript" src="/assets/js/zufallstabellen.js"></script>
<script type="text/javascript" src="/assets/js/zufallsgenerator.js"></script>
<script type="text/javascript" src="/assets/js/namensgen.js"></script>
