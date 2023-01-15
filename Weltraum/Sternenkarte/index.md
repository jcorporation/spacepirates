---
layout: sternenkarte
permalink: /Weltraum/Sternenkarte/
title: Sternenkarte
---

<div class="overflow-auto bg-sterne p-2 rounded" id="kartenpanel">
  <div id="karte">
    {% include_relative karte.svg %}
    <div class="toolbar mb-2" id="kartentoolbar">
      <div class="btn-group">
        <button class="btn mi btn-yellow" id="homeBtn" title="Zurück">&#xF131;</button>
        <button class="btn mi btn-yellow" id="zoomOutBtn" title="Verkleinern">&#xF62D;</button>
        <button class="btn mi btn-yellow" id="zoomInBtn" title="Vergrößern">&#xF62C;</button>
        <button class="btn mi btn-yellow" id="measureBtn" title="Messen">&#xF523;</button>
      </div>
      <div class="btn-group">
        <div id="distance" class="ms-2 text-light text-shadow"></div>
      </div>
    </div>
  </div>
</div>
