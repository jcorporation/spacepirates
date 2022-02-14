<div class="card mb-3">
    <div class="card-header bg-yellow text-dark">Planeten, Raumstationen und Weltraumphänomene in diesem Sektor</div>
    <div class="card-body">
        <h5>Sternensysteme</h5>
        {% include sternensysteme_list.md filter_field='Sektor' filter_value=include.data %}
        <h5>Planeten</h5>
        {% include planeten_list.md filter_field='Sektor' filter_value=include.data %}
        <h5>Raumstationen</h5>
        {% include raumstationen_list.md filter_field='Sektor' filter_value=include.data %}
        <h5>Weltraumphänomene</h5>
        {% include weltraumphaenomene_list.md filter_field='Sektor' filter_value=include.data %}
        {% if include.extra %}
            <h5>Weitere</h5>
            {{ include.extra | markdownify }}
        {% endif %}
    </div>
</div>