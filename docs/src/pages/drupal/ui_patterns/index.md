---
id: 'ui_patterns'
title: 'Wingsuit Kickstarter (with UI Patterns and Layout Builder)'
---

[Wingsuit Kickstarter](https://github.com/wingsuit-designsystem/wingsuit_kickstarter) is the fastest way to start with Wingsuit.  

The Kickstarter uses [Acquia Lightning](https://github.com/acquia/lightning) as distribution and [Acquia Blt](https://github.com/acquia/blt) for automation. 

* #### Drupal blocks with a pattern. 
<img src="/images/add-blocks.png">

* #### Sections are also patterns
<img src="/images/add-sections.png">

* #### Block Manage display with layout builder. Configure the pattern and assign fields.
<img src="/images/configure-patterns.png">


## Prerequisites

- [Node `^12`](https://nodejs.org)
- [YARN `^1.22`](https://classic.yarnpkg.com/)
- [PHP `^7.0.0`](https://php.net)

## Installation
```sh dark
composer create-project wingsuit-designsystem/wingsuit-kickstarter wingsuit-kickstarter --stability dev --no-interaction
```
```sh dark
cd wingsuit-kickstarter && ./vendor/bin/blt setup
```

### First steps
Open the page and login with:

Username: admin<br>
Password: admin

After login go to the front page and open the Layout Builder to add more blocks. Each block is mapped to a pattern (mostly molecules). Each section is a pattern. 
Click on `configure` in a section to see all settings you will find in storybook. 

## Development
The Kickstarter installs Wingsuit under `docroot/themes/custom` and generates all templates with `yarn build:drupal` to
`docroot/themes/custom/wingsuit/dist/app-drupal` (check `blt/blt.yml` to see build process). 

You can run webpack in watch mode with `yarn dev:drupal` (if your changes don't appear you probably forget to start `yarn dev:drupal`).

The theme takes css js and patterns from the dist folder and not from `source` folder.

You can configure the path of your dist folder. See [Configuration details](../../configurations/details/index.md) to configure the webpack part. Open "Wingsuit settings" under Configuration in Drupal and adjust the path to the dist folder.

### Storybook
To develop your patterns start storybook `yarn dev:storybook`.

## Module overview:
Following modules are used to map Wingsuit patterns to Drupal:

* [components](https://www.drupal.org/project/components): Registers folders of components defined by your theme or module as Twig namespaces.
* [ui\_patterns](https://www.drupal.org/project/ui_patterns): Does the mapping magic.
* [ui\_patterns\_layout\_builder](https://www.drupal.org/project/ui_patterns_layout_builder): To use UI Patterns with Layout Builder.
* [ui\_patterns_settings](https://www.drupal.org/project/ui_patterns_settings): Make patterns configurable.
* [wingsuit_companion](https://www.drupal.org/project/wingsuit_companion). Locate templates inside the wingsuit `dist` folder.


<div class="next-title">FEEDBACK</div>
<div class="next">
    <div class="next__content"><b>Open an issue</b><br> if you miss something or something is not working. </div>
    <a class="next__button mb-2 btn btn-lg bg-green-500 mr-2 font-weight-bold" target="_blank" href="https://github.com/wingsuit-designsystem/wingsuit/issues">Issue</a>
</div>
<div class="next">
    <div class="next__content"><b>Open an Pull Request</b><br> I am happy about new ideas! </div>
    <a class="next__button mb-2 btn btn-lg bg-green-500 mr-2 font-weight-bold" target="_blank" href="https://github.com/wingsuit-designsystem/wingsuit/pulls">Pull Request</a>
</div>
<div class="next">
    <div class="next__content"><b>Join on Slack</b><br> </div>
    <a class="next__button mb-2 btn btn-lg bg-green-500 mr-2 font-weight-bold" target="_blank" href="https://drupaltwig.slack.com/archives/C01C82BH864">Slack</a>
</div>
<div class="next">
    <div class="next__content"><b>Github star</b><br> If you like it let me know. It </div>
    <a class="next__button mb-2 btn btn-lg bg-green-500 mr-2 font-weight-bold" target="_blank" href="https://github.com/wingsuit-designsystem/wingsuit/">Motivates me!</a>
</div>
  
