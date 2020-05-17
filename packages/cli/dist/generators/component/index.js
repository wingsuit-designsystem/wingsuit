"use strict";

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* eslint-disable no-param-reassign */

/**
 * @file
 *
 * Enforce some of the business logic within Particle around components and
 * where they live.
 */
const wingsuitCore = require('@wingsuit-designsystem/core');

const {
  relative,
  extname
} = require('path');

const {
  readdirSync
} = require('fs');

const Generator = require('yeoman-generator');

const {
  camelCase,
  kebabCase,
  snakeCase
} = require('lodash');

const rename = require('gulp-rename');

class _default extends Generator {
  constructor(args, opts) {
    super(args, opts); // The chosen app

    this.wingsuitApp = {};
  } // Any non-underscore function between here are initializing() will run in order
  // Reserved: Check for apps and design systems


  initializing() {} // Build out list of PL apps we want to present to user
  // Reserved: present options to the user


  prompting() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    this.log(`Hi! This will help you build a component folder with assets. Templates for this are in: ${relative(process.cwd(), __dirname)}`); // Prompts presented to user

    const prompts = [{
      name: 'path',
      message: 'Which app should be used?',

      filter(answer) {
        return kebabCase(answer);
      }

    }, {
      type: 'list',
      name: 'patternType',
      message: 'Where would you like this new component?',

      choices({
        path
      }) {
        const app = wingsuitCore.getApp(path); // Return array of atomic folders within the app's design system

        return readdirSync(app.getAppConfig().designSystem, {
          withFileTypes: true
        }).filter(folder => folder.isDirectory());
      }

    }, {
      name: 'name',
      message: 'What shall we name it?',

      filter(answer) {
        return kebabCase(answer);
      }

    }];
    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = Object.assign(Object.assign({}, props), {}, {
        // 'name' already exists as kebab-case-name (dashes)
        underscoreName: snakeCase(props.name),
        camelCaseName: camelCase(props.name),
        cleanPatternType: props.patternType.replace(/([0-9])\w+-/g, '')
      });
    });
  } // Reserved: write out the results


  writing() {
    const {
      name
    } = this.props; // Convert 'patterns.twig.ejs' to 'cards.twig'. registerTransformStream is
    // a reserved method to which Yeoman provides all file streams from copyTpl()

    this.registerTransformStream(rename(path => {
      // basename is 'patterns.twig' here
      const ext = extname(path.basename); // Original extname was '.ejs', change it to ext, which is now '.twig'

      path.extname = ext; // Remove extension ('.twig') from basename, replace 'pattern" with name

      path.basename = path.basename.replace(ext, '').replace('pattern', name);
      return path;
    }));
    this.log(`Your new component ${name} is being created, both as a raw component within your design system and demo folder within your Pattern Lab.`);
  }

}

exports.default = _default;
;