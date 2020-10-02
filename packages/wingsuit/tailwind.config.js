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
    extend: {
      maxWidth: {
        none: 'none',
        ...rem(120),
        ...rem(800),
        ...rem(1200),
        ...rem(1600),
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
  },
};
