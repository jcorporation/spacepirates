{% assign flow = site.data.sitemap[include.data] %}
{% if flow %}
    <div class="btn-group {{ include.class }}">
        {% if flow.prev != "" %}
            {% assign prev_title = site.data.sitemap[flow.prev].title %}
            <a title="Vorige Seite: {{ prev_title }}" class="btn border mi" href="{{ flow.prev }}">&#xF284;</a>
        {% else %}
            <a class="btn border mi disabled" disabled="disabled" href="#" rel="nofollow">&#xF284;</a>
        {% endif %}

        {% if flow.parent != "" %}
        {% assign parent_title = site.data.sitemap[flow.parent].title %}
            <a class="btn border mi" title="Nach oben: {{ parent_title }}" href="{{ flow.parent }}">&#xF286;</a>
        {% else %}
            <a class="btn border mi disabled" disabled="disabled" href="#" rel="nofollow">&#xF286;</a>
        {% endif %}

        {% if flow.next != "" %}
            {% assign next_title = site.data.sitemap[flow.next].title %}
            <a title="Nächste Seite: {{ next_title }}" class="btn border border mi" href="{{ flow.next }}">&#xF285;</a>
        {% else %}
            <a class="btn mi border disabled" disabled="disabled" href="#" rel="nofollow">&#xF285;</a>
        {% endif %}
    </div>
{% else %}
    <div class="btn-group"></div>
{% endif %}
