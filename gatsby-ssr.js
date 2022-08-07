// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
import React from "react";

export function onRenderBody({ setHeadComponents }, pluginOptions) {
  const {
    trackPage,
    prodKey,
    devKey,
  } = pluginOptions;

  const host = 'https://t.jitsu.com/s/lib.js'
  const key = process.env.GATSBY_JITSU_API_KEY
  const snippet = `window.jitsu = window.jitsu || (function(){(window.jitsuQ = window.jitsuQ || []).push(arguments);})`

  // only render snippet if write key exists
  if (key) {
    setHeadComponents([
      <script key="plugin-jitsu" defer src={host} data-key={key} data-init-only="false"></ script>,
      <script dangerouslySetInnerHTML={{ __html: snippet }}></script>
    ]);
  }
};
