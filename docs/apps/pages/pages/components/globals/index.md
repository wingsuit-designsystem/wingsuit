---
id: 'globals'
title: 'Global variables'
---
If you need variables with global scope inside your twig template you can place a YAML file to `apps/storybook/config`.

You can access every variable direct in your twig template.


## Frontend metadata as global variables
To expose metadata from front-end frameworks to storybook webpack plugins you can generate JSON files and store them under `apps/storybook/config/silo`. Wingsuit will automatically read these files and handle the content as global variables. 
Wingsuit provides a plugin for tailwind metadata.

@TODO provides its own plugins. 
