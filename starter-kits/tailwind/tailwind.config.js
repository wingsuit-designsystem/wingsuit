const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');

module.exports = {
  important: false,
  purge: {
    layers: ['utilities'],
    content: ['./source/**/*.twig', './source/**/*.yml', './apps/**/*.twig'],
    whitelist: ['bg-red-500', 'px-4'],
  },
  theme: {
    extend: {
      margin: {
        ...rem(-100),
      },
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
<<<<<<< HEAD:starter-kits/tailwind/tailwind.config.js
        '7xl': '100rem',
        '8xl': '120rem',
=======
        ...rem(120),
        ...rem(800),
        ...rem(1200),
        ...rem(1600),
        ...rem(1900),
>>>>>>> 77874fe... WS #00: menu dropdown added.:packages/wingsuit/tailwind.config.js
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
    borderColor: ['responsive', 'first'],
    backgroundColor: ['responsive', 'hover', 'group-hover'],
    textDecoration: ['responsive', 'hover', 'group-hover'],
    textColor: ['responsive', 'hover', 'group-hover'],
    fontFamily: ['responsive', 'hover', 'focus'],
    fill: ['responsive', 'hover', 'focus'],
    spacing: ['responsive', 'last'],
  },
  plugins: [forms, typography],
};
