import { Parameters } from './run-e2e';

const fromDeps = (...args: string[]): string =>
  [
    'cd {{name}}-v{{version}}',
    'yarn init --yes',
    args.length && `yarn add ${args.join(' ')} --silent`,
  ]
    .filter(Boolean)
    .join(' && ');


export const cliInit: Parameters = {
  name: 'cliInit',
  version: 'latest',
  generator: [
    `npx @wingsuit-designsystem/cli init --smoke-test`,
  ].join(' && '),
};

