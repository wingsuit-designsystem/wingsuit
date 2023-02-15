const wingsuitCore = require('@wingsuit-designsystem/core');

const appConfig = wingsuitCore.resolveConfig('storybook', process.env.NODE_ENV);

const forms = require('@tailwindcss/forms');
const colors = require('tailwindcss/colors');
const typography = require('@tailwindcss/typography')({
  modifiers: ['lg'],
});

module.exports = {
  important: false,
  darkMode: 'class',
  content: [
    './apps/**/*.twig',
    ...Object.values(appConfig.namespaces).map((namespace) => `${namespace}/**/*.twig`),
    ...Object.values(appConfig.namespaces).map((namespace) => `${namespace}/**/*.yml`),
  ],
  safelist: ['bg-black'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      teal: colors.teal,
      red: colors.rose,
      green: colors.green,
      yellow: colors.amber,
    },
    extend: {
      height: {
        18: '4.5rem',
      },
      maxWidth: {
        none: 'none',
        '7xl': '100rem',
        '8xl': '120rem',
      },
      gridTemplateColumns: {
        '33/66': 'minmax(0, 1fr) minmax(0, 2fr)',
        '66/33': 'minmax(0, 2fr) minmax(0, 1fr)',
        '25/75': 'minmax(0, 1fr) minmax(0, 3fr)',
        '75/25': 'minmax(0, 3fr) minmax(0, 1fr)',
        '4/5/3': 'minmax(0, 4fr) minmax(0, 5fr) minmax(0, 3fr)',
        '25/50/25': 'minmax(0, 1fr) minmax(0, 2fr) minmax(0, 1fr)',
        '25/25/50': 'minmax(0, 1fr) minmax(0, 1fr) minmax(0, 2fr)',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'Arial'],
    },
  },
  plugins: [forms, typography],
};
