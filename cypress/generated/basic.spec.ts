import { visit } from '../helper';

describe('Basic Flow', () => {
  before(() => {
    visit();
  });

  it('should load welcome page', () => {
    // assert url changes
    cy.url().should('include', 'path=/story/welcome--page');

    // check for selected element
    // cy.get('#welcome--page').should('have.class', 'selected');

    // check for content
    cy.getStoryElement().should('contain.text', 'Design system');
  });

  describe('Button story', () => {
    before(() => {
      cy.get('#atoms-button').click();
    });

    it('should be visited succesfully', () => {
      // assert url changes
      // cy.url().should('include', 'path=/story/button--text');

      // check for selected element
      // cy.get('#atoms-button').should('have.class', 'selected');

      // check for content
      cy.getStoryElement().find('.btn').should('contain.text', 'More');
    });
  });
});
