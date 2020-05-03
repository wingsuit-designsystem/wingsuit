#!/usr/bin/env node

const { spawn, spawnSync } = require('child_process');
const clone = require('git-clone');

// Run script via `npx wingsuit-designsystem/create-wingsuit <folder-name>`
let folder = process.argv.slice(2)[0];

// Exit from the process if no folder argument is passed
if (!folder) {
  folder = "wingsuit";
}

const options = { stdio: 'inherit' };

// Removes the \n from the stringified buffer
const extractHash = buffer => {
  const arr = buffer.toString('utf8').split('\n');
  return arr[0];
};

/* 
 * Function fetches the tags off the repository and then pulls
 * the latest tag, rather than the current HEAD of master.
 */

const checkoutLatestTag = () => {
  console.log('Checking out latest tag...');
  // Make sure to fetch the tags to pull the latest
  spawnSync('git', ['fetch', '--tags'], options);

  // Pull the latest tag from the repository
  const pullTag = spawnSync('git', ['rev-list', '--tags', '--max-count=1'], {
    cwd: folder,
  });
  const tagHash = extractHash(pullTag.output[1]);

  // Checkout the local repo to the latest tag
  spawnSync('git', ['checkout', tagHash], { cwd: folder });
};

/*
 * npm commands must be run synchronously.
 * `npm run setup` utilizes dependencies initialized with `npm install`
 */

const setupWingsuit = () => {
  // This function must complete before the subsequent installs can be ran.
  checkoutLatestTag();


  const parentOptions = options;
  spawn('mv', ['wingsuit', 'wingsuit.bak'], options);
  spawn('mv', ['wingsuit.bak/packages/wingsuit', 'wingsuit'], options);
  spawn('rm', ['-rf', 'wingsuit.bak'], options);

  console.log('Running Wingsuit dependency installation...');
  options.cwd = folder;
  spawnSync('npm', ['install'], options);
  console.log('Running Wingsuit setup...');
  spawnSync('npm', ['run', 'dev:storybook'], options);
};

console.log('Cloning Wingsuit repo...');
clone('https://github.com/wingsuit-designsystem/wingsuit', folder, {}, setupWingsuit);
