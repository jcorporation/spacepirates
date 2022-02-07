#!/bin/bash

TMPDIR="_tmp"
DATADIR="_data"
ASSETSDIR="assets/json"

[ -d "$ASSETSDIR" ] || exit 1
[ -d "$DATADIR" ] || exit 1

# create or cleanup tmp dir
if [ -d "$TMPDIR" ]
then
    rm -f "$TMPDIR/"*
else
    install -d "$TMPDIR"
fi

# create data files from frontmatter
if .scripts/create-data.sh
then
    cp "$DATADIR/"*.json "$ASSETSDIR/"
fi

#create index
if .scripts/create-index.pl
then
    for F in index.json index_stompkeys.json
    do
        mv "$TMPDIR/$F" "$DATADIR/"
        cp "$DATADIR/$F" "$ASSETSDIR/"
    done
fi
