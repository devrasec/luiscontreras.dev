import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Link from 'next/link';
import Image from 'next/image';
import { untilDesktop, tablet, mobilePlus, large } from '../lib/breakpoints';
import SocialLinks from './social-links';
import Button from './primitives/button';
import Heading from './primitives/heading';
import { fancyBg } from '../theme/mixins';

const Hero = styled.section`
  ${fancyBg};
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
      border: 3px solid ${themeGet('colors.secondary')};
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
        <Image
          src="/images/avatar@2x.jpg"
          layout="responsive"
          width="228"
          height="228"
          alt="Luis Contreras"
          loading="eager"
          priority
        />
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
