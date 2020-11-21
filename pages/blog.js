import { NextSeo, BlogJsonLd } from 'next-seo';
import { format, parseISO } from 'date-fns';
import { getPosts } from '../lib/posts';
import Heading from '../components/primitives/heading';
import Container from '../components/container';
import PostTeaser from '../components/post-teaser';
import config from '../config/website';

const pageDescription =
  'Luis Contreras is blogging about Web Development with strong focus in Javascript, CSS, and React.';

export default function BlogPage({ allPostsData }) {
  const pageUrl = `${config.siteUrl}/blog`;
  const publishedDate = '2020-11-20'; // Hardcoded date of my first published post.

  return (
    <>
      <NextSeo
        title="Blog"
        canonical={pageUrl}
        description={pageDescription}
        openGraph={{
          description: pageDescription,
        }}
      />
      <BlogJsonLd
        url={pageUrl}
        description={pageDescription}
        title="Luis Contreras"
        authorName="Luis Contreras"
        datePublished={publishedDate}
        dateModified={format(parseISO(allPostsData[0].date), 'Y-M-d')}
        images={['https://pbs.twimg.com/profile_images/1324122242284965888/7xspob_j_400x400.jpg']}
      />
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
  const allPostsData = await getPosts();

  return {
    props: {
      allPostsData,
    },
  };
}
