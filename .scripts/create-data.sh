#!/bin/bash

rc=0

# select yq executable
case "$(uname -m)" in
    armv7l)
    	YQ=".scripts/bin/yq_linux_arm" ;;
    x86_64)
    	YQ=".scripts/bin/yq_linux_amd64" ;;
    *)
    	exit 1 ;;
esac

TMPDIR="_tmp"
LISTS=$(cat .scripts/conf/data_keys.txt)

#create empty tmp files
for L in $LISTS
do
    printf "" > "$TMPDIR/$L.yml.tmp"
done

echo "Parsing frontmatters"
while read -r F
do
    [ "$F" = "./README.md" ] && continue
    [[ "$F" =~ ^./_.* ]] && continue
    [[ "$F" =~ .*_aside.md$ ]] && continue

    SITEDATA=$($YQ --front-matter=extract '.sitedata' "$F")
    PERMALINK=${F%.*} # remove extension
    PERMALINK=${PERMALINK:1} # remove first char
    PERMALINK=${PERMALINK/%index} # remove index suffix

    for L in $LISTS
    do
	# get content of list
    	LIST=$($YQ ".$L" <<< "$SITEDATA")
    	[ "$LIST" = "null" ] && continue
    	TMPFILE="$TMPDIR/$L.yml.tmp"
    	# iterate through keys of list and append permalink
        while read -r KEY
        do
            echo "$KEY:" >> "$TMPFILE"
            $YQ ".$KEY" <<< "$LIST" | sed -E 's/(^)/  \1/g' >> "$TMPFILE"
            echo "  Link: $PERMALINK" >> "$TMPFILE"
        done < <($YQ "keys()" <<< "$LIST" | sed 's/^- //g')
    done
    printf "."
done < <(find ./ -name \*.md)

echo ""
echo "Sorting"
# sort, convert, cleanup
for L in $LISTS
do
    TMPFILE="$TMPDIR/$L.json.tmp"
    YMLTMP="$TMPDIR/$L.yml.tmp"
    $YQ -o=json 'sort_keys(.)' "$YMLTMP" > "$TMPFILE"
    if [ -s "$TMPFILE" ]
    then
        mv "$TMPFILE" "_data/$L.json"
    else
        rm -f "$TMPFILE"
        rc=1
    fi
    rm "$YMLTMP"
done

exit $rc
