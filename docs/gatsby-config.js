module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    siteTitle: 'Wingsuit',
    baseColor: '#e64074',
    linkPrefix: '/',
    docSections: {
      basics: ['/basics/introduction/'],
      guides: ['/guides/quick-start-guide/', '/guides/create-component-guide/'],
      configurations: [
        '/configurations/details/',
        '/configurations/custom-webpack-config/',
        '/configurations/preset-webpack/',
      ],
      components: [
        '/components/overview/',
        '/components/globals/',
        '/components/wingsuit/',
        '/components/twig/',
        '/components/presentation/',
      ],
      assets: ['/assets/overview/', '/assets/images/', '/assets/svg/', '/assets/javascript/'],
      documentation: ['/documentation/overview/', '/documentation/mdx/'],
      drupal: ['/drupal/ui_patterns/'],
      testing: ['/testing/manual-testing/'],
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
        writeKey: 'Yp6DgNNFnTRzWk9yDOLFdMyrbeGInjYp',
      },
    },
  ],
};
