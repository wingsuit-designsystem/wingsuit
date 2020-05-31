import { visit } from '../helper';

describe('Basic Flow', () => {
  before(() => {
    visit();
  });

  it('should load welcome flow', () => {
    // assert url changes
    cy.url().should('include', 'path=/story/welcome--to-storybook');

    // check for selected element
    cy.get('#welcome--to-storybook').should('have.class', 'selected');

    // check for content
    cy.getStoryElement().should('contain.text', 'Welcome to storybook');
  });

  describe('Button story', () => {
    before(() => {
      cy.get('#button').click();
    });

    it('should be visited succesfully', () => {
      // assert url changes
      cy.url().should('include', 'path=/story/button--text');

      // check for selected element
      cy.get('#button--text').should('have.class', 'selected');

      // check for content
      cy.getStoryElement().find('button').should('contain.text', 'Hello Button');
    });
  });
});
