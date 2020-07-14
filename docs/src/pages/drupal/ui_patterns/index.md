---
id: 'ui_patterns'
title: 'How to use Wingsuit with UI Patterns and Layout Builder'
---

 
This "How To" explains how to use Wingsuit with UI Patterns and Drupal Layout Builder. 

## Step 1:
Add following modules to your composer.json:

* [components](https://www.drupal.org/project/components)
* [ui\_patterns](https://www.drupal.org/project/ui_patterns)
* [ui\_patterns\_layout\_builder](https://www.drupal.org/project/ui_patterns_layout_builder)
* [ui\_patterns_settings](https://www.drupal.org/project/ui_patterns_layout_settings)
* [wingsuit_companion](https://www.drupal.org/project/wingsuit_companion)

After that enable following modules:
* components
* ui\_patterns
* ui\_patterns\_layout
* ui\_patterns\_layout\_builder
* ui\_patterns\_settings
* wingsuit_companion

```
drush en components ui_patterns ui_patterns_layout ui_patterns_layout_builder ui_patterns_settings wingsuit_companion 
```

## Step 2:
Install Wingsuit under `themes/custom` and enable the wingsuit theme and set it as default.

```
npx @wingsuit-designsystem/cli init
drush en wingsuit
```



[SCREENSHOT]