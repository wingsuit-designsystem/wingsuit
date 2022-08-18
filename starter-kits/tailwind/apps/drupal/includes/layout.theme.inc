<?php

/**
 * @file
 * Functions to support theming page layout in the Wingsuit theme.
 */

/**
 * Implements hook_preprocess().
 */
function wingsuit_preprocess(&$variables) {
  if (wingsuit_is_layout_builder()) {
    $variables['is_layout_builder'] = TRUE;
  }
  else {
    $variables['is_layout_builder'] = FALSE;
  }
}

