/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Saurabh Bomble',
    description:
      'Saurabh Bomble is a software engineer with expertise in end-to-end web and app development with 2-3 years of experience and a Bachelors Degree focused in Computer Science.',
    siteUrl: 'https://saurabhbomble.me', // No trailing slash allowed!
    image: '/og.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@Saurabh87807951',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Saurabh Bomble',
        short_name: 'Saurabh Bomble',
        start_url: '/',
        background_color: '#0d0d0d',
        theme_color: '#27e7ca',
        display: 'minimal-ui',
        icon: 'static/images/sb-logos/logo-6.svg',
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-165025433-1',
      },
    },
  ],
};
