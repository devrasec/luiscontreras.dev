import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { FaFeather, FaMicrophoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import FrontHero from '../components/front-hero';
import Container from '../components/container';
import { desktop } from '../lib/breakpoints';
import Card from '../components/card';
import BasePostTeaser from '../components/post-teaser';
import Button from '../components/button';
import TeaserHeading from '../components/styles/teaser-heading';
import PostDate from '../components/styles/post-date';
import Heading from '../components/primitives/heading';
import { getLatestPosts } from '../lib/posts';

const PostTeaser = styled(BasePostTeaser)``;

const Section = styled.section`
  margin: ${themeGet('space.xl')} 0;
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

const ContactCalloutStyles = styled(Section)`
  background: ${themeGet('colors.gray.light')};
  text-align: center;
  padding: ${themeGet('space.xl')} 0;
  margin-bottom: 0;
  ${desktop} {
    padding: 160px 0;
    margin-bottom: 0;
  }

  ${Heading} {
    margin-top: 0;
    margin-bottom: ${themeGet('space.lg')};
  }
`;

const talks = [
  {
    _id: 'qeruifaiqeifyq',
    title: 'Better State handling in React Applications using XState',
    summary: 'How to use State Machines for handling state in your React components',
    date: 'Nov 23, 2019',
    eventLink: {
      name: 'Barcamp',
      url: 'https://barcamp.org.do/',
    },
    talkLink: 'https://www.youtube.com/watch?v=9P3sLqSiswE',
    place: 'Santiago, Dominican Republic',
  },
  {
    _id: 'urruifqiqeiadf',
    title: 'Modern Web Application Development with React',
    summary:
      'A React workshop for beginners, the workshop took place at Local Hack Day Santo Domingo, an event organized by Major League Hacking.',
    date: 'Dec 1, 2018',
    eventLink: {
      name: 'localhackday.mlh.io',
      url: 'https://localhackday.mlh.io/',
    },
    place: 'Santo Domingo, Dominican Republic',
  },
];

export default function HomePage({ latestPosts }) {
  return (
    <>
      <NextSeo title="Luis Contreras" titleTemplate="%s - Software Engineer" />
      <main role="main">
        <FrontHero />
        <Container isBig>
          <Section>
            <Card heading="Writing" icon={FaFeather}>
              <TeaserListStyles>
                {latestPosts.length ? (
                  latestPosts.map(post => <PostTeaser key={post.id} post={post} />)
                ) : (
                  <>
                    <p>
                      I'm getting started so bear with me{' '}
                      <span role="img" aria-label="Slightly Smiling Face">
                        🙂
                      </span>
                    </p>
                    <p>Soon it's gonna be a lot of posts here, I promise.</p>
                  </>
                )}
                <div className="card-footer">
                  <Link href="/blog" passHref>
                    <Button as="a">All Posts</Button>
                  </Link>
                </div>
              </TeaserListStyles>
            </Card>
          </Section>

          <Section>
            <Card heading="Talks" icon={FaMicrophoneAlt}>
              {talks.map(({ _id, title, summary, date, eventLink, place, talkLink }) => (
                <TalkStyles key={_id}>
                  <TeaserHeading>{title}</TeaserHeading>
                  <PostDate>{date}</PostDate>
                  <p>{summary}</p>
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
      </main>

      <ContactCalloutStyles as="div">
        <Container isBig>
          <Heading as="h2" looksLike="h3" textColor="blue.default">
            Have something to discuss with me or just want to say Hello?
          </Heading>
          <Link href="/contact" passHref>
            <Button as="a">Start a conversation</Button>
          </Link>
        </Container>
      </ContactCalloutStyles>
    </>
  );
}

export async function getStaticProps() {
  const latestPosts = await getLatestPosts();

  return {
    props: {
      latestPosts,
    },
  };
}
