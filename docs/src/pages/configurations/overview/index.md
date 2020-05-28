---
id: 'overview'
title: 'Configuration overview'
---

For CLI options see: [here](../cli-options).

## Main configuration

By default, Wingsuit will look for wingsuit.config.js file at the root of your project where you can define any customizations.

The minimal configuration file includes only the namespaces:

```js
const namespaces = require('./source/default/namespaces');

module.exports = {
  designSystems: {
    default: {
      namespaces,
    },
  },
};

```

If you want to customize the folder structure or the webpack configuration you can extend the configuration. 

Here is the complete configuration: (The configuration stub is located [here](https://github.com/wingsuit-designsystem/wingsuit/blob/master/packages/core/src/stubs/defaultWingsuitConfig.stub.ts))

```js
{
  designSystems: {
    default: {
      path: "source/default",
      patternPath: "patterns",
      namespaces: {}
    }
  },
  environments: {
    development: {},
    production: {}
  },
  apps: {
    storybook: {
      type: "storybook",
      path: "./apps/storybook",
      cssMode: "hot",
      distFolder: "dist/app-storybook",
      assetBundleFolder: "assets",
      designSystem: "default",
      webpackBundles: [
        "DefaultBundle",
        "StorybookAssetBundle",
        "TwingBundle",
        "StorybookBundle",
        "CssBundle",
        "BabelBundle"
      ]
    },
    drupal: {
      type: "drupal",
      path: "./apps/drupal",
      cssMode: "extract",
      distFolder: "dist/app-drupal",
      assetBundleFolder: "assets",
      designSystem: "default",
      webpackBundles: [
        "BabelBundle",
        "DefaultBundle",
        "AssetBundle",
        "DrupalBundle",
        "CssBundle"
      ]
    }
  }
}

```
Each of this values can overwritten in the `wingsuit.config.js`.

Here a short overview of the main concepts.
`apps` to configure each app. 

`environments` to overwrite a configuration value for a specific environment.

`designsystems` to configure the designsystem itself.

## Configuration details:
For detailed  [configuration overview](../custom-webpack-config/)

## webpack

For how to customize webpack, [view the customize webpack section](../custom-webpack-config/)
