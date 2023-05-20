import { Parameters } from './run-e2e';

const fromDeps = (...args: string[]): string =>
  [
    'cd {{name}}-v{{version}}',
    'yarn init --yes',
    args.length && `yarn add ${args.join(' ')} --silent`,
  ]
    .filter(Boolean)
    .join(' && ');


export const skTailwindInit: Parameters = {
  name: 'sk-tailwind',
  version: 'latest',
  generator: [
    `npx @wingsuit-designsystem/cli@latest init --smoke-test`,
  ].join(' && '),
};

export const skBootstrapInit: Parameters = {
  name: 'sk-bootstrap',
  version: 'latest',
  generator: [
    `npx @wingsuit-designsystem/cli@latest init -k vanilla-scss --smoke-test`,
  ].join(' && '),
};

