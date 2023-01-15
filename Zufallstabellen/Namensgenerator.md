---
layout: page
permalink: /Zufallstabellen/Namensgenerator
title: Namensgenerator
---

<div class="input-group" style="max-width: 50rem">
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
    <input type="text" value="20" id="anzahl" class="form-control"/>
    <button class="btn btn-yellow" id="generate">Generieren</button>
</div>

<div id="namensgenout" class="card p-2 mt-2">
</div>

<script type="text/javascript" src="{{ site.baseurl }}/assets/js/data_names.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/zufallstabellen.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/zufallsgenerator.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/namensgen.js"></script>
