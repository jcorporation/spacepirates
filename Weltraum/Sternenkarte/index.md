---
layout: page
permalink: /Weltraum/Sternenkarte/
title: Sternenkarte
---

<div class="row">
  <div class="col-md-9 overflow-auto" id="kartenpanel">
    <div id="karte">
      {% include_relative karte.svg %}
    </div>
  </div>
  <div class="col-md-3" id="infopanel">
    <div class="toolbar mb-2">
      <div class="btn-group">
        <button class="btn mi btn-yellow" id="zoomOutBtn" title="Verkleinern">zoom_out</button>
        <button class="btn mi btn-yellow" id="zoomInBtn" title="Vergrößern">zoom_in</button>
        <button class="btn mi btn-yellow" id="measureBtn" title="Messen">linear_scale</button>
      </div>
      <div class="btn-group">
        <div id="distance" class="ms-2"></div>
      </div>
    </div>
    <div class="card">
      <div class="card-header pb-0 bg-yellow">
        <ul class="nav nav-tabs border-bottom-0">
          <li class="nav-item">
            <a class="nav-link link-dark active" href="#info-tab" data-bs-toggle="tab">Info</a>
          </li>
          <li class="nav-item">
            <a class="nav-link link-dark" href="#search-tab" data-bs-toggle="tab">Suche</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <div class="tab-content">
          <div class="tab-pane active show" id="info-tab">
            Auf die Beschriftung klicken, um weitere Informationen zu erhalten.
          </div>
          <div class="tab-pane" id="search-tab">
            Auf die Beschriftung klicken, um zu suchen.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script type="text/javascript" src="/Weltraum/Sternenkarte/karte.js"></script>
<script type="text/javascript" src="/Weltraum/Sternenkarte/sternenkarte.js"></script>
