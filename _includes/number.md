{%- assign digits = include.data | split:'' %}
{%- for digit in digits %}
    {%- assign threeFromEnd = digits.size | minus:forloop.index | modulo: 3 %}
    {%- if threeFromEnd == 2 and forloop.index != 1 %}
        {{- digit | prepend: '.' }}
    {%- else %}
        {{- digit }}
    {%- endif %}
{%- endfor %}
