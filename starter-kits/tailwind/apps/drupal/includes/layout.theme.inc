<?php

/**
 * @file
 * Functions to support theming page layout in the Wingsuit theme.
 */

/**
 * Implements hook_preprocess_HOOK().
 */
function wingsuit_preprocess_page(&$variables) {
  $moduleHandler = \Drupal::service('module_handler');
  if ($moduleHandler->moduleExists('components')) {
    $variables['has_components_module'] = TRUE;
  }

  if (wingsuit_is_layout_builder()) {
    $variables['is_layout_builder'] = TRUE;
  }
  else {
    $variables['is_layout_builder'] = FALSE;
  }

  $variables['header_has_spacer'] = TRUE;

  $entity = $variables['node'] ?? NULL;
  $route = \Drupal::routeMatch();
  $route_name = $route->getRouteName();

  // Get 3rd. argument from url. This is only needed for articles
  // because article urls are filtered by contextual arguments.
  $arg_0 = $route->getParameter('arg_0');

  // View Mode is set by view_mode_page module.
  // As default view_mode is null.
  $view_mode = \Drupal::request()->attributes->get('view_mode');
  if ($route->getRouteName() === 'entity.node.preview') {
    $entity = $route->getParameter('node_preview');
  }
  if ($entity === NULL) {
    $entity = \Drupal::routeMatch()->getParameter('taxonomy_term');
  }

  if ($entity && ($route_name === 'entity.node.canonical' || $route_name === 'entity.node.preview')
    && $view_mode === NULL
  ) {
    $variables['full_top'] = \Drupal::service('twig_tweak.entity_view_builder')
      ->build($entity, 'full_top');
    $variables['full_bottom'] = \Drupal::service(
      'twig_tweak.entity_view_builder'
    )
      ->build($entity, 'full_bottom');
  }
}
