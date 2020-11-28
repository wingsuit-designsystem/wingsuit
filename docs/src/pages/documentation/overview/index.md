---
id: 'overview'
title: 'Get started'
---
Storybook supports powerful MDX documentation out of the box. 
MDX is a standard file format that combines Markdown with JSX. 
Wingsuit uses React components to render patterns and TWIG files which you use direct inside the MDX file. Additionally, Wingsuit offers components to make documentation more easy.    

And yes, storybook MDX is powerful, but in most cases you don't need it. Wingsuit uses the wingsuit.yml to generate an complete component documentation including fields, settings etc.

To replace the automatic documentation you need add an `pattern.mdx` file to your pattern and import this file into your story. 

```js
import './index';
import mdx from './pattern.mdx';

const patternDefinition = require('./pattern.wingsuit.yml');

export const wingsuit = {
  patternDefinition,
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: mdx,
    },
  },
};

```

## Storybook MDX documentation
In addition, you can write pure documentation pages in MDX and add them to Storybook alongside your stories.
Place a `*.stories.mdx` under your design system or under `apps/storybook/patterns`. 

## Disable documentation

```jsx
import './index';

const patternDefinition = require('./pattern.wingsuit.yml');

export const wingsuit = {
  patternDefinition,
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: null,
    },
  },
};
```
