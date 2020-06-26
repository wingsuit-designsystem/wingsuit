---
id: 'preset-webpack'
title: 'Presets'
---

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
### 1. Extend
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

### 2. Replace
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