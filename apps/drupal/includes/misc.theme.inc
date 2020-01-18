<?php

/**
 * @file
 * Functions to support theming miscellaneous things the Wingsuit theme.
 */

use Drupal\wingsuit\Tools\WingsuitTools;

/**
 * Implements hook_preprocess().
 */
function wingsuit_preprocess(&$variables) {
  // Set the paths.assets variable globally, so that drupal can
  // find webpack-compiled assets.
  $variables['paths']['assets'] = WingsuitTools::getAssetsPath();
}

/**
 * Implements hook_preprocess_user().
 */
function wingsuit_preprocess_user(&$variables) {
  unset($variables['content']['member_for']);
}
