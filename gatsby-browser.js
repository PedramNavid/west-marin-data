// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
exports.onRouteUpdate = ({ prevLocation }, { trackPage, trackPageDelay = 50 }) => {

  function trackJitsuPage() {
    const delay = Math.max(0, trackPageDelay)

    window.setTimeout(() => {
      window.analytics && window.analytics.page(document.title);
    }, delay);
  }
  if (prevLocation && window.jitsuSnippetLoaded === false) {
    window.jitsuSnippetLoaded(() => {
      trackJitsuPage();
    });
  } else {
    trackJitsuPage();
  }
};
