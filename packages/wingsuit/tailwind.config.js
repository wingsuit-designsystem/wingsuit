const rem = (px) => ({ [px]: `${px / 16}rem` });
const remVal = (px) => `${px / 16}rem`;

module.exports = {
  important: false,
  purge: {
    content: ['./source/**/*.twig', './apps/**/*.twig'],
    options: {
      whitelist: ['bg-red-500', 'px-4'],
    },
  },
  theme: {
    fontFamily: {
      serif: ['SourceSerif', '-apple-system', 'BlinkMacSystemFont'],
      sans: ['Roboto', 'sans-serif'],
    },
    fontSize: {
      // Final mobile:
      ...rem(13),
      ...rem(28),
      ...rem(36),
    },
    maxWidth: {
      none: 'none',
      container: remVal(1200),
      xs: remVal(672),
      sm: remVal(700),
      md: remVal(960),
      lg: remVal(1600),
    },
    colors: {
      transparent: 'transparent',
      black: '#222222',
      white: '#FFFFFF',
      green: '#deede8',
      blue: '#97B5BD',
      primary: '#fcaca9',
      secondary: '#77b88f',
      success: '#e39b98',
      warning: '#c98987',
      disabled: '#f7f7f7',
      gray: {
        xxlight: '#f5f5f5',
        xlight: '#cecece',
        light: '#9b9b9b',
        xmedium: '#aaaaaa',
        medium: '#9e9e9e',
        dark: '#4a4a4a',
      },
    },
  },
  variants: {
    opacity: ['responsive'],
    borderWidth: ['responsive', 'hover', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'group-hover'],
    textDecoration: ['responsive', 'hover', 'group-hover'],
    textColor: ['responsive', 'hover', 'group-hover'],
    fontFamily: ['responsive', 'hover', 'focus'],
  },
};
