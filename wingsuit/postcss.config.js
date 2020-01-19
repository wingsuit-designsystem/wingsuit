const purgecss =

module.exports = {
  plugins: [

    require('tailwindcss'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('postcss-pxtorem')({
      rootValue: 17,
    }),
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
