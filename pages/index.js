import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Layout from '../components/layout';
import FrontHero from '../components/front-hero';
import WritingCard from '../components/writing-card';
import Container from '../components/container';
import { desktop } from '../lib/breakpoints';

const Section = styled.section`
  margin: ${themeGet('space.lg')} 0;
  padding: 0 ${themeGet('space.default')};
  ${desktop} {
    margin: ${themeGet('space.xxl')} 0;
  }
`;

const HomePage = () => (
  <Layout>
    <FrontHero />
    <Container isBig>
      <Section>
        <WritingCard />
      </Section>
    </Container>
  </Layout>
);

export default HomePage;
