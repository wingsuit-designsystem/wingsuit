<?php
require __DIR__ . '/vendor/autoload.php';

use Faker\Factory;
use Wingsuit\RenderEngine\Pattern;
use Wingsuit\RenderEngine\Renderer;
use Wingsuit\RenderEngine\PatternStorage;

function addEngineFunctions(\Twig_Environment &$env, $config)
{
    $pattern = new Twig_SimpleFunction (
        'pattern',
        function ($env, $context, $id, $variant = null, $fields = [], $settings = []) {
            try {
                $storage = PatternStorage::create($context['patterns']);
                $pattern = $storage->load($id, $variant, $fields, $settings);
                $use = $pattern->getUse();
                $render_stack = [];
                return Render::render($env, $context, $use, $variant, $fields, $settings, $render_stack);
            } catch (\Throwable $e) {
                return 'CRITICAL: ' . $e->getMessage();
            }

        }, ['needs_context' => true, 'needs_environment' => true]
    );
    $env->addFunction($pattern);

    $pattern = new Twig_SimpleFunction (
        'pattern_preview',
        function ($env, $context, $id, $variant = null, $fields = [], $settings = []) {
            try {
                $render_stack = [];
                $faker = Factory::create();
                $storage = PatternStorage::create($context['patterns'], $faker);
                $pattern = $storage->load($id, $variant, $fields, $settings);
                return Renderer::renderPreview($env, $context, $pattern, $render_stack);
            } catch (\Throwable $e) {
                return 'CRITICAL: ' . $e->getMessage();
            }

        }, ['needs_context' => true, 'needs_environment' => true]
    );
    $env->addFunction($pattern);

    $pattern_settings = new Twig_SimpleFunction (
        'pattern_option_set',
        function ($env, $context, $id, $variant = null) {
            try {
                $storage = PatternStorage::create($context['patterns']);
                $pattern = $storage->load($id, $variant);
                $optinoSet = $pattern->getOptionSet();
                return $optinoSet;
            } catch (\Throwable $e) {
                return 'CRITICAL: ' . $e->getMessage();
            }

        }, ['needs_context' => true, 'needs_environment' => true]
    );
    $env->addFunction($pattern_settings);
}
