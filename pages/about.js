import Link from 'next/link';
import { NextSeo } from 'next-seo';
import config from '../config/website';
import Heading from '../components/primitives/heading';
import Container from '../components/styles/container';

const pageDescription = 'Get to know everything about Luis Contreras.';

const AboutPage = () => (
  <>
    <NextSeo
      title="About"
      canonical={`${config.siteUrl}/about`}
      description={pageDescription}
      openGraph={{
        description: pageDescription,
      }}
    />
    <Container as="main" role="main">
      <Heading textColor="primary">About</Heading>

      <Heading as="h2" looksLike="h4" textColor="secondary">
        software engineer, javascript lover, sporadic designer, sports addict, husband, and dad.
      </Heading>

      <p>
        Hello! I'm Luis Contreras, a software engineer born in 1988 and grew up in the Dominican
        Republic, currently living in Stockholm, Sweden. After graduating from High School, I went
        to UNAPEC where I graduated with a Bachelor's degree in Information Systems.
      </p>

      <p>
        During my 10+ year career as a professional developer, I’ve worked for{' '}
        <strong>Rubycom</strong>, <strong>DICOM</strong>, <strong>Instacarro</strong>,{' '}
        <strong>Iban</strong>, <strong>Quicksort</strong>, <strong>Aller Media</strong>, helping
        them to ship awesome products. Currently, I’m working as a Software Engineer at{' '}
        <a href="https://klarna.com/">Klarna</a>.
      </p>

      <p>
        I'm in love with web development and have strong knowledge of <strong>Javascript</strong>,{' '}
        <strong>HTML</strong> and <strong>CSS</strong>. I love <strong>React</strong> and all its
        ecosystem and also like to write performant, clean, and testable code. If you want to see my
        CV, please go to my{' '}
        <a href="https://www.linkedin.com/in/luiscontreras26/">LinkedIn profile</a>.
      </p>

      <p>
        When I'm not coding, I'm either watching baseball games, reading, playing video games or
        spending great times with my family.
      </p>

      <p>
        Enough of me! If you have something to discuss with me, feel free to{' '}
        <Link href="/contact">
          <a>contact me</a>
        </Link>{' '}
        or reach out on <a href="https://twitter.com/devrasec">Twitter</a>.
      </p>
    </Container>
  </>
);

export default AboutPage;
