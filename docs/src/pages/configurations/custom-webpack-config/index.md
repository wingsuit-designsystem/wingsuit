---
id: 'custom-webpack-config'
title: 'Custom webpack configuration'
---

## Overview
Wingsuit uses `webpack bundles` to make webpack configs reusable for differnt apps. 

The goal is to deliver a community driven set of webpack configurations which can easily extend or replaced.

A webpack bundle is basicly a class which returns a webpack config object. 

## Create a new `webpack bundle`

Create a new Class which under `.wingsuit/webpackBundle` extends BaseConfigBundle.

```js
const wingsuitCore = require("@wingsuit-designsystem/core");

class CustomBundle extends wingsuitCore.BaseWebpackBundle {
  getSharedWebpackConfig() {
    // Custom webpack config.
    return {}
  }
}

module.exports = CustomBundle;

```
Register the bundle inside your wingsuit.config.js.
```js
  const CustomBundle = require('./.wingsuit/webpackBundle/CustomBundle');
  
  module.exports = {
    ... 
    webpackBundles: {
      "CustomBundle": CustomBundle
    },
    ...
  };

```
## Extend or replace config?

There are two possibilities to use webpack bundles: 
### Extend
The most common use case is to extend the existing webpackBundles config. Therefor you can use the `extend` keyword inside the `webpack.config.js`.
```js
module.exports = {
  extend: {
      apps: {
        storybook: {
          webpackBundles: [
            "CustomBundle"
          ],
        }
      }
    } 
  };
```

### Replace
It's also possible to replace the existing bundles an complete custom configuration. To do that overwrite the app config. 
```js
module.exports = {
  apps: {
    storybook: {
      webpackBundles: [
        "StorybookBundle",
        "CssBundle",
        "CustomBundle"
      ],
    }
  }
};
``` 