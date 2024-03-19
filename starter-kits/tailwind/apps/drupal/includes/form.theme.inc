<?php

/**
 * @file
 * Functions to support theming form layout in the Wingsuit theme.
 */
function wingsuit_preprocess_form_element(&$variables) {
  $inline_types = ['checkbox', 'radio', 'checkboxes', 'radios'];
  foreach ($inline_types as $inline_type) {
    if ($variables['element']['#type'] == $inline_type) {
      $variables['label']['#theme'] = 'form_element_label__' . $inline_type;
    }
  }
}
