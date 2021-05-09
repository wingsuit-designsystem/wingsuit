const forms = require('@tailwindcss/forms');
const colors = require('tailwindcss/colors');
const typography = require('@tailwindcss/typography')({
  modifiers: ['lg', '2xl'],
});

module.exports = {
  important: false,
  purge: {
    layers: ['utilities'],
    content: ['./source/**/*.twig', './source/**/*.yml', './apps/**/*.twig'],
    whitelist: ['bg-red-500', 'px-4'],
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      blue: {
        200: '#ebf4ff',
      },
      dark: {
        500: '#282c34',
        700: '#21252b',
      },
      green: {
        200: '#f0fff4',
        500: '#319795',
      },
      red: colors.rose,
      teal: {
        200: '#e6fffa',
        300: '#b2f5ea',
        500: '#00ffd1',
      },
      purple: {
        200: '#faf5ff',
        500: '#8000ff',
      },
      yellow: '#fffff0',
    },
    extend: {
      boxShadow: {
        button: '4px 4px 0 0 rgba(0, 0, 0)',
      },
      fill: {
        current: 'currentColor',
      },
      height: {
        18: '4.5rem',
      },
      maxWidth: {
        none: 'none',
        '7xl': '100rem',
        '8xl': '120rem',
      },
      gridTemplateColumns: {
        '33/66': '33% 66%',
        '66/33': '66% 33%',
        '25/50/25': '25% 50% 25%',
        '25/75': '25% 75%',
      },
    },
    fontFamily: {
      serif: ['SourceSerif', '-apple-system', 'BlinkMacSystemFont'],
      sans: ['Inter', 'Roboto', 'sans-serif'],
    },
  },
  variants: {
    opacity: ['responsive'],
    borderWidth: ['responsive', 'hover', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'group-hover'],
    textDecoration: ['responsive', 'hover', 'group-hover'],
    textColor: ['responsive', 'hover', 'group-hover', 'dark'],
    fontFamily: ['responsive', 'hover', 'focus'],
    fill: ['responsive', 'hover', 'focus'],
    spacing: ['responsive', 'last'],
    typography: ['responsive', 'dark'],
    boxShadow: ['active', 'hover'],
  },
  plugins: [forms, typography],
};
