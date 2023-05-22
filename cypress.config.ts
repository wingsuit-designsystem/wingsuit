import { defineConfig } from 'cypress';
import plugin from './cypress/plugins';

export default defineConfig({
  defaultCommandTimeout: 20000,
  requestTimeout: 20000,
  responseTimeout: 60000,
  projectId: 'vu3jb7',

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return plugin(on, config);
    },
    specPattern: 'cypress/e2e/official-wingsuit/**/*.{js,jsx,ts,tsx}',
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
});
