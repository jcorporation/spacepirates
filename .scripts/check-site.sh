#!/bin/bash

rc=0

echo "Linting javascript"
for F in _site/assets/js/*.js
do
    [ "$F" = "_site/assets/js/bootstrap-native.min.js" ] && continue
    if ! npx eslint "$F"
    then
        rc=1
    fi
done

echo "Linting html"
if ! npx htmlhint _site
then
    rc=1
fi

echo "Linting css"
if ! npx stylelint _site/assets/css/default.css
then
    rc=1
fi

echo "Linting json"
for F in _site/assets/json/*.json
do
    if ! jq "." "$F" > /dev/null
    then
        rc=1
    fi
done

exit $rc
