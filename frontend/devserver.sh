#!/bin/bash
# echo commands we run
set -x
# exit on error
set -e

# Check whether we did install

if [ ! -d "node_modules" ]; then
    yarn install
fi

yarn start