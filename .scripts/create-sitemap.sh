#!/bin/bash

echo "Creating sitemap"

rm -f _tmp/pages.txt

while read -r DIR
do
    [[ "$DIR" =~ ^collections/.* ]] && continue
    find "$DIR" -name \*.md ! -name \*_aside.md >> _tmp/pages.txt
done < .scripts/conf/index_dirs.txt

ls *.md | grep -v "README.md" >> _tmp/pages.txt

if ! .scripts/create-sitemap.pl
then
    exit 1
fi

rm -f _tmp/pages.txt
exit 0
