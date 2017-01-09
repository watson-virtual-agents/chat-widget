#!/bin/sh

conventional-changelog -i CHANGELOG.md -s -p "angular" &&
git add CHANGELOG.md &&
version=`cat package.json | json version` &&
git commit -m"docs(CHANGELOG): $version" &&
git push
