import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Container from '../components/container';
import Heading from '../components/primitives/heading';

export default function Page404() {
  return (
    <>
      <NextSeo title="Not Found" />
      <Container>
        <Heading
          textColor="primary"
          looksLike="h3"
          css={`
            text-transform: uppercase;
          `}
        >
          404 Page Not Found
        </Heading>

        <p>Ooops, you're in the wrong place.</p>
        <p>
          Go to the{' '}
          <Link href="/">
            <a>homepage</a>
          </Link>
        </p>
        <p>
          If you think this is not right, please{' '}
          <Link href="/contact">
            <a>contact me</a>
          </Link>
        </p>
      </Container>
    </>
  );
}
