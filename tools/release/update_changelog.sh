#!/bin/sh

# Updates CHANGELOG.md and commits the file to repo.
# Notes:
# - should be run on 'dev' branch, once all changes for the release
# have been committed
# - assumes package.json already has the right version.
conventional-changelog -i CHANGELOG.md -s -p "angular" &&
git add CHANGELOG.md &&
version=`cat package.json | json version` &&
git commit -m"docs(CHANGELOG): $version" &&
git push
