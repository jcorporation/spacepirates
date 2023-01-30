<script type="text/javascript" src="{{ site.baseurl }}/assets/js/data_names.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/zufallstabellen.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/zufallsgenerator.js"></script>
<div data-type="zufallstabelle" data-table="{{ include.table }}" data-manual="{{ include.manual }}" data-auto="{{ include.auto }}">
    {% if include.count %}
        {%assign count = include.count %}
    {% else %}
        {%assign count = 1 %}
    {% endif %}

    {% if include.generator != false %}
        <div class="input-group" style="max-width: 10rem;">
            <input type="text" class="form-control" value="{{ count }}"/>
            <button class="btn btn-yellow" data-table="{{ include.table }}">Generieren</button>
        </div>
        <div id="{{ include.table }}Out" class="list-group mt-2"></div>
    {% endif %}
    {% if include.generator != false and include.manual != false %}
        <hr/>
    {% endif %}
    {% if include.manual != false %}
        <div id="{{ include.table }}Table"></div>
    {% endif%}
</div>
