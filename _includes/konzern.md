{% assign Name = include.data.Name %}
{% assign Besitzer = include.data.Besitzer %}
{% assign Geschaeftsfuehrer = include.data.Geschaeftsfuehrer %}
{% assign Kategorie = include.data.Kategorie %}
{% assign Konzernzentrale = include.data.Konzernzentrale %}
{% assign Niederlassungen = include.data.Niederlassungen %}

<table>
    <caption>{% include printtext.md data=Name %}</caption>
    <tbody>
        <tr><th>Besitzer</th><td>{% include printtext.md data=Besitzer %}</td></tr>
        <tr><th>Geschäftsführer</th><td>{% include printlink.md data=Geschaeftsfuehrer type='Slc' %}</td></tr>
        <tr><th>Kategorie</th><td>{% include printtext.md data=Kategorie %}</td></tr>
        <tr><th>Konzernzentrale</th><td>{% include printlink.md data=Konzernzentrale %}</td></tr>
        <tr><th>Niederlassungen</th><td>{% include printlink.md data=Niederlassungen %}</td></tr>
        <tr><th>Erwähnungen</th><td>{% include lookup.md data=Name %}</td></tr>
    </tbody>
</table>
