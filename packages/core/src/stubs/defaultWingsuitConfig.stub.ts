import AppConfig from '../AppConfig'

const css = require('../server/presets/css')
const babel = require('../server/presets/babel')
const assets = require('../server/presets/assets')
const storybook = require('../server/presets/storybook')
const drupal = require('../server/presets/drupal')
const cms = require('../server/presets/cms')
const twing = require('../server/presets/twing')
const svg = require('../server/presets/svg')
const assetsVideos = require('../server/presets/assetsVideos')

export const wingsuit = {
  webpackFinal: null,
  webpack: null,
  parameters: {},
  defaultPresets: {
    babel,
    assets,
    assetsVideos,
    svg,
    twing,
    storybook,
    drupal,
    cms,
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
      path: './apps/storybook',
      type: 'storybook',
      cssMode: 'hot',
      distFolder: 'dist/app-storybook',
      assetBundleFolder: '',
      designSystem: 'default',
      presets: [twing, storybook],
      startup: (app: AppConfig) => {
        return `start-storybook --config-dir ${app.absAppPath}`
      },
    },
    cms: {
      path: './apps/cms',
      cssMode: 'hot',
      type: 'cms',
      distFolder: 'dist/app-cms',
      assetBundleFolder: '',
      designSystem: 'default',
      presets: [cms],
    },
    drupal: {
      path: './apps/drupal',
      cssMode: 'extract',
      distFolder: 'dist/app-drupal',
      assetAtomicFolder: 'atomic',
      type: 'drupal',
      assetBundleFolder: '',
      designSystem: 'default',
      presets: [drupal],
    },
  },
}
