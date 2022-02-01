{% if include.data[1] %}
{{ include.data | join: ", " }}
{% else %}
{{ include.data }}
{%endif %}
