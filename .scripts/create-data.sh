#!/bin/bash

printf "" > _data/planeten.yml
while read -r F
do
    RESULT=$(yq --front-matter=extract e '.sitedata.Planet' "$F")
    if [ "$RESULT" != "null" ] && [ "$RESULT" != "" ]
    then 
        echo "$RESULT" >> _data/planeten.yml
        echo "" >> _data/planeten.yml
    fi
done < <(find ./ -name \*.md)
