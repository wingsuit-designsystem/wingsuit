<?php

/**
 * @file
 * Functions to support theming layout builder in Wingsuit theme.
 */


/**
 * Checks if current route is a layout builder route.
 *
 * @return bool
 *   True if it is a layout builder route.
 */
function wingsuit_is_layout_builder(){
  $route_name = \Drupal::routeMatch()->getRouteName();
  if (preg_match('/^(layout_builder\.([^.]+\.)?)/', $route_name)) {
    return TRUE;
  }
  else {
    return FALSE;
  }
}
