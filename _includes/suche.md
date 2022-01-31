<ul>
{%if site.data.searchindex[include.data] %}
    {% for uri in site.data.searchindex[include.data] %}
        {% assign crumbs = uri[0] | split: '/' %}
        <li><a href="{{ uri[0] }}">{{ crumbs | last }}</a></li>
    {% endfor %}
{% else %}
    <li>keine Einträge gefunden</li>
{% endif %}
</tbody>
</ul>
