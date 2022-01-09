<?php

/**
 * @file
 * Functions to support theming layout builder in Wingsuit theme.
 */

use Drupal\node\NodeInterface;

/**
 * Checks if current route is a layout builder route.
 *
 * @return bool
 *   True if it is a layout builder route.
 */
function wingsuit_is_layout_builder() {
  $route_name = \Drupal::routeMatch()->getRouteName();
  if (preg_match('/^(layout_builder\.([^.]+\.)?)/', $route_name)) {
    return TRUE;
  }
  else {
    return FALSE;
  }
}

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 */
function wingsuit_theme_suggestions_page_alter(array &$suggestions, array $variables) {
  $node = \Drupal::routeMatch()->getParameter('node');
  if ($node !== NULL && $node instanceof NodeInterface) {
    $suggestions[] = 'page__' . $node->getEntityTypeId() . '__' . $node->bundle();
  }
}
