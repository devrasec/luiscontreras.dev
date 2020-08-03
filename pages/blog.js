import Layout from '../components/layout';
import { getAllPosts } from '../lib/posts';
import Heading from '../components/primitives/heading';
import Container from '../components/container';
import PostTeaser from '../components/post-teaser';

export default function BlogPage({ allPostsData }) {
  return (
    <Layout>
      <Container>
        <Heading textColor="primary">Blog</Heading>

        <div>
          {allPostsData.map(post => (
            <PostTeaser post={post} key={post.id} showReadmore />
          ))}
        </div>
      </Container>
    </Layout>
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
