---
id: 'twig'
title: 'Twig only'
---

A Twig only component works without any wingsuit YAML file. The patterns are useful if you don't need or don't want a UI Pattern integration.

A typical use case for Twig only components are menu or header components. 

The data for these components can be provided as variables or defined globally inside YAML files in `apps/storybook/data`. So typically 

<b>A twig only component contains:</b>
* index.js
* pattern.stories.jsx
* pattern.twig
* css file (optional)
* javascript file. (optional)

Wingsuit provides the react component `RenderTwig` to render twig templates:

```js
import { RenderTwig } from '@wingsuit-designsystem/storybook';
import React from 'react';
import 'index';

export default { title: '01-folder/Name' };

const twigTemplate = require('./twigfile.twig');

export const Variant = () => <RenderTwig data={twigTemplate}></RenderTwig>;
```

You can assign variables as properties to the twig component:

```js
export const Variant2 = () => <RenderTwig data={twigTemplate} variable1="value1"></RenderTwig>;
```
