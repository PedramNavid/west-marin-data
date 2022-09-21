import type { GatsbyConfig } from "gatsby";
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const config: GatsbyConfig = {
  siteMetadata: {
    title: `West Marin Data`,
    siteUrl: `https://westmarindata.com`,
    description: `West Marin Data Consulting by Pedram Navid`
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-rudderstack`,
      options: {
        prodKey: process.env.RUDDERSTACK_PRODUCTION_WRITE_KEY,
        devKey: process.env.RUDDERSTACK_DEV_WRITE_KEY,
        trackPage: true,
        dataPlaneUrl: 'https://pedramnavilsb.dataplane.rudderstack.com'
      }
    },

    "gatsby-plugin-styled-components",
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    }]
};

export default config;
