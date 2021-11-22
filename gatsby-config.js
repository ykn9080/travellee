module.exports = {
  siteMetadata: {
    title: `Youngki Nam's Homepage`,
    description: `Fullstack developer, experienced in MERN, sql database, docker`,
    author: `@ykn9080`,
    siteUrl: `https://ykn9080.github.io`,
    logo: `${__dirname}/src/images/yknam1.jpg`,
  },
  pathPrefix: "/",
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
        path: `${__dirname}/src/works/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `interests`,
        path: `${__dirname}/src/interests/`,
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
        fonts: [
          `Yeseva One`,
          `Montserrat`,
          `Inconsolata`,
          `monospace`,
          `Maven Pro`,
          `Noto+Sans+KR\:100,300,400,500,700,900`,
        ],
        display: "swap",
      },
    },
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        mediaTypes: [`text/markdown`, `text/x-markdown`],
        defaultLayouts: {
          default: require.resolve(`./src/components/Layout.js`),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
            },
          },
          {
            resolve: "gatsby-remark-image-attributes",
            options: {
              // dataAttributes: false
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
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `ko`,
        configPath: require.resolve(`./i18n/config.json`),
      },
    },
    {
      resolve: `gatsby-theme-i18n-react-intl`,
      options: {
        defaultLocale: `./i18n/react-intl/ko.json`,
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
    `gatsby-plugin-offline`,
  ],
}
