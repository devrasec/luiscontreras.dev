import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Layout from '../components/layout';
import FrontHero from '../components/front-hero';
import Container from '../components/container';
import { desktop } from '../lib/breakpoints';
import Card from '../components/card';
import PostTeaserBase from '../components/post-teaser';
import Button from '../components/button';

const PostTeaser = styled(PostTeaserBase)``;

const Section = styled.section`
  margin: ${themeGet('space.lg')} 0;
  padding: 0 ${themeGet('space.default')};
  ${desktop} {
    margin: ${themeGet('space.xxl')} 0;
  }
`;

const TeaserListStyles = styled.div`
  ${PostTeaser} {
    margin-bottom: ${themeGet('space.xl')};
  }

  .card-footer {
    text-align: center;
  }
`;

const posts = [
  {
    _id: 'adfqqaduafdfauqeh',
    title: 'When should you be using Web Workers?',
    intro:
      'Keeping the frame rate stable is vital for virtual reality applications. Off-main-thread architecture can help ensure that the frames keep shipping.',
    date: 'May 8, 2020',
  },
  {
    _id: 'adfqqaduaqequfiqn',
    title: 'How to Build a Consistent Content Creation Habit',
    intro:
      'If your goal is to be more consistent with content, your instinct may be to make a plan. But trying to plan your way to a creative habit is a mistake.',
    date: 'May 8, 2020',
  },
];

const HomePage = () => (
  <Layout>
    <FrontHero />
    <Container isBig>
      <Section>
        <Card heading="Writing">
          <TeaserListStyles>
            {posts.map(post => (
              <PostTeaser key={post._id} post={post} />
            ))}
            <div className="card-footer">
              <Button>All Posts</Button>
            </div>
          </TeaserListStyles>
        </Card>
      </Section>
    </Container>
  </Layout>
);

export default HomePage;
