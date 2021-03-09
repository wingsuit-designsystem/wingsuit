import { clickAddon, visit } from '../helper';

describe('Wingsuit Component', () => {
  beforeEach(() => {
    visit('official-wingsuit/?path=/story/atoms-wingsuit-component--primary');
  });

  it('[text] it should change field value.', () => {
    clickAddon('Controls');

    cy.get('#content').clear().type('John Doe');
    cy.wait(1000);
    cy.getStoryElement()
      .find('.wsc-component')
      .eq(0)
      .should('contain.text', 'John Doe');
  });
});
