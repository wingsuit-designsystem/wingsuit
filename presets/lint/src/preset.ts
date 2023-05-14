import { AppConfig } from '@wingsuit-designsystem/core';

const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

interface LintConfig {
  esLintConfig: any;
  styleLintConfig: any;
}

export function defaultConfig(appConfig: AppConfig): LintConfig {
  return {
    styleLintConfig: {
      fix: false,
      failOnError: false,
    },
    esLintConfig: {
      exclude: 'node_modules',
      errorOnUnmatchedPattern: false,
      fix: false,
      failOnError: false,
    },
  };
}

export function name(appConfig: AppConfig) {
  return 'lint';
}

export function webpack(appConfig: AppConfig, config: LintConfig) {
  return {
    plugins: [new StylelintPlugin(config.styleLintConfig), new ESLintPlugin(config.esLintConfig)],
  };
}
