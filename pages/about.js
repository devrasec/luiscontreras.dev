import Link from 'next/link';
import Layout from '../components/layout';
import Heading from '../components/primitives/heading';
import Container from '../components/container';

const AboutPage = () => (
  <Layout>
    <Container as="main" role="main">
      <Heading textColor="primary">About</Heading>

      <p>
        Hello, I'm Luis Contreras. I'm a software engineer. I was born in 1988 and grew up in
        Dominican Republic, currently living in Stockholm, Sweden. After graduating secondary
        school, I went to UNAPEC where I obtained my Bachelor's Degree in Software Engineering.
      </p>

      <p>
        During my 10+ year career as a developer, I’ve worked for <strong>Rubycom</strong>,{' '}
        <strong>DICOM</strong>, <strong>Instacarro</strong>, <strong>Iban</strong>,{' '}
        <strong>Quicksort AB</strong>. I’m currently working as a Full Stack Web Developer at Aller
        Media AB.
      </p>

      <p>
        Enough of me! If you have something to discuss with me, feel free to{' '}
        <Link href="/contact">
          <a>contact me</a>
        </Link>{' '}
        or to reach out on{' '}
        <a href="https://twitter.com/devrasec" rel="noopener noreferrer" target="_blank">
          Twitter
        </a>
        .
      </p>
    </Container>
  </Layout>
);

export default AboutPage;
