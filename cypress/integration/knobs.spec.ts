import { clickAddon, visit } from '../helper';

describe('Knobs', () => {
  beforeEach(() => {
    visit('official-storybook/?path=/story/addons-knobs-withknobs--tweaks-static-values');
  });

  it('[text] it should change a string value', () => {
    clickAddon('Knobs');

    cy.get('#Name').clear().type('John Doe');

    cy.getStoryElement()
      .console('info')
      .find('p')
      .eq(0)
      .should('contain.text', 'My name is John Doe');
  });
});
