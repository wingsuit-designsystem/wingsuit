<?php

namespace Wingsuit\RenderEngine\PreviewProvider;

use Wingsuit\RenderEngine\PatternStorageInterface;

class PatternProvider implements PatternProviderInterface
{
    /**
     * BaseSettingPreviewProvider constructor.
     * @param PatternStorageInterface $storage
     */
    public function __construct(PatternStorageInterface $storage)
    {
        $this->storage = $storage;
    }

    public function getPattern($definition)
    {
        $previewDdefinition = $definition['preview'];
        if (isset($previewDdefinition['id'])) {
            $variant = isset($previewDdefinition['variant']) ? $previewDdefinition['variant'] : null;
            $fields = isset($previewDdefinition['fields']) ? $previewDdefinition['fields'] : [];
            $settings = isset($previewDdefinition['settings']) ? $previewDdefinition['settings'] : [];
            return $this->storage->load($previewDdefinition['id'], $variant, $fields, $settings);
        }
    }
}