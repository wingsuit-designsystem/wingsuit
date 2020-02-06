<?php

function addFunctions(\Twig_Environment &$env, $config) {
  $getPreviewData = new Twig_SimpleFunction(

  /**
   * Builds settings array for render settings defined in wingsuit.patterns.yml.
   *
   * @param array $settings
   *   Containing settings array defined in wingsuit.patterns.yml.
   *
   * @return array
   *   Returns default values
   */
    function ($settings) {
      $default_values = [];
      $output = [];
      foreach ($settings as $setting_key => $setting) {
        if ($setting['type'] == "select" and $setting['required'] == true) {
          if ($setting['default_value']) {
            $default_values = [$setting_key => $setting['default_value']];
          }
          else {
            $default_values = [$setting_key => array_key_first($setting['options'])];
          }
        }
        elseif ($setting['type'] == "select" && !empty($setting['preview'])) {
          $default_values = [$setting_key => $setting['preview']];
        }
      }
      foreach ($settings as $setting_key => $setting) {
        if ($setting['type'] == 'select') {
          foreach ($settings['options'] as $option_key => $option) {
            $output = $default_values;
            $output[$setting_key] = $option_key;
          }
        }
      }
      return $output;
    }, ['needs_environment' => true]
  );
  $env->addFunction($getPreviewData);

}
