import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import omit from 'lodash/omit';
import Layout from '../../components/layout';
import { getAllPostSlugs, getPostBySlug } from '../../lib/posts';
import Heading from '../../components/primitives/heading';
import Container from '../../components/container';
import mdxComponents from '../../components/mdx-components';

export default function Post({ postData, mdxSource }) {
  const { title } = postData;
  const content = hydrate(mdxSource, mdxComponents);

  return (
    <Layout>
      <article>
        <Container as="header" isBig>
          <Heading
            css={`
              text-align: center;
            `}
          >
            {title}
          </Heading>
        </Container>

        <Container>{content}</Container>
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const postData = await getPostBySlug(params.slug);
  const mdxSource = await renderToString(postData.rawContent, mdxComponents);

  return {
    props: {
      postData: omit(postData, ['rawContent']),
      mdxSource,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();

  return {
    paths,
    fallback: false,
  };
}
