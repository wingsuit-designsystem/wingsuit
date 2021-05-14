---
id: 'preset-webpack'
title: 'Presets'
---

Wingsuit uses `presets` to make webpack configurations reusable across different apps.

The goal is to deliver a community-driven set of webpack presets. Check out the predefined presets in the [default config stub](@TODO).


## What is a preset
A preset provides a pre configured webpack configuration bundled in a node module.

A good starting point is the [wingsuit scss bundle](https://github.com/wingsuit-designsystem/wingsuit/blob/master/presets/scss/src/index.ts).

```js
module.exports = {
  name: function (appConfig) {
    return 'preset-name';
  },
  defaultConfiguration: function(appConfig) {
    return {'param1': 'value1'};
  },
  webpack: function(appConfig, config) {
    return {
    // Custom Webpack.
    };
  },
  webpackFinal: function(appConfig, webpack, config) {
    // Alter final webpack config.
    return webpack; 
  }
}
```
* `name` The unique name of the preset.
* `defaultConfiguration` should return a default configuration. This configuration can be overwritten.
* `webpack` should return the webpack code
* `webpackFinal` is optional and should only be implemented if the preset needs to make changes to the final webpack.

## Install a preset
To install a preset add your preset to your `package.json` and add it to your `wingsuit.config.yml`:
```js
  module.exports = {
    ... 
    presets: {
      'node-module-preset-name'
    }
    ...
  };

```

## Configure a preset
Every presets should work with zero configuration out of the box. A preset ship with a default configuration by the defaultConfiguration method.
You can overwrite the configuration with the parameters key in your `wingsuit.config.yml`.

```js
  module.exports = {
    parameters: {
      'preset-name': {
        'param1': 'newValue'
      }
    }, 
    presets: {
      "custom/Preset"
    }
    ...
  };

```


