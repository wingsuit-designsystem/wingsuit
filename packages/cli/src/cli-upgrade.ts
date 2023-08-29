import { AppConfig, getApps } from '@wingsuit-designsystem/core';
import glob from 'glob';
import chalk from 'chalk';
import path from 'path';

const fs = require('fs');

const logger = console;

function renameFilesByGlob(globPattern) {
  const files = glob.sync(globPattern);
  files.forEach((file) => {
    const fileContent = fs.readFileSync(file).toString();
    if (fileContent.includes('wingsuit') && fileContent.includes('patternDefinition')) {
      const fileName = path.basename(file).replace('.stories.jsx', '.stories.wingsuit.jsx');
      const directory = path.dirname(file);
      fs.renameSync(file, `${directory}/${fileName}`, (err) => {
        if (err) throw err;
      });
    }
  });
}

function renameFiles(appConfig: AppConfig) {
  if (appConfig.type === 'storybook') {
    renameFilesByGlob(`${appConfig.absAppPath}/**/*.stories.jsx`);
    Object.values(appConfig.namespaces).forEach((namespace) => {
      const globPattern = `${namespace}/**/*.stories.jsx`;
      renameFilesByGlob(globPattern);
    });
  }
}

function deleteOrphanConfigFiles(appConfig: AppConfig) {
  const deleteFiles = {
    storybook: [
      `${appConfig.absAppPath}/preview.js`,
      `${appConfig.absAppPath}/assets.js`,
      `${appConfig.absAppPath}/patterns/00-base/colors.stories.mdx`,
      `${appConfig.absAppPath}/patterns/00-base/icons.stories.mdx`,
      `${appConfig.absAppPath}/patterns/00-base/layout.stories.mdx`,
      `${appConfig.absAppPath}/patterns/00-base/scales.stories.mdx`,
      `${appConfig.absAppPath}/patterns/00-base/typeset.stories.mdx`,
      `${appConfig.absAppPath}/patterns/00-base/welcome.stories.mdx`,
    ],
    drupal: [`${appConfig.absAppPath}/webpack.config.js`, `${appConfig.absAppPath}/assets.js`],
  };
  if (deleteFiles[appConfig.type]) {
    deleteFiles[appConfig.type].forEach((filename) => {
      if (fs.existsSync(filename)) {
        fs.rmSync(filename);
      } else {
        logger.log(`File ${filename} should removed from migration but doesn't exists.`);
      }
    });
  }
}

function replaceConfigFiles(appConfig: AppConfig) {
  const copyFiles = {
    storybook: {
      'upgrade/.eslintrc.js.tpl': `${appConfig.absRootPath}/.eslintrc.js`,
      'upgrade/babel.config.js.tpl': `${appConfig.absRootPath}/babel.config.js`,
      'upgrade/main.js.tpl': `${appConfig.absAppPath}/main.js`,
      'upgrade/manager.js.tpl': `${appConfig.absAppPath}/manager.js`,
      'upgrade/preview.jsx.tpl': `${appConfig.absAppPath}/preview.jsx`,
      'upgrade/preview-head.html.tpl': `${appConfig.absAppPath}/preview-head.html`,
      'upgrade/01-welcome.mdx.tpl': `${appConfig.absAppPath}/patterns/00-base/01-welcome.mdx`,
      'upgrade/02-colors.mdx.tpl': `${appConfig.absAppPath}/patterns/00-base/02-colors.mdx`,
      'upgrade/03-icons.mdx.tpl': `${appConfig.absAppPath}/patterns/00-base/03-icons.mdx`,
      'upgrade/04-layout.mdx.tpl': `${appConfig.absAppPath}/patterns/00-base/04-layout.mdx`,
      'upgrade/05-scales.mdx.tpl': `${appConfig.absAppPath}/patterns/00-base/05-scales.mdx`,
      'upgrade/06-typeset.mdx.tpl': `${appConfig.absAppPath}/patterns/00-base/06-typeset.mdx`,
      'upgrade/load-patterns.js.tpl': `${appConfig.absAppPath}/patterns/00-base/load-patterns.js`,
    },
  };
  const key = !appConfig ? 'main' : appConfig.type;
  if (copyFiles[key]) {
    Object.entries(copyFiles[key]).forEach(([sourceFile, targetFile]) => {
      fs.copyFileSync(path.join(__dirname, sourceFile), targetFile);
    });
  }
}

export default (options) => {
  const apps = getApps();
  const welcomeMessage = 'ws upgrade - Upgrade to wingsuit 2.';
  logger.log(chalk.inverse(`\n ${welcomeMessage} \n\n`));
  apps.forEach((appConfig) => {
    logger.log(chalk.bgGreen(`Upgrading app ${appConfig.name}.`));
    logger.log(chalk.gray('Rename stories.jsx to stories.wingsuit.jsx.'));
    renameFiles(appConfig);
    logger.log(chalk.gray('Remove orphan configuration files.'));
    deleteOrphanConfigFiles(appConfig);
    logger.log(chalk.gray('Replace wingsuit configuration files.'));
    replaceConfigFiles(appConfig);
    logger.log();
  });
  logger.log(chalk.bgGreen('Wingsuit upgrade done!'));
};
