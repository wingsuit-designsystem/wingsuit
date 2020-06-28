---
id: 'images'
title: 'Images & Icons'
---

All bitmap images like png,gif or jpg are imported automatically by the `assets.js`. Wingsuit will compile these files to `[dist]/assets/images`.

### Embedding image in twig:
You can use the `ws-assets` stream wrapper to get path to the asset folder. Ensure you have the [wingsuit_companion](https://www.drupal.org/project/wingsuit_companion) module enabled.

Sample twig file with an image:

```
<img src="{{ file_create_url('ws-assets://images/dummy.png')">
```
  
### Image in css:
To you use images inside your css file use the relative path to the image. Webpack will replace the right output path.  

