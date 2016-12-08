#!/bin/bash

set -ev

# test on all platforms once per day (cron job
# activated in Travis UI)
if [ "$TRAVIS_EVENT_TYPE" == "cron" ]; then
    npm run test:selenium:travis-all-platforms;
else
    npm run test:selenium:travis-chrome;
fi

exit 0;
