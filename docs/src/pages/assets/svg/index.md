---
id: 'svg'
title: 'Svgs'
---
### SVG images
If you need SVG files as images instead of icons, place your images under an `images` folder.
To render the SVG icon use the ws-assets stream wrapper.

```twig
<img src="{{ file_create_url('ws-assets://images/icon.svg')">
```

## SVG Icons
Wingsuit generates an SVG sprite map for every SVG located under an `icons` folder. 

To render the icons include the `svg atom` in your twig template. 

```twig
{% include "@atoms/svg/svg.wig" with {"variant": 'icon', icon: "icon" }
```