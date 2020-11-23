---
id: 'preset-webpack'
title: 'Presets'
---

Wingsuit uses `presets` to make webpack configurations reusable across different apps.

The goal is to deliver a community-driven set of webpack presets. Check out the predefined presets in the [default config stub](@TODO).

Each preset has two possible hooks:
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

To install a preset add your preset to your `package.json` and add it to `wingsuit.yml`:
```js
  
  module.exports = {
    ... 
    presets: {
      "custom/Preset"
    }
    ...
  };

```
