#!/bin/bash

rc=0

check_permalink() {
    F=$1
    P=${F%.*} # remove extension
    PERMALINK=${P:1} # remove first char
    PERMALINK=${PERMALINK/%index} # remove index
	PERMALINK=${PERMALINK//_posts/Aktuelles}

    if ! grep -q "^permalink: $PERMALINK\$" "$F"
    then
        echo "Invalid permalink: $F / $PERMALINK"
        rc=1
    fi
}

check_title() {
    F=$1

    if ! grep -P -q '^title: \S+' "$F"
    then
        echo "Empty title: $F"
        rc=1
    fi
}

echo "Checking titles, links and permalinks"
while read -r F
do
    [ "$F" = "./README.md" ] && continue
    [[ "$F" =~ ^./_includes.* ]] && continue
    [[ "$F" =~ ^./_site.* ]] && continue
    [[ "$F" =~ .*_aside.md$ ]] && continue
    [[ "$F" =~ ^./collections/.* ]] && continue

    # check links
    if ! .scripts/check-links.pl "$F"
    then
    	rc=1
    fi
    # check permalink
    check_permalink "$F"
    # check title
    check_title "$F"
done < <(find ./ -name \*.md)

echo "Checking markdown"
if ! npx markdownlint-cli -i "node_modules/**" "**/*.md"
then
    rc=1
fi

exit $rc
