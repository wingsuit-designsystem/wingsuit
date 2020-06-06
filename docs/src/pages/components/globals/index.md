---
id: 'globals'
title: 'Global variables'
---
Global variables are assigned to every twig template. They are useful to define data you need inside your patterns. A typical usecase for global variables are images styles or the site title.  

## Custom global variables
To define global variables place a yaml file to `apps/storybook/config`. Ensure that every variable has a unique name. Every yaml file under this folder is automaticly

## Frontend metadata as global variables
To expose metadata from frontend frameworks to storybook webpack plugins can generate json files and store these files under `apps/storybook/config/silo`. Wingsuit will automaticly read this files and handle the content as global variables. 
Wingsuit provides a plugin for tailwind metadata.

@TODO provide own plugins. 