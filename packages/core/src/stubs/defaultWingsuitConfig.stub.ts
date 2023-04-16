import Config from '../Config'
import { Preset } from '../AppConfig'

const css: Preset = require('../server/presets/css')
const babel: Preset = require('../server/presets/babel')
const assets: Preset = require('../server/presets/assets')
const cms: Preset = require('../server/presets/cms')
const assetsVideos: Preset = require('../server/presets/assetsVideos')

export const wingsuit: Config = {
  webpackFinal: null,
  webpack: null,
  parameters: {},
  presets: [],
  defaultPresets: {
    babel,
    assets,
    assetsVideos,
    cms,
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
  },
}
