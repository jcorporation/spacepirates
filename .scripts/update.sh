#!/bin/bash

.scripts/create-data.sh
.scripts/searchindex.pl
cp -v _data/*.json assets/json/
