import config from './config/website';

const { socialLinks, pageTitle: title, pageDescription: description, siteUrl } = config;

export default {
  title,
  titleTemplate: '%s - Luis Contreras',
  description,
  canonical: siteUrl,
  openGraph: {
    title: 'Luis Contreras - Software Engineer',
    description,
    url: siteUrl,
    site_name: 'Luis Contreras',
    type: 'website',
  },
  twitter: {
    handle: socialLinks.twitter,
    cardType: 'summary',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'Software Engineer, Web Development, Javascript, CSS, HTML, React',
    },
  ],
};
