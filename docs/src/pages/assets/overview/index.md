---
id: 'overview'
title: 'Overview'
---

Wingsuit will compile all assets which are `@import`ed inside the designsystem or inside your `apps/app/assets.js`. 

If you are missing an asset inside your `dist` folder - or your webpack auto reload is not working - check if this file is `@import`ed.

You can configure the dist folder in `wingsuit.conf.yml`. The default points `[root]/dist/app-[type]`.
```
  apps: {
    storybook: {
      ...
      distFolder: 'dist/app-storybook',
      ...
    },
```
The asset preset compiles every asset to separate output folder inside your `dist` folder.

Checkout the [webpack asset preset](https://github.com/wingsuit-designsystem/wingsuit/blob/master/packages/core/src/server/presets/assets.ts) for more details. 
