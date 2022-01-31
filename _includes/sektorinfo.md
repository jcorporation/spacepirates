<div class="card mb-3">
    <div class="card-header bg-yellow text-dark">Planeten, Raumstationen und Weltraumphänomene in diesem Sektor</div>
    <div class="card-body">
        {% include planeten_list.md filter_field='Sektor' filter_value=include.data %}
        {% include raumstationen_list.md filter_field='Sektor' filter_value=include.data %}
        {% include weltraumphaenomene_list.md filter_field='Sektor' filter_value=include.data %}
        {{ include.extra | markdownify }}
    </div>
</div>