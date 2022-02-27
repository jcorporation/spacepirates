{% assign Name = include.data.Name %}
{% assign Rasse = include.data.Rasse %}
{% assign Wohnort = include.data.Wohnort %}
{% assign Kategorie = include.data.Kategorie %}
{% assign Position = include.data.Position %}
{% assign SOELDNER = include.data.SOELDNER %}
{% assign TECH = include.data.TECH %}
{% assign PILOT = include.data.PILOT %}
{% assign HAENDLER = include.data.HAENDLER %}
{% assign Zaehigkeit = include.data.Zaehigkeit %}
{% if include.bewaffnung %}
    {% assign Bewaffnung = include.bewaffnung %}
{% else %}
    {% assign Bewaffnung = include.data.Bewaffnung %}
{% endif %}

<table>
    <caption>{% include printtext.md data=Name %}</caption>
    <tbody>
        <tr><th>Rasse</th><td>{% include printlink.md data=Rasse %}</td></tr>
        <tr><th>Wohnort</th><td>{% include printlink.md data=Wohnort %}</td></tr>
        <tr><th>Kategorie</th><td>{% include printtext.md data=Kategorie %}</td></tr>
        <tr><th>Position</th><td>{% include printtext.md data=Position %}</td></tr>
        <tr><th>SÖLDNER</th><td>{% include printtext.md data=SOELDNER %}</td></tr>
        <tr><th>TECH</th><td>{% include printtext.md data=TECH %}</td></tr>
        <tr><th>PILOT</th><td>{% include printtext.md data=PILOT %}</td></tr>
        <tr><th>HÄNDLER</th><td>{% include printtext.md data=HAENDLER %}</td></tr>
        <tr><th>Zähigkeit</th><td>{% include printtext.md data=Zaehigkeit %}</td></tr>
        <tr><th>Bewaffnung</th><td>{% include printtext.md data=Bewaffnung %}</td></tr>
    </tbody>
</table>
