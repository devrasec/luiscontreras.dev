const websiteConfig = {
  pageTitle: 'Luis Contreras',
  pageDescription:
    'Luis Contreras, Software Engineer in Stockholm. Sharing my knowledge of Web Development.',
  siteUrl: process.env.ENV === 'production' ? 'https://luiscontreras.dev' : 'http://localhost:3000',
  socialLinks: {
    twitter: 'https://twitter.com/devrasec/',
    github: 'https://github.com/devrasec/',
    linkedin: 'https://www.linkedin.com/in/luiscontreras26/',
    instagram: 'https://www.instagram.com/luiscontreras.dev/',
  },
  ga: {
    trackingId: 'G-Q2PLP3GS06',
  },
};

export default websiteConfig;
