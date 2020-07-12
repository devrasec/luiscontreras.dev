import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { FaFeather, FaMicrophoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Layout from '../components/layout';
import FrontHero from '../components/front-hero';
import Container from '../components/container';
import { desktop } from '../lib/breakpoints';
import Card from '../components/card';
import PostTeaserBase from '../components/post-teaser';
import Button from '../components/button';
import TeaserHeading from '../components/styles/teaser-heading';
import PostDate from '../components/styles/post-date';

const PostTeaser = styled(PostTeaserBase)``;

const Section = styled.section`
  margin: ${themeGet('space.xl')} 0;
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

const TalkStyles = styled.div`
  margin-bottom: ${themeGet('space.xl')};

  .place {
    margin-top: ${themeGet('space.xs')};
    display: flex;
    align-items: center;
    color: ${themeGet('colors.primary')};

    svg {
      color: ${themeGet('colors.secondary')};
      margin-right: ${themeGet('space.xs')};
    }
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

const talks = [
  {
    _id: 'qeruifaiqeifyq',
    title: 'Better State handling in React Applications using XState',
    intro: 'How to use State Machines for handling state in your React components',
    date: 'Nov 23, 2019',
    eventLink: {
      name: 'Barcamp',
      url: 'https://barcamp.org.do/',
    },
    talkLink: 'https://www.youtube.com/watch?v=9P3sLqSiswE',
    place: 'Santo Domingo, Dominican Republic',
  },
  {
    _id: 'urruifqiqeiadf',
    title: 'Modern Web Application Development with React',
    intro:
      'A React workshop for beginners, the workshop took place at Local Hack Day Santo Domingo, an event organized by Major League Hacking.',
    date: 'Dec 1, 2018',
    eventLink: {
      name: 'localhackday.mlh.io',
      url: 'https://localhackday.mlh.io/',
    },
    place: 'Santo Domingo, Dominican Republic',
  },
];

const HomePage = () => (
  <Layout>
    <FrontHero />
    <Container isBig>
      <Section>
        <Card heading="Writing" icon={FaFeather}>
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

      <Section>
        <Card heading="Talks" icon={FaMicrophoneAlt}>
          {talks.map(({ _id, title, intro, date, eventLink, place, talkLink }) => (
            <TalkStyles key={_id}>
              <TeaserHeading>{title}</TeaserHeading>
              <PostDate>{date}</PostDate>
              <p>{intro}</p>
              <div>
                <strong>Event website:</strong>{' '}
                <a href={eventLink.url} target="_blank" rel="noreferrer noopener">
                  {eventLink.name}
                </a>
              </div>
              {talkLink && (
                <div>
                  <a href={talkLink} target="_blank" rel="noreferrer noopener">
                    Watch the recorded talk
                  </a>
                </div>
              )}
              <div className="place">
                <FaMapMarkerAlt /> {place}
              </div>
            </TalkStyles>
          ))}
        </Card>
      </Section>
    </Container>
  </Layout>
);

export default HomePage;
