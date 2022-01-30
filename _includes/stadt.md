<table>
    <caption>{{ include.data.Name | markdownify }}</caption>
    <tbody>
        <tr><th>Planet</th><td>{{ include.data.Name | markdownify }}</td></tr>
        <tr><th>Größe</th><td>{{ include.data.Groesse | markdownify }}</td></tr>
        <tr><th>Kategorie</th><td>{{ include.data.Kategorie | markdownify }}</td></tr>
    </tbody>
</table>
