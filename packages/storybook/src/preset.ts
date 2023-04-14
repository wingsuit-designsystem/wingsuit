import type { Configuration } from 'webpack';
import path from 'path';

import { loadCsf } from '@storybook/csf-tools';
import { readFileSync } from 'fs';
import { csfParser } from '@wingsuit-designsystem/core';

const wingsuitCore = require('@wingsuit-designsystem/core');

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
    const csfParserFilename = fileName.replace('wingsuit.yml', 'stories.wingsuit.jsx');
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
