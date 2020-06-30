---
id: 'presentation'
title: 'Presentation'
---
Presentation templates located typically at `apps/storybook/patterns/type/`. 
They are useful to present a combination of components. A very typical use case is the pages in atomic design.

<b>A Presentation component contains:</b>
* pattern.stories.jsx
* pattern.twig

Inside the stories, you load the twig file the same way you do it at the twig only component.
```js
import { RenderTwig } from '@wingsuit-designsystem/storybook';
import React from 'react';
import 'index';

export default { title: '05-folder/Name' };

const twigTemplate = require('./twigfile.twig');

export const Variant = () => <RenderTwig data={twigTemplate}></RenderTwig>;
```

### Additional twig functions
Inside the twig template you need two additional twig functions:

* `pattern_preview(patternId, variantId, variables)` to render an existing pattern including all preview data from the component. You can overwrite preview data with variables.
* `pattern(patternId, variantId, variables)` to render a pattern without any preview data. You need to provide all variables as the third argument.


