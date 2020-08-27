import { NextSeo } from 'next-seo';
import Container from '../components/container';
import Heading from '../components/primitives/heading';
import websiteConfig from '../config/website';

const { socialLinks } = websiteConfig;

const pageDescription = 'Contact Luis Contreras by Twitter, Instagram or by sending him an email.';

export default function ContactPage() {
  return (
    <>
      <NextSeo
        title="Contact"
        canonical={`${websiteConfig.siteUrl}/contact`}
        description={pageDescription}
        openGraph={{ description: pageDescription }}
      />
      <Container as="main" role="main">
        <Heading textColor="primary">Contact</Heading>

        <p>
          Hey! Looking to get in touch? don't be affraid to contact me!. If you'd like to contact
          me, here is how you can do it:
        </p>

        <ul>
          <li>
            DM me on Twitter{' '}
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              @devrasec
            </a>{' '}
            (preferably) or Instagram{' '}
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
              @luiscontreras.dev
            </a>
          </li>

          <li>
            Send me an email to <a href="mailto:hello@luiscontreras.dev">luis@luiscontreras.dev</a>
          </li>
        </ul>
      </Container>
    </>
  );
}
