#!/bin/bash

# Exit the script on any command with non 0 return code
# We assume that all the commands in the pipeline set their return code
# properly and that we do not need to validate that the output is correct
set -e

# Build gatsby docs.
cd docs
yarn build

# Cleanup preview folder
rm -r -f public/preview
mkdir -p public/preview

yarn publish:latest
