const forms = require('@tailwindcss/forms');
const colors = require('tailwindcss/colors');
const typography = require('@tailwindcss/typography')({
  modifiers: ['lg', '2xl', 'dark'],
});

module.exports = {
  content: ['./source/**/*.twig', './source/**/*.yml', './apps/**/*.twig'],
  important: false,
  mode: 'jit',
  darkMode: 'class',

  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      code: {
        light: '#f2f2f2',
        dark: '#21252b',
      },
      video: {
        500: '#eef1f8',
      },
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
      orange: colors.orange,
      yellow: colors.yellow,
    },
    extend: {
      typography: (theme) => ({
        '2xl': {
          css: {
            p: {
              fontWeight: 500,
            },
            h2: {
              fontSize: '3rem',
            },
          },
        },
        lg: {
          css: {
            p: {
              fontWeight: 500,
            },
            h1: {
              fontSize: '2.5rem',
            },
          },
        },

        DEFAULT: {
          css: {
            color: theme('colors.black'),
            '[class~="lead"]': {
              color: theme('colors.black'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.white'),
            '[class~="lead"]': {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.white'),
            },
          },
        },
      }),
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
      spacing: {
        18: '4.5rem',
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
