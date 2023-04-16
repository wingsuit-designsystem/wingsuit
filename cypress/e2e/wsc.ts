import { clickAddon, visit } from '../helper';

describe('Wingsuit Default Component', () => {
  beforeEach(() => {
    visit('official-wingsuit/?path=/story/components-ws-source-component--source-ws-component-default-pattern');
  });

  it('[text] it should change field value.', () => {
    clickAddon('Controls');
    // Test Textfields
    cy.get('#set-setting_textfield').click().get('#control-setting_textfield').clear().type('John Doe');
    cy.get('#control-setting_select').select('setting_select_options1');

    cy.wait(1000);
    cy.getStoryElement()
      .find('.wsc-component')
      .eq(0)
      .should('contain.text', 'setting_textfield: John Doe')
      .should('contain.text', 'setting_select: setting_select_options1')
  });
});
