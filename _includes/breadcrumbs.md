<a class="breadcrumb-item link-dark text-decoration-none" href='{{ site.baseurl }}/'>{{ site.title }}</a>
{% assign crumbs = page.url | split: '/' %}
{% for crumb in crumbs offset: 1 %}
  {% if forloop.last %}
    {%if crumb != "index" %}
      <span>&nbsp;&nbsp;&rsaquo;&nbsp;&nbsp;</span>
        {{ page.title }}
    {% endif %}
  {% else %}
    <span>&nbsp;&nbsp;&rsaquo;&nbsp;&nbsp;</span>
    {% assign link = "" %}
    {% assign crumb_limit = forloop.index | plus: 1 %}
    {% for l in crumbs limit: crumb_limit %}
      {% assign link = link | append: l | append: "/" %}
    {% endfor %}
    {% assign title = site.data.sitemap[link].title %}
    {% if title == null %}
      {% assign title = crumb | replace: '_', ' ' %}
    {% endif %}
    <a class="breadcrumb-item link-dark text-decoration-none" href="{{ site.baseurl }}{{ link }}">{{ title }}</a>
  {% endif %}
{% endfor %}
