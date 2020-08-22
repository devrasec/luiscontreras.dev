import config from './config/website';

const { socialLinks, pageTitle: title, pageDescription: description, siteUrl } = config;

export default {
  title,
  titleTemplate: '%s - Luis Contreras',
  description,
  canonical: siteUrl,
  dangerouslySetAllPagesToNoIndex: true, // Remove before going to production
  dangerouslySetAllPagesToNoFollow: true, // Remove before going to production
  openGraph: {
    title: 'Luis Contreras - Software Engineer',
    description,
    url: siteUrl,
  },
  twitter: {
    handle: socialLinks.twitter,
    cardType: 'summary',
  },
};
