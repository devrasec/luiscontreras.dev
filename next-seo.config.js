import config from './config/website';

const { socialLinks, pageTitle: title, pageDescription: description } = config;

export default {
  title,
  titleTemplate: '%s - Luis Contreras',
  description,
  dangerouslySetAllPagesToNoIndex: true, // Remove before going to production
  dangerouslySetAllPagesToNoFollow: true, // Remove before going to production
  openGraph: {
    title: 'Luis Contreras - Software Engineer',
    description,
    url: 'https://luiscontreras.dev',
  },
  twitter: {
    handle: socialLinks.twitter,
    cardType: 'summary',
  },
};
