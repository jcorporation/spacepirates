<div class="card mb-3">
    <div class="card-header bg-yellow text-dark">{{ include.title }}</div>
    <div class="card-body">
        {{ include.body | markdownify }}
    </div>
</div>
