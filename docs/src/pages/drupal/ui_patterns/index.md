---
id: 'ui_patterns'
title: 'UI Patterns'
---

The easiest and most straight forward drupal integration is to use [UI Patterns](https://www.drupal.org/project/ui_patterns).

We suggest to use
```
composer require drupal/components:~2.0 
composer require drupal/ui_patterns
composer require drupal/ui_patterns_settings 
composer require drupal/wingsuit_companion 
drush en components ui_patterns ui_patterns_layout ui_patterns_settings wingsuit_companion 
```

If you plan to use the layout builder add: 

```
composer require drupal/ui_patterns_layout_builder
drush en layout_builder ui_patterns_layout_builder
```

Ensure that Wingsuit is under `themes/custom`. 

Now activate the Wingsuit theme.

[SCREENSHOT]