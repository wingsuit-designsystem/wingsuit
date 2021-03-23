const tailwind = require('tailwindcss');
const nested = require('postcss-nested');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [tailwind, nested, autoprefixer],
};
