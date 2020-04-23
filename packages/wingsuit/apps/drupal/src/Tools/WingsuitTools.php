<?php

namespace Drupal\wingsuit\Tools;

use Drupal\wingsuit\Wingsuit;

/**
 * Provides utility functions for all preprocessors.
 */
class WingsuitTools {

  /**
   * Return the theme path relative to the Drupal root.
   *
   * @return string
   *   The theme path.
   */
  public static function getThemePath() {
    return drupal_get_path('theme', WingsuitTools::THEME_NAME);
  }

  /**
   * Return the theme's assets path relative to the Drupal root.
   *
   * @return string
   *   The theme's assets path.
   */
  public static function getAssetsPath() {
    return Wingsuit::ASSETS_PATH;
  }

  /**
   * Return the theme's name.
   *
   * @return string
   *   The theme's name.
   */
  public static function getThemeName() {
    return Wingsuit::THEME_NAME;
  }

}
