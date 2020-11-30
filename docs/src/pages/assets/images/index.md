---
id: 'images'
title: 'Images & Icons'
---

The `apps/[app]/assets.js` includes all images. Wingsuit will compile these files to `[dist]/assets/images`.

### Embedding images in twig:
You can use the `ws-assets` stream wrapper to get a path to the asset folder. Ensure you have the [wingsuit_companion](https://www.drupal.org/project/wingsuit_companion) module enabled. 

<b>Sample twig file with an image:</b>
```twig
<img src="{{ file_create_url('ws-assets://images/dummy.png')">
```

or use the image component:
```twig
{% include "@atoms/image/image.wig" with {"placeholder": false, path: "images/dummy.png" }
```
### Image in CSS:
To use images inside your CSS file, use the relative path to the image. Webpack will replace the right output path.  

### Placeholder images:
Wingsuit supports image styles and responsive image styles for placeholder images in storybook. 

You can configure your image styles in your `placeholder.wingsuit.yml`

Sample `placeholder.wingsuit.yml`
```yaml
imageConfig:
  styles:
    1x1_xxs:
      label: Small 1x1
      width: 80
      height: 80
    ......
  stylesResponsive:
    card-hero:
      style: 16x9_xs_sc
      breakpoints:
        xxs: 8x7_xxs_sc
        xs: 8x7_xs_sc
    ...... 
  breakpoints:
   xxs:
     mediaQuery: '(min-width: 0px) and (max-width: 459px)'
   xs:
     mediaQuery: '(min-width: 460px) and (max-width: 639px)'

```

<b>Under configuration you find three sections:</b>
* Basic image styles
* Responsive image styles
* Breakpoints

To render an image style include the `image atom`. 
```twig
{% include "@atoms/image/image.wig" with {"placeholder": true, style: "1x1_xxs" }
```

Or use the `pattern_preview` twig function:
```twig
    {{ pattern_preview('image', 'primary', {"placeholder": true, "style": "1x1_xxs"}) }}
```
Image style works for simple image styles and responsive image styles.
