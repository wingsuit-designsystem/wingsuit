import { AppConfig } from '@wingsuit-designsystem/core';

const remarkHighlight = require('remark-highlight.js');

interface MdxConfig {
  remarkOptions: {
    plugins: any[];
  };
}

export function defaultConfig(appConfig: AppConfig): MdxConfig {
  return {
    remarkOptions: {
      plugins: [],
    },
  };
}

export function supportFeature(name, appConfig: AppConfig) {
  if (name === 'mdx') {
    return true;
  }
  return false;
}

export function webpack(appConfig: AppConfig, mdxConfig: MdxConfig) {
  if (appConfig.type === 'storybook') {
    return {};
  }
  return {
    module: {
      rules: [
        {
          test: /\.mdx?$/,
          use: [
            'babel-loader',
            {
              loader: '@mdx-js/loader',
              options: {
                remarkPlugins: [[remarkHighlight]],
              },
            },
          ],
        },
      ],
    },
  };
}
