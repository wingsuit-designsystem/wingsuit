<?php
namespace Wingsuit\RenderEngine;

/**
 * Interface PreviewProviderInterface
 * @package Wingsuit\RenderEngine\PreviewProvider
 */
interface PatternStorageInterface {

    /**
     * Loads a pattern by id.
     *
     * @param $id
     *   The pattern id.
     * @return Pattern
     *   The loaded pattern.
     */
    public function load($id);
}