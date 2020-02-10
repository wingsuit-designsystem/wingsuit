<?php
namespace Wingsuit\RenderEngine\PreviewProvider;

/**
 * Interface PatternProviderInterface
 * @package Wingsuit\RenderEngine\PreviewProvider
 */
interface PatternProviderInterface {

    /**
     * Returns the preview value of an sub definition.
     *
     * @param $definition
     *   The pattern definition.
     * @return string
     *   The preview value.
     */
    public function getPattern($definition);
}