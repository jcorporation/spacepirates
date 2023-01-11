#!/bin/bash

TMPDIR="_tmp"
DATADIR="_data"
ASSETSDIR="assets/json"

[ -d "$ASSETSDIR" ] || exit 1
[ -d "$DATADIR" ] || exit 1

# cleanup dirs
rm -f "$ASSETSDIR/"*
rm -f "$DATADIR/"*

# create or cleanup tmp dir
if [ -d "$TMPDIR" ]
then
    rm -f "$TMPDIR/"*
else
    install -d "$TMPDIR"
fi

# create data files from frontmatter
if ! .scripts/create-data.sh
then
    echo "Creating data failed"
    exit 1
fi

#create index
if .scripts/create-index.pl
then
    for F in index.json index_stompkeys.json data_synonyms.json
    do
        mv "$TMPDIR/$F" "$DATADIR/"
    done
fi

#validate and copy to assets folder
for F in "$DATADIR/"*.json
do
    G=$(basename "$F")
    if jq "." "$F" > "$F.tmp"
    then
        echo "Valid json: $G"
        mv "$F.tmp" "$F"
    fi
    cp "$F" "$ASSETSDIR/$G"
done
