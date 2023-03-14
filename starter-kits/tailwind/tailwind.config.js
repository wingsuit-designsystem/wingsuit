const wingsuitCore = require('@wingsuit-designsystem/core');

const appConfig = wingsuitCore.resolveConfig('storybook', process.env.NODE_ENV);

const forms = require('@tailwindcss/forms');
const colors = require('tailwindcss/colors');
const typography = require('@tailwindcss/typography')({
  modifiers: ['lg'],
});

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');

/* eslint-disable no-unused-vars */
const em = (px, base) => `${round(px / base)}em`;
const rem = (px) => `${px / 16}rem`.replace(' ', '');

/** @type {import('tailwindcss').Config} */
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
    boxShadow: {
      sm: '0px 1px 2px rgba(0, 0, 0, 0.05)',
      md: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
      lg: '0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)',
      xl: '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
      '2xl': '0px 25px 50px rgba(0, 0, 0, 0.25)',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      purple: colors.purple,
      teal: colors.teal,
      red: colors.red,
      yellow: colors.yellow,
      blue: colors.blue,
      green: colors.green,
      pink: colors.pink,
    },
    fontSize: {
      xs: [rem(12), rem(16)],
      sm: [rem(14), rem(18)],
      base: [rem(16), rem(24)],
      lg: [rem(18), rem(28)],
      xl: [rem(20), rem(28)],
      '2xl': [rem(24), rem(32)],
      '3xl': [rem(30), rem(36)],
      '4xl': [rem(36), rem(42)],
      '5xl': [rem(48), rem(52)],
      '6xl': [rem(60), rem(66)],
    },
    extend: {
      height: {
        18: '4.5rem',
      },
      spacing: {
        1.5: rem(6),
        3.5: rem(14),
        4.5: rem(18),
        5.5: rem(22),
        7.5: rem(30),
      },
      maxWidth: {
        none: 'none',
        '7xl': '46.875rem',
        '8xl': '69rem',
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
      sans: ['DM sans', 'Sans'],
      serif: ['Noto serif', 'Serif'],
    },
  },
  plugins: [forms, typography],
};
