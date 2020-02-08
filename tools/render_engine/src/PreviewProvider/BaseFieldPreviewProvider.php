<?php

namespace Wingsuit\RenderEngine\PreviewProvider;

class BaseFieldPreviewProvider extends BasePreviewProvider {

    public function getPreview($definition) {
        $output = parent::getPreview($definition);
        if ($output == null) {
            if (!empty($definition['default_value'])) {
                $output = $definition['default_value'];
            }
        }
        return $output;
    }
}