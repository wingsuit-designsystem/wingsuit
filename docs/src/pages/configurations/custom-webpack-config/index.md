---
id: 'custom-webpack-config'
title: 'Custom webpack configuration'
---

## Overview

Wingsuit uses predefined webpack presets for every app. Add a `webpack hook` to your wingsuit.config.js if you want to extend the webpack configuration:
 
```js
module.exports = {
  webpack: function(appConfig) {
    return {
    // Custom Webpack.
    };
  },
  ....
  designSystem: {
    ....
  }
}
``` 
If you want to alter the final config use the `webpackFinal hook`.

```js
module.exports = {
  webpackFinal: function(appConfig, webpack) {
    // Alter final webpack config.
    return webpack; 
  },
  ....
  designSystem: {
    ....
  }
}
``` 

## Preset

Wingsuit uses `presets` to make webpack configurations reusable across different apps.

A preset is a set of hooks that is called by Wingsuit on webpack initialization and can override configurations for webpack.

The goal is to deliver a community driven set of webpack presets. Checkout the predefined presets in the [default config stub](@TODO).

Each preset have two possible hooks:
```js
module.exports = {
  webpack: function(appConfig) {
    return {
    // Custom Webpack.
    };
  },
  webpackFinal: function(appConfig, webpack) {
    // Alter final webpack config.
    return webpack; 
  }
}
```
Then register the bundle inside your wingsuit.config.js:
```js
  const customPreset = require('custom/Preset');
  
  module.exports = {
    ... 
    presets: {
      "CustomPreset": customPreset
    }
    ...
  };

```
## Extend or replace config?

There are two ways to use presets: 
### Extend
The most common use case is to extend the existing `presets` config. For this you can use the `extend` keyword inside the `webpack.config.js`.
```js
module.exports = {
  extend: {
      apps: {
        storybook: {
          presets: [
            "customPreset"
          ],
        }
      }
    } 
  };
```

### Replace
It's also possible to replace the existing bundles with a completely custom configuration. Doing so overwrites the existing app config. 
```js
module.exports = {
  apps: {
    storybook: {
      presets: [
        "storybook",
        "css",
        "customPreset"
      ],
    }
  }
};
``` 

Place your `preset` file wherever you want, if you want to share it far and wide you’ll want to make it its own package.