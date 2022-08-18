const forms = require('@tailwindcss/forms');
const colors = require('tailwindcss/colors');
const typography = require('@tailwindcss/typography')({
  modifiers: ['lg'],
});

module.exports = {
  important: false,
  darkMode: 'class',
  content: ['./source/**/*.twig', './source/**/*.yml', './apps/**/*.twig'],
  safelist: ['bg-black', 'object-cover'],
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
      typography: (theme) => ({
        dark: {
          css: {
            color: theme('colors.gray.100'),
            '[class~="lead"]': {
              color: theme('colors.gray.100'),
            },
            blockquote: {
              color: theme('colors.gray.100'),
            },
            strong: {
              color: theme('colors.gray.100'),
            },
            h2: {
              color: theme('colors.gray.100'),
            },
            h3: {
              color: theme('colors.gray.100'),
            },
            h4: {
              color: theme('colors.gray.100'),
            },
            a: {
              color: theme('colors.gray.100'),
              '&:hover': {
                color: theme('colors.gray.100'),
              },
            },
          },
        },
      }),
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
