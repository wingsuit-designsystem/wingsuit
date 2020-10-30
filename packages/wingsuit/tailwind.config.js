const customForms = require('@tailwindcss/custom-forms');
const typography = require('@tailwindcss/typography');

const rem = (px) => ({ [px]: `${px / 16}rem` });

module.exports = {
  important: false,
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    layers: ['utilities'],
    content: ['./source/**/*.twig', './apps/**/*.twig'],
    whitelist: ['bg-red-500', 'px-4'],
  },
  theme: {
    extend: {
      fill: {
        current: 'currentColor',
      },
      colors: {
        primary: '#ED64A6',
        secondary: '#90CDF4',
      },
      height: {
        18: '4.5rem',
      },
      maxWidth: {
        none: 'none',
        ...rem(120),
        ...rem(800),
        ...rem(1200),
        ...rem(1600),
        ...rem(1900),
      },
    },
    fontFamily: {
      serif: ['SourceSerif', '-apple-system', 'BlinkMacSystemFont'],
      sans: ['Roboto', 'sans-serif'],
    },
  },
  variants: {
    opacity: ['responsive'],
    borderWidth: ['responsive', 'hover', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'group-hover'],
    textDecoration: ['responsive', 'hover', 'group-hover'],
    textColor: ['responsive', 'hover', 'group-hover'],
    fontFamily: ['responsive', 'hover', 'focus'],
    fill: ['responsive', 'hover', 'focus'],
  },
  plugins: [customForms, typography],
};
