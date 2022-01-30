<?php

/**
 * @file
 * Functions to support links in the Wingsuit theme.
 */

/**
 * Modify the definitions of link attribute plugins.
 *
 * @param array[] $plugins
 *   Link attribute plugin definitions.
 */
function wingsuit_link_attributes_plugin_alter(array &$plugins) {
  // Set a default value for the target attribute.
  $plugins['variant'] = [
    'title' => 'Variant',
    'type' => 'select',
    'options' => [
      'default' => 'Default',
      'outline' => 'Outline',
    ],
  ];
}
