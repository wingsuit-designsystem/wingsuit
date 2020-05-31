import { Parameters } from './run-e2e';

const fromDeps = (...args: string[]): string =>
  [
    'cd {{name}}-v{{version}}',
    'yarn init --yes',
    args.length && `yarn add ${args.join(' ')} --silent`,
  ]
    .filter(Boolean)
    .join(' && ');

export const angular: Parameters = {
  name: 'angular',
  version: 'latest',
  generator: [
    `yarn add @angular/cli@{{version}} --no-lockfile --non-interactive --silent --no-progress`,
    `npx ng new {{name}}-v{{version}} --routing=true --minimal=true --style=scss --skipInstall=true`,
  ].join(' && '),
  additionalDeps: ['react', 'react-dom'],
};

// TODO: not working yet, help needed
// export const ember: Parameters = {
//   name: 'ember',
//   version: 'latest',
//   generator:
//     'npx ember-cli@{{version}} new {{name}}-v{{version}} --skip-git --skip-npm --yarn --skip-bower',
//   preBuildCommand: 'ember build',
// };

export const html: Parameters = {
  name: 'html',
  version: 'latest',
  generator: fromDeps(),
  autoDetect: false,
  additionalDeps: ['react', 'react-dom'],
};

// TODO: broken
// export const marionette: Parameters = {
//   name: 'marionette',
//   version: 'latest',
//   generator: fromDeps('backbone.marionette@{{version}}'),
// };

// TODO: not working on start-storybook
//  - Marko CLI is failing with Node 12 and looks to work with Node 10
//  - Demo components of @storybook/marko must be updated
//  - Marko Story templates of @storybook/cli must be updated
// export const marko: Parameters = {
//   name: 'marko',
//   version: 'latest',
//   generator: 'npx marko-cli@{{version}} create {{name}}-v{{version}}',
//   ensureDir: false,
// };

// TODO: need to install meteor first
// export const meteor: Parameters = {
//   name: 'meteor',
//   version: 'latest',
//   generator: 'meteor create {{name}}-v{{version}} --minimal --react',
// };

export const mithril: Parameters = {
  name: 'mithril',
  version: 'latest',
  generator: fromDeps('mithril@{{version}}'),
  additionalDeps: ['react', 'react-dom'],
};

export const preact: Parameters = {
  name: 'preact',
  version: 'latest',
  generator:
    'npx preact-cli@{{version}} create preactjs-templates/default {{name}}-v{{version}} --yarn --install=false --git=false',
  ensureDir: false,
};

export const rax: Parameters = {
  name: 'rax',
  version: 'latest',
  // Rax versions are inconsistent 1.1.0-1 for some
  generator: fromDeps('rax', 'rax-image', 'rax-link', 'rax-text', 'rax-view'),
  additionalDeps: ['react', 'react-dom'],
};

export const react: Parameters = {
  name: 'react',
  version: 'latest',
  generator: fromDeps('react'),
};

// export const reactNative: Parameters = {
//   name: 'reactNative',
//   version: 'latest',
//   generator: 'npx expo-cli init {{name}}-v{{version}} --template=bare-minimum --yarn',
// };

// TODO: issue in @storybook/cli init
export const cra: Parameters = {
  name: 'cra',
  version: 'latest',
  generator: 'npx create-react-app@{{version}} {{name}}-v{{version}}',
};

// TODO: there is a compatibility issue with riot@4
export const riot: Parameters = {
  name: 'riot',
  version: '3',
  generator: fromDeps('riot@3', 'riot-compiler@3', 'riot-tmpl@3'),
};

export const sfcVue: Parameters = {
  name: 'sfcVue',
  version: 'latest',
  generator: fromDeps('vue', 'vue-loader', 'babel-preset-vue', 'vue-template-compiler'),
  additionalDeps: ['react', 'react-dom'],
};

export const svelte: Parameters = {
  name: 'svelte',
  version: 'latest',
  generator: 'npx degit sveltejs/template {{name}}-v{{version}}',
  additionalDeps: ['react', 'react-dom'],
};

export const vue: Parameters = {
  name: 'vue',
  version: 'latest',
  generator: `npx @vue/cli@{{version}} create {{name}}-v{{version}} --default --packageManager=yarn --no-git --force`,
  additionalDeps: ['react', 'react-dom'],
};

export const web_components: Parameters = {
  name: 'web_components',
  version: 'latest',
  generator: fromDeps('lit-html', 'lit-element'),
  additionalDeps: ['react', 'react-dom'],
};

export const webpackReact: Parameters = {
  name: 'webpackReact',
  version: 'latest',
  generator: fromDeps('react', 'webpack'),
};

export const yarn2Cra: Parameters = {
  name: 'yarn-2-cra',
  version: 'latest',
  generator: [
    `yarn set version 2`,
    `yarn dlx create-react-app@{{version}} {{name}}-v{{version}}`,
  ].join(' && '),
};
