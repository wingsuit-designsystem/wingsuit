<?php

/**
 * @file
 * Functions to support theming page layout in the Wingsuit theme.
 */

/**
 * Implements hook_preprocess_HOOK().
 */
function wingsuit_preprocess_page(&$variables) {
  if (wingsuit_is_layout_builder()) {
    $variables['is_layout_builder'] = TRUE;
  }
  else {
    $variables['is_layout_builder'] = FALSE;
  }

}
