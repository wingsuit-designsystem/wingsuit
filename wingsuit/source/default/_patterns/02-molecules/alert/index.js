/**
 * alert
 */

import $ from 'jquery';

// Module dependencies
import 'protons';

// Module template
import './_alert.twig';

export const name = 'alert';

export const defaults = {
  dummyClass: 'js-alert-exists',
};

/**
 * Components may need to run clean-up tasks if they are removed from DOM.
 *
 * @param {jQuery} $context - A piece of DOM
 * @param {Object} settings - Pertinent settings
 */
// eslint-disable-next-line no-unused-vars
export function disable($context, settings) {}

/**
 * Each component has a chance to run when its enable function is called. It is
 * given a piece of DOM ($context) and a settings object. We destructure our
 * component key off the settings object and provide an empty object fallback.
 * Incoming settings override default settings via Object.assign().
 *
 * @param {jQuery} $context - A piece of DOM
 * @param {Object} settings - Settings object
 */
export function enable($context, { alert = {} }) {
  // Find our component within the DOM
  const $alert = $('.alert', $context);
  // Bail if component does not exist
  if (!$alert.length) {
    return;
  }
  // Merge defaults with incoming settings
  const settings = {
    ...defaults,
    ...alert,
  };
  // An example of what could be done with this component
  $alert.addClass(settings.dummyClass);
}

export default enable;
