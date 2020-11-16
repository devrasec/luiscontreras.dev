import { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { normalize } from 'polished';
import { tablet } from '../lib/breakpoints';

const GlobalStyle = createGlobalStyle`
  ${normalize()};

  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: ${themeGet('shadows.outline')};
  }

  ::selection {
    background-color: ${themeGet('colors.secondary')};
    color: ${themeGet('colors.primary')};
  }

  html,
  body {
    height: 100%;
  }

  html {
    font-size: 100%;
  }

  body {
    background-color: ${themeGet('bgColor', 'red')};
    font-family: ${themeGet('fonts.body')};
    font-weight: ${themeGet('fontWeights.body')};
    line-height: ${themeGet('lineHeights.body')};
    color: ${themeGet('textColor')};

    &.menu-open {
      overflow: hidden;
    }
  }

  a {
    color: ${themeGet('colors.blue.default')};
    text-decoration: underline;
  }

  p {
    margin-top: 0;
    margin-bottom: ${themeGet('lineHeights.heading')}rem;
  }

  small {
    font-size: ${themeGet('fontSizes.sm')};
  }

  b,
  strong {
    font-weight: ${themeGet('fontWeights.bold')};
  }

  img {
    vertical-align: middle;
  }

  figure {
    margin: 0;
  }

  #__next {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  blockquote {
    position: relative;
    margin: 2rem auto;
    padding: 1rem 1rem 1rem 3rem;
    border-left: 5px solid ${themeGet('colors.primary')};
    background: ${themeGet('colors.gray.light')};
    border-radius: 9px;

    ${tablet} {
      max-width: 650px;
    }

    p {
      font-style: italic;
    }

    &::before {
      content: open-quote;
      font-size: 6rem;
      font-family: ${themeGet('fonts.heading')};
      margin-right: 0.25em;
      line-height: 0;
      color: ${themeGet('colors.secondary')};
      position: absolute;
      left: 0;
      top: 0.5em;
    }
  }
`;

export default GlobalStyle;
