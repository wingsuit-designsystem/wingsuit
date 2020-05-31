/// <reference types="cypress" />

type LoggerMethod = 'log' | 'info' | 'debug';

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select the DOM element of a story in the canvas tab.
     */
    getStoryElement(): Chainable<Element>;

    /**
     * Returns the element while logging it.
     */
    console(method: LoggerMethod): Chainable<Element>;
  }
}
