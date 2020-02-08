<?php

namespace Wingsuit\RenderEngine;

class Renderer
{
    public static function renderPreview($env, $context, Pattern $pattern, &$render_stack)
    {
        $use = $pattern->getUse();
        $fields = $pattern->getFields();
        $composed_patterns = $pattern->getPatterns();
        foreach ($composed_patterns as $field_name => $composed_pattern) {
            $fields[$field_name] = self::renderPreview($env, $context, $composed_pattern, $render_stack);
        }
        $settings = $pattern->getSettings();
        $variant = $pattern->variant();
        return Renderer::render($env, $context, $use, $variant, $fields, $settings, $render_stack);
    }

    public static function render($env, $context, $use, $variant, $fields, $settings, &$render_stack)
    {
        $variables = $context;
        if (!empty($variant)) {
            $variables['variant'] = $variant;
        }
        $variables = array_merge($variables, $fields);
        $variables = array_merge($variables, $settings);
        $template = $env->load($use);
        $output = $template->render($variables);
        return $output;
    }
}
