<?php

/**
 * @file
 * Functions to support theming miscellaneous things the Wingsuit theme.
 */

/**
 * Implements hook_preprocess_user().
 */
function wingsuit_preprocess_user(&$variables) {
  unset($variables['content']['member_for']);
}
