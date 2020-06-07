import CssBundle from '../server/webpackBundles/CssBundle'
import BabelBundle from '../server/webpackBundles/BabelBundle'
import AssetBundle from '../server/webpackBundles/AssetBundle'
import StorybookAssetBundle from '../server/webpackBundles/StorybookAssetBundle'
import StorybookBundle from '../server/webpackBundles/StorybookBundle'
import DrupalBundle from '../server/webpackBundles/DrupalBundle'
import TwingBundle from '../server/webpackBundles/TwingBundle'
import TailwindConfigExport from '../server/webpackBundles/TailwindConfigExport'
import DefaultBundle from '../server/webpackBundles/DefaultBundle'

export const wingsuit = {
  webpackBundles: {
    CssBundle,
    BabelBundle,
    AssetBundle,
    StorybookAssetBundle,
    TailwindConfigExport,
    StorybookBundle,
    DrupalBundle,
    TwingBundle,
    DefaultBundle,
  },
  designSystems: {
    default: {
      path: 'source/default',
      patternPath: 'patterns',
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
      assetBundleFolder: 'assets',
      designSystem: 'default',
      webpackBundles: [
        'DefaultBundle',
        'StorybookAssetBundle',
        'TailwindConfigExport',
        'TwingBundle',
        'StorybookBundle',
        'CssBundle',
        'BabelBundle',
      ],
    },
    drupal: {
      type: 'drupal',
      path: './apps/drupal',
      cssMode: 'extract',
      distFolder: 'dist/app-drupal',
      assetBundleFolder: 'assets',
      designSystem: 'default',
      webpackBundles: ['BabelBundle', 'DefaultBundle', 'AssetBundle', 'DrupalBundle', 'CssBundle'],
    },
  },
}
