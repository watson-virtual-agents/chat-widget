#!/bin/sh

# Releases new version automating these steps:
# a) tagging the release
# b) creating new GitHub release
# c) publishing package to npm

# NOTES
# - should be run on 'master' branch
# - to run locally must first create a GitHub token and add to env
#   variable CONVENTIONAL_GITHUB_RELEASER_TOKEN
# - based on https://gist.github.com/stevemao/280ef22ee861323993a0
version=`cat package.json | json version` &&
git tag -a $version -m "Release $version" &&
git push --follow-tags &&
conventional-github-releaser -p "angular" &&
npm publish
