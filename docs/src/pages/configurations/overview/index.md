---
id: 'overview'
title: 'Configuration overview'
---

For CLI options see: [here](../cli-options).

> migration guide: This page documents the method to configure storybook introduced recently in 5.3.0, consult the [migration guide](https://github.com/storybookjs/storybook/blob/next/MIGRATION.md) if you want to migrate to this format of configuring storybook.

## Main configuration

Storybook has a few files it uses for configuration, and they are grouped together into a directory (default: `.storybook`).

The most important file is the `main.js` file. This is where general config is declared.

Here's a minimal example of that file:

```js
module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: [
    '@storybook/addon-essentials',
  ],
};
```

`stories` is a list of [glob](https://www.npmjs.com/package/glob) patterns that tells where your stories are located, relative to the configuration file.

The `addons` field can refer to traditional [addons](../../addons/introduction), but it can also include [presets](/docs/presets/introduction/), which are able to extend the config further.

### `main.js` is a  Preset
The `main.js` file is actually a preset! So if you know how to configure storybook, then you know how to write a preset, and vice-versa!
So the `main.js` API is equal to [that of presets](../../presets/writing-presets/#presets-api).


## Manager & preview

Storybook works by being split into 2 applications ("manager" and "preview"), which communicate with each other over a postMessage channel.

The preview application is essentially just your stories with a framework-agnostic 'router'. It renders whichever story the  manager application tells it to render.

The manager application renders the UI of [addons](../../addons/introduction), the navigator and [toolbar](../../basics/toolbar-guide/).

There are two extra config files, if you need to configure the runtime of Manager or Preview.

In `preview.js` you can add global [decorators](../../basics/writing-stories/#decorators) and [parameters](../../basics/writing-stories/#parameters):

```js
// preview.js
import { addDecorator } from '@storybook/svelte';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);
```

In `manager.js` you can add [UI options](../options-parameter/#global-options).

```js
// manager.js
import { themes } from '@storybook/theming/create';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: themes.dark,
});
```

## webpack

For how to customize webpack, [view the customize webpack section](../custom-webpack-config/)
