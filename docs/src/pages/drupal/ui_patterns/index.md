---
id: 'ui_patterns'
title: 'Wingsuit Kickstarter (with UI Patterns and Layout Builder)'
---

[Wingsuit Kickstarter](https://github.com/wingsuit-designsystem/wingsuit_kickstarter) is the fastest way to get up with Wingsuit.  

The kickstarter uses [Acquia Lightning](https://github.com/acquia/lightning) as distribution and [Acquia Blt](https://github.com/acquia/blt) for automation. 

## Prerequisites

- [Node `^8`, `^10`](https://nodejs.org)
- [YARN `^1.22`](https://classic.yarnpkg.com/)
- [PHP `^7.0.0`](https://php.net)

## Installation
```sh
composer create-project wingsuit-designsystem/wingsuit-kickstarter wingsuit-kickstarter --stability dev --no-interaction
```
```
cd wingsuit-kickstarter && ./vendor/bin/blt setup
```
### First steps
Open the page and login with:

Username: admin<br>
Password: admin

After login go to the front page and open the layout builder to add more blocks. Each block is mapped to a pattern. (Mostly molecules). Each section is a pattern. 
Click on `configure` on a section to see all settings you can find in storybook. 

<img src="images/kickstarter.png">

## Development
The kickstarter installs Wingsuit under `docroot/themes/custom` and generates all templates with `yarn build:drupal` to
`docroot/themes/custom/wingsuit/dist/app-drupal`. (Check `blt/blt.yml` to see build process). 

You can run webpack in watch mode with `yarn dev:drupal`.
(If your changes don't appear you probably forget to start `yarn dev:drupal`)

The theme takes css js and patterns from the dist folder and not from `source` folder.

You can configure the path of your dist folder. See [Configuration details](../../configurations/details/index.md) to configure the webpack part. Open "Wingsuit settings" under Configuration in drupal and adjust the path to the dist folder.

### Storybook
To develop your patterns start storybook `yarn dev:storybook`.

## Module overview:
Following modules are used to map Wingsuit patterns to Drupal:

* [components](https://www.drupal.org/project/components): Registers folders of components defined by your theme or module as Twig namespaces.
* [ui\_patterns](https://www.drupal.org/project/ui_patterns): Does the mapping magic.
* [ui\_patterns\_layout\_builder](https://www.drupal.org/project/ui_patterns_layout_builder): To use UI Patterns with Layout Builder
* [ui\_patterns_settings](https://www.drupal.org/project/ui_patterns_layout_settings): Make patterns configurable.
* [wingsuit_companion](https://www.drupal.org/project/wingsuit_companion). Locate templates inside the wingsuit `dist` folder.



  