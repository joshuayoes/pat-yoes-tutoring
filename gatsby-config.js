module.exports = {
  siteMetadata: {
    title: `Pat Yoes Online Tutoring`,
    author: {
      name: `Pat Yoes`,
      summary: `Pat has worked as a private tutor, public school teacher, and a tutoring business owner for over 30 years. He specializes in reading, math, writing, education counseling, and one-on-one tutoring.`,
    },
    description: `Pat Yoes has worked as a private tutor, public school teacher, and a tutoring business owner for over 30 years. He specializes in reading, math, writing, education counseling, and one-on-one tutoring.`,
    siteUrl: `http://patyoes.com`,
    social: {
      facebook: `patyoestutoring`
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-162011936-1`,
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '151607629468159',
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pat Yoes Online Tutoring`,
        short_name: `Yoes Online Tutoring`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#297B2E`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
