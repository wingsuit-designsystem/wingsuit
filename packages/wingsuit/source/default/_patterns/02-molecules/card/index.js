/**
 * Card
 */

// Module template
import './_card.twig';

// Module styles
import './_card.css';

const patternDefinition = require('./card.wingsuit.yml');

export const defaults = {
  patternDefinition,
};

export const name = 'card';
