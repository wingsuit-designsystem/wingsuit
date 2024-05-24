import type { Configuration } from 'webpack';
import { readFileSync } from 'fs';
import { resolveConfig, stories as wingsuitStories } from '@wingsuit-designsystem/core';
import type { FrameworkOptions } from './type';
import { csfParser } from './csfParser';

export * from '@storybook/react-webpack5/preset';
export { csfParser } from './csfParser';

const wingsuitCore = require('@wingsuit-designsystem/core');

// eslint-disable-next-line @typescript-eslint/naming-convention
export const experimental_indexers = async (existingIndexers, options) => {
  // @ts-ignore
  const { appName } = await options.presets.apply<FrameworkOptions>('frameworkOptions');
  const appConfig = resolveConfig(appName);

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
  return [...existingIndexers, combosIndexer];
};

export async function webpackFinal(config: Configuration, options) {
  // @ts-ignore
  const { appName } = await options.presets.apply<FrameworkOptions>('frameworkOptions');
  const wingsuitConfig = wingsuitCore.resolveConfig(appName);
  return wingsuitCore.getAppPack(wingsuitConfig, [config]);
}

export async function stories(paths, options) {
  // @ts-ignore
  const { appName } = await options.presets.apply<FrameworkOptions>('frameworkOptions');
  const appConfig = wingsuitCore.resolveConfig(appName);

  return [
    `${appConfig.absAppPath}/patterns/**/*.mdx`,
    `${appConfig.absDesignSystemPath}/**/*.stories.wingsuit.jsx`,
    `${appConfig.absDesignSystemPath}/**/*.stories.jsx`,
    `${appConfig.absAppPath}/patterns/**/*.stories.wingsuit.jsx`,
    ...wingsuitStories(appConfig),
  ];
}
