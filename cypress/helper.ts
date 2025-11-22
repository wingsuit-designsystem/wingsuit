/* eslint-disable no-unused-expressions */
/* eslint-disable jest/valid-expect */
type StorybookApps = 'official-wingsuit';

type Addons = 'Actions' | 'Knobs';

const getUrl = (route: string) => {
  const host = Cypress.env('location') || 'http://localhost:4000';
  return `${host}/${route}`;
};

export const visit = (route = '') => {
  return cy
    .on('uncaught:exception', (err, runnable) => {
      //expect(err.message).to.include('Failed to execute')
      return false
    })
    .clearLocalStorage()
    .visit(getUrl(route))
    .get(`#storybook-preview-iframe`, { timeout: 60000 })
    .should(($iframe) => {
      const doc = ($iframe[0] as HTMLIFrameElement).contentDocument;
      const element = doc ? doc.documentElement : null;

      expect(doc, 'storybook iframe document').to.not.be.null;
      expect(doc?.readyState, 'storybook iframe readyState').to.eq('complete');
      expect(element?.querySelector('.wingsuit-body'), 'wingsuit body exists').to.not.be.null;
    });
};

export const clickAddon = (addonName: Addons) => {
  return cy.get(`[role=tablist] button[role=tab]`).contains(addonName).click();
};

export const getStorybookPreview = () => {
  return cy
    .get(`#storybook-preview-iframe`, { timeout: 60000 })
    .should(($iframe) => {
      const doc = ($iframe[0] as HTMLIFrameElement).contentDocument;
      const element = doc ? doc.documentElement : null;

      expect(doc, 'storybook iframe document').to.not.be.null;
      expect(doc?.readyState, 'storybook iframe readyState').to.eq('complete');
      expect(element?.querySelector('.wingsuit-body'), 'wingsuit body exists').to.not.be.null;
    })
    .then(($iframe) => {
      const doc = ($iframe[0] as HTMLIFrameElement).contentDocument;
      const element = doc ? doc.querySelector('.wingsuit-body') : null;
      return cy.wrap(element);
    });
};
