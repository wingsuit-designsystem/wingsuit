export default {
  title: 'Buttons'
};

import button from './button.twig';
import drupalAttribute from 'drupal-attribute';

export const button_primary = () => (
  button({
    attributes: new drupalAttribute(),
    plugin_id: "button_primary",
    type: "primary",
    value: "Primary Button"
  })
);

export const button_secondary = () => (
  button({
    attributes: new drupalAttribute(),
    plugin_id: "button_secondary",
    type: "secondary",
    value: "Secondary Button"
  })
);
