/* eslint-disable jest/no-standalone-expect, no-unused-expressions, jest/valid-expect */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

const logger = console;
Cypress.Commands.add(
  'console',
  {
    prevSubject: true,
  },
  (subject, method = 'log') => {
    logger[method]('The subject is', subject);
    return subject;
  }
);

Cypress.Commands.add('getStoryElement', {}, () => {
  return cy
    .get(`#storybook-preview-iframe`, { timeout: 60000 })
    .should(($iframe) => {
      const doc = $iframe[0].contentDocument;
      const element = doc ? doc.documentElement : null;

      expect(doc, 'storybook iframe document').to.not.be.null;
      expect(doc?.readyState, 'storybook iframe readyState').to.eq('complete');
      expect(element?.querySelector('.wingsuit-body'), 'wingsuit body exists').to.not.be.null;
    })
    .then(($iframe) => {
      const doc = $iframe[0].contentDocument;
      const element = doc ? doc.querySelector('.wingsuit-body') : null;
      return cy.wrap(element);
    });
});
