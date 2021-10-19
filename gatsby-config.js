module.exports = {
  siteMetadata: {
    title: `Youngki Nam's Homepage`,
    description: `Fullstack developer, experienced in MERN, sql database, docker`,
    author: `@ykn9080`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    logo: `${__dirname}/src/images/yknam1.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `works`,
        path: `${__dirname}/src/works`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `interests`,
        path: `${__dirname}/src/interests`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `youngkinam-homepage`,
        short_name: `home`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Noto+Sans+KR\:100,300,400,500,700,900`],
        display: "swap",
      },
    },
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        mediaTypes: [`text/markdown`, `text/x-markdown`],

        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
            },
          },
          `gatsby-remark-embed-video`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        preset: "@theme-ui/preset-funk",
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // defaultCrumb: optional To create a default crumb
        // see Click Tracking default crumb example below
        defaultCrumb: {
          location: {
            pathname: "/",
          },
          crumbLabel: "Home",
          crumbSeparator: " / ",
        },
        // usePathPrefix: optional, if you are using pathPrefix above
        usePathPrefix: "/blog",
      },
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: `2mzxuptpy7nt`,
    //     accessToken: `lPQ0DvZyum44g5h1A69-SOus6JO3Jnnj_v3DxVKfMc8`,
    //   },
    // },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
