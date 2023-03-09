/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      // Source plugins pull data from external sources into Gatsby’s GraphQL data layer
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        // on build, Gatsby will look for a folder called blog in the root of the project & adds all files to data layer
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp"
  ],
};
