<?php

namespace Wingsuit\RenderEngine;

use Wingsuit\RenderEngine\PreviewProvider\PatternProviderInterface;
use Wingsuit\RenderEngine\PreviewProvider\PreviewProviderInterface;

class Pattern
{

    /**
     * The pattern definition.
     *
     * @var mixed
     */
    private $definition;

    /**
     * The pattern id.
     *
     * @var string
     */
    private $id;

    /**
     * @return string
     */
    public function id()
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function variant()
    {
        return $this->variant;
    }

    /**
     * The pattern variant.
     *
     * @var string
     */
    private $variant;

    /**
     * @var []
     */
    private $settingProviders;

    /**
     * @var []
     */
    private $fieldProviders;

    /**
     * @var []
     */
    private $composedFieldProviders;

    /**
     * @param $type
     * @return |null
     */
    public function getSettingProvider($type)
    {
        if (isset($this->settingProviders[$type])) {
            return $this->settingProviders[$type];
        } else if (isset($this->settingProviders['default'])) {
            return $this->settingProviders['default'];
        }
        return null;
    }

    /**
     * @param $type
     * @return PreviewProviderInterface
     */
    public function getFieldProvider($type)
    {
        if ($type == 'pattern') {
            return NULL;
        }
        if (isset($this->fieldProviders[$type])) {
            return $this->fieldProviders[$type];
        } else if (isset($this->fieldProviders['default'])) {
            return $this->fieldProviders['default'];
        }
        return null;
    }

    /**
     * @param $type
     * @param $provider
     */
    public function addSettingProvider($type, $provider)
    {
        $this->settingProviders[$type] = $provider;
    }

    /**
     * @param $type
     * @param $provider
     */
    public function addFieldProvider($type, $provider)
    {
        $this->fieldProviders[$type] = $provider;
    }

    /**
     * @param $type
     * @param $provider
     */
    public function addPatternProvider($type, $provider)
    {
        $this->patternProviders[$type] = $provider;
    }

    /**
     * @param $type
     * @return PatternProviderInterface
     */
    public function getPatternProvider($type)
    {
        if (isset($this->patternProviders[$type])) {
            return $this->patternProviders[$type];
        }
        return null;
    }

    /**
     * Pattern constructor.
     * @param $id
     * @param $definition
     * @param null $variant
     * @param array $overwrittenFields
     * @param array $overwrittenSettings
     */
    public function __construct($id, $definition, $variant = null, $overwrittenFields = [], $overwrittenSettings = [])
    {
        $this->definition = $definition;
        $this->id = $id;
        $this->variant = $variant;

        // Overwrite fields.
        foreach ($overwrittenFields as $name => $value) {
            $this->definition['fields'][$name]['preview'] = $value;
            if ($variant != null) {
                $this->definition['variants'][$variant]['fields'][$name]['preview'] = $value;
            }
        }

        // Overwrite settings.
        foreach ($overwrittenSettings as $name => $value) {
            $this->definition['settings'][$name]['preview'] = $value;
            if ($variant != null) {
                $this->definition['variants'][$variant]['settings'][$name]['preview']  = $value;
                $this->definition['variants'][$variant]['settings'][$name]['overwritten'] = true;
            }
        }
    }

    /**
     * Returns the path to the twig template.
     *
     * @return string
     *   The twig component path.
     */
    public function getUse()
    {
        return isset($this->definition['use']) ? $this->definition['use'] : null;
    }


    /**
     * @param $field
     * @return string
     */
    private function getFieldPreview($field)
    {
        $type = isset($field['type']) ? $field['type'] : 'textfield';

        $provider = $this->getFieldProvider($type);
        if ($provider != null) {
            return $provider->getPreview($field);
        }
    }

    /**
     * @param $field
     * @return string
     */
    private function getPattern($field)
    {
        $type = isset($field['type']) ? $field['type'] : null;

        $provider = $this->getPatternProvider($type);
        if ($provider != null) {
            return $provider->getPattern($field);
        }
    }

    /**
     * @param $setting
     * @return mixed
     */
    private function getSettingPreview($setting)
    {
        $type = isset($setting['type']) ? $setting['type'] : 'textfield';

        $provider = $this->getSettingProvider($type);
        if ($provider != null) {
            return $provider->getPreview($setting);
        }
    }

    /**
     * Returns all possible changeable options.
     *
     * @return array
     */
    public function getOptionSet()
    {
        $optionSet = [];
        $definition = $this->definition;
        $variant_definition = isset($definition['variants'][$this->variant]) ? $definition['variants'][$this->variant] : null;
        if (isset($definition['settings'])) {
            foreach ($definition['settings'] as $setting_name => $setting) {
                if (isset($setting['options']) && !isset($variant_definition['settings'][$setting_name])) {
                    $optionSet[$setting_name] = $setting;
                }
            }
        }
        return $optionSet;
    }

    /**
     * @return array
     */
    public function getSettings()
    {
        $data = [];
        $definition = $this->definition;

        $variant_definition = isset($definition['variants'][$this->variant]) ? $definition['variants'][$this->variant] : null;
        if (isset($definition['settings'])) {
            foreach ($definition['settings'] as $setting_name => $setting) {
                $result_setting = null;
                if (isset($variant_definition['settings'][$setting_name])) {
                    $result_setting = $this->getSettingPreview($variant_definition['settings'][$setting_name]);
                }
                if (empty($result_setting)) {
                    $result_setting = $this->getSettingPreview($setting);
                }
                if (!empty($result_setting)) {
                    $data[$setting_name] = $result_setting;
                }

            }
        }
        return $data;
    }

    /**
     * @return array
     */
    public function getPatterns()
    {
        $data = [];
        $definition = $this->definition;
        $variant_definition = isset($definition['variants'][$this->variant]) ? $definition['variants'][$this->variant] : null;
        if (isset($definition['fields'])) {
            foreach ($definition['fields'] as $field_name => $field) {
                $result_pattern = null;
                if (isset($variant_definition['fields'][$field_name])) {
                    $result_pattern = $this->getPattern($variant_definition['fields'][$field_name]);
                }
                if (empty($result_pattern)) {
                    $result_pattern = $this->getPattern($field);
                }
                if (!empty($result_pattern)) {
                    $data[$field_name] = $result_pattern;
                }
            }
        }
        return $data;
    }

    public function getVariables() {
        $variables = [];
        $fields = $this->getFields();
        $settings = $this->getSettings();
        $variant = $this->variant();
        if (!empty($variant)) {
            $variables['variant'] = $variant;
        }
        $variables = array_merge($variables, $fields);
        $variables = array_merge($variables, $settings);
        return $variables;
    }

    public function hasSettingDefinitions()
    {
        $defs = $this->getSettingDefinitions();
        return count($defs) === 0 ? false : true;
    }
    /**
     * @return array
     */
    public function getSettingDefinitions()
    {
        $data = [];
        $definition = $this->definition;
        if (isset($definition['settings'])) {
            $variant_definition = isset($definition['variants'][$this->variant]) ? $definition['variants'][$this->variant] : null;
            foreach ($definition['settings'] as $setting_name => $setting) {
                if (!isset($variant_definition['settings'][$setting_name])
                || (isset($variant_definition['settings'][$setting_name]['overwritten']) &&
                        $variant_definition['settings'][$setting_name]['overwritten'] == true
                    )
                ) {
                    $data[$setting_name] = $setting;
                }
            }
        }
        return $data;
    }

    /**
     * @return array
     */
    public function getFieldDefinitions()
    {
        $data = [];
        $definition = $this->definition;
        if (isset($definition['fields'])) {
            foreach ($definition['fields'] as $field_name => $field) {
                $data[$field_name] = $field;
            }
        }
        return $data;
    }
    /**
     * @return array
     */
    public function getFields()
    {
        $data = [];
        $definition = $this->definition;

        if (isset($definition['fields'])) {
            $variant_definition = isset($definition['variants'][$this->variant]) ? $definition['variants'][$this->variant] : null;
            foreach ($definition['fields'] as $field_name => $field) {
                $result_field = null;
                if (isset($variant_definition['fields'][$field_name])) {
                    $result_field = $this->getFieldPreview($variant_definition['fields'][$field_name]);
                }
                if (empty($result_field)) {
                    $result_field = $this->getFieldPreview($field);
                }
                if (!empty($result_field)) {
                    $data[$field_name] = $result_field;
                }
            }
        }
        return $data;
    }
}
