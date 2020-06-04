---
id: 'introduction'
title: 'Introduction'
---


Wingsuit is a designsystem for twig based UI Components. The components are developed independently in storybook and can be used by other "apps" like drupal. 

A wingsuit component is defined by an wingsuit.yml.
The wingsuit.yml is an extended variant of the [ui_patterns.yml](https://ui-patterns.readthedocs.io/en/8.x-1.x/content/patterns-definition.html). 


<b>Wingsuit uses this configuration file to:</b>

<b>Generate Storybook stories</b><br>
Each variant is a storybook story. Fields and Settings are editable with knobs.
# SCREENSHOT

<b>Automatic Storybook documentation</b><br>
A nice documentation page is created directly from the wingsuit.yml. 
# SCREENSHOT

<b>Drupal integration</b><br>
With the [wingsuit_companion](https://www.drupal.org/project/wingsuit_companion) patterns can be used with zero configuration in drupal. 
# SCREENSHOT


### <b>Stay in sync</b>
One big challenge for design system are to stay in sync between the apps.
Wingsuit solves the problem with a common component configuration. The <b>wingsuit.yml.</b>

### <b>Frontend frameworks</b>
Wingsuit ships with [tailwind](https://tailwindcss.com/) and [alpinejs](https://github.com/alpinejs/alpine). 
The frameworks can easily replaced with other frameworks like [bootstrap 4](https://getbootstrap.com) or [foundation 6](https://get.foundation/sites/docs/).
