---
id: 'introduction'
title: 'Introduction'
---
Wingsuit is an open source tool for developing UI components in Twig. You can develop your components independently in [Storybook](https://storybook.js.org/). After finalizing your component, you can use it in other apps like Drupal. 

 
## Features
* ### Define your component once
The `wingsuit.yml`, an extended variant of the [ui_patterns.yml](https://ui-patterns.readthedocs.io/en/8.x-1.x/content/patterns-definition.html), is the heart of each component.
Wingsuit reads the YAML to generate components, stories, fields and settings in Storybook. The same file is used by UI Patterns.  
* ### Use UI Patterns or not
With the  [wingsuit_companion](https://www.drupal.org/project/wingsuit_companion) module, your `wingsuit.yml` can be used with zero configuration in Drupal. Of course, you can use the wingsuit.yml only in Storybook and use presenter template in your CMS. Wingsuit works also with plain Twig files.
* ### Editable settings and fields
Fields and settings are editable with [knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs). Knobs makes it easy to see your component in every state.
* ### Subcomponents
Wingsuit supports subcomponents out of the box. Reference your subcomponent in your wingsuit.yml.
* ### Presentation templates
Wingsuit offers twig helper function to build complete pages for preview.
* ### Demonstration helper
Wingsuit offers a lot of additional helpers like [placeholder images with image styles](../../assets/images#placeholder-images), [faker](../../components/wingsuit#faker), [pattern lists](../../components/wingsuit#pattern-list) to make it easy to generate demo patterns.
* ### Starter kits for:
  * [Tailwind CSS](https://tailwindcss.com/) with [Alpine.js](https://github.com/alpinejs/alpine).
  * [Bootstrap](https://getbootstrap.com/)  
  You can [customize](../../configurations/custom-webpack-config) the webpack configuration and integrate your favorite frontend frameworks. 
* ### Storybook documentation
Wingsuit generates a documentation page directly from the wingsuit.yml. For more detailed documentation use Storybook MDX. 
* ### Drupal integration
With the [wingsuit_companion](https://www.drupal.org/project/wingsuit_companion) module, patterns can be used with zero configuration in Drupal. 
* ### Stay in sync
One big challenge for design systems is to stay in sync between documentation and implementation.
Wingsuit solves this problem with a common component configuration `wingsuit.yml` and webpack plugins which provides framework data as variables.
So there is no need to update the colors documentation if you change your colors in TailwindCSS.
* ### Well predefined components
Wingsuit uses [tailblocks](https://mertjf.github.io/tailblocks/) for predefined components. So it is very easy to adjust them and if you don't need them simple delete them.
* ### Incredible fast and compatible with PHP Twig
It takes around `1 second` from save to see your changes in Storybook. Wingsuit uses client side [twing](https://github.com/NightlyCommit/twing) and Postcss.
Twing is nearly 100% compatible with PHP Twig. We had tested it with really large Drupal projects. 


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
    <div class="next__content"><b>Github star</b><br>If you like it let me know. It </div>
    <a class="next__button mb-2 btn btn-lg bg-green-500 mr-2 font-weight-bold" target="_blank" href="https://github.com/wingsuit-designsystem/wingsuit/">Motivates me!</a>
</div>



<div class="next-title">NEXT</div>
<div class="next">
    <div class="next__content"><b>Quickstart guide</b></div>
    <a class="next__button mb-2 btn btn-lg bg-green-500 mr-2 font-weight-bold" href="../../guides/quick-start-guide">Continue</a>
</div>
<div class="next">
    <div class="next__content"><b>Drupal Kickstarter</b><br>with UI Patterns and Layout Builder</div>
    <a class="next__button mb-2 btn btn-lg bg-green-500 mr-2 font-weight-bold" href="../../drupal/ui_patterns">Continue</a>
</div>


## Screenshots
### Storybook
<img src="images/knobs.png">
<div class="caption">Edit settings with Knobs</div>

<img src="images/docs.png">
<div class="caption">Automatic generated Docs</div>

### Drupal

<img src="/images/configure-patterns.png">
<div class="caption">Map fields and configure your pattern in Manage Display with Layout builder.</div>

<img src="images/add-blocks.png">
<div class="caption">Use the mapped pattern as inline block in Layout tab</div>

