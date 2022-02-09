---
layout: sternenkarte
permalink: /Weltraum/Sternenkarte/
title: Sternenkarte
---

<div class="row">
  <div class="col-md-8 col-lg-9 overflow-auto bg-sterne p-2 rounded" id="kartenpanel">
    <div id="karte">
      {% include_relative karte.svg %}
      <div class="toolbar mb-2" id="kartentoolbar">
        <div class="btn-group">
          <button class="btn mi btn-yellow" id="zoomOutBtn" title="Verkleinern">remove</button>
          <button class="btn mi btn-yellow" id="zoomInBtn" title="Vergrößern">add</button>
          <button class="btn mi btn-yellow" id="measureBtn" title="Messen">code</button>
        </div>
        <div class="btn-group">
          <div id="distance" class="ms-2 text-light text-shadow"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-4 col-lg-3 pe-0" id="infopanel">
    <div class="card h-100">
      <div class="card-header pb-0 bg-yellow">
        <ul class="nav nav-tabs border-bottom-0">
          <li class="nav-item">
            <a class="nav-link link-dark active" href="#infoTab" data-bs-toggle="tab">Info</a>
          </li>
          <li class="nav-item">
            <a class="nav-link link-dark" href="#searchTab" data-bs-toggle="tab">Suche</a>
          </li>
        </ul>
      </div>
      <div class="card-body p-0 h-100 overflow-auto">
        <div class="tab-content">
          <div class="tab-pane active py-2 px-3 show" id="infoTab">
            Auf die Beschriftung klicken, um weitere Informationen zu erhalten.
          </div>
          <div class="tab-pane" id="searchTab">
            <div class="list-group list-group-flush" id="searchTabResult">
              <div class="list-group-item">Auf die Beschriftung klicken, um zu suchen.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script type="text/javascript" src="/Weltraum/Sternenkarte/karte.js"></script>
<script type="text/javascript" src="/Weltraum/Sternenkarte/sternenkarte.js"></script>
