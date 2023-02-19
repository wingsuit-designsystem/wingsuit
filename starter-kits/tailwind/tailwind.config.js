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
      gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },
      purple: {
        50: '#FAF5FF',
        100: '#F3E8FF',
        200: '#E9D5FF',
        300: '#D8B4FE',
        400: '#C084FC',
        500: '#A855F7',
        600: '#9333EA',
        700: '#7E22CE',
        800: '#6B21A8',
        900: '#581C87',
      },
      teal: {
        50: '#F0FDFA',
        100: '#CCFBF1',
        200: '#99F6E4',
        300: '#5EEAD4',
        400: '#2DD4BF',
        500: '#14B8A6',
        600: '#0D9488',
        700: '#0F766E',
        800: '#115E59',
        900: '#134E4A',
      },
      red: {
        50: '#FEF2F2',
        100: '#FEE2E2',
        200: '#FECACA',
        300: '#FCA5A5',
        400: '#F87171',
        500: '#EF4444',
        600: '#DC2626',
        700: '#B91C1C',
        800: '#991B1B',
        900: '#7F1D1D',
      },
      yellow: {
        50: '#FEFCE8',
        100: '#FEF9C3',
        200: '#FEF08A',
        300: '#FDE047',
        400: '#FACC15',
        500: '#EAB308',
        600: '#CA8A04',
        700: '#A16207',
        800: '#854D0E',
        900: '#713F12',
      },
      blue: {
        50: '#EFF6FF',
        100: '#DBEAFE',
        200: '#BFDBFE',
        300: '#93C5FD',
        400: '#60A5FA',
        500: '#3B82F6',
        600: '#2563EB',
        700: '#1D4ED8',
        800: '#1E40AF',
        900: '#1E3A8A',
      },
      green: {
        50: '#F0FDF4',
        100: '#DCFCE7',
        200: '#BBF7D0',
        300: '#86EFAC',
        400: '#4ADE80',
        500: '#22C55E',
        600: '#16A34A',
        700: '#15803D',
        800: '#166534',
        900: '#14532D',
      },
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
        7.5: rem(30),
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
      sans: ['DM sans', 'Sans'],
      serif: ['Noto serif', 'Serif'],
    },
  },
  plugins: [forms, typography],
};
