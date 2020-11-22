<?php

/**
 * @file
 * Functions to support theming navigation in the Wingsuit theme.
 */

/**
 * Implements hook_preprocess_breadcrumb().
 */
function wingsuit_preprocess_breadcrumb(&$variables) {
  if (($node = \Drupal::routeMatch()->getParameter('node')) && $variables['breadcrumb']) {
    $variables['breadcrumb'][] = [
      'text' => $node->getTitle(),
    ];
  }
}
