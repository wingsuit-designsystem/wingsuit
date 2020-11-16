<?php

/**
 * @file
 * Functions to support theming form layout in the Wingsuit theme.
 */

use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_alter().
 */
function wingsuit_form_node_landing_page_layout_builder_form_alter(&$form, FormStateInterface $form_state) {
  $form['layout_builder_message']['#weight'] = -3000;
  $form['revision_information']['#prefix'] = '<div class="hidden">';
  $form['revision_information']['#suffix'] = '</div>';
}

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 */
function wingsuit_theme_suggestions_form_alter(array &$suggestions, array $variables) {
  $suggestions[] = 'form__' . $variables['element']['#form_id'];
}
