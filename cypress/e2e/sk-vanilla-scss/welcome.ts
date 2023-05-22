import { clickAddon, visit } from '../../helper';

describe('Welcome Page', () => {
  beforeEach(() => {
    visit(
      '?path=/docs/foundations-welcome--docs'
    );
  });

  it('Design system Text.', () => {
    cy.wait(1000);
    cy.getStoryElement()
      .should('contain.text', 'Design system')
  });
});
