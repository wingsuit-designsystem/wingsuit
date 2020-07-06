---
id: 'wingsuit'
title: 'Wingsuit (UI Patterns)'
---
The wingsuit pattern is defined inside a `pattern.wingsuit.yml`. 

<b>A Wingsuit component contains:</b>
* index.js
* pattern.stories.jsx
* pattern.wingsuit.yml
* css file (optional)
* javascript file. (optional)

Expose the reference to the `wingsuit.yml` file inside the `pattern.stories.jsx` file.

```js
const patternDefinition = require('./pattern.wingsuit.yml');

export const wingsuit = {
  patternDefinition,
};

```
### The pattern.wingsuit.yml
The `pattern.wingsuit.yml` is a extended version of the [UI Patterns yaml](https://ui-patterns.readthedocs.io/en/8.x-1.x/content/patterns-definition.html) with additions of [UI Patterns Settings](https://www.drupal.org/project/ui_patterns_settings)

A typical pattern definition file looks like this:
 
```yaml
card:
  use: "@molecules/card/card.twig"
  label: Card
  description: Amazing Cards
  fields:
    headline:
      type: text
      label: Headline
      preview:
        faker: lorem.word
    image:
      type: pattern
      preview:
        id: image
        variant: primary
  variants:
    default:
      label: Default
    horizontal:
      label: Horizontal
  settings:
    headline_color:
      type: select
      label: Headline color
      required: false
      options:
        blue: Blue
        black: Black
```

* Each `variant` is a storybook story. 
* Each `field` is editable with knobs and passed to the Twig template.
* Each `Setting` is editable with knobs and passed to the Twig template.


<b>Let's look at the extensions:</b>

### faker

The `faker` key generates automatic preview data with [faker.js](https://github.com/marak/Faker.js/).
The value can be a string or a subobject. 
* The string is passed to Faker.fake in '{{ }}' brakets;
* To pass a complete Faker sentences use:
```yaml
   preview:
      faker:
        token: "{{ name.lastName }} {{ name.firstName }}
```

### field extensions: 
#### type pattern
With field type `pattern` you can render patterns inside the pattern:
```yaml
  fields:  
    image:
      type: pattern
      preview:
        id: image
        variant: primary
        settings:
          style: medium
        fields:
          field: value
```  
* `id` The id of the pattern.
* `variant` The variant of the pattern.
* `fields` Overwrites fields preview values of the pattern.
* `settings` Overwrites setting preview values of the pattern.

#### type object
```yaml
  fields:  
    items:
      type: object
      preview:
        - title: Datenschutz
          link: "#"
          in_active_trail: true
        - title: Impressum
          link: "#"
```  
With field type `object` you can pass any objects to the twig template. This is useful for the menu, for example. You can edit the JSON string with knobs.

### Visibility
@TODO: Write an explanation
```yaml
visibility: storybook | drupal | none
```
