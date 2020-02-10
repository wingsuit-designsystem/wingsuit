<?php

namespace Wingsuit\RenderEngine\PreviewProvider;

class OptionSettingPreviewProvider extends BasePreviewProvider
{

    public function getPreview($definition)
    {
        $output = parent::getPreview($definition);
        if ($output == null) {
            if (!empty($definition['default_value'])) {
                return $definition['default_value'];
            } else if (isset($definition['required']) && $definition['required'] == 'true') {
                if (is_array($definition['options'])) {
                    $option_keys = array_keys($definition['options']);
                    $output = isset($option_keys[0]) ? $option_keys[0] : null;
                }
            }
        }
        return $output;
    }
}