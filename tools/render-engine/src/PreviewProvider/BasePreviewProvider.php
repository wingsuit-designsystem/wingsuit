<?php

namespace Wingsuit\RenderEngine\PreviewProvider;

/**
 * Class BaseSettingPreviewProvider
 * @package Wingsuit\RenderEngine\PreviewProvider
 */
abstract class BasePreviewProvider implements PreviewProviderInterface
{

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
    private function fake($property, $formatter = null, $formaterArg = null)
    {
        if ($this->faker != null) {
            if ($formatter == null) {
                return $this->faker->$property;
            } else {
                return $this->faker->$property->$formatter($formaterArg);
            }

        } else {
            return "FAKER";
        }

    }

    /**
     * @{inherit}
     */
    public function getPreview($definition)
    {
        $use_faker = false;
        $faker_property = 'name';
        $output = null;
        $previewDefinition = isset($definition['preview']) ? $definition['preview'] : null;
        // Check if the definition is a string.
        // This happens under variant configuration.
        if (!is_array($definition)) {
            return $definition;
            // Check "preview:" configuration.
        } else if (!empty($previewDefinition) && !is_array($previewDefinition)) {
            $output = $previewDefinition;
            // Check "faker:" configuration.
        } else if (isset($previewDefinition['faker'])) {
            $use_faker = true;
            $faker_property = isset($previewDefinition['faker']['property']) ? $previewDefinition['faker']['property'] : 'name';
        }
        if ($use_faker == true) {
            $output = $this->fake($faker_property);
        }
        return $output;

    }
}