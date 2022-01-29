#!/bin/bash

printf "" > _data/planeten.yml.tmp
printf "" > _data/sternensysteme.yml.tmp
while read -r F
do
    [ "$F" = "./README.md" ] && continue
    [[ "$F" =~ ^./_includes.* ]] && continue
    [[ "$F" =~ .*_aside.md$ ]] && continue
    SITEDATA=$(yq --front-matter=extract e '.sitedata' "$F")

    PLANET=$(yq e '.Planet' - <<< "$SITEDATA")
    if [ "$PLANET" != "null" ] && [ "$PLANET" != "" ]
    then 
        echo "$PLANET" >> _data/planeten.yml.tmp
    fi

    SYSTEM=$(yq e '.Sternensystem' - <<< "$SITEDATA")
    if [ "$SYSTEM" != "null" ] && [ "$SYSTEM" != "" ]
    then 
        echo "$SYSTEM" >> _data/sternensysteme.yml.tmp
    fi
done < <(find ./ -name \*.md)

yq e 'sort_keys(.)' _data/planeten.yml.tmp | sed -r 's/^(\w)/- \1/g' > _data/planeten.yml
yq e 'sort_keys(.)' _data/sternensysteme.yml.tmp | sed -r 's/^(\w)/- \1/g' > _data/sternensysteme.yml
rm _data/planeten.yml.tmp
rm _data/sternensysteme.yml.tmp
