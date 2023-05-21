import { clickAddon, visit } from '../../helper';

describe('Tailwind: Card', () => {
  beforeEach(() => {
    visit(
      '?path=/story/molecules-card--carddefault-pattern'
    );
  });

  it('[text] it should change field value.', () => {
    clickAddon('Controls');
    cy.get('#control-preheadline')
      .clear()
      .type('John Doe');

    cy.wait(1000);
    cy.getStoryElement()
      .should('contain.text', 'John Doe')
  });
});
