/**
 * button
 */

import $ from 'jquery';

// Module dependencies
import 'protons';

// Module styles
import './button.css';
// import './button.scss';

// Module template
import './_button.twig';

export const name = 'button';

export const defaults = {
  dummyClass: 'js-button-exists',
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
export function enable($context, { image = {} }) {
  // Find our component within the DOM
  const $button = $('.button', $context);
  // Bail if component does not exist
  if (!$button.length) {
    return;
  }
  // Merge defaults with incoming settings
  const settings = Object.assign(defaults, image);
  // An example of what could be done with this component
  $button.addClass(settings.dummyClass);
}

export default enable;
