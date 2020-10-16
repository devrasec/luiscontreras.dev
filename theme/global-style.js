import { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { normalize } from 'polished';

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
`;

export default GlobalStyle;
