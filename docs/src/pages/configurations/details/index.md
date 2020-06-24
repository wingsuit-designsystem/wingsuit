---
id: 'details'
title: 'Configuration'
---

The layout folder of the design system, the used webpack bundles and the structure folder of the deployment can be configured inside the `wingsuit.config.js`.<br> 
A good starting point is the complete `wingsuit.config.js` file which is located `wingsuit/wingsuit.config.js`:

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
If you don't change the folder structure of the design system, the minimal configuration file looks like:
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

* `apps` for app specific configuration. 

* `designSystems` to configure the design system itself.

## Extend the configuration

* `environments` to overwrite a configuration value for a specific environment.

* `extend` to extend the configuration instead of replacing it.

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
You can use namespaces in twig and javascript imports.

<b>TWIG:</b>
```js
  {% include "@atoms/button/button.twig" %}
```

<b>Javascript:</b>
```js
  import "atoms/button";
```

## Apps
Each apps uses the following configuration keys:

* `type` the type of the app.

* `path` the path to the app.

* `cssMode` extract css or not.

* `distFolder` the path to the dist folder.

* `assetBundleFolder` the folder name under the dist folder for assets.

* `designSystem` link to the design system.

* `webpackBundles` the used webpack bundles. [Here you can find more information](../custom-webpack-config) about webpack bundles.


## Environments

Under each environment you can overwrite default variables.

Here is a example to overwrite the cssMode for development:
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
