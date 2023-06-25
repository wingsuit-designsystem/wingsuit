/**
 * @file
 *
 */
import { resolveConfig, getAppNames, supportFeature } from '@wingsuit-designsystem/core';

const { relative, join } = require('path');
const { readdirSync } = require('fs');

const Generator = require('yeoman-generator');
const { startCase, camelCase, kebabCase, snakeCase } = require('lodash');
const rename = require('gulp-rename');

export default class extends Generator {
  // Reserved: present options to the user
  prompting() {
    const storybookConfig = resolveConfig('storybook');
    const supportsScss = supportFeature('scss', storybookConfig);
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
          return getAppNames(null);
        },
      },
      {
        type: 'list',
        name: 'patternType',
        message: 'Where would you like this new component?',
        choices({ app }) {
          const config = resolveConfig(app);
          // Return array of atomic folders within the app's design system
          return readdirSync(config.absPatternPath, {
            withFileTypes: true,
          }).filter((folder) => folder.isDirectory());
        },
      },
      {
        name: 'name',
        message: 'What shall we name it?',
        filter(answer) {
          return kebabCase(answer);
        },
        validate(answer) {
          return answer !== '';
        },
      },
      {
        type: 'list',
        name: 'componentType',
        message: 'What type of component would you like to create?',
        default: 'wingsuit',
        choices({ app }) {
          const config = resolveConfig(app);
          const types = config.componentTypes;
          const choices: any = [];
          Object.keys(types).forEach((key) => {
            choices.push({
              value: key,
              name: types[key],
            });
          });
          return choices;
        },
      },
      {
        type: 'confirm',
        name: 'useCss',
        message: 'Do you need a CSS file?',
        default: false,
      },
      {
        type: 'confirm',
        name: 'useScss',
        message: 'Do you need a SCSS file?',
        default: false,
        when: (answers) => {
          return supportsScss;
        },
      },
      {
        type: 'confirm',
        name: 'useJs',
        message: 'Do you need an javascript attach event handler?',
        default: false,
      },
      {
        type: 'list',
        name: 'useDoc',
        message: 'How do you want to document your component?',
        default: false,

        choices({ componentType }) {
          const choices: any = [];
          choices.push({ value: 'automatic', name: 'Automatic' });
          choices.push({ value: 'mdx', name: 'MDX' });
          choices.push({ value: 'no', name: 'No documentation' });
          return choices;
        },
      },
    ];

    const fieldsPrompts = [
      {
        type: 'confirm',
        name: 'add',
        message: 'Do you want to add a new field?',
        default: true,
      },
      {
        type: 'input',
        name: 'name',
        message: 'Field Name?',
        filter(answer) {
          return snakeCase(answer);
        },
        validate(answer) {
          return answer !== '';
        },
        when: (answers) => {
          return answers.add;
        },
      },
      {
        type: 'input',
        name: 'label',
        message: 'Field Label?',
        default(answers) {
          return startCase(answers.name);
        },
        validate(answer) {
          return answer !== '';
        },
        when: (answers) => {
          return answers.add;
        },
      },
      {
        type: 'list',
        name: 'type',
        when: (answers) => {
          return answers.add;
        },
        message: 'Field Type?',
        choices({ componentType }) {
          const choices: any = [];
          choices.push({ value: 'text', name: 'Text' });
          choices.push({ value: 'pattern', name: 'Pattern' });
          choices.push({ value: 'object', name: 'Object' });
          return choices;
        },
      },
      {
        type: 'confirm',
        name: 'preview',
        message: 'Do you want to add preview content?',
        default: true,
        when: (answers) => {
          return answers.add;
        },
      },
    ];

    const variantPrompts = [
      {
        type: 'confirm',
        name: 'add',
        message: 'Do you want to add a variant to your pattern?',
        default: true,
      },
      {
        type: 'input',
        name: 'name',
        message: 'Variant Name?',
        filter(answer) {
          return snakeCase(answer);
        },
        validate(answer) {
          return answer !== '';
        },
        when: (answers) => {
          return answers.add;
        },
      },
      {
        type: 'input',
        name: 'label',
        message: 'Variant Label?',
        default(answers) {
          return startCase(answers.name);
        },
        validate(answer) {
          return answer !== '';
        },
        when: (answers) => {
          return answers.add;
        },
      },
    ];
    const settingsPrompts = [
      {
        type: 'confirm',
        name: 'add',
        message: 'Do you want to add a new setting?',
        default: true,
      },
      {
        type: 'input',
        name: 'name',
        message: 'Setting Name?',
        filter(answer) {
          return snakeCase(answer);
        },
        validate(answer) {
          return answer !== '';
        },
        when: (answers) => {
          return answers.add;
        },
      },
      {
        type: 'input',
        name: 'label',
        message: 'Setting Label?',
        default(answers) {
          return startCase(answers.name);
        },
        validate(answer) {
          return answer !== '';
        },
        when: (answers) => {
          return answers.add;
        },
      },
      {
        type: 'list',
        name: 'type',
        when: (answers) => {
          return answers.add;
        },
        message: 'Setting Type?',
        choices({ componentType }) {
          const choices: any = [];
          choices.push({ value: 'textfield', name: 'Textfield' });
          choices.push({ value: 'select', name: 'Select' });
          choices.push({ value: 'boolean', name: 'Boolean' });
          choices.push({ value: 'checkboxes', name: 'Checkboxes' });
          choices.push({ value: 'radios', name: 'Radios' });
          choices.push({ value: 'token', name: 'Token' });
          choices.push({ value: 'attributes', name: 'Attributes' });
          choices.push({ value: 'media_library', name: 'Media Library' });
          choices.push({ value: 'coloriswidget', name: 'Coloriswidget' });
          choices.push({ value: 'colorwidget', name: 'Colorwidget' });
          choices.push({ value: 'group', name: 'Group' });

          return choices;
        },
      },
    ];
    const loop = (loopingPrompts, propName) => {
      return this.prompt(loopingPrompts).then((props) => {
        if (props.add) {
          if (!this.props[propName]) {
            this.props[propName] = [];
          }
          props.name = props.name.toLowerCase().replace(' ', '_').replace('-', '_');
          this.props[propName].push(props);
        }
        return props.add ? loop(loopingPrompts, propName) : this.prompt([]);
      });
    };
    return this.prompt(prompts).then((props) => {
      // To access props later use this.props.someAnswer;
      const cleanPatternType = props.patternType.replace(/([0-9])\w+-/g, '');
      const cleanName = props.name.replace(/-/g, '');
      this.props = {
        useScss: false,
        useWingsuit:
          props.componentType === 'wingsuit' || props.componentType === 'wingsuit_presenter',
        ...props,
        // 'name' already exists as kebab-case-name (dashes)
        capitalizeName: startCase(props.name),
        underscoreName: snakeCase(props.name),
        camelCaseName: camelCase(cleanName),
        cleanPatternType,
        capitalizeCleanPatternType: startCase(cleanPatternType),
      };
      return loop(variantPrompts, 'variants').then(() => {
        return loop(fieldsPrompts, 'fields').then(() => {
          return loop(settingsPrompts, 'settings').then(() => {
            this.props.hasVariants = this.props.variants && this.props.variants.length !== 0;
            this.props.hasSettings = this.props.settings && this.props.settings.length !== 0;
            this.props.hasFields = this.props.fields && this.props.fields.length !== 0;
          });
        });
      });
    });
  }

  // Return path to the design system's component folder
  getDsComponentPath() {
    const { app, name, patternType } = this.props;
    const config = resolveConfig(app);
    return join(config.absDesignSystemPath, 'patterns', patternType, name);
  }

  // Return path to the design system's component folder
  getAppComponentPath() {
    const { app, name, patternType } = this.props;
    const config = resolveConfig(app);
    return join(config.absAppPath, 'patterns', patternType, name);
  }

  writing() {
    const { name, useCss, useScss, useDoc, useJs, componentType } = this.props;
    // Convert 'patterns.twig.ejs' to 'cards.twig'. registerTransformStream is
    // a reserved method to which Yeoman provides all file streams from copyTpl()

    this.queueTransformStream(
      rename((path) => {
        // Remove extension and replace pattern with pattern name
        path.basename = path.basename.replace('pattern', name);
        return path;
      })
    );
    try {
      if (componentType !== 'presenter') {
        this.fs.copyTpl(
          this.templatePath('ds/base/**/*.ejs'),
          this.getDsComponentPath(),
          this.props
        );
      }

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

      if (componentType === 'plain' || componentType === 'plain_presenter') {
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

      if (componentType === 'presenter') {
        this.fs.copyTpl(
          this.templatePath('app/presentation/**/*.ejs'),
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
      if (useScss) {
        // Copy and process all design system files
        this.fs.copyTpl(
          this.templatePath('ds/scss/**/*.ejs'),
          this.getDsComponentPath(),
          this.props
        );
      }

      if (useJs) {
        this.fs.copyTpl(this.templatePath('ds/js/**/*.ejs'), this.getDsComponentPath(), this.props);
      }

      if (useDoc === 'mdx' && componentType !== 'presenter') {
        this.fs.copyTpl(
          this.templatePath('ds/doc/**/*.ejs'),
          this.getDsComponentPath(),
          this.props
        );
      }

      if (useDoc === 'mdx' && componentType === 'presenter') {
        this.fs.copyTpl(
          this.templatePath('app/doc/**/*.ejs'),
          this.getAppComponentPath(),
          this.props
        );
      }

      this.log(`Your new component ${name} is being created.`);
    } catch (err: any) {
      this.log(`Error while creating component. ${err.message ?? ''}`);
    }
  }
}
