---
id: 'details'
title: 'Configuration'
---

Wingsuit comes with a [preset](https://github.com/wingsuit-designsystem/wingsuit/blob/master/packages/core/src/stubs/defaultWingsuitConfig.stub.ts) of variables which fit most use cases.

<b>The Wingsuit configuration file has three main sections</b>

* `apps` for app-specific configuration. A typical app is drupal. Here you can configure where your app is located, how you want to compile your assets and store your assets.   

* `designSystem` for design system configuration. The design system is where your patterns living. Here you can configure everything around your patterns.

* `presets` list of loaded webpack presets. [Here you can find more information](../preset-webpack) about webpack bundles.

## App details
Each app is configurable by following properties:
* `type` the type of the app.
* `path` the path to the app.
* `cssMode` extract CSS or not.
* `designSystem` The name to the design system.
* `distFolder` the path to the dist folder.
* `assetBundleFolder` the folder name under the dist folder for assets.

## Design systems details
In the `designSystems` section you define the folder structure of your design system. 
Each designSystem is configurable by following properties:
* `path` the path to the design system.
* `patternFolder` the folder name under the designsystem folder for patterns.
* `namespaces` to configure folder aliases.

#### Namespaces:

```js
const path = require('path' );

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

You can use namespaces in twig and javascript imports.

<b>TWIG:</b>
```js
  {% include "@atoms/button/button.twig" %}
```

<b>Javascript:</b>
```js
  import "atoms/button";
```

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

## Presets details
Check the [presets documentation](../preset-webpack) for more infos.
