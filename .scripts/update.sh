#!/bin/bash

[ -d _tmp ] || exit 1

rm -f _tmp/*

.scripts/create-data.sh

if .scripts/create-index.pl
then
    mv _tmp/index.json _data/
    mv _tmp/index_stompkeys.json _data/
fi

cp -v _data/*.json assets/json/
