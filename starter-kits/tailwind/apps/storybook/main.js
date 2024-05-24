import { resolveConfig, stories } from '@wingsuit-designsystem/core';
import { csfParser } from '@wingsuit-designsystem/storybook';
import { readFileSync } from 'fs';

const appName = 'storybook';
const appConfig = resolveConfig(appName);
const postCss = require('postcss');

const combosIndexer = {
  test: /\.stories\.wingsuit\.jsx$/,
  createIndex: async (fileName, { makeTitle }) => {
    // Read file and generate entries ...
    const src = readFileSync(fileName, 'utf-8').toString();
    const parserResults = csfParser(fileName, src, appConfig).items;

    return parserResults.map((entry) => ({
      type: 'story',
      // 👇 Use makeTitle to format the title
      title: `${makeTitle(entry.namespace)}`,
      importPath: `virtual:jsonstories--${entry.exportName}`,
      exportName: entry.exportName,
      name: entry.label,
    }));
  },
};

export default {
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        /** This don't work */
        lazyCompilation: false,
        fsCache: false,
      },
    },
  },
  typescript: { reactDocgen: false },
  docs: {
    autodocs: 'tag',
    defaultName: 'Docs',
  },
  stories: [
    './patterns/00-foundations/**/*.mdx',
    '../../source/default/patterns/**/*.stories.wingsuit.jsx',
    '../../source/default/patterns/**/*.stories.jsx',
    './patterns/**/*.stories.wingsuit.jsx',
    './patterns/**/*.stories.jsx',
    ...stories(appConfig),
  ],
  experimental_indexers: async (existingIndexers) => [...existingIndexers, combosIndexer],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: {
          implementation: postCss,
        },
      },
    },
    {
      name: '@wingsuit-designsystem/storybook',
      options: {
        appName: 'storybook',
      },
    },
  ],
};
