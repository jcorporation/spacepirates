<div class="card mb-3">
    {% if include.title %}
    <div class="card-header fst-italic">{{ include.title }}</div>
    {% endif %}
    <div class="card-body fst-italic">
        {{ include.body | markdownify }}
    </div>
</div>
