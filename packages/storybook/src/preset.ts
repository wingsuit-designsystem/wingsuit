// eslint-disable-next-line prettier/prettier
import type { Configuration } from 'webpack';

import { loadCsf } from '@storybook/csf-tools';
import { readFileSync } from 'fs';
import { csfParser } from './csfParser';

const wingsuitCore = require('@wingsuit-designsystem/core');

export { csfParser } from './csfParser';

interface Options {
  appName?: string | 'storybook';
}

export function webpackFinal(config: Configuration, options: Options = {}): Configuration {
  const wingsuitConfig = wingsuitCore.resolveConfig(options.appName ?? 'storybook');
  return wingsuitCore.getAppPack(wingsuitConfig, [config]);
}

export const storyIndexers = async (indexers, options: Options) => {
  const wingsuitConfig = wingsuitCore.resolveConfig(options.appName ?? 'storybook');
  const csfIndexer = async (fileName: string, opts) => {
    const csfParserFilename = fileName;
    const src = readFileSync(csfParserFilename, 'utf-8').toString();
    const code = csfParser(csfParserFilename, src, wingsuitConfig);
    const result = loadCsf(code, { ...opts, csfParserFilename }).parse();
    return result;
  };
  return [
    {
      test: /\.stories\.wingsuit\.jsx$/,
      indexer: csfIndexer,
    },
    ...(indexers || []),
  ];
};
