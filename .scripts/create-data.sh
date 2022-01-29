#!/bin/bash

printf "" > _data/planeten.yml.tmp
while read -r F
do
    [ "$F" = "./README.md" ] && continue
    [[ "$F" =~ ^./_includes.* ]] && continue
    [[ "$F" =~ .*_aside.md$ ]] && continue
    echo "$F"
    RESULT=$(yq --front-matter=extract e '.sitedata.Planet' "$F")
    if [ "$RESULT" != "null" ] && [ "$RESULT" != "" ]
    then 
        echo "$RESULT" >> _data/planeten.yml.tmp
    fi
done < <(find ./ -name \*.md)

yq e 'sort_keys(.)' _data/planeten.yml.tmp | sed -r 's/^(\w)/-\1/g' > _data/planeten.yml
rm _data/planeten.yml.tmp
