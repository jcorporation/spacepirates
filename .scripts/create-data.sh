#!/bin/bash

YQ=".scripts/yq"

printf "" > _data/planeten.yml.tmp
printf "" > _data/sternensysteme.yml.tmp
while read -r F
do
    [ "$F" = "./README.md" ] && continue
    [[ "$F" =~ ^./_includes.* ]] && continue
    [[ "$F" =~ .*_aside.md$ ]] && continue
    SITEDATA=$($YQ --front-matter=extract e '.sitedata' "$F")

    PLANET=$($YQ e '.Planet' - <<< "$SITEDATA")
    if [ "$PLANET" != "null" ] && [ "$PLANET" != "" ]
    then 
        echo "$PLANET" >> _data/planeten.yml.tmp
    fi

    SYSTEM=$($YQ e '.Sternensystem' - <<< "$SITEDATA")
    if [ "$SYSTEM" != "null" ] && [ "$SYSTEM" != "" ]
    then 
        echo "$SYSTEM" >> _data/sternensysteme.yml.tmp
    fi
done < <(find ./ -name \*.md)

$YQ e 'sort_keys(.)' _data/planeten.yml.tmp | sed -r 's/^(\w)/- \1/g' > _data/planeten.yml
$YQ e 'sort_keys(.)' _data/sternensysteme.yml.tmp | sed -r 's/^(\w)/- \1/g' > _data/sternensysteme.yml
rm _data/planeten.yml.tmp
rm _data/sternensysteme.yml.tmp
