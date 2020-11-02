---
id: 'introduction'
title: 'Introduction'
---
Wingsuit is a design system for twig based UI components. You can develop your components independently in [Storybook](https://storybook.js.org/). After finalizing your component, you can use it in other apps like drupal. 

 
## Features:
* ### Define your component once
The `wingsuit.yml`, an extended variant of the [ui_patterns.yml](https://ui-patterns.readthedocs.io/en/8.x-1.x/content/patterns-definition.html), is the heart of each component.
Wingsuit reads the YAML to generate components, stories, fields and settings in Storybook. The same file is used by UI Patterns.  
* ### Editable settings and fields
Fields and settings are editable with [knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs). Knobs makes it easy to see your component in every state.
* ### Child components
Wingsuit supports child components out of the box. And child child components and so on.
* ### Presentation templates.
Wingsuit offers twig helper function to build complete pages for preview.
* ### Demonstration helper
Wingsuit offers a lot of additional helpers like [placeholder images with image styles](../../assets/images#placeholder-images), [faker](../../components/wingsuit#faker), [pattern lists]((../../components/wingsuit#faker)) to make it easy to generate demo patterns.
* ## Frontend frameworks
Wingsuit ships with [Tailwind CSS](https://tailwindcss.com/) and [Alpine.js](https://github.com/alpinejs/alpine).  
You can [customize](../../configurations/custom-webpack-config) the webpack configuration and integrate your favorite frontend frameworks. 
But checkout TailwindCSS! It is really great for large Drupal projects. 
* ### Storybook documentation
Wingsuit generates a documentation page directly from the winguit.yml. For more detailed documentation use Storybook MDX. 
* ### Drupal integration
With the [wingsuit_companion](https://www.drupal.org/project/wingsuit_companion) module, patterns can be used with zero configuration in drupal. 
* ### Stay in sync
One big challenge for design systems is to stay in sync between documentation and implementation.
Wingsuit solves this problem with a common component configuration `wingsuit.yml` and webpack plugins which provides framework data as variables.
So there is no need to update the colors documentation if you change your colors in TailwindCSS.
* ### Well predefined components
Wingsuit uses [tailblocks](https://mertjf.github.io/tailblocks/) for predefined components. So it is very easy to adjust them and if you don't need them simple delete them.
* ### Incredible Fast and compatible with PHP Twig
It takes around `1 second` from save to see your changes in Storybook. Wingsuit uses client side [twing](https://github.com/NightlyCommit/twing) and Postcss.
Twing is nearly 100% compatible with PHP Twig. We had tested it with really large Drupal projects. 

## Screenshots:
#### Edit settings with Knobs:
<img src="images/knobs.png">.

#### Automatic generated Docs: 
<img src="images/docs.png">
