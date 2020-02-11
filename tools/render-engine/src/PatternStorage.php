<?php

namespace Wingsuit\RenderEngine;

use Wingsuit\RenderEngine\PreviewProvider\BaseFieldPreviewProvider;
use Wingsuit\RenderEngine\PreviewProvider\BaseSettingPreviewProvider;
use Wingsuit\RenderEngine\PreviewProvider\OptionSettingPreviewProvider;
use Wingsuit\RenderEngine\PreviewProvider\PatternProvider;

/**
 * Class PatternStorage
 * @package Wingsuit\RenderEngine
 */
class PatternStorage implements PatternStorageInterface
{

    /**
     * @var
     */
    private static $patterns;

    /**
     * @var
     */
    private static $faker;
    /**
     * PatternStorage constructor.
     */
    private function __construct()
    {
    }

    /**
     * @param $patterns
     * @return PatternStorage
     */
    public static function create($patterns, $faker = null) {
        self::$patterns = $patterns;
        self::$faker = $faker;
        return new PatternStorage();
    }

    /**
     * @param $id
     * @param null $variant
     * @param array $fields
     * @param array $settings
     * @return Pattern
     * @throws \Exception
     */
    public function load($id, $variant = null, $fields = [], $settings = [])
    {
        if (!isset(self::$patterns[$id])) {
            $keys = join(',', array_keys(self::$patterns));
            //throw new \Exception("Pattern $id not   . Available patterns are: '$keys'");
        }
        $pattern = new Pattern($id, self::$patterns[$id], $variant, $fields, $settings);
        $pattern->addSettingProvider('default', new BaseSettingPreviewProvider(self::$faker));
        $pattern->addSettingProvider('select', new OptionSettingPreviewProvider(self::$faker));
        $pattern->addSettingProvider('radio', new OptionSettingPreviewProvider(self::$faker));
        $pattern->addFieldProvider('default', new BaseFieldPreviewProvider(self::$faker));
        $pattern->addPatternProvider('pattern', new PatternProvider($this));
        return $pattern;
    }
}