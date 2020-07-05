import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { untilDesktop, desktop, tablet, mobilePlus } from '../lib/breakpoints';

const HeroStyles = styled.section`
  height: calc(100vh - 60px);
  background: url('/images/hero-bg.jpg') no-repeat top center / cover;
  color: #ffffff;
  min-height: 560px;
  padding-top: 58px;
  ${tablet} {
    padding-top: 148px;
    height: calc(100vh - 80px);
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
`;

const FrontHero = () => (
  <HeroStyles>
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
      </div>
    </HeroContent>
  </HeroStyles>
);

export default FrontHero;
