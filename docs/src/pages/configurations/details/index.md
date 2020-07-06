---
id: 'details'
title: 'Configuration'
---

Wingsuit comes with a [preset](https://github.com/wingsuit-designsystem/wingsuit/blob/master/packages/core/src/stubs/defaultWingsuitConfig.stub.ts) of variables which fit most use cases.

You can overwrite the preset in your `wingsuit.config.js`. 

<b>The Wingsuit configuration file has three main sections</b>

* `apps` for app-specific configuration. 

* `designSystem` for design system configuration. Each app links to a design system.

* `presets` list of loaded webpack presets. [Here you can find more information](../preset-webpack) about webpack bundles.

### Extend the configuration
With the `extend` key, you can extend the default configuration.  

### Environment specific configuration
With `environments` you can overwrite a configuration value for a specific environment.

Here is an example of overwriting the cssMode for development:
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

## Details
### Apps
Each app is configurable by following properties:
* `type` the type of the app.
* `path` the path to the app.
* `cssMode` extract CSS or not.
* `designSystem` The name to the design system.
* `distFolder` the path to the dist folder.
* `assetBundleFolder` the folder name under the dist folder for assets.

### Design systems
In the `designSystems` section you define the folder structure of your design system. 
Each design system uses `namespaces` to configure folder aliases.
#### Sample namespaces:
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

#### Namespaces:
You can use namespaces in twig and javascript imports.

<b>TWIG:</b>
```js
  {% include "@atoms/button/button.twig" %}
```

<b>Javascript:</b>
```js
  import "atoms/button";
```

#### Presets
Wing
