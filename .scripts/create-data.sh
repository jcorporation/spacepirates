#!/bin/bash

YQ=".scripts/yq"

printf "" > _data/planeten.yml.tmp
printf "" > _data/slc.yml.tmp
printf "" > _data/städte.yml.tmp
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

    STADT=$($YQ e '.Stadt' - <<< "$SITEDATA")
    if [ "$STADT" != "null" ] && [ "$STADT" != "" ]
    then 
        echo "$STADT" >> _data/städte.yml.tmp
    fi

    SLC=$($YQ e '.Slc' - <<< "$SITEDATA")
    if [ "$SLC" != "null" ] && [ "$SLC" != "" ]
    then 
        echo "$SLC" >> _data/slc.yml.tmp
    fi
done < <(find ./ -name \*.md)

$YQ e 'sort_keys(.)' _data/planeten.yml.tmp > _data/planeten.yml
$YQ e 'sort_keys(.)' _data/städte.yml.tmp > _data/städte.yml
$YQ e 'sort_keys(.)' _data/sternensysteme.yml.tmp > _data/sternensysteme.yml
$YQ e 'sort_keys(.)' _data/slc.yml.tmp > _data/slc.yml
rm _data/planeten.yml.tmp
rm _data/städte.yml.tmp
rm _data/sternensysteme.yml.tmp
rm _data/slc.yml.tmp
