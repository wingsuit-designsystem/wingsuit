---
id: 'details'
title: 'Configuration'
---

The folder layout of the designsystem, the used webpack bundles and the folder structure of the deployment can configured inside the `wingsuit.config.js`.<br> 
A good starting point is complete wingsuit file:

```js
export const wingsuit = {
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
If you don't change the folder structure of the design system the minimal configuration file looks like:
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

## Main Section

* `apps` to configure each app. 

* `designsystems` to configure the designsystem itself.

## Extend the configuration

* `environments` to overwrite a configuration value for a specific environment.

* `extend` To extend instead of replace the configuration.

## Design systems
The `designSystems` section is where you define the folder structure of your design system. 
Each design system uses `namespaces` to configure folder aliases.
### Sample namespaces:
```js
const path = require('path');

const patterns = path.resolve(__dirname, 'patterns');

module.exports = {
  tokens: path.resolve(__dirname, 'tokens'),
  protons: path.resolve(patterns, '00-protons'),
  atoms: path.resolve(patterns, '01-atoms'),
  molecules: path.resolve(patterns, '02-molecules'),
  organisms: path.resolve(patterns, '03-organisms'),
  templates: path.resolve(patterns, '04-templates'),
  pages: path.resolve(patterns, '05-pages'),
};
```

### Namespaces:
With namespaces you can include twig components and javascript components.

<b>TWIG:</b>
```js
  {% include "@atoms/button/button.twig" %}
```

<b>Javascript:</b>
```js
  import "atoms/button";
```

## Apps
Each apps has the following configuration keys:

`type`: The type of the app.

`path`: The path to the app.

`cssMode`: Extract css or not.

`distFolder`: The path to the dist folder.

`assetBundleFolder`: The folder name under the dist folder for assets.

`designSystem`: Link to the design system.

`webpackBundles`: The used webpack bundles. [Here you can find more informations](../custom-webpack-config) about webpack bundles.


## Environments

Under each environment you can overwrite default variables.

Here a example to overwrite the cssMode for development:
```js
    environments: {
      ...
          development: {
            apps: {
              storybook: {
                cssMode: "extract"
              }
            }
          }
```
