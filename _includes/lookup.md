<ul>
{%if site.data.searchindex[include.data] %}
    {% for uri in site.data.searchindex[include.data] %}
        {% if page.permalink != uri[0] %}
            {% assign crumbs = uri[0] | split: '/' %}
            <li><a href="{{ uri[0] }}">{{ crumbs | last }}</a></li>
        {% endif %}
    {% endfor %}
{% else %}
    <li>keine Einträge gefunden</li>
{% endif %}
</ul>
