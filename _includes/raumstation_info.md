<div class="card mb-3" data-info="{{ include.data }}">
    <div class="card-header bg-yellow text-dark">Konzerne und SLC auf dieser Raumstation</div>
    <div class="card-body">
        <h5>Konzerne</h5>
        {% include konzerne_list.md filter_field='Konzernzentrale' filter_value=include.data %}
        {% include konzerne_list.md filter_field='Niederlassungen' filter_value=include.data %}
        <h5>SLC</h5>
        {% include slc_list.md filter_field='Wohnort' filter_value=include.data %}
    </div>
</div>
