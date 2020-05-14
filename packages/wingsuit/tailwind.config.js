module.exports = {
  important: false,
  theme: {
    fontFamily: {
      sans: ['SourceSans', '-apple-system', 'BlinkMacSystemFont'],
    },
    colors: {
      transparent: 'transparent',
      black: '#222222̣̣̣',
      white: '#FFFFFF',
      red: '#D6ABAE',
      beige: '#E7C689',
      balzac_blue: '#97b5bd',
      yellow: '#e7c78a',
      blue: '#97B5BD',
      primary: '#fcaca9',
      secondary: '#77b88f',
      success: '#e39b98',
      warning: '#c98987',
      disabled: '#f7f7f7',
      gray: {
        xxlight: '#F0F0F0',
        xlight: '#cecece',
        light: '#9b9b9b',
        xmedium: '#aaaaaa',
        medium: '#9e9e9e',
        dark: '#4a4a4a',
      }
    },
  },
  variants: {
    opacity: ['responsive'],
    borderWidth: ['responsive', 'hover', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'group-hover'],
    textDecoration: ['responsive', 'hover', 'group-hover'],
    textColor: ['responsive', 'hover', 'group-hover'],
  },
};
