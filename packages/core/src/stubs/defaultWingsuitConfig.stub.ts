import Config from '../Config'

const css = require('../server/presets/css')
const babel = require('../server/presets/babel')
const assets = require('../server/presets/assets')
const storybook = require('../server/presets/storybook')
const drupal = require('../server/presets/drupal')
const cms = require('../server/presets/cms')
const twing = require('../server/presets/twing')
const wingsuitp = require('../server/presets/wingsuit')
const svg = require('../server/presets/svg')
const assetsVideos = require('../server/presets/assetsVideos')

export const wingsuit: Config = {
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
    wingsuit: wingsuitp,
  },
  presets: [],
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
      dataFolder: './apps/data',
      assetBundleFolder: '',
      designSystem: 'default',
      presets: [storybook, twing, wingsuitp],
      componentTypes: {
        wingsuit_presenter: 'Wingsuit component (UI Pattern) with presentation template',
        plain: 'Twig only component',
        plain_presenter: 'Twig only component with presentation template',
        presenter: 'Presentation template',
      },
      startup() {
        return `start-storybook --config-dir ${this.absAppPath}`
      },
    },
    cms: {
      path: './apps/cms',
      cssMode: 'hot',
      type: 'cms',
      dataFolder: './apps/data',
      distFolder: 'dist/app-cms',
      assetBundleFolder: '',
      designSystem: 'default',
      presets: [babel, css, cms],
    },
    drupal: {
      path: './apps/drupal',
      cssMode: 'extract',
      distFolder: 'dist/app-drupal',
      dataFolder: './apps/data',
      assetAtomicFolder: 'atomic',
      type: 'drupal',
      assetBundleFolder: '',
      designSystem: 'default',
      presets: [babel, css, drupal],
    },
  },
}
