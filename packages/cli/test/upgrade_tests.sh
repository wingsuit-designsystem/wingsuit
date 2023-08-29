#!/bin/bash

# exit on error
set -e

declare test_root=$PWD

# remove run directory before exit to prevent yarn.lock spoiling
function cleanup {
  rm -rfd ${test_root}/run
}
#trap cleanup EXIT


# copy all files from fixtures directory to `run`
# rm -rfd run_upgrade
mkdir -p run_upgrade
cd run_upgrade


echo "Upgrade ws in $(pwd)"

if [ ! -d "$(pwd)/wingsuit_base" ]; then
	yarn ws init --branch "release/1.x" --folder "$(pwd)/wingsuit_base" --skip-install
	echo "Upgrade package.json"
	cp ../upgrade/package.json wingsuit_base/package.json
	cp ../upgrade/wingsuit.config.js wingsuit_base/wingsuit.config.js
	cd wingsuit_base
  echo "Install dependencies"
	yarn install
	cd ..
fi

if [ -d "$(pwd)/wingsuit" ]; then
  rm -R wingsuit
fi

cp -R wingsuit_base wingsuit
cd wingsuit
yarn ws upgrade
