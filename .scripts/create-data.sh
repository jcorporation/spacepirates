#!/bin/bash

YQ=".scripts/yq"

LISTS="Planeten Staedte Sternensysteme Slc Raumstationen Weltraumphaenomene"

#create empty tmp file
for L in $LISTS
do
    printf "" > "_data/$L.yml.tmp"
done

while read -r F
do
    [ "$F" = "./README.md" ] && continue
    [[ "$F" =~ ^./_includes.* ]] && continue
    [[ "$F" =~ .*_aside.md$ ]] && continue
    SITEDATA=$($YQ --front-matter=extract '.sitedata' "$F")

    for L in $LISTS
    do
        V=$($YQ ".${L}" - <<< "$SITEDATA")
        if [ "$V" != "null" ] && [ "$V" != "" ]
        then 
            echo "$V" >> _data/$L.yml.tmp
        fi
    done
done < <(find ./ -name \*.md)

# sort, convert, cleanup
for L in $LISTS
do
    $YQ -o=json 'sort_keys(.)' "_data/$L.yml.tmp" > "_data/$L.json.tmp"
    if [ -s "_data/$L.json.tmp" ]
    then
        mv "_data/$L.json.tmp" "_data/$L.json"
    else
        rm -f "_data/$L.json.tmp"
    fi
    rm "_data/$L.yml.tmp"
done
