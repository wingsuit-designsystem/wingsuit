---
id: 'overview'
title: 'Component-Based Theming in Drupal'
---

Drupal theming without a component based solution can be very frustrating, prone to errors and hard to maintain.

It is very likely that you need to theme the same component more than once. Once you need your button inside as a field, next time you need the same button inside your node template. The solution most developer took is to copy the template and adjust them to their needs.
You distribute your component markup across the project and changes to a component must be done on several places inside your project.  

This get even more worse if you use a modern CSS framework like tailwind where everything is configured through classes directly on the element.
Using tailwind without a component based architecture can you lead to the hell.

Thinking in components makes it much easier to structure your layout. [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) or others helps you to structure your layout and makes it easier for every developer to follow the same path.    

## Presenter template VS UI Patterns.
There are currently two solutions to solve the problem: The `presenter template` and the module UI Patterns.

### Presenter template
The presenter template is a drupal theme template which `includes` the component template and provides all need variables.
If you need to theme your link field with the button component you create a field template `field--field-link.html.twig` and include the button component like this:

```twig

{% 
  include "@atoms/button/button.twig" with {"text": item.content['#title'], "url": item.content['#url'].toString() }
%}
```


### UI Patterns
With UI Patterns you can get rid of the presenter templates in most of the cases. UI Pattern expose a component data model to drupal. The site builder can use the Administration UI to map drupal data fields to templates.
This works not only with entities. Sub modules and contrib modules help to integrate nearly everything. 

Some of these modules:
* UI Patterns Views (submodule): To map `Views` fields to patterns.
* UI Patterns Display Suit (submodule): To map fields and entities to patterns.
* UI Patterns Fieldgroup (submodule): Create a fieldgroup and apply a template to the group.
* [UI Patterns Layout Builder](https://www.drupal.org/project/ui_patterns_layout_builder): To use patterns with the layout builder.
* [UI Patterns Field Formatters](https://www.drupal.org/project/ui_patterns_field_formatters): To map a pattern to a field. Very useful if you use layout builder instead of display suit.
* [UI Patterns Entity Links](https://www.drupal.org/project/ui_patterns_entity_links): To render entity links with drupal. 

## How to integrate your pattern?
UI Pattern is the way to define a pattern, but how to map data to the pattern? 

Since Drupal 8.6 the Layout Builder is a stable. The Layout Builder has several advantages against older modules like Display Suit or Panels.

* It is Drupal Core
* You can add sections to each entity. Each section can have a pattern.
* The UI is much more intuitive than the old `Manage Display`
* Editors can use the same patterns as the site builder.
