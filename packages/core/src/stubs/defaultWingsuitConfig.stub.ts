import Config from '../Config'

const css = require('../server/presets/css')
const babel = require('../server/presets/babel')
const assets = require('../server/presets/assets')
const storybook = require('../server/presets/storybook')
const cms = require('../server/presets/cms')
const wingsuitp = require('../server/presets/wingsuit')
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
    storybook,
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
      assetsDistFolder: '',
      designSystem: 'default',
      presets: [assets, wingsuitp],
      componentTypes: {
        wingsuit_presenter: 'Wingsuit component (UI Pattern) with presentation template',
        plain: 'Twig only component',
        plain_presenter: 'Twig only component with presentation template',
        presenter: 'Presentation template',
      },
      startup(passedArgs) {
        if (this.environment === 'production') {
          return `cross-env-shell NODE_ENV=${this.environment} "storybook build --config-dir ${this.absAppPath} ${passedArgs}"`
        }
        return `cross-env-shell NODE_ENV=${this.environment} "storybook dev --config-dir ${this.absAppPath}  ${passedArgs}"`
      },
    },
    test: {
      path: './apps/test',
      cssMode: 'hot',
      type: 'cms',
      distFolder: 'dist/app-cms',
      assetsDistFolder: '',
      twigDistFolder: 'templates',
      designSystem: 'default',
      presets: [assets, assetsVideos, css],
    },
    cms: {
      path: './apps/cms',
      cssMode: 'hot',
      type: 'cms',
      distFolder: 'dist/app-cms',
      assetsDistFolder: '',
      twigDistFolder: 'templates',
      designSystem: 'default',
      presets: [assets, assetsVideos, babel, css, cms],
    },
    drupal: {
      path: './apps/drupal',
      cssMode: 'extract',
      distFolder: 'dist/app-drupal',
      twigDistFolder: 'templates',
      type: 'drupal',
      assetsDistFolder: '',
      designSystem: 'default',
      presets: [assets, assetsVideos, babel, css, cms, wingsuitp],
    },
  },
}
