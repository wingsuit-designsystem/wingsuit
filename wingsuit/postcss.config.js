module.exports = {
  plugins: [

    require('tailwindcss'),
    require('postcss-nested'),
    require('autoprefixer'),
    process.env.NODE_ENV === 'production'
      ? require('@fullhuman/postcss-purgecss')({

        // Specify the paths to all of the template files in your project
        content: [
          './source/**/*.twig',
          './apps/**/*.twig',
          // etc.
        ],

        // Include any special characters you're using in this regular expression
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      }): null,

  ]
};
