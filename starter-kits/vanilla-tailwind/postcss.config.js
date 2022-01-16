const tailwind = require('tailwindcss');
const nested = require('tailwindcss/nesting');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [tailwind, nested, autoprefixer],
};
