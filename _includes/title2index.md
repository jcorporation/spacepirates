{% assign name = page.title | replace: " ", "_" %}
{% assign name = name | remove: '"' %}
{% assign name = name | replace: ".", "_" %}
{% assign name = name | replace: "ß", "ss" %}
{% assign name = name | replace: "ä", "ae" %}
{% assign name = name | replace: "ö", "oe" %}
{% assign name = name | replace: "ü", "ue" %}
{% assign name = name | replace: "Ä", "ae" %}
{% assign name = name | replace: "Ö", "oe" %}
{% assign name = name | replace: "Ü", "ue" %}
