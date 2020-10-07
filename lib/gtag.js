import config from '../config/website';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = url => {
  if (!window.gtag) return;
  window.gtag('config', config.ga.trackingId, {
    page_path: url,
  });
};
