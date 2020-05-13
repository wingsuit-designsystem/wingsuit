const tailwind = require('tailwindcss');
const nested = require('postcss-nested');
const autoprefixer = require('autoprefixer');
const purgeCss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    tailwind,
    nested,
    autoprefixer,
    process.env.NODE_ENV === 'production'
      ? purgeCss({
          // Specify the paths to all of the template files in your project
          content: ['./source/**/*.twig', './apps/**/*.twig'],
          // Include any special characters you're using in this regular expression
          defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        })
      : null,
  ],
};
