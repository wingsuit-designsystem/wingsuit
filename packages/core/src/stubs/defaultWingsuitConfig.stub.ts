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
  presets: [],
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
      assetsDistFolder: '',
      designSystem: 'default',
      presets: [assets, assetsVideos, storybook, twing, wingsuitp, svg],
      componentTypes: {
        wingsuit_presenter: 'Wingsuit component (UI Pattern) with presentation template',
        plain: 'Twig only component',
        plain_presenter: 'Twig only component with presentation template',
        presenter: 'Presentation template',
      },
      startup() {
        if (this.environment === 'production') {
          return `build-storybook --config-dir ${this.absAppPath}`
        }
        return `start-storybook --config-dir ${this.absAppPath}`
      },
    },
    cms: {
      path: './apps/cms',
      cssMode: 'hot',
      type: 'cms',
      dataFolder: './apps/data',
      distFolder: 'dist/app-cms',
      assetsDistFolder: '',
      twigDistFolder: 'templates',
      designSystem: 'default',
      presets: [assets, assetsVideos, babel, css, twing, cms],
    },
    drupal: {
      path: './apps/drupal',
      cssMode: 'extract',
      distFolder: 'dist/app-drupal',
      dataFolder: './apps/data',
      twigDistFolder: 'templates',
      type: 'drupal',
      assetsDistFolder: '',
      designSystem: 'default',
      presets: [assets, assetsVideos, babel, css, cms, twing, wingsuitp, svg],
    },
  },
}
