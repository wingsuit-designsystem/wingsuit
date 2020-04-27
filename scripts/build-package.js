#!/usr/bin/env node

/* eslint-disable global-require */
const { resolve } = require('path');
const terminalSize = require('window-size');
const { checkDependenciesAndRun, spawn } = require('./cli-utils');

const getWingsuitPackages = () => {
  const listCommand = spawn(`lerna list`, {
    stdio: 'pipe',
  });

  const packages = listCommand.output
    .toString()
    .match(/@wingsuit-designsystem\/(.)*/g)
    .sort();

  return packages;
};

function run() {
  const inquirer = require('inquirer');
  const program = require('commander');
  const chalk = require('chalk');
  const log = require('npmlog');

  log.heading = 'wingsuit';
  const prefix = 'build';
  log.addLevel('aborted', 3001, { fg: 'red', bold: true });

  const packages = getWingsuitPackages();
  const packageTasks = packages
    .map((package) => {
      return {
        name: package,
        suffix: package.replace('@wingsuit-designsystem/', ''),
        defaultValue: false,
        helpText: `build only the ${package} package`,
      };
    })
    .reduce((acc, next) => {
      acc[next.name] = next;
      return acc;
    }, {});

  const tasks = {
    watch: {
      name: `watch`,
      defaultValue: false,
      suffix: '--watch',
      helpText: 'build on watch mode',
    },
    ...packageTasks,
  };

  const groups = {
    'mode (leave unselected if you just want to build)': ['watch'],
    packages,
  };

  const main = program.version('5.0.0').option('--all', `build everything ${chalk.gray('(all)')}`);

  Object.keys(tasks)
    .reduce((acc, key) => acc.option(tasks[key].suffix, tasks[key].helpText), main)
    .parse(process.argv);

  Object.keys(tasks).forEach((key) => {
    // checks if a flag is passed e.g. yarn build --@wingsuit-designsystem/addon-docs --watch
    const containsFlag = program.rawArgs.includes(tasks[key].suffix);
    tasks[key].value = containsFlag || program.all;
  });

  const createSeparator = (input) => `- ${input}${' ---------'.substr(0, 12)}`;

  const choices = Object.values(groups)
    .map((l) =>
      l.map((key) => ({
        name: (tasks[key] && tasks[key].name) || key,
        checked: (tasks[key] && tasks[key].defaultValue) || false,
      }))
    )
    .reduce(
      (acc, i, k) =>
        acc.concat(new inquirer.Separator(createSeparator(Object.keys(groups)[k]))).concat(i),
      []
    );

  let selection;
  let watchMode = false;
  if (
    !Object.keys(tasks)
      .map((key) => tasks[key].value)
      .filter(Boolean).length
  ) {
    const ui = new inquirer.ui.BottomBar();
    ui.log.write(
      chalk.yellow(
        'You can also run directly with package name like `yarn build core`, or `yarn build --all` for all packages!'
      )
    );

    selection = inquirer
      .prompt([
        {
          type: 'checkbox',
          message: 'Select the packages to build',
          name: 'todo',
          pageSize: terminalSize.height - 3, // 3 lines for extra info
          choices,
        },
      ])
      .then(({ todo }) => {
        watchMode = todo.includes('watch');
        return todo
          .filter((name) => name !== 'watch') // remove watch option as it served its purpose
          .map((name) => tasks[Object.keys(tasks).find((i) => tasks[i].name === name)]);
      });
  } else {
    // hits here when running yarn build --packagename
    watchMode = process.argv.includes('--watch');
    selection = Promise.resolve(
      Object.keys(tasks)
        .map((key) => tasks[key])
        .filter((item) => item.value === true)
    );
  }

  selection
    .then((list) => {
      if (list.length === 0) {
        log.warn(prefix, 'Nothing to build!');
      } else {
        const packageNames = list
          // filters out watch command if --watch is used
          .filter((key) => key.name !== 'watch')
          .map((key) => key.suffix)
          .filter(Boolean);

        const glob =
          packageNames.length > 1
            ? `@wingsuit-designsystem/{${packageNames.join(',')}}`
            : `@wingsuit-designsystem/${packageNames[0]}`;

        if (watchMode) {
          const runWatchMode = () => {
            const baseWatchCommand = `lerna exec --scope "${glob}" -- cross-env-shell node ${resolve(
              __dirname
            )}`;
            const watchTsc = `${baseWatchCommand}/watch-tsc.js`;
            const watchBabel = `${baseWatchCommand}/watch-babel.js`;
            const command = `concurrently --kill-others "${watchTsc}" "${watchBabel}"`;
            spawn(command);
          };

          if (packageNames.length < 5) {
            runWatchMode();
          } else {
            inquirer
              .prompt([
                {
                  type: 'confirm',
                  message:
                    'You selected a lot of packages on watch mode. This is a very expensive action and might slow your computer down. Do you want to continue?',
                  name: 'confirmation',
                },
              ])
              .then(({ confirmation }) => {
                if (confirmation === true) {
                  runWatchMode();
                }
              });
          }
        } else {
          spawn(`lerna run prepare --scope "${glob}"`);
        }
        process.stdout.write('\x07');
      }
    })
    .catch((e) => {
      log.aborted(prefix, chalk.red(e.message));
      log.silly(prefix, e);
      process.exit(1);
    });
}

checkDependenciesAndRun(run);
