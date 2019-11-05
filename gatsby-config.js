module.exports = {
  siteMetadata: {
    title: `radibit`,
    description: `Web accessibility and performance engineering.`,
    author: `@radibit`,
    siteUrl: 'https://radibit.com',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `radibit`,
        short_name: `radibit`,
        start_url: `/`,
        background_color: `#1D2536`,
        theme_color: `#1D2536`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon-white.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
