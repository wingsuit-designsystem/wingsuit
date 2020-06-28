---
id: 'introduction'
title: 'Introduction'
---


Wingsuit is a design system for twig based UI components. The components are developed independently in [Storybook](https://storybook.js.org/) and can be used by other "apps", like Drupal. 

A Wingsuit component is defined by an wingsuit.yml, which is an extended variant of the [ui_patterns.yml](https://ui-patterns.readthedocs.io/en/8.x-1.x/content/patterns-definition.html). 


<b>Wingsuit uses the following configuration files to:</b>

* <b>Generate Storybook stories</b><br>
Each variant is a Storybook story. Fields and settings are editable with [knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs).
<img src="images/knobs.png">

* <b>Automatic Storybook documentation</b><br>
A nice documentation page is created directly from the wingsuit.yml. 
<img src="images/docs.png">

* <b>Drupal integration</b><br>
With the [wingsuit_companion](https://www.drupal.org/project/wingsuit_companion) module, patterns can be used with zero configuration in drupal. 
# SCREENSHOT


* <b>Stay in sync</b><br>
One big challenge for design systems is to stay in sync between the apps.
Wingsuit solves this problem with a common component configuration - the <b>wingsuit.yml</b>.

* <b>Frontend frameworks</b><br>
Wingsuit ships with [Tailwind CSS](https://tailwindcss.com/) and [Alpine.js](https://github.com/alpinejs/alpine). 
Both can easily be replaced with other frameworks like [Bootstrap 4](https://getbootstrap.com) or [Foundation 6](https://get.foundation/sites/docs/).
