const useJit = true;
const tailwind = useJit ? require('@tailwindcss/jit') : require('tailwindcss');
const nested = require('postcss-nested');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [tailwind, nested, autoprefixer],
};
