import { themeGet } from '@styled-system/theme-get';
import { NextSeo } from 'next-seo';
import Heading from '../../components/primitives/heading';
import Container from '../../components/container';
import { getAllTags, getPostsByTag } from '../../lib/posts';
import config from '../../config/website';
import PostTeaser from '../../components/post-teaser';

export default function TagPage({ tag, posts }) {
  const pageDescription = `List of posts tagged with ${tag}.`;
  return (
    <>
      <NextSeo
        title={`Posts tagged with "${tag}"`}
        canonical={`${config.siteUrl}/tag/${tag}`}
        description={pageDescription}
        openGraph={{
          description: pageDescription,
        }}
      />
      <Container>
        <Heading
          textColor="primary"
          looksLike="h3"
          css={`
            margin-bottom: ${themeGet('space.lg')};
          `}
        >
          Posts tagged with{' '}
          <span
            css={`
              color: ${themeGet('colors.secondary')};
            `}
          >
            "{tag}"
          </span>
        </Heading>

        <div>
          {posts.map(post => (
            <PostTeaser key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPostsByTag(params.tag);

  return {
    props: {
      tag: params.tag,
      posts,
    },
  };
}

export async function getStaticPaths() {
  const tags = await getAllTags();
  return {
    paths: tags.map(tag => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  };
}
