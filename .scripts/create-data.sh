#!/bin/bash

YQ=".scripts/yq"

LISTS=$(cat .scripts/conf/data_keys.txt)

#create empty tmp file
for L in $LISTS
do
    printf "" > "_tmp/$L.yml.tmp"
done

printf "Parsing frontmatters"
while read -r F
do
    [ "$F" = "./README.md" ] && continue
    [[ "$F" =~ ^./_.* ]] && continue
    [[ "$F" =~ .*_aside.md$ ]] && continue

    SITEDATA=$($YQ --front-matter=extract '.sitedata' "$F")
    PERMALINK=${F%.*} # remove extension
    PERMALINK=${PERMALINK:1} # remove first char
    PERMALINK=${PERMALINK/%index} # remove index

    for L in $LISTS
    do
        V=$($YQ ".${L}" - <<< "$SITEDATA")
        if [ "$V" != "null" ] && [ "$V" != "" ]
        then 
            echo "$V" >> "_tmp/$L.yml.tmp"
            echo "  Link: $PERMALINK" >> "_tmp/$L.yml.tmp"
        fi
    done
    printf "."
done < <(find ./ -name \*.md)

echo ""
echo "Sorting"
# sort, convert, cleanup
for L in $LISTS
do
    $YQ -o=json 'sort_keys(.)' "_tmp/$L.yml.tmp" > "_tmp/$L.json.tmp"
    if [ -s "_tmp/$L.json.tmp" ]
    then
        mv "_tmp/$L.json.tmp" "_data/$L.json"
    else
        rm -f "_tmp/$L.json.tmp"
    fi
    rm "_tmp/$L.yml.tmp"
done
