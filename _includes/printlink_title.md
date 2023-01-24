{% assign crumbs = include.link | remove_first: "/" | split: "/" %}
{% assign clink = "/" %}
{% assign title = "" %}
{% assign climit = crumbs.size | minus: 1 %}
{% for l in crumbs limit: climit %}
    {% assign clink = clink | append: l | append: "/" %}
    {% assign title = title | append: site.data.sitemap[clink].title %}
    {% unless forloop.last %}
        {% assign title = title | append: " › " %}
    {% endunless %}
{% endfor %}

{%if include.text %}
    {% assign text = include.text %}
{% else %}
    {% assign text = site.data.sitemap[include.link].title %}
{% endif %}

<a title="{{ title }}" href="{{ include.link }}">{{ text }}</a>
