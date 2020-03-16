module.exports = {
  pathPrefix: "/edgeflex",
  siteMetadata: {
    title: `Gatsby Flexbox Tutorial`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `zbyszrom`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-googlemaps-static`,
      options: {
          key: `AIzaSyDdmxRzGzljPwCxNdc_FUKxj8xMDC79nss`,
          center: `Warsaw. Poland`,
      },
  },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`, 
  ],
}
