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
  } else {
    $variables['is_layout_builder'] = FALSE;
  }

  $variables['header_has_spacer'] = TRUE;
}
