<?php

/**
 * @file
 * Functions to support theming navigation in the Wingsuit theme.
 */

use Drupal\Core\Url;

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
/**
 * Implements hook_preprocess_preprocess_links__language_block().
 *
 * The current language is not part of the block - so we add it.
 */
function wingsuit_preprocess_links__language_block(array &$variables) {
  $language = \Drupal::languageManager()->getCurrentLanguage()->getId();
  $variables['language'] = $language;
  foreach ($variables['links'] as $key => &$link) {
    $variables['links'][$key]["link"]["#title"] = $key;
    $link_language = $link['link']['#options']['language'];
    $path = Url::fromRoute('<current>', [], ['language' => $link_language]);
    $variables['links'][$key]['icon'] = '/themes/custom/base_theme/images/icon-flag-' . $link_language->id() . '.svg';
    $variables['links'][$key]['path'] = $path;
    $link['langcode'] = $link_language->id();
  }
  $variables['current_lang_icon']['#markup'] = '/themes/custom/base_theme/images/icon-flag-' . \Drupal::languageManager()->getCurrentLanguage()->getId() . '.svg';
}
