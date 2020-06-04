---
id: 'twig'
title: 'Twig only'
---


<b>A twig only component contains:</b>
* index.js
* pattern.stories.jsx
* css file (optional)
* javascript file. (optional)

Wingsuit provides a react component `RenderTwig` to render twig templates.

```js
import { RenderTwig } from '@wingsuit-designsystem/storybook';
import React from 'react';
import 'index';

export default { title: '01-folder/Name' };

const twigTemplate = require('./twigfile.twig');

export const VariantName = () => <RenderTwig data={twigTemplate}></RenderTwig>;
```