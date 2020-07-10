---
id: 'overview'
title: 'Component-Based Theming in Drupal 8'
---

Drupal theming without a component based solution can be very frustrating, prone to errors and it is very hard to maintain existing layout..
It is very likley that you need too theme more than once. Once you need your button inside the a field,  
next time you need the same button inside your node template. The solution most developer took is to copy the template and adjust them to their needs.
Next time you an update on your button you can't be sure to fix it on every location. 

This get even more worse if you use a modern CSS framework like tailwind where everything is configured through classes directly on the element.
Using tailwind without a component based architecture can you lead to the hell.

## Presenter template VS UI Patterns.
There are currently two solutions to solve the problem: The `presenter template` and the module UI Patterns.
The presenter template is a drupal theme template which `includes` the component template and provides all need variables.
If you need to theme your link field with the button component you create a field template `field--link.html.twig` and include the button component like this:


       