import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Link from 'next/link';
import { untilDesktop, tablet, mobilePlus, large } from '../lib/breakpoints';
import SocialLinks from './social-links';
import Button from './button';
import Heading from './primitives/heading';

const Hero = styled.section`
  /* background: url('/images/hero-bg.jpg') no-repeat top center / cover; */
  background-color: #1b325f;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%231b325f' cx='50' cy='0' r='50'/%3E%3Cg fill='%23293565' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%2336376b' cx='50' cy='100' r='50'/%3E%3Cg fill='%2343396f' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23503a73' cx='50' cy='200' r='50'/%3E%3Cg fill='%235d3c77' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%236a3d79' cx='50' cy='300' r='50'/%3E%3Cg fill='%23773d7b' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%23843e7c' cx='50' cy='400' r='50'/%3E%3Cg fill='%23903f7c' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%239c407b' cx='50' cy='500' r='50'/%3E%3Cg fill='%23a84179' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%23b44277' cx='50' cy='600' r='50'/%3E%3Cg fill='%23be4473' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%23c84770' cx='50' cy='700' r='50'/%3E%3Cg fill='%23d24b6b' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23da5066' cx='50' cy='800' r='50'/%3E%3Cg fill='%23e15561' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%23e85c5b' cx='50' cy='900' r='50'/%3E%3Cg fill='%23ee6355' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23f26b4e' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: contain;
  color: ${themeGet('colors.white')};
  padding-top: 58px;
  padding-bottom: ${themeGet('space.lg')};
  ${tablet} {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  ${large} {
    padding-top: 148px;
    min-height: calc(100vh - 80px);
  }
`;

const HeroContent = styled.div`
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  ${untilDesktop} {
    padding: 0 ${themeGet('gap')};
  }

  h1 {
    span {
      color: ${themeGet('colors.secondary')};
    }
  }

  .hero-avatar {
    flex: 1;
    margin-bottom: ${themeGet('space.lg')};
    max-width: 160px;
    ${tablet} {
      margin-bottom: 0;
      margin-right: ${themeGet('space.lg')};
      max-width: 228px;
    }

    img {
      border-radius: 50%;
      display: block;
      height: 160px;
      width: 160px;
      border: 3px solid ${themeGet('colors.secondary')};
      ${tablet} {
        height: 228px;
        width: 228px;
      }
    }
  }

  .hero-intro {
    text-align: center;
    ${tablet} {
      flex: 1;
      text-align: left;
    }

    p {
      text-shadow: 0px 0px 10px #000000;
      ${tablet} {
        font-size: ${themeGet('fontSizes.2')};
      }
    }
  }

  .hero-foot {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;

    ${Button} {
      margin-bottom: ${themeGet('space.default')};
    }

    ${mobilePlus} {
      flex-direction: row;
      ${Button} {
        margin-right: ${themeGet('space.default')};
        margin-bottom: 0;
      }
    }

    ${tablet} {
      justify-content: flex-start;
    }

    .contact-link {
      color: ${themeGet('colors.white')};
      font-weight: ${themeGet('fontWeights.bold')};
      text-decoration: underline;
      &:hover {
        color: ${themeGet('colors.secondary')};
      }
    }
  }
`;

const SocialLinksStyled = styled(SocialLinks)`
  padding-top: 0;
  margin-bottom: ${themeGet('space.md')};
  ${tablet} {
    justify-content: flex-start;
  }
`;

const FrontHero = () => (
  <Hero>
    <HeroContent>
      <div className="hero-avatar">
        <img src="/images/avatar.jpg" srcSet="/images/avatar@2x.jpg 2x" alt="Luis Contreras" />
      </div>
      <div className="hero-intro">
        <Heading textColor="white" isBig>
          Hi, <span>I'm Luis</span>
        </Heading>
        <p>
          Detail-oriented and passionate Software Engineer based in Stockholm, Sweden. Highly
          experienced in Javascript and React.
        </p>

        <SocialLinksStyled iconColor="white" />

        <div className="hero-foot">
          <Link href="/contact" passHref>
            <Button as="a" variant="secondary">
              Say Hello
            </Button>
          </Link>
          <Link href="/about">
            <a className="contact-link">Or click here to know more about me</a>
          </Link>
        </div>
      </div>
    </HeroContent>
  </Hero>
);

export default FrontHero;
