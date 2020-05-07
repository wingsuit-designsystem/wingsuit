/* eslint-disable no-param-reassign */

/**
 * @file
 *
 * Enforce some of the business logic within Particle around components and
 * where they live.
 */

const { join, relative, extname } = require('path');
const { readdirSync } = require('fs');

const Generator = require('yeoman-generator');
const { camelCase, kebabCase, snakeCase } = require('lodash');
const rename = require('gulp-rename');


// All Particle apps have a config file
// const APP_CONFIG_FILE = 'wingsuit.app.config.js';
// _patterns is sacred
const PATTERNS_FOLDER = '_patterns';

export default class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    // const rootConfig = require(opts.env.cwd + '/wingsuit.root.config')
    // The chosen app
    this.wingsuitApp = {};
  }

  // Any non-underscore function between here are initializing() will run in order

  // Reserved: Check for apps and design systems
  initializing() {
    // Build out list of PL apps we want to present to user

  }

  // Reserved: present options to the user
  prompting() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;

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
        name: 'patternType',
        message: 'Where would you like this new component?',
        choices({ chooseApp }) {
          // Set the config for the app in a shared place
          self.wingsuitApp = self.plConfigs.find(
            ({ APP_NAME }) => APP_NAME === chooseApp
          );
          // Design system folder
          const { APP_DESIGN_SYSTEM } = self.wingsuitApp;

          // Return array of atomic folders within the app's design system
          return readdirSync(join(APP_DESIGN_SYSTEM, PATTERNS_FOLDER), {
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
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = {
        ...props,
        // 'name' already exists as kebab-case-name (dashes)
        underscoreName: snakeCase(props.name),
        camelCaseName: camelCase(props.name),
        cleanPatternType: props.patternType.replace(/([0-9])\w+-/g, ''),
      };
    });
  }

  // Reserved: write out the results
  writing() {
    const { name } = this.props;

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

    this.log(
      `Your new component ${name} is being created, both as a raw component within your design system and demo folder within your Pattern Lab.`
    );
  }
};
