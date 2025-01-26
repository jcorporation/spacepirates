<div class="card mb-3">
    <div class="card-header bg-yellow text-dark">{{ include.title }}</div>
    <div class="card-body">
        <img src="{{ site.baseurl }}/assets/images/skully-black-web.svg" class="float-start me-4 mb-2"/>
        {{ include.body | markdownify }}
    </div>
</div>
