{% assign flow = site.data.sitemap[include.data] %}
{% if flow %}
    <ul class="pagination mt-2">
    {% if flow.prev != "" %}
        {% assign prev_title = site.data.sitemap[flow.prev].title %}
        <li class="page-item">
            <a title="Vorige Seite: {{ prev_title }}" class="page-link link-dark mi" href="{{ flow.prev }}">&#xF284;</a>
        </li>
    {% else %}
        <li class="page-item disabled">
            <a class="page-link mi">&#xF284;</a>
        </li>
    {% endif %}

    {% if flow.next != "" %}
        {% assign next_title = site.data.sitemap[flow.next].title %}
        <li class="page-item">
            <a title="Nächste Seite: {{ next_title }}" class="page-link link-dark mi" href="{{ flow.next }}">&#xF285;</a>
        </li>
    {% else %}
        <li class="page-item disabled">
            <a class="page-link mi">&#xF285;</a>
        </li>
    {% endif %}

    <li class="page-item">
        <a class="page-link link-dark mi" title="Sitemap" data-bs-toggle="offcanvas" href="#sitemap-menu">&#xF2EC;</a>
    </li>

    {% if flow.parent != "" %}
    {% assign parent_title = site.data.sitemap[flow.parent].title %}
        <li class="page-item">
            <a class="page-link link-dark mi" title="Nach oben: {{ parent_title }}" href="{{ flow.parent }}">&#xF286;</a>
        </li>
    {% else %}
        <li class="page-item disabled">
            <a class="page-link mi">&#xF286;</a>
        </li>
    {% endif %}
    </ul>
{% endif %}
