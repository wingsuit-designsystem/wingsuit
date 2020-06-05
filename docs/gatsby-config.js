module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    siteTitle: 'Wingsuit',
    baseColor: '#e64074',
    linkPrefix: '/',
    docSections: {
      basics: ['/basics/introduction/'],
      guides: ['/guides/quick-start-guide/'],
      configurations: ['/configurations/details/', '/configurations/custom-webpack-config/'],
      components: ['/components/overview/', '/components/wingsuit/', '/components/twig/'],
      testing: ['/testing/manual-testing/'],
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        repoUrl: 'https://github.com/storybookjs/storybook',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 690,
            },
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-segment',
      options: {
        writeKey: 'AvvBObOmHaEMqfub8JJUXq5umjsuaqS8',
      },
    },
  ],
};
