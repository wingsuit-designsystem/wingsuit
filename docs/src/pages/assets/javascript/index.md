---
id: 'javascript'
title: 'Javascript'
---
## Custom javascript
Drupal javascript behaviors are working out of the box in Wingsuit. 
Place your custom javascript code in a `component.behavior.js` file inside your component.

Wingsuit will load the file automatically and call the `attach` function after component initialization. 

<b>Sample behavior file:</b>
```js

Drupal.behaviors.button = {
  attach(context, settings) {
    // Do some stuff
  },
};

```
Wingsuit supports ES6 and compiles (babel) every behavior file to a seperate compiled behavior file.
You can find the compiled files in `dist/behaviors/*.behavior.js`.

## Vendor libraries 
To embed a 3 party library: 

1. Add the 3 party library to your package.json. Run `yarn add library`.
1. Create a javascript file under `source/default/vendorjs/lib.vendor.js` and `@import` the referenced library.
    <b>Sample</b> 
    ```js
    import 'regenerator-runtime/runtime';
    import 'alpinejs';
    ```

Wingsuit compiles every vendor file to a seperate compiled vendor file so you can easily embed it in drupal. 
You can find your vendor file under `dist/app-[type]/vendors/[your-library].js`. 

Checkout the [webpack asset preset](https://github.com/wingsuit-designsystem/wingsuit/blob/master/packages/core/src/server/presets/assets.ts) for more details. 
