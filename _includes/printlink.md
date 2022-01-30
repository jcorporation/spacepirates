{% if include.data.Text %}
<a href="{{ include.data.Link }}">{{ include.data.Text }}</a>
{% else %}
{{ include.data }}
{%endif %}