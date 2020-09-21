#!/bin/bash

# exit on error
set -e

declare test_root=$PWD

# remove run directory before exit to prevent yarn.lock spoiling
function cleanup {
  rm -rfd ${test_root}/run
}
# trap cleanup EXIT

# copy all files from fixtures directory to `run`
rm -rfd run
mkdir run
cd run
echo "Running ws in $(pwd)"

yarn ws init --folder "$(pwd)/smoketest" --smoke-test
yarn ws init --folder "$(pwd)/wingsuit" --skip-install
cd wingsuit

echo "Install dependencies"
yarn install --non-interactive --silent --pure-lockfile

echo "Start storybook in smoke mode"
failed=0
yarn dev:storybook --smoke-test --quiet || failed=1
if [ $failed -eq 1 ]
then
  exit 1
fi
