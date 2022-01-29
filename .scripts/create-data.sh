#!/bin/bash

printf "" > _data/planeten.yml
while read -r F
do  
   RESULT=$(yq --front-matter=extract e '.sitedata.Planet' "$F")
   [ "$RESULT" != "null" ] && [ "$RESULT" != "" ] && echo "$RESULT" >> _data/planeten.yml
done < <(find ./ -name \*.md)
