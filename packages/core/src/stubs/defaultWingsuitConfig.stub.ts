const css = require('../server/presets/css')
const babel = require('../server/presets/babel')
const assets = require('../server/presets/assets')
const storybook = require('../server/presets/storybook')
const drupal = require('../server/presets/drupal')
const twing = require('../server/presets/twing')
const assetsVideos = require('../server/presets/assetsVideos')

export const wingsuit = {
  webpackFinal: null,
  webpack: null,

  presetsRegistry: {
    css,
    babel,
    assets,
    assetsVideos,
    storybook,
    drupal,
    twing,
  },
  presets: ['babel', 'css', 'assets', 'assetsVideos'],
  designSystems: {
    default: {
      path: 'source/default',
      patternFolder: 'patterns',
      namespaces: {},
    },
  },
  environments: {
    development: {},
    production: {},
  },
  apps: {
    storybook: {
      type: 'storybook',
      path: './apps/storybook',
      cssMode: 'hot',
      distFolder: 'dist/app-storybook',
      assetBundleFolder: '',
      designSystem: 'default',
      presets: ['twing', 'storybook'],
    },
    drupal: {
      type: 'drupal',
      path: './apps/drupal',
      cssMode: 'extract',
      distFolder: 'dist/app-drupal',
      assetAtomicFolder: 'atomic',
      assetBundleFolder: '',
      designSystem: 'default',
      presets: ['drupal'],
    },
  },
}
