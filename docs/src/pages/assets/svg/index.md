---
id: 'svg'
title: 'SVGs'
---
### SVG images
If you need SVG files as images instead of icons, put your images in an `images` folder.
To render the SVG icon, use the ws-assets stream wrapper:

```twig
<img src="{{ file_create_url('ws-assets://images/icon.svg')">
```

## SVG Icons
Wingsuit generates an SVG sprite map for every SVG located in an `icons` folder. 

To render the icons include the `svg atom` in your Twig template: 

```twig
{% include "@atoms/svg/svg.wig" with {"variant": 'icon', icon: "icon" }
```
