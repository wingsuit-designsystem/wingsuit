import { clickAddon, visit } from '../helper';

describe('Wingsuit Component', () => {
  beforeEach(() => {
    visit('official-wingsuit/?path=/story/pages-ws-apps-component--apps-ws-component-default-pattern');
  });

  it('[text] it should change field value.', () => {
    clickAddon('Controls');

    cy.get('#control-setting_textfield').clear().type('John Doe');
    cy.wait(1000);
    cy.getStoryElement()
      .find('.wsc-component')
      .eq(0)
      .should('contain.text', 'setting_textfield: John Doe');
  });
});
