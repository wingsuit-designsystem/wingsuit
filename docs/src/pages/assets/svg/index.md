---
id: 'svg'
title: 'Svgs'
---

### Svg images
If you need svg files as images instead of icons, place your images under an `images` folder.
To render the svg icon use the ws-assets stream wrapper.

```twig
<img src="{{ file_create_url('ws-assets://images/icon.svg')">
```

## Svg Icons
Wingsuit generates a svg spritemap for every svg file which is located under an `icons` folder. 

To render the icons include the `svg atom` in your twig template. 

```twig
{% include "@atoms/svg/svg.wig" with {"variant": 'icon', icon: "icon" }
```
