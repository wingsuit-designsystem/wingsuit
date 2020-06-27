---
id: 'assets'
title: 'Images & Icons'
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
The asset preset compiles every asset to separate output folder inside the `dist` folder

## Fonts
Fonts are imported automatically inside `apps/[app-type]/assets.js`.  Wingsuit will compile these files to `[dist]/assets/fonts`

### Images 
All bitmap images like png,gif or jpg are imported automatically by the `assets.js`. Wingsuit will compile these files to `[dist]/assets/images`.

### Embedding image in twig:
You can use the `ws-assets` stream wrapper to get path to the asset folder. Ensure you have the [wingsuit_companion](https://www.drupal.org/project/wingsuit_companion) module enabled.

Sample twig file with an image:

```
<img src="{{ file_create_url('ws-assets://images/dummy.png')">
```
  
### Image in css:
To you use images inside your css file use the relative path to the image. Webpack will replace the right output path.  

### Svg images
If you need svg files as images instead of icons, place your images under an `images` folder.

## Svg Icons
Wingsuit generates a svg spritemap for every svg file which is located under an `icons` folder. Checkout the `atoms-01/svg` component.

Checkout the `atoms/svg/svg--icon.twig` component for more infos.

Checkout the [webpack asset preset](https://github.com/wingsuit-designsystem/wingsuit/blob/master/packages/core/src/server/presets/assets.ts) for more details. 