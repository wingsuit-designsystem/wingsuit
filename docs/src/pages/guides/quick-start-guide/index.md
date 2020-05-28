---
id: 'quick-start-guide'
title: 'Quick Start Guide'
---

Get started using the automated command line tool. This command creates an Wingsuit project including a set of UI Pattern components and simple Twig components. 
The demo page uses the atomic design principle to structure the patterns.

```sh
npx @wingsuit-designsystem/cli init
```

Storybook opens and you can browse through the wingsuit demo page.

[SCREENSHOT]

## Source code
A good starting point is to checkout the design system components.
The design system components located at `source/patterns/default`. Additional storybook presentation templates located at  `apps/storybook/patterns`.

A typical component includes a `pattern.wingsuit.yml`, a `twig template`. Optional a `css file` and/or a `behavior javascript` file. 
## Create a new component
To create a new component run:

`yarn ws generate-component`