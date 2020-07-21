import Link from 'next/link';
import Layout from '../components/layout';
import Heading from '../components/primitives/heading';
import Container from '../components/container';

const AboutPage = () => (
  <Layout>
    <Container
      as="main"
      role="main"
      css={`
        margin-bottom: 160px;
      `}
    >
      <Heading textColor="primary">About</Heading>

      <Heading as="h2" looksLike="h4" textColor="secondary">
        software engineer, javascript lover, sporadic designer, sports addict, husband, and dad.
      </Heading>

      <p>
        Hello! I'm Luis Contreras. I'm a software engineer. I was born in 1988 and grew up in
        Dominican Republic, currently living in Stockholm, Sweden. After graduating secondary
        school, I went to UNAPEC where I obtained my Bachelor's Degree in Software Engineering.
      </p>

      <p>
        During my 10+ year career as a developer, I’ve worked for <strong>Rubycom</strong>,{' '}
        <strong>DICOM</strong>, <strong>Instacarro</strong>, <strong>Iban</strong>,{' '}
        <strong>Quicksort AB</strong>, helping them to ship awesome products. I’m currently working
        as a Full Stack Web Developer at Aller Media AB.
      </p>

      <p>
        I'm in love with web development and have good knowledge of <strong>Javascript</strong>,{' '}
        <strong>HTML</strong> and <strong>CSS</strong>. I love <strong>React</strong> and all its
        ecosystem and also like to write performant, clean, and testable code. If you want to see my
        CV, please go to my{' '}
        <a
          href="https://www.linkedin.com/in/luiscontreras26/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn profile
        </a>{' '}
        {/* TODO: Add link to my downloadable CV */}
        or <a href="#">download it here</a>
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
