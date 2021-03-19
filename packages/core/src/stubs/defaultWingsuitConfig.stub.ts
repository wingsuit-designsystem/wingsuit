const css = require('../server/presets/css')
const babel = require('../server/presets/babel')
const assets = require('../server/presets/assets')
const storybook = require('../server/presets/storybook')
const drupal = require('../server/presets/drupal')
const twing = require('../server/presets/twing')
const svg = require('../server/presets/svg')
const assetsVideos = require('../server/presets/assetsVideos')

export const wingsuit = {
  webpackFinal: null,
  webpack: null,
  parameters: {},
  defaultPresets: {
    babel,
    css,
    assets,
    assetsVideos,
    svg,
    twing,
    storybook,
    drupal,
  },
  presets: [babel, css, assets, assetsVideos, svg],
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
      presets: [twing, storybook],
    },
    drupal: {
      type: 'drupal',
      path: './apps/drupal',
      cssMode: 'extract',
      distFolder: 'dist/app-drupal',
      assetAtomicFolder: 'atomic',
      assetBundleFolder: '',
      designSystem: 'default',
      presets: [drupal],
    },
  },
}
