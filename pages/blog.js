import { NextSeo } from 'next-seo';
import { getAllPosts } from '../lib/posts';
import Heading from '../components/primitives/heading';
import Container from '../components/container';
import PostTeaser from '../components/post-teaser';

export default function BlogPage({ allPostsData }) {
  return (
    <>
      <NextSeo title="Blog" />
      <Container>
        <Heading textColor="primary">Blog</Heading>
        <div>
          {allPostsData.length ? (
            allPostsData.map(post => <PostTeaser post={post} key={post.id} />)
          ) : (
            <p>
              I haven't written any post yet.{' '}
              <span role="img" aria-label="sad">
                &#128532;
              </span>
            </p>
          )}
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = await getAllPosts();

  return {
    props: {
      allPostsData,
    },
  };
}
