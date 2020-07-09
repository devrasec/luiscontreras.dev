import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Link from 'next/link';

import { untilDesktop, desktop, tablet, mobilePlus, large } from '../lib/breakpoints';
import SocialLinks from './social-links';
import Button from './button';

const Hero = styled.section`
  background: url('/images/hero-bg.jpg') no-repeat top center / cover;
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
    padding: 0 ${themeGet('space.default')};
  }

  h1 {
    font-size: ${themeGet('fontSizes.4')};
    ${mobilePlus} {
      font-size: ${themeGet('fontSizes.5')};
    }
    ${desktop} {
      font-size: ${themeGet('fontSizes.big')};
    }

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
      border: 3px solid ${themeGet('colors.primary')};
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

    button {
      margin-bottom: ${themeGet('space.default')};
    }

    ${mobilePlus} {
      flex-direction: row;
      button {
        margin-right: ${themeGet('space.default')};
        margin-bottom: 0;
      }
    }

    ${tablet} {
      justify-content: flex-start;
    }

    a {
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

  a {
    color: ${themeGet('colors.white')};

    &:hover {
      color: ${themeGet('colors.secondary')};
    }
  }
`;

const FrontHero = () => (
  <Hero>
    <HeroContent>
      <div className="hero-avatar">
        <img src="/images/avatar.jpg" srcSet="/images/avatar@2x.jpg 2x" alt="Luis Contreras" />
      </div>
      <div className="hero-intro">
        <h1>
          Hi, <span>I'm Luis</span>
        </h1>
        <p>
          Detail-oriented and passionate Software Engineer based in Stockholm, Sweden. Highly
          experienced in Javascript and React.
        </p>

        <SocialLinksStyled />

        <div className="hero-foot">
          <Button>Say Hello</Button>
          <Link href="/about">
            <a>Or click here to know more about me</a>
          </Link>
        </div>
      </div>
    </HeroContent>
  </Hero>
);

export default FrontHero;
