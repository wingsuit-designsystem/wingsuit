const rem = (px) => ({ [px]: `${px / 16}rem` });

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
      ...rem(800),
      ...rem(1200),
      ...rem(1600),
    },
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
      green: '#deede8',
      blue: '#4299E1',
      primary: '#fcaca9',
      success: '#68D391',
      yellow: '#F6E05E',
      gray: {
        xlight: '#EDF2F7',
        light: '#CBD5E0',
        medium: '#718096',
        dark: '#2D3748',
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
