---
id: 'javascript'
title: 'Javascript'
---

Place your javascript code in a `component.behavior.js` file inside your component and `@import` the javascript file in your `index.js`.

Wingsuit will compile and babel this behavior file to `dist/behaviors/component.behavior.js`.

<b>Sample behavior file:</b>
```js

Drupal.behaviors.button = {
  attach(context, settings) {
    // Do some stuff
  },
};

```

## Vendor libraries 
For each vendor library create a javascript file under `source/default/vendorjs/lib.vendor.js` and `@import` the referenced library.

<b>Sample `alpine.vendor.js` vendor file:</b>
```js
import 'regenerator-runtime/runtime';
import 'alpinejs';
```

Checkout the [webpack asset preset](https://github.com/wingsuit-designsystem/wingsuit/blob/master/packages/core/src/server/presets/assets.ts) for more details. 