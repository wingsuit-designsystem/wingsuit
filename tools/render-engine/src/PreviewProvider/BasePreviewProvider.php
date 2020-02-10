<?php

namespace Wingsuit\RenderEngine\PreviewProvider;

/**
 * Class BaseSettingPreviewProvider
 * @package Wingsuit\RenderEngine\PreviewProvider
 */
abstract class BasePreviewProvider implements PreviewProviderInterface {

    /**
     * @var null
     */
    private $faker;

    /**
     * BaseSettingPreviewProvider constructor.
     * @param null $faker
     */
    public function __construct($faker = null)
    {
        $this->faker = $faker;
    }

    /**
     * @param $formatter
     * @return mixed
     */
    private function fake($formatter)
    {
        if ($this->faker != null) {
            return $this->faker->$formatter;
        } else {
            return "FAKER";
        }

    }

    /**
     * @{inherit}
     */
    public function getPreview($definition) {
        $use_faker = false;
        $output = null;
        if (is_string($definition)) {
            return $definition;
        }
        else if (!empty($definition['preview'])) {
            $output = $definition['preview'];
        } else if (isset($definition['faker'])) {
            $use_faker = true;
            $faker_formatter = isset($definition['faker']['formatter']) ? $definition['faker']['formatter'] : 'text';
        }
        if ($use_faker == true) {
            $output = $this->fake($faker_formatter);
        }
        return $output;

    }
}