---
id: 'details'
title: 'Configuration'
---
Wingsuit shipes with a preset of variables which fits most use cases and you propably don't need to change them.



### The main Section
The Wingsuit configuration file has 3 main sections:

* `apps` for app specific configuration. 
    * `type` the type of the app.
    * `path` the path to the app.
    * `cssMode` extract css or not.
    * `distFolder` the path to the dist folder.
    * `assetBundleFolder` the folder name under the dist folder for assets.

For example if you want to change the path to the drupal theme you can easily change the

* `designSystem` link to the design system.

* `webpackBundles` the used webpack bundles. [Here you can find more information](../custom-webpack-config) about webpack bundles.

* `designSystems` to configure the design system itself.

* `presets` for app specific configuration.
   




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
