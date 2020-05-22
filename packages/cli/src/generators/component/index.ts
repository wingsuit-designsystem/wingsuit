/* eslint-disable no-param-reassign */

/**
 * @file
 *
 * Enforce some of the business logic within Particle around components and
 * where they live.
 */

import {resolveConfig, getAppNames} from '@wingsuit-designsystem/core';

const {relative, extname, join} = require('path');
const {readdirSync} = require('fs');

const Generator = require('yeoman-generator');
const {startCase, camelCase, kebabCase, snakeCase} = require('lodash');
const rename = require('gulp-rename');

export default class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    // The chosen app
    this.appConfig = {};
  }


  // Reserved: Check for apps and design systems
  initializing() {
    // Build out list of PL apps we want to present to user
  }

  // Reserved: present options to the user
  prompting() {
    this.log(
      `Hi! This will help you build a component folder with assets. Templates for this are in: ${relative(
        process.cwd(),
        __dirname
      )}`
    );


    // Prompts presented to user
    const prompts = [
      {
        type: 'list',
        name: 'app',
        message: 'Which app should be used?',
        choices() {
          return getAppNames();
        },
      },
      {
        type: 'list',
        name: 'patternType',
        message: 'Where would you like this new component?',
        choices({app}) {
          const config = resolveConfig(app);
          // Return array of atomic folders within the app's design system
          return readdirSync(`${config.absDesignSystemPath}/patterns`, {
            withFileTypes: true,
          }).filter(folder => folder.isDirectory());
        },
      },
      {
        name: 'name',
        message: 'What shall we name it?',
        filter(answer) {
          return kebabCase(answer);
        },
      },
      {
        type: 'list',
        name: 'componentType',
        message: 'What type of component would you like to create?',
        default: 'wingsuit',
        choices() {
          return [
            {value: 'wingsuit', name: 'Wingsuit Component (including UI Pattern yaml)'},
            {value: 'wingsuit_presenter', name: 'Wingsuit Component with Presenter Template'},
            {value: 'plain', name: 'Twig Only Component'},
            {value: 'plain_presenter', name: 'Twig Only Component with Presenter Template'}]
        },
      },
      {
        type: 'confirm',
        name: 'useCss',
        message: 'Do you need a CSS file?',
        default: false
      },
      {
        type: 'confirm',
        name: 'useJavascriptHandler',
        message: 'Do you need an javascript attach handler?',
        default: false
      },
      {
        type: 'list',
        name: 'useDoc',
        message: 'How do you want to document your component?',
        default: false,

        choices({componentType}) {
          const choices: any = [];
          choices.push({value: 'automatic', name: 'Automatic'})
          choices.push({value: 'mdx', name: 'MDX'});
          choices.push({value: 'no', name: 'No documentation'});
          return choices;
        },
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = {
        ...props,
        // 'name' already exists as kebab-case-name (dashes)
        capitalizeName: startCase(props.name),
        underscoreName: snakeCase(props.name),
        camelCaseName: camelCase(props.name),
        cleanPatternType: props.patternType.replace(/([0-9])\w+-/g, ''),
      };
    });
  }

  // Return path to the design system's component folder
  getDsComponentPath() {
    const {app, name, patternType} = this.props;
    const config = resolveConfig(app);
    return join(config.absDesignSystemPath, 'patterns', patternType, name);
  }

  // Return path to the design system's component folder
  getAppComponentPath() {
    const {app, name, patternType} = this.props;
    const config = resolveConfig(app);
    return join(config.absAppPath, 'patterns', patternType, name);
  }

  writing() {
    const {name, useCss, useDoc, componentType} = this.props;

    // Convert 'patterns.twig.ejs' to 'cards.twig'. registerTransformStream is
    // a reserved method to which Yeoman provides all file streams from copyTpl()
    this.registerTransformStream(
      rename(path => {
        // basename is 'patterns.twig' here
        const ext = extname(path.basename);
        // Original extname was '.ejs', change it to ext, which is now '.twig'
        path.extname = ext;
        // Remove extension ('.twig') from basename, replace 'pattern" with name
        path.basename = path.basename.replace(ext, '').replace('pattern', name);
        return path;
      })
    );
    try {
      // Copy and process all design system files
      this.fs.copyTpl(
        this.templatePath('ds/base/**/*.ejs'),
        this.getDsComponentPath(),
        this.props
      );

      if (componentType === 'wingsuit' || componentType === 'wingsuit_presenter') {
        this.fs.copyTpl(
          this.templatePath('ds/wingsuit/**/*.ejs'),
          this.getDsComponentPath(),
          this.props
        );
      }
      if (componentType === 'plain' || componentType === 'plain_presenter') {
        this.fs.copyTpl(
          this.templatePath('ds/plain/**/*.ejs'),
          this.getDsComponentPath(),
          this.props
        );
      }
      if (componentType === 'plain') {
        this.fs.copyTpl(
          this.templatePath('ds/plain_only/**/*.ejs'),
          this.getDsComponentPath(),
          this.props
        );
      }
      if (componentType === 'plain_presenter') {
        this.fs.copyTpl(
          this.templatePath('app/plain/**/*.ejs'),
          this.getAppComponentPath(),
          this.props
        );
      }
      if (componentType === 'wingsuit_presenter') {
        this.fs.copyTpl(
          this.templatePath('app/wingsuit/**/*.ejs'),
          this.getAppComponentPath(),
          this.props
        );
      }
      if (useCss) {
        // Copy and process all design system files
        this.fs.copyTpl(
          this.templatePath('ds/css/**/*.ejs'),
          this.getDsComponentPath(),
          this.props
        );
      }
      if (useDoc === 'mdx') {
        // Copy and process all design system files
        this.fs.copyTpl(
          this.templatePath('ds/doc/**/*.ejs'),
          this.getDsComponentPath(),
          this.props
        );
      }

      this.log(
        `Your new component ${name} is being created.`
      );
    } catch (err) {
      this.log(
        `Error while creating component. ${err.message}`
      );
    }
  }
};
