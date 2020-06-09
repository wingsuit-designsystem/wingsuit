#!/bin/bash

cd packages/wingsuit
yarn build:storybook

# Cleanup preview folder
rm -r ../../docs/public/preview
mkdir -p ../../docs/public/preview

# Create preview
mv dist/app-storybook ../../docs/public/preview/storybook

# Create storybook docs
yarn build:storybook --docs
mv dist/app-storybook ../../docs/public/preview/docs
cd ../../docs
yarn build
yarn publish:latest
