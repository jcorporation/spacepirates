{% if include.count %}
    {%assign count = include.count %}
{% else %}
    {%assign count = 1 %}
{% endif %}

{% if include.generator != false %}
<div class="input-group" style="max-width: 10rem;">
    <input type="text" class="form-control" value="{{ count }}"/>
    <button class="btn btn-yellow" data-id="generate-btn" data-table="{{ include.table }}">Generieren</button>
</div>
{% endif %}

<script type="text/javascript" src="{{ site.baseurl }}/assets/js/data_names.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/zufallstabellen.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/zufallsgenerator.js"></script>

<div class="list-group mt-2" id="{{ include.table }}Out"></div>

{% if include.manual != false %}
***

<div id="{{ include.table }}Table"></div>
<script>
randgen.array2html(tabellen["{{ include.table }}"], document.getElementById('{{ include.table }}Table'));
</script>
{% endif %}

{% if include.generator != false %}
<script>
randgen.init();
{% if include.auto == true %}
    randgen.start();
{% endif %}
</script>
{% endif %}
