import { loadCsf } from '@storybook/csf-tools';
import namespaces from '../../source/default/namespaces.js';
import {readFileSync} from 'fs';
import {csfParser} from "@wingsuit-designsystem/core";

export const storyIndexers = async (indexers?: StoryIndexer[]) => {
  const csfIndexer = async (fileName: string, opts: IndexerOptions) => {
    const src = readFileSync(fileName, 'utf-8').toString();
    const code = csfParser(fileName, src, namespaces);
    //const code = readFileSync(fileName, 'utf-8').toString();
    console.log(code);
    const result = loadCsf(code, { ...opts, fileName }).parse();
    console.log();
    console.log(code);
    console.log(fileName, result);
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
