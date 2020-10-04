import config from '../config/website';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = url => {
  window.gtag('config', config.ga.trackingId, {
    page_path: url,
  });
};
