<?php
namespace Wingsuit\RenderEngine\PreviewProvider;

/**
 * Interface PreviewProviderInterface
 * @package Wingsuit\RenderEngine\PreviewProvider
 */
interface PreviewProviderInterface {

    /**
     * Returns the preview value of an sub definition.
     *
     * @param $definition
     *   The pattern definition.
     * @return string
     *   The preview value.
     */
    public function getPreview($definition);
}