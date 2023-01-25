#!/bin/bash

rm _site/README.md

for F in _site/assets/json/*.json
do
    if jq -r tostring "$F" | tr -d '\n' > "$F.tmp"
    then
        mv "$F.tmp" "$F"
    fi
done

exit 0
