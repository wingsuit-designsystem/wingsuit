---
id: 'quick-start-guide'
title: 'Quick Start Guide'
---

Get started using the automated command line tool. This command creates a Wingsuit demo project. 
The demo page uses the atomic design principle to structure the patterns.

```
npx @wingsuit-designsystem/cli init
```

After installation the tool opens Storybook and you can browse through the wingsuit demo page.

# SCREENSHOT

## Get an overview
A good starting point is to checkout the design system components.
The design system components located at `source/patterns/default`. Additional storybook presentation templates located at  `apps/storybook/patterns`.

A typical component includes a `pattern.wingsuit.yml`, a `twig template`. Optional a `css file` and/or a `behavior javascript` file. 

### Create a new component
Another good starting point is to create a new component:

`yarn ws generate-component`

The wizzard will guide you through all possible pattern types including documentation.