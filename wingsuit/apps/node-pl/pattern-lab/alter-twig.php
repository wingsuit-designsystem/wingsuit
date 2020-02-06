<?php
/**
 * @param Twig_Environment $env - The Twig Environment - https://twig.symfony.com/api/1.x/Twig_Environment.html
 * @param $config - Config of `@basalt/twig-renderer`
 *
 */
function addFilters(\Twig_Environment &$env, $config) {

  /**
   * Clean Class
   *
   * @return string
   */
  $clean_class_filter = new Twig_SimpleFilter('clean_class', function ($string) {
    return $string;
  });
  $env->addFilter($clean_class_filter);

  /**
   * Clean ID
   *
   * @return string
   */
  $clean_id_filter = new Twig_SimpleFilter('clean_id', function ($string) {
    return $string;
  });
  $env->addFilter($clean_id_filter);

  /**
   * Format Date
   *
   * @return string
   */
  $format_date_filter = new Twig_SimpleFilter('format_date', function ($string) {
    return $string;
  });
  $env->addFilter($format_date_filter);

  /**
   * Luma
   *
   * Take in an rgba associative array return a luminance value
   * according to ITU-R BT.709.
   *
   * @param array $rgba the associative array containing each color value. For example
   *              array(4) {
   *                ["r"] => int(0)
   *                ["g"] => int(123)
   *                ["b"] => int(255)
   *                ["a"] => int(1)
   *              }
   *
   * @return float
   */
  $luma_filter = new Twig_SimpleFilter('luma', function ($rgba) {
    // Doesn't handle alpha, yet.
    return 0.2126 * $rgba['r'] + 0.7152 * $rgba['g'] + 0.0722 * $rgba['b'];
  });
  $env->addFilter($luma_filter);

  /**
   * Placeholder
   *
   * @return string
   */
  $placeholder_filter = new Twig_SimpleFilter('placeholder', function ($string) {
    return $string;
  });
  $env->addFilter($placeholder_filter);

  /**
   * Drupal render filter.
   *
   * @return string
   */

  $render_filter = new Twig_SimpleFilter('render', function ($string) {
    return $string;
  });
  $env->addFilter($render_filter);

  /**
   * RGBA String
   *
   * @return string
   */
  $rgba_string_filter = new Twig_SimpleFilter('rgba_string', function ($string) {
    $rgba = trim(str_replace(' ', '', $string));
    if (stripos($rgba, 'rgba') !== FALSE) {
      $res = sscanf($rgba, "rgba(%d, %d, %d, %f)");
    }
    else {
      $res = sscanf($rgba, "rgb(%d, %d, %d)");
      $res[] = 1;
    }

    return array_combine(array('r', 'g', 'b', 'a'), $res);
  });
  $env->addFilter($rgba_string_filter);

  /**
   * Safe Join
   *
   * @return string
   */
  $safe_join_filter = new Twig_SimpleFilter('safe_join', function ($string) {
    return $string;
  });
  $env->addFilter($safe_join_filter);

  /**
   * Drupal translate filter.
   *
   * @return string
   */
  $t_filter = new Twig_SimpleFilter('t', function ($string) {
    return $string;
  });
  $env->addFilter($t_filter);

  /**
   * Without
   *
   * @return string
   */
  $without_filter = new Twig_SimpleFilter('without', function ($string) {
    return $string;
  });
  $env->addFilter($without_filter);

  /**
   * Attributes
   *
   * @return string
   */
  $attributes_filter = new Twig_SimpleFilter('attributes', function ($attributes) {
    // if we already have attributes as a renderable string, return.
    if (is_object($attributes) && method_exists($attributes, 'toArray')) {
      $attributes = $attributes->toArray();
    }
    if (is_string($attributes)) {
      return $attributes;
    }
    else {
      // Attributes is an array or object.
      $renderable_attributes = [];
      foreach ($attributes as $key => $value) {
        // If our values are an array, join the array into a string.
        if (is_array($value)) {
          asort($value);
          $value = implode($value, ' ');
        }
        $renderable_attributes[] = "{$key}=\"{$value}\"";
      }
      return implode($renderable_attributes, ' ');
    }
  });
  $env->addFilter($attributes_filter);

}

function addFunctions(\Twig_Environment &$env, $config) {

  /**
   * Builds attributes object.
   *
   * @param array $attributes
   *
   * @return object
   *   Drupal attributes object
   */
  $attributes_function = new Twig_SimpleFunction(
    'attributes_object',
    function ($attributes = array()) {
      return new class {
        private $attributes = [];
        public function addClass($class) {
          $this->attributes['class'][] = $class;
          return $this;
        }
        public function setAttribute($attribute, $value) {
          $this->attributes[$attribute] = $value;
          return $this;
        }
        public function toArray() {
          return $this->attributes;
        }
        public function __toString() {
          $renderable_attributes = [];
          foreach ($this->attributes as $key => $value) {
            // If our values are an array, join the array into a string.
            if (is_array($value)) {
              asort($value);
              $value = implode($value, ' ');
            }
            $renderable_attributes[] = "{$key}=\"{$value}\"";
          }
          return implode($renderable_attributes, ' ');
        }
      };
    },
    array()
  );
  $env->addFunction($attributes_function);

  /**
   * Link
   *
   */
  $link_function = new Twig_SimpleFunction(
    'link',
    function ($title, $url, $attributes) {
      if (isset($attributes) && isset($attributes['class'])) {
        $classes = join(' ', $attributes['class']);
        return '<a href="' . $url . '" class="' . $classes . '">' . $title . '</a>';
      }
      else {
        return '<a href="' . $url . '">' . $title . '</a>';
      }
    },
    array('is_safe' => array('html'))
  );
  $env->addFunction($link_function);

  /**
   * Path
   *
   */
  $path_function = new Twig_SimpleFunction('path', function ($string) {
    if ($string === '<front>') {
      return '/';
    }
    else {
      return $string;
    }
  });
  $env->addFunction($path_function);

  /**
   * URL
   *
   * Https://www.drupal.org/node/2486991.
   */
  $url_function = new Twig_SimpleFunction('url', function ($string) {
    return '#';
  });
  $env->addFunction($url_function);

  $modifier_function = new Twig_SimpleFunction(
      'modifier_class',
      /**
       * Builds modifier class(es).
       *
       * @param string $base_class
       *   The base class to be "modified", e.g. `my-class`
       * @param string|array $modifier
       *   One or more modifier strings, either as array, space-separated string or
       *   array of space-separated strings
       *
       * @return string
       *   A space-separated string of modifier classes. If modifier is empty an
       *   empty string will be returned.
       */
      function ($base_class, $modifier) {
        // Modifier may be an array or a whitespace separated string, or both. So we
        // first glue everything together and split afterwards to get an array of
        // modifiers.
        if (is_array($modifier)) {
          $modifier = implode(' ', $modifier);
        }
        $modifiers = array_filter(array_unique(explode(' ', $modifier)));
        foreach ($modifiers as &$mod) {
          $mod = $base_class . '--' . $mod;
        }
        return implode(' ', $modifiers);
      },
      array()
  );
  $env->addFunction($modifier_function);

  $pattern_demo = new Twig_SimpleFunction(
    function (Twig_Environment $env, $pattern, $patterns) {
      if (!empty($patterns[$pattern])) {
        $current_pattern = $patterns[$pattern];
        $include_path = $current_pattern['use'];

        $fields = [];
        $variants = [];
        $env->pattern_preview();
        // Fields:
        foreach ($current_pattern['fields'] as $key => $field) {
          $preview = [$key => $field['preview']];
        }

      }
      return implode(' ', 'ff');
    }, ['needs_environment' => true]
  );
  $env->addFunction($pattern_demo);

  $pattern_preview = new Twig_SimpleFunction(
    function (Twig_Environment $env, $pattern, $patterns) {
      if (!empty($patterns[$pattern])) {
        $current_pattern = $patterns[$pattern];
        $include_path = $current_pattern['use'];

        $fields = [];
        $variants = [];

        // Fields:
        foreach ($current_pattern['fields'] as $key => $field) {
          $preview = [$key => $field['preview']];
        }

      }
      return implode(' ', 'ff');
    }, ['needs_environment' => true]
  );
  $env->addFunction($pattern_preview);
}

/**
 * Adds the debug extension.
 *
 * To enable Twig Debugging, add this function's name to patternlab-config.json
 * under engines.twig.alterTwigEnv.functions
 *
 * @param Twig_Environment $env - The Twig Environment - https://twig.symfony.com/api/1.x/Twig_Environment.html
 * @param $config - Config of `@basalt/twig-renderer`
 */
function addDebug(\Twig_Environment &$env, $config) {
  $env->addExtension(new \Twig\Extension\DebugExtension());
}
