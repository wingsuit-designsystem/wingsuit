import { getAppTypes, getApps } from '@wingsuit-designsystem/core';
import { addApp } from '../../configParser';

const { join, relative } = require('path');
const inqfs = require('inquirer-fs-selector');
const Generator = require('yeoman-generator');

export default class extends Generator {
  private targetFolder;

  initializing() {
    this.env.adapter.promptModule.registerPrompt('fs', inqfs);
    const apps = getApps();
    apps.forEach(app => {
      const generatorInfo = app.generator(app, 'ws:app', this);
      if (generatorInfo != null) {
        this.composeWith(generatorInfo);
      }
    });
  }

  prompting() {
    this.log(`Hi! This will help you build a app `);
    const prompts = [
      {
        type: 'list',
        name: 'appType',
        message: 'Which app should be used?',
        choices() {
          return getAppTypes(null);
        },
      },
      {
        name: 'location',
        message: 'Choose a directory for your app?',
        type: 'fs',
        basePath: './apps',
        options: {
          displayHidden: false,
          displayFiles: false,
          canSelectFile: false,
          icons: false, // not show icons
        },
      },
      {
        name: 'appName',
        message: 'What shall we name it?',
        filter(answer) {
          return answer;
        },
      },
    ];
    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  getTaretFolder() {
    return this.targetFolder;
  }

  getProps() {
    return this.props;
  }

  writing() {
    try {
      const { appType, location, appName } = this.props;

      const targetFolder = join(location.path, appName);
      this.targetFolder = targetFolder;
      const coreTypes = ['drupal', 'storybook', 'cms'];

      if (coreTypes.includes(appType)) {
        this.fs.copyTpl(this.templatePath(`${appType}/**/*.ejs`), targetFolder, this.props);
      }
      const source = this.fs.read(this.destinationPath('wingsuit.config.js'));
      const relativeTargetFolder = relative(process.cwd(), targetFolder);
      const updatedWingsuitConfig = addApp(
        appName,
        appType,
        [
          {
            name: 'path',
            value: relativeTargetFolder,
          },
        ],
        source
      );
      this.fs.write(this.destinationPath('wingsuit.config.js'), updatedWingsuitConfig);
      this.log(`Your new app ${appName} is being created.`);
    } catch (err) {
      this.log(err);
      this.log(`Error while creating component. ${err.message}`);
    }
  }
}
