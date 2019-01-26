const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: `RadiBit`,
    description: `Web performance engineering and digital accessibility consultancy.`,
    author: `@radibit`,
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
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ['> 5%']
          }),
        ],
        precision: 8,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RadiBit`,
        short_name: `RadiBit`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
